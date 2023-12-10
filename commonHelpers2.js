import{g as $,a as _,s as l,b as D}from"./assets/get-api-d57b599c.js";import{P as A,l as j}from"./assets/vendor-8c378b12.js";const B="https://food-boutique.b.goit.study/api/",F=document.querySelector(".list-prod"),N=document.querySelector(".filter-form");document.querySelector("input");const y=document.querySelector(".filter-select");document.querySelector(".filter-sort");N.addEventListener("submit",z);async function z(t){t.preventDefault(),t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),t.currentTarget.categories.value;try{const e=t.currentTarget.searchQuery.value.trim().toLowerCase().split(" "),s=t.currentTarget.categories.value,c=(await J(e,s)).map(({name:n,category:a})=>(a=s==="Show all"?null:a,{name:n,category:a}));F.innerHTML=G(c)}catch(e){console.error(e)}}async function J(t,e){const s=new URLSearchParams({keyword:t,category:e,page:1,limit:6}),o=await fetch(`${B}products?${s}`);if(!o.ok)throw new Error(o.statusText);return o.json()}async function H(){const t=await fetch(`${B}products/categories`);if(!t.ok)throw new Error(t.status);return t.json()}y.addEventListener("change",R);function R(t){t.currentTarget.value,H().then(e=>{e.forEach(o=>{option.value=o,option.text=o,y.appendChild(option)});let s=document.createElement("option");s.text="Show all",y.appendChild(s)}).catch(e=>{console.error("Error fetching categories:",e)})}function G(t){return t.map(({_id:e,name:s,img:o,category:c,size:n,price:a,popularity:r})=>`
          <li class="prod-item" data-js-product-id=${e}>
            <div class="prod-pic">
              <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
                <use href="./images/icons.svg#shopping-cart"></use>
              </svg>
              <img class="prod-img" src=${o} alt=${s} loading="lazy">
            </div>
            <h3 class="title-prod">${s}</h3>
            <div class="feature">
              <p class="feature-prod">Category:<span class="feature-value">${c}</span></p>
              <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
              <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
            </div>
            <div class="buing-prod">
              <p class="price-prod">&#36; ${a}</p>
              <button class="buy-btn" type="button">
                <svg class="buy-svg" width="18" height="18">
                  <use href="./images/icons.svg#shopping-cart"></use>"></use>
                </svg>
              </button>
            </div>
          </li>
        `).join("")}const m=document.getElementById("modalProduct"),K=document.getElementById("closeModalProductBtn"),Q=document.getElementById("addToCartBtn"),V=document.getElementById("modalProductImage"),Y=document.getElementById("modalProductName"),U=document.getElementById("modalProductCategory"),X=document.getElementById("modalProductSize"),W=document.getElementById("modalProductPopularity"),Z=document.getElementById("modalProductDescription"),tt=document.getElementById("modalProductPrice");function S(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}V.src=t.img,Y.textContent=t.name,U.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",X.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",W.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",Z.textContent=`${t.desc}`,tt.textContent=`$ ${t.price}`,m.style.display="block",window.addEventListener("click",b)}function u(){document.body.style.overflow="",m.style.display="none",window.removeEventListener("click",b)}K.addEventListener("click",u);window.addEventListener("click",b);document.addEventListener("keydown",function(t){t.key==="Escape"&&u()});function b(t){t.target===m&&u()}window.addEventListener("click",function(t){t.target===m&&u()});Q.addEventListener("click",function(){u()});const et=document.querySelector(".list-prod");function C(t,e){localStorage.setItem(t,JSON.stringify(e))}function ot(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):{}}catch(e){console.log(e)}}function st(t,e){t.innerHTML=e}async function P(t){const e=ct(t);st(et,e),document.querySelectorAll(".prod-item").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-js-product-id");o.querySelector(".buy-btn");const n=o.querySelector(".prod-img"),a=t.find(r=>r._id.toString()===c);console.log("Selected productId:",c),nt(c,t),n?S(a):console.error("Selected product not found:",c)})})}function ct(t){return t.map(({_id:e,name:s,img:o,category:c,size:n,price:a,popularity:r})=>`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${o} alt=${s} loading="lazy">
          </div>
          <h3 class="title-prod">${s}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href="./images/icons.svg#shopping-cart"></use>"></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}const w="added-item";function nt(t,e){let s=ot(w);s||(s=[]);const o=e.find(c=>c._id.toString()===t);if(console.log(`tut ${o}`),o){s.push(o),C(w,s),console.log(s);const c=document.querySelector(`[data-js-product-id="${t}"] .buy-btn`);c&&(c.disabled=!0)}else console.error("Selected product not found:",t)}const at=document.querySelector("#pagination");document.querySelector(".list-prod");const rt={keyword:"",category:"",page:1,limit:9};it(rt);async function it(t){const{keyword:e,category:s}=t,o={keyword:e||"",category:s||"",page:1,limit:9},{results:c,totalPages:n}=await $(o);if(C("firstGet",c),P(c),n>1){const a={totalItems:c.length*n,itemsPerPage:o.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new A(at,a).on("afterMove",async v=>{o.page=v.page;const{results:d}=await $(o);P(d)})}}const k=document.querySelector(".popular-list"),M="added-itemX";function dt(t){localStorage.setItem(M,JSON.stringify(t))}function lt(){try{const t=localStorage.getItem(M);return t?JSON.parse(t):[]}catch(t){console.log(t)}}_(5).then(t=>{k.insertAdjacentHTML("beforeend",ut(t));function e(s){let o=s.target;if(o.closest(".popular-card")){const n=o.closest(".popular-card").getAttribute("data-js-product-id");S(L(n,t))}else if(o.closest(".btn-add")){const n=o.closest(".btn-add").nextElementSibling.getAttribute("data-js-product-id"),a=L(n,t),r=lt();r.find(d=>d._id===a._id)||(r.push(a),dt(r)),o.closest(".btn-add").classList.add("visually-hidden")}}k.addEventListener("click",e)}).catch(t=>{console.error(t)});function L(t,e){return e.find(o=>o._id.toString()===t)}function ut(t){return t.map(({_id:e,name:s,img:o,category:c,popularity:n,size:a,price:r,is10PercentOff:v})=>{const d=parseInt(n.toString()[0]);return`  <li class="popular-item">
            <span class="product-added">
        <svg class="svg-added" width="12" height="12">
          <use href="${l}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button">
        <svg class="svg-add" width="12" height="12">
          <use href="${l}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${o}" alt="${s}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${s}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${d}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}const x="product-discount";function q(){try{const t=localStorage.getItem(x);return t?JSON.parse(t):[]}catch(t){console.lof(t.message)}}function I(t){localStorage.setItem(x,JSON.stringify(t))}function pt(t=[],e=[]){return t.map(s=>{const o=e.includes(s._id),c=o?"":"is-hidden",n=o?"is-hidden":"";return` <div class="card-product-discount" data-id="${s._id}">
      ${s.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${l}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${s.img}"
            width="105" height="105" alt="${s.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${s.name}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">${s.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${l}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="${l}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}let g=[];const E=document.querySelector(".products-discount");async function gt(){g=(await D()).slice(0,2);const e=q(),s=yt(e),o=pt(g,s);mt(o)}gt();function mt(t){E.insertAdjacentHTML("beforeend",t)}E.addEventListener("click",ft);E.addEventListener("click",vt);function ft(t){const e=t.target.closest(".card-product-btn");if(!e)return;const s=t.target.closest(".card-product-discount"),o=e.querySelectorAll("svg"),c=s.dataset.id,n=q();if(n.find(a=>c===a._id))I(n.filter(a=>c!==a._id));else{const a=g.find(r=>c===r._id);n.push(a),I(n)}o.forEach(a=>{a.classList.toggle("is-hidden")})}function vt(t){const e=t.target.closest(".card-product-discount"),s=t.target.closest(".card-product-btn");if(!e||s)return;const o=e.dataset.id,c=g.find(n=>o===n._id);S(c)}function yt(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),p="feedback-form-state",O=document.getElementById("footer-button"),ht=j(()=>{const t={email:i.elements.email.value};localStorage.setItem(p,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{ht(),f()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(p),i.reset(),f()});O.addEventListener("click",function(){const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,f()}});const f=()=>{const t=i.elements.email.value,e=St(t),s=t.trim()!=="";O.disabled=!(e&&s)},St=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),bt=()=>{const t=localStorage.getItem(p);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,f()}};bt();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",o)});function o(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const h=document.getElementById("scrollToTopBtn"),T=360;window.onscroll=function(){document.body.scrollTop>T||document.documentElement.scrollTop>T?h.classList.add("show"):h.classList.remove("show")};h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
