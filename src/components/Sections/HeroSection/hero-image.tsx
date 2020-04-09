import React from "react"
import styled from 'styled-components'
import Img, { FluidObject } from "gatsby-image"
import { device } from "../../../utils"


const StyledImageWrapper = styled.div`
				
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: auto;
	max-width: 1440px;
	margin: auto;
		
	@media ${device.upFromLaptopL} { 
		top: initial;
    left: initial;
	};

`

const StyledImage = styled(Img)`
	height: 100vh;

	@media ${device.upFromLaptop} { 
		height: initial;
	};

`

type Props = {

	heroImage: FluidObject, altText: string
}

export default function ({ heroImage, altText }: Props) {

	return (
		<StyledImageWrapper>
			<StyledImage
				// style={{"height": "100vh"}}
				fluid={heroImage}
				alt={altText} />
		</StyledImageWrapper>
	)
}


