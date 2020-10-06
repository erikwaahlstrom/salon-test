import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Arrow from "../assets/arrow.svg"
import Star from "../assets/star.svg"
import StarUnfilled from "../assets/star_unfilled.svg"

export default ({ data }) => {
  const res = useStaticQuery(graphql`
    query($path: String!) {
      allSitePage(filter: { path: { ne: $path } }) {
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
  `)

  const pageArray = res.allSitePage.edges.map(item => item)

  const filteredPageArray = pageArray.filter(item => {
    return item.node.context.link !== null
  })

  return (
    <>
      <ul css={{ margin: 0, padding: 0 }}>
        {filteredPageArray.map((info, index) => {
          const pageInfo = info.node.context
          return (
            <li key={index} css={{ listStyle: "none" }}>
              <Link
                to={`${pageInfo.link}`}
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
                    {pageInfo.time}
                  </p>
                  <div>
                    <h2>{pageInfo.title}</h2>

                    <Star />
                    <Star />
                    <Star />
                    <StarUnfilled />
                    <p css={{ display: "inline" }}>{pageInfo.reviews}</p>
                    <p>{pageInfo.address}</p>
                  </div>
                  <div>
                    <p css={{ fontWeight: "normal" }}>{pageInfo.price}</p>
                    <p>{pageInfo.duration} min</p>
                  </div>
                  <Arrow />
                </div>
                <hr />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
