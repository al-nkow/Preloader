import '../scss/main.scss';
import template from '../templates/main.hbs';

let data = {
    frames: [
        {link: 'https://www.youtube.com/embed/bS5P_LAqiVg?rel=0&amp;controls=0&amp;showinfo=0'},
        {link: 'https://www.youtube.com/embed/18-Ye2L3ej8?rel=0&amp;controls=0&amp;showinfo=0'},
        {link: 'https://www.youtube.com/embed/3dUbtrTU-1U?rel=0&amp;controls=0&amp;showinfo=0'},
        {link: 'https://www.youtube.com/embed/TvZskcqdYcE?rel=0&amp;controls=0&amp;showinfo=0'},
        {link: 'https://www.youtube.com/embed/OGXj_9fnx2A?rel=0&amp;controls=0&amp;showinfo=0'},
        {link: 'https://www.youtube.com/embed/hAxSVf7zoD8?rel=0&amp;controls=0&amp;showinfo=0'},
    ],
};

let movies = document.getElementById('movies');
movies.innerHTML = template(data);

window.onload = function() {
    let preloader = document.getElementsByClassName('preloader')[0];
    preloader.classList.add('hidden');
}

