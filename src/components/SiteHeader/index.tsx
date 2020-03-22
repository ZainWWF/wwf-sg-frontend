import React from "react"

import HeaderSearch from "./header-search"
import HeaderNavCollapsible from "./header-nav-collapsible"
import HeaderNav from "./header-nav"
import HeaderLogo from "./header-logo"


export default function () {
	return (
		<header
			id="siteHeader"
			className="site-header fixed-top"
		>
			<div className="container-lg px-0 px-lg-3">
				<nav className="navbar navbar-expand-lg navbar-dark p-0">
					<HeaderLogo/>
					<HeaderNav/>
					<HeaderNavCollapsible/>
				</nav>
			</div>
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
