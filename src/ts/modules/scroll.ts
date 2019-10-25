import { deactivateLink } from './nav'

const about: HTMLElement = document.querySelector('#about')
const skills: HTMLElement = document.querySelector('#skills')
const projects: HTMLElement = document.querySelector('#projects')
const reach: HTMLElement = document.querySelector('#reach')

let skills_link = document.querySelector('.skills-link')
let projects_link = document.querySelector('.projects-link')
let reach_link = document.querySelector('.reach-link')

window.addEventListener('scroll', () => {
	let top = window.scrollY
	let about_height = about.offsetHeight
	let skills_height = about_height + skills.offsetHeight - 100
	let projects_height = skills_height + projects.offsetHeight - 100
	let reach_height = projects_height + reach.offsetHeight

	if (top + 200 < about_height) {
		deactivateLink()
		//
	} else if (top > about_height && top < skills_height) {
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
