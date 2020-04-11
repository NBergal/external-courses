'use strict'
let imageArray = [
    './assets/images/photo-1551829142-d9b8cf2c9232.jpg',
    './assets/images/photo-1522748906645-95d8adfd52c7.jpg',
    './assets/images/photo-1525230071276-4a87f42f469e.jpg',
];
let sliderImage = document.getElementById('image-current');
let currentImageIndex = imageArray.length;
window.onload = function() {
    sliderImage.innerHTML = `<img class='image' src=${imageArray[currentImageIndex - 1]} alt='current image'>`;
};
function showNextImage() {
    if (currentImageIndex < imageArray.length) {
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
    sliderImage.innerHTML = `<img class='image image_next' src=${imageArray[currentImageIndex - 1]} alt='current image'>`;
}
function showPreviousImage() {
    if (currentImageIndex < imageArray.length + 1 && currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = imageArray.length;
    }
    sliderImage.innerHTML = `<img class='image image_prev' src=${imageArray[currentImageIndex - 1]} alt='current image'>`;
}
document.getElementsByClassName('button_prev')[0].addEventListener('mousedown', showPreviousImage);
document.getElementsByClassName('button_prev')[0].removeEventListener('mouseup', showPreviousImage);
document.getElementsByClassName('button_next')[0].addEventListener('mousedown', showNextImage);
document.getElementsByClassName('button_prev')[0].removeEventListener('mouseup', showNextImage);