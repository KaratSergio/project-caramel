import"./assets/styles-9e0538e0.js";import{a as d,P as q}from"./assets/vendor-b592f4c5.js";const w="https://food-boutique.b.goit.study/api/";d.defaults.baseURL=w;async function z({keyword:t,category:e,page:s,limit:c,sort:o}={}){const a={keyword:t,category:e,page:s,limit:c};return o&&o.key&&o.value&&(a[o.key]=o.value),(await d.get(`${w}products`,{params:a})).data}async function A(t){return(await d.get(`${w}products/popular`,{params:{limit:t}})).data}const D=document.getElementById("countProducts");let _=0;document.getElementById("cartLink").addEventListener("click",()=>{D.innerHTML=`cart (${++_})`});const g="Java Script";console.log(g.length-1);console.log(g[g.length]);const S="https://food-boutique.b.goit.study/api/";function H(){return fetch(`${S}products/categories`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(t,e,s,c,o){const a=new URLSearchParams({keyword:t,category:e,page:s,limit:c});return o&&o.key&&o.value&&(a[o.key]=o.value),fetch(`${S}products`,{params:a}).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const f=document.querySelector(".list-prod"),O=document.querySelector(".filter-form");document.querySelector("input");const p=document.querySelector(".filter-select");document.querySelector(".filter-sort");function b(t){return Array.isArray(t)?t.map(({_id:e,name:s,img:c,category:o,size:a,price:n,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
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
      `).join(""):(console.error("Invalid results:",t),"")}async function N(){try{const t=await H();let e=document.createElement("option");e.innerHTML="Show all",p.appendChild(e),t.forEach(o=>{const a=document.createElement("option");a.value=o,a.text=o,p.appendChild(a)}),p.addEventListener("change",async function(){C({...u(),category:this.value==="Show all"?null:this.value,page:1});const o=u(),a=await m(o);console.log(a),f.innerHTML=b(a)});const s=u(),c=await m(s);f.innerHTML=b(c)}catch(t){console.error("Initialization error:",t)}}O.addEventListener("submit",async function(t){t.preventDefault();const e=this.elements.searchQuery.value.trim().toLowerCase().split(" "),s=this.elements.categories.value;this.elements.searchQuery.value=e||"",C({keyword:e,category:s==="Show all"?null:s,page:1,limit:6});const c=u(),o=await m(c);f.innerHTML=createCardMarkup(o),this.elements.searchQuery.value=""});function C(t){localStorage.setItem("filterData",JSON.stringify(t))}function u(){const t=localStorage.getItem("filterData");return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}N();const l=document.getElementById("modalProduct"),R=document.getElementById("closeModalProductBtn"),J=document.getElementById("addToCartBtn"),U=document.getElementById("modalProductImage"),Q=document.getElementById("modalProductName"),F=document.getElementById("modalProductCategory"),G=document.getElementById("modalProductSize"),K=document.getElementById("modalProductPopularity"),W=document.getElementById("modalProductDescription"),Y=document.getElementById("modalProductPrice");function I(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}U.src=t.img,Q.textContent=t.name,F.textContent=`Category: ${t.category}`,G.textContent=`Size: ${t.size}`,K.textContent=`Popularity: ${t.popularity}`,W.textContent=t.description,Y.textContent=`Price: ${t.price}`,document.body.style.overflow="hidden",l.style.display="block",window.addEventListener("click",B)}function i(){document.body.style.overflow="",l.style.display="none",window.removeEventListener("click",B)}R.addEventListener("click",i);window.addEventListener("click",function(t){t.target===l&&i()});document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});function B(t){t.target===l&&i()}window.addEventListener("click",function(t){t.target===l&&i()});J.addEventListener("click",function(){i()});const V=document.querySelector(".list-prod"),E={keyword:"",category:"",page:1,limit:9};function X(t,e){t.innerHTML=e}async function M(t){try{E.page=t;const{results:e}=await z(E);console.log("Products:",e);const s=Z(e);X(V,s),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-js-product-id"),n=e.find(r=>r._id.toString()===a);n?I(n):console.error("Selected product not found:",a)})})}catch(e){console.error(e)}}function Z(t){return t.map(({_id:e,name:s,img:c,category:o,size:a,price:n,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${c} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${o}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
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
      `).join("")}M();const tt=9;let et=540;let y=1;const ot=document.getElementById("pagination"),st=new q(ot,{totalItems:et,itemsPerPage:tt,visiblePages:5,centerAlign:!0});st.on("beforeMove",t=>{y=t.page,T(y)});async function T(t){M(t)}T(y);const $=document.querySelector(".popular-list");A(5).then(t=>{$.insertAdjacentHTML("beforeend",at(t));function e(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id"),n=t.find(r=>r._id.toString()===a);I(n)}else c.closest(".btn-add")&&(c.closest(".btn-add").classList.add("visually-hidden"),alert("Product add to Order"))}$.addEventListener("click",e)}).catch(t=>{console.error(t)});function at(t){return t.map(({_id:e,name:s,img:c,category:o,popularity:a,size:n,price:r})=>{const j=parseInt(a.toString()[0]);return`  <li class="popular-item">
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
            <img src="${c}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${o.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${j}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}d.defaults.baseURL="https://food-boutique.b.goit.study/api/";function ct(){return d.get("products/discount").then(t=>t.data)}const x="product-discount";function nt(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function k(t){localStorage.setItem(x,JSON.stringify(t))}function rt(t=[]){return t.map(e=>` <div class="card-product-discount" data-id="${e._id}">
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
`).join("")}let v=[];const P=document.querySelector(".products-discount");console.log(P);async function it(){v=(await ct()).slice(0,2);const e=rt(v);dt(e)}it();function dt(t){P.insertAdjacentHTML("beforeend",t)}P.addEventListener("click",lt);function lt(t){if(!t.target.closest(".cart-product-btn"))return;const s=t.target.closest(".cart-product-discount").dataset.id,c=nt();if(c.find(o=>s===o._id))k(c.filter(o=>s!==o._id));else{const o=v.find(a=>s===a._id);c.push(o),k(c)}}const h=document.getElementById("scrollToTopBtn"),L=360;window.onscroll=function(){document.body.scrollTop>L||document.documentElement.scrollTop>L?h.classList.add("show"):h.classList.remove("show")};h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
