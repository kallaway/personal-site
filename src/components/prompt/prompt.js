import React, { Component } from 'react'

import styles from './prompt.module.css'

// respond - function to handleCommand

class Prompt extends Component {
	controller(props) {
		this.super(props) // why does it want 'this' here?
	}

	componentDidMount() {
		// put focus in the input as soon as component renders
		this.refs.promptInput.focus()
	}

	render() {
		return (
			<div className={styles.prompt}>
				<span>> </span>
				<input
					ref="promptInput"
					className={styles.terminput}
					onKeyPress={e => this.props.respond(e)}
				/>
				{/* {children} */}
			</div>
		)
	}
}

// export default ({ children }) => ();

export default Prompt
