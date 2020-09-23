const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('list-mobile--active');
}

const plusTogle = document.querySelector('#plus-togle');
const openBlock = document.querySelector('#open-text');

plusTogle.onclick = function(){
    plusTogle.classList.toggle('plus-icon-active');
    openBlock.classList.toggle('openBlock--active');
}


const test = document.querySelector('.TEST')
console.log(test)

test.onclick = function(){
    test.classList.toggle('test-active');
}