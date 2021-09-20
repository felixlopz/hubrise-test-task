import * as React from "react"

import Link from "@components/Link"

interface AProps {
  href: string
  [key: string]: any
}

const A = ({ href, ...otherProps }: AProps): JSX.Element => <Link to={href} {...otherProps} />

export default A
