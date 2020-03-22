import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import styled from 'styled-components'
import Img from "gatsby-image"
//@ts-ignore
import downArrowImg from "../../../images/down-arrow.png"

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
          acfEarthSection {
            earthHeadline
            earthCallToAction
						earthImage {
              ...AcfImage
            }
          }
        }
      }
    }
  }
}
 
`;


const StyledSection = styled.section`
	background-color: #fff;
`;

export default function () {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges


	return (
		<StyledSection className="wwf-sg-section" >
			<div className="wwf-sg-container container">
				<div className="wwf-sg-row row">
					<div className="wwf-sg-column col-6 col-lg">
						<Img
							className="w-100 p-lg-4"
							fluid={page.acfEarthSection.earthImage.imageFile.childImageSharp.fluid} />
					</div>
					<div className="wwf-sg-column col-6 col-lg-4 d-flex align-items-center">
						<div className="text-right">
							<h2 className="">
								{page.acfEarthSection.earthHeadline}
							</h2>
							<a
								className=""
								href="/"
							>
								<img
									className=""
									src={downArrowImg}
									alt="down-arrow"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="wwf-sg-section-bg-popover"></div>
		</StyledSection>
	)

}

