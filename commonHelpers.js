import{C as y,a as H,S as q,i as h}from"./assets/vendor-62372433.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const B="mySecretKey123";function C(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return y.AES.decrypt(e,B).toString(y.enc.Utf8)}async function b(e,t=1,r=15){try{return(await H.get("https://pixabay.com/api/",{params:{key:C(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:t}})).data}catch(s){throw console.error("Error fetching photos:",s),s}}function E(e){return`
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
`}function w(e){return e.map(E).join("")}function l(e,t,r="full"){switch(r){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(r,t);break}}function d(e){e.classList.remove("visually-hidden")}function g(e){e.classList.add("visually-hidden")}const L={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},S={...L,color:"#ef4040",iconUrl:"error-icon.svg"},O={...L,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},R='<li class="load-message">Loading images, please wait...</li>',c=document.querySelector(".gallery"),z=document.querySelector(".search-button"),m=document.querySelector(".search-input"),M=new q(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),a=document.querySelector(".load-more-button"),v=document.querySelector(".secondary-load-message");let n=1,k="",u=15,f=0;z.addEventListener("click",x);function x(e){e.preventDefault();let t=String(m.value.trim());t=t.replace(/[*]/g,"");let r="";if(!t||t.length<3){h.warning({...O,message:"Enter data for search, please. Min. 3 symbols."}),m.value="",l(c,"");return}l(c,R),k=t,n=1,b(t,n,u).then(s=>{f=s.totalHits,s.hits.length===0?(h.error({...S,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),m.value="",l(c,"")):(m.value="",r=w(s.hits),l(c,r),M.refresh(),f>n*u?d(a):g(a))}).catch(s=>{console.error("сталося щось дивне",s)})}a.addEventListener("click",G);function G(e){e.preventDefault(),n+=1;let t="";d(v),f>n*u?d(a):g(a),b(k,n,u).then(r=>{if(f=r.totalHits,r.hits.length===0)h.error({...S,message:"We're sorry, but you've reached<br>the end of search results."});else{t=w(r.hits),l(c,t,"beforeend"),M.refresh();const s=document.querySelector(".gallery-item");window.scrollBy({top:s.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),f>n*u?d(a):g(a)}}).catch(r=>{console.error("сталося щось дивне",r)}),g(v)}window.onerror=(e,t,r,s,o)=>{console.error("Unhandled error:",o)};
//# sourceMappingURL=commonHelpers.js.map
