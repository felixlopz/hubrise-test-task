import { TFunction } from 'i18next'

import { DocumentationContext } from '../../data/context'
import { FeedbackProps } from '../../components/documentation/Feedback'

export function getFeedbackOptions(
  t: TFunction,
  pageContext: DocumentationContext
): FeedbackProps['options'] {
  const { mdxNode } = pageContext

  return [
    {
      title: t('misc.feedback.documentation.options.send_email'),
      url: 'mailto:support@hubrise.com'
    },
    {
      title: t('misc.feedback.documentation.options.edit_page'),
      url: `https://github.com/HubRise/website/edit/master/content/${mdxNode.parent.relativePath}`
    }
  ]
}
