import { generateKey } from "@utils/misc"

import type { IFooter } from "../types"

import { Header, Item, ItemLink } from "./Styles"

const FooterSection = ({ title, links }: IFooter["sections"][number]): JSX.Element => (
  <div>
    <Header>{title}</Header>

    <ul>
      {links.map(({ title, to }, idx) => (
        <Item key={generateKey(title, idx)}>
          <ItemLink href={to}>{title}</ItemLink>
        </Item>
      ))}
    </ul>
  </div>
)

export default FooterSection
