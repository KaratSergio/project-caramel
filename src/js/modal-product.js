import {
  STORAGE_KEY,
  getData,
  saveData,
  countAddedItems,
  checkAdded,
  manageButton,
  changeOtherIcon,
} from './STORAGE';

// const addToCartIcon = document.getElementById('addToCartIcon');
const removeFromIcon = document.getElementById('removeFromIcon');
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
const modalOverlay = document.querySelector('.modal-overlay'); 
const scrollToTopBtnEl = document.getElementById('scrollToTopBtn'); 

removeFromIcon.classList.add('visually-hidden');

export function openModal(product) {
  if (!product || !product.img) {
    console.error('Product data is missing or incomplete.');
    return;
  }
  
  modalProduct.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  modalOverlay.style.display = 'flex';
  // modalOverlay.classList.add('flex-elem'); 

  window.addEventListener('click', outsideModalClick);

  const listProducts = getData(STORAGE_KEY);
  let item = checkAdded(listProducts, product);
  manageButton(item, addToCartBtn, removeFromBtn);

  addToCartBtn.addEventListener('click', addProduct);
  removeFromBtn.addEventListener('click', removeProduct);

  scrollToTopBtnEl.style.display = 'none';

  modalProductImage.src = product.img;
  modalProductName.textContent = product.name;

  const formatCategory = category => category.replace(/_/g, ' ');
  modalProductCategory.innerHTML = `Category: <span id="priceText">${formatCategory(
    product.category
  )}</span>`;
  document.getElementById('priceText').style.color = 'black';
  modalProductSize.innerHTML = `Size: <span id="priceTexte">${product.size}</span>`;
  document.getElementById('priceTexte').style.color = 'black';
  modalProductPopularity.innerHTML = `Popularity: <span id="priceTex">${product.popularity}</span>`;
  document.getElementById('priceTex').style.color = 'black';
  modalProductDescription.textContent = `${product.desc}`;
  modalProductPrice.textContent = `$ ${product.price}`;

  function addProduct() {
    listProducts.push(product);
    recheckCart();
  }
  
  function removeProduct() {
    listProducts.splice(item, 1);
    recheckCart();
  }
  
  function recheckCart() {
    saveData(STORAGE_KEY, listProducts);
    countAddedItems();
    item = checkAdded(listProducts, product);
    changeOtherIcon(product._id, item);
    manageButton(item, addToCartBtn, removeFromBtn);
  }  
}

function closeModal() {
  document.body.style.overflow = '';
  modalProduct.style.display = 'none';

  modalOverlay.style.display = 'none';
  // modalOverlay.classList.remove('flex-elem');

  scrollToTopBtnEl.style.display = 'flex';

  // addToCartBtn.removeEventListener('click', addProduct);
  // removeFromBtn.removeEventListener('click', removeProduct);
  window.removeEventListener('click', outsideModalClick);
}

closeModalProductBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function outsideModalClick(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
}
