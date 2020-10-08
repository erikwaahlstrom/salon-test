import React, { useState } from "react"
import styled from "@emotion/styled"
import facepaint from "facepaint"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { CSSTransition } from "react-transition-group"
import Select from "react-select"

import AppFrame from "../components/AppFrame"
import NavComponent from "../components/NavComponent"

import Arrow from "../assets/arrow.svg"
import ArrowDown from "../assets/arrow_down.svg"
import Star from "../assets/star.svg"
import StarUnfilled from "../assets/star_unfilled.svg"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

const SubmitButton = styled.input({
  width: "50%",
  height: "30px",
  display: "inline-block",
  backgroundColor: "#fff",
  border: "2px solid #e7e7e7",
  cursor: "pointer",
  ":hover": { background: "#eeeeee" },
})

const ListGridWrapper = styled.div({
  padding: "0px 20px 0px 20px",
  display: "grid",
  gridTemplateColumns: "20% 50% 20% 10%",
})

const ResetFilterButton = styled.button({
  width: "50%",
  height: "30px",
  display: "inline-block",
  backgroundColor: "#fff",
  border: "2px solid #e7e7e7",
  cursor: "pointer",
  ":hover": { background: "#eeeeee" },
})

const duration = 100

const defaultStyle = {
  maxHeight: "0px",
  transition: `max-height ${duration}ms ease-in-out`,
  overflow: "hidden",
}

const transitionStyles = {
  entering: { height: "auto", maxHeight: "100px" },
  entered: {
    maxHeight: "100px",
    overflow: "visible",
    transition: `max-height ${duration}ms ease-in-out`,
  },
}

export default ({ data }) => {
  const edges = data.allSitePage.edges

  const [filterState, setFilter] = useState([])
  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(0)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

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
    }
  }

  const onPriceRangeChangeMin = minOptionSelected => {
    setMinVal(minOptionSelected.value)
  }
  const onPriceRangeChangeMax = maxOptionSelected => {
    setMaxVal(maxOptionSelected.value)
  }

  const resetFilter = () => {
    setToggleFilter(false)
    setMinVal(0)
    setMaxVal(0)
  }

  const toggleFilterDropdown = () => {
    let menuState = !menuActive
    setMenuActive(menuState)
  }

  return (
    <AppFrame>
      <div
        css={{
          margin: "0 auto 50px auto",
          maxWidth: "960px",
          backgroundColor: "white",
        }}
      >
        <NavComponent />
        <div
          css={{
            padding: "0px 20px 0px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "50px",
            borderTop: "0.5px solid #b69f58",
            borderBottom: "0.5px solid #b69f58",
            cursor: "pointer",
            ":hover": { background: "#eeeeee" },
          }}
          onClick={toggleFilterDropdown}
        >
          <p
            css={{
              fontSize: "15px",
            }}
          >
            Pris {minVal} - {maxVal}
          </p>
          <ArrowDown />
        </div>
        <CSSTransition in={!!menuActive} timeout={duration}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <form
                onSubmit={updateFilterList}
                css={mq({
                  margin: "10px 0px 20px 0px",
                  width: ["100%", "50%", "50%"],
                })}
              >
                <Select
                  defaultValue={[{ label: "0" }]}
                  onChange={onPriceRangeChangeMin}
                  options={[
                    { value: 0, label: 0 },
                    { value: 100, label: 100 },
                    { value: 250, label: 250 },
                    { value: 500, label: 500 },
                  ]}
                  css={{ width: "50%", display: "inline-block" }}
                />
                <Select
                  defaultValue={[{ label: "0" }]}
                  onChange={onPriceRangeChangeMax}
                  options={[
                    { value: 0, label: 0 },
                    { value: 100, label: 100 },
                    { value: 250, label: 250 },
                    { value: 500, label: 500 },
                  ]}
                  css={{ width: "50%", display: "inline-block" }}
                />

                <SubmitButton value="Applicera" type="submit" />
                <ResetFilterButton onClick={resetFilter}>
                  Återställ
                </ResetFilterButton>
              </form>
            </div>
          )}
        </CSSTransition>
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
                      <ListGridWrapper>
                        <p
                          css={{
                            paddingTop: "10px",
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
                          <Star />
                          <StarUnfilled />
                          <p css={{ display: "inline", marginLeft: "10px" }}>
                            ({node.context.reviews})
                          </p>
                          <p>{node.context.address}</p>
                        </div>
                        <div>
                          <p
                            css={{
                              paddingTop: "10px",
                              fontWeight: "normal",
                            }}
                          >
                            {node.context.price} kr
                          </p>
                          <p>{node.context.duration} min</p>
                        </div>
                        <div
                          css={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Arrow />
                        </div>
                      </ListGridWrapper>
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
              <ul css={{ margin: 0, padding: 0 }}>
                <li key={index} css={{ listStyle: "none" }}>
                  <Link
                    to={filteredSalon.node.context.link}
                    css={{ listStyle: "none", textDecoration: "none" }}
                  >
                    <ListGridWrapper>
                      <p
                        css={{
                          paddingTop: "10px",
                          fontWeight: "normal",
                        }}
                      >
                        {filteredSalon.node.context.time}
                      </p>
                      <div>
                        <h2>{filteredSalon.node.context.title}</h2>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarUnfilled />
                        <p css={{ display: "inline", marginLeft: "10px" }}>
                          ({filteredSalon.node.context.reviews})
                        </p>
                        <p>{filteredSalon.node.context.address}</p>
                      </div>
                      <div>
                        <p
                          css={{
                            paddingTop: "10px",
                            fontWeight: "normal",
                          }}
                        >
                          {filteredSalon.node.context.price} kr
                        </p>
                        <p>{filteredSalon.node.context.duration} min</p>
                      </div>
                      <div
                        css={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Arrow />
                      </div>
                    </ListGridWrapper>
                    <hr />
                  </Link>
                </li>
              </ul>
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
