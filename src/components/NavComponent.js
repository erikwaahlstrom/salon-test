import React from "react"
import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

const NavComponent = () => {
  return (
    <div
      css={mq({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      })}
    >
      <h1>NavComponent</h1>
    </div>
  )
}

export default NavComponent
