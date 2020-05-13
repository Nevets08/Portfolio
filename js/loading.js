/* COMPENTENCES -> Animation 3 DOTS LOADING */

const loadingSelector = document.getElementById('loading');

function loadingDots(wordContent) {
    setInterval(() => {
        if (loadingSelector.innerHTML === wordContent) {
            loadingSelector.innerHTML = wordContent + '.';
        } else if (loadingSelector.innerHTML === wordContent + '.') {
            loadingSelector.innerHTML = wordContent + '..';
        } else if (loadingSelector.innerHTML === wordContent + '..') {
            loadingSelector.innerHTML = wordContent + '...';
        } else {
            loadingSelector.innerHTML = wordContent;
        }
    
}, 800);

};

loadingDots('Prochainement');