import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import { device } from "../../utils"

const StyledLink = styled(Link)`	
	
  font-family: WWF;
	padding-top: 0px;
	padding: 0 10px;
	height: 33px;
	font-size: 18px;
	letter-spacing: -0.23px;

	@media ${device.upFromLaptop}{
		width: 144px;
		height: 60px;
		font-size: 24px;
		letter-spacing: -0.31px;
		line-height: 50px;
	}

	`

type Props = {
	label: string,
	link: string,
	small?: boolean
}

export default function ({ label = "", link = "/", small = false }: Props) {
	return (
		<StyledLink
			className={`btn btn-outline-secondary ml-2 ${small ? "" : "btn-sm px-2"}`}
			to={link}>
			{label}
		</StyledLink>

	)
}
