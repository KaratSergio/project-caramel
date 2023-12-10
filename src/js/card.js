import sprite from '../images/icons.svg';
import { createNewOrder } from './get-api';

const STORAGE_KEY = 'added-item';
let dataForm = [];
let hiddenElements = [];

const itemCount = document.querySelector('.js-item-count');
const emptyBasket = document.querySelector('.js-empty-basket');
const filledBasket = document.querySelector('.js-filled-basket');
const itemsContainer = document.querySelector('.js-items-container');
const totalSum = document.querySelector('.total-count-text');
const checkoutForm = document.querySelector('.js-checkout-form');
const itemButton = document.querySelector('.js-item-button');
const headerCount = document.querySelector('#countProducts');
const modalInfo = {};

checkoutForm.addEventListener('submit', onOrderSubmit);
itemButton.addEventListener('click', onClick);

onLoad();

function onLoad() {
  try {
    changeCategory();
    countAddedItems(dataForm);
    checkLoadCount();
    itemsContainer.innerHTML = basketItemsMarkup(dataForm, hiddenElements);

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

function checkLoadCount() {
  hiddenElements = [];
  dataForm.forEach(element => {
    if (element.count < 2  || element.count === undefined ) {
      hiddenElements.push({ hide: 'hide', disabled: 'disabled' });
    } else {
      hiddenElements.push({ hide: '', disabled: '' });
    }
  });
  console.log(hiddenElements);
}

// ------- Created Category without "_"

export function changeCategory() {
  getLocalStorageData();
  dataForm.forEach(element => {
    element.category = element.category.split('_').join(' ');
    updateLocalStorageData(dataForm);
  });
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
      itemsContainer.innerHTML = basketItemsMarkup(dataForm, hiddenElements);
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
function deleteSelectedItem(item) {
  for (let i = 0; i <= dataForm.length; i += 1) {
    const { _id: itemId } = dataForm[i];
    if (itemId === item) {
      dataForm.splice(i, 1);
      updateLocalStorageData(dataForm);
      countAddedItems(dataForm);
      totalSumCount(dataForm);
      return;
    }
  }
}

function countAddedItems(item) {
  itemCount.textContent = item.length;
  headerCount.textContent = `Cart (${item.length})`;
  isBasketEmpty(item.length);
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

function basketItemsMarkup(array, hiddenArr) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].hide = hiddenArr[i].hide;
    array[i].disabled = hiddenArr[i].disabled;
  }
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
        hide = '',
        disabled = '',
      }) =>
        `<li class="item-container" data-id="${id}">
          <div class="item-img-link">
            <img class="item-img" src="${img}" alt="${name}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${name}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${sprite}#delete-icon"></use>
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
                <button class="decrease-button" ${disabled} name="decrease" type="button">
                  <svg class="decrease-icon ${hide}" width="18" height="18">
                    <use href="${sprite}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${count}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${sprite}#plus"></use>
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

async function onOrderSubmit(event) {
  try {
    event.preventDefault();
    const email = event.target.elements.email.value;
    console.log(isEmailValid(email));
    if (!isEmailValid(email)) {
      console.dir(email);
      throw new Error(`Your E-mail is not valid`);
    }
    let order = [];
    dataForm.forEach(({ _id: productId, count: amount = 1 }) => {
      order.push({ productId, amount });
    });
    const apiResponse = await createNewOrder(email, order);
    success(apiResponse);
  } catch (error) {
    onError(error);
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
// ------- order to Modal window

function success(response) {
  console.dir(modalInfo);
  modalInfo.message = response.message;
  modalInfo.title = 'Order success';
  modalInfo.image = './images/success_order.png';
  createModalMarkup(modalInfo);
  openModalWindow();
  resetCart();
}

function onError(response) {
  modalInfo.message = response.message;
  modalInfo.title = 'Something went wrong';
  modalInfo.image = './images/error.png';
  createModalMarkup(modalInfo);
  openModalWindow();
}

// ------- Modal window

function createModalMarkup(event) {
  modalWindow.innerHTML = `<img class="modal-img" src="${event.image}" alt="${event.title}">
      <div class="modal-title-message">${event.title}</div>
      <div class="modal-text">${event.message}</div>`;
}

const openModalBtn = document.querySelector('[js-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const modalWindow = document.querySelector('#js-modal-info');
const backdrop = document.querySelector('.backdrop');

function openModalWindow() {
  try {
    openModalBtn.addEventListener('click', toggleModal);
    backdrop.addEventListener('click', toggleModal);
    document.addEventListener('keydown', escClick);
    closeModalBtn.addEventListener('click', toggleModal);
  } catch (error) {
    onError(error);
  }
}
function toggleModal() {
  document.removeEventListener('keydown', escClick);
  backdrop.removeEventListener('click', toggleModal);
  modal.classList.toggle('is-hidden');
  modalWindow.innerHTML = '';
}
function escClick(event) {
  if (event.code === 'Escape') {
    backdrop.removeEventListener('click', toggleModal);
    document.removeEventListener('keydown', escClick);
    modal.classList.toggle('is-hidden');
    modalWindow.innerHTML = '';
  }
}
function resetCart() {
  clearBasket();
  checkoutForm.reset();
}

openModalWindow(modalInfo);
