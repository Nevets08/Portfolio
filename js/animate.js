/*
*   show or hide the element html depending the scroll value
*
*   @param {scrollValue} value of the scroll
*   @param {showClass} class show added/removed to 'selectorClass'
*   @param {hiddenClass} class hidden added/removed to 'selectorClass'
*   @param {selectorClass} the html tag who needs the class
*/
function scrollAnimate(scrollValue, showClass, hiddenClass, selectorClass) {
    if (window.pageYOffset > scrollValue) {
        selectorClass.classList.add(showClass);
        selectorClass.classList.remove(hiddenClass);
    } else {
        selectorClass.classList.remove(showClass);
        selectorClass.classList.add(hiddenClass);
    };
}

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
}

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

/* BUTTON BACK TO TOP SCROLL */

const btnTopScroll = document.getElementById('btnScrollTop');
// Affiche le button quand page > 400px
window.addEventListener('scroll', () => {
    scrollAnimate(400, 'show', 'hidden', btnTopScroll);
});

const socialScroll = document.getElementById('social-media');
// Affiche les reseaux sociaux quand page > 400px
window.addEventListener('scroll', () => {
    scrollAnimate(500, 'show-social', 'hidden', socialScroll);
});

// Ramene en haut de la page quand on clique sur le button
btnTopScroll.addEventListener('click', () => {
    scrollPosition('#menu');
});

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

const invocationButton = document.querySelector('footer');

invocationButton.addEventListener('click', () => {
    window.scrollTo(0, 60000);
});

window.addEventListener('scroll', () => {
    /* TITLE ANIMATION */
    scrollId('#Apropos h1', 'title-animate');
    scrollId('.portfolio h1', 'title-animate');
    scrollId('.competences h1', 'title-animate');
    scrollId('#parcours h1', 'title-animate');
    scrollId('#contact h1', 'title-animate');
    /* ABOUT - CAPACITY -> ANIMATION TRIGGER KEYFRAME ON SCROLL */
    scrollId('#creative .progress-bar', 'firstProgression');
    scrollId('#technical .progress-bar', 'secondProgression');
    scrollId('#intrepid .progress-bar', 'thirdProgression');
    scrollId('#patience .progress-bar', 'fourthProgression');
    /* COMPETENCES -> ANIMATION ACTIVE KEYFRAMES ON SCROLL */
    scrollId('#html .progress-bar', 'htmlProgression');
    scrollId('#css .progress-bar', 'cssProgression');
    scrollId('#js .progress-bar', 'jsProgression');
    scrollId('#react .progress-bar', 'reactProgression');
    scrollId('#wordpress .progress-bar', 'wordpressProgression');
    scrollId('#photoshop .progress-bar', 'photoshopProgression');
    scrollId('#anglais .progress-bar', 'englishProgression');
    scrollId('#redaction .progress-bar', 'redactionProgression');
    scrollId('#integration .progress-bar', 'integrationProgression');
});

/* PORTFOLIO -> ANIMATION ACTIVE KEYFRAMES ON MOUSEOVER */
// Add text on mouseover and remove on mouseout
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

// Add opacity on card-img on mouseover and remove on mouseout
const cardImg = document.querySelectorAll('.card-img img');

for (let i = 0; i < cardImg.length; i++) {
    cardSelector[i].addEventListener('mouseover', () => {
        cardImg[i].classList.add('cardimg-opacity');
    });

    cardSelector[i].addEventListener('mouseout', () => {
        cardImg[i].classList.remove('cardimg-opacity');
    });
};