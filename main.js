import './style.css'

document.querySelector('#themeOption').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
})

const menu = document.querySelector('.menu')
let displayMenu = false
document.querySelector('#menu').addEventListener('click', e => {
  menu.classList.toggle('display-menu')
  if (displayMenu) {
    document.querySelector('#line1').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line4').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line1').style.setProperty('opacity', '1')
    document.querySelector('#line4').style.setProperty('opacity', '1')
    document.querySelector('#line2').style.setProperty('transform', 'rotate(0) ')
    document.querySelector('#line3').style.setProperty('transform', 'rotate(0) ')
  } else {
    document.querySelector('#line1').style.setProperty('transform', 'translatey(25%)')
    document.querySelector('#line4').style.setProperty('transform', 'translatey(-25%)')
    document.querySelector('#line1').style.setProperty('opacity', '0')
    document.querySelector('#line4').style.setProperty('opacity', '0')
    document.querySelector('#line2').style.setProperty('transform', 'rotate(40deg)')
    document.querySelector('#line3').style.setProperty('transform', 'rotate(-40deg)')
  }
  displayMenu = !displayMenu
  e.stopImmediatePropagation()
})

window.addEventListener('click', (e) => {
  if (!menu.classList.contains('display-menu')) return
  if (!menu.contains(e.target)) {
    document.querySelector('#line1').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line4').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line1').style.setProperty('opacity', '1')
    document.querySelector('#line4').style.setProperty('opacity', '1')
    document.querySelector('#line2').style.setProperty('transform', 'rotate(0) ')
    document.querySelector('#line3').style.setProperty('transform', 'rotate(0) ')
    displayMenu = false
    menu.classList.remove('display-menu')
    e.stopImmediatePropagation()
  }
})

const downBtn = document.querySelector('#down')
const navBar = document.querySelector('body header nav')
const navAncleItems = [...document.querySelectorAll('body header nav ul li')].map(el => el.firstChild)
const calcOffsetTop = (el) => el.getBoundingClientRect().top
const sections = [...document.querySelectorAll('main section')]
const calcCurrentIndexSection = function () {
  const sectionOffsets = sections.map(section => Math.trunc(Math.abs(calcOffsetTop(section))))
  const min = Math.min(...sectionOffsets)
  return sectionOffsets.indexOf(min)
}
let initIndexSection = calcCurrentIndexSection()
navAncleItems.forEach(item => item.classList.remove('underline'))
navAncleItems[initIndexSection + 1].classList.add('underline')
window.onscroll = function () {
  const currentIndexSection = calcCurrentIndexSection()
  if (initIndexSection !== currentIndexSection) {
    navAncleItems.forEach(item => item.classList.remove('underline'))
    navAncleItems[currentIndexSection + 1].classList.add('underline')
    initIndexSection = currentIndexSection
  }
  if (window.pageYOffset > 60) {
    if (!downBtn.classList.contains('hide')) {
      downBtn.classList.add('hide')
    }
    if (!navBar.classList.contains('line-shadow')) {
      navBar.classList.add('line-shadow')
    }
  } else {
    if (downBtn.classList.contains('hide')) {
      downBtn.classList.remove('hide')
    }
    if (navBar.classList.contains('line-shadow')) {
      navBar.classList.remove('line-shadow')
    }
  }
}
