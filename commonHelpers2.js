import{g as u,S as i,b as F,m as q,s as p,d as y,e as H,a as m,f as j,h as W,i as G,j as Y}from"./assets/STORAGE-c1684945.js";import{P as X,a as Z,l as tt}from"./assets/vendor-8c378b12.js";document.getElementById("addToCartIcon");const et=document.getElementById("removeFromIcon");et.classList.add("visually-hidden");const $=document.getElementById("modalProduct"),ot=document.getElementById("closeModalProductBtn"),L=document.getElementById("addToCartBtn"),P=document.getElementById("removeFrom"),st=document.getElementById("modalProductImage"),nt=document.getElementById("modalProductName"),ct=document.getElementById("modalProductCategory"),at=document.getElementById("modalProductSize"),rt=document.getElementById("modalProductPopularity"),dt=document.getElementById("modalProductDescription"),it=document.getElementById("modalProductPrice"),lt=document.querySelector(".modal-overlay");const Q=document.getElementById("scrollToTopBtn");function C(t){try{let s=function(){e.push(t),c(e)},n=function(){e.splice(o,1),c(e)},c=function(a){p(i,e),y(),a=F(e,t),q(a,L,P)};if(!t||!t.img){console.error("Product data is missing or incomplete.");return}$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="flex",window.addEventListener("click",B),L.addEventListener("click",s),P.addEventListener("click",n);const e=u(i);let o=F(e,t);q(o,L,P),Q.style.display="none";st.src=t.img,nt.textContent=t.name,ct.innerHTML=`Category: <span id="priceText"> ${t.category.replace(/_/g," ")}</span>`,document.getElementById("priceText").style.color="black",at.innerHTML=`Size: <span id="priceTexte"> ${t.size}</span>`,document.getElementById("priceTexte").style.color="black",rt.innerHTML=`Popularity: <span id="priceTex"> ${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",dt.textContent=`${t.desc}`,it.textContent=`$ ${t.price}`,$.style.display="block",document.body.style.overflow="hidden",document.querySelector(".modal-overlay").style.display="block",window.addEventListener("click",B)}catch{console.log("no proructs")}}function M(){document.body.style.overflow="",$.style.display="none",document.querySelector(".modal-overlay").style.display="none",window.removeEventListener("click",B),Q.style.display="block";}ot.addEventListener("click",M);document.addEventListener("keydown",function(t){t.key==="Escape"&&M()});function B(t){t.target===lt&&M()}const T=document.querySelector(".list-prod"),v="added-item",ut=[];p(v,ut);function pt(t,e){t.innerHTML=e}async function N(t){const e=ft(t);pt(T,e)}const V=u("firstset"),mt=yt(V),D=mt.includes(V._id);T.addEventListener("click",gt);T.addEventListener("click",ht);function gt(t){const e=t.target.closest(".buy-btn");if(!e)return;const o=t.target.closest(".prod-item"),s=e.querySelectorAll("svg"),n=o.getAttribute("data-js-product-id"),c=u(v),a=c.findIndex(r=>r._id===n);if(a!==-1)c.splice(a,1),p(v,c);else{const r=u("firstset").find(d=>d._id===n);r&&(c.push(r),p(v,c))}s.forEach(r=>{r.classList.toggle("is-hidden")})}function ht(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");H(s).then(n=>{C(n)}).catch(n=>{console.error(n)})}function yt(t=[]){return t.map(e=>e._id)}function ft(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:r,is10PercentOff:d})=>{const g=D?"":"is-hidden",w=D?"is-hidden":"",K=vt(d);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: ${K};">
              <use href="${m}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${n.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button">
            <svg class="card-product-svg ${g}" width="18" height="18">
            <use href="${m}#check"></use>
            </svg>
            <svg class="card-product-svg ${w}" width="18" height="18">
            <use href="${m}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function vt(t){return t===!0?"visible":"hidden"}const J=document.querySelector("#pagination"),bt=document.querySelector(".list-prod-container"),Et=document.querySelector(".filter-nomatches-container"),St="firstset";O("first");async function O(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 375px)").matches?s.limit=6:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches&&(s.limit=8);const{results:n,totalPages:c}=await j(s);if(c===0&&(bt.classList.add("visually-hidden"),Et.classList.remove("visually-hidden"),J.classList.add("visually-hidden")),p(St,n),N(n),c>1){const a={totalItems:n.length*c,itemsPerPage:s.limit,visiblePages:5,page:1,centerAlign:!0,usageStatistics:!1};window.matchMedia("(max-width: 375px)").matches?a.visiblePages=3:window.matchMedia("(min-width: 768px)").matches&&(a.visiblePages=5),new X(J,a).on("afterMove",async d=>{s.page=d.page;const{results:g}=await j(s);N(g)})}}class wt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=90}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return Z.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Lt{updateLsWithList(e,o){localStorage.getItem("options")||this.defaultApiOptions(),localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}document.querySelector(".list-prod");const Pt=document.querySelector(".filter-form"),b=document.querySelector(".filter-select"),h=new wt,A=new Lt;W().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o,b.appendChild(s)});const e=It();b.appendChild(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}Pt.addEventListener("submit",function(t){t.preventDefault();const e=t.target.elements.searchQuery.value;console.log("Search Value:",e);try{let o=JSON.parse(localStorage.getItem("options"))||{};o.keyword=e,h.searchQuery=e,console.log("foodApi.searchQuery:",h.searchQuery),h.getFoodList().then(function(s){A.updateLsWithList(s,o);const c=JSON.parse(localStorage.getItem("products")).length;console.log(c),O(o)}).catch(function(s){console.error("Error fetching food list:",s.message)})}catch(o){console.error("Error:",o.message)}});b.addEventListener("change",function(){const t=b.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),A.defaultApiOptions(),document.getElementById("search").value="",categoriesFilter()):(e.category=t,h.category=t,h.getFoodList().then(function(o){A.updateLsWithList(o,e);const n=JSON.parse(localStorage.getItem("products")).length;console.log(e),O(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const R=document.querySelector(".popular-product-list");G(5).then(t=>{R.insertAdjacentHTML("beforeend",Bt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=I(n,t);k(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");kt(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),r=I(a,t),d=u(i);k(r._id)||(d.push(r),p(i,d),y()),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=I(c,t),r=u(i),d=k(a._id);p(i,r.filter(g=>d._id!==g._id)),y(),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}R.addEventListener("click",o)}).catch(t=>{console.error(t)});function kt(t){H(t).then(e=>{C(e)}).catch(e=>{console.error(e)})}function I(t,e){return e.find(s=>s._id.toString()===t)}function k(t){return u(i).find(o=>o._id===t)}function $t(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function Bt(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:r,is10PercentOff:d})=>{const g=parseInt(c.toString()[0]),w=$t(o,14);return`  <li class="popular-item">
            <button class="button-remove-product" data-js-button=${e}><span class="visually-hidden">Remove product</span>
        <svg class="svg-remove-product" width="12" height="12">
          <use href="${m}#check"></use>
        </svg>
      </button>
      <button class="button-add-product" type="button" ><span class="visually-hidden">Add product</span>
        <svg class="svg-add-product" width="12" height="12">
          <use href="${m}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${w}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${g}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function At(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",c=s?"is-hidden":"",a=xt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
      ${o.is10PercentOff&&` <div class="card-product-label">
      <svg>
      <use href="${m}#icon-discount"></use>
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
            <svg class="card-product-svg ${n}" width="18" height="18">
            <use href="${m}#check"></use>
          </svg>
          <svg class="card-product-svg ${c}" width="18" height="18">
          <use href="${m}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function xt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let E=[];const _=document.querySelector(".products-discount");async function Ct(){E=(await Y()).slice(0,2);const e=u(i),o=_t(e),s=At(E,o);Mt(s)}Ct();function Mt(t){_.insertAdjacentHTML("beforeend",t)}_.addEventListener("click",Tt);_.addEventListener("click",Ot);function Tt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount"),s=e.querySelectorAll("svg"),n=o.dataset.id,c=u(i);if(c.find(a=>n===a._id))p(i,c.filter(a=>n!==a._id)),y();else{const a=E.find(r=>n===r._id);c.push(a),p(i,c),y()}s.forEach(a=>{a.classList.toggle("is-hidden")})}function Ot(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=E.find(c=>s===c._id);C(n)}function _t(t=[]){return t.map(e=>e._id)}const l=document.querySelector(".feedback-form"),f="feedback-form-state",U=document.getElementById("footer-button"),Ft=tt(()=>{const t={email:l.elements.email.value};localStorage.setItem(f,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(f);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e}});l.addEventListener("input",()=>{Ft(),S()});l.addEventListener("submit",t=>{t.preventDefault();const e={email:l.elements.email.value};console.log(e),localStorage.removeItem(f),l.reset(),S()});U.addEventListener("click",function(){const t=localStorage.getItem(f);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,S()}});const S=()=>{const t=l.elements.email.value,e=qt(t),o=t.trim()!=="";U.disabled=!(e&&o)},qt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),jt=()=>{const t=localStorage.getItem(f);if(t){const{email:e}=JSON.parse(t);l.elements.email.value=e,S()}};jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.body.style.overflow=t.menu.classList.contains("is-hidden")?"auto":"hidden"}Array.from(t.menu.children).forEach(n=>{n.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const x=document.getElementById("scrollToTopBtn"),z=360;window.onscroll=function(){document.body.scrollTop>z||document.documentElement.scrollTop>z?x.classList.add("show"):x.classList.remove("show")};x.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
