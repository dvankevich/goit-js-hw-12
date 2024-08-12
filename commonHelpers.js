import{C as m,S as g,i as f}from"./assets/vendor-3e3f3885.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const p="mySecretKey123";function d(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return m.AES.decrypt(e,p).toString(m.enc.Utf8)}function h(e){const s=`https://pixabay.com/api/?${new URLSearchParams({key:d(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log("Error fetching photos:",o))}function y(e){return`
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
`}function w(e){return e.map(y).join("")}function a(e,r,s="full"){switch(s){case"full":e.innerHTML=r;break;default:e.insertAdjacentHTML(s,r);break}}const u={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},v={...u,color:"#ef4040",iconUrl:"error-icon.svg"},L={...u,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},S='<li class="load-message">Loading images, please wait...</li>',n=document.querySelector(".gallery"),b=document.querySelector(".search-button"),l=document.querySelector(".search-input"),k=new g(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});b.addEventListener("click",E);function E(e){e.preventDefault();let r=String(l.value.trim());r=r.replace(/[*]/g,"");let s="";if(!r||r.length<3){f.warning({...L,message:"Enter data for search, please. Min. 3 symbols."}),l.value="",a(n,"");return}a(n,S),h(r).then(o=>{o.hits.length===0?(f.error({...v,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),l.value="",a(n,"")):(l.value="",s=w(o.hits),a(n,s),k.refresh())}).catch(o=>{console.error("сталося щось дивне",o)})}window.onerror=(e,r,s,o,t)=>{console.error("Unhandled error:",t)};
//# sourceMappingURL=commonHelpers.js.map
