$(function(){
    const burgerButton = document.querySelector('.header__btn');
    const mobile = document.querySelector('.header__navigation');
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('active')
        if (burgerButton.classList.contains('active')){
            mobile.classList.add('open')
        }
        else {
            mobile.classList.remove('open')
        }
    })
    new WOW().init();
});