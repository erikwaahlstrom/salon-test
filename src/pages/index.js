import React from "react"
import AppFrame from "../components/AppFrame"
import NavComponent from "../components/NavComponent"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  const data = useStaticQuery(graphql`
    query aboutImages {
      papercoverBig: file(relativePath: { eq: "image@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1127) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <AppFrame>
      <div
        css={mq({
          margin: "0 auto",
          maxWidth: "1200px",
        })}
      >
        <NavComponent />
        <Img
          css={{ zIndex: -1 }}
          fluid={data.papercoverBig.childImageSharp.fluid}
          alt="papercover-big"
        />
        <h1>Salong</h1>
      </div>
    </AppFrame>
  )
}
