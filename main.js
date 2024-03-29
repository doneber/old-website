import './style.css'
import data from './data.json'

const pc = document.querySelector('#projects-container')
data.projects.forEach(project => {
  console.log('title', project.title)
  const projectContainer = document.createElement('article')
  projectContainer.classList.add('card')
  projectContainer.innerHTML = `
    ${project.img ? '<img src="' + project.img + '" alt="" class="card-media">' : ''}
    <div class="card-content">
        <h3 class="card-content-title">
            ${project.title}
        </h3>
        <p class="card-content-description">
            ${project.description}
        </p>
        <div class="card-content-options">
            ${project.url ? '<a href="' + project.url + '">Demo</a>' : ''}
            ${project.github ? '<a href="' + project.github + '">GitHub</a>' : ''}
        </div>
    </div>
  `
  pc.append(projectContainer)
})

document.querySelector('#themeOption').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
})

const header = document.querySelector('body header')
let displayMenu = false
document.querySelector('#menu').addEventListener('click', e => {
  header.classList.toggle('display-header-menu')
  if (displayMenu) {
    document.querySelector('#line1').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line4').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line1').style.setProperty('opacity', '1')
    document.querySelector('#line4').style.setProperty('opacity', '1')
    document.querySelector('#line2').style.setProperty('transform', 'rotate(0) ')
    document.querySelector('#line3').style.setProperty('transform', 'rotate(0) ')
    document.querySelector('.menu').style.visibility = 'hidden'
    document.querySelector('.menu').style.transform = 'translatey(100)'

  } else {
    document.querySelector('#line1').style.setProperty('transform', 'translatey(25%)')
    document.querySelector('#line4').style.setProperty('transform', 'translatey(-25%)')
    document.querySelector('#line1').style.setProperty('opacity', '0')
    document.querySelector('#line4').style.setProperty('opacity', '0')
    document.querySelector('#line2').style.setProperty('transform', 'rotate(40deg)')
    document.querySelector('#line3').style.setProperty('transform', 'rotate(-40deg)')
    document.querySelector('.menu').style.visibility = 'visible'
    document.querySelector('.menu').style.transform = 'translatey(0)'
  }
  displayMenu = !displayMenu
  e.stopImmediatePropagation()
})

window.addEventListener('click', (e) => {
  if (!header.classList.contains('display-header-menu')) return
  if (!header.contains(e.target)) {
    document.querySelector('#line1').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line4').style.setProperty('transform', 'translatey(0)')
    document.querySelector('#line1').style.setProperty('opacity', '1')
    document.querySelector('#line4').style.setProperty('opacity', '1')
    document.querySelector('#line2').style.setProperty('transform', 'rotate(0) ')
    document.querySelector('#line3').style.setProperty('transform', 'rotate(0) ')
    displayMenu = false
    header.classList.remove('display-header-menu')
    e.stopImmediatePropagation()
  }
})

const downBtn = document.querySelector('#down')
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
navAncleItems[initIndexSection].classList.add('underline')
window.onscroll = function () {
  const currentIndexSection = calcCurrentIndexSection()
  if (initIndexSection !== currentIndexSection) {
    navAncleItems.forEach(item => item.classList.remove('underline'))
    navAncleItems[currentIndexSection].classList.add('underline')
    initIndexSection = currentIndexSection
  }
  if (window.pageYOffset > 60) {
    if (!downBtn.classList.contains('hide')) {
      downBtn.classList.add('hide')
    }
    if (!header.classList.contains('line-shadow')) {
      // navBar.classList.add('line-shadow')
      header.classList.add('line-shadow')
    }
  } else {
    if (downBtn.classList.contains('hide')) {
      downBtn.classList.remove('hide')
    }
    if (header.classList.contains('line-shadow')) {
      // navBar.classList.remove('line-shadow')
      header.classList.remove('line-shadow')
    }
  }
}
