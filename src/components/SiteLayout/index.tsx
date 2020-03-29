/**
 * SiteLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import SiteHeader from "../SiteHeader"
import SiteFooter from "../SiteFooter"
import { SEO, Props as SeoProps } from "../Seo"

interface Props extends SeoProps {
	children: React.ReactNode,
}
export default function ({ children, ...props }: Props) {
	return (
		<>
			<SEO {...props} />
			<SiteHeader />
			<main>{children}</main>
			<SiteFooter />
		</>
	)
}

