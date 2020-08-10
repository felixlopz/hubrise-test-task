import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
  Hero,
  Main,
  Demonstration,
  Faq,
  CompatibleApps,
  Philosophy
} from '../components/pages/frontpage'

const FrontPage = ({ data }) => {
  const { mdx, images, videos } = data
  const { content } = mdx.frontmatter

  return (
    <>
      <Hero signupFormContent={content.signup_form} {...content.hero} />
      {content.mains.map((main) => (
        <Main
          {...main}
          diagramImage={images.nodes.find(({ base }) => base === main.diagram)}
        />
      ))}
      {content.demonstration && (
        <Demonstration
          videoFile={videos.nodes.find(
            ({ base }) => base === content.demonstration.video
          )}
          {...content.demonstration}
        />
      )}
      {content.faq && <Faq {...content.faq} />}
      {content.compatible_apps && (
        <CompatibleApps
          carouselImages={content.compatible_apps.carousel.reduce(
            (result, item) => {
              const match = images.nodes.find(({ base }) => item.file === base)
              return result.concat(match ? { ...item, ...match } : [])
            },
            []
          )}
          {...content.compatible_apps}
        />
      )}
      {content.philosophy && <Philosophy {...content.philosophy} />}
    </>
  )
}

export const frontPageQuery = graphql`
  query getFrontPageContent($id: String!, $imagesPath: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        content {
          hero {
            title
            description {
              paragraph
            }
          }
          signup_form {
            title
            description {
              paragraph
              link {
                text
                to
              }
            }
            button
          }
          mains {
            title
            description
            features
            diagram
          }
          demonstration {
            title
            video
            unsupported
          }
          faq {
            title
            bullets
          }
          compatible_apps {
            title
            description {
              paragraph_1
              paragraph_2
              link_1 {
                text
                to
              }
              hint_1
              link_2 {
                text
                to
              }
              hint_2
            }
            carousel {
              file
              title
              description
            }
            screen_reader_pointer
          }
          philosophy {
            title
            description {
              paragraph_1
              paragraph_2
            }
          }
        }
      }
    }
    images: allFile(
      filter: {
        absolutePath: { glob: $imagesPath }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        ...Image
      }
    }
    videos: allFile(
      filter: {
        absolutePath: { glob: $imagesPath }
        extension: { regex: "/(mp4)|(webm)/" }
      }
    ) {
      nodes {
        base
        publicURL
      }
    }
  }
`

FrontPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        content: PropTypes.shape({
          hero: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph: PropTypes.string.isRequired
            }).isRequired
          }),
          signup_form: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph: PropTypes.string.isRequired,
              link: PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              }).isRequired
            }).isRequired,
            button: PropTypes.string.isRequired
          }).isRequired,
          mains: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              features: PropTypes.arrayOf(PropTypes.string).isRequired,
              diagram: PropTypes.string.isRequired
            })
          ).isRequired,
          demonstration: PropTypes.shape({
            title: PropTypes.string.isRequired,
            unsupported: PropTypes.string.isRequired,
            video: PropTypes.string.isRequired
          }),
          faq: PropTypes.shape({
            title: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              })
            ).isRequired
          }),
          compatible_apps: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph_1: PropTypes.string.isRequired,
              paragraph_2: PropTypes.string.isRequired,
              link_1: PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              }),
              hint_1: PropTypes.string.isRequired,
              link_2: PropTypes.shape({
                text: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
              }),
              hint_2: PropTypes.string.isRequired
            }).isRequired,
            carousel: PropTypes.arrayOf(
              PropTypes.shape({
                file: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
              })
            ).isRequired,
            screen_reader_pointer: PropTypes.string.isRequired
          }),
          philosophy: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.shape({
              paragraph_1: PropTypes.string.isRequired,
              paragraph_2: PropTypes.string.isRequired
            }).isRequired
          })
        })
      })
    }),
    images: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          base: PropTypes.string.isRequired,
          childImageSharp: PropTypes.object
        })
      )
    }),
    videos: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          base: PropTypes.string.isRequired,
          publicURL: PropTypes.string.isRequired
        })
      )
    })
  })
}

export default FrontPage
