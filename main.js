import './style.css'

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

document.querySelector('#themeOption').addEventListener('click', changeTheme)