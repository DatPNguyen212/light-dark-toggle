const lightDarkIcon = document.querySelector('.lightdark-icon')
const themeButton = document.querySelector('.theme-button')
const themeHeading = document.querySelector('.theme-label-heading')
const sunIcon = document.querySelector('.sun-icon')
const moonIcon = document.querySelector('.moon-icon')
const body = document.querySelector('body')
const buttonTextContent = document.querySelector('.button-text-content')

themeButton.addEventListener('click', (event) => {
  body.classList.toggle('dark')
  const bodyClassString = body.getAttribute('class') ?? 'empty'
  let isDarkMode = bodyClassString.includes('dark') === true ? true : false
  console.log(isDarkMode ? 'Site is in dark mode' : 'Site is in light mode')

  // check if the site is already darkmode, but text is still "Light Mode" to fix it
  if (isDarkMode && buttonTextContent.textContent === 'Light Mode') {
    buttonTextContent.textContent = 'Dark Mode'
  } else {
    buttonTextContent.textContent = 'Light Mode'
  }
})
