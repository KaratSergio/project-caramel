export function createMarkup(items = []) {
  return items
    .map(item => {
      return ` <div class="card-product-discount" data-id="${item._id}">
    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${item.img}"
            width="180" height="180" alt="${item.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${item.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${item.price}</p>

            <button type="button" class="card-product-btn">
                <svg>
                    <use href="тут посилання на іконку зі спрайту"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;
    })
    .join('');
}
