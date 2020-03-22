/**
 * SiteLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import SiteHeader from "../SiteHeader"
// import SiteFooter from "./SiteFooter"


type Props = {
	children: React.ReactNode,
	location: string
}
export default function ({ children, location }: Props) {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<div>

			<SiteHeader
			// location={location}
			// siteTitle={data.site.siteMetadata.title}
			/>

			<main>{children}</main>

			{/* <SiteFooter location={location} /> */}
		</div >
	)
}

