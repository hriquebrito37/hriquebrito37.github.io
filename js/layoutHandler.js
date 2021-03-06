function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if (detectMobile() == true && document.URL.split("?")[1] !== 'm') window.location.href += '?m'

if(document.URL.split("?")[1] === 'm') {
    if(!document.getElementById('mobile')) {
        let cssStyle = document.createElement('link');
        cssStyle.id = 'mobile';
        cssStyle.rel = 'stylesheet';
        cssStyle.href = '/css/mobile.css';
        document.head.appendChild(cssStyle);
    }
} else if(!document.getElementsByClassName('scroll')[0]) {
    let cssStyle = document.createElement('link');
    cssStyle.className = 'scroll';
    cssStyle.rel = 'stylesheet';
    cssStyle.href = '/css/scroll.css';
    document.head.appendChild(cssStyle);

    let scrollScript = document.createElement('script');
    scrollScript.className = 'scroll';
    scrollScript.src = '/js/scroll.js';
    document.body.appendChild(scrollScript);
}

