
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
