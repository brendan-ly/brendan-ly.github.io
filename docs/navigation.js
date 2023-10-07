var pages = [
    'snakegame.html',
    'chinesezodiac/chinesezodiac.html',
    'segments.html',
    'basketball-3.html',
    'personalslideshowreduced/hikingslideshow.html',
    'speedometer/speedometer-2.html',
    'tictactoe.html',
    'bmi.html',
    'color-mixer.html',
];

window.addEventListener('load', makeNavigation);

function makeNavigation() {
    // find the current page in the list 
    var currentPage = document.location.href;
    // alert (currentPage);
    var index = findPage(currentPage);
    // put the next and previous functions on the arrows

    var next = (index + 1) % pages.length;
    var previous = (index - 1 + pages.length) % pages.length;

    var isInFolder = pages[index].indexOf("/") >= 0;

    var links = document.getElementsByTagName('nav')[0].getElementsByTagName('a');

    if (isInFolder) {
        links[0].href = "../" + pages[previous];
        links[2].href = "../" + pages[next];
    }
    else {
        links[0].href = pages[previous];
        links[2].href = pages[next];
    }
}
function findPage(currentPage) {
    // alert (currentPage);
    for (var i = 0; i < pages.length; i++) {
        // alert (i);
        if (currentPage.indexOf(pages[i]) >= 0) {
            return i;
        }
    }

    return -1;
}
