const copy_mail_button = document.querySelector('#copy-mail')

const copy_mail = () => {
  const mail = 'iixixv.me@gmail.com'

  const element = document.createElement('textarea')
  element.value = mail
  element.setAttribute('readonly', '')
  element.style.position = 'absolute'
  element.style.left = '-9999px'
  document.body.appendChild(element)
  element.select()
  document.execCommand('copy')
  document.body.removeChild(element)

  copy_mail_button.setAttribute('title', `Copied: ${mail}`)
}

copy_mail_button.addEventListener('click', copy_mail)
