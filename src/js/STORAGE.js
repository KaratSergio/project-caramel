export const STORAGE_KEY = 'added-item';
export const FIRST_SET_KEY = 'firstset';

countAddedItems();

export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getData(key) {
  try {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.log(error);
  }
}

export function countAddedItems() {
  const headerCount = document.querySelector('#countProducts');
  const itemArr = getData(STORAGE_KEY);
  headerCount.textContent = `Cart (${itemArr.length})`;
}

export function checkAdded(array, product) {
  const item = array.findIndex(({ _id }) => _id === product._id);
  return item;
}

export function manageButton(item, added, removed) {
  if (item !== -1) {
    removed.classList.remove('visually-hidden');
    added.classList.add('visually-hidden');
  } else {
    added.classList.remove('visually-hidden');
    removed.classList.add('visually-hidden');
  }
}

export function changeIcon(elt, added, itemClass) {
  if (elt !== -1) {
    added[1].classList.add(itemClass);
    added[0].classList.remove(itemClass);
  } else {
    added[1].classList.remove(itemClass);
    added[0].classList.add(itemClass);
  }
}

export function changeOtherIcon(id, element) {
  const productCartBtn = document.querySelectorAll(
    "svg[data-js-product='" + id + "']"
  );
  const popularCartBtn = document.querySelectorAll(
    "button[data-js-button='" + id + "']"
  );
  const discontCartBtn = document.querySelectorAll(
    "svg[data-js-discont='" + id + "']"
  );

  if (popularCartBtn.length !== 0) {
    changeIcon(element, popularCartBtn, 'visually-hidden');
  }
  if (discontCartBtn.length !== 0) {
    changeIcon(element, discontCartBtn, 'is-hidden');
  }
  if (productCartBtn.length !== 0) {
    changeIcon(element, productCartBtn, 'is-hidden');
  }
  countAddedItems();
}

export function recheckCart(item) {
  saveData(STORAGE_KEY, listProducts);
  countAddedItems();
  item = checkAdded(listProducts, product);
  manageButton(item, addToCartBtn, removeFromBtn);
}
