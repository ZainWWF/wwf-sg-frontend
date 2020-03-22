import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { device } from "../../utils"

import HeaderNavCollapsibleMenu from "./header-nav-collapsible-menu"
import HeaderNavCollpasibleSearch from "./header-nav-collapsible-search"
import HeaderSearch from  "./header-search"

const StyledLink = styled(Link)`
	position: relative;
	margin-left: 0;
	vertical-align: super;		
	border: 1px solid #ededed;
	@media ${device.desktop} {
		margin-top: -24px;
	}
	@media ${device.desktopL} {
		margin-top: -12px;
	}	
`

const StyledNavbar = styled.ul`
	@media (max-width: 768px) {
    background-color: #fff;
    .nav-link {
      color: #000 !important;
    }
  }
`


export default function () {
	return (
		<div
			className="collapse navbar-collapse ml-lg-4 py-lg-4"
			id="headerNavbarCollapse"
		>
			<StyledNavbar className="navbar-nav mr-auto">
				<li className="nav-item d-lg-none">
					<HeaderSearch />		
				</li>
				<HeaderNavCollapsibleMenu />
			</StyledNavbar>
			<ul className="navbar-nav d-none d-lg-flex">
				<li className="nav-item nav-button pt-2">
					<StyledLink
						className="btn btn-outline-secondary  "
						to="/">
						GET INVOLVED
					</StyledLink>
				</li>
				<li className="nav-item nav-button ml-2 pt-2">
					<Link
						className="btn btn-outline-secondary"
						to="https://donate.wwf.sg/">
						DONATE
					</Link>
				</li>
			<HeaderNavCollpasibleSearch/>
			</ul>
		</div>
	)
}
