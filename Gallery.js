// Open the Model

function openLightbox() {
    document.getElementById('lightbox').style.display = "block";
}

// Close the Modal
function closeLightbox() {
    document.getElementById('lightbox').style.display= "none";
}

// Declare a variable for the index of the current image
let currentIndex = 1;
// Change the image in the lightbox to the one that is clicked on 
function setCurrentImage(index) {
    currentIndex = index;
    const imageSrc = document.getElementsByClassName(
        'gallery-img')[currentIndex -1].src;
    document.getElementById('lightbox-img').src = imageSrc;
    const imageAlt = document.getElementsByClassName(
        'gallery-img')[currentIndex - 1].alt;
    document.getElementById('caption').innerHTML = imageAlt;
}
