export function createMarkup(items = [], idProducts = []) {
  return items
    .map(item => {
      const toggle = idProducts.includes(item._id);

      const check = toggle ? '' : 'is-hidden';

      const card = toggle ? 'is-hidden' : '';

      //   is10PercentOff

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
        <h3 class="card-product-title">${item.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${item.price}</p>
            <button type="button" class="card-product-btn" >
<<<<<<< HEAD
            <svg class="card-product-svg ${check}" width="18" height="18">
            <use href="./images/icons.svg#check"></use>
=======
            <svg class="card-product-svg" width="18" height="18">
            <use href="${sprite}#shopping-cart"></use>
>>>>>>> 562c6e1027d47fd4cc286998d94a8c91af1e9557
          </svg>
          <svg class="card-product-svg ${card}" width="18" height="18">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
            </button>
<<<<<<< HEAD
=======
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="${sprite}#check"></use>
            </svg>
          
>>>>>>> 562c6e1027d47fd4cc286998d94a8c91af1e9557
        </div>
    </div>
</div>
`;
    })
    .join('');
}
