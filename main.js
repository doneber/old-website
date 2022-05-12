import './style.css'

document.querySelector('#themeOption').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
})

const [home, projects, about] = [
    document.querySelector('#home'),
    document.querySelector('#projects'),
    document.querySelector('#contact'),
]
const navAncleItems = [...document.querySelectorAll('body header nav ul li')].map(el => el.firstChild)
const calcOffsetTop = (el) => el.getBoundingClientRect().top
window.onscroll = function () {
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