export const STORAGE_KEY = 'added-item';

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

export function recheckCart(item) {
  saveData(STORAGE_KEY, listProducts);
  countAddedItems();
  item = checkAdded(listProducts, product);
  manageButton(item, addToCartBtn, removeFromBtn);
}
