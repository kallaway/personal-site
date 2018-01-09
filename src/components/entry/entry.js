import React, { Component } from 'react'

import styles from './entry.module.css'

// this.props.children

class Entry extends Component {
	constructor() {
		super()
		this.state = {
			displayedContent: ''
		}
	}

	componentDidMount() {
		let contentDelayed = this.props.content.split('').reverse()
		const speed = 30

		let entry = this
		let writingSequence = setInterval(function () {
			let incrementedContent = entry.state.displayedContent + contentDelayed.pop()
			entry.setState({
				displayedContent: incrementedContent
			})

			if (contentDelayed.length == 0) {
				clearInterval(writingSequence)
			}
		}, speed)

		contentDelayed.forEach((char) => {
		})
	}

	render() {
		return (
			<div className={styles.entry}>
				<div className={styles.display}>
					<span>> </span>{this.state.displayedContent}
				</div>
			</div>
		)
	}
}

export default Entry