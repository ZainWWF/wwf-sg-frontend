import React from "react"
import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"
import { device } from "../../../utils"

type Props = {
	earthImage: FluidObject,
	altText: string
}

const StyledImage = styled.div`
	position: relative;
	z-index:200;
		
	@media ${device.upFromMobileM} {
		width: 195px;	
	}

	@media ${device.upFromMobileL} {
		width: 230px;	
	}	

	@media ${device.upFromTablet} {
		width: 330px;	
		left: 60px;
		top:-20px;
	}	

	@media ${device.upFromLaptop} {
    width: 533px;
		left: 40px;
		top:-60px;
	}	

	@media ${device.upFromLaptopL} {    
		left: 140px;
	}	
`

export default function ({ earthImage, altText }: Props) {

	return (
		<StyledImage >
			<Img
				style={{ "minWidth": 180 }}
				fluid={earthImage}
				alt={altText}
			/>
		</StyledImage>)
}

