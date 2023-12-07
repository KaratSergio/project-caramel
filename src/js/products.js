import { getProductsByParams } from './get-api';
import icons from '../images/icons.svg';

const productsList = document.querySelector('.list-prod');

const defaultParameters = {
  keyword: '',
  category: '',
  page: 1,
  limit: 9,
};

function addMarkup(el, markup) {
  el.innerHTML = markup;
}

async function displayProducts() {
  try {
    const { results } = await getProductsByParams(defaultParameters);
    const markup = createCardMarkup(results);
    addMarkup(productsList, markup);
  } catch (error) {
    console.error('Ошибка при отображении продуктов:', error);
  }
}

export function createCardMarkup(results) {
  return results
    .map(({ id, name, img, category, size, price, popularity }) => {
      return `
        <li class="prod-item" js-product-id=${id}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="../images/icons.svg#shopping-cart"></use>
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
            <p class="price-prod"> &#36;${price}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="../images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `;
    })
    .join('');
}

displayProducts();
