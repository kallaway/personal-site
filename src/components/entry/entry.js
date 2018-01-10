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
		const speed = 30
		let entry = this

		// if it's a command (by user) show it right away,
		// if it's a response (from terminal) type it char by char
		if (this.props.type === 'command') {
			console.log('this entry is a command.')
			this.setState({
				displayedContent: this.props.content
			})
		} else {
			// probably type here is response, but if I introduce more types
			// they will have to be handled here
			let contentDelayed = this.props.content.split('').reverse()
			
			
			let writingSequence = setInterval(function () {
				let incrementedContent = entry.state.displayedContent + contentDelayed.pop()
				entry.setState({
					displayedContent: incrementedContent
				})

				if (contentDelayed.length == 0) {
					clearInterval(writingSequence)
				}
			}, speed)
		}
		
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