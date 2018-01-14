import React, { Component } from 'react'

import styles from './project-card.module.css'

const ProjectCard = () => {
	return (
		<div className={styles.projectCard}>
			<div className={styles.projName}>
				#100DaysOfCode Challenge Official Website
			</div>
			<div className={styles.projDesc}>smth else</div>
		</div>
	)
}

export default ProjectCard
