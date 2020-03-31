import React from "react"
import styled from 'styled-components'
import { device } from "../../../utils"

const StyledTitle = styled.h2`	
	width: 100%;
  height: 28px;
  font-family: WWF;
  font-size: 32px;
  line-height: 0.88;
  text-align: center;
	margin: auto;

	@media ${device.upFromLaptop} {
		width: 460px;
		height: 60px;
		font-size: 52px;
		line-height: 1.15;
		text-align: left;
		margin: 0 18px;	
	}
	
	@media ${device.upFromLaptopL} {
		margin: 0 43px;	
  }

	@media ${device.upFromDesktop} {
		margin: 0 22px;	
  }
`

type Props = {
	headline: string
}

export default function ({ headline }: Props) {
	return (
		<StyledTitle>
			{headline}
		</StyledTitle>
	)
}


