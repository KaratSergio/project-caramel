import{g as u,S as i,b as D,m as J,s as m,d as w,e as v,f as Y,F as st,a as p,h as R,i as nt,j as at,k as ct,o as rt}from"./assets/STORAGE-815a6706.js";import{P as it,a as dt,l as lt}from"./assets/vendor-8c378b12.js";const ut=document.getElementById("removeFromIcon"),G=document.getElementById("modalProduct"),pt=document.getElementById("closeModalProductBtn"),x=document.getElementById("addToCartBtn"),B=document.getElementById("removeFrom"),mt=document.getElementById("modalProductImage"),gt=document.getElementById("modalProductName"),ft=document.getElementById("modalProductCategory"),ht=document.getElementById("modalProductSize"),yt=document.getElementById("modalProductPopularity"),vt=document.getElementById("modalProductDescription"),bt=document.getElementById("modalProductPrice"),O=document.querySelector(".modal-overlay"),X=document.getElementById("scrollToTopBtn");ut.classList.add("visually-hidden");function _(t){if(!t||!t.img){console.error("Product data is missing or incomplete.");return}G.style.display="block",document.body.style.overflow="hidden",O.style.display="flex",window.addEventListener("click",Z);const e=u(i);let o=D(e,t);J(o,x,B),x.addEventListener("click",n),B.addEventListener("click",a),X.style.display="none",mt.src=t.img,gt.textContent=t.name;const s=r=>r.replace(/_/g," ");ft.innerHTML=`Category: <span id="priceText">${s(t.category)}</span>`,document.getElementById("priceText").style.color="black",ht.innerHTML=`Size: <span id="priceTexte">${t.size}</span>`,document.getElementById("priceTexte").style.color="black",yt.innerHTML=`Popularity: <span id="priceTex">${t.popularity}</span>`,document.getElementById("priceTex").style.color="black",vt.textContent=`${t.desc}`,bt.textContent=`$ ${t.price}`;function n(){e.push(t),c()}function a(){e.splice(o,1),c()}function c(){m(i,e),w(),o=D(e,t),v(t._id,o),J(o,x,B)}}function j(){document.body.style.overflow="",G.style.display="none",O.style.display="none",X.style.display="flex",window.removeEventListener("click",Z)}pt.addEventListener("click",j);document.addEventListener("keydown",function(t){t.key==="Escape"&&j()});function Z(t){t.target===O&&j()}const q=document.querySelector(".list-prod");u(i);function St(t,e){t.innerHTML=e}async function z(t){const e=Lt(t);St(q,e)}q.addEventListener("click",Et);q.addEventListener("click",wt);function Et(t){const e=t.target.closest(".buy-btn");if(!e)return;const s=t.target.closest(".prod-item").getAttribute("data-js-product-id");e.querySelectorAll("svg[data-js-product='"+s+"']");const n=u(i);let a=n.findIndex(c=>c._id===s);if(a!==-1)n.splice(a,1),a=-1;else{const c=u(st).find(r=>r._id===s);c&&(n.push(c),a=0)}m(i,n),v(s,a)}function wt(t){const e=t.target.closest(".prod-item"),o=t.target.closest(".buy-btn");if(!e||o)return;const s=e.getAttribute("data-js-product-id");Y(s).then(n=>{_(n)}).catch(n=>{console.error(n)})}function Lt(t){return t.map(({_id:e,name:o,img:s,category:n,size:a,price:c,popularity:r,is10PercentOff:l})=>{const g=u(i),b=g.find(h=>h._id===e)?"":"is-hidden",I=g.find(h=>h._id===e)?"is-hidden":"",f=Pt(l);return`
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
            <p class="feature-prod">Size:<span class="feature-value">${a}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${r}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">&#36; ${c}</p>
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
      `}).join("")}function Pt(t){return t===!0?"visible":"hidden"}const S=document.querySelector("#pagination"),H=document.querySelector(".list-prod-container"),V=document.querySelector(".filter-nomatches-container"),U="firstset";F("first");async function F(t){const{keyword:e,category:o}=t;let s=9;window.matchMedia("(max-width: 767px)").matches?s=6:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(s=8);const n={keyword:e||"",category:o||"",page:1,limit:s},{results:a,totalPages:c}=await R(n);if(c===0?(H.classList.add("visually-hidden"),V.classList.remove("visually-hidden"),S.classList.add("visually-hidden")):(H.classList.remove("visually-hidden"),V.classList.add("visually-hidden"),S.classList.remove("visually-hidden")),m(U,a),z(a),c){let r=1;c>1&&(window.matchMedia("(max-width: 767px)").matches?r=3:window.matchMedia("(min-width: 768px)").matches&&(r=5));const l={totalItems:a.length*c,itemsPerPage:n.limit,visiblePages:r,page:1,centerAlign:!0,usageStatistics:!1,template:{moveButton:'<a href="#" class="tui-page-btn need-hide tui-{{type}}"><span class="for-add-text-{{type}}">1</span><span class="tui-ico-{{type}}">{{type}}</span></a>',moreButton:'<span  class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></span>'}};new it(S,l).on("afterMove",async f=>{n.page=f.page;const{results:h}=await R(n);m(U,h),z(h)});const b=document.querySelector(".for-add-text-first"),I=document.querySelector(".for-add-text-last");if(b){const f=document.querySelector(".for-add-text-first");f.textContent=1}if(I){const f=document.querySelector(".for-add-text-last");f.textContent=c}c===1?S.classList.add("visually-hidden"):S.classList.remove("visually-hidden")}}class $t{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.searchQuery="",this.category="",this.currentPage=1,this.perPage=6}paramsFromApi(e){return Object.entries(e).map(([o,s])=>`${encodeURIComponent(o)}=${encodeURIComponent(s)}`).join("&")}getFoodList(){const e={keyword:this.searchQuery,category:this.category,page:this.currentPage,limit:this.perPage},o=this.paramsFromApi(e);return dt.get(`${this.URL}/products?${o}`).then(s=>s.data)}}class kt{updateLsWithList(e){const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("products",JSON.stringify(e.results)),localStorage.setItem("options",JSON.stringify(o))}clearLocalStorage(){localStorage.reset("products"),localStorage.reset("options")}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}}const K=document.querySelector(".filter-form"),P=document.querySelector(".filter-select");document.querySelector("filter-search");const C=new $t,E=new kt;nt().then(t=>{t.forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.split("_").join(" "),P.append(s)});const e=It();P.append(e)});function It(){const t=document.createElement("option");return t.textContent="Show All",t.value="",t}K.addEventListener("submit",function(t){t.preventDefault();let e=t.target.elements.searchQuery.value.trim();try{let o=JSON.parse(localStorage.getItem("options"))||{};e===""?(o.keyword=null,E.clearLocalStorage(),E.defaultApiOptions()):(o.keyword=e,C.getFoodList(o).then(function(s){E.updateLsWithList(s,o),F(o)}).catch(function(s){console.error("Error fetching food list:",s.message)}))}catch(o){console.error("Error:",o.message)}K.reset()});P.addEventListener("change",function(){const t=P.value;try{let e=JSON.parse(localStorage.getItem("options"))||{};t==="show-all"?(localStorage.removeItem("products"),E.defaultApiOptions()):(e.category=t,C.category=t,C.getFoodList().then(function(o){E.updateLsWithList(o,e),F(e)}).catch(function(o){console.error("Error fetching list:",o.message)}))}catch(e){console.error("Error:",e.message)}});const Q=document.querySelector(".popular-product-list");let tt=5;window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches&&(tt=6);at(tt).then(t=>{Q.insertAdjacentHTML("beforeend",At(t)),[...document.getElementsByClassName("button-remove-product")].forEach(s=>{const n=s.getAttribute("data-js-button"),a=A(n,t);T(a._id)&&s.nextElementSibling.classList.add("visually-hidden")});function o(s){let n=s.target;if(n.closest(".popular-card")){const c=n.closest(".popular-card").getAttribute("data-js-product-id");xt(c)}else if(n.closest(".button-add-product")){const a=n.closest(".button-add-product").previousElementSibling,c=a.getAttribute("data-js-button"),r=A(c,t),l=u(i);T(r._id)||(l.push(r),m(i,l),w(),v(r._id,0)),n.closest(".button-add-product").classList.add("visually-hidden"),a.classList.remove("visually-hidden")}else if(n.closest(".button-remove-product")){const a=n.closest(".button-remove-product").getAttribute("data-js-button"),c=A(a,t),r=u(i),l=T(c._id);m(i,r.filter(g=>l._id!==g._id)),w(),v(c._id,-1),n.closest(".button-remove-product").classList.add("visually-hidden"),n.closest(".button-remove-product").nextElementSibling.classList.remove("visually-hidden")}}Q.addEventListener("click",o)}).catch(t=>{console.error(t)});function xt(t){Y(t).then(e=>{_(e)}).catch(e=>{console.error(e)})}function A(t,e){return e.find(s=>s._id.toString()===t)}function T(t){return u(i).find(o=>o._id===t)}function Bt(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function At(t){return t.map(({_id:e,name:o,img:s,category:n,popularity:a,size:c,price:r,is10PercentOff:l})=>{const g=parseInt(a.toString()[0]),b=Bt(o,14);return`  <li class="popular-item">

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
              <p class="popular-card-text">Size: <span class="popular-text">${c}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${g}</span></p>
            </div>
          </div>
        </div>
      </li>`}).join("")}function Tt(t=[],e=[]){return t.map(o=>{const s=e.includes(o._id),n=s?"":"is-hidden",a=s?"is-hidden":"",c=Ct(o.name,14);return` <div class="card-product-discount" data-id="${o._id}">
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
        <h3 class="card-product-title">${c}</h3>
        <div class="card-product-info-right">
            <p class="card-product-price">&#36; ${o.price}</p>
            <button type="button" class="card-product-btn" aria-label="Buy">
            <svg class="card-product-svg ${n}" 
            data-js-discont="${o._id}" width="18" height="18">
            <use href="${p}#check"></use>
          </svg>
          <svg class="card-product-svg ${a}" 
          data-js-discont="${o._id}" width="18" height="18">
          <use href="${p}#shopping-cart"></use>
        </svg>
            </button>
        </div>
    </div>
</div>
`}).join("")}function Ct(t,e){return t.length>e?t.slice(0,e-1)+"…":t}let $=[];const N=document.querySelector(".products-discount");async function Mt(){$=(await ct()).slice(0,2);const e=u(i),o=qt(e),s=Tt($,o);Ot(s)}Mt();function Ot(t){N.insertAdjacentHTML("beforeend",t)}N.addEventListener("click",_t);N.addEventListener("click",jt);function _t(t){const e=t.target.closest(".card-product-btn");if(!e)return;const o=t.target.closest(".card-product-discount");e.querySelectorAll("svg");const s=o.dataset.id,n=u(i);if(n.find(a=>s===a._id))m(i,n.filter(a=>s!==a._id)),w(),v(s,-1);else{const a=$.find(c=>s===c._id);n.push(a),m(i,n),w(),v(s,0)}}function jt(t){const e=t.target.closest(".card-product-discount"),o=t.target.closest(".card-product-btn");if(!e||o)return;const s=e.dataset.id,n=$.find(a=>s===a._id);_(n)}function qt(t=[]){return t.map(e=>e._id)}const d=document.querySelector(".feedback-form");d.addEventListener("submit",ot);const L="feedback-form-state",et=document.getElementById("footer-button"),y={menu:document.querySelector("[data-menu]"),one:document.querySelector("[data-one]"),two:document.querySelector("[data-two]")};d.addEventListener("submit",ot);function ot(t){t.preventDefault();const e=d.elements.email.value;rt(e).then(o=>{o.message&&(y.menu.classList.remove("is-hidden"),y.one.classList.remove("is-hidden")),y.two.classList.add("is-hidden")}).catch(o=>{y.menu.classList.remove("is-hidden"),y.two.classList.remove("is-hidden"),y.one.classList.add("is-hidden")})}const Ft=lt(()=>{const t={email:d.elements.email.value};localStorage.setItem(L,JSON.stringify(t))},500);window.addEventListener("load",()=>{const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e}});d.addEventListener("input",()=>{Ft(),k()});d.addEventListener("submit",t=>{t.preventDefault(),d.elements.email.value,localStorage.removeItem(L),d.reset(),k()});et.addEventListener("click",function(){console.log("Button clicked");const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,k()}});const k=()=>{const t=d.elements.email.value,e=Nt(t),o=t.trim()!=="";et.disabled=!(e&&o)},Nt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Dt=()=>{const t=localStorage.getItem(L);if(t){const{email:e}=JSON.parse(t);d.elements.email.value=e,k()}};Dt();document.body.style.overflow="auto";(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")},e=()=>{t.menu.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.body.style.overflow="auto",location.reload()},o=a=>{a.key==="Escape"&&e()},s=a=>{a.target===t.menu&&e()};Array.from(t.menu.children).forEach(a=>{a.addEventListener("click",e)}),document.addEventListener("keydown",o),document.addEventListener("click",s)})();const M=document.getElementById("scrollToTopBtn"),W=360;window.onscroll=function(){document.body.scrollTop>W||document.documentElement.scrollTop>W?M.classList.add("show"):M.classList.remove("show")};M.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
