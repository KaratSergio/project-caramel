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
    modalProductImage.src = product.img;
    modalProductName.textContent = product.name;
    modalProductCategory.innerHTML = `Category: <span id="priceText">$ ${product.category}</span>`;
    document.getElementById('priceText').style.color = 'black';
    modalProductSize.innerHTML = `Size: <span id="priceTexte">$ ${product.size}</span>`;
    document.getElementById('priceTexte').style.color = 'black';
    modalProductPopularity.innerHTML = `Popularity: <span id="priceTex">$ ${product.popularity}</span>`;
    document.getElementById('priceTex').style.color = 'black';
    modalProductDescription.textContent = `${product.desc}`;
    modalProductPrice.textContent = `$ ${product.price}`;

       const existingOverlay = document.querySelector('.modal-overlay');
    if (!existingOverlay) {

    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeModal);
    }
    document.body.style.overflow = 'hidden';
    modalProduct.style.display = 'block';
    window.addEventListener('click', outsideModalClick);
}

function closeModal() {
    document.body.style.overflow = '';
    modalProduct.style.display = 'none';
    window.removeEventListener('click', outsideModalClick);

       const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
      document.body.removeChild(overlay);
    }
}
// Event listeners
closeModalProductBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideModalClick);
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
window.addEventListener('click', function (event) {
    if (event.target === modalProduct) {
        closeModal();
    }
});
addToCartBtn.addEventListener('click', function () {
    closeModal();
});