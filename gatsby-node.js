const path = require("path")
const data = require("./src/data/jsonData.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve("./src/templates/all-pages.js")

  data.forEach(page => {
    const path = page.link
    createPage({
      path: path,
      component: template,
      context: page,
    })
  })

  // Create a page for each Pokémon.
  data.forEach(pokemon => {
    createPage({
      path: `${pokemon.link}/`,
      component: require.resolve("./src/templates/pokemon.js"),
      context: { pokemon },
    })
  })
}
