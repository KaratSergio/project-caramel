import { getPopularProducts } from './get-api';

const popularList = document.querySelector('.popular-list');

function createMarkup(items) {
  return items
    .map(({ _id, name, img, category, popularity, size }) => {
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
        <div class="popular-card" id="${_id}">
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

getPopularProducts(5)
  .then(data => {
    popularList.insertAdjacentHTML('beforeend', createMarkup(data));

    const popularItem = document.querySelectorAll('.popular-item');

    [...popularItem].forEach(item => {
      const productAdded = item.children[1];
      productAdded.classList.add('visually-hidden');

      const btnAdd = item.children[0];
      btnAdd.addEventListener('click', handleOrder);

      function handleOrder(event) {
        alert('Product add to Order');
        btnAdd.classList.add('visually-hidden');
        productAdded.classList.remove('visually-hidden');
        btnAdd.removeEventListener('click', handleOrder);
      }

      const popularCard = item.children[2];
      popularCard.addEventListener('click', handleProductCard);

      function handleProductCard() {
        alert('This is product cart');
        popularCard.removeEventListener('click', handleProductCard);
      }
    });

    // function onF(event) {
    //   event.preventDefault();
    //   let target = event.target;
    //   // if (target.className === 'popular-card') {
    //   //   alert('This is product cart');
    //   //   console.log(target);
    //   // }

    //   if ( target.nodeName === 'LI') {
    //     console.log('pppp');
    //   }
    //   console.log(event.target);
    // }
    // popularList.addEventListener('click', onF);
  })
  .catch(error => {
    console.error(error);
  });
