import * as React from "react"
import Slider, { Settings } from "react-slick"

import { ContentImage } from "@utils/ contentImage"
import { DocFolder } from "@utils/DocIndexer/types"

import { Close, NextArrow, PrevArrow } from "./Controls"
import {
  Count,
  Topbar,
  Title,
  Slideshow,
  StyledSlider,
  Slide,
  ThumbnailItem,
  ThumbnailGrid,
  Thumbnail,
  SlideImage,
} from "./Styles"

interface GalleryProps {
  folder: DocFolder
  images: Array<ContentImage>
}

const Gallery = ({ folder, images }: GalleryProps): JSX.Element => {
  const title = folder.name

  const slider = React.useRef<Slider>(null)
  const [isSliderVisible, setIsSliderVisible] = React.useState(false)
  const [currentImageNumber, setCurrentImageNumber] = React.useState(1)

  const sliderSettings: Settings = {
    speed: 0,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow currentImageNumber={currentImageNumber} />,
    nextArrow: <NextArrow currentImageNumber={currentImageNumber} totalNumberOfImages={images.length} />,
    afterChange: (currentSlide) => setCurrentImageNumber(currentSlide + 1),
  }

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { slickNext, slickPrev } = slider.current!

      switch (e.code) {
        case "Escape":
          setIsSliderVisible(false)
          break
        case "ArrowRight":
          slickNext()
          break
        case "ArrowLeft":
          slickPrev()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isSliderVisible])

  React.useEffect(() => {
    if (isSliderVisible) {
      document.body.classList.add("no-vertical-scroll")
    }
    return () => document.body.classList.remove("no-vertical-scroll")
  }, [isSliderVisible])

  return (
    <>
      <Slideshow $isVisible={isSliderVisible} onClick={() => setIsSliderVisible(false)}>
        <Topbar onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
          <Title>{title}</Title>
          <Count>
            {currentImageNumber} / {images.length}
          </Count>
          <Close onClick={() => setIsSliderVisible(false)} />
        </Topbar>

        <StyledSlider ref={slider} {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <Slide onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <SlideImage {...image} alt={title} />
              </Slide>
            </div>
          ))}
        </StyledSlider>
      </Slideshow>

      <ThumbnailGrid>
        {images.map((image, index) => (
          <ThumbnailItem
            key={index}
            onClick={() => {
              slider.current!.slickGoTo(index)
              setIsSliderVisible(!isSliderVisible)
            }}
          >
            <Thumbnail {...image} alt={title} />
          </ThumbnailItem>
        ))}
      </ThumbnailGrid>
    </>
  )
}

export default Gallery
