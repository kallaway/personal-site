import React, { Component } from 'react'
import Entry from '../entry/entry'
import Prompt from '../prompt/prompt'

import styles from './terminal.module.css'
// this will be a smart component

// on load, put focus in the input
// or just listen to typing on the whole document

const initialState = {
	entries: [
		// {
		// 	type: 'command',
		// 	content: 's'
		// },
		{
			type: 'response',
			content: 'For a list of available commands, type \'cmd\''
		}
	]
}

class Terminal extends Component {
	constructor(props) {
		super(props)
		this.state = initialState
	}

	handleCommand(e) {
		console.log('received val')
		console.log(e.target.value)
	}

	render() {
		return (
			<div style={{ margin: "3rem auto" }}>
				<div className={styles.display}>
					{
						this.state.entries.map((entry, i) => {
							return <Entry 
								key={entry.content+'-'+i}
								content={entry.content}
							/>
						})
					}

					<Prompt respond={this.handleCommand} />
				</div>
				{this.props.children}
			</div >
		)
	}
}

export default Terminal
// export default ({ children }) => ()