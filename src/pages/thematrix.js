import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// import 

import styles from './thematrix.module.css'

const PrimaryButton = styled.button`
  color: orange;
  background-color: blue;
  font-size: 1em;
`

const FullScreenSection = styled.section`
  height: 100%;
  display: flex;
`

const SocialList = styled.ul``

const TheMatrix = () => (
	<div>
		<h1>Alexander Kallaway</h1>
		<h2>Front End Web Developer</h2>

		{/* Build it out at first in an simple way, then improve as we go */}

		<PrimaryButton>Button Button click on me</PrimaryButton>

		<section className={styles.social}>
			<ul>
				<li className={styles.tw}><a href="https://twitter.com/ka11away" target="_blank">Twitter</a></li>
				<li className={styles.ig}><a href="https://www.instagram.com/ka11away/" target="_blank">Instagram</a></li>
				<li className={styles.yt}><a href="https://www.youtube.com/c/DoTheOpposite" target="_blank">YouTube</a></li>
				<li className={styles.md}><a href="https://medium.com/@ka11away" target="_blank">Medium</a></li>
				<li className={styles.li}><a href="https://twitter.com/ka11away" target="_blank">LinkedIn</a></li>
			</ul>
		</section>


		<FullScreenSection>
			<p>Something Something</p>
		</FullScreenSection>

		<p>In-depth experience with platforms: BigCommerce, Shopify, WordPress</p>

		<section className="work-projects">
			<ul>
				<li>https://fullcirclehome.com/ 98% of the theme/front end of the site was done by me (Shopify is the platform there, I also worked on adding custom sections there)</li>
				<li>https://orioncoolers.com/ Worked on seamless WordPress/BigCommerce visual integration, + coupon feature (to add FREE products to cart based on coupons)</li>
				<li>https://www.ceocards.com worked on product customizer</li>
				<li>https://www.norwall.com/ Continuous maintenance and fixes.</li>
			</ul>
		</section>

		<p>I've created the #100DaysOfCode challenge initially to ensure that I learn new technologies consistently every day after work. I've blogged about it, and since then it has grown into a movement of people learning to code together. More info: https://medium.freecodecamp.org/the-crazy-history-of-the-100daysofcode-challenge-and-why-you-should-try-it-for-2018-6c89a76e298d</p>

		<p>I also write articles on the journey of learning to code - its challenges and on the strategies, resources and techniques I've found to be effective. You can read them here: https://medium.com/@ka11away</p>

		<section className="projects">
			<h3>Projects</h3>
			<ul>
				<li>#100DaysOfCode Challenges - www.100DaysOfCode.com</li>
				<li>#100DaysOfX Challenges - www.100DaysOfX.com</li>
				<li>Codepen Projects: https://codepen.io/kallaway/</li>
				<li>Interactive Portfolio I once made: http://kallaway.io/</li>
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

		<section className="about-me">
			<div></div>
		</section>

		<Link to="/about/">About</Link>
	</div>
)

export default TheMatrix