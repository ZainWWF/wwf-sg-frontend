import React from "react"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

type Props = {
	setImage: FluidObject,
	link: string
}

export default function ({ setImage, link }: Props) {
	return (
		<div className="col-6 col-md-3 p-3">
			<Link to={`blog/${link}`}>
				<Img
					fluid={setImage} />
			</Link>
		</div>
	)
}


