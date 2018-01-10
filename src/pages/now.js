import React from 'react'
import Link from 'gatsby-link'

const NowPage = () => (
	<div>
		<Link to="/">Go back to the homepage</Link>

		<h1>Projects</h1>
		<p>What Am I Up To Now?</p>

		<div className="proj-card">
			<div className="proj-name">
				#100DaysOfCode Challenge Official Website
			</div>
			<div className="proj-desc">
			</div>
		</div>
	</div>
)

export default NowPage
