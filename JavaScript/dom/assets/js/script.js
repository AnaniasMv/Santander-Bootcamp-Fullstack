const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementById('footer');
const body = document.getElementById('body');

function changeMode() {
    if (!body.classList.contains("dark-mode")) {
        h1.innerHTML = 'Dark Mode ON';
        button.innerHTML = 'Light Mode';
        body.classList.add('dark-mode');
        h1.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        button.classList.add('dark-mode');
    } else {
        h1.innerHTML = 'Light Mode ON';
        button.innerHTML = 'Dark Mode';
        body.classList.remove('dark-mode');
        h1.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        button.classList.remove('dark-mode');
    }
}

button.addEventListener('click', changeMode)