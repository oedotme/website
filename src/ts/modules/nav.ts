const links = document.querySelectorAll('.link')
const up = document.querySelector('#up')

// deactivate current link
export const deactivateLink = () => {
	let active = document.querySelector('.active')

	if (active) {
		active.classList.remove('active')
	}
}

// activate targeted link
const activateLink = (e) => {
	if (e.target.parentElement.classList.contains('link')) {
		deactivateLink()
	}

	let current = e.target.parentElement
	current.classList.add('active')

	scrollToTarget(current.firstChild, e)
}

// deactivate currently active link and go up to home page
const goUp = (e) => {
	deactivateLink()
	scrollToTarget(up, e)
}

// smooth scrolling
const scrollToTarget = (link, e) => {
	let hashVal = link.getAttribute('href')
	let target = document.querySelector(hashVal)

	target.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
	history.pushState(null, null, hashVal)
	e.preventDefault()
}

// event listenrs

// add event listener for link activation
for (let link of links) {
	link.firstChild.addEventListener('click', activateLink)
}

// add event listener to go up to home
up.addEventListener('click', goUp)
