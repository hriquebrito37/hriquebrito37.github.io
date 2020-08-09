document.addEventListener("wheel", detectScroll);

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

function detectScroll(ev) {
    if (canScroll == true) {
        if(ev.deltaY > 0) { currentSection++; }
        else if(ev.deltaY < 0) { currentSection--; }
        canScroll = false;

        currentSection = clampNumber(currentSection, 0, sections.length - 1);
        
        changeSection(currentSection);
        setTimeout(function() { canScroll = true; }, 1500);
    }
}


function changeSection(sectionIndex) {
    sections[sectionIndex].parentElement.style.backgroundColor = backgrounds[sectionIndex];

    if(sections[sectionIndex - 1] != undefined) sections[sectionIndex - 1].style.left = '-100%';
    if(sections[sectionIndex + 1] != undefined) sections[sectionIndex + 1].style.left = '100%';

    setTimeout(function() { sections[sectionIndex].style.left = '0%'; }, 1000);
}
