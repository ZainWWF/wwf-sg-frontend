const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  // Setup our query
  const GET_POSTS = `
    query GET_POSTS($first:Int $after:String) {
      wpgraphql {
        posts(
          first: $first
          after: $after
        ) {
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
						id
						databaseId
            uri
            postId
            title
          }
        }
      }
    }
  `
  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0

  // Create a function for getting posts
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      // const nodeIds = nodes.map(node => node.postId)
      // const postsTemplate = path.resolve(`./src/templates/posts.js`)
      // const postsPath = !variables.after ? `/blog/` : `/blog/page/${pageNumber}`

      // // blogPages[pageNumber] = {
      //   path: postsPath,
      //   component: postsTemplate,
      //   context: {
      //     ids: nodeIds,
      //     pageNumber: pageNumber,
      //     hasNextPage: hasNextPage,
      //   },
      //   ids: nodeIds,
      // }

      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 12, after: endCursor })
      }
      return allPosts
    })

  // Map over all the pages and call createPage
  await fetchPosts({ first: 12, after: null }).then(allPosts => {
	
		
		const [ post1, post2, post3, post4, post5, post6, ...restPosts] = allPosts;

		const homeTemplate = path.resolve(`./src/templates/home.tsx`)
		createPage({
			path: `/`,
			component: homeTemplate,
			context : [ post1, post2, post3, post4, post5, post6]
		})

    // blogPages.map(page => {
    //   console.log(`create post archive: ${page.path}`)
    //   createPage(page)
		// })
		
		const postTemplate = path.resolve(`./src/templates/post.tsx`)
    allPosts.map(post => {
      console.log(`create post: ${post.uri}`)
      createPage({
        path: `/blog/${post.uri}`,
        component: postTemplate,
        context: post,
      })
    })
  })
}