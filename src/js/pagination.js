import Pagination from 'tui-pagination';
import { displayProducts } from './products';
import { getProductsByParams } from './get-api';
import { saveData } from './STORAGE';

const paginationContainer = document.querySelector('#pagination');
const productsList = document.querySelector('.list-prod-container');
const filterNomatches = document.querySelector('.filter-nomatches-container');
const FIRST_SET = 'firstset';

newDisplayPagination('first', 'get');

export async function newDisplayPagination(options) {
  const { keyword, category } = options;

  const paginationSearchParams = {
    keyword: keyword || '',
    category: category || '',
    page: 1,
    limit: 9,
  };

  if (window.matchMedia('(max-width: 479px)').matches) {
    paginationSearchParams.limit = 6;
  } else if (
    window.matchMedia('(min-width: 480px) and (max-width: 900px)').matches
  ) {
    paginationSearchParams.limit = 8;
  }
  const { results, totalPages } = await getProductsByParams(
    paginationSearchParams
  );

  if (totalPages === 0) {
    productsList.classList.add('visually-hidden');
    filterNomatches.classList.remove('visually-hidden');
    paginationContainer.classList.add('visually-hidden');
  } else {
    productsList.classList.remove('visually-hidden');
    filterNomatches.classList.add('visually-hidden');
    paginationContainer.classList.remove('visually-hidden');
  }

  saveData(FIRST_SET, results);

  displayProducts(results);

  if (totalPages) {
    let points = 1;
    if (totalPages > 1) {
      points = 5;
    }

    if (window.matchMedia('(max-width: 480px)').matches) {
      points = 3;
    }
    const options = {
      totalItems: results.length * totalPages,
      itemsPerPage: paginationSearchParams.limit,
      visiblePages: points,
      page: 1,
      centerAlign: true,
      usageStatistics: false,

      template: {
        moveButton:
          '<a href="#" class="tui-page-btn need-hide tui-{{type}}">' +
          `<span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span>` +
          '</a>',
        moreButton:
          '<span  class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</span>',
      },
    };
    const pagination = new Pagination(paginationContainer, options);


    pagination.on('afterMove', async e => {
      paginationSearchParams.page = e.page;
      const { results } = await getProductsByParams(paginationSearchParams);
      saveData(FIRST_SET, results);
      displayProducts(results);
    });

    const firstPage = document.querySelector('.for-add-text-first');
    const lastPage = document.querySelector('.for-add-text-last');
    if (firstPage) {
      const firstPage = document.querySelector('.for-add-text-first');
      firstPage.textContent = 1;
    }
    if (lastPage) {
      const lastPage = document.querySelector('.for-add-text-last');
      lastPage.textContent = totalPages
    }
    if (totalPages === 1) {
      paginationContainer.classList.add('visually-hidden');
    } else {
      paginationContainer.classList.remove('visually-hidden');
      }
  }
  return;
}
