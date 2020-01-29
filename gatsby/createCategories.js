const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
  query GET_CATEGORIES($first: Int, $after: String) {
    wpgraphql {
      categories(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          categoryId
          slug
        }
      }
    }
  }
  `

  const { createPage } = actions
  const allCategories = []
  const fetchCategories = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          categories: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(category => {
        allCategories.push(category)
      })
      if (hasNextPage) {
        return fetchCategories({ first: 100, after: endCursor })
      }
      return allCategories
    })

  await fetchCategories({ first: 100, after: null }).then(allCategories => {
    const categoryTemplate = path.resolve(`./src/templates/category.js`)

    allCategories.map(category => {
      console.log(`create category: ${category.slug}`)
      createPage({
        path: `/blog/category/${category.slug}`,
        component: categoryTemplate,
        context: category,
      })
    })
  })
}
