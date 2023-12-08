const STORAGE_KEY = 'product-discount';

export function getData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

export function saveData(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
