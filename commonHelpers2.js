import{g as u,S as d,b as D,m as J,s as m,d as w,e as v,f as Y,F as ot,a as p,h as R,i as st,j as nt,k as ct,o as at}from"./assets/STORAGE-b7ed2af5.js";import{P as it,a as dt,l as rt}from"./assets/vendor-8c378b12.js";const lt=document.getElementById("removeFromIcon"),G=document.getElementById("modalProduct"),ut=document.getElementById("closeModalProductBtn"),B=document.getElementById("addToCartBtn"),x=document.getElementById("removeFrom"),pt=document.getElementById("modalProductImage"),mt=document.getElementById("modalProductName"),gt=document.getElementById("modalProductCategory"),ft=document.getElementById("modalProductSize"),ht=document.getElementById("modalProductPopularity"),yt=document.getElementById("modalProductDescription"),vt=document.getElementById("modalProductPrice"),_=document.querySelector(".modal-overlay"),X=document.getElementById("scrollToTopBtn");lt.classList.add("visually-hidden");function j(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}G.style.display="block",document.body.style.overflow="hidden",_.style.display="flex",window.addEventListener("click",Z);const e=u(d);let o=D(e,t);J(o,B,x),B.addEventListener("click",n),x.addEventListener("click",c),X.style.display="none",pt.src=t.img,mt.textContent=t.name;const s=i=>i.replace(/_/g," ");gt.innerHTML=`Category: <span id="priceText">${s(t.category)}</span>`,document.getElementById("priceText").style.color="black",ft.innerHTML=`Size: <span id="priceTexte">${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ht.innerHTML=`Popularity: <span id="priceTex">${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",yt.textContent=`${t.desc}`,vt.textContent=`$ ${t.price}`;function n(){e.push(t),a()}function c(){e.splice(o,1),a()}function a(){m(d,e),w(),o=D(e,t),v(t._id,o),J(o,B,x)}}function q(){document.body.style.overflow="",G.style.display="none",_.style.display="none",X.style.display="flex",window.removeEventListener("click",Z)}ut.addEventListener("click",q);document.addEventListener("keydown",function(t){t.key==="Escape"&&q()});function Z(t){t.target===_&&q()}const O=document.querySelector(".list-prod");u(d);function bt(t,e){t.innerHTML=e}async function z(t){const e=Lt(t);bt(O,e)}O.addEventListener("click",St);O.addEventListener("click",wt);function St(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=u(d);let c=n.findIndex(a=>a._id===s);if(c!==-1)n.splice(c,1),c=-1;else{const a=u(ot).find(i=>i._id===s);a&&(n.push(a),c=0)}m(d,n),v(s,c)}function wt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Y(s).then(n=>{j(n)}).catch(n=>{console.error(n)})}function Lt(t){return t.map(({_id:e,name:o,img:s,category:n,size:c,price:a,popularity:i,is10PercentOff:l})=>{const g=u(d),b=g.find(h=>h._id===e)?"":"is-hidden",I=g.find(h=>h._id===e)?"is-hidden":"",f=Et(l);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${l}" style="visibility: ${f};">
              <use href="${p}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} width="140" height="140" loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${n.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${c}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${i}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${a}</p>
            <button class="buy-btn" type="button" aria-label="Buy">
            <svg class="card-product-svg ${b}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${p}#check"></use>
            </svg>
            <svg class="card-product-svg ${I}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${p}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function Et(t){return t===!0?"visible":"hidden"}const E=document.querySelector(".pagination-container"),Pt=document.querySelector("#pagination"),H=document.querySelector(".list-prod-container"),V=document.querySelector(".filter-nomatches-container"),U="firstset";F("first");async function F(t){const{keyword:e,category:o}=t;let s=9;window.matchMedia("(max-width: 767px)").matches?s=6:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(s=8);const n={keyword:e||"",category:o||"",page:1,limit:s},{results:c,totalPages:a}=await R(n);if(a===0?(H.classList.add("visually-hidden"),V.classList.remove("visually-hidden"),E.classList.add("visually-hidden")):(H.classList.remove("visually-hidden"),V.classList.add("visually-hidden"),E.classList.remove("visually-hidden")),m(U,c),z(c),a){let i=1;a>1&&(window.matchMedia("(max-width: 767px)").matches?i=3:window.matchMedia("(min-width: 768px)").matches&&(i=5));const l={totalItems:c.length*a,itemsPerPage:n.limit,visiblePages:i,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new it(Pt,l).on("afterMove",async f=>{n.page=f.page;const{results:h}=await R(n);m(U,h),z(h)});const b=document.querySelector(".for-add-text-first"),I=document.querySelector(".for-add-text-last");if(b){const f=document.querySelector(".for-add-text-first");f.textContent=1}if(I){const f=document.querySelector(".for-add-text-last");f.textContent=a}a===1?E.classList.add("visually-hidden"):E.classList.remove("visually-hidden")}}class $t{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return dt.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class kt{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.reset("products"),localStorage.reset("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const K=document.querySelector(".filter-form"),P=document.querySelector(".filter-select");document.querySelector("filter-search");const T=new $t,S=new kt;st().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.split("_").join(" "),P.append(s)});const e=It();P.append(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}K.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,S.clearLocalStorage(),S.defaultApiOptions()):(o.keyword=e,T.getFoodList(o).then(function(s){S.updateLsWithList(s,o),F(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}K.reset()});P.addEventListener("change",function(){const t=P.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),S.defaultApiOptions()):(e.category=t,T.category=t,T.getFoodList().then(function(o){S.updateLsWithList(o,e),F(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const Q=document.querySelector(".popular-product-list");let tt=5;window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(tt=6);nt(tt).then(t=>{Q.insertAdjacentHTML("beforeend",Mt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),c=M(n,t);A(c._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const a=n.closest(".popular-card").getAttribute("data-js-product-id");Bt(a)}else if(n.closest(".button-add-product")){const c=n.closest(".button-add-product").previousElementSibling,a=c.getAttribute("data-js-button"),i=M(a,t),l=u(d);A(i._id)||(l.push(i),m(d,l),w(),v(i._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),c.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const c=n.closest(".button-remove-product").getAttribute("data-js-button"),a=M(c,t),i=u(d),l=A(a._id);m(d,i.filter(g=>l._id!==g._id)),w(),v(a._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}Q.addEventListener("click",o)}).catch(t=>{console.error(t)});function Bt(t){Y(t).then(e=>{j(e)}).catch(e=>{console.error(e)})}function M(t,e){return e.find(s=>s._id.toString()===t)}function A(t){return u(d).find(o=>o._id===t)}function xt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function Mt(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:c,size:a,price:i,is10PercentOff:l})=>{const g=parseInt(c.toString()[0]),b=xt(o,14);return`  <li class="popular-item">

            <button class="button-remove-product" data-js-button=${e} type="button" aria-label="Delete" >

        <svg class="svg-remove-product" width="12" height="12">
          <use href="${p}#check"></use>
        </svg>
      </button>

      <button class="button-add-product" data-js-button=${e} type="button" aria-label="Add" >

        <svg class="svg-add-product" width="12" height="12">
          <use href="${p}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${b}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${a}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${g}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function At(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",c=s?"is-hidden":"",a=Tt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
            <button type="button" class="card-product-btn" aria-label="Buy">
            <svg class="card-product-svg ${n}" 
            data-js-discont="${o._id}" width="18" height="18">
            <use href="${p}#check"></use>
          </svg>
          <svg class="card-product-svg ${c}" 
          data-js-discont="${o._id}" width="18" height="18">
          <use href="${p}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Tt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let $=[];const N=document.querySelector(".products-discount");async function Ct(){$=(await ct()).slice(0,2);const e=u(d),o=Ot(e),s=At($,o);_t(s)}Ct();function _t(t){N.insertAdjacentHTML("beforeend",t)}N.addEventListener("click",jt);N.addEventListener("click",qt);function jt(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=u(d);if(n.find(c=>s===c._id))m(d,n.filter(c=>s!==c._id)),w(),v(s,-1);else{const c=$.find(a=>s===a._id);n.push(c),m(d,n),w(),v(s,0)}}function qt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=$.find(c=>s===c._id);j(n)}function Ot(t=[]){return t.map(e=>e._id)}const r=document.querySelector(".feedback-form"),L="feedback-form-state",et=document.getElementById("footer-button"),y={menu:document.querySelector("[data-menu]"),one:document.querySelector("[data-one]"),two:document.querySelector("[data-two]")};r.addEventListener("submit",Ft);function Ft(t){t.preventDefault();const e=r.elements.email.value;at(e).then(o=>{o.message&&(y.menu.classList.remove("is-hidden"),y.one.classList.remove("is-hidden")),y.two.classList.add("is-hidden")}).catch(o=>{y.menu.classList.remove("is-hidden"),y.two.classList.remove("is-hidden"),y.one.classList.add("is-hidden")})}const Nt=rt(()=>{const t={email:r.elements.email.value};localStorage.setItem(L,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);r.elements.email.value=e}});r.addEventListener("input",()=>{Nt(),k()});r.addEventListener("submit",t=>{t.preventDefault(),r.elements.email.value,localStorage.removeItem(L),r.reset(),k()});et.addEventListener("click",function(){console.log("Button clicked");const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);r.elements.email.value=e,k()}});const k=()=>{const t=r.elements.email.value,e=Dt(t),o=t.trim()!=="";et.disabled=!(e&&o)},Dt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Jt=()=>{const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);r.elements.email.value=e,k()}};Jt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function e(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),t.menu.classList.contains("is-hidden")?document.body.style.overflow="auto":document.body.style.overflow="hidden"}Array.from(t.menu.children).forEach(c=>{c.addEventListener("click",s)});function s(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function n(c){c.key==="Escape"&&e()}document.addEventListener("keydown",n)})();const C=document.getElementById("scrollToTopBtn"),W=360;window.onscroll=function(){document.body.scrollTop>W||document.documentElement.scrollTop>W?C.classList.add("show"):C.classList.remove("show")};C.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
