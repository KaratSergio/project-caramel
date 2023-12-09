import sprite from '../../images/icons.svg';

export function createMarkup(items = []) {
  return items
    .map(item => {
      return ` <div class="card-product-discount" data-id="${item._id}">
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
            <svg class="card-product-svg" width="18" height="18">
            <use href="${sprite}#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="${sprite}#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`;
    })
    .join('');
}
