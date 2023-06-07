import styled from "styled-components"

import { colors } from "@utils/styles"

export const TableWrapper = styled.div`
  overflow: auto;
`

export const StyledTable = styled.table`
  tbody {
    background: none;
    color: ${colors.textDark};
  }

  tr {
    border: none;
  }

  td,
  td:first-child {
    padding: 0.6rem;
  }
`
