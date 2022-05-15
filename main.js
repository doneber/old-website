import './style.css'

document.querySelector('#themeOption').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
})

const menu = document.querySelector('.menu')
document.querySelector('#menu').addEventListener('click', e => {
  menu.classList.toggle('display-menu')
  e.stopImmediatePropagation()
})

window.addEventListener('click', (e) => {
  if (!menu.classList.contains('display-menu')) return
  if (!menu.contains(e.target)) {
    menu.classList.remove('display-menu')
    e.stopImmediatePropagation()
  }
})

const [home, projects, about] = [
  document.querySelector('#home'),
  document.querySelector('#projects'),
  document.querySelector('#contact')
]
const downBtn = document.querySelector('#down')
const navAncleItems = [...document.querySelectorAll('body header nav ul li')].map(el => el.firstChild)
const calcOffsetTop = (el) => el.getBoundingClientRect().top
window.onscroll = function () {
  window.pageYOffset > 60 ? downBtn.classList.add('hide') : downBtn.classList.remove('hide')
  if (calcOffsetTop(home) <= 60) {
    navAncleItems[2].classList.remove('underline')
    navAncleItems[3].classList.remove('underline')
    navAncleItems[1].classList.add('underline')
  }
  if (calcOffsetTop(projects) <= 60) {
    navAncleItems[2].classList.add('underline')
    navAncleItems[1].classList.remove('underline')
    navAncleItems[3].classList.remove('underline')
  }
  if (calcOffsetTop(about) <= 60) {
    navAncleItems[3].classList.add('underline')
    navAncleItems[1].classList.remove('underline')
    navAncleItems[2].classList.remove('underline')
  }
}
