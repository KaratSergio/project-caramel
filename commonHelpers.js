import{c as E}from"./assets/get-api-1ce7f6aa.js";import"./assets/vendor-99d50140.js";const r="added-item";let c=[];const I=document.querySelector(".js-item-count"),l=document.querySelector(".js-empty-basket"),u=document.querySelector(".js-filled-basket"),m=document.querySelector(".js-items-container"),L=document.querySelector(".total-count-text"),g=document.querySelector(".js-checkout-form"),C=document.querySelector(".js-item-button"),$=document.querySelector("#countProducts");g.addEventListener("submit",B);C.addEventListener("click",w);q();function q(){try{h(),b(c),m.innerHTML=v(c),a(c)}catch(e){console.log(e.message)}}function h(){const e=localStorage.getItem(r);e&&(c=JSON.parse(e))}function w(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":f();break;case"delete-item-button":const n=p(e);j(n),h(),m.innerHTML=v(c);break;case"decrease-button":d(e,-1);break;case"increase-button":d(e,1);break}}function f(){c=[],localStorage.setItem(r,JSON.stringify(c)),b(c)}function b(e){I.textContent=e.length,$.textContent=`Cart (${e.length})`,T(e.length)}function j(e){for(let t=0;t<=c.length;t+=1){const{_id:s}=c[t];if(s===e){c.splice(t,1),y(c),a(c);return}}}function p(e){return e.target.closest("li").dataset.id}function d(e,t){try{const s=p(e),n=e.target.closest("div");let i=Number(n.children.counter.textContent)+t;if(n.children.counter.textContent=i,D(s,i),a(c),i<=1){x(n);return}O(n)}catch(s){console.log(s.message)}}function x(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function O(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function D(e,t){for(let s=0;s<=c.length;s+=1){const{_id:n}=c[s];if(n===e){c[s].count=t,y(c);return}}}function y(e){localStorage.setItem(r,JSON.stringify(e))}function T(e){if(e===0){l.classList.remove("hide"),u.classList.add("hide");return}else l.classList.add("hide"),u.classList.remove("hide")}function v(e){return e.map(({_id:t,name:s,img:n,category:i,size:o,is10PercentOff:A,price:S,count:k=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${n}" alt="${s}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${s}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="./src/images/icons.svg#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${i}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${o}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${S}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="/images/icons.svg#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${k}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="../src/images/icons.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function a(e){let t=0;e.forEach(({price:s,count:n=1})=>{t+=s*n}),L.textContent=`$${t.toFixed(2)}`}const _=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function B(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!N(t))throw new Error("Your E-mail is not valid");let s=[];c.forEach(({_id:i,count:o=1})=>{s.push({productId:i,amount:o})});const n=await E(t,s);M(n)}catch{P()}}function N(e){return _.test(e)}function M(e){f(),g.reset(),console.log(e)}function P(e){console.log(e)}
//# sourceMappingURL=commonHelpers.js.map
