document.addEventListener("wheel", detectScroll);

// window.onresize = fixSize

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

    if(divs[divIndex - 1] != undefined) divs[divIndex - 1].children[0].style.left = '-100%'
    divs[divIndex].children[0].style.left = '0%'
    // divs[divIndex].children[0].style.width = '100%'
    if(divs[divIndex + 1] != undefined) {
        divs[divIndex + 1].children[0].style.left = '100%'
        // divs[divIndex + 1].children[0].style.width = '0px'
    }
}

function fixSize() {
    var paddingVertical = 50
    var parentDiv = divs[currentDiv]
    var childDiv = parentDiv.children[0]
    if(childDiv.scrollHeight < window.document.children[0].scrollHeight)
        childDiv.style.height = window.document.children[0].scrollHeight.toString() + "px"
    else
        childDiv.style.width = "100%"
    parentDiv.style.height = (childDiv.scrollHeight + paddingVertical).toString() + 'px';
}
