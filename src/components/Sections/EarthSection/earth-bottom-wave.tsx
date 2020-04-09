import React from "react"
import styled from "styled-components"
import { device } from "../../../utils"

const StyledSvg = styled.div`
	position: relative;
	width: 100%;
	height:auto;
	top: 0px;

  background-color: #f4f2f2;

	@media ${device.upFromLaptopL} {
		top: -1px;
	};
`

export default function () {
	return (
		<StyledSvg>
			<svg width="100%" height="100%" viewBox="0 0 1440 191" xmlns="http://www.w3.org/2000/svg"
				stroke-width="1" stroke="none"
			>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1440 0H0V85.4813L57.1172 99.9352C117.234 115.435 237.469 145.432 357.703 157.075C477.938 168.288 598.172 161.145 718.406 130.433C769.676 117.337 820.945 100.215 872.214 83.0937C941.179 60.0623 1010.14 37.0309 1079.11 23.7982C1199.34 1.15717 1319.58 8.29817 1379.7 12.3702L1439.81 16.1552V191H1440V0Z" fill="white" />
			</svg>
		</StyledSvg>
	)

}