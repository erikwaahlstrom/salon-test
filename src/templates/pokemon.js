import React from "react"
import { Link } from "gatsby"

export default function Pokemon({ pageContext: { pokemon } }) {
  return (
    <>
      <div style={{ width: 960, margin: "4rem auto" }}>
        <p>{pokemon.link}</p>
      </div>
      <Link to="/">Back to all Pokémon</Link>
    </>
  )
}
