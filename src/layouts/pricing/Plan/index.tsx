import * as React from "react"

import { IPlan } from "../interface"

import { List, Item, Button } from "./Styles"

import { generateKey } from "@utils/misc"

interface PlanProps {
  plan: IPlan
}

const Plan = ({ plan: { pricing, features, link } }: PlanProps): JSX.Element => {
  return (
    <div className="section section_full-width section_vw section_padding">
      <div className="section__in section__in_green section__in_padding">
        <h3 className="section__title section__title_no-border">
          {pricing.chunk_1}
          <span className="section__title-span">{pricing.chunk_2}</span>
        </h3>

        <List>
          {features.map((feature, idx) => (
            <Item key={generateKey(feature, idx)}>{feature}</Item>
          ))}
        </List>

        <Button to={link.to} newTab={false}>
          {link.text}
        </Button>
      </div>
    </div>
  )
}

export default Plan
