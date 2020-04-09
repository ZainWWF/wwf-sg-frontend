import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { device } from "../../../utils"
const StyledLink = styled(Link)`	

	width: 175px;
  height: 60px;
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: -0.82px;
	text-align: center;
	padding: 0;
	line-height: 55px;
	position: relative;
	top: 32px;

	left: calc(100vw/2 - 97.5px);
	
	/* @media ${device.upFromTablet} {
		left: calc(100vw/2 - 97.5px - 18px);
  }; */

	@media ${device.upFromLaptop} {
		left: 144px;
	};

	@media ${device.upFromLaptopL} {
		left: 174px;
  }
`

type Props = {
	ctaText: string
	link: string
}

export default function ({ ctaText, link = "/" }: Props) {
	return (
		<StyledLink
			className="btn btn-outline-secondary btn-lg"
			to={link}>
			{ctaText}
		</StyledLink>

	)

}


