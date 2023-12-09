// import { getProductsByParams, getProductsCategories } from './get-api';
// import { createCardMarkup, displayProducts } from './products';

const URL_BASE = 'https://food-boutique.b.goit.study/api/';
const productsListFilter = document.querySelector('.list-prod');
const filterForm = document.querySelector('.filter-form');
const filterSearchInput = document.querySelector('input');
const filterSelect = document.querySelector('.filter-select');
const filterSort = document.querySelector('.filter-sort');

filterForm.addEventListener('submit', handlerForm);

async function handlerForm(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.searchQuery.value
    .trim()
    .toLowerCase()
    .split(' ');
  const categoryEl = e.currentTarget.categories.value;

  try {
    const searchQuery = e.currentTarget.searchQuery.value
      .trim()
      .toLowerCase()
      .split(' ');
    const categoryEl = e.currentTarget.categories.value;
    const resp = await getByParams(searchQuery, categoryEl);
    const results = resp.map(({ name, category }) => {
      category = categoryEl === 'Show all' ? null : category;
      return { name, category };
    });

    productsListFilter.innerHTML = createCard(results);
  } catch (err) {
    console.error(err);
  }
}

async function getByParams(keyword, category) {
  const params = new URLSearchParams({
    keyword,
    category,
    page: 1,
    limit: 6,
  });

  // if (sort && sort.key && sort.value) {
  //   params[sort.key] = sort.value;
  // }

  const resp = await fetch(`${URL_BASE}products?${params}`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return resp.json();
}

async function getCategories() {
  const response = await fetch(`${URL_BASE}products/categories`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

filterSelect.addEventListener('change', showCategories);

function showCategories(e) {
  const categoryEl = e.currentTarget.value;

  getCategories(categoryEl)
    .then(categories => {
      categories.forEach(category => {
        option.value = category;
        option.text = category;
        filterSelect.appendChild(option);
      });
      let showAllOption = document.createElement('option');
      showAllOption.text = 'Show all';
      filterSelect.appendChild(showAllOption);
    })

    .catch(error => {
      console.error('Error fetching categories:', error);
    });
}

function createCard(data) {
  return data
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
