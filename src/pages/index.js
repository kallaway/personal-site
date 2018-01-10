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
			<Entry className={styles.initialEntry} content="Wake up, Neo..." />
			<div className={styles.hands}>
				<Link to="/realworld" className={styles.redPillLink}><div className={styles.redPill}></div></Link> 
				<Link to="/thematrix" className={styles.bluePillLink}><div className={styles.bluePill}></div></Link>
			</div>
		</section>

		{/* <Link to="/about/">About</Link> */}
	</div>
)

export default IndexPage
