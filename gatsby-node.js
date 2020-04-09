/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createResolvers = require("./gatsby/createResolvers")
const createPosts = require("./gatsby/createPosts")
const createCategories = require("./gatsby/createCategories")
const createTags = require("./gatsby/createTags")

exports.createResolvers = props => createResolvers(props)

exports.createPages = async ({ actions, graphql }) => {
	await createPosts({ actions, graphql })
	await createCategories({ actions, graphql })
	// await createTags({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
})
}