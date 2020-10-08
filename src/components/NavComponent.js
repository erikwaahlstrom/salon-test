import React from "react"
import facepaint from "facepaint"
import { Link } from "gatsby"
import BackArrow from "../assets/arrow_back.svg"
import FilterIcon from "../assets/filter.svg"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

const NavComponent = () => {
  return (
    <div
      css={mq({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        padding: "0px 20px 0px 20px",
      })}
    >
      <Link to="/">
        <BackArrow />
      </Link>
      <h1>Hår</h1>
      <FilterIcon />
    </div>
  )
}

export default NavComponent
