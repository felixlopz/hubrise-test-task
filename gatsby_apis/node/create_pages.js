const path = require('path')
const util = require('util')

const locales = require('../../src/i18n/locales')
const {
  parseFolderRecursively,
  getDirectoriesWithMdxFiles,
  getCustomizationFromFolder,
  getBreadcrumbs,
  getDefaultLocale
} = require('./utils')

const pathToLayouts = path.join(process.cwd(), `src/layouts`)
const pathToContent = path.join(process.cwd(), 'src', 'content')

const getLayout = (name) => path.join(pathToLayouts, `${name}.jsx`)

function normalizePath(filePath) {
  return filePath.split(path.sep).join(path.posix.sep)
}

/** Get content from MDX files of certain directory */
const getMdxContent = async (pathToDirectory, graphql) => {
  /** this glob matches all files inside directory */
  const glob = `"${pathToDirectory}/*"`

  const { data, errors } = await graphql(`
    query loadMdxDataForCreatingPages {
      allMdx (
        filter: { fileAbsolutePath: { glob: ${normalizePath(glob)} }}
      ) {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
            localeSlugMap {
              en
              fr
            }
          }
          frontmatter {
            layout
            gallery
            path_override
            meta {
              description
              title
            }
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  return data
}

const createPageFromMdxNode = async (node, locale, actions) => {
  console.log(
    'MdxNode:',
    util.inspect(node, { colors: true, depth: Number.POSITIVE_INFINITY })
  )
  const { id, fileAbsolutePath, frontmatter, fields } = node
  const { layout, meta } = frontmatter
  const currentDirectory = path.dirname(fileAbsolutePath)
  const parentDirectory = path.dirname(currentDirectory)
  const pathToImages = path.join(parentDirectory, 'images')
  const config = await getCustomizationFromFolder(currentDirectory)
  const breadcrumbs = await getBreadcrumbs(
    fileAbsolutePath,
    pathToContent,
    locale
  )

  const relativePath = normalizePath(
    path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
  )

  const slug =
    fields.localeSlugMap[locale.code] ||
    fields.localeSlugMap[getDefaultLocale().code]

  actions.createPage({
    /** Any valid URL. Must start with a forward slash */
    path: (locale.default ? `` : `/${locale.code}`) + slug,
    component: getLayout(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: normalizePath(`${currentDirectory}/*`) }
      },
      imagesFilter: {
        absolutePath: { glob: normalizePath(`${pathToImages}/**/*`) }
      },
      breadcrumbs,
      meta,
      config,
      lang: locale.code,
      relativePath
    }
  })
}

const getBlogPostList = async (graphql) => {
  const { data, errors } = await graphql(`
    query getPostList {
      allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              meta {
                description
                title
              }
              date
              layout
            }
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  return data
}

const getArchiveInfoFromPostDate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    isCurrentYear: date.getFullYear() === new Date().getFullYear()
  }
}

const generateArchiveList = (postDateList) => {
  const sortedDates = [...postDateList].sort((a, b) => b - a)
  const archiveMap = new Map()

  sortedDates.forEach((date) => {
    const archiveInfo = getArchiveInfoFromPostDate(date)
    const archiveKey = archiveInfo.isCurrentYear
      ? [archiveInfo.year, archiveInfo.month].join('_')
      : archiveInfo.year.toString()

    if (!archiveMap.has(archiveKey)) {
      archiveMap.set(archiveKey, archiveInfo)
    }
  })

  return Array.from(archiveMap.values())
}

const createBlogPages = async ({ actions, graphql }) => {
  const {
    allMdx: { edges: postList }
  } = await getBlogPostList(graphql)

  const archiveList = generateArchiveList(
    postList.map((post) => new Date(post.node.frontmatter.date))
  )

  const BLOG_PAGE_PATH = '/blog'

  Object.values(locales).forEach((locale) => {
    actions.createPage({
      path: (locale.default ? `` : locale.code) + BLOG_PAGE_PATH,
      component: getLayout('blog'),
      context: {
        config: null,
        lang: locale.code
      }
    })

    archiveList.forEach((archive) => {
      actions.createPage({
        path:
          (locale.default ? `` : locale.code) +
          (archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`),
        component: getLayout('blog'),
        context: {
          config: null,
          lang: locale.code,
          archive
        }
      })
    })
  })
}

const createRedirects = (actions) => {
  Object.values(locales).forEach((locale) => {
    const prefix = locale.default ? '' : `/${locale.code}`
    actions.createRedirect({
      fromPath: prefix + '/developers/api/',
      toPath: prefix + '/developers/api/general-concepts/',
      isPermanent: true,
      redirectInBrowser: true
    })
  })
}

const createPages = async ({ actions, graphql }) => {
  const parsedContent = await parseFolderRecursively({
    pathToFolder: process.cwd(),
    folderName: 'content'
  })
  // console.log(util.inspect(parsedContent, { colors: true, depth: 25 }))

  const directoriesWithMdxFiles = getDirectoriesWithMdxFiles(
    parsedContent,
    locales
  )

  console.log('directoriesWithMdxFiles', directoriesWithMdxFiles)

  const promises = directoriesWithMdxFiles.map((directory) =>
    getMdxContent(directory.path, graphql).then(
      ({ allMdx: { nodes: mdxNodes } }) =>
        Promise.all(
          mdxNodes.map((node) =>
            createPageFromMdxNode(node, directory.locale, actions)
          )
        )
    )
  )

  const blogPromise = createBlogPages({ actions, graphql })

  createRedirects(actions)
  try {
    await Promise.all([...promises, blogPromise])
  } catch (error) {
    console.error(`An error occurred while creating pages from MDX`, error)
  }
}

module.exports = createPages
