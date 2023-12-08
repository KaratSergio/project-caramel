// import { getProductsByParams, getProductsCategories } from './get-api';
// import { createCardMarkup } from './products';

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

//   const products = await getProductsByParams(storedData);

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

// const categories = await getProductsCategories();

// let showAllOption = document.createElement('option');
// showAllOption.innerHTML = 'Show all';
// filterSelect.appendChild(showAllOption);

// categories.forEach(category => {
//   const option = document.createElement('option');
//   option.value = category.value;
//   option.text = category.label;
//   filterSelect.appendChild(option);
// });

// filterSelect.addEventListener('change', async function () {
//   updateLocalStorage({
//     ...getLocalStorage(),
//     category: this.value === 'Show all' ? null : this.value,
//     page: 1,
//   });

//   const storedData = getLocalStorage();

//   const products = await getProductsByParams(storedData);

//   productsListFilter.innerHTML = createCardMarkup(products);
// });

// const initialData = getLocalStorage();
// const initialProducts = await getProductsByParams(initialData);

// productsListFilter.innerHTML = createCardMarkup(initialProducts);
