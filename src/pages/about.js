import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
	<div>
		<h1>About</h1>

		<section className="social">
			<div>
				I am a Front End Web Developer with a focus on ReactJS/Redux. This site
				is built with ReactJS & GatsbyJS. I am excited to work with other
				frameworks as well.
			</div>
			<div>
				I am learning Golang (on my own as a hobby) and JavaScript and I work on
				improving my knowledge of it daily. (Go VanillaJS!) I am passionate
				about learning and teaching others to code.
			</div>
		</section>

		<section>
			<p>
				For 2.5 years, I've been a community leader at freeCodeCamp Toronto - a
				weekly meet-up for anyone interested in learning to code. The Toronto
				community is at more than 3900 members.
			</p>
		</section>

		<Link to="/">Go back to the homepage</Link>
	</div>
)

export default SecondPage
