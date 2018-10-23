const links = document.querySelectorAll('.link')

const activateLink = (e) => {
	let active = document.querySelector('.active')

	if (active) {
		if (e.target.classList.contains('link')) {
			active.classList.remove('active')
		}
	}

	let current = e.target
	current.parentElement.classList.add('active')
}

for (let link of links) {
	link.addEventListener('click', activateLink)
}
