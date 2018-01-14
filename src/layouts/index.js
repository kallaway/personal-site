import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

import styles from './layout.module.css'

const Header = () => (
	<div
		style={{
			background: 'rebeccapurple',
			marginBottom: '1.45rem'
		}}
	>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					Alexander Kallaway
				</Link>
			</h1>
			<nav className={styles.mainNav}>
				<ul>
					<li>
						<Link to="/">Go Back</Link>
					</li>
					<li>
						<Link to="/resume">Resume</Link>
					</li>
					<li>
						<Link to="/now">Now</Link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
)

class TemplateWrapper extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const isTermPage =
			location.pathname === '/' || location.pathname === '/realworld'

		return (
			<div>
				<Helmet
					title="Alexander Kallaway - Developer, Maker"
					meta={[
						{
							name: 'description',
							content:
								'Personal Website of Alexander Kallaway, Developer and Maker'
						},
						{
							name: 'keywords',
							content:
								'Kallaway, Do The Opposite, 100DaysOfCode, 100DaysOfX, Alexander Kallaway'
						}
					]}
				/>

				{isTermPage ? '' : <Header />}

				<div className={isTermPage ? '' : 'mainContent'}>
					<div>{this.props.children()}</div>
				</div>

				{/* <div style={isTermPage ? '' : styles.mainContent}>
					<div>{this.props.children()}</div>
				</div> */}
			</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func
}

export default TemplateWrapper
