import React from "react"
import { Link } from "gatsby"

import BackArrow from "../assets/arrow_back.svg"
import FilterIcon from "../assets/filter.svg"

const NavComponent = () => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        padding: "0px 20px 0px 20px",
      }}
    >
      <Link css={{ height: "50px", width: "50px" }} to="/">
        <BackArrow css={{ height: "50px" }} />
      </Link>
      <h1>Hår</h1>
      <FilterIcon css={{ width: "50px" }} />
    </div>
  )
}

export default NavComponent
