// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { displayProducts } from './products';

// const itemsPerPage = 9;  
// let totalItems = 540; //! Загальна кількість елементів  540 : 9 = 60 сторінок
// let currentPage = 1;

// const paginationContainer = document.getElementById('pagination');

// // Ініціалізація екземпляру пагінації
// const pagination = new Pagination(paginationContainer, {
//   totalItems,
//   itemsPerPage,
//   visiblePages: 5, 
//   centerAlign: true,
// });

// pagination.on('beforeMove', (event) => {
//   currentPage = event.page;
//   updatePage(currentPage);
// });

// async function updatePage(pageNumber) {
//   displayProducts(pageNumber);
// }

// updatePage(currentPage);



//! Варіант 2 
import { displayProducts } from './products'; //! імпортувала

const paginationContainer = document.getElementById('pagination');

// Функція для відображення пагінації
async function displayPagination(currentPage, totalPages) {
  const paginationContainer = document.getElementById('pagination'); 
  paginationContainer.innerHTML = '';

  if (totalPages > 1) {
    const MAX_VISIBLE_PAGES = 5; 

    // Додаємо посилання для поточної та сусідніх сторінок
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i += 1
    ) {
      appendPageLink(i, i === currentPage);
    }

    // Додаємо "..."
    if (totalPages - currentPage > MAX_VISIBLE_PAGES - 2) {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '. . .';
      paginationContainer.appendChild(ellipsis);
    }

    // Додаємо посилання на останні дві сторінки
    for (
      let i = Math.max(
        totalPages - MAX_VISIBLE_PAGES + 4
        // totalPages - MAX_VISIBLE_PAGES + 1
      );
      i <= totalPages;
      i += 1
    ) {
      appendPageLink(i);
    }
  }
}

// Функція для додавання посилання на сторінку до пагінації
function appendPageLink(pageNumber, isActive = false) {
  const paginationContainer = document.getElementById('pagination'); // Додав цей рядок
  const li = document.createElement('li');
  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('pagination-link');
  const link = document.createElement('a');
  link.href = `javascript:void(0);`;
  link.textContent = pageNumber;

  if (isActive) {
    linkWrapper.classList.add('active');
  }

  link.addEventListener('click', () => onPageLinkClick(pageNumber));
  linkWrapper.appendChild(link);
  li.appendChild(linkWrapper);
  paginationContainer.appendChild(li);
}


function onPageLinkClick(pageNumber) {
  displayProducts(pageNumber); //! змінила на імпортовану функцію
  displayPagination(pageNumber, 60); // Загальна кількість сторінок
}

// Відображення початкової сторінки
const initialPage = 1;
displayProducts(initialPage); //! змінила на імпортовану функцію
displayPagination(initialPage, 60); // Загальна кількість сторінок