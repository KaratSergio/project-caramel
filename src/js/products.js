import sprite from '../images/icons.svg';
import {
  STORAGE_KEY,
  FIRST_SET_KEY,
  getData,
  saveData,
  changeOtherIcon,
} from './STORAGE';
import { openModal } from './modal-product';
import { getProductById } from './get-api';

const productsList = document.querySelector('.list-prod');
const items = getData(STORAGE_KEY);

export function addMarkup(el, markup) {
  el.innerHTML = markup;
}

export async function displayProducts(results) {
  const markup = createCardMarkup(results);
  addMarkup(productsList, markup);
}

productsList.addEventListener('click', onClick);
productsList.addEventListener('click', onShowModal);

function onClick(event) {
  const btnEl = event.target.closest('.buy-btn');
  if (!btnEl) {
    return;
  }

  const cardEl = event.target.closest('.prod-item');
  const id = cardEl.getAttribute('data-js-product-id');
  const icons = btnEl.querySelectorAll("svg[data-js-product='" + id + "']");
  const items = getData(STORAGE_KEY);
  let existingItemIndex = items.findIndex(item => item._id === id);
  if (existingItemIndex !== -1) {
    items.splice(existingItemIndex, 1);
    existingItemIndex = -1;
  } else {
    const newItem = getData(FIRST_SET_KEY).find(item => item._id === id); 
    if (newItem) {
      items.push(newItem);
      existingItemIndex = 0;
    }
  }
  saveData(STORAGE_KEY, items);
  changeOtherIcon(id, existingItemIndex);
}
export function changeIcons(arr) {
  arr.forEach(element => {
    element.classList.toggle('is-hidden');
  });
}

function onShowModal(event) {
  const cardEl = event.target.closest('.prod-item');
  const btnEl = event.target.closest('.buy-btn');

  if (!cardEl || btnEl) {
    return;
  }
  const idProduct = cardEl.getAttribute('data-js-product-id');

  getProductById(idProduct)
    .then(res => {
      openModal(res);
    })
    .catch(error => {
      console.error(error);
    });
}

export function createCardMarkup(results) {
  return results
    .map(
      ({
        _id,
        name,
        img,
        category,
        size,
        price,
        popularity,
        is10PercentOff,
      }) => {
        const storageData = getData(STORAGE_KEY);
        const check = storageData.find(item => item._id === _id)
          ? ''
          : 'is-hidden';
        const card = storageData.find(item => item._id === _id)
          ? 'is-hidden'
          : '';
        const visibility = onVisible(is10PercentOff);
        return `
        <li class="prod-item" data-js-product-id=${_id}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${is10PercentOff}" style="visibility: ${visibility};">
              <use href="${sprite}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${img} alt=${name} width="140" height="140" loading="lazy">
          </div>
          <h3 class="title-prod">${name}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${category.replace(
              /_/g,
              ' '
            )}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${size}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${popularity}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${price}</p>
            <button class="buy-btn" type="button" aria-label="Buy">
            <svg class="card-product-svg ${check}" 
            data-js-product="${_id}" width="18" height="18">
            <use href="${sprite}#check"></use>
            </svg>
            <svg class="card-product-svg ${card}" 
            data-js-product="${_id}" width="18" height="18">
            <use href="${sprite}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `;
      }
    )
    .join('');
}

function onVisible(is10PercentOff) {
  if (is10PercentOff === true) {
    return 'visible';
  } else return 'hidden';
}
