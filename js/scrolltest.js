document.addEventListener("wheel", detectScroll);

let divs = document.querySelectorAll(".scrollblock");

let currentDiv = 0;
changeDiv(currentDiv);

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

function detectScroll(ev) {
    // deltaY > 0 pra baixo
    // deltaY < 0 pra cima
    if(ev.deltaY > 0) { currentDiv++; }
    else if(ev.deltaY < 0) { currentDiv--; }

    currentDiv = clampNumber(currentDiv, 0, divs.length - 1);
    
    changeDiv(currentDiv);
}

function changeDiv(divIndex) {
    divs.forEach(div => { div.style.visibility = 'hidden';});
    divs[divIndex].style.visibility = 'visible';
}