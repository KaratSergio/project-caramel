import{g as R,s as u,a as q,b as Y,d as X,e as Z}from"./assets/get-api-33e9f5ae.js";import{P as tt,a as et,l as ot}from"./assets/vendor-8c378b12.js";const Q="added-item";function m(t){localStorage.setItem(Q,JSON.stringify(t))}function l(){try{const t=localStorage.getItem(Q);return t?JSON.parse(t):[]}catch(t){console.log(t)}}const j=document.getElementById("addToCartIcon"),w=document.getElementById("removeFromIcon");w.classList.add("visually-hidden");const y=document.getElementById("modalProduct"),st=document.getElementById("closeModalProductBtn"),I=document.getElementById("addToCartBtn"),$=document.getElementById("removeFrom"),ct=document.getElementById("modalProductImage"),nt=document.getElementById("modalProductName"),at=document.getElementById("modalProductCategory"),dt=document.getElementById("modalProductSize"),rt=document.getElementById("modalProductPopularity"),it=document.getElementById("modalProductDescription"),lt=document.getElementById("modalProductPrice");let f=!1;function _(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}y.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",k),I.addEventListener("click",()=>{const e=l();e.find(s=>s._id===t._id)||(e.push(t),m(e),A(!0),f=!0)}),$.addEventListener("click",()=>{ut(t,!0),A(!1),f=!1}),ct.src=t.img,nt.textContent=t.name,at.innerHTML=`Category: <span id="priceText">$ ${t.category}</span>`,document.getElementById("priceText").style.color="black",dt.innerHTML=`Size: <span id="priceTexte">$ ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",rt.innerHTML=`Popularity: <span id="priceTex">$ ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",it.textContent=`${t.desc}`,lt.textContent=`$ ${t.price}`,y.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",k)}function ut(t,e=!1){const o=l(),s=o.find(c=>c._id===t._id);e?s&&m(o.filter(c=>c._id!==t._id)):s||(o.push(t),m(o))}function O(){document.body.style.overflow="",y.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",k),f=!1}st.addEventListener("click",O);document.addEventListener("keydown",function(t){t.key==="Escape"&&O()});function k(t){t.target===y&&O()}function A(t){const e=l();t?(j.classList.add("added-to-cart"),w.classList.remove("added-to-cart")):(j.classList.remove("added-to-cart"),w.classList.add("added-to-cart")),e.length>0?($.classList.remove("visually-hidden"),I.classList.add("visually-hidden")):($.classList.add("visually-hidden"),I.classList.remove("visually-hidden"))}document.addEventListener("DOMContentLoaded",()=>{l().find(o=>o._id===product._id)&&(f=!0),A(f)});const T=document.querySelector(".list-prod"),D="added-item",G="firstGet";function B(t,e){localStorage.setItem(t,JSON.stringify(e))}function V(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e)}}function pt(t,e){t.innerHTML=e}async function J(t){const e=ht(t);pt(T,e)}const S=V(G);console.log(S);const U=ft(S);console.log(U);const x=U.includes(S._id);console.log(x);T.addEventListener("click",mt);T.addEventListener("click",gt);function mt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),c=o.getAttribute("data-js-product-id");console.log(c);const n=V(G);if(console.log(n),n.find(a=>c===a._id)){const a=n.filter(d=>c!==d._id);B(D,a)}else{const a=products.find(d=>c===d._id);n.push(a),B(D,n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function gt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");S.find(c=>s===c._id),R(s).then(c=>{_(c)}).catch(c=>{console.error(c)})}function ft(t=[]){return t.map(e=>e._id)}function ht(t){const e=x?"":"is-hidden",o=x?"is-hidden":"";return t.map(({_id:s,name:c,img:n,category:a,size:d,price:r,popularity:p})=>`
        <li class="prod-item" data-js-product-id=${s}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href="${u}#shopping-cart"></use>
            </svg>
            <img class="prod-img" src=${n} alt=${c} loading="lazy">
          </div>
          <h3 class="title-prod">${c}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${d}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${p}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${r}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${e}" width="18" height="18">
            <use href="${u}#check"></use>
            </svg>
            <svg class="card-product-svg ${o}" width="18" height="18">
            <use href="${u}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `).join("")}const yt=document.querySelector("#pagination"),vt=document.querySelector(".list-prod-container");F("first");async function F(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:c,totalPages:n}=await q(s);if(n===0&&(vt.innerHTML=`<div class="basket-text-container">
      <p class="basket-text-bold">
        Nothing was found for the selected <span class="color">filters...</span>
      </p>
      <p class="basket-text">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
      </p>
    </div>`),B("firstGet",c),J(c),n>1){const a={totalItems:c.length*n,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new tt(yt,a).on("afterMove",async r=>{s.page=r.page;const{results:p}=await q(s);J(p)})}}class bt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return et.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class St{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const Lt=document.querySelector(".filter-form"),v=document.querySelector(".filter-select"),g=new bt,C=new St;Y().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,v.appendChild(s)});const e=Et();v.appendChild(e)});function Et(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}Lt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,g.searchQuery=e,console.log("foodApi.searchQuery:",g.searchQuery),g.getFoodList().then(function(s){C.updateLsWithList(s,o);const n=JSON.parse(localStorage.getItem("products")).length;console.log(n),F(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});v.addEventListener("change",function(){const t=v.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),C.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,g.category=t,g.getFoodList().then(function(o){C.updateLsWithList(o,e);const c=JSON.parse(localStorage.getItem("products")).length;console.log(e),F(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const z=document.querySelector(".popular-list");X(5).then(t=>{z.insertAdjacentHTML("beforeend",It(t)),[...document.getElementsByClassName("product-added")].forEach(s=>{const c=s.getAttribute("data-js-btn"),n=E(c,t);P(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id");Pt(a)}else if(c.closest(".btn-add")){const n=c.closest(".btn-add").previousElementSibling,a=n.getAttribute("data-js-btn"),d=E(a,t),r=l();P(d._id)||(r.push(d),m(r)),c.closest(".btn-add").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".product-added")){const n=c.closest(".product-added").getAttribute("data-js-btn"),a=E(n,t),d=l(),r=P(a._id);m(d.filter(p=>r._id!==p._id)),c.closest(".product-added").classList.add("visually-hidden"),c.closest(".product-added").nextElementSibling.classList.remove("visually-hidden")}}z.addEventListener("click",o)}).catch(t=>{console.error(t)});function Pt(t){R(t).then(e=>{_(e)}).catch(e=>{console.error(e)})}function E(t,e){return e.find(s=>s._id.toString()===t)}function P(t){return l().find(o=>o._id===t)}function wt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function It(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:d,is10PercentOff:r})=>{const p=parseInt(n.toString()[0]),W=wt(o,14);return`  <li class="popular-item">
            <span class="product-added" data-js-btn=${e}>
        <svg class="svg-added" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </span>
      <button class="btn-add" type="button" >
        <svg class="svg-add" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${W}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function $t(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=kt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
`}).join("")}function kt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let b=[];const N=document.querySelector(".products-discount");async function At(){b=(await Z()).slice(0,2);const e=l(),o=Mt(e),s=$t(b,o);Bt(s)}At();function Bt(t){N.insertAdjacentHTML("beforeend",t)}N.addEventListener("click",xt);N.addEventListener("click",Ct);function xt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),c=o.dataset.id,n=l();if(n.find(a=>c===a._id))m(n.filter(a=>c!==a._id));else{const a=b.find(d=>c===d._id);n.push(a),m(n)}s.forEach(a=>{a.classList.toggle("is-hidden")})}function Ct(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=b.find(n=>s===n._id);_(c)}function Mt(t=[]){return t.map(e=>e._id)}const i=document.querySelector(".feedback-form"),h="feedback-form-state",K=document.getElementById("footer-button"),_t=ot(()=>{const t={email:i.elements.email.value};localStorage.setItem(h,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e}});i.addEventListener("input",()=>{_t(),L()});i.addEventListener("submit",t=>{t.preventDefault();const e={email:i.elements.email.value};console.log(e),localStorage.removeItem(h),i.reset(),L()});K.addEventListener("click",function(){const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,L()}});const L=()=>{const t=i.elements.email.value,e=Ot(t),o=t.trim()!=="";K.disabled=!(e&&o)},Ot=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Tt=()=>{const t=localStorage.getItem(h);if(t){const{email:e}=JSON.parse(t);i.elements.email.value=e,L()}};Tt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const M=document.getElementById("scrollToTopBtn"),H=360;window.onscroll=function(){document.body.scrollTop>H||document.documentElement.scrollTop>H?M.classList.add("show"):M.classList.remove("show")};M.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
