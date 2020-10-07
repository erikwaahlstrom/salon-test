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
  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(0)
  const [toggleFilter, setToggleFilter] = useState(false)

  const updateFilterList = e => {
    e.preventDefault()
    if (maxVal > 0) {
      const salons = edges.filter(({ node }) => {
        return node && node.context && node.context.price
      })
      const min = parseInt(minVal)
      const max = parseInt(maxVal)

      const filtered = salons.filter(({ node }) => {
        return node.context.price >= min && node.context.price <= max
      })
      setFilter(filtered)
      setToggleFilter(true)
      console.log(filtered)
    }
  }

  const onPriceRangeChangeMin = event => {
    setMinVal(event.target.value)
  }
  const onPriceRangeChangeMax = event => {
    setMaxVal(event.target.value)
  }

  // SAME ONCHANGE HANDLER FOR BOTH INPUTS?
  // const onPriceRangeChange = event => {
  //   setRangeVal({ [event.target.name]: event.target.value })
  // }

  const resetFilter = () => {
    setToggleFilter(false)
    setMinVal(0)
    setMaxVal(0)
  }

  return (
    <AppFrame>
      <div
        css={mq({
          margin: "0 auto",
          maxWidth: "960px",
        })}
      >
        {/* <NavComponent /> */}
        <form onSubmit={updateFilterList} css={{ margin: "30px 0" }}>
          <select value={minVal} name="min" onChange={onPriceRangeChangeMin}>
            <option value={0}>0</option>
            <option value={100}>100</option>
            <option value={250}>250</option>
          </select>
          <select value={maxVal} name="max" onChange={onPriceRangeChangeMax}>
            <option value={0}>0</option>
            <option value={100}>100</option>
            <option value={250}>250</option>
          </select>
          <input type="submit" />
        </form>
        <button onClick={resetFilter}>Reset</button>
        {!toggleFilter ? (
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
                return null
              }
            })}
          </ul>
        ) : (
          filterState.map((filteredSalon, index) => {
            return (
              <div
                key={index}
                css={{ height: "50px", border: "1px solid red" }}
              >
                <Link
                  to={filteredSalon.node.context.link}
                  css={{ listStyle: "none", textDecoration: "none" }}
                >
                  <p>{filteredSalon.node.context.title}</p>
                </Link>
              </div>
            )
          })
        )}
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
