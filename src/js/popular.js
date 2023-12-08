import { getPopularProducts } from './get-api';
import { openModal } from './modal-product';

const popularList = document.querySelector('.popular-list');

getPopularProducts(5)
  .then(data => {
    popularList.insertAdjacentHTML('beforeend', createMarkup(data));

    function onClick(event) {
      let target = event.target;

      if (target.closest('.popular-card')) {
        const popularCard = target.closest('.popular-card');
        const popularProductId = popularCard.getAttribute('data-js-product-id');
        const selectedProduct = data.find(
          product => product._id.toString() === popularProductId
        );
        openModal(selectedProduct);
      } else if (target.closest('.btn-add')) {
        target.closest('.btn-add').classList.add('visually-hidden');
        alert('Product add to Order');
      }
    }

    popularList.addEventListener('click', onClick);
  })
  .catch(error => {
    console.error(error);
  });

function createMarkup(items) {
  return items
    .map(({ _id, name, img, category, popularity, size, price }) => {
      // додав строку 15  та ретерн на 17
      const firstDigit = parseInt(popularity.toString()[0]);

      return `  <li class="popular-item">
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
      </button>
      <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="./images/icons.svg#check"></use>
        </svg>
      </span>
        <div class="popular-card" data-js-product-id=${_id}>
          <div class="popular-box-img">
            <img src="${img}" alt="${name}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${name}</h3>
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
    })
    .join('');
}
