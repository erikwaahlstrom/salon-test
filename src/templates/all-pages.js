import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

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
            }
          }
        }
      }
    }
  `)
  const arr = res.allSitePage.edges.map(item => item)

  console.log(res.allSitePage.edges[0].node.context.link)
  return (
    <>
      {arr.map((todo, index) => {
        return (
          <div key={index}>
            <Link to={`${todo.node.context.link}`}>
              <p>{todo.node.context.link}</p>
            </Link>
          </div>
        )
      })}
    </>
  )
}
