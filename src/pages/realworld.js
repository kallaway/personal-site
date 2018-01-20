import React, { Component } from 'react'
import Link from 'gatsby-link'

import Terminal from '../components/terminal/terminal'
import styles from './realworld.module.css'

class RealWorld extends Component {
	constructor(props) {
		super(props)
	}

	// handleClick

	render() {
		return (
			<div className={styles.realworld}>
				<Terminal />
				<Link className={styles.goback} to="/">
					Go Back
				</Link>
			</div>
		)
	}
}

// const RealWorld = () => (

// )

export default RealWorld
