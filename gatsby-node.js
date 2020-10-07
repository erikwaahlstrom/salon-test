const path = require("path")
const data = require("./src/data/jsonData.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve("./src/templates/single-page.js")

  data.forEach(page => {
    const path = page.link
    createPage({
      path: path,
      component: template,
      context: page,
    })
  })

  // Create a page for salon
  data.forEach(page => {
    createPage({
      path: `${page.link}/`,
      component: require.resolve("./src/templates/single-page.js"),
      context: { page },
    })
  })
}
