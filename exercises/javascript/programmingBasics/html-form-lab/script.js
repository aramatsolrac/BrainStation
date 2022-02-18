'use strict'

const form = document.getElementById('form');

const userPassword = document.getElementById('password');
const userPasswordConfirm = document.getElementById('confirm-password');
const outputMessage = document.getElementById('outputMessage');

userPassword.addEventListener('input', () => {
    if (userPassword.value !== userPasswordConfirm.value) {
        outputMessage.innerText = 'Your password does not match';
    } else {
        outputMessage.innerText = '';
    }
});