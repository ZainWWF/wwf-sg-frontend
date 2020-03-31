import React from "react"
import styled from "styled-components"
//@ts-ignore
import downArrowImg from "../../../images/down-arrow.png"
import { device } from "../../../utils"


const StyledHeadline = styled.h2`
 width: 201px;
  height: 112px;
  font-family: WWF;
  font-size: 32px;
  line-height: 0.88;
  letter-spacing: -0.09px;
	text-align: right;
	
	@media ${device.upToMobileS} {
		width: 150px;
		font-size: 24px;
	}

	@media ${device.upFromLaptop} {
		width: 346px;
  	height: 220px;
  	font-size: 60px;
  	line-height: 0.92;
  	letter-spacing: -0.17px;
	}	

`

const StyledHeadlineBlock = styled.div`
	position: absolute;
	right: 0px;
	margin-right: 16px;
	padding-top: 30px;

	@media ${device.upFromTablet} {
		margin-right: 78px;
		padding-top: 74px;
		
	}	

	@media ${device.upFromLaptop} {
		margin-right: 68px;
		padding-top: 84px;
	}	

	@media ${device.upFromLaptopL} {
		margin-right: 200px;
	}	

`

type Props = {
	headline: string
}

export default function ({headline} :Props) {
	return (
		<StyledHeadlineBlock 	className="text-right">
		<StyledHeadline >
			{headline}
		</StyledHeadline>
		<a
			className=""
			href="/"
		>
			<img
				className=""
				src={downArrowImg}
				alt="down-arrow"
			/>
		</a>
	</StyledHeadlineBlock>)
}

