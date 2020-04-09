import React from "react"
import styled from 'styled-components'

import HeaderNavBtn from "./header-nav-btn"


const HeaderToggleNavButton = styled.button`
	position: relative;
	top: 3px;
	margin: 0 12px;
  border: 0;
  &:focus {
    outline: 0;
	}
	background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/></svg>");
`

const StyledSpan = styled.span`
	width: 100%;

`

export default function () {
	return (
		<div className="d-lg-none py-3">
			<HeaderNavBtn label={"Get Involved"} link={"/"} small />
			<HeaderNavBtn label={"Donate"} link={"/"}  small/>

			<HeaderToggleNavButton
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#headerNavbarCollapse"
				aria-controls="headerNavbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<StyledSpan
					className="navbar-toggler-icon"
				></StyledSpan>
			</HeaderToggleNavButton>
		</div>
	)
}
