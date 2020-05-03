'use strict'
let images = [
    './assets/images/photo-1551829142-d9b8cf2c9232.jpg',
    './assets/images/photo-1522748906645-95d8adfd52c7.jpg',
    './assets/images/photo-1525230071276-4a87f42f469e.jpg',
];
let sliderImage = document.getElementById('image-current');
let currentImageIndex = images.length;
let image = document.getElementsByClassName('image')[0];
window.onload = function() {
    image.setAttribute('src', images[currentImageIndex - 1]);
};
function showNextImage() {
    if (currentImageIndex < images.length) {
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
    image.setAttribute('src', images[currentImageIndex - 1]);
    image.classList.add('image_next');
    setTimeout(e=>{image.classList.remove('image_next');}, 600);
}
function showPreviousImage() {
    if (currentImageIndex < images.length + 1 && currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length;
    }
    image.setAttribute('src', images[currentImageIndex - 1]);
    image.classList.add('image_prev');
    setTimeout(e=>{image.classList.remove('image_prev');}, 600);
}
document.getElementsByClassName('button_prev')[0].addEventListener('mousedown', showPreviousImage);
document.getElementsByClassName('button_prev')[0].removeEventListener('mouseup', showPreviousImage);
document.getElementsByClassName('button_next')[0].addEventListener('mousedown', showNextImage);
document.getElementsByClassName('button_next')[0].removeEventListener('mouseup', showNextImage);