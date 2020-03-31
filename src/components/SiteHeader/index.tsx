import React from "react"

import HeaderSearch from "./header-search"
import HeaderNavCollapsible from "./header-nav-collapsible"
import HeaderNav from "./header-nav"
import HeaderLogo from "./header-logo"
import styled from "styled-components"
import { device } from "../../utils"

const StyledNavContainer = styled.div`
	padding: 0;
	margin:0;
	width: calc(100% - 43px);	

	@media ${device.upToLaptopL}{
		width: 100%
	};
`

const StyledNav = styled.nav`

	width: 100%;
	margin: 0 0 0 18px;

	@media ${device.upToLaptop}{
		margin: 0;
	};

	@media ${device.upFromLaptopL}{
		margin: auto
	};


`

export default function () {
	return (
		<header
			id="siteHeader"
			className="site-header fixed-top"
		>
			<StyledNavContainer className="container-fluid">
			<StyledNav className="navbar navbar-expand-lg navbar-dark p-0 container-lg">				
				<HeaderLogo/>
				<HeaderNav/>
				<HeaderNavCollapsible/>
			</StyledNav>
			</StyledNavContainer>
			<div className="collapse" id="headerSearchbarCollapse">
				<div
					className="d-none d-lg-block"
					style={{ backgroundColor: "#f4f2f2" }}
				>
					<div className="container px-5 py-2">
						<HeaderSearch />
					</div>
				</div>
			</div>
		</header >)
}
