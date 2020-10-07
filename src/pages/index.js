import React from "react"
import { Link } from "gatsby"
import AppFrame from "../components/AppFrame"
import NavComponent from "../components/NavComponent"
import facepaint from "facepaint"
import { graphql } from "gatsby"
// import jsonData from "../data/jsonData.json"
import Arrow from "../assets/arrow.svg"
import Star from "../assets/star.svg"
import StarUnfilled from "../assets/star_unfilled.svg"

// import AllPages from "../templates/all-pages.js"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default ({ data }) => {
  const edges = data.allSitePage.edges
  return (
    <AppFrame>
      <div
        css={mq({
          margin: "0 auto",
          maxWidth: "960px",
        })}
      >
        <NavComponent />
        {/* <AllPages /> */}

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
                          {node.context.price}
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
              return null
            }
          })}
        </ul>
        {/* <ul css={{ margin: 0, padding: 0 }}>
          {jsonData.salons.map((item, index) => {
            return (
              <>
                <Link
                  to="/priser"
                  css={{ listStyle: "none", textDecoration: "none" }}
                >
                  <div
                    key={index}
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
                      {item.time}
                    </p>
                    <div>
                      <li>
                        <h2>{item.title}</h2>
                      </li>

                      <Star />
                      <Star />
                      <Star />
                      <StarUnfilled />
                      <p css={{ display: "inline" }}>{item.reviews}</p>
                      <p>{item.address}</p>
                    </div>
                    <div>
                      <p css={{ fontWeight: "normal" }}>{item.price}</p>
                      <p>{item.duration} min</p>
                    </div>
                    <Arrow />
                  </div>
                  <hr />
                </Link>
              </>
            )
          })}
        </ul> */}
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
