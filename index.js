 const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const body = document.querySelector('body');
 const nav = document.querySelector('.navigation');
 const logo = document.querySelector('.logo');
 const frm = document.querySelector('.form-box');
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    body.classList.add('change');
    logo.classList.add('change');
    nav.classList.add('change');
    frm.classList.add('change');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    body.classList.remove('change');
    logo.classList.remove('change');
    nav.classList.remove('change');
    frm.classList.remove('change');
});

