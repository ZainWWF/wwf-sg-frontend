const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

	console.log(`Using environment config: '${activeEnv}'`)

	require("dotenv").config({
		path: `.env.${activeEnv}`,
	})

module.exports = {
	wordPressUrl: `https://dev-wwfsg.pantheonsite.io`,
	pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
	title: 'World Wide Fund for Nature Singapore', // Navigation and Site Title
	titleAlt: 'WWF Singapore', // Title for JSONLD
	description: 'World Wide Fund for Nature Singapore',
	headline: 'World Wide Fund for Nature Singapore', // Headline for schema.org JSONLD
	url: process.env.URL, // Domain of your site. No trailing slash!
	siteLanguage: 'en', // Language Tag on <html> element
	logo: '/wwf-sg-logo.png', // Used for SEO
	ogLanguage: 'en_US', // Facebook Language

	// JSONLD / Manifest
	author: 'WWF Sg Webmaster', // Author for schemaORGJSONLD  

	twitter: '@wwfsg', // Twitter Username
	facebook: 'wwfsg', // Facebook Site Name
	// googleAnalyticsID: 'UA-47519312-7',

	skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

}

