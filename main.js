/**
 * Drop down list
 */
const dropDownKeys = document.querySelectorAll('.nav__drop');
const expandedElements = document.querySelectorAll('.main__content__nav--hidden');
dropDownKeys.forEach((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        expandedElements[index].classList.toggle('main__content__nav--shown');
    })
})


/**
 * Log out button pop out
 */
const logoutButtonShow = document.querySelector('.headerMain__logout--content');
const formLogoutButton = document.querySelector('.form__logoutButton');
logoutButtonShow.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    formLogoutButton.classList.toggle('form__logoutButton__hidden');
})

document.querySelector('body').addEventListener('click', (e) => {
    formLogoutButton.classList.add('form__logoutButton__hidden');
})

