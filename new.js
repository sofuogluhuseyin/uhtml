var uhtml=function(e){"use strict";const t=new WeakMap,n=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),r=e=>{const t=n("template");return t.innerHTML=e,t.content},o=e=>{const{content:t}=n("template"),r=n("div");r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:o}=r.firstChild;let{length:s}=o;for(;s--;)t.appendChild(o[0]);return t};var s=document.importNode;const{isArray:l}=Array,{indexOf:c,slice:a}=[],i="".trimStart||(e=>e.replace(/^[ \f\n\r\t]+/,"")),u="".trimEnd||(e=>e.replace(/[ \f\n\r\t]+$/,"")),d=(e,t)=>{const n=`<${t}></${t}>`,r=e.querySelectorAll("textarea,style");for(let e=0,{length:t}=r;e<t;e++)if(i.call(u.call(r[e].textContent))===n)return r[e];throw new Error("textarea,style bad content")},f=(e,t)=>e.childNodes[t],p=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(c.call(n.childNodes,e)),n=(e=n).parentNode;return t},{defineProperties:h}=Object,g=e=>{const{childNodes:t}=e,{length:n}=t;if(1===n)return t[0];const r=a.call(t,0);return h(e,{remove:{value(){const e=document.createRange();return e.setStartBefore(r[1]),e.setEndAfter(r[n-1]),e.deleteContents(),r[0]}},valueOf:{value(){if(t.length!==n){const t=document.createRange();t.setStartBefore(r[0]),t.setEndAfter(r[n-1]),e.appendChild(t.extractContents())}return e}}})},m=e=>/^(?:style|textarea)$/i.test(e),w=(e,t)=>{e.removeAttributeNode(t)},b=(e,t,n,r,o,s)=>{const l="selectedIndex"in t;let a=l;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,s),l&&a&&o.selected){a=!a;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:c.call(t.querySelectorAll("option"),o)}r++}},v=(e,t,n,r,o,s)=>{const l=s-o;if(l<1)return-1;for(;n-t>=l;){let l=t,c=o;for(;l<n&&c<s&&e[l]===r[c];)l++,c++;if(c===s)return t;t=l+1}return-1},y=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,N=(e,t,n,r)=>{for(;n<r;)((o=e(t[n++],-1)).remove||$).call(o);var o},x=(e,t,n,r,o)=>{const s=t.length;let l=s,c=0,a=n.length,i=0;for(;c<l&&i<a&&t[c]===n[i];)c++,i++;for(;c<l&&i<a&&t[l-1]===n[a-1];)l--,a--;const u=c===l,d=i===a;if(u&&d)return n;if(u&&i<a)return b(r,e,n,i,a,y(r,t,c,s,o)),n;if(d&&c<l)return N(r,t,c,l),n;const f=l-c,p=a-i;let h=-1;if(f<p){if(h=v(n,i,a,t,c,l),-1<h)return b(r,e,n,i,h,r(t[c],0)),b(r,e,n,h+f,a,y(r,t,l,s,o)),n}else if(p<f&&(h=v(t,c,l,n,i,a),-1<h))return N(r,t,c,h),N(r,t,h+p,l),n;return f<2||p<2?(b(r,e,n,i,a,r(t[c],0)),N(r,t,c,l),n):(N(r,t,0,s),b(r,e,n,0,n.length,o),n)};function $(){const{parentNode:e}=this;e&&e.removeChild(this)}const A=(e,t)=>11===e.nodeType?1/t<0?t?e.remove():e.lastChild:t?e.valueOf():e.firstChild:e;function C({type:e,path:t,name:n}){const r=t.reduce(f,this);return"attr"===e?((e,t,n,r)=>{if("ref"===n)return t=>{t.current=e};if("."===n.slice(0,1))return w(e,t),r?t=>{try{e[n]=t}catch(r){e.setAttribute(n,t)}}:t=>{e[n]=t};let o;if("on"===n.slice(0,2)){w(e,t);let r=n.slice(2);return n.toLowerCase()in e&&(r=r.toLowerCase()),t=>{o!==t&&(o&&e.removeEventListener(r,o,!1),o=t,t&&e.addEventListener(r,t,!1))}}let s=!1;return n=>{o!==n&&(o=n,null==o?s||(w(e,t),s=!0):(t.value=n,s&&(e.setAttributeNode(t),s=!1)))}})(r,r.getAttributeNode(n),n,"svg"===e):m(n)?(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(r):((e,t)=>{let n;const r=document.createTextNode(""),o=s=>{switch(typeof s){case"string":case"number":case"boolean":n!==s&&(n=s,r.textContent=s,t=x(e.parentNode,t,[r],A,e));break;case"object":case"undefined":if(null==s){t=x(e.parentNode,t,[],A,e);break}default:if(n=s,isArray(s))if(0===s.length)t=x(e.parentNode,t,[],A,e);else switch(typeof s[0]){case"string":case"number":case"boolean":o(String(s));break;default:t=x(e.parentNode,t,s,A,e)}else"ELEMENT_NODE"in s&&(t=x(e.parentNode,t,11===s.nodeType?slice.call(s.childNodes):[s],A,e))}};return o})(r,[])}const L=/<([A-Za-z]+[A-Za-z0-9:._-]*)([^>]*?)(\/>)/g,k=new WeakMap,E=(e,t)=>{const{wire:n,updates:r}=O(e,t);return{type:e,template:t,wire:n,updates:r}},S=(e,t)=>{const{text:n,selectors:s}=(e=>{const t=[],n=[];for(let r=0,{length:o}=e;r<o;r++){const s=r<1?i.call(e[r]):e[r];if(/([^ \f\n\r\t\\>"'=]+)\s*=\s*(['"]?)$/.test(s)){const{$1:e}=RegExp;t.push(s.replace(/([^ \f\n\r\t\\>"'=]+)\s*=\s*(['"]?)$/,`no-$1=$2${r}`)),n.push(`[no-${e}="${r}"]`)}else t.push(s),r+1<o&&(t.push(`<no-${r}></no-${r}>`),n.push("no-"+r))}return{text:u.call(t.join("")).replace(L,T),selectors:n}})(t),l=((e,t)=>("svg"===t?o:r)(e))(n,e),c=[];for(let e=0,{length:t}=s;e<t;e++){const t=s[e],n=l.querySelector(t)||d(l,t),{ownerDocument:r}=n;if("["===t.charAt(0)){const e=t.slice(1+"no-".length,t.indexOf("="));n.removeAttribute("no-"+e);const o=r.createAttribute(e);n.setAttributeNode(o),c.push({type:"attr",path:p(n),name:e})}else{const{tagName:e}=n;if(c.push({type:"node",path:p(n),name:e}),!m(e)){const e=n.ownerDocument.createComment("µ");n.parentNode.replaceChild(e,n)}}}return{content:l,nodes:c}},O=(e,t)=>{const{content:n,nodes:r}=k.get(t)||M(e,t),o=s.call(document,n,!0),l=r.map(C,o);return{wire:g(o),updates:l}},T=(e,t,n)=>(e=>/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i.test(e))(t)?e:`<${t}${n}></${t}>`,j=(e,t)=>{const{sub:n,stack:r}=e,o={a:0,aLength:n.length,i:0,iLength:r.length},s=q(e,t,o),{a:l,i:c,aLength:a,iLength:i}=o;return l<a&&n.splice(l),c<i&&r.splice(c),s},M=(e,t)=>{const n=S(e,t);return k.set(t,n),n},q=(e,t,n)=>{const{stack:r}=e,{i:o,iLength:s}=n,{type:l,template:c,values:a}=t,i=o===s;i&&(n.iLength=r.push(E(l,c))),n.i++,B(e,a,n);let u=r[o];i||u.template===c&&u.type===l||(r[o]=u=E(l,c));const{wire:d,updates:f}=u;for(let e=0,{length:t}=f;e<t;e++)f[e](a[e]);return d},B=(e,t,n)=>{for(let r=0,{length:o}=t;r<o;r++){const o=t[r];if("object"==typeof o&&o)if(o instanceof D)t[r]=q(e,o,n);else if(l(o))for(let t=0,{length:r}=o;t<r;t++){const r=o[t];if("object"==typeof r&&r&&r instanceof D){const{sub:s}=e,{a:l,aLength:c}=n;l===c&&(n.aLength=s.push({sub:[],stack:[],wire:null})),n.a++,o[t]=j(s[l],r)}}}};function D(e,t,n){this.type=e,this.template=t,this.values=n}return e.html=(e,...t)=>new D("html",e,t),e.render=(e,n)=>{const r="function"==typeof n?n():n,o=t.get(e)||(e=>{const n={sub:[],stack:[],wire:null};return t.set(e,n),n})(e),s=r instanceof D?j(o,r):r;return s!==o.wire&&(o.wire=s,e.textContent="",e.appendChild(s.valueOf())),e},e.svg=(e,...t)=>new D("svg",e,t),e}({});
