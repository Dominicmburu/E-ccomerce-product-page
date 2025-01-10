const previewImages = document.querySelectorAll('.preview-image');
const mainImage = document.querySelector('.main-image');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentIndex = 0;

function updateMainImage(index) {
  mainImage.src = previewImages[index].src;
  previewImages.forEach((img) => {
    img.classList.remove('selected');
    img.classList.remove('active');
  });
  previewImages[index].classList.add('selected');
  previewImages[index].classList.add('active');
}

previewImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    updateMainImage(index);
  });
});

prevArrow.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : previewImages.length - 1;
  updateMainImage(currentIndex);
});

nextArrow.addEventListener('click', () => {
  currentIndex = (currentIndex < previewImages.length - 1) ? currentIndex + 1 : 0;
  updateMainImage(currentIndex);
});
