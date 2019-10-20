import { deactivateLink } from './nav'

const home: HTMLElement = document.querySelector('#home')
const skills: HTMLElement = document.querySelector('#skills')
const projects: HTMLElement = document.querySelector('#projects')
const reach: HTMLElement = document.querySelector('#reach')

window.addEventListener('scroll', () => {
	let top = window.scrollY
	let home_height = home.offsetHeight
	let skills_height = home_height + skills.offsetHeight - 100
	let projects_height = skills_height + projects.offsetHeight - 100
	let reach_height = projects_height + reach.offsetHeight

	if (top + 200 < home_height) {
		deactivateLink()

		//
	} else if (top > home_height && top < skills_height) {
		deactivateLink()

		let skillsLink = document.querySelector('.skills-link')
		skillsLink.classList.add('active')
		//
	} else if (top > skills_height && top < projects_height) {
		deactivateLink()

		let projectsLink = document.querySelector('.projects-link')
		projectsLink.classList.add('active')
		//
	} else if (top > projects_height && top < reach_height) {
		deactivateLink()

		let reachLink = document.querySelector('.reach-link')
		reachLink.classList.add('active')
		//
	}
})
