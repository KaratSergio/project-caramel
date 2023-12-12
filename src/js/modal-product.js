import {
  STORAGE_KEY,
  getData,
  saveData,
  countAddedItems,
  checkAdded,
  manageButton,
  changeOtherIcon,
} from './STORAGE';

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
const modalProductPopularity = document.getElementById(
  'modalProductPopularity'
);
const modalProductDescription = document.getElementById(
  'modalProductDescription'
);
const modalProductPrice = document.getElementById('modalProductPrice');
const modalOverlay = document.querySelector('.modal-overlay'); //! new
const scrollToTopBtnEl = document.getElementById('scrollToTopBtn'); //!new

// let isProductAdded = false;

export function openModal(product) {
  try {
    if (!product || !product.img) {
      console.error('Product data is missing or incomplete.');
      return;
    }

    modalProduct.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-overlay').style.display = 'flex';
    window.addEventListener('click', outsideModalClick);

    addToCartBtn.addEventListener('click', addProduct);
    removeFromBtn.addEventListener('click', removeProduct);
    const listProducts = getData(STORAGE_KEY);
    let item = checkAdded(listProducts, product);
    manageButton(item, addToCartBtn, removeFromBtn);
    function addProduct() {
      listProducts.push(product);
      recheckCart(listProducts);
    }
    function removeProduct() {
      listProducts.splice(item, 1);
      recheckCart(listProducts);
    }
    function recheckCart(item) {
      saveData(STORAGE_KEY, listProducts);
      countAddedItems();
      item = checkAdded(listProducts, product);
      changeOtherIcon(product._id, item);
      manageButton(item, addToCartBtn, removeFromBtn);
    }

    scrollToTopBtnEl.style.display = 'none'; //!new

    modalProductImage.src = product.img;
    modalProductName.textContent = product.name;

    modalProductCategory.innerHTML = `Category: <span id="priceText"> ${product.category.replace(
      /_/g,
      ' '
    )}</span>`;
    document.getElementById('priceText').style.color = 'black';
    modalProductSize.innerHTML = `Size: <span id="priceTexte"> ${product.size}</span>`;
    document.getElementById('priceTexte').style.color = 'black';
    modalProductPopularity.innerHTML = `Popularity: <span id="priceTex"> ${product.popularity}</span>`;
    document.getElementById('priceTex').style.color = 'black';

    modalProductDescription.textContent = `${product.desc}`;
    modalProductPrice.textContent = `$ ${product.price}`;

    modalProduct.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-overlay').style.display = 'block';
    window.addEventListener('click', outsideModalClick);
  } catch (error) {
    console.log('no proructs');
  }
}

function closeModal() {
  document.body.style.overflow = '';
  modalProduct.style.display = 'none';
  document.querySelector('.modal-overlay').style.display = 'none';

  scrollToTopBtnEl.style.display = 'flex'; //! new
}

closeModalProductBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// function outsideModalClick(event) {
//   if (event.target === modalProduct) {
//     closeModal();
//   }
// }

// !new
function outsideModalClick(event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
}
