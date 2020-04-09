import React from "react"
import styled from "styled-components"

const StyledSvg = styled.div`
	position: relative;
	width: 100%;
	height:auto;
	margin-top: -1px;
`

export default function () {
	return (
		<StyledSvg>
			<svg width="100%" height="100%" viewBox="0 0 1440 155" xmlns="http://www.w3.org/2000/svg">
				<path d="M60.1172 91.9352L0 76.7222V8.03664e-09H1268.13C1212.52 0.000194202 1147.31 3.51976 1082.11 15.7982C1013.14 29.0309 944.179 52.0622 875.214 75.0936C823.945 92.2154 772.676 109.337 721.406 122.433C601.172 153.145 480.938 160.288 360.703 149.075C240.469 137.432 120.234 107.435 60.1172 91.9352ZM1440 7.97809L1382.7 4.37017C1355.18 2.50645 1315.07 -0.000163885 1268.13 8.03664e-09H1440V7.97809Z" fill="#F4F2F2" />
			</svg>
		</StyledSvg>
	)
}