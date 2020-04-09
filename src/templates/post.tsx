import React from "react"
import he from "he";
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import styled from "styled-components"
import {device} from "../utils"
import { StyledWPPostSection } from "../styles/styled-components/styled-wp-post-section"
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


const StyledSection = styled(StyledWPPostSection)`
  background-color: #f4f2f2;
	margin: auto;
	padding: 120px 18px;

	@media ${device.upFromLaptop}{
		padding: 240px 100px;
	}
`


export default function ({ data }: any) {

	const { allSite, wpgraphql } = data;
	const { posts: { edges: allPosts } } = wpgraphql;
	const [{ node: post }] = allPosts

	const { edges: sites } = allSite
	const [{ node: { siteMetadata: { siteUrl } } }] = sites

	const title = he.decode(post.title)

	const parsedExcerpt = /<p>(.*)(\[.|<)/.exec(post.excerpt)

	const excerpt = parsedExcerpt ? he.decode(parsedExcerpt[1]) : ""

	const banner = post.featuredImage ? post.featuredImage.sourceUrl : ""
	

	return (

		<SiteLayout
			headerColor={"black"}
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
			<StyledSection>
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
			</StyledSection >
		</SiteLayout>
	)
}


