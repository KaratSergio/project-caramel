// modal-product.js

const modalProduct = document.getElementById('modalProduct');
const closeModalProductBtn = document.getElementById('closeModalProductBtn');
const addToCartBtn = document.getElementById('addToCartBtn');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductName = document.getElementById('modalProductName');
const modalProductCategory = document.getElementById('modalProductCategory');
const modalProductSize = document.getElementById('modalProductSize');
const modalProductPopularity = document.getElementById('modalProductPopularity');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductPrice = document.getElementById('modalProductPrice');

export function openModal(product) {
    if (!product || !product.img) {
        console.error('Product data is missing or incomplete.');
        return;
    }
    // console.log(product); 

    modalProductImage.src = product.img;
    modalProductName.textContent = product.name;
    modalProductCategory.textContent = `Category: ${product.category}`;
    modalProductSize.textContent = `Size: ${product.size}`;
    modalProductPopularity.textContent = `Popularity: ${product.popularity}`;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = `Price: ${product.price}`;

    document.body.style.overflow = 'hidden';
    modalProduct.style.display = 'block';
    window.addEventListener('click', outsideModalClick);
}

function closeModal() {
    document.body.style.overflow = '';
    modalProduct.style.display = 'none';
    window.removeEventListener('click', outsideModalClick);
}

// Event listeners
closeModalProductBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (event.target === modalProduct) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function outsideModalClick(event) {
    if (event.target === modalProduct) {
        closeModal();
    }
}
// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (event.target === modalProduct) {
        closeModal();
    }
});

// Add product to cart logic
addToCartBtn.addEventListener('click', function () {
    // Implement logic to add the product to the cart and update the UI
    // You can use localStorage to store the cart information
    // Example:
    // const productId = product.id;
    // const cart = JSON.parse(localStorage.getItem('cart')) || {};
    // cart[productId] = (cart[productId] || 0) + 1;
    // localStorage.setItem('cart', JSON.stringify(cart));

    // After updating the cart, you might want to close the modal
    closeModal();
});