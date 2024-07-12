const lightDarkIcon = document.querySelector('.lightdark-icon')
const themeButton = document.querySelector('.theme-button')
const themeHeading = document.querySelector('.theme-label-heading')
const sunIcon = document.querySelector('.sun-icon')
const moonIcon = document.querySelector('.moon-icon')
const body = document.querySelector('body')
const sunMoonContainer = document.querySelector('.sun-moon-container')
const buttonTextContent = document.querySelector('.button-text-content')

themeButton.addEventListener('click', (event) => {
  body.classList.toggle('dark')

  // Check if getAttribute() returns null, if it does than use "empty", because includes() doesn't work with null data type.
  const bodyClassString = body.getAttribute('class') ?? 'empty'
  let isDarkMode = bodyClassString.includes('dark') === true ? true : false

  // check if the site is already darkmode, but text is still "Light Mode" to fix it
  if (isDarkMode && buttonTextContent.textContent === 'Light Mode') {
    buttonTextContent.textContent = 'Dark Mode'
  } else {
    buttonTextContent.textContent = 'Light Mode'
  }

  let rotateValue = Number.parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue('--rotate-value')
  )

  rotateValue += 180

  sunMoonContainer.style.setProperty('--rotate-value', rotateValue)
})
