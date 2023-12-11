import Pagination from 'tui-pagination';
import { saveData, displayProducts } from './products';
import {getProductsByParams} from './get-api';

const paginationContainer = document.querySelector('#pagination');
const productsList = document.querySelector('.list-prod-container');



newDisplayPagination("first", "get")

export async function newDisplayPagination(options) {

  const { keyword, category } = options

  const paginationSearchParams = {
    keyword: keyword || '',
    category: category || '',
    page: 1,
    limit: 9,
  }

  if (window.matchMedia("(max-width: 375px)").matches) {
    paginationSearchParams.limit = 6
  } else if (window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches) {
    paginationSearchParams.limit = 8
  }
  const {results, totalPages} = await getProductsByParams(paginationSearchParams)

  if (totalPages === 0) {
    productsList.innerHTML =
    `<div class="basket-text-container">
    <p class="basket-text-bold">
      Nothing was found for the selected <span class="color">filters...</span>
    </p>
    <p class="basket-text">
      Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`
  }

  saveData('firstGet', results);

  displayProducts(results)

  if (totalPages > 1) {
    const options = {
      totalItems: results.length * totalPages,
      itemsPerPage: paginationSearchParams.limit,
      visiblePages: 5,
      centerAlign: true,
      usageStatistics: false
    };

    const pagination = new Pagination(paginationContainer, options);

    pagination.on('afterMove', async (e) => {
      paginationSearchParams.page = e.page;
      const {results} = await getProductsByParams(paginationSearchParams)
      displayProducts(results)
    });
  }
  return
}