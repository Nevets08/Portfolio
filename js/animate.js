/* BUTTON BACK TO TOP SCROLL */

const btnTopScroll = document.getElementById('btnScrollTop');
// Affiche le button quand page > 400px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        btnTopScroll.classList.add('show');
        btnTopScroll.classList.remove('hidden');
    } else {
        btnTopScroll.classList.remove('show');
        btnTopScroll.classList.add('hidden');
    };
});
// Ramene en haut de la page quand on clique sur le button
btnTopScroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

/* MENU SCROLL TO SECTION */

// Blue underline
const underlineSelector = document.querySelector('#menu ul li:nth-child(2)');

underlineSelector.addEventListener('click', () => {
    if (window.pageYOffset > 300) {
        const createDiv = document.createElement('div');
        createDiv.setAttribute('class', 'blue-underline');
        // const createLapContent = document.createTextNode('Lap ' + lapCount + ' ' + selectorMin.innerHTML + ':' + selectorSec.innerHTML + ':' + selectorMs.innerHTML);
        // createDiv.appendChild(createLapContent);
        document.querySelector('header').appendChild(createDiv);
    } else {
        return;
    };
});

// A propos
const menuAboutSelector = document.querySelector('#menu ul li:nth-child(2)');

menuAboutSelector.addEventListener('click', () => {
    window.scrollTo(0, 860);
});

// Portfolio
const menuPortfolioSelector = document.querySelector('#menu ul li:nth-child(3)');

menuPortfolioSelector.addEventListener('click', () => {
    window.scrollTo(0, 1850);
});

// Competences
const menuSkillsSelector = document.querySelector('#menu ul li:nth-child(4)');

menuSkillsSelector.addEventListener('click', () => {
    window.scrollTo(0, 2500);
});

// Parcours
const menuSchoolSelector = document.querySelector('#menu ul li:nth-child(5)');

menuSchoolSelector.addEventListener('click', () => {
    window.scrollTo(0, 3360);
});

// Contact
const menuContactSelector = document.querySelector('#menu ul li:nth-child(6)');

menuContactSelector.addEventListener('click', () => {
    window.scrollTo(0, 5700);
});

// Button "faisons connaissance !"
const buttonKnowSelector = document.querySelector('#fondbleu button');

buttonKnowSelector.addEventListener('click', () => {
    window.scrollTo(0, 860);
});

/* CAPACITY ANIMATION TRIGGER KEYFRAME ON SCROLL = 750 */

const firstProgressBarCapacity = document.querySelector('#creative .progress-bar');
const secondProgressBarCapacity = document.querySelector('#technical .progress-bar');
const thirdProgressBarCapacity = document.querySelector('#intrepid .progress-bar');
const fourthProgressBarCapacity = document.querySelector('#patience .progress-bar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 750) {
        firstProgressBarCapacity.id = 'firstProgression';
        secondProgressBarCapacity.id = 'secondProgression';
        thirdProgressBarCapacity.id = 'thirdProgression';
        fourthProgressBarCapacity.id = 'fourthProgression';
    } else {
        firstProgressBarCapacity.removeAttribute('id');
        secondProgressBarCapacity.removeAttribute('id');
        thirdProgressBarCapacity.removeAttribute('id');
        fourthProgressBarCapacity.removeAttribute('id');
    };
});

/* COMPETENCES -> ANIMATION ACTIVE KEYFRAMES ON SCROLL = 1900 */

const htmlProgressBar = document.querySelector('.competences #html .progress-bar');
const cssProgressBar = document.querySelector('.competences #css .progress-bar');
const jsProgressBar = document.querySelector('.competences #js .progress-bar');
const reactProgressbar = document.querySelector('.competences #react .progress-bar');
const wordpressProgressBar = document.querySelector('.competences #wordpress .progress-bar');
const photoshopProgressBar = document.querySelector('.competences #photoshop .progress-bar');
const EnglishProgressBar = document.querySelector('.competences #anglais .progress-bar');
const redactionProgressBar = document.querySelector('.competences #redaction .progress-bar');
const integrationProgressBar = document.querySelector('.competences #integration .progress-bar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1900) {
        htmlProgressBar.id = 'htmlProgression';
        cssProgressBar.id = 'cssProgression';
        jsProgressBar.id = 'jsProgression';
        reactProgressbar.id = 'reactProgression';
        wordpressProgressBar.id = 'wordpressProgression';
        photoshopProgressBar.id = 'photoshopProgression';
        EnglishProgressBar.id = 'englishProgression';
        redactionProgressBar.id = 'redactionProgression';
        integrationProgressBar.id = 'integrationProgression';
    } else {
        htmlProgressBar.removeAttribute('id');
        cssProgressBar.removeAttribute('id');
        jsProgressBar.removeAttribute('id');
        reactProgressbar.removeAttribute('id');
        wordpressProgressBar.removeAttribute('id');
        photoshopProgressBar.removeAttribute('id');
        EnglishProgressBar.removeAttribute('id');
        redactionProgressBar.removeAttribute('id');
        integrationProgressBar.removeAttribute('id');
    };
});

/* PORTFOLIO -> ANIMATION ACTIVE KEYFRAMES ON MOUSEOVER */

const portfolioCard = document.querySelector('.portfolio .card-img');
const portfolioCardContent = document.querySelector('.portfolio .infos-portfolio');

portfolioCardContent.addEventListener('mouseover', () => {
    portfolioCard.classList.remove('infos-portfolio-hidden');
    portfolioCard.classList.add('infos-portfolio-animate');
    portfolioCardContent.style.opacity = "0.5";
});

portfolioCardContent.addEventListener('mouseout', () => {
    portfolioCard.classList.remove('infos-portfolio-animate');
});

console.log(portfolioCard)