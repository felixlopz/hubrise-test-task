import * as React from "react"

import Icon from "@components/Icon"
import { ContentImage } from "@utils/contentImage"
import { iconSizes } from "@utils/styles"

import {
  Count,
  Topbar,
  Title,
  StyledSlideshow,
  StyledSlider,
  Slide,
  SlideImage,
  PrevArrow,
  NextArrow,
  Close,
} from "./Styles"

interface SlideshowProps {
  title: string
  contentImages: Array<ContentImage>
  currentImageSrc: string
  onClose: () => void
  navigate: (direction: 1 | -1) => void
}

const Slideshow = ({ title, contentImages, currentImageSrc, onClose, navigate }: SlideshowProps): JSX.Element => {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.code) {
        case "Escape":
          onClose()
          break
        case "ArrowRight":
          navigate(1)
          break
        case "ArrowLeft":
          navigate(-1)
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [navigate, onClose])

  // Prevent vertical scrolling when the slideshow is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const currentImageNumber = contentImages.findIndex((contentImage) => contentImage.src === currentImageSrc) + 1
  const contentImage = contentImages[currentImageNumber - 1]

  const executeAndStopPropagation = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation()
    fn()
  }
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <StyledSlideshow onClick={() => onClose()}>
      <Topbar onClick={stopPropagation}>
        <Title>{title}</Title>
        <Count>
          {currentImageNumber} / {contentImages.length}
        </Count>
        <Close onClick={executeAndStopPropagation(onClose)}>
          <Icon code="close" size={iconSizes._32} />
        </Close>
      </Topbar>

      <StyledSlider>
        <PrevArrow $isVisible={currentImageNumber !== 1} onClick={executeAndStopPropagation(() => navigate(-1))}>
          <Icon code="chevron_left" size={iconSizes._32} />{" "}
        </PrevArrow>

        <Slide>
          <SlideImage {...contentImage} alt={title} onClick={stopPropagation} />
        </Slide>

        <NextArrow
          $isVisible={currentImageNumber < contentImages.length}
          onClick={executeAndStopPropagation(() => navigate(1))}
        >
          <Icon code="chevron_right" size={iconSizes._32} />
        </NextArrow>
      </StyledSlider>
    </StyledSlideshow>
  )
}

export default Slideshow
