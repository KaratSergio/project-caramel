import Pagination from 'tui-pagination';
import axios from 'axios';
import { getProductsByParams } from './get-api';
import { createCardMarkup } from './products';

const paginationContainer = document.querySelector('#tui-pagination-container');

let page = 1;

async function fetchDataAndDisplayPage(page) {
  try {
    const { totalPages, results } = await getProductsByParams(page);
    const BASE_URL = 'https://food-boutique.b.goit.study/api/';
    const productsList = document.querySelector('.list-prod');

    function addMarkup(el, markup) {
      el.innerHTML = markup;
    }

    function displayPagination(results, totalPages) {
      const options = {
        totalItems: results.length * totalPages,
        itemsPerPage: 9,
        visiblePages: 3,
        page: page,
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
            '</a>',
        },
      };

      const pagination = new Pagination(paginationContainer, options);
      pagination.on('afterMove', async (e) => {
        page = e.page;
        const { results: newResults } = await getProducts(page);
        const newMarkup = createCardMarkup(newResults);
        addMarkup(productsList, newMarkup);
      });
    }

    displayPagination(results, totalPages);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAndDisplayPage(page);

