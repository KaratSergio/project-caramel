// import { getProductsByParams, getProductsCategories } from './get-api';
// import { createCardMarkup, displayProducts } from './products';

const URL_BASE = 'https://food-boutique.b.goit.study/api/';

function getCategories() {
  return fetch(`${URL_BASE}products/categories`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function getByParams(keyword, category, page, limit, sort) {
  const params = new URLSearchParams({
    keyword: keyword,
    category: category,
    page: page,
    limit: limit,
  });

  if (sort && sort.key && sort.value) {
    params[sort.key] = sort.value;
  }

  return fetch(`${URL_BASE}products`, { params }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

const productsListFilter = document.querySelector('.list-prod');
const filterForm = document.querySelector('.filter-form');
const filterSearchInput = document.querySelector('input');
const filterSelect = document.querySelector('.filter-select');
const filterSort = document.querySelector('.filter-sort');

export function createCard(results) {
  if (!Array.isArray(results)) {
    console.error('Invalid results:', results);
    return '';
  }
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

async function initialize() {
  try {
    const categories = await getCategories();

    let showAllOption = document.createElement('option');
    showAllOption.innerHTML = 'Show all';
    filterSelect.appendChild(showAllOption);

    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.text = category;
      filterSelect.appendChild(option);
    });

    filterSelect.addEventListener('change', async function () {
      updateLocalStorage({
        ...getLocalStorage(),
        category: this.value === 'Show all' ? null : this.value,
        page: 1,
      });

      const storedData = getLocalStorage();
      const products = await getByParams(storedData);
      console.log(products);
      productsListFilter.innerHTML = createCard(products);
    });

    const initialData = getLocalStorage();
    const initialProducts = await getByParams(initialData);

    productsListFilter.innerHTML = createCard(initialProducts);
  } catch (error) {
    console.error('Initialization error:', error);
  }
}

filterForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchQuery = this.elements.searchQuery.value
    .trim()
    .toLowerCase()
    .split(' ');
  const category = this.elements.categories.value;
  this.elements.searchQuery.value = searchQuery ? searchQuery : '';
  updateLocalStorage({
    keyword: searchQuery,
    category: category === 'Show all' ? null : category,
    page: 1,
    limit: 6,
  });

  const storedData = getLocalStorage();
  const products = await getByParams(storedData);

  productsListFilter.innerHTML = createCardMarkup(products);
  this.elements.searchQuery.value = '';
});

function updateLocalStorage(data) {
  localStorage.setItem('filterData', JSON.stringify(data));
}

function getLocalStorage() {
  const storedData = localStorage.getItem('filterData');
  return storedData
    ? JSON.parse(storedData)
    : { keyword: null, category: null, page: 1, limit: 6 };
}

initialize();

// import axios from 'axios';

// axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/products';

// async function getCategories() {
//   try {
//     const response = await axios.get(`/categories`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching product categories:', error);
//     throw error;
//   }
// }

// async function getByParams(keyword, category, page, limit, sort) {
//   try {
//     const params = {
//       keyword: keyword,
//       category: category,
//       page: page,
//       limit: limit,
//     };

//     if (sort && sort.key && sort.value) {
//       params[sort.key] = sort.value;
//     }

//     const response = await axios.get(``, { params: params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// }

// const productsListFilter = document.querySelector('.list-prod');
// const filterForm = document.querySelector('.filter-form');
// const filterSearchInput = document.querySelector('input');
// const filterSelect = document.querySelector('.filter-select');
// const filterSort = document.querySelector('.filter-sort');

// async function initialize() {
//   try {
//     const categories = await getCategories();

//     let showAllOption = document.createElement('option');
//     showAllOption.innerHTML = 'Show all';
//     filterSelect.appendChild(showAllOption);

//     categories.forEach(category => {
//       const option = document.createElement('option');
//       option.value = category;
//       option.text = category;
//       filterSelect.appendChild(option);
//     });

//     filterSelect.addEventListener('change', async function () {
//       updateLocalStorage({
//         ...getLocalStorage(),
//         category: this.value === 'Show all' ? null : this.value,
//         page: 1,
//       });

//       const storedData = getLocalStorage();
//       const products = await getByParams(storedData);

//       productsListFilter.innerHTML = createCardMarkup(products);
//     });

//     const initialData = getLocalStorage();
//     const initialProducts = await getByParams(initialData);

//     productsListFilter.innerHTML = createCardMarkup(initialProducts);
//   } catch (error) {
//     console.error('Initialization error:', error);
//   }
// }

// filterForm.addEventListener('submit', async function (e) {
//   e.preventDefault();
//   const searchQuery = this.elements.searchQuery.value
//     .trim()
//     .toLowerCase()
//     .split(' ');
//   const category = this.elements.categories.value;
//   this.elements.searchQuery.value = searchQuery ? searchQuery : '';
//   updateLocalStorage({
//     keyword: searchQuery,
//     category: category === 'Show all' ? null : category,
//     page: 1,
//     limit: 6,
//   });

//   const storedData = getLocalStorage();
//   const products = await getByParams(storedData);

//   productsListFilter.innerHTML = createCardMarkup(products);
//   this.elements.searchQuery.value = '';
// });

// function updateLocalStorage(data) {
//   localStorage.setItem('filterData', JSON.stringify(data));
// }

// function getLocalStorage() {
//   const storedData = localStorage.getItem('filterData');
//   return storedData
//     ? JSON.parse(storedData)
//     : { keyword: null, category: null, page: 1, limit: 6 };
// }

// // Call the initialize function to start the process
// initialize();

// import axios from 'axios';

// axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/products';

// async function getCategories() {
//   try {
//     const response = await axios.get(`/categories`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching product categories:', error);
//     throw error;
//   }
// }

// async function getByParams(keyword, category, page, limit, sort) {
//   try {
//     const params = {
//       keyword: keyword,
//       category: category,
//       page: page,
//       limit: limit,
//     };

//     if (sort && sort.key && sort.value) {
//       params[sort.key] = sort.value;
//     }

//     const response = await axios.get(``, { params: params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// }

// const productsListFilter = document.querySelector('.list-prod');
// const filterForm = document.querySelector('.filter-form');
// const filterSearchInput = document.querySelector('input');
// const filterSelect = document.querySelector('.filter-select');
// const filterSort = document.querySelector('.filter-sort');

// filterForm.addEventListener('submit', async function (e) {
//   e.preventDefault();
//   const searchQuery = this.elements.searchQuery.value
//     .trim()
//     .toLowerCase()
//     .split(' ');
//   const category = this.elements.categories.value;
//   this.elements.searchQuery.value = searchQuery ? searchQuery : '';
//   updateLocalStorage({
//     keyword: searchQuery,
//     category: category === 'Show all' ? null : category,
//     page: 1,
//     limit: 6,
//   });

//   const storedData = getLocalStorage();

//   const products = await getByParams(storedData);

//   productsListFilter.innerHTML = createCardMarkup(products);
//   this.elements.searchQuery.value = '';
// });

// function updateLocalStorage(data) {
//   localStorage.setItem('filterData', JSON.stringify(data));
// }

// function getLocalStorage() {
//   const storedData = localStorage.getItem('filterData');
//   return storedData
//     ? JSON.parse(storedData)
//     : { keyword: null, category: null, page: 1, limit: 6 };
// }

// const categories = getCategories();

// let showAllOption = document.createElement('option');
// showAllOption.innerHTML = 'Show all';
// filterSelect.appendChild(showAllOption);

// categories.forEach(category => {
//   const option = document.createElement('option');
//   option.value = category;
//   option.text = category;
//   filterSelect.appendChild(option);
// });

// filterSelect.addEventListener('change', async function () {
//   updateLocalStorage({
//     ...getLocalStorage(),
//     category: this.value === 'Show all' ? null : this.value,
//     page: 1,
//   });

//   const storedData = getLocalStorage();

//   const products = getByParams(storedData);

//   productsListFilter.innerHTML = createCardMarkup(products);
// });

// const initialData = getLocalStorage();
// const initialProducts = getByParams(initialData);

// productsListFilter.innerHTML = createCardMarkup(initialProducts);
