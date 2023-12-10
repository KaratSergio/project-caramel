import { getPopularProducts, getProductById } from './get-api';
import { openModal } from './modal-product';
import sprite from '../images/icons.svg';

//import { Notify } from 'notiflix';
//import Notiflix from 'notiflix';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const options = {
//   timeout: 1000,
//   position: 'center-center',
//   width: '400px',
//   fontSize: '24px',
// };

const popularList = document.querySelector('.popular-list');

const STORAGE_KEY = 'added-itemX';

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getData() {
  try {
    const result = localStorage.getItem(STORAGE_KEY);
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.log(error);
  }
}

getPopularProducts(5)
  .then(data => {
    popularList.insertAdjacentHTML('beforeend', createMarkup(data));

    function onClick(event) {
      let target = event.target;
      if (target.closest('.popular-card')) {
        const popularCard = target.closest('.popular-card');
        const popularProductId = popularCard.getAttribute('data-js-product-id');
        getProductById(popularProductId)
          .then(res => {
            openModal(res);
          })
          .catch(error => {
            console.error(error);
          });
      } else if (target.closest('.btn-add')) {
        const elem = target.closest('.btn-add').nextElementSibling;
        const btnProductId = elem.getAttribute('data-js-product-id');
        const selectedProduct = productSelected(btnProductId, data);
        const listProducts = getData();
        const productAdded = listProducts.find(
          item => item._id === selectedProduct._id
        );
        if (!productAdded) {
          listProducts.push(selectedProduct);
          saveData(listProducts);
          //Notify.success('Product add to Order', options);
        }

        //Notify.info('Product also added to Order', options);
        target.closest('.btn-add').classList.add('visually-hidden');
      }
    }

    popularList.addEventListener('click', onClick);
  })
  .catch(error => {
    console.error(error);
  });

function productSelected(val, data) {
  const selectedProduct = data.find(product => product._id.toString() === val);
  return selectedProduct;
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
        // додав строку 15  та ретерн на 17
        const firstDigit = parseInt(popularity.toString()[0]);
        const newName = truncate(name, 14);

        return `  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${sprite}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${sprite}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${_id}>
          <div class="popular-box-img">
            <img src="${img}" alt="${name}" loading="lazy"  width="56" />
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
