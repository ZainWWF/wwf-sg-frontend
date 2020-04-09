import React from "react"
import {Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment/moment"
import styled from "styled-components";
import config from "../../../config"
import { createLocalLink, device } from "../../utils"

const StyledSection = styled.section`
	background-color: #f4f2f2;
`


const StyledWidgetTitle = styled.h2`
  font-family: WWF;
  font-size: 32px;
  line-height: 0.88;
  letter-spacing: -0.14px;
	text-align: center;
	@media ${device.laptop} {
		font-size: 60px;
    line-height: 0.83;
    margin: auto;
    margin-bottom: 48px;
		
	}
	@media ${device.desktop} {
    margin-bottom: 72px;
		
	}
`

const StyledEntryGrid = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
`

const StyledArticle = styled.article`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;

  word-wrap: break-word;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  margin-bottom: 1rem;
  margin-right: 1rem;

  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--white);

	@media ${device.laptop} {
    -ms-flex: 0 0 calc(50% - 0.5rem);
    flex: 0 0 calc(50% - 0.5rem);
    &:nth-child(even) {
      margin-right: 0;
    }
    &:nth-child(odd) {
      margin-right: 1rem;
    }
    margin-bottom: 1rem;
  }

	@media ${device.desktop} {
    margin-bottom: 2rem;
    -ms-flex: 0 0 calc(50% - 1rem);
    flex: 0 0 calc(50% - 1rem);
    &:nth-child(even) {
      margin-right: 0;
    }
    &:nth-child(odd) {
      margin-right: 2rem;
    }
  }
`


const StyledImage = styled(Img)`
	min-height: 150px;	
`

const StyledEntryTitled = styled.h3`
	padding-top:15px;
  font-size: 21px;
  font-weight: bold;
  line-height: 1.24;
  letter-spacing: -0.95px;
`

const StyledDateLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: #353535;
`

const StyledEntryTagLink = styled(Link)`
  font-size: 16px;
  letter-spacing: -0.25px;
  color: #f07d00;
`

const RecentPostsWidget = ({blogPosts}:any) => {

	return (
		<StyledSection className="wwf-sg-section">
			<div className="container">
				<div className="mb-5">
					<StyledWidgetTitle className="text-center">
						What's Hapenning
					</StyledWidgetTitle>
				</div>
				<StyledEntryGrid className="entry-grid mb-4">
					{blogPosts.map((post:any) => {
						return (
							<StyledArticle className="entry" key={post.id}>
								{post.featuredImage &&
									<Link to={"/blog/" + createLocalLink(post.link)}>
										<StyledImage
											className="w-100"
											alt={post.featuredImage.altText}
											fluid={post.featuredImage.imageFile.childImageSharp.fluid} />
									</Link>
								}
								<header className={`p-3 entry-header`}>
									<div className="campaigns-link mb-3">
										{post.campaigns.nodes.map((campaign:any, i:any) => {
											if (i > 1) return null
											return (

												<Link
													className={`entry-campaign`}
													style={{
														color:
															campaign.campaignsTaxonomyFields.featureColor,
														fontSize: "16px",
														fontWeight: 600,
														letterSpacing: "-0.7px",
													}}
													to={"/campaign/" + campaign.slug}
													key={campaign.slug}
													rel="category"
												>
													<Img
														className="mr-2"
														alt={campaign.campaignsTaxonomyFields.featureIcon.altText}
														style={{ width: "40px", float: "left" }}
														fluid={campaign.campaignsTaxonomyFields.featureIcon.imageFile.childImageSharp.fluid} />
													<span style={{ position: "relative", top: 8 }}>{campaign.name} </span>
												</Link>

											)
										})}
									</div>

									<Link to={"/blog/" + createLocalLink(post.link)}>
										<StyledEntryTitled
											className="entry-title"
											dangerouslySetInnerHTML={{
												__html: post.title,
											}}
										></StyledEntryTitled>
									</Link>

									<StyledDateLink
										className="entry-date"
										to={"/blog/" + createLocalLink(post.link)}
										rel="bookmark"
									>
										Published on {` `}
										<time className={`published`} dateTime={post.date}>
											{moment(post.date).format(`D MMM YYYY`)}
										</time>
									</StyledDateLink>
								</header>

								<div
									className="px-3 py-2 entry-content"
									dangerouslySetInnerHTML={{
										__html: post.excerpt
											? post.excerpt.replace(config.wordPressUrl, ``)
											: post.excerpt,
									}}
								/>

								<footer className="p-3 entry-footer">
									<div className="tags-links">
										<span className="screen-reader-text">Tags: </span>
										{post.tags.nodes.map((tag:any) => {
											return (
												<StyledEntryTagLink
													className="entry-tag"
													to={"/tags/" + tag.slug}
													key={tag.slug}
													rel="tag"
												>
													#{tag.name}
													{` `}
												</StyledEntryTagLink>
											)
										})}
									</div>
								</footer>
							</StyledArticle>
						)
					})}
				</StyledEntryGrid>
				<div className="mb-4 text-center">
					<Link className="btn btn-outline-primary" to={"/blog"}>
						Read More
          </Link>
				</div>
			</div>
		</StyledSection>
	)
}



export default RecentPostsWidget
