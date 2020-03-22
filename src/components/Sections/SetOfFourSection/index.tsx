import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
//@ts-ignore
import { Wave } from "../../../utils/svg-icons"
import { device } from "../../../utils"

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

{
  wpgraphql {
    pages(where: {title: "Home"}) {
      edges {
        node {
          acfSetOfFourSection {
            setOfFourHeadline
            setOfFourImage1{
              ...AcfImage
            }
            setOfFourImage2{
              ...AcfImage
            }
						setOfFourImage3{
              ...AcfImage
            }
						setOfFourImage4{
              ...AcfImage
            }
						setOfFourSlug1
            setOfFourSlug2
            setOfFourSlug4
            setOfFourSlug3
          }
        }
      }
    }
  }
} 
`;

const StyledSection = styled.section`
  background-color: #f4f2f2;
	padding-top: 6rem;
	@media ${device.tablet}{
		padding-top: 12rem;
	};

	@media ${device.laptop}{
		padding-top: 24rem;
  };
`

const StyledH2 = styled.h2`
  font-size: 32px;
  line-height: 0.88;
  margin-bottom: 24px;

	@media ${device.laptop}{
    max-width: 788px;
    font-size: 60px;
    line-height: 0.83;
    margin: auto;
    margin-bottom: 48px;
  }
`

const SetOfFourSection = () => {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges

	return (
		<StyledSection className="wwf-sg-section">
			<div className="wwf-sg-section-divider wwf-sg-section-divider-top">
				<Wave className="" fill="#fff" />
			</div>

			<div className="wwf-sg-container container">
				<div className="wwf-sg-row row">
					<div className="wwf-sg-column col">
						<StyledH2 className="text-md-center">
							{page.acfSetOfFourSection.setOfFourHeadline}
						</StyledH2>
					</div>
				</div>

				<div className="wwf-sg-row row">
					<div className="wwf-sg-column col">
						<div className="row no-gutters">
							<div className="col-6 col-md-3 p-3">
								<Link to={page.acfSetOfFourSection.setOfFourSlug1}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage1.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
							<div className="col-6 col-md-3 p-3">
								<Link to={page.acfSetOfFourSection.setOfFourSlug2}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage2.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
							<div className="col-6 col-md-3 p-3">
								<Link to={page.acfSetOfFourSection.setOfFourSlug3}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage3.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
							<div className="col-6 col-md-3 p-3">
								<Link to={page.acfSetOfFourSection.setOfFourSlug4}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage4.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="wwf-sg-section-bg-popover"></div>
		</StyledSection >
	)
}

export default SetOfFourSection
