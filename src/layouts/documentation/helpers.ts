import { TFunction } from 'i18next'

import { FeedbackProps } from '../../components/documentation/Feedback'

/**
 *
 * @param t
 * @param relativePath The path of the source file, relative to "content", with no leading slash
 * (eg "contributing/en/style-guide.md")
 */
export function getFeedbackOptions(
  t: TFunction,
  relativePath: string
): FeedbackProps['options'] {
  return [
    {
      title: t('misc.feedback.documentation.options.send_email'),
      url: 'mailto:support@hubrise.com'
    },
    {
      title: t('misc.feedback.documentation.options.edit_page'),
      url: `https://github.com/HubRise/website/edit/master/content/${relativePath}`
    }
  ]
}
