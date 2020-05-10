const loadingSelector = document.getElementById('loading');
let dots = '.';

// function loadingDots() {
    setInterval(() => {
    if (dots === '...') {
        dots = 0;
    } else {
        dots++;
    };
}, 800);

loadingSelector.innerHTML += dots;
    
// };

// loadingDots();

console.log(dots);