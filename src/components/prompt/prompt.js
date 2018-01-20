import React, { Component } from 'react'
import styles from './prompt.module.css'

class Prompt extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputText: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.bringBackToFocus = this.bringBackToFocus.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		const inputValue = this.state.inputText
		this.setState({ inputText: '' })
		this.props.respond(inputValue)
	}

	handleInput(e) {
		this.setState({ inputText: e.target.value })
	}

	componentDidMount() {
		// put focus in the input as soon as component renders
		// this.refs.promptInput.focus()
		this.mainInput.focus()
	}

	bringBackToFocus() {
		this.mainInput.focus()
	}

	render() {
		return (
			<form className={styles.prompt} onSubmit={this.handleSubmit}>
				<span>> </span>
				<input
					type="text"
					value={this.state.inputText}
					ref={input => {
						this.mainInput = input
					}}
					className={styles.terminput}
					onChange={this.handleInput}
					onBlur={this.bringBackToFocus}
					// onKeyPress={e => this.props.respond(e)}
				/>
				{/* {children} */}
			</form>
		)
	}
}

export default Prompt
