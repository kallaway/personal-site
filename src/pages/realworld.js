import React from 'react'
import Link from 'gatsby-link'

import Terminal from '../components/terminal/terminal'

import styles from './realworld.module.css'

const RealWorld = () => (
	<div className={styles.realworld}>
		{/* <Link to="/">Go back to the homepage</Link> */}

		{/* <p>Welcome to the real world</p> */}

		<Terminal />
	</div>
)

export default RealWorld