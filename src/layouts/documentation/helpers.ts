import { DocumentationContext, IBreadcrumb } from '../../data/documentation'
import { MDXNode } from '../../data/mdx'
import { FeedbackProps } from '../../components/documentation/feedback'
import { TFunction } from 'i18next'

export function getBreadcrumbs(
  pageContext: DocumentationContext,
  currentMdxNode: MDXNode
): Array<IBreadcrumb> {
  const breadcrumbs: Array<IBreadcrumb> = pageContext.breadcrumbs.map(
    (breadcrumb, index, array) => {
      let path = array
        .slice(0, index + 1)
        .map((breadcrumb) => breadcrumb.label)
        .filter((part) => part !== '/')
        .join('/')
      path = path ? `/${path}/` : '/'

      return { label: breadcrumb.label, path }
    }
  )
  breadcrumbs.unshift({ label: currentMdxNode.frontmatter.title })
  return breadcrumbs
}

export function getFeedbackOptions(
  t: TFunction,
  pageContext: DocumentationContext
): FeedbackProps['options'] {
  return [
    {
      title: t('misc.feedback.documentation.options.send_email'),
      url: 'mailto:support@hubrise.com'
    },
    {
      title: t('misc.feedback.documentation.options.edit_page'),
      url: `https://github.com/HubRise/website/edit/master${pageContext.relativePath}`
    }
  ]
}
