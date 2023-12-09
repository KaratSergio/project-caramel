import{c as E}from"./assets/get-api-d562484e.js";import"./assets/vendor-8c378b12.js";const r="added-item";let s=[];const I=document.querySelector(".js-basket-icon"),L=document.querySelector(".js-item-count"),u=document.querySelector(".js-empty-basket"),d=document.querySelector(".js-filled-basket"),g=document.querySelector(".js-items-container"),C=document.querySelector(".total-count-text"),h=document.querySelector(".js-checkout-form"),$=document.querySelector(".js-item-button"),q=document.querySelector("#countProducts"),w=I.ownerDocument.location;console.dir(w);h.addEventListener("submit",M);$.addEventListener("click",x);j();function j(){try{f(),a(s),g.innerHTML=v(s),l(s)}catch(e){console.log(e.message)}}function f(){const e=localStorage.getItem(r);e&&(s=JSON.parse(e))}function x(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":b();break;case"delete-item-button":const c=p(e);D(c),f(),g.innerHTML=v(s);break;case"decrease-button":m(e,-1);break;case"increase-button":m(e,1);break}}function b(){s=[],localStorage.setItem(r,JSON.stringify(s)),a(s)}function a(e){L.textContent=e.length,q.textContent=`Cart (${e.length})`,B(e.length)}function D(e){for(let t=0;t<=s.length;t+=1){const{_id:n}=s[t];if(n===e){s.splice(t,1),y(s),a(s),l(s);return}}}function p(e){return e.target.closest("li").dataset.id}function m(e,t){try{const n=p(e),c=e.target.closest("div");let o=Number(c.children.counter.textContent)+t;if(c.children.counter.textContent=o,_(n,o),l(s),o<=1){O(c);return}T(c)}catch(n){console.log(n.message)}}function O(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function T(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function _(e,t){for(let n=0;n<=s.length;n+=1){const{_id:c}=s[n];if(c===e){s[n].count=t,y(s);return}}}function y(e){localStorage.setItem(r,JSON.stringify(e))}function B(e){if(e===0){u.classList.remove("hide"),d.classList.add("hide");return}else u.classList.add("hide"),d.classList.remove("hide")}function v(e){return e.map(({_id:t,name:n,img:c,category:o,size:i,is10PercentOff:J,price:S,count:k=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${c}" alt="${n}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${n}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="../images/icons.svg#delete-icon"></use>
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
              <p class="item-price">$${S}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="../images/icons.svg#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${k}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="../images/icons.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function l(e){let t=0;e.forEach(({price:n,count:c=1})=>{t+=n*c}),C.textContent=`$${t.toFixed(2)}`}const N=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function M(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!P(t))throw new Error("Your E-mail is not valid");let n=[];s.forEach(({_id:o,count:i=1})=>{n.push({productId:o,amount:i})});const c=await E(t,n);A(c)}catch{F()}}function P(e){return N.test(e)}function A(e){b(),h.reset(),console.log(e)}function F(e){console.log(e)}
//# sourceMappingURL=commonHelpers.js.map
