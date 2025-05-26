const images = ["Image1.jpg", "Image2.jpg", "Image3.jpg"];
let currentImage = 0;
function showImage() {
    document.getElementById("slide").src = images[currentImage];
}
function prev() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
}
function next() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}
