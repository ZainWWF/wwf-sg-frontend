import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import HeroSection from "../components/Sections/HeroSection"
import RecentPosts from "../components/Widgets/recent-post-widget"

// import Layout from "../components/layout"
// import ArchivePosts from "../components/archivePosts"
import {SEO} from "../components/seo"

const CategoryTemplate = (props: { data: { wpgraphql: { category: any } } }) => {
  const {
    data: {
      wpgraphql: { category },
    },
  } = props
	const { name, posts } = category

  return (
		<SiteLayout>
			<HeroSection />
			<h1>Category: {name}</h1>
			<RecentPosts blogPosts={posts.nodes}/>
		</SiteLayout>
    // <Layout>
    //   <SEO title={`Category: ${name}`} />
    //   <h1>Category: {name}</h1>
    //   <ArchivePosts posts={posts} />
    // </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`

query GET_CATEGORY($id: ID!){
	wpgraphql {
		category(id: $id) {
			id
			name
			slug
			posts {
			nodes {
				id
				title
				link
				slug
				excerpt
				date
				tags {
					nodes {
						name
						link
						slug
					}
				}
				categories {
					nodes {
						name
						link
						slug
					}
				}
				campaigns {
					nodes {
						name
						slug
					# }
					}
				}
				featuredImage {
					mediaItemUrl
					sourceUrl
					modified
					databaseId
					imageFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
					altText
				}
			}
			}
		}
	}
}
`