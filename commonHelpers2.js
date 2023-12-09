import{g as L,a as I}from"./assets/get-api-dca27de8.js";import{P as C,a as k,l as M}from"./assets/vendor-8c378b12.js";const x=document.getElementById("countProducts");let q=0;document.getElementById("cartLink").addEventListener("click",()=>{x.innerHTML=`cart (${++q})`});const g="Java Script";console.log(g.length-1);console.log(g[g.length]);const B="https://food-boutique.b.goit.study/api/",j=document.querySelector(".list-prod"),D=document.querySelector(".filter-form");document.querySelector("input");const m=document.querySelector(".filter-select");document.querySelector(".filter-sort");D.addEventListener("submit",O);async function O(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),o=t.currentTarget.categories.value,a=(await _(e,o)).map(({name:n,category:r})=>(r=o==="Show all"?null:r,{name:n,category:r}));j.innerHTML=N(a)}catch(e){console.error(e)}}async function _(t,e){const o=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),s=await fetch(`${B}products?${o}`);if(!s.ok)throw new Error(s.statusText);return s.json()}async function z(){const t=await fetch(`${B}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}m.addEventListener("change",A);function A(t){t.currentTarget.value,z().then(e=>{e.forEach(s=>{option.value=s,option.text=s,m.appendChild(option)});let o=document.createElement("option");o.text="Show all",m.appendChild(o)}).catch(e=>{console.error("Error fetching categories:",e)})}function N(t){return t.map(({_id:e,name:o,img:s,category:a,size:n,price:r,popularity:c})=>`
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
              <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${r}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const l=document.getElementById("modalProduct"),F=document.getElementById("closeModalProductBtn"),H=document.getElementById("addToCartBtn"),J=document.getElementById("modalProductImage"),R=document.getElementById("modalProductName"),G=document.getElementById("modalProductCategory"),K=document.getElementById("modalProductSize"),Q=document.getElementById("modalProductPopularity"),U=document.getElementById("modalProductDescription"),Y=document.getElementById("modalProductPrice");function W(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}J.src=t.img,R.textContent=t.name,G.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",K.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",Q.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",U.textContent=`${t.desc}`,Y.textContent=`$ ${t.price}`,l.style.display="block",window.addEventListener("click",h)}function d(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",h)}F.addEventListener("click",d);window.addEventListener("click",h);document.addEventListener("keydown",function(t){t.key==="Escape"&&d()});function h(t){t.target===l&&d()}window.addEventListener("click",function(t){t.target===l&&d()});H.addEventListener("click",function(){d()});const V=document.querySelector(".list-prod"),f={keyword:"",category:"",page:1,limit:9};function b(t,e){localStorage.setItem(t,JSON.stringify(e))}function X(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}b("defaultParameters",f);function Z(t,e){t.innerHTML=e}async function tt(t){try{f.page=t;const{results:e}=await L(f);b("firstGet",e);const o=et(e);Z(V,o),document.querySelectorAll(".prod-item").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-js-product-id"),r=a.querySelector(".buy-btn"),c=e.find(p=>p._id.toString()===n);console.log("Selected productId:",n),ot(n,e)})})}catch(e){console.error(e)}}function et(t){return t.map(({_id:e,name:o,img:s,category:a,size:n,price:r,popularity:c})=>`
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
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${c}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${r}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}const S="added-item";function ot(t,e){let o=X(S);o||(o=[]);const s=e.find(a=>a._id.toString()===t);if(console.log(`tut ${s}`),s){o.push(s),b(S,o),console.log(o);const a=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);a&&(a.disabled=!0)}else console.error("Selected product not found:",t)}const st=document.querySelector("#pagination"),at={keyword:"",category:"",page:1,limit:9};L(at).then(({results:t,totalPages:e})=>{nt(t,e)});function nt(t,e){if(e>1){let o=1;const s={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,page:o};new C(st,s).on("afterMove",n=>{o=n.page,tt(n.page)})}}const P=document.querySelector(".popular-list");I(5).then(t=>{P.insertAdjacentHTML("beforeend",rt(t));function e(o){let s=o.target;if(s.closest(".popular-card")){const n=s.closest(".popular-card").getAttribute("data-js-product-id"),r=t.find(c=>c._id.toString()===n);W(r)}else s.closest(".btn-add")&&(s.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}P.addEventListener("click",e)}).catch(t=>{console.error(t)});function rt(t){return t.map(({_id:e,name:o,img:s,category:a,popularity:n,size:r,price:c})=>{const p=parseInt(n.toString()[0]);return`  <li class="popular-item">
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
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}k.defaults.baseURL="https://food-boutique.b.goit.study/api/";function ct(){return k.get("products/discount").then(t=>t.data)}const T="product-discount";function it(){try{const t=localStorage.getItem(T);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function w(t){localStorage.setItem(T,JSON.stringify(t))}function dt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
`).join("")}let v=[];const E=document.querySelector(".products-discount");console.log(E);async function lt(){v=(await ct()).slice(0,2);const e=dt(v);ut(e)}lt();function ut(t){E.insertAdjacentHTML("beforeend",t)}E.addEventListener("click",pt);function pt(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,s=it();if(s.find(a=>o===a._id))w(s.filter(a=>o!==a._id));else{const a=v.find(n=>o===n._id);s.push(a),w(s)}}const i=document.querySelector(".feedback-form"),u="feedback-form-state",gt=M(()=>{const t={email:i.elements.email.value};localStorage.setItem(u,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{gt()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(u),i.reset()});const mt=()=>{const t=localStorage.getItem(u);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}};mt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(a=>{a.addEventListener("click",s)});function s(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const y=document.getElementById("scrollToTopBtn"),$=360;window.onscroll=function(){document.body.scrollTop>$||document.documentElement.scrollTop>$?y.classList.add("show"):y.classList.remove("show")};y.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
