import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import styles from './index.module.css'

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

const IndexPage = () => (
	<div className={styles.source}>

		{/* <div className={styles.description}>
			<h1>Alexander Kallaway</h1>
			<h2>Front End Web Developer</h2>
		</div> */}
		

		<section className={styles.choiceContainer}>
			<div className={styles.initialMessage}>Wake up, Neo...</div>

			<div className={styles.hands}>
				<Link to="/realworld" className={styles.redPillLink}><div className={styles.redPill}></div></Link> 
				<Link to="/thematrix" className={styles.bluePillLink}><div className={styles.bluePill}></div></Link>
			</div>
		</section>

		{/* <Link to="/about/">About</Link> */}
	</div>
)

export default IndexPage
