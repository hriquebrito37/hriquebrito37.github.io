document.addEventListener("wheel", detectScroll);

let divs = document.querySelectorAll(".scrollblock");

let backgrounds = []

for (let i = 0; i < divs.length; i++) {
    backgrounds.push(window.getComputedStyle(divs[i]).getPropertyValue("background-color"));
    divs[i].style.backgroundColor = "rgba(0,0,0,0)";
}

let canScroll = true;

let currentDiv = 0;
changeDiv(currentDiv);

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

function detectScroll(ev) {
    if (canScroll == true) {
        if(ev.deltaY > 0) { currentDiv++; }
        else if(ev.deltaY < 0) { currentDiv--; }
        canScroll = false;

        currentDiv = clampNumber(currentDiv, 0, divs.length - 1);
        
        changeDiv(currentDiv);
        setTimeout(function() { canScroll = true; }, 1500);
    }
}


function changeDiv(divIndex) {
    divs[divIndex].parentElement.style.backgroundColor = backgrounds[divIndex];

    if(divs[divIndex - 1] != undefined) divs[divIndex - 1].style.left = '-100%';
    if(divs[divIndex + 1] != undefined) divs[divIndex + 1].style.left = '100%';

    setTimeout(function() { divs[divIndex].style.left = '0%'; }, 1000);
}
