import styled from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin, sizes } from "@utils/styles"

export const List = styled.ul`
  max-width: ${sizes.maxWidth};
  margin: calc(${sizes.blockVerticalPadding} - 1rem) auto calc(-${sizes.blockVerticalPadding} + 1rem) auto;

  display: flex;
  ${mixin.horizontalContentPadding};
  overflow-x: auto;
`

export const Item = styled.li`
  font-size: 0.8125rem;
  color: ${colors.textDarkest};
  white-space: nowrap;

  &::after {
    content: ">";
    margin: 0 0.5rem;
  }

  &:last-of-type {
    color: ${colors.textMedium};

    &::after {
      content: "";
    }
  }
`

export const ItemLink = styled(Link)`
  color: ${colors.textDarkest};

  ${mixin.linkOver(colors.primary)};
`
