import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby";
import { device } from "../../../utils"
import SetOfFourHeadline from "./set-of-four-headline"
import SetOfFourImage from "./set-of-four-image"

export const query = graphql`

fragment SetOfFourImage on WPGraphQL_MediaItem {
  
  mediaItemUrl
  sourceUrl
  modified
  databaseId
  imageFile {
    childImageSharp {
			fluid(maxWidth: 140, toFormat: WEBP){
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
              ...SetOfFourImage
            }
            setOfFourImage2{
              ...SetOfFourImage
            }
						setOfFourImage3{
              ...SetOfFourImage
            }
						setOfFourImage4{
              ...SetOfFourImage
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
	max-width: 1440px;
  position: relative;
  background-color: #f4f2f2;
	padding-top: 40px;
	margin-top: -2px;
  margin-bottom: -1px;


	media ${device.upFromTablet}{
		padding-top: 75px;
	}

`

const SetOfFourSection = () => {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges

	return (
		<StyledSection>
			<div className="container">
				<SetOfFourHeadline
					headline={page.acfSetOfFourSection.setOfFourHeadline}
				/>
				<div className="row">
					<div className="col">
						<div className="row no-gutters">
							<SetOfFourImage
								setImage={page.acfSetOfFourSection.setOfFourImage1.imageFile.childImageSharp.fluid}
								link={page.acfSetOfFourSection.setOfFourSlug1}
							/>
							<SetOfFourImage
								setImage={page.acfSetOfFourSection.setOfFourImage2.imageFile.childImageSharp.fluid}
								link={page.acfSetOfFourSection.setOfFourSlug2}
							/>
							<SetOfFourImage
								setImage={page.acfSetOfFourSection.setOfFourImage3.imageFile.childImageSharp.fluid}
								link={page.acfSetOfFourSection.setOfFourSlug3}
							/>
							<SetOfFourImage
								setImage={page.acfSetOfFourSection.setOfFourImage4.imageFile.childImageSharp.fluid}
								link={page.acfSetOfFourSection.setOfFourSlug4}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="wwf-sg-section-bg-popover"></div> */}
		</StyledSection >
	)
}

export default SetOfFourSection
