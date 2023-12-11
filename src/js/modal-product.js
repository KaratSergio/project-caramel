import { getData, saveData } from './STORAGE';

const addToCartIcon = document.getElementById('addToCartIcon');
const removeFromIcon = document.getElementById('removeFromIcon');
removeFromIcon.classList.add('visually-hidden');

const modalProduct = document.getElementById('modalProduct');
const closeModalProductBtn = document.getElementById('closeModalProductBtn');
const addToCartBtn = document.getElementById('addToCartBtn');
const removeFromBtn = document.getElementById('removeFrom'); 
const modalProductImage = document.getElementById('modalProductImage');
const modalProductName = document.getElementById('modalProductName');
const modalProductCategory = document.getElementById('modalProductCategory');
const modalProductSize = document.getElementById('modalProductSize');
const modalProductPopularity = document.getElementById('modalProductPopularity');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductPrice = document.getElementById('modalProductPrice');

let isProductAdded = false;

export function openModal(product) {
  if (!product || !product.img) {
    console.error('Product data is missing or incomplete.');
    return;
  }

  modalProduct.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.querySelector('.modal-overlay').style.display = 'flex'; 
  window.addEventListener('click', outsideModalClick);

  addToCartBtn.addEventListener('click', () => {
    const listProducts = getData();
    const productAdded = listProducts.find(item => item._id === product._id);
    if (!productAdded) {
      listProducts.push(product);
      saveData(listProducts);
      updateCartIcon(true);
      isProductAdded = true;
    }
  });

  removeFromBtn.addEventListener('click', () => {
    manageCart(product, true);
    updateCartIcon(false);
    isProductAdded = false;
  });

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

  modalProduct.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.querySelector('.modal-overlay').style.display = 'block';
  window.addEventListener('click', outsideModalClick);
}

function manageCart(product, remove = false) {
  const listProducts = getData();
  const productInCart = listProducts.find(item => item._id === product._id);

  if (remove) {
    if (productInCart) {
      saveData(listProducts.filter(item => item._id !== product._id));
    }
  } else {
    if (!productInCart) {
      listProducts.push(product);
      saveData(listProducts);
    }
  }
}

function closeModal() {
  document.body.style.overflow = '';
  modalProduct.style.display = 'none';
  document.querySelector('.modal-overlay').style.display = 'none'; 
  window.removeEventListener('click', outsideModalClick);
  isProductAdded = false;
}

closeModalProductBtn.addEventListener('click', closeModal);
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

function updateCartIcon(itemAdded) {
  const listProducts = getData();

  if (itemAdded) {
    addToCartIcon.classList.add('added-to-cart');
    removeFromIcon.classList.remove('added-to-cart');
  } else {
    addToCartIcon.classList.remove('added-to-cart');
    removeFromIcon.classList.add('added-to-cart');
  }

  if (listProducts.length > 0) {
    removeFromBtn.classList.remove('visually-hidden');
    addToCartBtn.classList.add('visually-hidden');
  } else {
    removeFromBtn.classList.add('visually-hidden');
    addToCartBtn.classList.remove('visually-hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const listProducts = getData();
  const productAdded = listProducts.find(item => item._id === product._id);
  if (productAdded) {
    isProductAdded = true;
  }
  updateCartIcon(isProductAdded);
});

