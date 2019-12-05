// When you use class names to reference DOM elements
// *always* prefix with "js-"

const thePic = document.querySelector(".js-picture");


function changePic(aPic, imgPath) {
    aPic.src = imgPath;
}