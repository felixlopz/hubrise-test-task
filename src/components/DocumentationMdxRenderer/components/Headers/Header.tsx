"use client"

import * as React from "react"

import { createHeaderAnchor } from "@utils/misc"

import { Anchor, StyledHeader } from "./Styles"
import { HeaderLevel } from "./types"

const Header = ({ level, text }: { level: HeaderLevel; text: string }) => {
  const anchor = createHeaderAnchor(text)
  const Header = StyledHeader[level]

  return (
    <Header id={anchor}>
      {text}
      <Anchor href={`#${anchor}`} aria-label={`${text} permalink`} />
    </Header>
  )
}

export default Header
