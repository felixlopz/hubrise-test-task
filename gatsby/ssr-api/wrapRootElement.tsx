import * as React from 'react'
import { WrapRootElementNodeArgs } from 'gatsby'

import RootWrapper from '../../src/components/RootWrapper'

const wrapRootElement = ({ element }: WrapRootElementNodeArgs): JSX.Element => (
  <RootWrapper>{element}</RootWrapper>
)

export default wrapRootElement
