import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Entry from '../components/entry/entry'

import styles from './index.module.css'

const PrimaryButton = styled.button`
	color: orange;
	background-color: blue;
	font-size: 1em;
`

const IndexPage = () => (
	<div className={styles.source}>
		{/* <div className={styles.description}>
			<h1>Alexander Kallaway</h1>
			<h2>Front End Web Developer</h2>
		</div> */}

		<section className={styles.choiceContainer}>
			<div className={styles.initialEntryContainer}>
				<Entry
					className={styles.initialEntry}
					content="Wake up, Neo... The time has come to make a choice."
				/>
			</div>
			<div className={styles.hands}>
				<Link to="/realworld" className={styles.redPillLink}>
					<div className={styles.redPill} />
				</Link>
				<Link to="/thematrix" className={styles.bluePillLink}>
					<div className={styles.bluePill} />
				</Link>
			</div>
		</section>

		{/* <Link to="/about/">About</Link> */}
	</div>
)

export default IndexPage
