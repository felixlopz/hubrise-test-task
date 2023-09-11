import * as React from "react"

import { ContentImage } from "@utils/contentImage"

import { Close, NextArrow, PrevArrow } from "./Controls"
import { Count, Topbar, Title, StyledSlideshow, StyledSlider, Slide, SlideImage } from "./Styles"

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

  return (
    <StyledSlideshow onClick={() => onClose()}>
      <Topbar onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Count>
          {currentImageNumber} / {contentImages.length}
        </Count>
        <Close onClick={() => onClose()} />
      </Topbar>

      <StyledSlider>
        <PrevArrow currentImageNumber={currentImageNumber} onClick={() => navigate(-1)} />

        <Slide>
          <SlideImage
            {...contentImage}
            alt={title}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          />
        </Slide>

        <NextArrow
          currentImageNumber={currentImageNumber}
          totalNumberOfImages={contentImages.length}
          onClick={() => navigate(1)}
        />
      </StyledSlider>
    </StyledSlideshow>
  )
}

export default Slideshow
