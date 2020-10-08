import React from "react"

import Transition from "../components/transition"

const Layout = ({ children, location }) => {
  return (
    <>
      <Transition location={location}>{children}</Transition>
    </>
  )
}

export default Layout
