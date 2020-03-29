import React from "react"
import he from "he";
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import { StyledSection } from "../styles/styled-components/wp-styled-post-section"
import Helmet from "react-helmet"
export const postQuery = graphql`

  query($databaseId: Int!) {
		allSite {
			edges {
				node {
					siteMetadata {
						siteUrl
					}
				}
			}
  }
		wpgraphql {
			posts(where : {id : $databaseId}){
				edges {
					node {
						id
						databaseId
						title
						link
						excerpt
						content
						date
						modified
						uri
						featuredImage {
							sourceUrl
							altText
						}
					}
				}
			}
		}
	}	
`

export default function ({ data }: any) {

	const { allSite, wpgraphql } = data;
	const { posts: { edges: allPosts } } = wpgraphql;
	const [{  node: post }] = allPosts

	const { edges: sites } = allSite
	const [{ node: {siteMetadata : {siteUrl}} }] = sites

	const title = he.decode(post.title)

	const parsedExcerpt = /<p>(.*)(\[.|<)/.exec(post.excerpt)

	const excerpt = parsedExcerpt ? he.decode(parsedExcerpt[1]) : ""

	const banner = post.featuredImage ? post.featuredImage.sourceUrl : ""

	return (

		<SiteLayout
			title={title}
			article={true}
			desc={excerpt}
			banner={banner}
			pathname={post.uri}
			node={{
				first_publication_date: post.date,
				last_publication_date: post.modified
			}}
		>
			<Helmet>
				<link rel={'canonical'} href={`${siteUrl}/${post.uri}`} />
			</Helmet>
			<StyledSection className="wwf-sg-section">
				<div className="wwf-sg-container container">
					<div className="wwf-sg-row row">
						<div className="wwf-sg-column col">
							<div className="row no-gutters">
								<div className="col-12 px-4 mr-auto entry-content ">
									<div
										style={{ fontSize: 34, fontWeight: 700 }}
										dangerouslySetInnerHTML={{
											__html: post.title
										}}
									/>
									<div
										style={{ fontSize: "1.1rem" }}
										dangerouslySetInnerHTML={{
											__html: post.content
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="wwf-sg-section-bg-popover"></div>
			</StyledSection >
		</SiteLayout>
	)
}


