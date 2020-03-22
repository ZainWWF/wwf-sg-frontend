import React from "react"
import SiteLayout from "../components/SiteLayout"
// import Seo from "../components/Seo"

import HeroSection from "../components/Sections/HeroSection"
import SetOfFourSection from "../components/Sections/SetOfFourSection"
import EarthSection from "../components/Sections/EarthSection"
import RecentPosts from "../components/Sections/RecentPosts"




type Props = {
	location: string
}

export default function({ location }:Props)  {

	return (
		<SiteLayout location={location}>
						<HeroSection />
						<EarthSection />
						<SetOfFourSection />
						<RecentPosts /> 
			{/* <Seo title="Home Page"/>
			<RecentPosts /> */}
		</SiteLayout>
	)
}


