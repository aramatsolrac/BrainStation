const navbar = document.getElementById('nav-bar');
const main = document.querySelector('main');
const tag2 = document.querySelector('a');
const logo = document.querySelector('.logo');
const getAnchorTag = document.querySelectorAll('a');


function timer() {
    logo.innerText = 'Hi';
}
setTimeout(timer, 1000);

setTimeout(() => { console.log(logo.innerHTML = 'Hi') }, 1000);

const nameChange = document.getElementsByClassName('header-item--right')[0];
const changedName = nameChange.innerText = 'Tamara Carlos';


function timer2() {
    for (i = 0; i < getAnchorTag.length; i++) {
        getAnchorTag[i].style.textDecoration = 'underline';
    }
}
// timer2();
setTimeout(timer2, 2000);