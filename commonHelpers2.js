import{g as I,a as O,s as u}from"./assets/get-api-1e91acc7.js";import{P as j,a as T,l as D}from"./assets/vendor-8c378b12.js";const B="https://food-boutique.b.goit.study/api/",_=document.querySelector(".list-prod"),A=document.querySelector(".filter-form");document.querySelector("input");const f=document.querySelector(".filter-select");document.querySelector(".filter-sort");A.addEventListener("submit",N);async function N(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,r=(await z(e,o)).map(({name:a,category:c})=>(c=o==="Show all"?null:c,{name:a,category:c}));_.innerHTML=H(r)}catch(e){console.error(e)}}async function z(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${B}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function J(){const t=await fetch(`${B}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}f.addEventListener("change",F);function F(t){t.currentTarget.value,J().then(e=>{e.forEach(s=>{option.value=s,option.text=s,f.appendChild(option)});let o=document.createElement("option");o.text="Show all",f.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function H(t){return t.map(({_id:e,name:o,img:s,category:r,size:a,price:c,popularity:n})=>`
          <li class="prod-item" data-js-product-id=${e}>
            <div class="prod-pic">
              <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
                <use href="./images/icons.svg#shopping-cart"></use>
              </svg>
              <img class="prod-img" src=${s} alt=${o} loading="lazy">
            </div>
            <h3 class="title-prod">${o}</h3>
            <div class="feature">
              <p class="feature-prod">Category:<span class="feature-value">${r}</span></p>
              <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${n}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${c}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const p=document.getElementById("modalProduct"),R=document.getElementById("closeModalProductBtn"),G=document.getElementById("addToCartBtn"),K=document.getElementById("modalProductImage"),Q=document.getElementById("modalProductName"),U=document.getElementById("modalProductCategory"),Y=document.getElementById("modalProductSize"),X=document.getElementById("modalProductPopularity"),V=document.getElementById("modalProductDescription"),W=document.getElementById("modalProductPrice");function C(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}K.src=t.img,Q.textContent=t.name,U.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",Y.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",X.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",V.textContent=`${t.desc}`,W.textContent=`$ ${t.price}`,p.style.display="block",window.addEventListener("click",b)}function l(){document.body.style.overflow="",p.style.display="none",window.removeEventListener("click",b)}R.addEventListener("click",l);window.addEventListener("click",b);document.addEventListener("keydown",function(t){t.key==="Escape"&&l()});function b(t){t.target===p&&l()}window.addEventListener("click",function(t){t.target===p&&l()});G.addEventListener("click",function(){l()});const Z=document.querySelector(".list-prod"),v={keyword:"",category:"",page:1,limit:9};function S(t,e){localStorage.setItem(t,JSON.stringify(e))}function tt(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}S("defaultParameters",v);function et(t,e){t.innerHTML=e}async function M(t){try{v.page=t;const{results:e}=await I(v);S("firstGet",e);const o=ot(e);et(Z,o),document.querySelectorAll(".prod-item").forEach(r=>{r.addEventListener("click",()=>{const a=r.getAttribute("data-js-product-id"),c=r.querySelector(".buy-btn"),n=r.querySelector(".prod-img"),m=e.find(i=>i._id.toString()===a);console.log("Selected productId:",a),st(a,e),n?C(m):console.error("Selected product not found:",a)})})}catch(e){console.error(e)}}function ot(t){return t.map(({_id:e,name:o,img:s,category:r,size:a,price:c,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${r}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${n}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}M();const $="added-item";function st(t,e){let o=tt($);o||(o=[]);const s=e.find(r=>r._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),S($,o),console.log(o);const r=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);r&&(r.disabled=!0)}else console.error("Selected product not found:",t)}const rt=document.querySelector("#pagination"),at={keyword:"",category:"",page:1,limit:9};I(at).then(({results:t,totalPages:e})=>{ct(t,e)});function ct(t,e){if(e>1){const o={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,usageStatistics:!1};new j(rt,o).on("afterMove",r=>{r.page,M(r.page)})}}const P=document.querySelector(".popular-list"),x="added-itemX";function nt(t){localStorage.setItem(x,JSON.stringify(t))}function dt(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.log(t)}}O(5).then(t=>{P.insertAdjacentHTML("beforeend",it(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const a=s.closest(".popular-card").getAttribute("data-js-product-id");C(w(a,t))}else if(s.closest(".btn-add")){const a=s.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),c=w(a,t),n=dt();n.find(i=>i._id===c._id)||(n.push(c),nt(n)),s.closest(".btn-add").classList.add("visually-hidden")}}P.addEventListener("click",e)}).catch(t=>{console.error(t)});function w(t,e){return e.find(s=>s._id.toString()===t)}function it(t){return t.map(({_id:e,name:o,img:s,category:r,popularity:a,size:c,price:n,is10PercentOff:m})=>{const i=parseInt(a.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${r.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}T.defaults.baseURL="https://food-boutique.b.goit.study/api/";function lt(){return T.get("products/discount").then(t=>t.data)}const q="product-discount";function ut(){try{const t=localStorage.getItem(q);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function L(t){localStorage.setItem(q,JSON.stringify(t))}function pt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
            <use href="${u}#shopping-cart"></use>
          </svg>
            </button>
            <span class="product-added">
            <svg class="svg-added" width="12" height="12">
              <use href="${u}#check"></use>
            </svg>
          
        </div>
    </div>
</div>
`).join("")}let y=[];const E=document.querySelector(".products-discount");console.log(E);async function gt(){y=(await lt()).slice(0,2);const e=pt(y);mt(e)}gt();function mt(t){E.insertAdjacentHTML("beforeend",t)}E.addEventListener("click",ft);function ft(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,s=ut();if(s.find(r=>o===r._id))L(s.filter(r=>o!==r._id));else{const r=y.find(a=>o===a._id);s.push(r),L(s)}}const d=document.querySelector(".feedback-form"),g="feedback-form-state",vt=D(()=>{const t={email:d.elements.email.value};localStorage.setItem(g,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(g);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{vt()});d.addEventListener("submit",t=>{t.preventDefault();const e={email:d.elements.email.value};console.log(e),localStorage.removeItem(g),d.reset()});const yt=()=>{const t=localStorage.getItem(g);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}};yt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(r=>{r.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const h=document.getElementById("scrollToTopBtn"),k=360;window.onscroll=function(){document.body.scrollTop>k||document.documentElement.scrollTop>k?h.classList.add("show"):h.classList.remove("show")};h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
