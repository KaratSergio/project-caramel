import{g as L,a as x,s as S}from"./assets/get-api-8771714d.js";import{P as q,a as k,l as j}from"./assets/vendor-8c378b12.js";const T="https://food-boutique.b.goit.study/api/",D=document.querySelector(".list-prod"),O=document.querySelector(".filter-form");document.querySelector("input");const g=document.querySelector(".filter-select");document.querySelector(".filter-sort");O.addEventListener("submit",_);async function _(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,a=(await z(e,o)).map(({name:r,category:n})=>(n=o==="Show all"?null:n,{name:r,category:n}));D.innerHTML=F(a)}catch(e){console.error(e)}}async function z(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${T}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function A(){const t=await fetch(`${T}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}g.addEventListener("change",N);function N(t){t.currentTarget.value,A().then(e=>{e.forEach(s=>{option.value=s,option.text=s,g.appendChild(option)});let o=document.createElement("option");o.text="Show all",g.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function F(t){return t.map(({_id:e,name:o,img:s,category:a,size:r,price:n,popularity:c})=>`
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
        `).join("")}const l=document.getElementById("modalProduct"),H=document.getElementById("closeModalProductBtn"),J=document.getElementById("addToCartBtn"),R=document.getElementById("modalProductImage"),G=document.getElementById("modalProductName"),K=document.getElementById("modalProductCategory"),Q=document.getElementById("modalProductSize"),U=document.getElementById("modalProductPopularity"),Y=document.getElementById("modalProductDescription"),V=document.getElementById("modalProductPrice");function B(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}R.src=t.img,G.textContent=t.name,K.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",Q.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",U.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",Y.textContent=`${t.desc}`,V.textContent=`$ ${t.price}`,l.style.display="block",window.addEventListener("click",y)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",y)}H.addEventListener("click",d);window.addEventListener("click",y);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function y(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});J.addEventListener("click",function(){d()});const W=document.querySelector(".list-prod"),m={keyword:"",category:"",page:1,limit:9};function h(t,e){localStorage.setItem(t,JSON.stringify(e))}function X(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}h("defaultParameters",m);function Z(t,e){t.innerHTML=e}async function I(t){try{m.page=t;const{results:e}=await L(m);h("firstGet",e);const o=tt(e);Z(W,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-js-product-id"),n=a.querySelector(".buy-btn"),c=a.querySelector(".prod-img"),p=e.find(M=>M._id.toString()===r);console.log("Selected productId:",r),et(r,e),c?B(p):console.error("Selected product not found:",r)})})}catch(e){console.error(e)}}function tt(t){return t.map(({_id:e,name:o,img:s,category:a,size:r,price:n,popularity:c})=>`
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
      `).join("")}I();const E="added-item";function et(t,e){let o=X(E);o||(o=[]);const s=e.find(a=>a._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),h(E,o),console.log(o);const a=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);a&&(a.disabled=!0)}else console.error("Selected product not found:",t)}const ot=document.querySelector("#pagination"),st={keyword:"",category:"",page:1,limit:9};L(st).then(({results:t,totalPages:e})=>{at(t,e)});function at(t,e){if(e>1){const o={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,usageStatistics:!1};new q(ot,o).on("afterMove",a=>{a.page,I(a.page)})}}const P=document.querySelector(".popular-list");x(5).then(t=>{P.insertAdjacentHTML("beforeend",rt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const r=s.closest(".popular-card").getAttribute("data-js-product-id"),n=t.find(c=>c._id.toString()===r);B(n)}else s.closest(".btn-add")&&(s.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}P.addEventListener("click",e)}).catch(t=>{console.error(t)});function rt(t){return t.map(({_id:e,name:o,img:s,category:a,popularity:r,size:n,price:c})=>{const p=parseInt(r.toString()[0]);return`  <li class="popular-item">
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
      </li>`}).join("")}k.defaults.baseURL="https://food-boutique.b.goit.study/api/";function nt(){return k.get("products/discount").then(t=>t.data)}const C="product-discount";function ct(){try{const t=localStorage.getItem(C);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function $(t){localStorage.setItem(C,JSON.stringify(t))}function it(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
            <use href="${S}#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="${S}#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`).join("")}let f=[];const b=document.querySelector(".products-discount");console.log(b);async function dt(){f=(await nt()).slice(0,2);const e=it(f);lt(e)}dt();function lt(t){b.insertAdjacentHTML("beforeend",t)}b.addEventListener("click",ut);function ut(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,s=ct();if(s.find(a=>o===a._id))$(s.filter(a=>o!==a._id));else{const a=f.find(r=>o===r._id);s.push(a),$(s)}}const i=document.querySelector(".feedback-form"),u="feedback-form-state",pt=j(()=>{const t={email:i.elements.email.value};localStorage.setItem(u,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{pt()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(u),i.reset()});const gt=()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}};gt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(a=>{a.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const v=document.getElementById("scrollToTopBtn"),w=360;window.onscroll=function(){document.body.scrollTop>w||document.documentElement.scrollTop>w?v.classList.add("show"):v.classList.remove("show")};v.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
