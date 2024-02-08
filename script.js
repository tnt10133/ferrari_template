const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


btnPopup.addEventListener('click',()=> {wrapper.classList.add('active-popup');});
iconClose.addEventListener('click',()=> {wrapper.classList.remove('active-popup');});
