import{a as l}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const h="https://food-boutique.b.goit.study/api/";l.defaults.baseURL=h;async function y(){try{return(await l.get("https://food-boutique.b.goit.study/api/products/")).data.results}catch(e){return console.error("Ошибка при получении данных:",e),[]}}const g=document.querySelector(".list-prod");function v(e,t){e.innerHTML=t}async function E(){try{const e=await y(),t=C(e);v(g,t)}catch(e){console.error("Ошибка при отображении продуктов:",e)}}function C(e){return e.map(({id:t,name:i,img:n,category:s,size:o,price:r,popularity:m})=>`
        <li class="prod-item" js-product-id=${t}>   
          <div class="prod-pic">
            <svg class="discont-prod" width="60" height="60" style="visibility: hidden;">
              <use href=""></use>
            </svg>
            <img class="prod-img" src=${n} alt=${i} loading="lazy">
          </div>
          <h3 class="title-prod">${i}</h3>
          <div class="feature">
            <p class="feature-prod">Category:<span class="feature-value">${s}</span></p>
            <p class="feature-prod">Size:<span class="feature-value">${o}</span></p>
            <p class="feature-prod push">Popularity:<span class="feature-value">${m}</span></p>
          </div>
          <div class="buing-prod">
            <p class="price-prod">${r}</p>
            <button class="buy-btn" type="button">
              <svg class="buy-svg" width="18" height="18">
                <use href=""></use>
              </svg>
            </button>
          </div>
        </li>
      `).join("")}E();async function L(e){return(await(await fetch(`https://food-boutique.b.goit.study/api/products?page=${e}&limit=9`)).json()).results}const c=document.getElementById("cards-container"),a=document.getElementById("pagination");async function u(e){const t=await L(e);c.innerHTML="",t.forEach(i=>{const n=b(i);c.appendChild(n)})}function b(e){const t=document.createElement("div");t.className="card";const i=document.createElement("img");i.src=e.img,i.alt=e.name;const n=document.createElement("p");n.textContent=e.name;const s=document.createElement("p");return s.textContent=`Price: $${e.price}`,t.appendChild(i),t.appendChild(n),t.appendChild(s),t}async function p(e,t){if(a.innerHTML="",t>1){for(let n=Math.max(1,e-1);n<=Math.min(t,e+1);n+=1)d(n,n===e);if(t-e>5-2){const n=document.createElement("span");n.textContent=". . .",a.appendChild(n)}for(let n=Math.max(t-5+4);n<=t;n+=1)d(n)}}function d(e,t=!1){const i=document.createElement("li"),n=document.createElement("div");n.classList.add("pagination-link");const s=document.createElement("a");s.href="javascript:void(0);",s.textContent=e,t&&n.classList.add("active"),s.addEventListener("click",()=>M(e)),n.appendChild(s),i.appendChild(n),a.appendChild(i)}function M(e){u(e),p(e,60)}const f=1;u(f);p(f,60);
//# sourceMappingURL=commonHelpers.js.map
