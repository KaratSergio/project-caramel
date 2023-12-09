// import sprite from './images/icons.svg';
import { createNewOrder } from './get-api';

const STORAGE_KEY = 'added-item';
let dataForm = [];

const pathSvg = document.querySelector('.js-basket-icon');
const itemCount = document.querySelector('.js-item-count');
const emptyBasket = document.querySelector('.js-empty-basket');
const filledBasket = document.querySelector('.js-filled-basket');
const itemsContainer = document.querySelector('.js-items-container');
const totalSum = document.querySelector('.total-count-text');
const checkoutForm = document.querySelector('.js-checkout-form');
const itemButton = document.querySelector('.js-item-button');
const headerCount = document.querySelector('#countProducts');

const path = pathSvg.ownerDocument.location.origin;
console.dir(path);

checkoutForm.addEventListener('submit', onOrderSubmit);
itemButton.addEventListener('click', onClick);

// addLocalStorageData();

// function addLocalStorageData() {
//   dataForm = [
//     {
//       _id: '640c2dd963a319ea671e37d4',
//       name: 'Banana',
//       img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png',
//       category: 'Fresh_Produce',
//       price: 0.69,
//       size: '1 piece',
//       is10PercentOff: true,
//       popularity: 108,
//     },
//     {
//       _id: '640c2dd963a319ea671e383b',
//       name: 'Ackee',
//       img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
//       category: 'Fresh_Produce',
//       price: 8.99,
//       size: '16 oz',
//       is10PercentOff: false,
//       popularity: 0,
//     },
//     {
//       _id: '640c2dd963a319ea671e3864',
//       name: 'Black Beans',
//       img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png',
//       category: 'Pantry_Items',
//       price: 1.99,
//       size: '16oz',
//       is10PercentOff: false,
//       popularity: 0,
//     },
//     {
//       _id: '640c2dd963a319ea671e37ad',
//       name: 'Black Olives',
//       img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png',
//       category: 'Fresh_Produce',
//       price: 3.99,
//       size: '1 jar (16 oz)',
//       is10PercentOff: false,
//       popularity: 0,
//     },
//   ];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
// }

onLoad();

function onLoad() {
  try {
    getLocalStorageData();
    countAddedItems(dataForm);
    itemsContainer.innerHTML = basketItemsMarkup(dataForm);
    totalSumCount(dataForm);
    // totalSum.textContent = `$${totalSumCount(dataForm)}`;
  } catch (error) {
    // add notifix message about something wrong
    console.log(error.message);
  }
}

function getLocalStorageData() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return;
  dataForm = JSON.parse(data);
}

function onClick(event) {
  const clickTarget = event.target.closest('button');
  if (!clickTarget) {
    return;
  }
  const itemTarget = clickTarget.attributes.class.value;

  switch (itemTarget) {
    case 'basket-clear-container':
      clearBasket();
      break;
    case 'delete-item-button':
      const itemId = idDetect(event);
      deleteSelectedItem(itemId);
      getLocalStorageData();
      itemsContainer.innerHTML = basketItemsMarkup(dataForm);
      break;
    case 'decrease-button':
      if (!true) {
      }
      counterItem(event, -1);
      break;
    case 'increase-button':
      counterItem(event, 1);
      break;
    default:
  }
}

function clearBasket() {
  dataForm = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
  countAddedItems(dataForm);
}

function countAddedItems(item) {
  itemCount.textContent = item.length;
  headerCount.textContent = `Cart (${item.length})`;
  isBasketEmpty(item.length);
}

function deleteSelectedItem(item) {
  for (let i = 0; i <= dataForm.length; i += 1) {
    const { _id: itemId } = dataForm[i];
    if (itemId === item) {
      dataForm.splice(i, 1);
      updateLocalStorageData(dataForm);
      totalSumCount(dataForm);
      return;
    }
  }
}

function idDetect(event) {
  const parentItem = event.target.closest('li');
  return parentItem.dataset.id;
}

function counterItem(event, increment) {
  try {
    const itemId = idDetect(event);
    const parentItem = event.target.closest('div');
    let item = Number(parentItem.children.counter.textContent) + increment;
    parentItem.children.counter.textContent = item;
    updateItemCount(itemId, item);
    totalSumCount(dataForm);
    // totalSum.textContent = `$${totalSumCount(dataForm)}`;
    if (item <= 1) {
      lockDecrese(parentItem);
      return;
    }
    unlockDecrese(parentItem);
  } catch (error) {
    // add notifix message about something wrong
    console.log(error.message);
  }
}

function lockDecrese(parentItem) {
  parentItem.children.decrease.children[0].classList.add('hide');
  parentItem.children.decrease.disabled = true;
}

function unlockDecrese(parentItem) {
  parentItem.children.decrease.children[0].classList.remove('hide');
  parentItem.children.decrease.disabled = false;
}

function updateItemCount(item, count) {
  for (let i = 0; i <= dataForm.length; i += 1) {
    const { _id: itemId } = dataForm[i];
    if (itemId === item) {
      dataForm[i].count = count;
      updateLocalStorageData(dataForm);
      return;
    }
  }
}

function updateLocalStorageData(dataForm) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
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
  return array
    .map(
      ({
        _id: id,
        name,
        img,
        category,
        size,
        is10PercentOff,
        price,
        count = 1,
      }) =>
        `
        <li class="item-container" data-id="${id}">
          <div class="item-img-link">
            <img class="item-img" src="${img}" alt="${name}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${name}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${path}/images/icons.svg#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${category}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${size}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${price}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="${path}/images/icons.svg#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${count}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${path}/images/icons.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `
    )
    .join('');
}

function totalSumCount(array) {
  let totalPrice = 0;
  array.forEach(({ price, count = 1 }) => {
    totalPrice += price * count;
  });
  totalSum.textContent = `$${totalPrice.toFixed(2)}`;
}

//  Email validation
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('.email-input');

async function onOrderSubmit(event) {
  try {
    event.preventDefault();
    const email = event.target.elements.email.value;
    if (!isEmailValid(email)) {
      throw new Error(`Your E-mail is not valid`);
    }

    let order = [];
    // if count abcent than 1
    dataForm.forEach(({ _id: productId, count: amount = 1 }) => {
      order.push({ productId, amount });
    });
    const apiResponse = await createNewOrder(email, order);

    // add modal message about success
    success(apiResponse);
  } catch (error) {
    // add modal message about something wrong
    onError();
  }
}
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function success(response) {
  clearBasket();
  checkoutForm.reset();

  console.log(response);
}
function onError(response) {
  console.log(response);
}

// const BASE_URL = 'https://food-boutique.b.goit.study/api/';
// axios.defaults.baseURL = BASE_URL;
