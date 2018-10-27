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
}

// add event listener for link activation
for (let link of links) {
	link.firstChild.addEventListener('click', activateLink)
}

// deactivate currently active link and go up to home page
const goUp = () => {
	deactivateLink()
}

// add event listener to go up to home
up.addEventListener('click', goUp)
