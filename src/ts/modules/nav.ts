const links = document.querySelectorAll('.link')
const up = document.querySelector('#up')

// deactivate current link
export const deactivate_link = () => {
  let active = document.querySelector('.active')

  if (active) active.classList.remove('active')
}

// activate targeted link
const activate_link = (e) => {
  if (e.target.parentElement.classList.contains('link')) deactivate_link()

  let current = e.target.parentElement
  current.classList.add('active')

  scroll_to_target(current.firstChild, e)
}

// deactivate currently active link and go up to about page
const go_up = (e) => {
  deactivate_link()
  scroll_to_target(up, e)
}

// smooth scrolling
const scroll_to_target = (link, e) => {
  let hashVal = link.getAttribute('href')
  let target = document.querySelector(hashVal)

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
  history.pushState(null, null, hashVal)
  e.preventDefault()
}

// event listenrs

// add event listener for link activation
for (let link of links) {
  link.firstChild.addEventListener('click', activate_link)
}

// add event listener to go up to about
up.addEventListener('click', go_up)
