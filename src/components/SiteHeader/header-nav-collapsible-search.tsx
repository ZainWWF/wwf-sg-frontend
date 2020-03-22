import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { device } from "../../utils"



const StyledListNavItem = styled.li`
  /* @media ${device.desktop} {
    border: 1px solid #ededed;
  } */
`

const StyledLink = styled(Link)`
	position: relative;
	margin-left: 0;
	vertical-align: super;		
	@media ${device.desktop} {
		margin-top: -24px;
	}
	@media ${device.desktopL} {
		margin-top: -12px;
	}	
`

export default function () {
	return (

		<StyledListNavItem className="nav-item nav-icon">
			<StyledLink to="/"
				className="nav-link mr-0"
				data-toggle="collapse"
				data-target="#headerSearchbarCollapse"
				aria-controls="headerSearchbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="27"
					height="30"
					viewBox="0 0 27 30"
				>
					<path
						fill="#ffffff"
						d="M19.41 18.555a8.474 8.474 0 001.652-5.024c0-4.704-3.827-8.531-8.53-8.531C7.826 5 4 8.827 4 13.531c0 4.704 3.827 8.532 8.531 8.532 1.88 0 3.613-.619 5.024-1.652L23.145 26 25 24.144l-5.59-5.589zm-6.879.883a5.913 5.913 0 01-5.906-5.907 5.913 5.913 0 015.906-5.906 5.913 5.913 0 015.906 5.906 5.913 5.913 0 01-5.906 5.907z"
					/>
				</svg>
				<span className="d-md-none">Search</span>
			</StyledLink>
		</StyledListNavItem>

	)
}
