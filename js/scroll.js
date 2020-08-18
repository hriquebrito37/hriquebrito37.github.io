document.addEventListener("wheel", scrollHandler);
document.addEventListener("keydown", keyboardHandler);

let sections = document.querySelectorAll(".scrollblock");

let backgrounds = [];

sections.forEach((section) => {
    backgrounds.push(window.getComputedStyle(section).getPropertyValue("background-color"));
    section.style.backgroundColor = "rgba(0,0,0,0)";
});

let canScroll = true;

let currentSection = 0;
changeSection(currentSection);

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

function changeSectionByNumber(num) {
    if (canScroll == true) {
        currentSection += num;
        canScroll = false;

        currentSection = clampNumber(currentSection, 0, sections.length - 1);

        changeSection(currentSection);
        setTimeout(function() { canScroll = true; }, 1500);
    }
}

function scrollHandler(ev) {
    if(ev.deltaY > 0) { changeSectionByNumber(1); }
    else if(ev.deltaY < 0) { changeSectionByNumber(-1); }
}

function keyboardHandler(ev) {
    switch (ev.key) {
        case "ArrowUp":
        case "ArrowLeft":
            changeSectionByNumber(-1); break;
        case "ArrowDown":
        case "ArrowRight":
            changeSectionByNumber(1); break;
    }
}


function changeSection(sectionIndex) {
    sections[sectionIndex].parentElement.style.backgroundColor = backgrounds[sectionIndex];

    if(sections[sectionIndex - 1] != undefined) sections[sectionIndex - 1].style.left = '-100%';
    if(sections[sectionIndex + 1] != undefined) sections[sectionIndex + 1].style.left = '100%';

    setTimeout(function() { sections[sectionIndex].style.left = '0%'; }, 1000);
}

