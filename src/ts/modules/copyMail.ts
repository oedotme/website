const copyMailBtn = document.querySelector('#copyMail')

const copyMail = () => {
	const mail = 'iixixv.me@gmail.com'

	const el = document.createElement('textarea')
	el.value = mail
	el.setAttribute('readonly', '')
	el.style.position = 'absolute'
	el.style.left = '-9999px'
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)

	copyMailBtn.setAttribute('title', `Copied: ${mail}`)
}

copyMailBtn.addEventListener('click', copyMail)
