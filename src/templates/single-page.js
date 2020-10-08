import React from "react"
import SinglePageNavComponent from "../components/SinglePageNavComponent"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PinIcon from "../assets/pin.svg"
import PhoneIcon from "../assets/phone.svg"
import GlobeIcon from "../assets/globe.svg"
import ClockIcon from "../assets/clock.svg"
import ArrowDown from "../assets/arrow_down.svg"
import Star from "../assets/star.svg"
import StarUnfilled from "../assets/star_unfilled.svg"

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
      <div
        style={{
          maxWidth: 960,
          margin: "0px auto 150px auto",
        }}
      >
        <SinglePageNavComponent />
        {/* **************************************************** */}
        <div css={{ position: "relative" }}>
          <Img
            fluid={data.page_img.childImageSharp.fluid}
            alt="image"
            css={{
              width: "100%",
            }}
          />
          <div
            css={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to top,rgba(0,0,0,0.8), rgba(0,0,0,0))",
              opacity: 0.9,
              zIndex: 0,
            }}
          ></div>
          <div css={{ position: "absolute", bottom: 50, left: 30 }}>
            <h1
              css={{
                color: "#fff",
                fontFamily: "Millerbanner",
                fontWeight: 300,
              }}
            >
              {page.title}
            </h1>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarUnfilled />
            <p
              css={{
                display: "inline",
                color: "#fff",
                marginLeft: "20px",
                padding: 0,
                fontWeight: 300,
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              ({page.reviews})
            </p>
          </div>
        </div>
        {/* **************************************************** */}
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            marginBottom: "30px",
            backgroundColor: "white",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "0.5px solid #b69f58",
              cursor: "pointer",
              ":hover": { background: "#f9f9f9" },
            }}
          >
            <h3
              css={{
                fontWeight: 400,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              Info
            </h3>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": { background: "#f9f9f9" },
            }}
          >
            <h3
              css={{
                fontWeight: 400,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              Schema
            </h3>
          </div>
        </div>
        <div css={{ backgroundColor: "white", padding: "0px 20px 20px 20px" }}>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              borderBottom: "0.5px solid #eeeeee",
            }}
          >
            <PinIcon />
            <p
              css={{
                marginLeft: "20px",
                padding: 0,
                fontWeight: 300,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              {page.address} {page.postal}
            </p>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              borderBottom: "0.5px solid #eeeeee",
            }}
          >
            <ClockIcon />
            <p
              css={{
                marginLeft: "20px",
                marginRight: "20px",
                padding: 0,
                fontWeight: 300,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              Öppettider till {page.openhours}:00
            </p>{" "}
            <ArrowDown />
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              borderBottom: "0.5px solid #eeeeee",
            }}
          >
            <PhoneIcon />
            <p
              css={{
                marginLeft: "20px",
                padding: 0,
                fontWeight: 300,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              {page.phone}
            </p>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              borderBottom: "0.5px solid #eeeeee",
            }}
          >
            <GlobeIcon />
            <p
              css={{
                marginLeft: "20px",
                padding: 0,
                fontWeight: 300,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              {page.website}
            </p>
          </div>
          <div>
            <p
              css={{
                padding: 0,
                fontWeight: 300,
                color: "#202020",
                fontFamily: "'Helvetica Neue', 'sans-serif'",
              }}
            >
              {page.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
