import{C as g,a as M,S as k,i as m}from"./assets/vendor-62372433.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const E="mySecretKey123";function O(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return g.AES.decrypt(e,E).toString(g.enc.Utf8)}async function y(e,o=1){try{const t=await M.get("https://pixabay.com/api/",{params:{key:O(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}});return console.log(t),t.data}catch(t){throw console.error("Error fetching photos:",t),t}}function q(e){return`
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
`}function v(e){return e.map(q).join("")}function a(e,o,t="full"){switch(t){case"full":e.innerHTML=o;break;default:e.insertAdjacentHTML(t,o);break}}function d(e){e.classList.remove("visually-hidden")}function p(e){e.classList.add("visually-hidden")}const b={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},w={...b,color:"#ef4040",iconUrl:"error-icon.svg"},z={...b,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},C='<li class="load-message">Loading images, please wait...</li>',i=document.querySelector(".gallery"),H=document.querySelector(".search-button"),l=document.querySelector(".search-input"),L=new k(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),c=document.querySelector(".load-more-button"),h=document.querySelector(".secondary-load-message");let u=1,S="";H.addEventListener("click",R);function R(e){e.preventDefault();let o=String(l.value.trim());o=o.replace(/[*]/g,"");let t="";if(!o||o.length<3){m.warning({...z,message:"Enter data for search, please. Min. 3 symbols."}),l.value="",a(i,"");return}a(i,C),S=o,u=1,y(o,u).then(n=>{console.log(n),n.hits.length===0?(m.error({...w,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),l.value="",a(i,"")):(l.value="",t=v(n.hits),a(i,t),L.refresh(),d(c))}).catch(n=>{console.error("сталося щось дивне",n)})}c.addEventListener("click",x);function x(e){e.preventDefault(),u+=1;let o="";d(h),p(c),y(S,u).then(t=>{console.log(t),t.hits.length===0?m.error({...w,message:"We're sorry, but you've reached<br>the end of search results."}):(o=v(t.hits),a(i,o,"beforeend"),L.refresh(),d(c))}).catch(t=>{console.error("сталося щось дивне",t)}),p(h)}window.onerror=(e,o,t,n,r)=>{console.error("Unhandled error:",r)};
//# sourceMappingURL=commonHelpers.js.map
