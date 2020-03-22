import React from "react"
import styled  from 'styled-components'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
//@ts-ignore
import { Wave }  from "../../../utils/svg-icons"


export const query = graphql`

fragment AcfImage on WPGraphQL_MediaItem {
  
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
}

query {
  wpgraphql {
    pages(where: {title: "Home"}) {
      edges {
        node {
          slug
          title
          acfHeroSection {
            heroCallToAction
            heroCallToActionUrl
            heroHeadline
            heroHeadlineParagraph
            heroImage {
              ...AcfImage
            }
          }
        }
      }
    }
  }
}
 
`;


const StyledLink = styled(Link)`	
	position: relative;
	margin-left: 0;
	vertical-align: super;
	
`

const StyledHeroSection =  styled.section`
  height: 500px;
  color: #fff;
  background-color: #fff;
	@media (min-width: 992px) {
    padding: 6rem 0 !important;
    height: 850px;
    min-height: 90vh;
  }
	
`
const StyledTitle = styled.h2`
  font-size: 32px;
  line-height: 0.88;
  margin-bottom: 24px;

	@media (min-width: 992px) {
    max-width: 788px;
    font-size: 60px;
    line-height: 0.83;
    margin: auto;
    margin-bottom: 1rem;
  }
`

const StyledImage = styled(Img)`
	height: 100%;
`

export default function(){

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges


	return (
		<StyledHeroSection
			className="wwf-sg-section d-flex align-items-center"
		>
			<div className="wwf-sg-section-bg">
				<StyledImage fluid={page.acfHeroSection.heroImage.imageFile.childImageSharp.fluid}/>
			</div>

			<div className="wwf-sg-section-bg-overlay"></div>

			<div className="wwf-sg-section-divider wwf-sg-section-divider-top"></div>

			<div className="wwf-sg-section-divider wwf-sg-section-divider-bottom">
				<Wave />
			</div>

			<div className="wwf-sg-container container">
				<div className="wwf-sg-row row align-items-start">
					<div className="wwf-sg-column col-10 offset-1 col-md-5 col-lg-6 offset-lg-0 text-center text-md-left">
						<StyledTitle>
							{page.acfHeroSection.heroHeadline}
						</StyledTitle>
						<p className="">
							{page.acfHeroSection.heroHeadlineParagraph}
						</p>
						<StyledLink
							className="btn btn-outline-secondary btn-lg"
							to="/">
							{page.acfHeroSection.heroCallToAction}
						</StyledLink>
					</div>
				</div>
			</div>
		</StyledHeroSection>
	)
}


