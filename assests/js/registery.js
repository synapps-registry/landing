const images = document.querySelectorAll('.image');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const largeImage = document.getElementById('largeImage');
const close = document.getElementById('close');

images.forEach(image => {
    image.addEventListener('click', function() {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        largeImage.src = this.src;
        largeImage.style.width = '80%';
        largeImage.style.height = 'auto';
    });
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
});
