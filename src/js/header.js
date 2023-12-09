const countProducts = document.getElementById('countProducts');
// countProducts.innerHTML = `cart (${10})`;
let count = 0;
document.getElementById('cartLink').addEventListener('click', () => {
  countProducts.innerHTML = `cart (${++count})`;
});

const newWord = 'Java Script';
console.log(newWord.length - 1);
console.log(newWord[newWord.length]);
