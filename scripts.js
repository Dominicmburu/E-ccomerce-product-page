const previewImages = document.querySelectorAll('.preview-image');
const mainImage = document.querySelector('.main-image');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const decreaseQuantityButton = document.querySelector('.decrease-quantity');
const increaseQuantityButton = document.querySelector('.increase-quantity');
const quantityValue = document.querySelector('.quantity-value');
const addToCartButton = document.querySelector('.add-to-cart');
const cartCountElement = document.querySelector('.cart-count');
const cartItemsContainer = document.querySelector('.cart-items');

let currentIndex = 0;
let cartCount = 0;
let quantity = 0;

function updateMainImage(index) {
  mainImage.src = previewImages[index].src;
  previewImages.forEach((img) => {
    img.classList.remove('selected');
    img.classList.remove('active');
  });
  previewImages[index].classList.add('selected');
  previewImages[index].classList.add('active');
}

updateMainImage(0);

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

cartIcon.addEventListener('click', () => {
  cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

decreaseQuantityButton.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantityValue.textContent = quantity;
  }
});

increaseQuantityButton.addEventListener('click', () => {
  quantity++;
  quantityValue.textContent = quantity;
});

addToCartButton.addEventListener('click', () => {
  if (quantity > 0) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Update cart items
    cartItemsContainer.innerHTML = `
      <div class="cart-item">
        <img src="${mainImage.src}" alt="Product image">
        <div class="item-details">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 x ${quantity} <strong>$${125.00 * quantity}</strong></p>
        </div>
        <button class="remove-item">Remove</button>
      </div>
    `;

    // Add remove item functionality
    document.querySelector('.remove-item').addEventListener('click', () => {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      cartCount = 0;
      cartCountElement.textContent = cartCount;
    });

    quantity = 0;
    quantityValue.textContent = quantity;
    alert('Item(s) added to cart successfully!');
  } else {
    alert('Please select a quantity greater than 0.');
  }
});
