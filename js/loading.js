/* COMPENTENCES -> Animation 3 DOTS LOADING */

const loadingSelector = document.getElementsByClassName('loading');

function loadingDots(wordContent) {
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
        }, 800);
    };
};

loadingDots('Prochainement');