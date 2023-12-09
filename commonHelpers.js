import{c as I}from"./assets/get-api-a2237a0a.js";import"./assets/vendor-8c378b12.js";const o="added-item";let i=[];const L=document.querySelector(".js-item-count"),l=document.querySelector(".js-empty-basket"),d=document.querySelector(".js-filled-basket"),m=document.querySelector(".js-items-container"),E=document.querySelector(".total-count-text"),g=document.querySelector(".js-checkout-form"),_=document.querySelector(".js-item-button"),C=document.querySelector("#countProducts");g.addEventListener("submit",D);_.addEventListener("click",P);O();function O(){i=[{_id:"640c2dd963a319ea671e37d4",name:"Banana",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png",category:"Fresh_Produce",price:.69,size:"1 piece",is10PercentOff:!0,popularity:108},{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3864",name:"Black Beans",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",category:"Pantry_Items",price:1.99,size:"16oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e37ad",name:"Black Olives",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",category:"Fresh_Produce",price:3.99,size:"1 jar (16 oz)",is10PercentOff:!1,popularity:0}],localStorage.setItem(o,JSON.stringify(i))}$();function $(){try{f(),h(i),m.innerHTML=S(i),r(i)}catch(e){console.log(e.message)}}function f(){const e=localStorage.getItem(o);e&&(i=JSON.parse(e))}function P(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":p();break;case"delete-item-button":const c=y(e);q(c),f(),m.innerHTML=S(i);break;case"decrease-button":u(e,-1);break;case"increase-button":u(e,1);break}}function p(){i=[],localStorage.setItem(o,JSON.stringify(i)),h(i)}function h(e){L.textContent=e.length,C.textContent=`Cart (${e.length})`,w(e.length)}function q(e){for(let t=0;t<=i.length;t+=1){const{_id:s}=i[t];if(s===e){i.splice(t,1),b(i),r(i);return}}}function y(e){return e.target.closest("li").dataset.id}function u(e,t){try{const s=y(e),c=e.target.closest("div");let n=Number(c.children.counter.textContent)+t;if(c.children.counter.textContent=n,j(s,n),r(i),n<=1){z(c);return}B(c)}catch(s){console.log(s.message)}}function z(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function B(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function j(e,t){for(let s=0;s<=i.length;s+=1){const{_id:c}=i[s];if(c===e){i[s].count=t,b(i);return}}}function b(e){localStorage.setItem(o,JSON.stringify(e))}function w(e){if(e===0){l.classList.remove("hide"),d.classList.add("hide");return}else l.classList.add("hide"),d.classList.remove("hide")}function S(e){return e.map(({_id:t,name:s,img:c,category:n,size:a,is10PercentOff:A,price:v,count:k=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${c}" alt="${s}" loading="lazy" />
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
              <li class="item-parameter">${n}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${a}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${v}</p>
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
        `).join("")}function r(e){let t=0;e.forEach(({price:s,count:c=1})=>{t+=s*c}),E.textContent=`$${t.toFixed(2)}`}const x=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function D(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!F(t))throw new Error("Your E-mail is not valid");let s=[];i.forEach(({_id:n,count:a=1})=>{s.push({productId:n,amount:a})});const c=await I(t,s);N(c)}catch{T()}}function F(e){return x.test(e)}function N(e){p(),g.reset(),console.log(e)}function T(e){console.log(e)}
//# sourceMappingURL=commonHelpers.js.map
