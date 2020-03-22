import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { device } from "../../utils"
//@ts-ignore
import wwfLogo from "../../images/wwf-sg-logo.png"


const StyledLink = styled(Link)`
	position: relative;
	margin-left: 0;
	vertical-align: super;
	margin-top: -28px;
	
	@media (min-width: 768px) {
		margin-top: -24px;
	}
	@media (min-width: 992px){
		margin-top: -12px;
	}
`

const StyledImage = styled.img`
	margin: 0 10px;
	height: 39px;
	max-width: 80px;
	z-index: 1;
	@media (min-width: 768px) {
		height: 44px;
	}
	@media (min-width: 992px){
		height: auto;
	}
	@media ${device.mobileS}{
		margin: 0 5px;
	}
`

export default function () {
	return (

		<StyledLink to="/">
			<StyledImage
				className="site-logo"
				src={wwfLogo}
				alt="World Wide Fund Logo"
			/>
		</StyledLink>

	)
}
