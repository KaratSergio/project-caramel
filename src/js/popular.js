import { getPopularProducts, getProductById } from './get-api';
import { getData, saveData, countAddedItems, STORAGE_KEY, changeOtherIcon } from './STORAGE';
import { openModal } from './modal-product';
import sprite from '../images/icons.svg';

const popularList = document.querySelector('.popular-product-list');
//const STORAGE_KEY = 'added-item';

let counter = 5;
if (window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches) {
  counter = 6;
}
  getPopularProducts(counter)
    .then(data => {
      popularList.insertAdjacentHTML('beforeend', createMarkup(data));

      const productAdded = document.getElementsByClassName(
        'button-remove-product'
      );

      [...productAdded].forEach(elem => {
        const idBtn = elem.getAttribute('data-js-button');
        const selIdBtn = productSelected(idBtn, data);

        if (checkLocalStorage(selIdBtn._id)) {
          elem.nextElementSibling.classList.add('visually-hidden');
        }
      });

      function onClick(event) {
        let target = event.target;

        if (target.closest('.popular-card')) {
          const popularCard = target.closest('.popular-card');
          const popularProductId =
            popularCard.getAttribute('data-js-product-id');

          onSHowModal(popularProductId);
        } else if (target.closest('.button-add-product')) {
          const elemAdded = target.closest(
            '.button-add-product'
          ).previousElementSibling;
          const btnProductId = elemAdded.getAttribute('data-js-button');
          const selectedProduct = productSelected(btnProductId, data);
          const listProducts = getData(STORAGE_KEY);
          if (!checkLocalStorage(selectedProduct._id)) {
            listProducts.push(selectedProduct);
            saveData(STORAGE_KEY, listProducts);
            countAddedItems();
            changeOtherIcon(selectedProduct._id, 0);
          }
          target
            .closest('.button-add-product')
            .classList.add('visually-hidden');
          elemAdded.classList.remove('visually-hidden');
        } else if (target.closest('.button-remove-product')) {
          const idBtnLS = target
            .closest('.button-remove-product')
            .getAttribute('data-js-button');
          const selIdBtnLS = productSelected(idBtnLS, data);
          const products = getData(STORAGE_KEY);
          const productAdded = checkLocalStorage(selIdBtnLS._id);
          saveData(
            STORAGE_KEY,
            products.filter(product => productAdded._id !== product._id)
          );
          countAddedItems();
          changeOtherIcon(selIdBtnLS._id, -1);
          target
            .closest('.button-remove-product')
            .classList.add('visually-hidden');
          target
            .closest('.button-remove-product')
            .nextElementSibling.classList.remove('visually-hidden');
        }
      }

      popularList.addEventListener('click', onClick);
    })
    .catch(error => {
      console.error(error);
    });

function onSHowModal(dataId) {
  getProductById(dataId)
    .then(res => {
      openModal(res);
    })
    .catch(error => {
      console.error(error);
    });
}

function productSelected(val, data) {
  const selectedProduct = data.find(product => product._id.toString() === val);
  return selectedProduct;
}

function checkLocalStorage(id) {
  const listProducts = getData(STORAGE_KEY);
  
  return listProducts.find(item => item._id === id);
}

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}

function createMarkup(items) {
  return items
    .map(
      ({
        _id,
        name,
        img,
        category,
        popularity,
        size,
        price,
        is10PercentOff,
      }) => {
        const firstDigit = parseInt(popularity.toString()[0]);
        const newName = truncate(name, 14);

        return `  <li class="popular-item">

            <button class="button-remove-product" data-js-button=${_id} type="button" aria-label="Delete" >

        <svg class="svg-remove-product" width="12" height="12">
          <use href="${sprite}#check"></use>
        </svg>
      </button>

      <button class="button-add-product" data-js-button=${_id} type="button" aria-label="Add" >

        <svg class="svg-add-product" width="12" height="12">
          <use href="${sprite}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${_id}>
          <div class="popular-box-img">
            <img src="${img}" alt="${name}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${newName}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${category.replace(
              '_',
              ' '
            )}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${size}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${firstDigit}</span></p>
            </div>
          </div>
        </div>
      </li>`;
      }
    )
    .join('');
}
