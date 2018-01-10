import React from 'react'
import Link from 'gatsby-link'

const Projects = () => (
	<div>
		<Link to="/">Go back to the homepage</Link>

		<h1>Projects</h1>
		<p>Here are some projects I've created</p>

		<div className="proj-card">
			<div className="proj-name">
			#100DaysOfCode Challenge Official Website
			</div>
			<div className="proj-desc">

			</div>
		</div>

		<section className="work-projects">
			<ul>
				<li>https://fullcirclehome.com/ 98% of the theme/front end of the site was done by me (Shopify is the platform there, I also worked on adding custom sections there)</li>
				<li>https://orioncoolers.com/ Worked on seamless WordPress/BigCommerce visual integration, + coupon feature (to add FREE products to cart based on coupons)</li>
				<li>https://www.ceocards.com worked on product customizer</li>
				<li>https://www.norwall.com/ Continuous maintenance and fixes.</li>
			</ul>
		</section>

		<section>
			<h3>Tech Stack</h3>
			<ul>
				<li>JavaScript (ES6)</li>
				<li>ReactJS</li>
				<li>Redux</li>
			</ul>
		</section>

		<section>
			<h3>Technologies I've worked with</h3>
			<div>List of Projects</div>
		</section>

	</div>
)

export default Projects
