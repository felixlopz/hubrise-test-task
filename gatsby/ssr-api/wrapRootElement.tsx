import * as React from 'react'
import { WrapRootElementNodeArgs } from 'gatsby'

import RootWrapper from '../../src/components/shared/RootWrapper'

const wrapRootElement = async ({
  element
}: WrapRootElementNodeArgs): Promise<JSX.Element> => (
  <RootWrapper>{element}</RootWrapper>
)

export default wrapRootElement
