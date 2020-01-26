const doc = document;
const win = window;
const theThing = doc.querySelector('#thing');
const maxPos = theThing.offsetWidth;
console.log('maxPos = ', maxPos);
let currentPos = 0;

var requestAnimationFrame = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || win.msRequestAnimationFrame;

(function moveThing() {
    currentPos += 5;

    // ****
    // DON'T DO IN PRODUCTION
    // For performance:
    //  -Use translate or (even better) translate3d
    theThing.style.left = currentPos + "px";
    // ****

    if (Math.abs(currentPos) >= maxPos) {
        currentPos = -maxPos;
    }

    requestAnimationFrame(moveThing);
})();