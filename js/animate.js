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

// APROPOS -> Button "Télécharger mon CV" -> MOUSEOVER -> apparait une icone

const buttonDownloadCv = document.querySelector('#Apropos a.gauche');

buttonDownloadCv.addEventListener('mouseover', () => {
    buttonDownloadCv.innerHTML = '<i class="fas fa-file-download"></i><span> </span> Télécharger mon CV'
});

buttonDownloadCv.addEventListener('mouseout', () => {
    buttonDownloadCv.innerHTML = 'Télécharger mon CV';
});

// APROPOS -> Button "Invoquer" -> Click, scroll to bottom of the page

const invocationButton = document.querySelector('#Apropos .card button.droite');

invocationButton.addEventListener('click', () => {
    window.scrollTo(0, 6000);
});

/* TITLE ANIMATION */

const titleAboutSelector = document.querySelector('#Apropos h1')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        titleAboutSelector.classList.add('grandTitre-animate');
    } else {
        titleAboutSelector.classList.remove('grandTitre-animate');
    };
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

/* COMPETENCES -> ANIMATION ACTIVE KEYFRAMES ON SCROLL = 2200 */

const htmlProgressBar = document.querySelector('.competences #html .progress-bar');
const cssProgressBar = document.querySelector('.competences #css .progress-bar');
const jsProgressBar = document.querySelector('.competences #js .progress-bar');
const reactProgressbar = document.querySelector('.competences #react .progress-bar');
const wordpressProgressBar = document.querySelector('.competences #wordpress .progress-bar');
const photoshopProgressBar = document.querySelector('.competences #photoshop .progress-bar');
const EnglishProgressBar = document.querySelector('.competences #anglais .progress-bar');
const redactionProgressBar = document.querySelector('.competences #redaction .progress-bar');
const integrationProgressBar = document.querySelector('.competences #integration .progress-bar');
const nodeProgressionBar = document.querySelector('.competences #node .progress-bar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 2200) {
        htmlProgressBar.id = 'htmlProgression';
        cssProgressBar.id = 'cssProgression';
        jsProgressBar.id = 'jsProgression';
        reactProgressbar.id = 'reactProgression';
        wordpressProgressBar.id = 'wordpressProgression';
        photoshopProgressBar.id = 'photoshopProgression';
        EnglishProgressBar.id = 'englishProgression';
        redactionProgressBar.id = 'redactionProgression';
        integrationProgressBar.id = 'integrationProgression';
        nodeProgressionBar.id = 'nodeProgression';
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
        nodeProgressionBar.removeAttribute('id');
    };
});

/* PORTFOLIO -> ANIMATION ACTIVE KEYFRAMES ON MOUSEOVER */

const cardSelector = document.querySelectorAll('.infos-portfolio');

for (let i = 0; i < cardSelector.length; i++) {
    cardSelector[i].addEventListener('mouseover', () => {
        cardSelector[i].firstElementChild.classList.add('infos-portfolio-animate');
        cardSelector[i].firstElementChild.classList.remove('infos-portfolio-hidden');
    });

    cardSelector[i].addEventListener('mouseout', () => {
        cardSelector[i].firstElementChild.classList.remove('infos-portfolio-animate');
        cardSelector[i].firstElementChild.classList.add('infos-portfolio-hidden');
    });
};