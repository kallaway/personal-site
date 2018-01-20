import React, { Component } from 'react'
import Entry from '../entry/entry'
import Prompt from '../prompt/prompt'
import TermLogic from './logic'

import styles from './terminal.module.css'

// on load, put focus in the input
// or just listen to typing on the whole document
// set types to only be one of a limited set? (enums)
// change from regular input in Prompt to a form?

const initialState = {
	entries: [
		// {
		// 	type: 'command',
		// 	content: 's'
		// },
		{
			type: 'response',
			content: 'For a list of available commands, type \'cmd\' and hit Enter'
		}
	]
}

class Terminal extends Component {
	constructor(props) {
		super(props)
		this.state = initialState
		this.handleCommand = this.handleCommand.bind(this)
	}

	handleCommand(cmd) {
		let entries = this.state.entries
		// run command
		let updatedEntries = TermLogic.runCommand(cmd, entries)
		this.setState({
			entries: updatedEntries
		})
	}

	render() {
		return (
			<div style={{ margin: '3rem auto' }}>
				<div className={styles.display}>
					{this.state.entries.map((entry, i) => {
						return (
							<Entry
								key={entry.content + '-' + i}
								content={entry.content}
								type={entry.type}
							/>
						)
					})}
					<Prompt respond={this.handleCommand} />
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default Terminal
