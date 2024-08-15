## Functions

<dl>
<dt><a href="#getImagesAxios">getImagesAxios(searchTerm, page, itemsPerPage)</a> ⇒</dt>
<dd></dd>
<dt><a href="#getGalleryMarkdown">getGalleryMarkdown(images)</a> ⇒</dt>
<dd></dd>
<dt><a href="#drawGallery">drawGallery(gallery, markdown, mode:)</a></dt>
<dd></dd>
<dt><a href="#showHtmlObject">showHtmlObject(htmlObject)</a></dt>
<dd><p>add class visually-hidden to Object</p>
</dd>
<dt><a href="#hideHtmlObject">hideHtmlObject(htmlObject)</a></dt>
<dd><p>remove class visually-hidden from Object</p>
</dd>
</dl>

<a name="getImagesAxios"></a>

## getImagesAxios(searchTerm, page, itemsPerPage) ⇒
**Kind**: global function  
**Returns**: JSON object  

| Param | Type | Description |
| --- | --- | --- |
| searchTerm | <code>string</code> |  |
| page | <code>Number</code> | number. default: 1. |
| itemsPerPage | <code>Number</code> | number. default: 15. |

<a name="getGalleryMarkdown"></a>

## getGalleryMarkdown(images) ⇒
**Kind**: global function  
**Returns**: HTML markdown for gallery  

| Param | Type | Description |
| --- | --- | --- |
| images | <code>Array</code> | array |

<a name="drawGallery"></a>

## drawGallery(gallery, markdown, mode:)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| gallery | <code>Object</code> | gallery DOM object |
| markdown | <code>String</code> | HTML markdown for gallery |
| mode: | <code>String</code> | full (default) - replace with InnerHTML beforebegin, afterbegin, beforeend, afterend - insert with insertAdjacentHTML |

<a name="showHtmlObject"></a>

## showHtmlObject(htmlObject)
add class visually-hidden to Object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| htmlObject | <code>Object</code> | DOM Object to show |

<a name="hideHtmlObject"></a>

## hideHtmlObject(htmlObject)
remove class visually-hidden from Object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| htmlObject | <code>Object</code> | DOM Object to hide |

