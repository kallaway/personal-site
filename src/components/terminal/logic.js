export default {
	// add EVERYWHERE:
	// if user does combination CTRL+K the input is cleared
	// add visible or not to Entry component
	quotes: [
		'There is no spoon.',
		'Follow the white rabbit.',
		'Don\'t think you are, know you are.',
		'There\'s a difference between knowing the path and walking the path.',
		'Free your mind',
		'I can only show you the door. You\'re the one that has to walk through it.',
		'The time has come to make a choice.',
		'Choi: "It just sounds to me like you need to unplug, man."',
		'You\'ve been living in a dream world, Neo.',
		'What is "real"? How do you define "real"?',
		'Welcome to the real world.',
		'Because you have been down there Neo, you know that road, you know exactly where it ends. And I know that\'s not where you want to be.',
		'A déjà vu is usually a glitch in the Matrix. It happens when they change something.',
		'Do you believe that my being stronger or faster has anything to do with my muscles in this place? Do you think that\'s air you\'re breathing now?',
		'Neo: I know kung fu. \nMorpheus: [eyeing him, hand on chin] Show me.',
		'Trinity: Neo... nobody has ever done this before. \nNeo: That\'s why it\'s going to work.',
		'Neo: I thought it wasn\'t real. \nMorpheus: Your mind makes it real.',
		'The answer is out there, Neo, and it\'s looking for you, and it will find you if you want it to.',
		'So what do you need? Besides a miracle.',
		'I can only show you the door. You\'re the one that has to walk through it.',
		'Morpheus: [to Neo who is choosing the red pill] Remember... all I\'m offering is the truth. Nothing more.'
	],

	responses: {
		start: 'For a list of available commands, type \'cmd\' and hit Enter',
		about:
			'This site is made with GatsbyJS (using ReactJS, ES6, CSS Modules, and more)',
		cmd: `Available commands:
				[about] 
				[bio] [clear] [contact] [skills] [social] [portfolio] [quote]`,
		bio: `My name is Alex Kallaway. I am a Self-Taught Web Developer. freeCodeCamp Toronto Org
			more info.`,
		skills: `
					Tech Stack: HTML5, CSS3, SCSS, ReactJS, Redux, git.
					Familiar with: Node.js, Golang, D3.js, Python, Haxe, OpenFL, Python, THREE.js, PHP.`
	},

	getRandomQuote() {
		const randomIndex = Math.round(Math.random() * (this.quotes.length - 1))
		return this.quotes[randomIndex]
	},

	// find ways to make these functions shorter
	runCommand(cmd, entries) {
		console.log('received command:')
		console.log(cmd)
		// let entries = this.state.entries
		let newTermEntries = entries
		// separate function - push command to history

		newTermEntries.push({
			type: 'command',
			content: cmd
		})

		// each time  it runs a command -> it can be adding it to history
		// (just the command not the response)
		// handling commands
		let responseEntry = {
			type: 'response'
		}

		// there might be a way to improve this by using a function?
		switch (cmd) {
		// we can push one more entry to state? I think. Also
		// maybe add whether an entry is visible or not
		// also we always need to push the actual command to state. (but before this function)

		// put push in the end?
		// precreate an answer with type? response?
		case 'about':
			responseEntry.content = this.responses.about
			break
		case 'bio':
			responseEntry.content = this.responses.bio
			break
		case 'clear':
			// TEMPORARY. Later make it so it just hides them?
			newTermEntries = [
				{
					type: 'response',
					content: this.responses.start
				}
			]
			break
		case 'cmd':
			responseEntry.content = this.responses.cmd
			break
		case 'quote':
			responseEntry.content = this.getRandomQuote()
			break
		case 'lol':
			responseEntry.content = '😂'
			break
		case 'skills':
			responseEntry.content = this.responses.skills
			break
		default:
			responseEntry.content =
					'Command not found. Don\'t worry, it\'s probably just a gli//gliT~`tch in the Matrix-/trixxtrix.'
		}

		if (responseEntry.content) {
			newTermEntries.push(responseEntry)
		}
		return newTermEntries
	}
}
