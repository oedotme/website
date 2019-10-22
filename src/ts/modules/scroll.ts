import { deactivateLink } from './nav'

const home: HTMLElement = document.querySelector('#home')
const skills: HTMLElement = document.querySelector('#skills')
const projects: HTMLElement = document.querySelector('#projects')
const reach: HTMLElement = document.querySelector('#reach')

let skills_link = document.querySelector('.skills-link')
let projects_link = document.querySelector('.projects-link')
let reach_link = document.querySelector('.reach-link')

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
		skills_link.classList.add('active')
		//
	} else if (top > skills_height && top < projects_height) {
		deactivateLink()
		projects_link.classList.add('active')
		//
	} else if (top > projects_height && top < reach_height) {
		deactivateLink()
		reach_link.classList.add('active')
		//
	}
})
