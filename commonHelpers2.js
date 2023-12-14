import{g as l,S as r,b as F,m as N,s as p,d as P,e as y,f as K,F as tt,a as u,h as D,i as et,j as ot,k as st}from"./assets/footer-964403e3.js";import{P as ct,a as nt}from"./assets/vendor-081dd1c4.js";const at=document.getElementById("removeFromIcon"),V=document.getElementById("modalProduct"),it=document.getElementById("closeModalProductBtn"),$=document.getElementById("addToCartBtn"),I=document.getElementById("removeFrom"),rt=document.getElementById("modalProductImage"),dt=document.getElementById("modalProductName"),lt=document.getElementById("modalProductCategory"),ut=document.getElementById("modalProductSize"),pt=document.getElementById("modalProductPopularity"),mt=document.getElementById("modalProductDescription"),gt=document.getElementById("modalProductPrice"),A=document.querySelector(".modal-overlay"),Y=document.getElementById("scrollToTopBtn");at.classList.add("visually-hidden");function M(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}V.style.display="block",document.body.style.overflow="hidden",A.style.display="flex",window.addEventListener("click",G);const e=l(r);let o=F(e,t);N(o,$,I),$.addEventListener("click",c),I.addEventListener("click",n),Y.style.display="none",rt.src=t.img,dt.textContent=t.name;const s=i=>i.replace(/_/g," ");lt.innerHTML=`Category: <span id="priceText">${s(t.category)}</span>`,document.getElementById("priceText").style.color="black",ut.innerHTML=`Size: <span id="priceTexte">${t.size}</span>`,document.getElementById("priceTexte").style.color="black",pt.innerHTML=`Popularity: <span id="priceTex">${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",mt.textContent=`${t.desc}`,gt.textContent=`$ ${t.price}`;function c(){e.push(t),a()}function n(){e.splice(o,1),a()}function a(){p(r,e),P(),o=F(e,t),y(t._id,o),N(o,$,I)}}function j(){document.body.style.overflow="",V.style.display="none",A.style.display="none",Y.style.display="flex",window.removeEventListener("click",G)}it.addEventListener("click",j);document.addEventListener("keydown",function(t){t.key==="Escape"&&j()});function G(t){t.target===A&&j()}const _=document.querySelector(".list-prod");l(r);function ft(t,e){t.innerHTML=e}async function z(t){const e=vt(t);ft(_,e)}_.addEventListener("click",ht);_.addEventListener("click",yt);function ht(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const c=l(r);let n=c.findIndex(a=>a._id===s);if(n!==-1)c.splice(n,1),n=-1;else{const a=l(tt).find(i=>i._id===s);a&&(c.push(a),n=0)}p(r,c),y(s,n)}function yt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");K(s).then(c=>{M(c)}).catch(c=>{console.error(c)})}function vt(t){return t.map(({_id:e,name:o,img:s,category:c,size:n,price:a,popularity:i,is10PercentOff:d})=>{const m=l(r),v=m.find(f=>f._id===e)?"":"is-hidden",w=m.find(f=>f._id===e)?"is-hidden":"",g=bt(d);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${d}" style="visibility: ${g};">
              <use href="${u}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} width="140" height="140" loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${c.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${n}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${i}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button" aria-label="Buy">
            <svg class="card-product-svg ${v}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${u}#check"></use>
            </svg>
            <svg class="card-product-svg ${w}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${u}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function bt(t){return t===!0?"visible":"hidden"}const E=document.querySelector(".pagination-container"),Pt=document.querySelector("#pagination"),H=document.querySelector(".list-prod-container"),R=document.querySelector(".filter-nomatches-container"),J="firstset";q("first");async function q(t){const{keyword:e,category:o}=t;let s=9;window.matchMedia("(max-width: 767px)").matches?s=6:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(s=8);const c={keyword:e||"",category:o||"",page:1,limit:s},{results:n,totalPages:a}=await D(c);if(a===0?(H.classList.add("visually-hidden"),R.classList.remove("visually-hidden"),E.classList.add("visually-hidden")):(H.classList.remove("visually-hidden"),R.classList.add("visually-hidden"),E.classList.remove("visually-hidden")),p(J,n),z(n),a){let i=1;a>1&&(window.matchMedia("(max-width: 767px)").matches?i=3:window.matchMedia("(min-width: 768px)").matches&&(i=5));const d={totalItems:n.length*a,itemsPerPage:c.limit,visiblePages:i,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new ct(Pt,d).on("afterMove",async g=>{c.page=g.page;const{results:f}=await D(c);p(J,f),z(f)});const v=document.querySelector(".for-add-text-first"),w=document.querySelector(".for-add-text-last");if(v){const g=document.querySelector(".for-add-text-first");g.textContent=1}if(w){const g=document.querySelector(".for-add-text-last");g.textContent=a}a===1?E.classList.add("visually-hidden"):E.classList.remove("visually-hidden")}}class Et{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return nt.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class Lt{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.removeItem("products"),localStorage.removeItem("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const U=document.querySelector(".filter-form"),B=document.querySelector(".select"),L=document.querySelector(".filter-select"),h=document.querySelector(".filter-select-list"),C=new Et,b=new Lt;function St(){et().then(t=>{t.forEach(o=>{const s=document.createElement("li");s.className="filter-select-item",s.dataset.value=o,s.textContent=o.split("_").join(" "),h.append(s)});const e=document.createElement("li");e.className="filter-select-item",e.textContent="Show All",e.dataset.value="",h.append(e),setTimeout(wt,0),L.addEventListener("input",X)})}St();function wt(){const t=h.querySelectorAll(".filter-select-item");B.addEventListener("click",function(){h.classList.toggle("filter-select-list-visible")}),t.forEach(e=>{e.addEventListener("click",function(o){o.stopPropagation(),B.textContent=this.textContent,L.value=this.dataset.value,h.classList.remove("filter-select-list-visible"),X()})})}document.addEventListener("click",function(t){t.target!==B&&h.classList.remove("filter-select-list-visible")});U.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,b.clearLocalStorage(),b.defaultApiOptions()):(o.keyword=e,C.getFoodList(o).then(function(s){b.updateLsWithList(s,o),q(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}U.reset()});function X(){let t=L.value;console.log(L.value);try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),b.defaultApiOptions()):(e.category=t,C.category=t,C.getFoodList(e).then(function(o){b.updateLsWithList(o,e),q(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}}const Q=document.querySelector(".popular-product-list");let Z=5;window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(Z=6);ot(Z).then(t=>{Q.insertAdjacentHTML("beforeend",kt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const c=s.getAttribute("data-js-button"),n=k(c,t);x(n._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let c=s.target;if(c.closest(".popular-card")){const a=c.closest(".popular-card").getAttribute("data-js-product-id");$t(a)}else if(c.closest(".button-add-product")){const n=c.closest(".button-add-product").previousElementSibling,a=n.getAttribute("data-js-button"),i=k(a,t),d=l(r);x(i._id)||(d.push(i),p(r,d),P(),y(i._id,0)),c.closest(".button-add-product").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}else if(c.closest(".button-remove-product")){const n=c.closest(".button-remove-product").getAttribute("data-js-button"),a=k(n,t),i=l(r),d=x(a._id);p(r,i.filter(m=>d._id!==m._id)),P(),y(a._id,-1),c.closest(".button-remove-product").classList.add("visually-hidden"),c.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}Q.addEventListener("click",o)}).catch(t=>{console.error(t)});function $t(t){K(t).then(e=>{M(e)}).catch(e=>{console.error(e)})}function k(t,e){return e.find(s=>s._id.toString()===t)}function x(t){return l(r).find(o=>o._id===t)}function It(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function kt(t){return t.map(({_id:e,name:o,img:s,category:c,popularity:n,size:a,price:i,is10PercentOff:d})=>{const m=parseInt(n.toString()[0]),v=It(o,14);return`  <li class="popular-item">

            <button class="button-remove-product" data-js-button=${e} type="button" aria-label="Delete" >

        <svg class="svg-remove-product" width="12" height="12">
          <use href="${u}#check"></use>
        </svg>
      </button>

      <button class="button-add-product" data-js-button=${e} type="button" aria-label="Add" >

        <svg class="svg-add-product" width="12" height="12">
          <use href="${u}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${v}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${c.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${m}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function xt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),c=s?"":"is-hidden",n=s?"is-hidden":"",a=Bt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
            <button type="button" class="card-product-btn" aria-label="Buy">
            <svg class="card-product-svg ${c}" 
            data-js-discont="${o._id}" width="18" height="18">
            <use href="${u}#check"></use>
          </svg>
          <svg class="card-product-svg ${n}" 
          data-js-discont="${o._id}" width="18" height="18">
          <use href="${u}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let S=[];const O=document.querySelector(".products-discount");async function Ct(){S=(await st()).slice(0,2);const e=l(r),o=jt(e),s=xt(S,o);Tt(s)}Ct();function Tt(t){O.insertAdjacentHTML("beforeend",t)}O.addEventListener("click",At);O.addEventListener("click",Mt);function At(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,c=l(r);if(c.find(n=>s===n._id))p(r,c.filter(n=>s!==n._id)),P(),y(s,-1);else{const n=S.find(a=>s===a._id);c.push(n),p(r,c),P(),y(s,0)}}function Mt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,c=S.find(n=>s===n._id);M(c)}function jt(t=[]){return t.map(e=>e._id)}const T=document.getElementById("scrollToTopBtn"),W=360;window.onscroll=function(){document.body.scrollTop>W||document.documentElement.scrollTop>W?T.classList.add("show"):T.classList.remove("show")};T.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
