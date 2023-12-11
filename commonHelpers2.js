import{g as p,S as F,b as q,m as N,s as g,d as X,e as Q,a as l,f as j,h as Z,i as tt,j as et}from"./assets/STORAGE-faa10d26.js";import{P as ot,a as st,l as ct}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const nt=document.getElementById("removeFromIcon");nt.classList.add("visually-hidden");const $=document.getElementById("modalProduct"),at=document.getElementById("closeModalProductBtn"),E=document.getElementById("addToCartBtn"),L=document.getElementById("removeFrom"),rt=document.getElementById("modalProductImage"),dt=document.getElementById("modalProductName"),it=document.getElementById("modalProductCategory"),lt=document.getElementById("modalProductSize"),ut=document.getElementById("modalProductPopularity"),pt=document.getElementById("modalProductDescription"),mt=document.getElementById("modalProductPrice"),gt=document.querySelector(".modal-overlay");const V=document.getElementById("scrollToTopBtn");function M(t){try{let s=function(){e.push(t),n(e)},c=function(){e.splice(o,1),n(e)},n=function(a){g(F,e),X(),a=q(e,t),N(a,E,L)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",I),E.addEventListener("click",s),L.addEventListener("click",c);const e=p(F);let o=q(e,t);N(o,E,L),V.style.display="none";rt.src=t.img,dt.textContent=t.name,it.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",lt.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ut.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",pt.textContent=`${t.desc}`,mt.textContent=`$ ${t.price}`,$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",I)}catch{console.log("no proructs")}}function C(){document.body.style.overflow="",$.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",I),V.style.display="block";}at.addEventListener("click",C);document.addEventListener("keydown",function(t){t.key==="Escape"&&C()});function I(t){t.target===gt&&C()}const T=document.querySelector(".list-prod"),D="added-item",G="firstGet";function k(t,e){localStorage.setItem(t,JSON.stringify(e))}function U(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function ht(t,e){t.innerHTML=e}async function J(t){const e=bt(t);ht(T,e)}const v=U(G);console.log(v);const K=vt(v);console.log(K);const B=K.includes(v._id);console.log(B);T.addEventListener("click",ft);T.addEventListener("click",yt);function ft(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const n=U(G);if(console.log(n),n.find(a=>c===a._id)){const a=n.filter(r=>c!==r._id);k(D,a)}else{const a=products.find(r=>c===r._id);n.push(a),k(D,n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function yt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");v.find(c=>s===c._id),Q(s).then(c=>{M(c)}).catch(c=>{console.error(c)})}function vt(t=[]){return t.map(e=>e._id)}function bt(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:r,is10PercentOff:d})=>{const u=B?"":"is-hidden",S=B?"is-hidden":"",Y=St(d);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: ${Y};">
              <use href="${l}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${u}" width="18" height="18">
            <use href="${l}#check"></use>
            </svg>
            <svg class="card-product-svg ${S}" width="18" height="18">
            <use href="${l}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function St(t){return console.log(t),t===!1?"visible":"hidden"}const z=document.querySelector("#pagination"),Et=document.querySelector(".list-prod-container"),Lt=document.querySelector(".filter-nomatches-container");O("first");async function O(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await j(s);if(n===0&&(Et.classList.add("visually-hidden"),Lt.classList.remove("visually-hidden"),z.classList.add("visually-hidden")),k("firstGet",c),J(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new ot(z,a).on("afterMove",async d=>{s.page=d.page;const{results:u}=await j(s);J(u)})}}class wt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return st.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Pt{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const $t=document.querySelector(".filter-form"),f=document.querySelector(".filter-select"),m=new wt,A=new Pt;Z().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,f.appendChild(s)});const e=It();f.appendChild(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}$t.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,m.searchQuery=e,console.log("foodApi.searchQuery:",m.searchQuery),m.getFoodList().then(function(s){A.updateLsWithList(s,o);const n=JSON.parse(localStorage.getItem("products")).length;console.log(n),O(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});f.addEventListener("change",function(){const t=f.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),A.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,m.category=t,m.getFoodList().then(function(o){A.updateLsWithList(o,e);const c=JSON.parse(localStorage.getItem("products")).length;console.log(e),O(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const R=document.querySelector(".popular-product-list");tt(5).then(t=>{R.insertAdjacentHTML("beforeend",At(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const c=s.getAttribute("data-js-button"),n=w(c,t);P(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id");kt(a)}else if(c.closest(".button-add-product")){const n=c.closest(".button-add-product").previousElementSibling,a=n.getAttribute("data-js-button"),r=w(a,t),d=p();P(r._id)||(d.push(r),g(d)),c.closest(".button-add-product").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".button-remove-product")){const n=c.closest(".button-remove-product").getAttribute("data-js-button"),a=w(n,t),r=p(),d=P(a._id);g(r.filter(u=>d._id!==u._id)),c.closest(".button-remove-product").classList.add("visually-hidden"),c.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}R.addEventListener("click",o)}).catch(t=>{console.error(t)});function kt(t){Q(t).then(e=>{M(e)}).catch(e=>{console.error(e)})}function w(t,e){return e.find(s=>s._id.toString()===t)}function P(t){return p().find(o=>o._id===t)}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function At(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:r,is10PercentOff:d})=>{const u=parseInt(n.toString()[0]),S=Bt(o,14);return`  <li class="popular-item">
            <button class="button-remove-product" data-js-button=${e}>
        <svg class="svg-remove-product" width="12" height="12">
          <use href="${l}#check"></use>
        </svg>
      </button>
      <button class="button-add-product" type="button" >
        <svg class="svg-add-product" width="12" height="12">
          <use href="${l}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${S}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${u}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function xt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=Mt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${l}#icon-discount"></use>
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
            <use href="${l}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="${l}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Mt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let y=[];const _=document.querySelector(".products-discount");async function Ct(){y=(await et()).slice(0,2);const e=p(),o=Ft(e),s=xt(y,o);Tt(s)}Ct();function Tt(t){_.insertAdjacentHTML("beforeend",t)}_.addEventListener("click",Ot);_.addEventListener("click",_t);function Ot(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=p();if(n.find(a=>c===a._id))g(n.filter(a=>c!==a._id));else{const a=y.find(r=>c===r._id);n.push(a),g(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function _t(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=y.find(n=>s===n._id);M(c)}function Ft(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),h="feedback-form-state",W=document.getElementById("footer-button"),qt=ct(()=>{const t={email:i.elements.email.value};localStorage.setItem(h,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{qt(),b()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(h),i.reset(),b()});W.addEventListener("click",function(){const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,b()}});const b=()=>{const t=i.elements.email.value,e=Nt(t),o=t.trim()!=="";W.disabled=!(e&&o)},Nt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),jt=()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,b()}};jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const x=document.getElementById("scrollToTopBtn"),H=360;window.onscroll=function(){document.body.scrollTop>H||document.documentElement.scrollTop>H?x.classList.add("show"):x.classList.remove("show")};x.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
