import image from '../../assets/images/profile.jpg'

const profile: HTMLImageElement = document.querySelector('#profile')

const downloading_image = new Image()

downloading_image.onload = () => {
	profile.classList.replace('blur', 'fade')
	profile.src = image
}

downloading_image.src = image
