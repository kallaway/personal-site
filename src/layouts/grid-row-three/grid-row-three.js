import React, { Component } from 'react'
import styles from './grid-row-three.module.css'

// export default function GridRowThree(children) => {
// 	return
// }

export default class GridRowThree extends Component {
	render() {
		return (
			<section className={styles.gridRowThreeContainer}>
				{this.props.children}
			</section>
		)
	}
}
