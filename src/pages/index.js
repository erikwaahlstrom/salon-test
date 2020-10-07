import React, { useState } from "react"
import { Link } from "gatsby"
import AppFrame from "../components/AppFrame"
import facepaint from "facepaint"
import { graphql } from "gatsby"
import Arrow from "../assets/arrow.svg"
import Star from "../assets/star.svg"
import StarUnfilled from "../assets/star_unfilled.svg"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default ({ data }) => {
  const edges = data.allSitePage.edges

  const [filterState, setFilter] = useState([])

  const filterSalons = () => {
    const salons = edges.filter(({ node }) => {
      return node && node.context && node.context.price
    })

    const filtered = salons.filter(({ node }) => {
      return node.context.price < 100
    })
    setFilter(filtered)
    console.log(filtered)
  }
  console.log(filterState)
  return (
    <AppFrame>
      <div
        css={mq({
          margin: "0 auto",
          maxWidth: "960px",
        })}
      >
        {/* <NavComponent /> */}
        {filterState.map((filteredSalon, index) => {
          return (
            <div key={index}>
              <p>{filteredSalon.node.context.title}</p>
            </div>
          )
        })}
        <button onClick={filterSalons}>Filter</button>
        <ul css={{ margin: 0, padding: 0 }}>
          {edges.map(({ node }, index) => {
            if (node && node.context && node.context.link) {
              return (
                <li key={index} css={{ listStyle: "none" }}>
                  <Link
                    to={node.context.link}
                    css={{ listStyle: "none", textDecoration: "none" }}
                  >
                    <div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "20% 50% 20% 10%",
                      }}
                    >
                      <p
                        css={{
                          fontWeight: "normal",
                        }}
                      >
                        {node.context.time}
                      </p>
                      <div>
                        <h2>{node.context.title}</h2>
                        <Star />
                        <Star />
                        <Star />
                        <StarUnfilled />
                        <p css={{ display: "inline" }}>
                          {node.context.reviews}
                        </p>
                        <p>{node.context.address}</p>
                      </div>
                      <div>
                        <p css={{ fontWeight: "normal" }}>
                          {node.context.price} kr
                        </p>
                        <p>{node.context.duration} min</p>
                      </div>
                      <Arrow />
                    </div>
                    <hr />
                  </Link>
                </li>
              )
            } else {
              return ""
            }
          })}
        </ul>
      </div>
    </AppFrame>
  )
}

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          context {
            address
            link
            title
            reviews
            time
            price
            duration
          }
        }
      }
    }
  }
`
