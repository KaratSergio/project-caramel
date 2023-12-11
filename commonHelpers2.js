import{g as Z,a as G,s as p,b as q,d as tt,e as et}from"./assets/get-api-9e2707fa.js";import{a as ot,P as st,l as ct}from"./assets/vendor-8c378b12.js";class nt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return ot.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class at{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}function D(t){const{_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r}=t;return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="./images/icons.svg#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
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
      `}const P=document.querySelector(".list-prod"),rt=document.querySelector(".filter-form"),y=document.querySelector(".filter-select"),g=new nt,I=new at;Z().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,y.appendChild(s)});const e=dt();y.appendChild(e)});function dt(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}rt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,g.searchQuery=e,console.log("foodApi.searchQuery:",g.searchQuery),g.getFoodList().then(function(s){I.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")),n=c.length;console.log(n),V(c)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});y.addEventListener("change",function(){const t=y.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),I.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,g.category=t,g.getFoodList().then(function(o){I.updateLsWithList(o,e);const s=JSON.parse(localStorage.getItem("products")),c=s.length;V(s)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});function V(t){let e=1;const o=1,s=90,c=JSON.parse(localStorage.getItem("products"));P.innerHTML="";let n,a;isNaN((o-1)*s)?n=0:n=(o-1)*s,a=+e*+s,console.log(n),console.log(a);try{if(c&&t>=1){let r=(t-1)*8;const d=c.slice(n+r,a+r);for(let i=0;i<d.length;i+=1){const E=D(d[i]);P.insertAdjacentHTML("beforeend",E)}}else if(c&&c.length>0){const r=c.slice(n,a);for(let d=0;d<r.length;d+=1){const i=D(r[d]);P.insertAdjacentHTML("beforeend",i)}}}catch(r){console.log(r)}}const K="added-item";function m(t){localStorage.setItem(K,JSON.stringify(t))}function u(){try{const t=localStorage.getItem(K);return t?JSON.parse(t):[]}catch(t){console.log(t)}}const J=document.getElementById("addToCartIcon"),k=document.getElementById("removeFromIcon");k.classList.add("visually-hidden");const v=document.getElementById("modalProduct"),it=document.getElementById("closeModalProductBtn"),A=document.getElementById("addToCartBtn"),B=document.getElementById("removeFrom"),lt=document.getElementById("modalProductImage"),ut=document.getElementById("modalProductName"),pt=document.getElementById("modalProductCategory"),mt=document.getElementById("modalProductSize"),gt=document.getElementById("modalProductPopularity"),ft=document.getElementById("modalProductDescription"),ht=document.getElementById("modalProductPrice");let f=!1;function x(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}v.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",C),A.addEventListener("click",()=>{const e=u();e.find(s=>s._id===t._id)||(e.push(t),m(e),M(!0),f=!0)}),B.addEventListener("click",()=>{yt(t,!0),M(!1),f=!1}),lt.src=t.img,ut.textContent=t.name,pt.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",mt.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",gt.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",ft.textContent=`${t.desc}`,ht.textContent=`$ ${t.price}`,v.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",C)}function yt(t,e=!1){const o=u(),s=o.find(c=>c._id===t._id);e?s&&m(o.filter(c=>c._id!==t._id)):s||(o.push(t),m(o))}function N(){document.body.style.overflow="",v.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",C),f=!1}it.addEventListener("click",N);document.addEventListener("keydown",function(t){t.key==="Escape"&&N()});function C(t){t.target===v&&N()}function M(t){const e=u();t?(J.classList.add("added-to-cart"),k.classList.remove("added-to-cart")):(J.classList.remove("added-to-cart"),k.classList.add("added-to-cart")),e.length>0?(B.classList.remove("visually-hidden"),A.classList.add("visually-hidden")):(B.classList.add("visually-hidden"),A.classList.remove("visually-hidden"))}document.addEventListener("DOMContentLoaded",()=>{u().find(o=>o._id===product._id)&&(f=!0),M(f)});const F=document.querySelector(".list-prod"),z="added-item",U="firstGet";function T(t,e){localStorage.setItem(t,JSON.stringify(e))}function W(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function vt(t,e){t.innerHTML=e}async function H(t){const e=Et(t);vt(F,e)}const S=W(U);console.log(S);const Y=Lt(S);console.log(Y);const _=Y.includes(S._id);console.log(_);F.addEventListener("click",bt);F.addEventListener("click",St);function bt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const n=W(U);if(console.log(n),n.find(a=>c===a._id)){const a=n.filter(r=>c!==r._id);T(z,a)}else{const a=products.find(r=>c===r._id);n.push(a),T(z,n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function St(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");S.find(c=>s===c._id),G(s).then(c=>{x(c)}).catch(c=>{console.error(c)})}function Lt(t=[]){return t.map(e=>e._id)}function Et(t){const e=_?"":"is-hidden",o=_?"is-hidden":"";return t.map(({_id:s,name:c,img:n,category:a,size:r,price:d,popularity:i})=>`
        <li class="prod-item" data-js-product-id=${s}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="${p}#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${n} alt=${c} loading="lazy">
          </div>
          <h3 class="title-prod">${c}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${i}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${d}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${e}" width="18" height="18">
            <use href="${p}#check"></use>
            </svg>
            <svg class="card-product-svg ${o}" width="18" height="18">
            <use href="${p}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `).join("")}const Pt=document.querySelector("#pagination"),$t=document.querySelector(".list-prod-container");wt("first");async function wt(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await q(s);if(n===0&&($t.innerHTML=`<div class="basket-text-container">
    <p class="basket-text-bold">
      Nothing was found for the selected <span class="color">filters...</span>
    </p>
    <p class="basket-text">
      Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`),T("firstGet",c),H(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,centerAlign:!0,usageStatistics:!1};new st(Pt,a).on("afterMove",async d=>{s.page=d.page;const{results:i}=await q(s);H(i)})}}const R=document.querySelector(".popular-list");tt(5).then(t=>{R.insertAdjacentHTML("beforeend",At(t)),[...document.getElementsByClassName("product-added")].forEach(s=>{const c=s.getAttribute("data-js-btn"),n=$(c,t);w(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id");It(a)}else if(c.closest(".btn-add")){const n=c.closest(".btn-add").previousElementSibling,a=n.getAttribute("data-js-btn"),r=$(a,t),d=u();w(r._id)||(d.push(r),m(d)),c.closest(".btn-add").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".product-added")){const n=c.closest(".product-added").getAttribute("data-js-btn"),a=$(n,t),r=u(),d=w(a._id);m(r.filter(i=>d._id!==i._id)),c.closest(".product-added").classList.add("visually-hidden"),c.closest(".product-added").nextElementSibling.classList.remove("visually-hidden")}}R.addEventListener("click",o)}).catch(t=>{console.error(t)});function It(t){G(t).then(e=>{x(e)}).catch(e=>{console.error(e)})}function $(t,e){return e.find(s=>s._id.toString()===t)}function w(t){return u().find(o=>o._id===t)}function kt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function At(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:r,is10PercentOff:d})=>{const i=parseInt(n.toString()[0]),E=kt(o,14);return`  <li class="popular-item">
            <span class="product-added" data-js-btn=${e}>
        <svg class="svg-added" width="12" height="12">
          <use href="${p}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button" >
        <svg class="svg-add" width="12" height="12">
          <use href="${p}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${E}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${i}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function Bt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=Ct(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${p}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${a}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${p}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="${p}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Ct(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let b=[];const j=document.querySelector(".products-discount");async function Mt(){b=(await et()).slice(0,2);const e=u(),o=xt(e),s=Bt(b,o);Tt(s)}Mt();function Tt(t){j.insertAdjacentHTML("beforeend",t)}j.addEventListener("click",_t);j.addEventListener("click",Ot);function _t(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=u();if(n.find(a=>c===a._id))m(n.filter(a=>c!==a._id));else{const a=b.find(r=>c===r._id);n.push(a),m(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function Ot(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=b.find(n=>s===n._id);x(c)}function xt(t=[]){return t.map(e=>e._id)}const l=document.querySelector(".feedback-form"),h="feedback-form-state",X=document.getElementById("footer-button"),Nt=ct(()=>{const t={email:l.elements.email.value};localStorage.setItem(h,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e}});l.addEventListener("input",()=>{Nt(),L()});l.addEventListener("submit",t=>{t.preventDefault();const e={email:l.elements.email.value};console.log(e),localStorage.removeItem(h),l.reset(),L()});X.addEventListener("click",function(){const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,L()}});const L=()=>{const t=l.elements.email.value,e=Ft(t),o=t.trim()!=="";X.disabled=!(e&&o)},Ft=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),jt=()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,L()}};jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const O=document.getElementById("scrollToTopBtn"),Q=360;window.onscroll=function(){document.body.scrollTop>Q||document.documentElement.scrollTop>Q?O.classList.add("show"):O.classList.remove("show")};O.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
