import React from "react"
import styled from 'styled-components'

import { device } from "../../utils"

import HeaderNavCollapsibleMenu from "./header-nav-collapsible-menu"
import HeaderNavCollpasibleSearch from "./header-nav-collapsible-search"
import HeaderSearch from "./header-search"
import HeaderNavBtn from "./header-nav-btn"


const StyledNavbar = styled.ul`
	padding: 0 0 0 79px;
	@media ${device.upToTablet}{
    background-color: #fff;
    .nav-link {
      color: #000 !important;
    }
  }
`


export default function () {
	return (
		<div
			className="collapse navbar-collapse  py-lg-4"
			id="headerNavbarCollapse"
		>
			<StyledNavbar className="navbar-nav mr-auto">
				<li className="nav-item d-lg-none">
					<HeaderSearch />
				</li>
				<HeaderNavCollapsibleMenu />
			</StyledNavbar>

			<ul className="navbar-nav d-lg-none d-lg-flex py-3">
				<li className="nav-item nav-button pt-2 mt-3">
					<HeaderNavBtn label={"Get Involved"} link={"/"} />
				</li>

				<li className="nav-item nav-button pt-2 mt-3">
					<HeaderNavBtn label={"Donate"} link={"/"} />
				</li>
			</ul>
			<HeaderNavCollpasibleSearch />
		</div>
	)
}
