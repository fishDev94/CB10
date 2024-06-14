const formLogin = document.createElement('form');
const containerEl = document.querySelector('.container');
const userNameInput = document.createElement('input');
const buttonLogin = document.createElement('button');
const logoutButton = document.createElement('button');

logoutButton.id = 'logout';
logoutButton.textContent = 'Log out';

if (localStorage.getItem('user')) {

    const title = document.createElement('h1')
    title.textContent = `loggato ${localStorage.getItem('user')}`

    formLogin.append(logoutButton)
    containerEl.append(title, formLogin)
} else {

    buttonLogin.textContent = 'Login'
    userNameInput.placeholder = 'Username'

    formLogin.append(userNameInput, buttonLogin)
    containerEl.append(formLogin);
}

containerEl.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON' && e.target.id !== 'logout') {
        localStorage.setItem('user', userNameInput.value);
    } else if (e.target.tagName === 'BUTTON') {
        localStorage.removeItem('user')
    }
})