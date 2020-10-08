import React from "react"
import { Link } from "gatsby"

import SingleBackArrow from "../assets/arrow_back_single.svg"
import FavIcon from "../assets/heart.svg"

const SinglePageNavComponent = () => {
  return (
    <div css={{ position: "relative" }}>
      <div
        css={{
          padding: "0px 20px 0px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Link css={{ height: "50px", width: "50px" }} to="/">
          <div className="custom">
            <SingleBackArrow css={{ height: "50px" }} />
          </div>
        </Link>
        <FavIcon />
      </div>
    </div>
  )
}

export default SinglePageNavComponent
