import { css, Global } from "@emotion/core"
import "normalize.css"
import React from "react"
import { Helmet } from "react-helmet"

const title = "Salon - Test"

const AppFrame = props => {
  return (
    <>
      <Global
        styles={css({
          "@font-face": {
            fontFamily: "'MillerBanner'",
            src: 'url("../fonts/Font Bureau - MillerBanner Light.otf")',
          },
          html: {
            boxSizing: "border-box",
            fontFamily: "'Helvetica Neue', 'sans-serif'",
            WebkitFontSmoothing: "antialiased",
            height: "100%",
          },
          "*, *::before, *::after": {
            boxSizing: "inherit",
            "-webkit-tap-highlight-color": "transparent",
          },
          body: {
            height: "100%",
          },
          "#___gatsby": {
            height: "100%",
          },
          p: {
            margin: 0,
            padding: 0,
            fontWeight: 300,
            color: "#202020",
          },
          h2: {
            margin: 0,
            padding: 0,
            fontFamily: "Millerbanner",
            fontWeight: 300,
            color: "#202020",
          },
          hr: {
            height: "2px",
            border: 0,
            color: "#eeeeee",
            backgroundColor: "#eeeeee",
          },
        })}
      />
      <Helmet
        {...{ title }}
        htmlAttributes={{ lang: "sv" }}
        meta={[
          { charset: "UTF-8" },
          { name: "description", content: "Salon test" },
          { name: "keywords", content: "HTML,CSS,JavaScript" },
          { name: "author", content: "Salon test" },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          },
        ]}
      />
      {props.children}
    </>
  )
}

export default AppFrame
