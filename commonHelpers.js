import{C as b,a as w,i as L,S as R}from"./assets/vendor-35efa341.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const B="mySecretKey123";function C(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return b.AES.decrypt(e,B).toString(b.enc.Utf8)}w.defaults.baseURL="https://pixabay.com/api";async function S(e,t=1,o=15){try{return(await w.get("/",{params:{key:C(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:t}})).data}catch(s){throw console.error("Error fetching photos:",s),s}}const M={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},O={...M,color:"#ef4040",iconUrl:"error-icon.svg"},W={...M,color:"#ffa000",iconUrl:"caution-icon.svg"};function h(e){L.warning({...W,message:e})}function H(e){L.error({...O,message:e})}function z(e){return`
  <li class="gallery-item">
    <a href="${e.largeImageURL}"
      class="galery-item-image-link">
      <img class="galery-item-image"
        src="${e.webformatURL}"
        alt="${e.tags}" />
    </a>
    <ul class="image-info">
      <li class="image-info-item">
        <p class="info-item-caption">Likes</p>
        <p class="info-item-value">${e.likes}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Views</p>
        <p class="info-item-value">${e.views}</p>

      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Comments</p>
        <p class="info-item-value">${e.comments}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Downloads</p>
        <p class="info-item-value">${e.downloads}</p>
      </li>
    </ul>
  </li>
`}function k(e){return e.map(z).join("")}function c(e,t,o="full"){switch(o){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(o,t);break}}function f(e){e.classList.remove("visually-hidden")}function i(e){e.classList.add("visually-hidden")}const u=document.querySelector(".gallery"),U=document.querySelector(".search-button"),m=document.querySelector(".search-input"),q=new R(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),n=document.querySelector(".load-more-button"),y=document.querySelector(".load-message"),v=document.querySelector(".secondary-load-message");let l=1,E="",g=15,d=0;U.addEventListener("click",x);n.addEventListener("click",G);async function x(e){e.preventDefault();let t=String(m.value.trim());t=t.replace(/[*]/g,"");let o="",s="";if(!t||t.length<2){h("Enter data for search, please. Min. 2 symbols."),m.value="",c(u,""),i(n);return}f(y),c(u,""),i(n),E=t,l=1,s=await S(t,l,g),d=s.totalHits,s.hits.length===0?(H("Sorry, there are no images matching<br> your search query. Please, try again!"),m.value="",i(y),c(u,"")):(m.value="",o=k(s.hits),i(y),c(u,o),q.refresh(),d>l*g?f(n):(h("We're sorry, but you've reached<br>the end of search results."),i(n)))}async function G(e){e.preventDefault(),l+=1;let t="",o="";if(f(v),i(n),o=await S(E,l,g),d=o.totalHits,o.hits.length===0)H("We're sorry, but you've reached<br>the end of search results.");else{t=k(o.hits),c(u,t,"beforeend"),q.refresh();const s=document.querySelector(".gallery-item");window.scrollBy({top:s.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),d>l*g?f(n):(h("We're sorry, but you've reached<br>the end of search results."),i(n))}i(v)}window.onerror=(e,t,o,s,r)=>{console.error("Unhandled error:",r)};
//# sourceMappingURL=commonHelpers.js.map
