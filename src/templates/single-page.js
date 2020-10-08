import React from "react"
import NavComponent from "../components/NavComponent"
import { Link } from "gatsby"

export default function SinglePage({ pageContext: { page } }) {
  return (
    <>
      <NavComponent />
      <div style={{ width: 960, margin: "4rem auto" }}>
        <p>{page.link}</p>
        <p>{page.address}</p>
        <Link to="/">Back to all Salons</Link>
      </div>
    </>
  )
}
