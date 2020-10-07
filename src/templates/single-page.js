import React from "react"
import { Link } from "gatsby"

export default function SinglePage({ pageContext: { page } }) {
  return (
    <>
      <div style={{ width: 960, margin: "4rem auto" }}>
        <p>{page.link}</p>
        <p>{page.address}</p>
      </div>
      <Link to="/">Back to all Pokémon</Link>
    </>
  )
}
