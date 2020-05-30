/* COMPENTENCES */

/*
*   loading animation with dots
*
*   @param {wordContent} the word needed to be shown
*   @param {time}        timeout for setInterval
*/
function loadingDots(wordContent, time, selector) {
    const htmlSelector = document.getElementById(selector);

    setInterval(() => {
        if (htmlSelector.innerHTML === wordContent) {
            htmlSelector.innerHTML = wordContent + '.';
        } else if (htmlSelector.innerHTML === wordContent + '.') {
            htmlSelector.innerHTML = wordContent + '..';
        } else if (htmlSelector.innerHTML === wordContent + '..') {
            htmlSelector.innerHTML = wordContent + '...';
        } else {
            htmlSelector.innerHTML = wordContent;
        }
    }, time);
}

loadingDots('Prochainement', 800, 'reactLoading');

/* ABOUT CARD AGE */

/*
*   Update the age with birthdate and today date
*
*   @param {birth}      birthDate 
*   @param {selector}   querySelector      
*/
function updateAge(birth, selector) {
    const htmlSelector = document.querySelector(selector);

    const birthDate = new Date(birth);

    const monthBirthDate = birthDate.getMonth();
    const dayBirthDate = birthDate.getDate();
    const yearBirthDate = birthDate.getFullYear();

    const todayDate = new Date();

    const monthTodayDate = todayDate.getMonth();
    const dayTodayDate = todayDate.getDate();
    const yearTodayDate = todayDate.getFullYear();

    let diffDate = yearTodayDate - yearBirthDate;

    if (monthBirthDate >= 1 && monthTodayDate >= 1 && dayBirthDate >= 15 && dayTodayDate >= 15) {
        diffDate++;
    }

    htmlSelector.innerHTML = diffDate - 1;
}

updateAge('February 15 1999', '#niveau ul li:last-child');