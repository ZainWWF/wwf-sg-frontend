import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import styled from 'styled-components'

import EarthImage from "./earth-image"
import EarthHeadline from "./earth-headline"
import EarthTopWave from "./earth-top-wave"
import EarthBottomWave from "./earth-bottom-wave"

export const query = graphql`

query {
  wpgraphql {
    pages(where: {title: "Home"}) {
      edges {
        node {
          slug
          title
          acfEarthSection {
            earthHeadline
            earthCallToAction
						earthImage {
							mediaItemUrl
							sourceUrl
							modified
							databaseId
							imageFile {
								childImageSharp {
									fluid(maxWidth: 320, toFormat: WEBP){
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


const StyledSection = styled.section`
	background-color: transparent;
	margin:0;
	padding:0;	
	top: 0px;
	position: relative;
	z-index: 100;

`;

const StyledEarthSection = styled.section`
    margin: auto;
    padding: 0;
    background-color: white;
		min-width: 100%;
		max-height: 450px;
`;


export default function () {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges

	return (
		<StyledSection className="container-fluid" >
			<EarthTopWave />
			<StyledEarthSection className="row container-lg" >
				<EarthImage
					earthImage={page.acfEarthSection.earthImage.imageFile.childImageSharp.fluid}
					altText={page.acfEarthSection.earthImage.altText}
				/>
				<EarthHeadline
					headline={page.acfEarthSection.earthHeadline}
				/>
			</StyledEarthSection>
			<EarthBottomWave/>
		</StyledSection>
	)

}

