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
    scrollPosition('#menu');
});

/* MENU SCROLL TO SECTION */

/*
*   find the position of the tag and scroll to
*
*   @param {selector} querySelector
*/
function scrollPosition(selector) {
    const selectorTag = document.querySelector(selector)
    const selectorPosition = selectorTag.getBoundingClientRect().top;
    
    window.scrollTo(0, selectorPosition);
}

// A propos
const menuAboutSelector = document.querySelector('#menu ul li:nth-child(2)');

menuAboutSelector.addEventListener('click', () => {
    scrollPosition('#cartes');
});

// Portfolio
const menuPortfolioSelector = document.querySelector('#menu ul li:nth-child(3)');

menuPortfolioSelector.addEventListener('click', () => {
    scrollPosition('.portfolio');
});

// Competences
const menuSkillsSelector = document.querySelector('#menu ul li:nth-child(4)');

menuSkillsSelector.addEventListener('click', () => {
    scrollPosition('.competences');
});

// Parcours
const menuSchoolSelector = document.querySelector('#menu ul li:nth-child(5)');

menuSchoolSelector.addEventListener('click', () => {
    scrollPosition('#parcours');
});

// Contact
const menuContactSelector = document.querySelector('#menu ul li:nth-child(6)');

menuContactSelector.addEventListener('click', () => {
    scrollPosition('#contact');
});

// Button "faisons connaissance !"
const buttonKnowSelector = document.querySelector('#fondbleu button');

buttonKnowSelector.addEventListener('click', () => {
    scrollPosition('#cartes');
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

const titleAboutSelector = document.querySelector('#Apropos h1');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        titleAboutSelector.classList.add('grandTitre-animate');
    } else {
        titleAboutSelector.classList.remove('grandTitre-animate');
    };
});


/*
*   find the position of the tag when it is shown on scroll, trigger a css animation by adding an id
*
*   @param {idSelector} the html tag needed to add the id
*   @param {idEdit}     select the id and add it to the html tag for animation css
*/
function scrollId(idSelector, idEdit) {
    // Edit the id
    const targetId = document.querySelector(idSelector);
    
    // Find the position of the page
    const targetPositonTag = document.querySelector(idSelector);
    const targetPosition = targetPositonTag.getBoundingClientRect().top; 

    if (targetPosition < window.innerHeight) {
        targetId.id = idEdit;
    } else {
        targetId.removeAttribute('id');
    }

    console.log(targetPosition)
    console.log(window.innerHeight)
}

/* CAPACITY ANIMATION TRIGGER KEYFRAME ON SCROLL */

window.addEventListener('scroll', () => {
    scrollId('#creative .progress-bar', 'firstProgression');
    scrollId('#technical .progress-bar', 'secondProgression');
    scrollId('#intrepid .progress-bar', 'thirdProgression');
    scrollId('#patience .progress-bar', 'fourthProgression');
});

/* COMPETENCES -> ANIMATION ACTIVE KEYFRAMES ON SCROLL */

window.addEventListener('scroll', () => {
    scrollId('#html .progress-bar', 'cssProgression');
    scrollId('#css .progress-bar', 'cssProgression');
    scrollId('#js .progress-bar', 'jsProgression');
    scrollId('#node .progress-bar', 'nodeProgression');
    scrollId('#react .progress-bar', 'reactProgression');
    scrollId('#wordpress .progress-bar', 'wordpressProgression');
    scrollId('#photoshop .progress-bar', 'photoshopProgression');
    scrollId('#anglais .progress-bar', 'englishProgression');
    scrollId('#redaction .progress-bar', 'redactionProgression');
    scrollId('#integration .progress-bar', 'integrationProgression');
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