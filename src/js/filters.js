import { getProductsCategories } from './get-api';
import { newDisplayPagination } from './pagination';
import axios from 'axios';

class FoodApi {
  constructor() {
    this.URL = `https://food-boutique.b.goit.study/api`;
    this.searchQuery = '';
    this.category = '';
    this.currentPage = 1;
    this.perPage = 6;
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
  updateLsWithList(data) {
    const defaultOptions = {
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    };
    localStorage.setItem('products', JSON.stringify(data.results));
    localStorage.setItem('options', JSON.stringify(defaultOptions));
  }

  clearLocalStorage() {
    localStorage.reset('products');
    localStorage.reset('options');
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

const filterForm = document.querySelector('.filter-form');
const filterSelect = document.querySelector('.filter-select');
const filterSearch = document.querySelector('filter-search');

const foodApi = new FoodApi();
const localStorageManager = new LocalStorage();

getProductsCategories().then(categories => {
  categories.forEach(category => {
    const option = document.createElement('option');

    option.value = category;
    option.textContent = category.split('_').join(' ');
    filterSelect.append(option);
  });

  const showAllOption = createShowAll();
  filterSelect.append(showAllOption);
});

export function createShowAll() {
  const showAllOption = document.createElement('option');
  showAllOption.textContent = 'Show All';
  showAllOption.value = '';
  return showAllOption;
}

filterForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let searchValue = event.target.elements.searchQuery.value.trim();

  try {
    let options = JSON.parse(localStorage.getItem('options')) || {};

    if (searchValue === '') {
      options.keyword = null;
      localStorageManager.clearLocalStorage();
      localStorageManager.defaultApiOptions();
    } else {
      options.keyword = searchValue;

      foodApi
        .getFoodList(options)
        .then(function (data) {
          localStorageManager.updateLsWithList(data, options);
          newDisplayPagination(options);
        })
        .catch(function (error) {
          console.error('Error fetching food list:', error.message);
        });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
  filterForm.reset();
});

filterSelect.addEventListener('change', function () {
  const selectedItem = filterSelect.value;

  try {
    let options = JSON.parse(localStorage.getItem('options')) || {};
    if (selectedItem === 'show-all') {
      localStorage.removeItem('products');
      localStorageManager.defaultApiOptions();
    } else {
      options.category = selectedItem;
      foodApi.category = selectedItem;
      foodApi
        .getFoodList()
        .then(function (data) {
          localStorageManager.updateLsWithList(data, options);

          newDisplayPagination(options);
        })
        .catch(function (error) {
          console.error('Error fetching list:', error.message);
        });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
});
