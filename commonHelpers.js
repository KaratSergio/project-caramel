import{a as i}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const h="https://food-boutique.b.goit.study/api/";i.defaults.baseURL=h;async function y(){try{return(await i.get("https://food-boutique.b.goit.study/api/products/")).data.results}catch(t){return console.error("Ошибка при получении данных:",t),[]}}const g=document.querySelector(".list-prod");function v(t,e){t.innerHTML=e}async function L(){try{const t=await y(),e=b(t);v(g,e)}catch(t){console.error("Ошибка при отображении продуктов:",t)}}function b(t){return t.map(({id:e,name:n,img:s,category:a,size:r,price:o,popularity:m})=>`
        <li class="prod-item" js-product-id=${e}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href=""></use>
            </svg>
            <img class="prod-img" src=${s} alt=${n} loading="lazy">
          </div>
          <h3 class="title-prod">${n}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${a}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${r}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${m}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">${o}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href=""></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}L();async function C(t){return(await(await fetch(`https://food-boutique.b.goit.study/api/products?page=${t}&limit=9`)).json()).results}const c=document.getElementById("cards-container"),d=document.getElementById("pagination");async function l(t){const e=await C(t);c.innerHTML="",e.forEach(n=>{const s=E(n);c.appendChild(s)})}function E(t){const e=document.createElement("div");e.className="card";const n=document.createElement("img");n.src=t.img,n.alt=t.name;const s=document.createElement("p");s.textContent=t.name;const a=document.createElement("p");return a.textContent=`Price: $${t.price}`,e.appendChild(n),e.appendChild(s),e.appendChild(a),e}async function u(t,e){if(d.innerHTML="",e>1){for(let s=Math.max(1,t-1);s<=Math.min(e,t+1);s+=1)p(s,s===t);if(e-t>5-2){const s=document.createElement("span");s.textContent=". . .",d.appendChild(s)}for(let s=Math.max(e-5+4);s<=e;s+=1)p(s)}}function p(t,e=!1){const n=document.createElement("li"),s=document.createElement("div");s.classList.add("pagination-link");const a=document.createElement("a");a.href="javascript:void(0);",a.textContent=t,e&&s.classList.add("active"),a.addEventListener("click",()=>$(t)),s.appendChild(a),n.appendChild(s),d.appendChild(n)}function $(t){l(t),u(t,60)}const f=1;l(f);u(f,60);const A=document.querySelector(".popular-list");async function S(){const t="https://food-boutique.b.goit.study/api/products/popular";return(await i.get(`${t}`)).data}function x(t){return t.map(({_id:e,name:n,img:s,category:a,popularity:r,size:o})=>`  <li class="popular-item">
        <button class="btn-add" type="submit">svg</button>
        <span class="product-added" >OK</span>
        <div class="popular-card" id="${e}">
          <div class="popular-box-img">
            <img src="${s}" alt="${n}" loading="lazy"  width="56" />
          </div>
          <div class="popular-description">
            <h3 class="popular-card-title">${n}</h3>
            <p class="popular-card-text category">Category: <span class="popular-text">${a.replace("_"," ")}</span></p>
            <div class="card-descr">
              <p class="popular-card-text">Size: <span class="popular-text">${o}</span></p>
              <p class="popular-card-text">Popularity: <span class="popular-text">${r}</span></p>
            </div>
          </div>
        </div>
      </li>`).join("")}S().then(t=>{A.insertAdjacentHTML("beforeend",x(t));const e={btnAdd:document.querySelector(".btn-add"),productAdded:document.querySelector(".product-added"),popularCard:document.querySelector(".popular-card")};e.btnAdd.addEventListener("click",n),e.popularCard.addEventListener("click",M),e.productAdded.classList.remove("product-added"),e.productAdded.classList.add("is-hidden");function n(){e.btnAdd.classList.add("is-hidden"),e.productAdded.classList.add("product-added"),e.productAdded.classList.remove("is-hidden"),alert("Product add to Order")}}).catch(t=>{console.error(t)});function M(){alert("Thi is product cart")}
//# sourceMappingURL=commonHelpers.js.map
