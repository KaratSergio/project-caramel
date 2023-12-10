export function createMarkup(items = [], idProducts = []) {
  return items
    .map(item => {
      const toggle = idProducts.includes(item._id);

      const check = toggle ? '' : 'is-hidden';

      const card = toggle ? 'is-hidden' : '';

      const newName = truncate(item.name, 14);

      return ` <div class="card-product-discount" data-id="${item._id}">
      ${
        item.is10PercentOff &&
        ` <div class="card-product-label">
      <svg>
      <use href="./images/icons.svg#icon-discount"></use>
      </svg>
      </div>`
      }

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${item.img}"
            width="105" height="105" alt="${item.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${newName}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">$${item.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${check}" width="18" height="18">
            <use href="./images/icons.svg#check"></use>
          </svg>
          <svg class="card-product-svg ${card}" width="18" height="18">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`;
    })
    .join('');
}
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}
