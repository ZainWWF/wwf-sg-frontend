import React from "react"
import SiteLayout from "../components/site-layout"
// import Seo from "../components/Seo"

import HeroSection from "../components/Sections/HeroSection"
import SetOfFourSection from "../components/Sections/SetOfFourSection"
import EarthSection from "../components/Sections/EarthSection"
// import RecentPostsWidget from "../components/Widgets/RecentPostsWidget"




type Props = {
	location: string
}

export default function({ location }:Props)  {

	return (
		<SiteLayout location={location}>
						<HeroSection />
						<EarthSection />
						<SetOfFourSection />
			{/* <Seo title="Home Page"/>
			<HeroSection />
			<EarthSection />
			<SetOfFourSection />
			<RecentPostsWidget /> */}
		</SiteLayout>
	)
}


