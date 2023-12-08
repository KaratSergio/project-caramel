// /**
//  |============================
//  | ОТРИМАЛИ ДАННІ З СЕРВЕРУ
//  |============================
// */
// async function getProducts(pageNumber) {
//   const response = await fetch(
//     `https://food-boutique.b.goit.study/api/products?page=${pageNumber}&limit=9`
//   );
//   const data = await response.json();
//   return data.results;
// }
// // Кількість карток на сторінці
// const cardsPerPage = 9;
// import { getProductsByParams } from './get-api';
import { displayProducts } from './products'; //! імпортувала
// // Отримати контейнери для карток та пагінації
const cardsContainer = document.getElementById('cards-container');
const paginationContainer = document.getElementById('pagination');

// // Функція для відображення карток на сторінці
// async function displayCards(page) {
//   const products = await getProducts(page);

//   cardsContainer.innerHTML = '';
//   products.forEach(product => {
//     const cardElement = createCard(product);
//     cardsContainer.appendChild(cardElement);
//   });
// }

// /**
//    |============================
//    | ТИМЧАСОВА КАРТКА ПРОДУКТУ
//    |============================
//   */
// function createCard(product) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   const img = document.createElement('img');
//   img.src = product.img;
//   img.alt = product.name;

//   const name = document.createElement('p');
//   name.textContent = product.name;

//   const price = document.createElement('p');
//   price.textContent = `Price: $${product.price}`;

//   card.appendChild(img);
//   card.appendChild(name);
//   card.appendChild(price);

//   return card;
// }

/**
   |============================
   | PAGINATION NAVIGATION
   |============================
  */

// Функція для відображення пагінації
async function displayPagination(currentPage, totalPages) {
  const paginationContainer = document.getElementById('pagination'); // Додав цей рядок
  paginationContainer.innerHTML = '';

  if (totalPages > 1) {
    const MAX_VISIBLE_PAGES = 5; // Максимальна кількість видимих сторінок

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

// Обробник кліку на посилання пагінації
function onPageLinkClick(pageNumber) {
  displayProducts(pageNumber); //! змінила на імпортовану функцію
  displayPagination(pageNumber, 60); // Загальна кількість сторінок
}

// Відображення початкової сторінки
const initialPage = 1;
displayProducts(initialPage); //! змінила на імпортовану функцію
displayPagination(initialPage, 60); // Загальна кількість сторінок
