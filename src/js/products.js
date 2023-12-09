import { getProductsByParams } from './get-api';

import { openModal } from './modal-product';

const productsList = document.querySelector('.list-prod');

const defaultParameters = {
  keyword: '',
  category: '',
  page: 1,
  limit: 9,
};

// ---------------------------



export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getData(key) {
  try {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : {};
  } catch (error) {
    console.log(error);
  }
}

// ---------------------------


// ________________

saveData("defaultParameters",defaultParameters);

// // _______________________________

export function addMarkup(el, markup) {
  el.innerHTML = markup;
}

export async function displayProducts(pageNumber) {
  try {
    defaultParameters.page = pageNumber;
    const { results } = await getProductsByParams(defaultParameters);

    console.log('Products:', results); 
   
    const markup = createCardMarkup(results);
   
    addMarkup(productsList, markup);

    const productCards = document.querySelectorAll('.prod-item');

    productCards.forEach(card => {
      
      card.addEventListener('click', () => {
        const productId = card.getAttribute('data-js-product-id');
        const buyBtn = card.querySelector('.buy-btn');
        const selectedProduct = results.find(
          product => product._id.toString() === productId
        );
        console.log('Selected productId:', productId);
        saveProductId(productId, results);
  
        // if (selectedProduct) {
        //   openModal(selectedProduct);
        // } else {
        //   console.error('Selected product not found:', productId);
        // }

        // console.log(productId);
        // console.log(results);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

export function createCardMarkup(results) {
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
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `;
    })
    .join('');
}


const STORAGE_KEY = 'added-item';

function saveProductId(productId, results) {
  let data = getData(STORAGE_KEY);
  if (!data.products) {
    data.products = [];
  }
  const selectedProduct = results.find(
    product => product._id.toString() === productId
  );
  if (selectedProduct) {
    data.products.push(selectedProduct);
    saveData(STORAGE_KEY, data);
    console.log(data);
  } else {
    console.error('Selected product not found:', productId);
  }
}

