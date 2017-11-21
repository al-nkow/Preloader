import '../scss/main.scss';

// let s = 300;
// let str = `one more: ${s}`;
// console.log('>>>>>> INIT1', str);
// console.log('>>>>>> INIT2');

window.onload = function() {
    var preloader = document.getElementsByClassName('preloader')[0];
    // console.log('>>>>>>', preloader[0].classList);
    preloader.classList.add('hidden');
    // console.log('>>>>>> READY');
}