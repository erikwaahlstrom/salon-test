import React from "react"
import NavComponent from "../components/NavComponent"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PinIcon from "../assets/pin.svg"
import PhoneIcon from "../assets/phone.svg"
import GlobeIcon from "../assets/globe.svg"
import ClockIcon from "../assets/clock.svg"

export default function SinglePage({ pageContext: { page } }) {
  const data = useStaticQuery(graphql`
    query image_query {
      page_img: file(relativePath: { eq: "image@3x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1125) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <div style={{ maxWidth: 960, margin: "0px auto" }}>
        <NavComponent />
        <Img
          fluid={data.page_img.childImageSharp.fluid}
          alt="image"
          css={{
            width: "100%",
          }}
        />
        <div
          css={{
            height: "50px",
            display: "grid",
            gridTemplateColumns: "50% 50%",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "0.5px solid #b69f58",
            }}
          >
            <h3>Info</h3>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>Schema</h3>
          </div>
        </div>
        <div css={{ border: "1px solid red" }}>
          <div css={{ display: "flex", alignItems: "center" }}>
            <PinIcon />
            <p>
              {page.address} {page.postal}
            </p>
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <ClockIcon />
            <p>Öppettider till {page.openhours}:00</p>
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon />
            <p>{page.phone}</p>
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <GlobeIcon />
            <p>{page.website}</p>
          </div>
          <div>
            <p>{page.description}</p>
          </div>
          <Link to="/">Back to all Salons</Link>
        </div>
      </div>
    </>
  )
}
