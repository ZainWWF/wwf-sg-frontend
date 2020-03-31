import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { device } from "../../utils"
//@ts-ignore

const StyledLink = styled(Link)``

const StyledImage = styled.img`
	position: relative;
	margin: 0;
	vertical-align: super;
	z-index: 1;
	width: 100%;
  height: auto;
	margin-left: 18px;
	max-width: 35px;
	top:-8px;

	@media ${device.upFromLaptop}{
		margin-left: 43px;
		max-width: 80px;
		top: -30px;
	}

`

export default function () {
	return (

		<StyledLink
			to="/">
			<StyledImage
				// className="site-logo"
				src="/wwf-sg-logo.png"
				alt="World Wide Fund Logo"
			/>
		</StyledLink>

	)
}
