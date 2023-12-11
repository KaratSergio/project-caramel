import{g as l,S as N,b as j,m as D,s as h,d as et,e as U,a as u,f as J,h as ot,i as st,j as ct}from"./assets/STORAGE-f69de671.js";import{P as nt,a as dt,l as at}from"./assets/vendor-8c378b12.js";const z=document.getElementById("addToCartIcon"),I=document.getElementById("removeFromIcon");I.classList.add("visually-hidden");const $=document.getElementById("modalProduct"),rt=document.getElementById("closeModalProductBtn"),m=document.getElementById("addToCartBtn"),g=document.getElementById("removeFrom"),it=document.getElementById("modalProductImage"),lt=document.getElementById("modalProductName"),ut=document.getElementById("modalProductCategory"),pt=document.getElementById("modalProductSize"),mt=document.getElementById("modalProductPopularity"),gt=document.getElementById("modalProductDescription"),ht=document.getElementById("modalProductPrice"),ft=document.querySelector(".modal-overlay");const K=document.getElementById("scrollToTopBtn");function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",k),m.addEventListener("click",s),g.addEventListener("click",c);const e=l(N);let o=j(e,t);D(o,m,g);function s(){e.push(t),d(e)}function c(){e.splice(o,1),d(e)}function d(n){h(N,e),et(),n=j(e,t),D(n,m,g)}K.style.display="none";m.addEventListener("click",()=>{const n=l();n.find(r=>r._id===t._id)||(n.push(t),h(n),A(!0),isProductAdded=!0)}),g.addEventListener("click",()=>{manageCart(t,!0),A(!1),isProductAdded=!1}),it.src=t.img,lt.textContent=t.name,ut.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",pt.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",mt.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",gt.textContent=`${t.desc}`,ht.textContent=`$ ${t.price}`,$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",k)}function _(){document.body.style.overflow="",$.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",k),isProductAdded=!1,K.style.display="block";}rt.addEventListener("click",_);document.addEventListener("keydown",function(t){t.key==="Escape"&&_()});function k(t){t.target===ft&&_()}function A(t){const e=l();t?(z.classList.add("added-to-cart"),I.classList.remove("added-to-cart")):(z.classList.remove("added-to-cart"),I.classList.add("added-to-cart")),e.length>0?(g.classList.remove("visually-hidden"),m.classList.add("visually-hidden")):(g.classList.add("visually-hidden"),m.classList.remove("visually-hidden"))}document.addEventListener("DOMContentLoaded",()=>{l().find(o=>o._id===product._id)&&(isProductAdded=!0),A(isProductAdded)});const O=document.querySelector(".list-prod"),R="added-item",W="firstGet";function B(t,e){localStorage.setItem(t,JSON.stringify(e))}function Y(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function yt(t,e){t.innerHTML=e}async function H(t){const e=Et(t);yt(O,e)}const L=Y(W);console.log(L);const X=Lt(L);console.log(X);const C=X.includes(L._id);console.log(C);O.addEventListener("click",vt);O.addEventListener("click",bt);function vt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const d=Y(W);if(console.log(d),d.find(n=>c===n._id)){const n=d.filter(a=>c!==a._id);B(R,n)}else{const n=products.find(a=>c===a._id);d.push(n),B(R,d)}s.forEach(n=>{n.classList.toggle("is-hidden")})}function bt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");L.find(c=>s===c._id),U(s).then(c=>{T(c)}).catch(c=>{console.error(c)})}function Lt(t=[]){return t.map(e=>e._id)}function Et(t){return t.map(({_id:e,name:o,img:s,category:c,size:d,price:n,popularity:a,is10PercentOff:r})=>{const p=C?"":"is-hidden",S=C?"is-hidden":"",tt=St(r);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: ${tt};">
              <use href="${u}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${d}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${a}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${n}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${p}" width="18" height="18">
            <use href="${u}#check"></use>
            </svg>
            <svg class="card-product-svg ${S}" width="18" height="18">
            <use href="${u}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function St(t){return console.log(t),t===!1?"visible":"hidden"}const Q=document.querySelector("#pagination"),Pt=document.querySelector(".list-prod-container"),wt=document.querySelector(".filter-nomatches-container");F("first");async function F(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:d}=await J(s);if(d===0&&(Pt.classList.add("visually-hidden"),wt.classList.remove("visually-hidden"),Q.classList.add("visually-hidden")),B("firstGet",c),H(c),d>1){const n={totalItems:c.length*d,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?n.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(n.visiblePages=5),new nt(Q,n).on("afterMove",async r=>{s.page=r.page;const{results:p}=await J(s);H(p)})}}class It{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return dt.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class $t{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const kt=document.querySelector(".filter-form"),v=document.querySelector(".filter-select"),f=new It,M=new $t;ot().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,v.appendChild(s)});const e=At();v.appendChild(e)});function At(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}kt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,f.searchQuery=e,console.log("foodApi.searchQuery:",f.searchQuery),f.getFoodList().then(function(s){M.updateLsWithList(s,o);const d=JSON.parse(localStorage.getItem("products")).length;console.log(d),F(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});v.addEventListener("change",function(){const t=v.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),M.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,f.category=t,f.getFoodList().then(function(o){M.updateLsWithList(o,e);const c=JSON.parse(localStorage.getItem("products")).length;console.log(e),F(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const V=document.querySelector(".popular-product-list");st(5).then(t=>{V.insertAdjacentHTML("beforeend",Mt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const c=s.getAttribute("data-js-button"),d=P(c,t);w(d._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const n=c.closest(".popular-card").getAttribute("data-js-product-id");Bt(n)}else if(c.closest(".button-add-product")){const d=c.closest(".button-add-product").previousElementSibling,n=d.getAttribute("data-js-button"),a=P(n,t),r=l();w(a._id)||(r.push(a),h(r)),c.closest(".button-add-product").classList.add("visually-hidden"),d.classList.remove("visually-hidden")}else if(c.closest(".button-remove-product")){const d=c.closest(".button-remove-product").getAttribute("data-js-button"),n=P(d,t),a=l(),r=w(n._id);h(a.filter(p=>r._id!==p._id)),c.closest(".button-remove-product").classList.add("visually-hidden"),c.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}V.addEventListener("click",o)}).catch(t=>{console.error(t)});function Bt(t){U(t).then(e=>{T(e)}).catch(e=>{console.error(e)})}function P(t,e){return e.find(s=>s._id.toString()===t)}function w(t){return l().find(o=>o._id===t)}function Ct(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function Mt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:d,size:n,price:a,is10PercentOff:r})=>{const p=parseInt(d.toString()[0]),S=Ct(o,14);return`  <li class="popular-item">
            <button class="button-remove-product" data-js-button=${e}>
        <svg class="svg-remove-product" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </button>
      <button class="button-add-product" type="button" >
        <svg class="svg-add-product" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
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
              <p class="popular-card-text">Size: <span class="popular-text">${n}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function xt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",d=s?"is-hidden":"",n=Tt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${u}#icon-discount"></use>
      </svg>
      </div>`}

    <div class="card-product-wrapper">
        <img class="card-product-img"
            src="${o.img}"
            width="105" height="105" alt="${o.desc}" />
    </div>
    <div class="card-product-info">
        <h3 class="card-product-title">${n}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${d}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Tt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let b=[];const q=document.querySelector(".products-discount");async function _t(){b=(await ct()).slice(0,2);const e=l(),o=Nt(e),s=xt(b,o);Ot(s)}_t();function Ot(t){q.insertAdjacentHTML("beforeend",t)}q.addEventListener("click",Ft);q.addEventListener("click",qt);function Ft(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,d=l();if(d.find(n=>c===n._id))h(d.filter(n=>c!==n._id));else{const n=b.find(a=>c===a._id);d.push(n),h(d)}s.forEach(n=>{n.classList.toggle("is-hidden")})}function qt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=b.find(d=>s===d._id);T(c)}function Nt(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),y="feedback-form-state",Z=document.getElementById("footer-button"),jt=at(()=>{const t={email:i.elements.email.value};localStorage.setItem(y,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{jt(),E()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(y),i.reset(),E()});Z.addEventListener("click",function(){const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,E()}});const E=()=>{const t=i.elements.email.value,e=Dt(t),o=t.trim()!=="";Z.disabled=!(e&&o)},Dt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Jt=()=>{const t=localStorage.getItem(y);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,E()}};Jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const x=document.getElementById("scrollToTopBtn"),G=360;window.onscroll=function(){document.body.scrollTop>G||document.documentElement.scrollTop>G?x.classList.add("show"):x.classList.remove("show")};x.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
