import * as React from "react"
import { useTranslation } from "react-i18next"

import Image404 from "@assets/images/404.png"
import SEO, { Meta } from "@layouts/shared/components/Seo"
import Link from "@layouts/shared/components/Link"

const NotFound = (): JSX.Element => {
  const { t } = useTranslation()
  const meta: Meta = { title: t("layout.404.meta.title") }

  return (
    <>
      <SEO meta={meta} />

      <div className="page-404">
        <h1 className="page-404__title">{t("layout.404.title")}</h1>
        <Link to="/" className="page-404__link">
          {t("layout.404.text_link")}
        </Link>

        <img className="page-404__image" alt="404 not found" src={Image404} />
      </div>
    </>
  )
}

export default NotFound
