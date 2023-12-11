import { getProducts } from '../get-api';

import { STORAGE_KEY, countAddedItems, getData, saveData } from '../STORAGE';
import { createMarkup } from './markup-discount';
import { openModal } from '../modal-product';

let products = [];
const productEl = document.querySelector('.products-discount');

async function onLoad() {
  const response = await getProducts();

  products = response.slice(0, 2);

  const items = getData(STORAGE_KEY);

  const idProducts = getIdProducts(items);

  const markup = createMarkup(products, idProducts);

  addMarkup(markup);
}
onLoad();

function addMarkup(markup) {
  productEl.insertAdjacentHTML('beforeend', markup);
}

productEl.addEventListener('click', onClick);
productEl.addEventListener('click', onShowModal);

function onClick(event) {
  const btnEl = event.target.closest('.card-product-btn');
  if (!btnEl) {
    return;
  }
  const cardEl = event.target.closest('.card-product-discount');

  const icons = btnEl.querySelectorAll('svg');

  const id = cardEl.dataset.id;

  //   console.log(data);
  const items = getData(STORAGE_KEY);
  if (items.find(item => id === item._id)) {
    saveData(
      STORAGE_KEY,
      items.filter(item => id !== item._id)
    );
    countAddedItems();
  } else {
    const data = products.find(item => id === item._id);
    items.push(data);
    saveData(STORAGE_KEY, items);
    countAddedItems();
  }

  icons.forEach(element => {
    element.classList.toggle('is-hidden');
  });
}

function onShowModal(event) {
  const cardEl = event.target.closest('.card-product-discount');
  const btnEl = event.target.closest('.card-product-btn');

  if (!cardEl || btnEl) {
    return;
  }
  const id = cardEl.dataset.id;
  const data = products.find(item => id === item._id);
  openModal(data);
}

function getIdProducts(items = []) {
  return items.map(item => item._id);
}
