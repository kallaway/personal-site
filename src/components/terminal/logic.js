export default {
	runCommand(cmd, entries) {
		// let entries = this.state.entries

		let newTermEntries = entries
		switch (cmd) {
		// we can push one more entry to state? I think. Also
		// maybe add whether an entry is visible or not
		// also we always need to push the actual command to state. (but before this function)
		case 'lol':
			newTermEntries = [
				...entries,
				{
					type: 'response',
					content: 'Puuuka'
				}
			]

			break
		case 'troll':
			break
		default:
		}

		return newTermEntries
	}


	
}