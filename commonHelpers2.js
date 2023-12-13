import{g as l,S as r,b as D,m as J,s as g,d as E,e as y,f as Y,F as ot,a as m,h as R,i as st,j as nt,k as at,o as ct}from"./assets/STORAGE-ff18dd71.js";import{P as rt,a as it,l as dt}from"./assets/vendor-8c378b12.js";const lt=document.getElementById("removeFromIcon"),G=document.getElementById("modalProduct"),ut=document.getElementById("closeModalProductBtn"),B=document.getElementById("addToCartBtn"),x=document.getElementById("removeFrom"),pt=document.getElementById("modalProductImage"),mt=document.getElementById("modalProductName"),gt=document.getElementById("modalProductCategory"),ft=document.getElementById("modalProductSize"),ht=document.getElementById("modalProductPopularity"),yt=document.getElementById("modalProductDescription"),vt=document.getElementById("modalProductPrice"),_=document.querySelector(".modal-overlay"),X=document.getElementById("scrollToTopBtn");lt.classList.add("visually-hidden");function j(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}G.style.display="block",document.body.style.overflow="hidden",_.style.display="flex",window.addEventListener("click",Z);const e=l(r);let o=D(e,t);J(o,B,x),B.addEventListener("click",n),x.addEventListener("click",a),X.style.display="none",pt.src=t.img,mt.textContent=t.name;const s=i=>i.replace(/_/g," ");gt.innerHTML=`Category: <span id="priceText">${s(t.category)}</span>`,document.getElementById("priceText").style.color="black",ft.innerHTML=`Size: <span id="priceTexte">${t.size}</span>`,document.getElementById("priceTexte").style.color="black",ht.innerHTML=`Popularity: <span id="priceTex">${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",yt.textContent=`${t.desc}`,vt.textContent=`$ ${t.price}`;function n(){e.push(t),c()}function a(){e.splice(o,1),c()}function c(){g(r,e),E(),o=D(e,t),y(t._id,o),J(o,B,x)}}function q(){document.body.style.overflow="",G.style.display="none",_.style.display="none",X.style.display="flex",window.removeEventListener("click",Z)}ut.addEventListener("click",q);document.addEventListener("keydown",function(t){t.key==="Escape"&&q()});function Z(t){t.target===_&&q()}const F=document.querySelector(".list-prod");l(r);function bt(t,e){t.innerHTML=e}async function z(t){const e=Lt(t);bt(F,e)}F.addEventListener("click",St);F.addEventListener("click",Et);function St(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=l(r);let a=n.findIndex(c=>c._id===s);if(a!==-1)n.splice(a,1),a=-1;else{const c=l(ot).find(i=>i._id===s);c&&(n.push(c),a=0)}g(r,n),y(s,a)}function Et(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Y(s).then(n=>{j(n)}).catch(n=>{console.error(n)})}function Lt(t){return t.map(({_id:e,name:o,img:s,category:n,size:a,price:c,popularity:i,is10PercentOff:u})=>{const p=l(r),v=p.find(k=>k._id===e)?"":"is-hidden",f=p.find(k=>k._id===e)?"is-hidden":"",w=wt(u);return`
        <li class="prod-item" data-js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" data-js-label-discont="${u}" style="visibility: ${w};">
              <use href="${m}#icon-discount"></use>
            </svg>
            <img class="prod-img" src=${s} alt=${o} width="140" height="140" loading="lazy">
          </div>
          <h3 class="title-prod">${o}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${n.replace(/_/g," ")}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${i}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
            <button class="buy-btn" type="button" aria-label="Buy">
            <svg class="card-product-svg ${v}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#check"></use>
            </svg>
            <svg class="card-product-svg ${f}" 
            data-js-product="${e}" width="18" height="18">
            <use href="${m}#shopping-cart"></use>
            </svg>
            </button>
          </div>
        </li>
      `}).join("")}function wt(t){return t===!0?"visible":"hidden"}const b=document.querySelector("#pagination"),H=document.querySelector(".list-prod-container"),V=document.querySelector(".filter-nomatches-container"),U="firstset";O("first");async function O(t){const{keyword:e,category:o}=t,s={keyword:e||"",category:o||"",page:1,limit:9};window.matchMedia("(max-width: 479px)").matches?s.limit=6:window.matchMedia("(min-width: 480px) and (max-width: 900px)").matches&&(s.limit=8);const{results:n,totalPages:a}=await R(s);if(a===0?(H.classList.add("visually-hidden"),V.classList.remove("visually-hidden"),b.classList.add("visually-hidden")):(H.classList.remove("visually-hidden"),V.classList.add("visually-hidden"),b.classList.remove("visually-hidden")),g(U,n),z(n),a){let c=1;a>1&&(c=5),window.matchMedia("(max-width: 480px)").matches&&(c=3);const i={totalItems:n.length*a,itemsPerPage:s.limit,visiblePages:c,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new rt(b,i).on("afterMove",async f=>{s.page=f.page;const{results:w}=await R(s);g(U,w),z(w)});const p=document.querySelector(".for-add-text-first"),v=document.querySelector(".for-add-text-last");if(p){const f=document.querySelector(".for-add-text-first");f.textContent=1}if(v){const f=document.querySelector(".for-add-text-last");f.textContent=a}a===1?b.classList.add("visually-hidden"):b.classList.remove("visually-hidden")}}class Pt{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return it.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class $t{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.reset("products"),localStorage.reset("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const K=document.querySelector(".filter-form"),P=document.querySelector(".filter-select");document.querySelector("filter-search");const C=new Pt,S=new $t;st().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.split("_").join(" "),P.append(s)});const e=It();P.append(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}K.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,S.clearLocalStorage(),S.defaultApiOptions()):(o.keyword=e,C.getFoodList(o).then(function(s){S.updateLsWithList(s,o),O(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}K.reset()});P.addEventListener("change",function(){const t=P.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),S.defaultApiOptions()):(e.category=t,C.category=t,C.getFoodList().then(function(o){S.updateLsWithList(o,e),O(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const Q=document.querySelector(".popular-product-list");nt(5).then(t=>{Q.insertAdjacentHTML("beforeend",xt(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),a=A(n,t);T(a._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const c=n.closest(".popular-card").getAttribute("data-js-product-id");kt(c)}else if(n.closest(".button-add-product")){const a=n.closest(".button-add-product").previousElementSibling,c=a.getAttribute("data-js-button"),i=A(c,t),u=l(r);T(i._id)||(u.push(i),g(r,u),E(),y(i._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),a.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const a=n.closest(".button-remove-product").getAttribute("data-js-button"),c=A(a,t),i=l(r),u=T(c._id);g(r,i.filter(p=>u._id!==p._id)),E(),y(c._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}Q.addEventListener("click",o)}).catch(t=>{console.error(t)});function kt(t){Y(t).then(e=>{j(e)}).catch(e=>{console.error(e)})}function A(t,e){return e.find(s=>s._id.toString()===t)}function T(t){return l(r).find(o=>o._id===t)}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function xt(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:a,size:c,price:i,is10PercentOff:u})=>{const p=parseInt(a.toString()[0]),v=Bt(o,14);return`  <li class="popular-item">

            <button class="button-remove-product" data-js-button=${e} type="button" aria-label="Delete" >

        <svg class="svg-remove-product" width="12" height="12">
          <use href="${m}#check"></use>
        </svg>
      </button>

      <button class="button-add-product" data-js-button=${e} type="button" aria-label="Add" >

        <svg class="svg-add-product" width="12" height="12">
          <use href="${m}#shopping-cart"></use>
        </svg>
      </button>
        <div class="popular-card" data-js-product-id=${e}>
          <div class="popular-box-img">
            <img src="${s}" alt="${o}" loading="lazy"  width="56" height="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${v}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${n.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${p}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function At(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",a=s?"is-hidden":"",c=Tt(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
        <h3 class="card-product-title">${c}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" aria-label="Buy">
            <svg class="card-product-svg ${n}" 
            data-js-discont="${o._id}" width="18" height="18">
            <use href="${m}#check"></use>
          </svg>
          <svg class="card-product-svg ${a}" 
          data-js-discont="${o._id}" width="18" height="18">
          <use href="${m}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Tt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let $=[];const N=document.querySelector(".products-discount");async function Ct(){$=(await at()).slice(0,2);const e=l(r),o=qt(e),s=At($,o);Mt(s)}Ct();function Mt(t){N.insertAdjacentHTML("beforeend",t)}N.addEventListener("click",_t);N.addEventListener("click",jt);function _t(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=l(r);if(n.find(a=>s===a._id))g(r,n.filter(a=>s!==a._id)),E(),y(s,-1);else{const a=$.find(c=>s===c._id);n.push(a),g(r,n),E(),y(s,0)}}function jt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=$.find(a=>s===a._id);j(n)}function qt(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form");d.addEventListener("submit",et);const L="feedback-form-state",tt=document.getElementById("footer-button"),h={menu:document.querySelector("[data-menu]"),one:document.querySelector("[data-one]"),two:document.querySelector("[data-two]")};d.addEventListener("submit",et);function et(t){t.preventDefault();const e=d.elements.email.value;ct(e).then(o=>{o.message&&(h.menu.classList.remove("is-hidden"),h.one.classList.remove("is-hidden")),h.two.classList.add("is-hidden")}).catch(o=>{h.menu.classList.remove("is-hidden"),h.two.classList.remove("is-hidden"),h.one.classList.add("is-hidden")})}const Ft=dt(()=>{const t={email:d.elements.email.value};localStorage.setItem(L,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{Ft(),I()});d.addEventListener("submit",t=>{t.preventDefault(),d.elements.email.value,localStorage.removeItem(L),d.reset(),I()});tt.addEventListener("click",function(){const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,I()}});const I=()=>{const t=d.elements.email.value,e=Ot(t),o=t.trim()!=="";tt.disabled=!(e&&o)},Ot=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Nt=()=>{const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,I()}};Nt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};Array.from(t.menu.children).forEach(s=>{s.addEventListener("click",o)});function o(){t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto"}})();const M=document.getElementById("scrollToTopBtn"),W=360;window.onscroll=function(){document.body.scrollTop>W||document.documentElement.scrollTop>W?M.classList.add("show"):M.classList.remove("show")};M.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
