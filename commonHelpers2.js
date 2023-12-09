import{g as $,a as B}from"./assets/get-api-84ce37bb.js";import{P as C,a as L,l as I}from"./assets/vendor-8c378b12.js";const k="https://food-boutique.b.goit.study/api/",M=document.querySelector(".list-prod"),x=document.querySelector(".filter-form");document.querySelector("input");const g=document.querySelector(".filter-select");document.querySelector(".filter-sort");x.addEventListener("submit",q);async function q(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,a=(await j(e,o)).map(({name:r,category:n})=>(n=o==="Show all"?null:n,{name:r,category:n}));M.innerHTML=_(a)}catch(e){console.error(e)}}async function j(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${k}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function D(){const t=await fetch(`${k}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}g.addEventListener("change",O);function O(t){t.currentTarget.value,D().then(e=>{e.forEach(s=>{option.value=s,option.text=s,g.appendChild(option)});let o=document.createElement("option");o.text="Show all",g.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function _(t){return t.map(({_id:e,name:o,img:s,category:a,size:r,price:n,popularity:c})=>`
          <li class="prod-item" data-js-product-id=${e}>
            <div class="prod-pic">
              <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
                <use href="./images/icons.svg#shopping-cart"></use>
              </svg>
              <img class="prod-img" src=${s} alt=${o} loading="lazy">
            </div>
            <h3 class="title-prod">${o}</h3>
            <div class="feature">
              <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
              <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${n}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const l=document.getElementById("modalProduct"),z=document.getElementById("closeModalProductBtn"),A=document.getElementById("addToCartBtn"),N=document.getElementById("modalProductImage"),F=document.getElementById("modalProductName"),H=document.getElementById("modalProductCategory"),J=document.getElementById("modalProductSize"),R=document.getElementById("modalProductPopularity"),G=document.getElementById("modalProductDescription"),K=document.getElementById("modalProductPrice");function Q(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}N.src=t.img,F.textContent=t.name,H.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",J.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",R.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",G.textContent=`${t.desc}`,K.textContent=`$ ${t.price}`,l.style.display="block",window.addEventListener("click",y)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",y)}z.addEventListener("click",d);window.addEventListener("click",y);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function y(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});A.addEventListener("click",function(){d()});const U=document.querySelector(".list-prod"),m={keyword:"",category:"",page:1,limit:9};function h(t,e){localStorage.setItem(t,JSON.stringify(e))}function Y(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}h("defaultParameters",m);function V(t,e){t.innerHTML=e}async function W(t){try{m.page=t;const{results:e}=await $(m);h("firstGet",e);const o=X(e);V(U,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-js-product-id"),n=a.querySelector(".buy-btn"),c=e.find(p=>p._id.toString()===r);console.log("Selected productId:",r),Z(r,e)})})}catch(e){console.error(e)}}function X(t){return t.map(({_id:e,name:o,img:s,category:a,size:r,price:n,popularity:c})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${n}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}const S="added-item";function Z(t,e){let o=Y(S);o||(o=[]);const s=e.find(a=>a._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),h(S,o),console.log(o);const a=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);a&&(a.disabled=!0)}else console.error("Selected product not found:",t)}const tt=document.querySelector("#pagination"),et={keyword:"",category:"",page:1,limit:9};$(et).then(({results:t,totalPages:e})=>{ot(t,e)});function ot(t,e){if(e>1){let o=1;const s={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,page:o};new C(tt,s).on("afterMove",r=>{o=r.page,W(r.page)})}}const E=document.querySelector(".popular-list");B(5).then(t=>{E.insertAdjacentHTML("beforeend",st(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const r=s.closest(".popular-card").getAttribute("data-js-product-id"),n=t.find(c=>c._id.toString()===r);Q(n)}else s.closest(".btn-add")&&(s.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}E.addEventListener("click",e)}).catch(t=>{console.error(t)});function st(t){return t.map(({_id:e,name:o,img:s,category:a,popularity:r,size:n,price:c})=>{const p=parseInt(r.toString()[0]);return`  <li class="popular-item">
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="./images/icons.svg#shopping-cart"></use>
        </svg>
      </button>
      <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="./images/icons.svg#check"></use>
        </svg>
      </span>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${a.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}L.defaults.baseURL="https://food-boutique.b.goit.study/api/";function at(){return L.get("products/discount").then(t=>t.data)}const T="product-discount";function rt(){try{const t=localStorage.getItem(T);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function P(t){localStorage.setItem(T,JSON.stringify(t))}function nt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${e.img}"
            width="105" height="105" alt="${e.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${e.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${e.price}</p>

            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg" width="18" height="18">
            <use href="./images/icons.svg#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="./images/icons.svg#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`).join("")}let f=[];const b=document.querySelector(".products-discount");console.log(b);async function ct(){f=(await at()).slice(0,2);const e=nt(f);it(e)}ct();function it(t){b.insertAdjacentHTML("beforeend",t)}b.addEventListener("click",dt);function dt(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,s=rt();if(s.find(a=>o===a._id))P(s.filter(a=>o!==a._id));else{const a=f.find(r=>o===r._id);s.push(a),P(s)}}const i=document.querySelector(".feedback-form"),u="feedback-form-state",lt=I(()=>{const t={email:i.elements.email.value};localStorage.setItem(u,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{lt()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(u),i.reset()});const ut=()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}};ut();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(a=>{a.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const v=document.getElementById("scrollToTopBtn"),w=360;window.onscroll=function(){document.body.scrollTop>w||document.documentElement.scrollTop>w?v.classList.add("show"):v.classList.remove("show")};v.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
