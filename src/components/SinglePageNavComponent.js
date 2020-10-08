import React from "react"
import facepaint from "facepaint"
import { Link } from "gatsby"
import SingleBackArrow from "../assets/arrow_back_single.svg"
import FavIcon from "../assets/heart.svg"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

const SinglePageNavComponent = () => {
  return (
    <div css={{ position: "relative" }}>
      <div
        css={mq({
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
        })}
      >
        <Link to="/">
          <div className="custom">
            <SingleBackArrow />
          </div>
        </Link>
        <FavIcon />
      </div>
    </div>
  )
}

export default SinglePageNavComponent
