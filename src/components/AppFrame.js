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
            fontFamily: "'Millerlight'",
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
