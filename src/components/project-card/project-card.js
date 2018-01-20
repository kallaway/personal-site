import React, { Component } from 'react'

import styles from './project-card.module.css'

// props:
// title
// description
// name

const ProjectCard = props => {
	return (
		<div className={styles.projectCard}>
			<div className={styles.projName}>Name: {props.name}</div>
			<div className={styles.projDesc}>{props.description}</div>
		</div>
	)
}

export default ProjectCard
