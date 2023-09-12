import * as React from "react"

import Icon from "@components/Icon"
import useTranslation from "@hooks/client/useTranslation"
import { DocMdFile } from "@utils/DocIndexer/types"
import { iconSizes } from "@utils/styles"

import Instructions from "./Instructions"
import { StyledFeedback, Section, TitleWrapper, IconButton, Title } from "./Styles"

export interface FeedbackProps {
  mdFile: DocMdFile
}

const Feedback = ({ mdFile }: FeedbackProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const { t } = useTranslation()

  return (
    <StyledFeedback>
      <Section>
        <TitleWrapper $isExpanded={isExpanded} onClick={() => setIsExpanded((v) => !v)}>
          <IconButton $isExpanded={isExpanded}>
            <Icon code={isExpanded ? "expand_less" : "expand_more"} size={iconSizes._20} />
          </IconButton>

          <Title>{t(`misc.feedback.documentation.title`)}</Title>
        </TitleWrapper>
      </Section>

      {isExpanded && <Instructions mdFile={mdFile} />}
    </StyledFeedback>
  )
}

export default Feedback
