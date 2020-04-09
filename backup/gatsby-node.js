/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const createResolvers = require("./gatsby/createsResolvers")


exports.createResolvers = props => createResolvers(props)


// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// The “graphql” function allows us to run arbitrary
	// queries against the local Gatsby GraphQL schema. Think of
	// it like the site has a built-in database constructed
	// from the fetched data that you can run queries against.

	const result = await graphql(`
	query {
		wpgraphql {
			posts {
				edges {
					node {
						id
						databaseId
						slug
						status
					}
				}
			}
		}
	}
	
	`)
	

	// Check for any errors
	if (result.errors) {
		console.error(result.errors)
	}

	// Access query results via object destructuring
	const { wpgraphql: { posts: { edges: blogPosts } } } = result.data


	const homeTemplate = path.resolve(`./src/templates/home.tsx`)

	createPage({
		path: `/`,
		component: slash(homeTemplate),
	})

	// console.log(JSON.stringify(blogPosts))

	const postTemplate = path.resolve(`./src/templates/post.js`)
	// We want to create a detailed page for each
	// post node. We'll just use the WordPress Slug for the slug.
	// The Post ID is prefixed with 'POST_'

	blogPosts.forEach(post => {
		console
		createPage({
			path: `/blog/${post.node.slug}/`,
			component: slash(postTemplate),
			context: {
				// post
				id: post.node.id,
				databaseId: post.node.databaseId
			},
		})
	})
}

