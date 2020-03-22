import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { createLocalLink, device } from "../../utils"
import menuItems from "./menu-items.json"


const StyledMenuList = styled.li`
	border: 1px solid #ededed;
	@media ${device.laptop}{
		border:0;
		&:hover {
			.dropdown-menu {
				display: block;			
			}	
			.dropdown-item {
				white-space: normal;
				padding: 5px 14px;
				font-size: 16px;
				font-weight: 600;
				letter-spacing: -0.7px;
				&:hover {
					background-color: transparent;
				}
			}
		}
	} 
`

const StyledDropDownMenu = styled.div`
display: none;
	border: 1px solid #ededed;
	min-width: 232px;

	border-radius: 10;
	margin-top: 0;

	@media ${device.laptop} {
		border:0;
	}

	@media (max-width: 768px) {
		border: 0;
		background-color: #efefef;
		padding: 15px 0;
	}
	&:hover {
	display: block;
	
	} 
`

const StyledMenuLink = styled(Link)`
	&:after {
    content: "+";
    border: 0;
    vertical-align: 0;
		@media ${device.laptop} { 
      display: none;
    }
  }
`


const StyledDropDownLink = styled(Link)`

	white-space: normal;
	padding: 5px 14px;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.7px;
	&:hover {
		background-color: white;
	}

`;

export default function () {
	return (
		<>
			{menuItems.map(menuItem => {
				return (

					menuItem.childItems ?
						<StyledMenuList
							className="nav-item dropdown"
							key={menuItem.id}
						>
							<StyledMenuLink
								className="nav-link px-3 px-lg-0 dropdown-toggle"
								to={createLocalLink(menuItem.url)}
								title={menuItem.label}
								data-toggle="dropdown"
							>
								{menuItem.label}
							</StyledMenuLink>

							<StyledDropDownMenu
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								{menuItem.childItems.map(item => {
									const { featureColor, featureIcon } = {} as any
									// item.connectedObject.campaignsTaxonomyFields || {}

									return (
										<StyledDropDownLink
											key={item.id}
											className="dropdown-item px-3 d-flex align-items-center"
											to={createLocalLink(item.url)}
											title={item.label}
											style={{
												color: featureColor || "",
											}}
										>
											{featureIcon ? (
												<img
													className="mr-2"
													style={{ width: "32px", height: "32px" }}
													srcSet={featureIcon.srcSet}
													src={featureIcon.sourceUrl}
													alt={featureIcon.altText}
												/>
											) : (
													""
												)}
											<span>{item.label}</span>
										</StyledDropDownLink>
									)
								})}
							</StyledDropDownMenu>
						</StyledMenuList>
						:
						<li className="nav-item" key={menuItem.id}>
							<Link
								title={menuItem.label}
								className="nav-link px-3 px-lg-0"
								to={createLocalLink(menuItem.url)}
							>
								<div>{menuItem.label}</div>
							</Link>
						</li>
				)
			})
			}
		</>
	)
}

