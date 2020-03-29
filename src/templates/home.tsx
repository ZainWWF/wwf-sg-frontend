import React from "react"
import { graphql} from "gatsby"
import SiteLayout from "../components/SiteLayout"
import HeroSection from "../components/Sections/HeroSection"
import SetOfFourSection from "../components/Sections/SetOfFourSection"
import EarthSection from "../components/Sections/EarthSection"
import RecentPosts from "../components/Widgets/recent-post-widget"
import styled from "styled-components"


const StyledSiteLayout = styled(SiteLayout)`
	background-color : black;
`


export default function(props: { data: { wpgraphql: { posts: { nodes: any } } } }){
  const {
    data: {
      wpgraphql: { posts:{ nodes: blogPosts }  },
    },
    // pageContext: { pageNumber, hasNextPage },
	} = props

  // const currentPage = pageNumber ? `- Page ${pageNumber}` : ``
  return (

		<StyledSiteLayout>
			<HeroSection />
			<EarthSection />
			<SetOfFourSection />
			<RecentPosts blogPosts={blogPosts}/>
		</StyledSiteLayout>
  )
}

export const query = graphql`

{
	wpgraphql {
		posts(first: 4, where: { status: PUBLISH }) {
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
							fluid(maxWidth: 480, maxHeight: 320 toFormat: WEBP){
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
`