import { getProducts } from './api/discount-api';
import { getData, saveData } from './api/storage';
import { createMarkup } from './markup-discount';

let products = [];
const productEl = document.querySelector('.products-discount');
console.log(productEl);

async function onLoad() {
  const response = await getProducts();

  products = response.slice(0, 2);

  const markup = createMarkup(products);

  addMarkup(markup);
}
onLoad();

function addMarkup(markup) {
  productEl.insertAdjacentHTML('beforeend', markup);
}

productEl.addEventListener('click', onClick);

function onClick(event) {
  if (!event.target.closest('.cart-product-btn')) {
    return;
  }
  const cardEl = event.target.closest('.cart-product-discount');
  const id = cardEl.dataset.id;

  //   console.log(data);
  const items = getData();
  if (items.find(item => id === item._id)) {
    saveData(items.filter(item => id !== item._id));
  } else {
    const data = products.find(item => id === item._id);
    items.push(data);
    saveData(items);
  }
}
