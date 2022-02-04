const navbar = document.getElementById('nav-bar');
console.log(navbar);
const main = document.querySelector('main');
console.log(main);
const tag1 = document.querySelectorAll('a');
console.log(tag1)
const tag2 = document.querySelector('a');
console.log(tag2)
const logo = document.querySelector('.logo');


function timer() {
    logo.innerText = 'Hi';
}

setTimeout(timer, 1000);

setTimeout(() => { console.log(logo.innerHTML = 'Hi') }, 1000);

const nameChange = document.getElementsByClassName('header-item--right')[0];
const changedName = nameChange.innerText = 'Tamara Carlos';