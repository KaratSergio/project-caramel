import { getPopularProducts, getProductById } from './get-api';
import { getData, saveData } from './STORAGE';
import { openModal } from './modal-product';
import sprite from '../images/icons.svg';

const popularList = document.querySelector('.popular-list');

getPopularProducts(5)
  .then(data => {
    popularList.insertAdjacentHTML('beforeend', createMarkup(data));

    const productAdded = document.getElementsByClassName('product-added');

    [...productAdded].forEach(elem => {
      const idBtn = elem.getAttribute('data-js-btn');
      const selIdBtn = productSelected(idBtn, data);
      if (checkLocalStorage(selIdBtn._id)) {
        elem.nextElementSibling.classList.add('visually-hidden');
      }
    });

    function onClick(event) {
      let target = event.target;

      if (target.closest('.popular-card')) {
        const popularCard = target.closest('.popular-card');
        const popularProductId = popularCard.getAttribute('data-js-product-id');

        onSHowModal(popularProductId);
      } else if (target.closest('.btn-add')) {
        const elemAdded = target.closest('.btn-add').previousElementSibling;
        const btnProductId = elemAdded.getAttribute('data-js-btn');
        const selectedProduct = productSelected(btnProductId, data);
        const listProducts = getData();
        if (!checkLocalStorage(selectedProduct._id)) {
          listProducts.push(selectedProduct);
          saveData(listProducts);
        }
        target.closest('.btn-add').classList.add('visually-hidden');
        elemAdded.classList.remove('visually-hidden');
      } else if (target.closest('.product-added')) {
        const idBtnLS = target
          .closest('.product-added')
          .getAttribute('data-js-btn');
        const selIdBtnLS = productSelected(idBtnLS, data);
        const products = getData();
        const productAdded = checkLocalStorage(selIdBtnLS._id);
        saveData(products.filter(product => productAdded._id !== product._id));
        target.closest('.product-added').classList.add('visually-hidden');
        target
          .closest('.product-added')
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
  const listProducts = getData();
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
        // додав строку 15  та ретерн на 17
        const firstDigit = parseInt(popularity.toString()[0]);
        const newName = truncate(name, 14);

        return `  <li class="popular-item">
            <span class="product-added" data-js-btn=${_id}>
        <svg class="svg-added" width="12" height="12">
          <use href="${sprite}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button" >
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
