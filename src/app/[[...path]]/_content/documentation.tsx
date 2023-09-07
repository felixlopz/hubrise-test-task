import * as React from "react"

import { renderDocumentationMdx } from "@components/DocumentationMdxRenderer"
import ServerImage from "@components/ServerImage"
import Documentation from "@layouts/Documentation"
import { Route, RouteName } from "@utils/router/types"

const documentation = async (route: Route<RouteName, "documentation">): Promise<JSX.Element> => {
  const { mdFile, folder } = route.context
  const { mdxElement, headerLinks } = await renderDocumentationMdx(mdFile.content, mdFile.contentDirName)

  const logoImage = folder.customisation.logo ? (
    <ServerImage
      contentDirName={[`${folder.contentDirName}/${mdFile.language}/images`, `${folder.contentDirName}/images`]}
      fileName={folder.customisation.logo}
      alt={mdFile.frontMatter.title}
    />
  ) : undefined

  const galleryImages = (mdFile.frontMatter.gallery || []).map((image) => (
    // eslint-disable-next-line react/jsx-key
    <ServerImage
      contentDirName={[`${folder.contentDirName}/${mdFile.language}/images`, `${folder.contentDirName}/images`]}
      fileName={image}
      alt={mdFile.frontMatter.title}
    />
  ))

  return (
    <Documentation
      mdFile={mdFile}
      folder={folder}
      headerLinks={headerLinks}
      logoImage={logoImage}
      galleryImages={galleryImages}
    >
      {mdxElement}
    </Documentation>
  )
}

export default documentation
