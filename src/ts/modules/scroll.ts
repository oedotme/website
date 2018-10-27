import { deactivateLink } from './nav'

const home: HTMLElement = document.querySelector('#home')
const about: HTMLElement = document.querySelector('#about')
const skills: HTMLElement = document.querySelector('#skills')
const projects: HTMLElement = document.querySelector('#projects')
const reach: HTMLElement = document.querySelector('#reach')

window.addEventListener('scroll', () => {
	let fromTop = window.scrollY
	let homeHeight = home.offsetHeight - 200
	let homeAbout = homeHeight + about.offsetHeight - 200
	let homeAboutSkills = homeAbout + skills.offsetHeight + 200
	let homeAboutSkillsProjects = homeAboutSkills + projects.offsetHeight + 100
	let homeAboutSkillsProjectsReach =
		homeAboutSkillsProjects + reach.offsetHeight

	if (fromTop > homeHeight && fromTop < homeAbout) {
		deactivateLink()

		let aboutLink = document.querySelector('.about-link')
		aboutLink.classList.add('active')
		//
	} else if (fromTop > homeAbout && fromTop < homeAboutSkills) {
		deactivateLink()

		let skillsLink = document.querySelector('.skills-link')
		skillsLink.classList.add('active')
		//
	} else if (fromTop > homeAboutSkills && fromTop < homeAboutSkillsProjects) {
		deactivateLink()

		let projectsLink = document.querySelector('.projects-link')
		projectsLink.classList.add('active')
		//
	} else if (
		fromTop > homeAboutSkillsProjects &&
		fromTop < homeAboutSkillsProjectsReach
	) {
		deactivateLink()

		let reachLink = document.querySelector('.reach-link')
		reachLink.classList.add('active')
		//
	} else {
		deactivateLink()
	}
})
