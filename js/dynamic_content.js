/* COMPENTENCES */

const loadingSelector = document.getElementsByClassName('loading');

/*
*   loading animation with dots
*
*   @param {wordContent} the word needed to be shown
*   @param {time}        timeout for setInterval
*/
function loadingDots(wordContent, time) {
    for (let i = 0; i < loadingSelector.length; i++) {
        setInterval(() => {
            if (loadingSelector[i].innerHTML === wordContent) {
                loadingSelector[i].innerHTML = wordContent + '.';
            } else if (loadingSelector[i].innerHTML === wordContent + '.') {
                loadingSelector[i].innerHTML = wordContent + '..';
            } else if (loadingSelector[i].innerHTML === wordContent + '..') {
                loadingSelector[i].innerHTML = wordContent + '...';
            } else {
                loadingSelector[i].innerHTML = wordContent;
            }
        }, time);
    }
}

loadingDots('Prochainement', 800);

/* ABOUT CARD AGE */

/*
*   Update the age with birthdate
*
*   @param {} 
*   @param {}        
*/
const age = document.querySelector('#niveau ul li:last-child');
const dateBirth = new Date('February 15 1999')
const dateToday = new Date('Ferbuary 15 2012');

let yearBirth = dateToday.getFullYear() - dateBirth.getFullYear();
const monthBirth = dateToday.getMonth() - dateBirth.getMonth();
const dayBirth = dateToday.getDate() - dateBirth.getDate();

function ageAutomatise() {


age.innerHTML = yearBirth;

  console.log(yearBirth)
  console.log(monthBirth + 1)
  console.log(dayBirth)
} 

ageAutomatise();
