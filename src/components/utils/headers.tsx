import { kebabify } from './index'
import React from 'react'

/**
 * Strips headers of chapters and subchapters, transforming
 * the remaining text into a kebabified anchor.
 *
 * @param   header - Header text.
 * @returns Header text without a leading chapter, kebabified.
 * @example
 *   1.2. Retrieve order => retrieve-order
 */
export function createHeaderAnchor(header: string): string {
  // Detects leading chapter numbers.
  const regex = /^[\d.]+\s/

  return header.match(regex)
    ? kebabify(header.replace(regex, ``))
    : kebabify(header)
}


/**
 * Defines custom h2-h3 headers with attached anchors.
 * Intended for replacing default MDX components.
 *
 * @returns Object containing specified headers as React elements.
 */
export function generateHeaders(headers: any[]): object {
  return headers.reduce((obj, header) => {
    obj[header] = ({ children: headerText }) => {
      const headerAnchor = createHeaderAnchor(headerText)

      return React.createElement(
        header,
        { id: headerAnchor },
        <>
          {headerText}
          <a
            href={`#${headerAnchor}`}
            arial-label={`${headerText} permalink`}
          />
        </>
      )
    }

    return obj
  }, {})
}
