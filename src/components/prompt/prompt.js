import React, { Component } from 'react'

import styles from './prompt.module.css'


// respond - function to handleCommand

class Prompt extends Component {
	controller(props) {
		this.super(props) // why does it want 'this' here?
	}

	render() {
		return (
			<div className={styles.prompt}>
				<span>> </span>
				<input className={styles.terminput} onSubmit={() => this.props.respond() } />
				{/* {children} */}
			</div>
		)
	}
}

// export default ({ children }) => ();

export default Prompt