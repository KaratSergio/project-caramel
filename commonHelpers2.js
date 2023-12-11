import{g as l,a as m,b as V,s as u,d as j,e as Z,f as tt,h as et}from"./assets/STORAGE-6f9c6033.js";import{P as ot,a as st,l as ct}from"./assets/vendor-8c378b12.js";const D=document.getElementById("addToCartIcon"),w=document.getElementById("removeFromIcon");w.classList.add("visually-hidden");const I=document.getElementById("modalProduct"),nt=document.getElementById("closeModalProductBtn"),$=document.getElementById("addToCartBtn"),k=document.getElementById("removeFrom"),at=document.getElementById("modalProductImage"),dt=document.getElementById("modalProductName"),rt=document.getElementById("modalProductCategory"),it=document.getElementById("modalProductSize"),lt=document.getElementById("modalProductPopularity"),ut=document.getElementById("modalProductDescription"),pt=document.getElementById("modalProductPrice"),mt=document.querySelector(".modal-overlay");const G=document.getElementById("scrollToTopBtn");let f=!1;function T(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}I.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",B),G.style.display="none";$.addEventListener("click",()=>{const e=l();e.find(s=>s._id===t._id)||(e.push(t),m(e),A(!0),f=!0)}),k.addEventListener("click",()=>{gt(t,!0),A(!1),f=!1}),at.src=t.img,dt.textContent=t.name,rt.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",it.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",lt.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",ut.textContent=`${t.desc}`,pt.textContent=`$ ${t.price}`,I.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",B)}function gt(t,e=!1){const o=l(),s=o.find(c=>c._id===t._id);e?s&&m(o.filter(c=>c._id!==t._id)):s||(o.push(t),m(o))}function O(){document.body.style.overflow="",I.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",B),f=!1,G.style.display="block";}nt.addEventListener("click",O);document.addEventListener("keydown",function(t){t.key==="Escape"&&O()});function B(t){t.target===mt&&O()}function A(t){const e=l();t?(D.classList.add("added-to-cart"),w.classList.remove("added-to-cart")):(D.classList.remove("added-to-cart"),w.classList.add("added-to-cart")),e.length>0?(k.classList.remove("visually-hidden"),$.classList.add("visually-hidden")):(k.classList.add("visually-hidden"),$.classList.remove("visually-hidden"))}document.addEventListener("DOMContentLoaded",()=>{l().find(o=>o._id===product._id)&&(f=!0),A(f)});const F=document.querySelector(".list-prod"),J="added-item",U="firstGet";function C(t,e){localStorage.setItem(t,JSON.stringify(e))}function W(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function ft(t,e){t.innerHTML=e}async function z(t){const e=bt(t);ft(F,e)}const b=W(U);console.log(b);const K=vt(b);console.log(K);const _=K.includes(b._id);console.log(_);F.addEventListener("click",ht);F.addEventListener("click",yt);function ht(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const n=W(U);if(console.log(n),n.find(a=>c===a._id)){const a=n.filter(d=>c!==d._id);C(J,a)}else{const a=products.find(d=>c===d._id);n.push(a),C(J,n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function yt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");b.find(c=>s===c._id),V(s).then(c=>{T(c)}).catch(c=>{console.error(c)})}function vt(t=[]){return t.map(e=>e._id)}function bt(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:d,is10PercentOff:r})=>{const p=_?"":"is-hidden",S=_?"is-hidden":"",X=Lt(r);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: ${X};">
              <use href="${u}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${d}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
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
      `}).join("")}function Lt(t){return console.log(t),t===!1?"visible":"hidden"}const H=document.querySelector("#pagination"),St=document.querySelector(".list-prod-container"),Et=document.querySelector(".filter-nomatches-container");q("first");async function q(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await j(s);if(n===0&&(St.classList.add("visually-hidden"),Et.classList.remove("visually-hidden"),H.classList.add("visually-hidden")),C("firstGet",c),z(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new ot(H,a).on("afterMove",async r=>{s.page=r.page;const{results:p}=await j(s);z(p)})}}class Pt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return st.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class wt{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const It=document.querySelector(".filter-form"),y=document.querySelector(".filter-select"),g=new Pt,M=new wt;Z().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,y.appendChild(s)});const e=$t();y.appendChild(e)});function $t(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}It.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,g.searchQuery=e,console.log("foodApi.searchQuery:",g.searchQuery),g.getFoodList().then(function(s){M.updateLsWithList(s,o);const n=JSON.parse(localStorage.getItem("products")).length;console.log(n),q(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});y.addEventListener("change",function(){const t=y.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),M.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,g.category=t,g.getFoodList().then(function(o){M.updateLsWithList(o,e);const c=JSON.parse(localStorage.getItem("products")).length;console.log(e),q(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const R=document.querySelector(".popular-product-list");tt(5).then(t=>{R.insertAdjacentHTML("beforeend",At(t)),[...document.getElementsByClassName("btn-remove-product")].forEach(s=>{const c=s.getAttribute("data-js-btn"),n=E(c,t);P(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id");kt(a)}else if(c.closest(".btn-add-product")){const n=c.closest(".btn-add-product").previousElementSibling,a=n.getAttribute("data-js-btn"),d=E(a,t),r=l();P(d._id)||(r.push(d),m(r)),c.closest(".btn-add-product").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".btn-remove-product")){const n=c.closest(".btn-remove-product").getAttribute("data-js-btn"),a=E(n,t),d=l(),r=P(a._id);m(d.filter(p=>r._id!==p._id)),c.closest(".btn-remove-product").classList.add("visually-hidden"),c.closest(".btn-remove-product").nextElementSibling.classList.remove("visually-hidden")}}R.addEventListener("click",o)}).catch(t=>{console.error(t)});function kt(t){V(t).then(e=>{T(e)}).catch(e=>{console.error(e)})}function E(t,e){return e.find(s=>s._id.toString()===t)}function P(t){return l().find(o=>o._id===t)}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function At(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:d,is10PercentOff:r})=>{const p=parseInt(n.toString()[0]),S=Bt(o,14);return`  <li class="popular-item">
            <button class="btn-remove-product" data-js-btn=${e}>
        <svg class="svg-remove-product" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </button>
      <button class="btn-add-product" type="button" >
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
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function Ct(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=_t(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
        <h3 class="card-product-title">${a}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" >
            <svg class="card-product-svg ${c}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function _t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let v=[];const N=document.querySelector(".products-discount");async function Mt(){v=(await et()).slice(0,2);const e=l(),o=Ft(e),s=Ct(v,o);xt(s)}Mt();function xt(t){N.insertAdjacentHTML("beforeend",t)}N.addEventListener("click",Tt);N.addEventListener("click",Ot);function Tt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=l();if(n.find(a=>c===a._id))m(n.filter(a=>c!==a._id));else{const a=v.find(d=>c===d._id);n.push(a),m(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function Ot(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=v.find(n=>s===n._id);T(c)}function Ft(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),h="feedback-form-state",Y=document.getElementById("footer-button"),qt=ct(()=>{const t={email:i.elements.email.value};localStorage.setItem(h,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{qt(),L()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(h),i.reset(),L()});Y.addEventListener("click",function(){const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,L()}});const L=()=>{const t=i.elements.email.value,e=Nt(t),o=t.trim()!=="";Y.disabled=!(e&&o)},Nt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),jt=()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,L()}};jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const x=document.getElementById("scrollToTopBtn"),Q=360;window.onscroll=function(){document.body.scrollTop>Q||document.documentElement.scrollTop>Q?x.classList.add("show"):x.classList.remove("show")};x.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
