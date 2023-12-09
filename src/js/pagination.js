import Pagination from 'tui-pagination';
import { displayProducts } from './products';
import {getProductsByParams} from './get-api'; //видалити

const paginationContainer = document.querySelector('#pagination');

const paginationParameters = {
  keyword: '',
  category: '',
  page: 1,
  limit: 9,
};

getProductsByParams(paginationParameters).then((({results, totalPages}) => {  //видалити
  displayPagination(results, totalPages)
}))


export function displayPagination(results, totalPages) {
  if (totalPages > 1) {
    let currentPage = 1
    
    const options = {
    totalItems: results.length * totalPages,
    itemsPerPage: 9,
    visiblePages: 3,
    centerAlign: true,
    usageStatistics: false
  };
  
  const pagination = new Pagination(paginationContainer, options);
  pagination.on('afterMove', (e) => {
    currentPage = e.page;
    displayProducts(e.page)
});
  }
  return
}