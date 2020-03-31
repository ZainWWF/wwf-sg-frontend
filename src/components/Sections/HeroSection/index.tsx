import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby";

import HeroImage from "./hero-image"
import HeroHeadline from "./hero-headline"
import HeroParagraph from "./hero-paragraph"
import HeroCta from "./hero-cta"
import { device } from "../../../utils";

export const query = graphql`

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
							mediaItemUrl
							sourceUrl
							modified
							databaseId
							imageFile {
								childImageSharp {
									# fluid( sizes:"(max-width: 1440px) 100vw, 1440px",  toFormat: WEBP){
										fluid( toFormat: WEBP){	
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
}
 
`;

const StyledHeroSection = styled.section`
	height: 435px;
  color: #fff;
	padding: 0;

	@media ${device.upFromLaptop} {
    height: 678px;
	}	
	
`

const StyledHeroCopy = styled.div`
	margin: auto;
	padding: 0;
`
export default function () {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges

	return (
		<StyledHeroSection
			className="d-flex align-items-center container-fluid"
		>
			<HeroImage
				heroImage={page.acfHeroSection.heroImage.imageFile.childImageSharp.fluid}
				altText={page.acfHeroSection.heroImage.altText} />

			<StyledHeroCopy className="container-lg">
				<div className="col-12 m-0 p-0">
					<HeroHeadline
						headline={page.acfHeroSection.heroHeadline}
					/>
					<HeroParagraph para={page.acfHeroSection.heroHeadlineParagraph} />
					<HeroCta
						link="/"
						ctaText={page.acfHeroSection.heroCallToAction}
					/>
				</div>
			</StyledHeroCopy>
		</StyledHeroSection>
	)
}


