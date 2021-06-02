import * as React from 'react'
import { WrapRootElementNodeArgs } from 'gatsby'

import RootWrapper from '@components/RootWrapper'

const wrapRootElement = ({ element }: WrapRootElementNodeArgs): JSX.Element => (
  <RootWrapper>{element}</RootWrapper>
)

export default wrapRootElement
