import React from "react"
import styled from "styled-components"
import { device } from "../../../utils"

const StyledPara = styled.p`
  width: 100%;
  height: 54px;
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 1.13;
  letter-spacing: -0.2px;
	text-align: center;
	margin: auto;
	padding-top: 10px;


	@media ${device.upFromTablet} {
		width: 50%;
	}

	@media ${device.upFromLaptop} {
		width: 420px;
		height: 63px;
		font-size: 18px;
		line-height: 1.22;
		letter-spacing: -0.23px;
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
	para: string
}

export default function ({ para }: Props) {
	return (
		<StyledPara >
			{para}
		</StyledPara>

	)
}


