import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import portrait from '../static/img/kallaway_portrait.png'

// import

import styles from './thematrix.module.css'

// const PrimaryButton = styled.button`
//   color: orange;
//   background-color: blue;
//   font-size: 1em;
// `

const PortraitImg = () => {
	return (
		<img
			className={styles.portrait}
			src={portrait}
			alt="Alexander Kallaway Portrait"
		/>
	)
}
{
	/* Build it out at first in an simple way, then improve as we go */
}

const TheMatrix = () => (
	<div>
		{/* this should be a separate component */}
		<section className={styles.nav}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/resume">Resume</Link>
				</li>
				<li>
					<Link to="/now">Now</Link>
				</li>
			</ul>
		</section>

		<section className={styles.profile}>
			<PortraitImg />
			<div className={styles.mainInfo}>
				<h1>Alexander Kallaway</h1>
				<h2>Web Developer and Maker.</h2>
				<div>Helping others change habits and learn to code.</div>
				<div>
					Creator of{' '}
					<a href="http://100daysofcode.com/" target="_blank">
						#100DaysOfCode
					</a>{' '}
					and{' '}
					<a href="http://100daysofx.com/" target="_blank">
						#100DaysOfX Challenges
					</a>{' '}
					Platform
				</div>
			</div>
		</section>

		{/* <PrimaryButton>Button Button click on me</PrimaryButton> */}

		<section className={styles.social}>
			<ul>
				<li className={styles.tw}>
					<a href="https://twitter.com/ka11away" target="_blank">
						TW{/* Twitter */}
					</a>
				</li>
				<li className={styles.ig}>
					<a href="https://www.instagram.com/ka11away/" target="_blank">
						IG{/* Instagram */}
					</a>
				</li>
				<li className={styles.yt}>
					<a href="https://www.youtube.com/c/DoTheOpposite" target="_blank">
						YT{/* YouTube */}
					</a>
				</li>
				<li className={styles.md}>
					<a href="https://medium.com/@ka11away" target="_blank">
						MD{/* Medium */}
					</a>
				</li>
				<li className={styles.li}>
					<a href="https://twitter.com/ka11away" target="_blank">
						LI{/* LinkedIn */}
					</a>
				</li>
			</ul>
		</section>

		<section className={styles.bio} />

		<section className="contact">
			<p>
				The best way to contact me is through Twitter:{' '}
				<a target="_blank" href="https://twitter.com/ka11away">
					@ka11away
				</a>. My DM is open.
			</p>
		</section>

		<p>In-depth experience with platforms: BigCommerce, Shopify, WordPress</p>

		<p>
			I've created the #100DaysOfCode challenge initially to ensure that I learn
			new technologies consistently every day after work. I've blogged about it,
			and since then it has grown into a movement of people learning to code
			together. More info:
			https://medium.freecodecamp.org/the-crazy-history-of-the-100daysofcode-challenge-and-why-you-should-try-it-for-2018-6c89a76e298d
		</p>

		<p>Put project cards here</p>

		<p>
			I also write articles on the journey of learning to code - its challenges
			and on the strategies, resources and techniques I've found to be
			effective. You can read them here: https://medium.com/@ka11away
		</p>

		<section className="projects">
			<h3>Projects</h3>
			<ul>
				<li>#100DaysOfCode Challenges - www.100DaysOfCode.com</li>
				<li>#100DaysOfX Challenges - www.100DaysOfX.com</li>
				<li>Codepen Projects: https://codepen.io/kallaway/</li>
				<li>Interactive Portfolio I once made: http://kallaway.io/</li>
			</ul>
		</section>

		<section className="about-me">
			<div />
		</section>

		<Link to="/about/">About</Link>
	</div>
)

export default TheMatrix
