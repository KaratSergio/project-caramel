import{s as r,c as E}from"./assets/get-api-75a19277.js";import"./assets/vendor-8c378b12.js";const l="added-item";let n=[];const I=document.querySelector(".js-basket-icon"),L=document.querySelector(".js-item-count"),m=document.querySelector(".js-empty-basket"),h=document.querySelector(".js-filled-basket"),f=document.querySelector(".js-items-container"),C=document.querySelector(".total-count-text"),g=document.querySelector(".js-checkout-form"),q=document.querySelector(".js-item-button"),w=document.querySelector("#countProducts"),j=I.ownerDocument.location;console.dir(j);g.addEventListener("submit",P);q.addEventListener("click",D);x();function x(){try{b(),u(n),a(event,0),f.innerHTML=v(n),d(n)}catch(e){console.log(e.message)}}function b(){const e=localStorage.getItem(l);e&&(n=JSON.parse(e))}function D(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":p();break;case"delete-item-button":const c=y(e);O(c),b(),f.innerHTML=v(n);break;case"decrease-button":a(e,-1);break;case"increase-button":a(e,1);break}}function p(){n=[],localStorage.setItem(l,JSON.stringify(n)),u(n)}function u(e){L.textContent=e.length,w.textContent=`Cart (${e.length})`,N(e.length)}function O(e){for(let t=0;t<=n.length;t+=1){const{_id:s}=n[t];if(s===e){n.splice(t,1),S(n),u(n),d(n);return}}}function y(e){return e.target.closest("li").dataset.id}function a(e,t){try{const s=y(e),c=e.target.closest("div");let o=Number(c.children.counter.textContent)+t;if(c.children.counter.textContent=o,B(s,o),d(n),o<=1){T(c);return}_(c)}catch(s){console.log(s.message)}}function T(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function _(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function B(e,t){for(let s=0;s<=n.length;s+=1){const{_id:c}=n[s];if(c===e){n[s].count=t,S(n);return}}}function S(e){localStorage.setItem(l,JSON.stringify(e))}function N(e){if(e===0){m.classList.remove("hide"),h.classList.add("hide");return}else m.classList.add("hide"),h.classList.remove("hide")}function v(e){return e.map(({_id:t,name:s,img:c,category:o,size:i,is10PercentOff:R,price:k,count:$=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${c}" alt="${s}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${s}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="${r}#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${o}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${i}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${k}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="${r}#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${$}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="${r}#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function d(e){let t=0;e.forEach(({price:s,count:c=1})=>{t+=s*c}),C.textContent=`$${t.toFixed(2)}`}const M=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function P(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!A(t))throw new Error("Your E-mail is not valid");let s=[];n.forEach(({_id:o,count:i=1})=>{s.push({productId:o,amount:i})});const c=await E(t,s);F(c)}catch{J()}}function A(e){return M.test(e)}function F(e){p(),g.reset(),console.log(e)}function J(e){console.log(e)}
//# sourceMappingURL=commonHelpers.js.map
