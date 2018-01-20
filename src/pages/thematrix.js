import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import portrait from '../static/img/kallaway_portrait.png'

import GridRowThree from '../layouts/grid-row-three/grid-row-three'
import ProjectCard from '../components/project-card/project-card'

// import

import styles from './thematrix.module.css'

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

		<section className={styles.social}>
			<ul>
				<li className={styles.tw}>
					<a href="https://twitter.com/ka11away" target="_blank">
						Twitter
					</a>
				</li>
				<li className={styles.ig}>
					<a href="https://www.instagram.com/ka11away/" target="_blank">
						Instagram
					</a>
				</li>
				<li className={styles.gh}>
					<a href="https://www.github.com/Kallaway/" target="_blank">
						Github
					</a>
				</li>
				<li className={styles.yt}>
					<a href="https://www.youtube.com/c/DoTheOpposite" target="_blank">
						YouTube
					</a>
				</li>
				<li className={styles.md}>
					<a href="https://medium.com/@ka11away" target="_blank">
						Medium
					</a>
				</li>
				<li className={styles.li}>
					<a href="https://www.linkedin.com/in/kallaway" target="_blank">
						LinkedIn
					</a>
				</li>
			</ul>
		</section>

		<section className={styles.bio}>
			<div>A little about myself (short bio)</div>
		</section>

		<p>
			I've created the #100DaysOfCode challenge initially to ensure that I learn
			new technologies consistently every day after work. I've blogged about it,
			and since then it has grown into a movement of people learning to code
			together. More info:
			https://medium.freecodecamp.org/the-crazy-history-of-the-100daysofcode-challenge-and-why-you-should-try-it-for-2018-6c89a76e298d
			also write articles on the journey of learning to code - its challenges
			and on the strategies, resources and techniques I've found to be
			effective. You can read them here: https://medium.com/@ka11away
		</p>
		<p>
			If you'd like to hire me, look at my <Link to="/resume">Resume</Link>. If
			you want to know what I am up to, check out the <Link to="/now">Now</Link>.
			If you want to know what I use, you are welcome to see the list{' '}
			<Link to="/uses">here</Link>. page.
		</p>

		<h2>Projects</h2>

		<GridRowThree>
			<ProjectCard
				name="#100DaysOfCode Challenges"
				description="I've created the #100DaysOfCode challenge initially to ensure that I learn
			new technologies consistently every day after work. I've blogged about it,
			and since then it has grown into a movement of people learning to code
			together. More info:"
			/>
			<ProjectCard
				name="#100DaysOfX"
				description="A framework of challenges to change habits. Change your habits, change your life."
			/>
			<ProjectCard
				name="Codepen Projects"
				description="A collection of little code experiments of mine"
			/>
		</GridRowThree>

		<section className="contact">
			<p>
				The best way to contact me is through Twitter:{' '}
				<a target="_blank" href="https://twitter.com/ka11away">
					@ka11away
				</a>. My DM is open.
			</p>
		</section>
	</div>
)

export default TheMatrix
