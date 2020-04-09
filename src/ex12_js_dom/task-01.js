"use strict"
let imageArray = [
    './assets/images/photo-1551829142-d9b8cf2c9232.jpg',
    './assets/images/photo-1522748906645-95d8adfd52c7.jpg',
    './assets/images/photo-1525230071276-4a87f42f469e.jpg',
];
let sliderImage = document.getElementById('image-current');
let i = imageArray.length;
window.onload = function() {
    sliderImage.innerHTML = "<img class='image' src=" + imageArray[i - 1] + " alt='current image'>";
};
function showNextImage() {
    if (i < imageArray.length) {
        i++;
    }
    else {
        i = 1;
    }
    sliderImage.innerHTML = "<img class='image image_next' src=" + imageArray[i - 1] + " alt='current image'>";
}
function showPreviousImage() {
    if (i < imageArray.length + 1 && i > 1) {
        i--;
    }
    else {
        i = imageArray.length;
    }
    sliderImage.innerHTML = "<img class='image image_prev' src=" + imageArray[i - 1] + " alt='current image'>";
}