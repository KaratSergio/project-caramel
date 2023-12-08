import axios from 'axios';
// import { createNewOrder } from './get-api';


const STORAGE_KEY = 'added-item';
let dataForm = [];

const itemCount = document.querySelector('.js-item-count');
const emptyBasket = document.querySelector('.js-empty-basket');
const filledBasket = document.querySelector('.js-filled-basket');
const itemsContainer = document.querySelector('.js-items-container');
const totalSum = document.querySelector('.total-count-text');
const checkoutForm = document.querySelector('.checkout-form');

checkoutForm.addEventListener('submit', onSubmit);

addLocalStorageData();

function addLocalStorageData() {
  dataForm = [
    {
      _id: '640c2dd963a319ea671e37d4',
      name: 'Banana',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png',
      category: 'Fresh_Produce',
      price: 0.69,
      size: '1 piece',
      is10PercentOff: true,
      popularity: 108,
    },
    {
      _id: '640c2dd963a319ea671e383b',
      name: 'Ackee',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
      category: 'Fresh_Produce',
      price: 8.99,
      size: '16 oz',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e3864',
      name: 'Black Beans',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png',
      category: 'Pantry_Items',
      price: 1.99,
      size: '16oz',
      is10PercentOff: false,
      popularity: 0,
    },
    {
      _id: '640c2dd963a319ea671e37ad',
      name: 'Black Olives',
      img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png',
      category: 'Fresh_Produce',
      price: 3.99,
      size: '1 jar (16 oz)',
      is10PercentOff: false,
      popularity: 0,
    },
  ];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

onLoad();

function onLoad() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    dataForm = JSON.parse(data);
    const basketItemAdded = dataForm.length;
    itemCount.textContent = basketItemAdded;
    isBasketEmpty(basketItemAdded);
    itemsContainer.innerHTML = basketItemsMarkup(dataForm);
    totalSum.textContent = `$${totalSumCount(dataForm)}`;
  } catch (error) {
    // add notifix message about something wrong
    console.log(error.message);
  }
}

function isBasketEmpty(itemAdded) {
  if (itemAdded === 0) {
    emptyBasket.classList.remove('hide');
    filledBasket.classList.add('hide');
    return;
  } else {
    emptyBasket.classList.add('hide');
    filledBasket.classList.remove('hide');
  }
}

function basketItemsMarkup(array) {
  console.log(array);
  return array
    .map(
      ({ _id: id, name, img, category, size, is10PercentOff, price }) =>
        `<li class="item-container" data-id="${id}">
          <a class="item-img-link" href="">
            <img class="item-img" src="${img}" alt="${name}" loading="lazy"/>
          </a>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${name}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="./images/icons1.svg#delete-icon"></use>
                  <!-- <use href="./images/icons.svg#delete-icon"></use> -->
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${category}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${size}</li>
            </ul>
            <p class="item-price">$${price}</p>
          </div>
        </li>`
    )
    .join('');
}

function totalSumCount(array) {
  let totalPrice = 0;
  let count = 1;
  array.forEach(({ price }) => {
    totalPrice += price * count;
  });
  return totalPrice;
}

async function onSubmit(event) {
  try {
    event.preventDefault();
    const email = event.target.elements.email.value;
    let order = [];
    // if count abcent than 1
    dataForm.forEach(({ _id: productId, amount  = 1 }) => {
      order.push({ productId, amount });
    });
    const apiResponse = await createNewOrder(email, order);
    console.log(apiResponse);
  } catch (error) {
    // add notifix message about something wrong
    console.log(error.message);
  }
}

const BASE_URL = 'https://food-boutique.b.goit.study/api/';
axios.defaults.baseURL = BASE_URL;

async function createNewOrder(email, products) {
  return await axios
    .post(`${BASE_URL}orders`, {
      email,
      products
    })
    .then(response => response.data);
}


