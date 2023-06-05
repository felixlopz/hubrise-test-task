import * as React from "react"

import { IInfo } from "../interface"

import { Highlight, Paragraph } from "./Styles"

import { generateKey } from "@utils/misc"
import Link from "@layouts/shared/components/Link"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"

interface InfosProps {
  infos: Array<IInfo>
}

const Infos = ({ infos }: InfosProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <>
      {infos.map((special, idx) => (
        <div key={generateKey(special.highlight, idx)} className="section__description">
          <Paragraph>
            <Highlight>{special.highlight}</Highlight>

            {special.text}

            {special.link && special.link.to ? (
              <Link className="section__description-link" to={special.link.to} newTab={false}>
                {special.link.text}
              </Link>
            ) : (
              <button className="section__description-link" onClick={forms.contact.toggle}>
                {special.button}
              </button>
            )}
          </Paragraph>
        </div>
      ))}
    </>
  )
}

export default Infos
