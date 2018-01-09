import React, { Component } from 'react'
import Entry from '../entry/entry'
import Prompt from '../prompt/prompt'
import TermLogic from './logic'

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

		this.handleCommand = this.handleCommand.bind(this)
		// this.runCommand = this.runCommand.bind(this)
	}

	handleCommand(e) {
		let entries = this.state.entries
		console.log('what is this?')
		console.log(this)

		console.log('received val')
		console.log(e.target.value)

		console.log('e.key')
		console.log(e.key)

		if (e.key === 'Enter') {
			console.log('ENTER PRESSED')
			// clear input.
			// run command

			let updatedEntries = TermLogic.runCommand(e.target.value, entries)

			console.log('updated entries')
			console.log(updatedEntries)

			this.setState({
				entries: updatedEntries
			})
			// runCommand(e.target.value)
		}
	}

	runCommand(cmd) {
		let entries = this.state.entries
		switch (cmd) {
		// we can push one more entry to state? I think. Also
		// maybe add whether an entry is visible or not
		// also we always need to push the actual command to state. (but before this function)
		case 'lol':
			this.setState({
				entries: [
					...entries,
					{
						type: 'response',
						content: 'For a list of available commands, type \'cmd\''
					}
				]
			}).bind(this)
			break
		case 'troll':
			break
		default:
		}
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