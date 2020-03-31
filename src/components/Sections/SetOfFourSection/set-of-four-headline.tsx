import React from "react"
import styled from 'styled-components'
import { device } from "../../../utils"

const StyledH2 = styled.h2`
		width: 280px;
    /* height: 93px; */
    font-family: WWF;
    line-height: 0.88;
    text-align: center;
    margin: auto;

	@media ${device.upFromLaptop}{
    margin-bottom: 50px;
    width: 788px;
		width: 788px;
  	/* height: 169px; */
  	font-size: 60px;
		line-height: 0.83;
		text-align: center;

	}
	
`

type Props = {
	headline: string
}

export default function ({ headline }: Props) {
	return (
		<StyledH2 className="text-md-center">
			{headline}
		</StyledH2>
	)
}


