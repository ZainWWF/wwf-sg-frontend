import React from "react"
import styled from "styled-components"
import { device } from "../../../utils"


const StyledSvg = styled.div`
	position: relative;
	width: 100%;
	height:auto;
	top: 1px;

	@media ${device.upFromLaptopL} {
		top: 2px;
	};

`

export default function () {
	return (
		<StyledSvg>
			<svg width="100%" height="100%" viewBox="0 0 1440 140"  xmlns="http://www.w3.org/2000/svg"
				stroke-width="0" stroke="white"
			>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M60 52.0287L0 64.7672V139.009H1440V122.18L1380 125.35C1320 128.758 1200 134.74 1080 115.781C1011.17 104.7 942.337 85.4154 873.506 66.1302C822.337 51.7939 771.169 37.4576 720 26.4919C600 0.775934 480 -5.20428 360 4.18495C240 13.9334 120 39.0513 60 52.0287Z" fill="white" />
			</svg>
		</StyledSvg>



	)

}