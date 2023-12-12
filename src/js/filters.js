import { getProductsCategories } from './get-api';
import axios from 'axios';
import { newDisplayPagination } from './pagination';

class FoodApi {
  constructor() {
    this.URL = `https://food-boutique.b.goit.study/api`;
    this.searchQuery = '';
    this.category = '';
    this.currentPage = 1;
    this.perPage = 90;
  }

  paramsFromApi(params) {
    return Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');
  }

  getFoodList() {
    const params = {
      keyword: this.searchQuery,
      category: this.category,
      page: this.currentPage,
      limit: this.perPage,
    };

    const encodedParams = this.paramsFromApi(params);

    return axios.get(`${this.URL}/products?${encodedParams}`).then(response => {
      return response.data;
    });
  }
}

class LocalStorage {
  updateLsWithList(data, options) {
    if (!localStorage.getItem('options')) {
      this.defaultApiOptions();
    }

    localStorage.setItem('products', JSON.stringify(data.results));
    localStorage.setItem('options', JSON.stringify(options));
  }

  defaultApiOptions() {
    const defaultOptions = {
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    };
    localStorage.setItem('options', JSON.stringify(defaultOptions));
  }
}

export function createFirst(currentPage) {
  const savedProduct = localStorage.getItem('res.data');
  const parseItem = JSON.parse(savedProduct);

  productsListFilter.innerHTML = '';
  let firstElOnPage;
  let limitтNumberProd;
  if (isNaN((page - 1) * limit)) {
    firstElOnPage = 0;
  } else {
    firstElOnPage = (page - 1) * limit;
  }
  limitтNumberProd = +pageProd * +limitProd;
  console.log(firstElOnPage);
  console.log(limitтNumberProd);
  try {
    const dataItems = parseItem;
    if (dataItems && currentPage >= 2) {
      let pageCounter = (currentPage - 1) * 8;
      const itemsToDisplay = dataItems.slice(
        firstElOnPage + pageCounter,
        limitтNumberProd + pageCounter
      );
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = creatMarkupProd(itemsToDisplay[i]);
        productsList.insertAdjacentHTML('beforeend', markup);
      }
    } else if (dataItems && dataItems.length > 0) {
      const itemsToDisplay = dataItems.slice(firstElOnPage, limitтNumberProd);
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = creatMarkupProd(itemsToDisplay[i]);
        productsListFilter.insertAdjacentHTML('beforeend', markup);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function createMarkupCard(results) {
  const { _id, name, img, category, size, price, popularity } = results;
  return `
        <li class="prod-item" data-js-product-id=${_id}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${img} alt=${name} width="140" height="140" loading="lazy" aria-label=${name}>
          </div>
          <h3 class="title-prod">${name}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${category}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${size}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${popularity}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${price}</p>
            <button class="buy-btn" type="button" aria-label="Buy ${name}">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `;
}

const productsListFilter = document.querySelector('.list-prod');
const filterForm = document.querySelector('.filter-form');
const filterSelect = document.querySelector('.filter-select');

const foodApi = new FoodApi();
const localStorageManager = new LocalStorage();

getProductsCategories().then(categories => {
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    filterSelect.appendChild(option);
  });

  const showAllOption = createShowAll();
  filterSelect.appendChild(showAllOption);
});

export function createShowAll() {
  const showAllOption = document.createElement('option');
  showAllOption.textContent = 'Show All';
  showAllOption.value = '';
  return showAllOption;
}

filterForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchValue = event.target.elements.searchQuery.value;
  console.log('Search Value:', searchValue);
  try {
    let options = JSON.parse(localStorage.getItem('options')) || {};
    options.keyword = searchValue;
    foodApi.searchQuery = searchValue;
    console.log('foodApi.searchQuery:', foodApi.searchQuery);
    foodApi
      .getFoodList()
      .then(function (data) {
        localStorageManager.updateLsWithList(data, options);
        const productsArray = JSON.parse(localStorage.getItem('products'));
        const arrayLength = productsArray.length;
        console.log(arrayLength);
        // createFirstFilter(productsArray);
        newDisplayPagination(options)
      })
      .catch(function (error) {
        console.error('Error fetching food list:', error.message);
      });
  } catch (error) {
    console.error('Error:', error.message);
  }
});

filterSelect.addEventListener('change', function () {
  const selectedItem = filterSelect.value;

  try {
    let options = JSON.parse(localStorage.getItem('options')) || {};
    if (selectedItem === 'show-all') {
      localStorage.removeItem('products');
      localStorageManager.defaultApiOptions();
      document.getElementById('search').value = '';
      categoriesFilter();
    } else {
      options.category = selectedItem;
      foodApi.category = selectedItem;
      foodApi
        .getFoodList()
        .then(function (data) {
          localStorageManager.updateLsWithList(data, options);
          const productsArray = JSON.parse(localStorage.getItem('products'));
          const arrayLength = productsArray.length;

          // createFirstFilter(productsArray);
          console.log(options)
          newDisplayPagination(options)
        })
        .catch(function (error) {
          console.error('Error fetching list:', error.message);
        });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
});

export function createFirstFilter(currentPage) {
  let pageProd = 1;
  const page = 1;
  const limit = 9;
  const productKey = JSON.parse(localStorage.getItem('products'));

  productsListFilter.innerHTML = '';
  let firstElOnPage;
  let limitтNumberProd;
  if (isNaN((page - 1) * limit)) {
    firstElOnPage = 0;
  } else {
    firstElOnPage = (page - 1) * limit;
  }
  limitтNumberProd = +pageProd * +limit;
  console.log(firstElOnPage);
  console.log(limitтNumberProd);
  try {
    if (productKey && currentPage >= 1) {
      let pageCounter = (currentPage - 1) * 8;
      const itemsToDisplay = productKey.slice(
        firstElOnPage + pageCounter,
        limitтNumberProd + pageCounter
      );
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = createMarkupCard(itemsToDisplay[i]);
        productsListFilter.insertAdjacentHTML('beforeend', markup);
      }
    } else if (productKey && productKey.length > 0) {
      const itemsToDisplay = productKey.slice(firstElOnPage, limitтNumberProd);
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = createMarkupCard(itemsToDisplay[i]);
        productsListFilter.insertAdjacentHTML('beforeend', markup);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
