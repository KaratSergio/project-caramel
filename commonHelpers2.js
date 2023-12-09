import{g as k,a as x,b as j}from"./assets/get-api-947e1456.js";import{P as D,a as L}from"./assets/vendor-99d50140.js";const q=document.getElementById("countProducts");let z=0;document.getElementById("cartLink").addEventListener("click",()=>{q.innerHTML=`cart (${++z})`});const p="Java Script";console.log(p.length-1);console.log(p[p.length]);const S="https://food-boutique.b.goit.study/api/";function H(){return fetch(`${S}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function g(t,e,s,r,o){const a=new URLSearchParams({keyword:t,category:e,page:s,limit:r});return o&&o.key&&o.value&&(a[o.key]=o.value),fetch(`${S}products`,{params:a}).then(c=>{if(!c.ok)throw new Error(c.status);return c.json()})}const m=document.querySelector(".list-prod"),A=document.querySelector(".filter-form");document.querySelector("input");const u=document.querySelector(".filter-select");document.querySelector(".filter-sort");function w(t){return Array.isArray(t)?t.map(({_id:e,name:s,img:r,category:o,size:a,price:c,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${r} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
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
      `).join(""):(console.error("Invalid results:",t),"")}async function O(){try{const t=await H();let e=document.createElement("option");e.innerHTML="Show all",u.appendChild(e),t.forEach(o=>{const a=document.createElement("option");a.value=o,a.text=o,u.appendChild(a)}),u.addEventListener("change",async function(){I({...d(),category:this.value==="Show all"?null:this.value,page:1});const o=d(),a=await g(o);console.log(a),m.innerHTML=w(a)});const s=d(),r=await g(s);m.innerHTML=w(r)}catch(t){console.error("Initialization error:",t)}}A.addEventListener("submit",async function(t){t.preventDefault();const e=this.elements.searchQuery.value.trim().toLowerCase().split(" "),s=this.elements.categories.value;this.elements.searchQuery.value=e||"",I({keyword:e,category:s==="Show all"?null:s,page:1,limit:6});const r=d(),o=await g(r);m.innerHTML=createCardMarkup(o),this.elements.searchQuery.value=""});function I(t){localStorage.setItem("filterData",JSON.stringify(t))}function d(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}O();const l=document.getElementById("modalProduct"),_=document.getElementById("closeModalProductBtn"),N=document.getElementById("addToCartBtn"),J=document.getElementById("modalProductImage"),Q=document.getElementById("modalProductName"),R=document.getElementById("modalProductCategory"),U=document.getElementById("modalProductSize"),F=document.getElementById("modalProductPopularity"),G=document.getElementById("modalProductDescription"),K=document.getElementById("modalProductPrice");function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}J.src=t.img,Q.textContent=t.name,R.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",U.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",F.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",G.textContent=`${t.desc}`,K.textContent=`$ ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",h)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",h)}_.addEventListener("click",i);window.addEventListener("click",h);document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function h(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});N.addEventListener("click",function(){i()});const W=document.querySelector(".list-prod"),P={keyword:"",category:"",page:1,limit:9};function Y(t,e){t.innerHTML=e}async function B(t){try{P.page=t;const{results:e}=await k(P);console.log("Products:",e);const s=V(e);Y(W,s),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",async()=>{const a=o.getAttribute("data-js-product-id");try{const c=await x(a);c?T(c):console.error("Selected product not found:",a)}catch(c){console.error("Error fetching product by ID:",c)}})})}catch(e){console.error(e)}}function V(t){return t.map(({_id:e,name:s,img:r,category:o,size:a,price:c,popularity:n})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${r} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
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
      `).join("")}B();const X=document.querySelector("#pagination"),Z={keyword:"",category:"",page:1,limit:9};k(Z).then(({results:t,totalPages:e})=>{tt(t,e)});function tt(t,e){if(e>1){let s=1;const r={totalItems:t.length*e,itemsPerPage:9,visiblePages:3,page:s};new D(X,r).on("afterMove",a=>{s=a.page,B(a.page)})}}const b=document.querySelector(".popular-list");j(5).then(t=>{b.insertAdjacentHTML("beforeend",et(t));function e(s){let r=s.target;if(r.closest(".popular-card")){const a=r.closest(".popular-card").getAttribute("data-js-product-id"),c=t.find(n=>n._id.toString()===a);T(c)}else r.closest(".btn-add")&&(r.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}b.addEventListener("click",e)}).catch(t=>{console.error(t)});function et(t){return t.map(({_id:e,name:s,img:r,category:o,popularity:a,size:c,price:n})=>{const M=parseInt(a.toString()[0]);return`  <li class="popular-item">
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
            <img src="${r}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${o.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${M}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}L.defaults.baseURL="https://food-boutique.b.goit.study/api/";function ot(){return L.get("products/discount").then(t=>t.data)}const C="product-discount";function st(){try{const t=localStorage.getItem(C);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function E(t){localStorage.setItem(C,JSON.stringify(t))}function at(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
`).join("")}let y=[];const v=document.querySelector(".products-discount");console.log(v);async function rt(){y=(await ot()).slice(0,2);const e=at(y);ct(e)}rt();function ct(t){v.insertAdjacentHTML("beforeend",t)}v.addEventListener("click",nt);function nt(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,r=st();if(r.find(o=>s===o._id))E(r.filter(o=>s!==o._id));else{const o=y.find(a=>s===a._id);r.push(o),E(r)}}const f=document.getElementById("scrollToTopBtn"),$=360;window.onscroll=function(){document.body.scrollTop>$||document.documentElement.scrollTop>$?f.classList.add("show"):f.classList.remove("show")};f.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
