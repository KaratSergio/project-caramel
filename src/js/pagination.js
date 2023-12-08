import Pagination from 'tui-pagination';
import { getProductsByParams } from './get-api';
import {createCardMarkup, addMarkup} from './products';
const paginationContainer = document.querySelector('#tui-pagination-container');
const productsList = document.querySelector('.list-prod');

const defaultParameters = {
  keyword: '',
  category: '',
  page: 1,
  limit: 9,
};

getProductsByParams(defaultParameters).then(({results, totalPages}) => {
  displayPagination(results, totalPages)
})


function displayPagination(results, totalPages) {
  const options = {
    totalItems: results.length * totalPages,
    itemsPerPage: 9,
    visiblePages: 3,
    page: defaultParameters.page,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };
  
  const pagination = new Pagination(paginationContainer, options);
  pagination.on('afterMove', (e) => {
    defaultParameters.page = e.page;
    getProductsByParams(defaultParameters).then(({results}) => {
      const markup = createCardMarkup(results)
      addMarkup(productsList, markup)
    })
});
}