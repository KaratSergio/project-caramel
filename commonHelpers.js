import"./assets/styles-9e0538e0.js";import{a as m}from"./assets/vendor-b592f4c5.js";const c="added-item";let s=[];const I=document.querySelector(".js-item-count"),l=document.querySelector(".js-empty-basket"),d=document.querySelector(".js-filled-basket"),g=document.querySelector(".js-items-container"),E=document.querySelector(".total-count-text"),f=document.querySelector(".js-checkout-form"),_=document.querySelector(".js-item-button");f.addEventListener("submit",D);_.addEventListener("click",P);O();function O(){s=[{_id:"640c2dd963a319ea671e37d4",name:"Banana",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37d4.png",category:"Fresh_Produce",price:.69,size:"1 piece",is10PercentOff:!0,popularity:108},{_id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:"16 oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e3864",name:"Black Beans",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3864.png",category:"Pantry_Items",price:1.99,size:"16oz",is10PercentOff:!1,popularity:0},{_id:"640c2dd963a319ea671e37ad",name:"Black Olives",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37ad.png",category:"Fresh_Produce",price:3.99,size:"1 jar (16 oz)",is10PercentOff:!1,popularity:0}],localStorage.setItem(c,JSON.stringify(s))}$();function $(){try{p(),h(s),g.innerHTML=S(s),r(s)}catch(e){console.log(e.message)}}function p(){const e=localStorage.getItem(c);e&&(s=JSON.parse(e))}function P(e){const t=e.target.closest("button");if(!t)return;switch(t.attributes.class.value){case"basket-clear-container":B();break;case"delete-item-button":const a=y(e);C(a),p(),g.innerHTML=S(s);break;case"decrease-button":u(e,-1);break;case"increase-button":u(e,1);break}}function B(){s=[],localStorage.setItem(c,JSON.stringify(s)),h(s)}function h(e){I.textContent=e.length,j(e.length)}function C(e){for(let t=0;t<=s.length;t+=1){const{_id:i}=s[t];if(i===e){s.splice(t,1),b(s),r(s);return}}}function y(e){return e.target.closest("li").dataset.id}function u(e,t){try{const i=y(e),a=e.target.closest("div");let n=Number(a.children.counter.textContent)+t;if(a.children.counter.textContent=n,z(i,n),r(s),n<=1){q(a);return}w(a)}catch(i){console.log(i.message)}}function q(e){e.children.decrease.children[0].classList.add("hide"),e.children.decrease.disabled=!0}function w(e){e.children.decrease.children[0].classList.remove("hide"),e.children.decrease.disabled=!1}function z(e,t){for(let i=0;i<=s.length;i+=1){const{_id:a}=s[i];if(a===e){s[i].count=t,b(s);return}}}function b(e){localStorage.setItem(c,JSON.stringify(e))}function j(e){if(e===0){l.classList.remove("hide"),d.classList.add("hide");return}else l.classList.add("hide"),d.classList.remove("hide")}function S(e){return e.map(({_id:t,name:i,img:a,category:n,size:o,is10PercentOff:R,price:k,count:L=1})=>`
        <li class="item-container" data-id="${t}">
          <div class="item-img-link">
            <img class="item-img" src="${a}" alt="${i}" loading="lazy" />
          </div>
          <div class="item-info">
            <div class="item-title-container">
              <h4 class="item-title">${i}</h4>
              <button type="button" class="delete-item-button">
                <svg class="delete-item-icon" width="20" height="20">
                  <use href="./images/icons.svg#delete-icon"></use>
                </svg>
              </button>
            </div>
            <ul class="item-parameter-list">
              <li class="item-category">Category:</li>
              <li class="item-parameter">${n}</li>
              <li class="item-category">Size:</li>
              <li class="item-parameter">${o}</li>
            </ul>
            <div class="total-item-container">
              <p class="item-price">$${k}</p>
              <div class="item-counter-container">
                <button class="decrease-button" disabled name="decrease" type="button">
                  <svg class="decrease-icon hide" width="18" height="18">
                    <use href="./images/icons.svg#minus"></use>
                  </svg>
                </button>
                <p class="item-counter" name="counter">${L}</p>
                <button class="increase-button" name="increase" type="button">
                  <svg class="increase-icon" width="18" height="18">
                    <use href="./images/icons.svg#plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        `).join("")}function r(e){let t=0;e.forEach(({price:i,count:a=1})=>{t+=i*a}),E.textContent=`$${t.toFixed(2)}`}const x=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;document.querySelector(".email-input");async function D(e){try{e.preventDefault();const t=e.target.elements.email.value;if(!F(t))throw new Error("Your E-mail is not valid");let i=[];s.forEach(({_id:n,count:o=1})=>{i.push({productId:n,amount:o})});const a=await A(t,i);N(a)}catch{T()}}function F(e){return x.test(e)}function N(e){f.reset(),console.log(e)}function T(e){console.log(e)}const v="https://food-boutique.b.goit.study/api/";m.defaults.baseURL=v;async function A(e,t){return await m.post(`${v}orders`,{email:e,products:t}).then(i=>i.data)}
//# sourceMappingURL=commonHelpers.js.map
