import{C as y,a as q,S as B,i as h}from"./assets/vendor-62372433.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const C="mySecretKey123";function E(){const e="U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==";return y.AES.decrypt(e,C).toString(y.enc.Utf8)}async function b(e,t=1,s=15){try{return(await q.get("https://pixabay.com/api/",{params:{key:E(),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}})).data}catch(o){throw console.error("Error fetching photos:",o),o}}function O(e){return`
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
`}function S(e){return e.map(O).join("")}function l(e,t,s="full"){switch(s){case"full":e.innerHTML=t;break;default:e.insertAdjacentHTML(s,t);break}}function u(e){e.classList.remove("visually-hidden")}function m(e){e.classList.add("visually-hidden")}const L={message:"Common message",theme:"dark",position:"topRight",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",imageWidth:24},M={...L,color:"#ef4040",iconUrl:"error-icon.svg"},R={...L,title:"Warning",color:"#ffa000",iconUrl:"caution-icon.svg"},c=document.querySelector(".gallery"),z=document.querySelector(".search-button"),g=document.querySelector(".search-input"),H=new B(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),a=document.querySelector(".load-more-button"),v=document.querySelector(".load-message"),w=document.querySelector(".secondary-load-message");let i=1,k="",f=15,d=0;z.addEventListener("click",D);function D(e){e.preventDefault();let t=String(g.value.trim());t=t.replace(/[*]/g,"");let s="";if(!t||t.length<3){h.warning({...R,message:"Enter data for search, please. Min. 3 symbols."}),g.value="",l(c,"");return}u(v),l(c,""),k=t,i=1,b(t,i,f).then(o=>{d=o.totalHits,o.hits.length===0?(h.error({...M,message:"Sorry, there are no images matching<br> your search query. Please, try again!"}),g.value="",l(c,"")):(g.value="",s=S(o.hits),m(v),l(c,s),H.refresh(),d>i*f?u(a):m(a))}).catch(o=>{console.error("сталося щось дивне",o)})}a.addEventListener("click",x);function x(e){e.preventDefault(),i+=1;let t="";const s=Date.now();console.log("--- show load message ---"),u(w),d>i*f?u(a):m(a),b(k,i,f).then(o=>{if(d=o.totalHits,o.hits.length===0)h.error({...M,message:"We're sorry, but you've reached<br>the end of search results."});else{t=S(o.hits),l(c,t,"beforeend"),H.refresh();const r=document.querySelector(".gallery-item");window.scrollBy({top:r.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),d>i*f?u(a):m(a)}}).catch(o=>{console.error("сталося щось дивне",o)}),console.log(Date.now()-s,"--- hide load message ---"),m(w)}window.onerror=(e,t,s,o,r)=>{console.error("Unhandled error:",r)};
//# sourceMappingURL=commonHelpers.js.map
