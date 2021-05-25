import * as React from 'react'
import cx from 'classnames'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'

import { NonStretchedImage } from '../non_stretched_image'
import Link from '../link'
import { generateKey } from '../utils'
import { Image, ImageSharpFluid } from '../../data/image'
import { MDXNode } from '../../data/mdx'

interface SectionNavigationProps {
  currentPath: string
  mdxNodes: Array<MDXNode>
  title: string
  logo?: Image<ImageSharpFluid>
}

const SectionNavigation = ({
  currentPath,
  mdxNodes,
  title,
  logo
}: SectionNavigationProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isFixed, setFixed] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isDesktop = useMedia('(min-width: 1024px)')
  const [currentTitle, setCurrentTitle] = React.useState(title)
  const {
    i18n: { language }
  } = useTranslation()

  React.useLayoutEffect(() => {
    if (isDesktop && isFixed) {
      setFixed(false)
    }
  }, [isDesktop, isFixed])

  React.useLayoutEffect(() => {
    function listener() {
      const newTitle = getCurrentTitle() || title
      if (currentTitle !== newTitle) {
        setCurrentTitle(newTitle)
      }

      const rect = containerRef.current!.getBoundingClientRect()
      const top = rect.top + window.pageYOffset

      if (top <= document.documentElement.scrollTop && !isFixed) {
        setFixed(true)
      }

      if (top > document.documentElement.scrollTop && isFixed) {
        setFixed(false)
      }
    }

    document.addEventListener('scroll', listener)

    return () => document.removeEventListener('scroll', listener)
  }, [setCurrentTitle, currentTitle, isDesktop, isFixed, title])

  return (
    <div
      className={cx(
        'section__sidebar',
        'section__sidebar_right',
        'section__sidebar_small-padding',
        'section__sidebar_sticky',
        isDesktop ? 'section__sidebar_desktop' : ''
      )}
    >
      {logo && (
        <div className="section__sidebar_logo">
          <NonStretchedImage alt={logo.name} {...logo.childImageSharp} />
        </div>
      )}
      <div ref={containerRef} className="section__sidebar-in-wrapper">
        <div
          className={cx(
            'section__sidebar-in',
            logo && 'section__sidebar_sticky',
            isFixed && 'section__sidebar_fixed'
          )}
        >
          <h5 className="content-nav__title">
            {isDesktop ? title : currentTitle || `Content`}
          </h5>
          <h5
            id="content-nav"
            className={cx(
              'content-nav__title',
              'content-nav__title_small',
              isExpanded ? 'content-nav__title_small_bottom_border' : ''
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {currentTitle || `Content`}
            <i
              className={cx(
                'fa',
                isExpanded ? 'fa-angle-up' : 'fa-angle-down',
                'content-nav__arrow'
              )}
            />
          </h5>
          <ul
            id="content-nav-list"
            className={cx(
              'content-nav__list',
              isExpanded ? '' : 'content-nav__list_hidden'
            )}
          >
            {sortMxdNodesByPosition(mdxNodes).map(
              ({ frontmatter, fields }, idx) => {
                const { slug, localeSlugMap } = fields
                const pageSlug = localeSlugMap[language] || slug
                const isCurrentPage = currentPath.endsWith(pageSlug)

                return (
                  <li
                    key={generateKey(frontmatter.title, idx)}
                    className={cx(
                      'content-nav__item',
                      isCurrentPage ? 'content-nav__item_active' : ''
                    )}
                  >
                    <Link
                      to={pageSlug}
                      className="content-nav__link"
                      onClick={
                        isDesktop ? undefined : () => setIsExpanded(false)
                      }
                    >
                      {frontmatter.title}
                    </Link>
                    {/*{isCurrentPage && headings.length !== 0 && (*/}
                    {/*  <ol className="content-sublist">*/}
                    {/*    {headings*/}
                    {/*      .filter(({ depth }) => depth === 2)*/}
                    {/*      .map(({ value: headingText }, idx) => (*/}
                    {/*        <li*/}
                    {/*          key={generateKey(headingText, idx)}*/}
                    {/*          className="content-sublist-item content-sublist-level-2"*/}
                    {/*        >*/}
                    {/*          <Link*/}
                    {/*            className={cx(*/}
                    {/*              'content-sublist-link',*/}
                    {/*              currentTitle === headingText ? 'active' : ''*/}
                    {/*            )}*/}
                    {/*            to={`#${createHeaderAnchor(headingText)}`}*/}
                    {/*            onClick={*/}
                    {/*              isDesktop*/}
                    {/*                ? undefined*/}
                    {/*                : () => setIsExpanded(false)*/}
                    {/*            }*/}
                    {/*          >*/}
                    {/*            <span className="content-sublist-text">*/}
                    {/*              {headingText}*/}
                    {/*            </span>*/}
                    {/*          </Link>*/}
                    {/*        </li>*/}
                    {/*      ))}*/}
                    {/*  </ol>*/}
                    {/*)}*/}
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SectionNavigation

const sortMxdNodesByPosition = (mdxNodes: Array<MDXNode>): Array<MDXNode> =>
  mdxNodes.sort(
    (node1, node2) =>
      (node1.frontmatter.position || Number.MAX_SAFE_INTEGER) -
      (node2.frontmatter.position || Number.MAX_SAFE_INTEGER)
  )

const getCurrentTitle = () => {
  const titleNodeList = Array.from(document.querySelectorAll('h2')).reverse()

  const currentTitleNode = titleNodeList.find((titleNode) => {
    const rect = titleNode.getBoundingClientRect()
    const nodeTop = rect.top + window.pageYOffset

    return nodeTop <= document.documentElement.scrollTop + 100
  })

  return currentTitleNode ? currentTitleNode.textContent : null
}
