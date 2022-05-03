import './style.css'

let darkMode = false
function changeTheme() {
    if (darkMode)
        document.getElementById('darkModeBtn').innerText = 'Dark mode'
    else
        document.getElementById('darkModeBtn').innerText = 'Light mode'
    document.body.classList.toggle('dark-theme')
    darkMode = !darkMode
}