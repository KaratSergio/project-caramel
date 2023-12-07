import axios from 'axios';

const popularList = document.querySelector('.popular-list');

async function servicePopularProducts() {
  const URL = 'https://food-boutique.b.goit.study/api/products/popular';
  const response = await axios.get(`${URL}`);
  return response.data;
}

function createMarkup(items) {
  return items
    .map(({ _id, name, img, category, popularity, size }) => {
      // додав строку 15  та ретерн на 17 
      const firstDigit = parseInt(popularity.toString()[0]);

      return `  <li class="popular-item">
        <button class="btn-add" type="submit">svg</button>
        <span class="product-added" >OK</span>
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

servicePopularProducts()
  .then(data => {
    popularList.insertAdjacentHTML('beforeend', createMarkup(data));

    const refs = {
      btnAdd: document.querySelector('.btn-add'),
      productAdded: document.querySelector('.product-added'),
      popularCard: document.querySelector('.popular-card'),
    };

    refs.btnAdd.addEventListener('click', handleOrder);

    refs.popularCard.addEventListener('click', handleProductCard);

    refs.productAdded.classList.remove('product-added');
    refs.productAdded.classList.add('is-hidden');

    function handleOrder() {
      refs.btnAdd.classList.add('is-hidden');
      refs.productAdded.classList.add('product-added');
      refs.productAdded.classList.remove('is-hidden');
      alert('Product add to Order');
    }
  })
  .catch(error => {
    console.error(error);
  });

function handleProductCard() {
  alert('Thi is product cart');
}
