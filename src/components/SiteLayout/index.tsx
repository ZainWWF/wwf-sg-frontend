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
import styled from "styled-components"

interface Props extends SeoProps {
	children: React.ReactNode,
	headerColor: string
}

const StyledLayout = styled.div``

export default function ({ children, ...props }: Props) {
	return (
		<StyledLayout>
			<SEO {...props} />
			<SiteHeader headerColor={props.headerColor}/>
			<main>{children}</main>
			<SiteFooter />
		</StyledLayout>
	)
}

