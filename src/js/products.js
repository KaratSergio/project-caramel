import sprite from '../images/icons.svg';
import { first, result } from 'lodash';
import { openModal } from './modal-product';

const productsList = document.querySelector('.list-prod');
const STORAGE_KEY = 'added-item';
const GetLocal = 'firstGet';

// LocalStorage
export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getData(GetLocal) {
  try {
    const result = localStorage.getItem(GetLocal);
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.log(error);
  }
}

// Markup
export function addMarkup(el, markup) {
  el.innerHTML = markup;
}

// передаєм на пвгінацію для відмальовки карток
export async function displayProducts(results) {
  const markup = createCardMarkup(results);
  addMarkup(productsList, markup);
}

// достаем дані з локал
const items = getData(GetLocal);
console.log(items);

const productId = getIdProducts(items);
console.log(productId);



const toggle = productId.includes(items._id);
console.log(toggle);




productsList.addEventListener('click', onClick);
productsList.addEventListener('click', onShowModal);

function onClick(event) {
  const btnEl = event.target.closest('.buy-btn');
  if (!btnEl) {
    return;
  }
  // elemets
  const cardEl = event.target.closest('.prod-item');
console.log(cardEl);
  const icons = btnEl.querySelectorAll('svg');

// data- id
  const id = cardEl.getAttribute('data-js-product-id');
console.log(id);
 
  // отримуєм дані з локалки для зрівнняня
  const items = getData(GetLocal);
  console.log(items);
// перевіряєм і додаєм до локал покищо не віднімає
 if (items.find(item => id === item._id)) {
   const updatedItems = items.filter(item => id !== item._id);
   saveData(STORAGE_KEY, updatedItems);
 } else {
   const data = products.find(item => id === item._id);
   items.push(data);
   saveData(STORAGE_KEY, items);
 }

  icons.forEach(element => {
    element.classList.toggle('is-hidden');
  });
}

function onShowModal(event) {
  const cardEl = event.target.closest('.prod-item');
  const btnEl = event.target.closest('.buy-btn');

  if (!cardEl || btnEl) {
    return;
  }
  const id = cardEl.getAttribute('data-js-product-id');
  const data = products.find(item => id === item._id);
  openModal(data);
}

function getIdProducts(items = []) {
  return items.map(item => item._id);
}

export function createCardMarkup(results) {
  const check = toggle ? '' : 'is-hidden';

  const card = toggle ? 'is-hidden' : '';

  return results
    .map(({ _id, name, img, category, size, price, popularity }) => {
      return `
        <li class="prod-item" data-js-product-id=${_id}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${img} alt=${name} loading="lazy">
          </div>
          <h3 class="title-prod">${name}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${category}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${size}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${popularity}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${price}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${check}" width="18" height="18">
            <use href="${sprite}#check"></use>
             </svg>
             <svg class="card-product-svg ${card}" width="18" height="18">
             <use href="${sprite}#shopping-cart"></use>
             </svg>
            </button>
          </div>
        </li>
      `;
    })
    .join('');
}
