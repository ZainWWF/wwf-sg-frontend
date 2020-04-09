const  website  = require('./config')
module.exports = {
	// pathPrefix: "/wwf-sg-frontend",
	// siteMetadata: {
	// 	title: `WWF Singapore`,
	// 	description: `Wordl Wide Fund for Nature Website`,
	// 	author: `WWF SG Webmaster`,
	// 	wordPressUrl: `https://dev-wwfsg.pantheonsite.io`,
	// },
	/* General Information */
	pathPrefix: website.pathPrefix,
	siteMetadata: {
		wordPressUrl: website.wordPressUrl,
		siteUrl: website.url + website.pathPrefix, // For gatsby-plugin-sitemap
		pathPrefix: website.pathPrefix,
		title: website.title,
		titleAlt: website.titleAlt,
		description: website.description,
		banner: website.logo,
		headline: website.headline,
		siteLanguage: website.siteLanguage,
		ogLanguage: website.ogLanguage,
		author: website.author,
		twitter: website.twitter,
		facebook: website.facebook
	},
	plugins: [

		// Setup WPGraphQL.com to be the source
		'gatsby-plugin-advanced-sitemap',
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `WPGraphQL`,
				// This is field under which it's accessible
				fieldName: `wpgraphql`,
				// Url to query from
				url: `https://dev-wwfsg.pantheonsite.io/graphql`,
			},
		},
		// `gatsby-plugin-react-helmet-async`,
		`gatsby-plugin-react-helmet`,
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `images`,
		// 		path: `${__dirname}/src/images`,
		// 	},
		// },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `WWF Singapore`,
				short_name: `WWFSg`,
				start_url: `/`,
				background_color: `#f0f2f5`,
				theme_color: `#001529`,
				display: `minimal-ui`,
				icon: `src/images/wwf-icon-32x32.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`,
		`gatsby-transformer-json`
	],
}
