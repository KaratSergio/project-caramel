import{g as L,a as x}from"./assets/get-api-301aac24.js";import{P as D,a as I}from"./assets/vendor-99d50140.js";const j=document.getElementById("countProducts");let q=0;document.getElementById("cartLink").addEventListener("click",()=>{j.innerHTML=`cart (${++q})`});const g="Java Script";console.log(g.length-1);console.log(g[g.length]);const T="https://food-boutique.b.goit.study/api/";function z(){return fetch(`${T}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(t,e,o,a,s){const c=new URLSearchParams({keyword:t,category:e,page:o,limit:a});return s&&s.key&&s.value&&(c[s.key]=s.value),fetch(`${T}products`,{params:c}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const f=document.querySelector(".list-prod"),A=document.querySelector(".filter-form");document.querySelector("input");const p=document.querySelector(".filter-select");document.querySelector(".filter-sort");function b(t){return Array.isArray(t)?t.map(({_id:e,name:o,img:a,category:s,size:c,price:r,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${s}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${n}</span></p>
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
      `).join(""):(console.error("Invalid results:",t),"")}async function H(){try{const t=await z();let e=document.createElement("option");e.innerHTML="Show all",p.appendChild(e),t.forEach(s=>{const c=document.createElement("option");c.value=s,c.text=s,p.appendChild(c)}),p.addEventListener("change",async function(){B({...d(),category:this.value==="Show all"?null:this.value,page:1});const s=d(),c=await m(s);console.log(c),f.innerHTML=b(c)});const o=d(),a=await m(o);f.innerHTML=b(a)}catch(t){console.error("Initialization error:",t)}}A.addEventListener("submit",async function(t){t.preventDefault();const e=this.elements.searchQuery.value.trim().toLowerCase().split(" "),o=this.elements.categories.value;this.elements.searchQuery.value=e||"",B({keyword:e,category:o==="Show all"?null:o,page:1,limit:6});const a=d(),s=await m(a);f.innerHTML=createCardMarkup(s),this.elements.searchQuery.value=""});function B(t){localStorage.setItem("filterData",JSON.stringify(t))}function d(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}H();const l=document.getElementById("modalProduct"),O=document.getElementById("closeModalProductBtn"),_=document.getElementById("addToCartBtn"),N=document.getElementById("modalProductImage"),J=document.getElementById("modalProductName"),R=document.getElementById("modalProductCategory"),Q=document.getElementById("modalProductSize"),U=document.getElementById("modalProductPopularity"),F=document.getElementById("modalProductDescription"),G=document.getElementById("modalProductPrice");function K(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}N.src=t.img,J.textContent=t.name,R.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",Q.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",U.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",F.textContent=`${t.desc}`,G.textContent=`$ ${t.price}`,l.style.display="block",window.addEventListener("click",P)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",P)}O.addEventListener("click",i);window.addEventListener("click",P);document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function P(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});_.addEventListener("click",function(){i()});const Y=document.querySelector(".list-prod"),y={keyword:"",category:"",page:1,limit:9};function C(t,e){localStorage.setItem(t,JSON.stringify(e))}function W(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}C("defaultParameters",y);function V(t,e){t.innerHTML=e}async function X(t){try{y.page=t;const{results:e}=await L(y);console.log("Products:",e);const o=Z(e);V(Y,o),document.querySelectorAll(".prod-item").forEach(s=>{s.addEventListener("click",()=>{const c=s.getAttribute("data-js-product-id"),r=s.querySelector(".buy-btn"),n=e.find(u=>u._id.toString()===c);console.log("Selected productId:",c),tt(c,e)})})}catch(e){console.error(e)}}function Z(t){return t.map(({_id:e,name:o,img:a,category:s,size:c,price:r,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${a} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${s}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${n}</span></p>
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
      `).join("")}const E="added-item";function tt(t,e){let o=W(E);o.products||(o.products=[]);const a=e.find(s=>s._id.toString()===t);a?(o.products.push(a),C(E,o),console.log(o)):console.error("Selected product not found:",t)}const et=document.querySelector("#pagination"),ot={keyword:"",category:"",page:1,limit:9};L(ot).then(({results:t,totalPages:e})=>{st(t,e)});function st(t,e){if(e>1){let o=1;const a={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,page:o};new D(et,a).on("afterMove",c=>{o=c.page,X(c.page)})}}const S=document.querySelector(".popular-list");x(5).then(t=>{S.insertAdjacentHTML("beforeend",at(t));function e(o){let a=o.target;if(a.closest(".popular-card")){const c=a.closest(".popular-card").getAttribute("data-js-product-id"),r=t.find(n=>n._id.toString()===c);K(r)}else a.closest(".btn-add")&&(a.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}S.addEventListener("click",e)}).catch(t=>{console.error(t)});function at(t){return t.map(({_id:e,name:o,img:a,category:s,popularity:c,size:r,price:n})=>{const u=parseInt(c.toString()[0]);return`  <li class="popular-item">
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
            <img src="${a}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${o}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${s.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${r}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${u}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}I.defaults.baseURL="https://food-boutique.b.goit.study/api/";function ct(){return I.get("products/discount").then(t=>t.data)}const M="product-discount";function rt(){try{const t=localStorage.getItem(M);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function $(t){localStorage.setItem(M,JSON.stringify(t))}function nt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
`).join("")}let h=[];const w=document.querySelector(".products-discount");console.log(w);async function it(){h=(await ct()).slice(0,2);const e=nt(h);dt(e)}it();function dt(t){w.insertAdjacentHTML("beforeend",t)}w.addEventListener("click",lt);function lt(t){if(!t.target.closest(".cart-product-btn"))return;const o=t.target.closest(".cart-product-discount").dataset.id,a=rt();if(a.find(s=>o===s._id))$(a.filter(s=>o!==s._id));else{const s=h.find(c=>o===c._id);a.push(s),$(a)}}const v=document.getElementById("scrollToTopBtn"),k=360;window.onscroll=function(){document.body.scrollTop>k||document.documentElement.scrollTop>k?v.classList.add("show"):v.classList.remove("show")};v.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
