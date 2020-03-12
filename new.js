var uhtml=function(e){"use strict";const t=new WeakMap,n=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,s=/<[a-z][^>]+$/i,o=/>[^<>]*$/,l=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,i=/\s+$/,a=(e,t)=>{for(;t--;){const n=e[t];if(s.test(n))return!0;if(o.test(n))return!1}return!1},c=(e,t,n)=>r.test(t)?e:`<${t}${n.replace(i,"")}></${t}>`;const{isArray:u}=Array,{indexOf:d,slice:f}=[],h=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;var p=(e,t,n,r,s)=>{const o=n.length;let l=t.length,i=o,a=0,c=0,u=null;for(;a<l||c<i;)if(l===a){const t=i<o?c?r(n[c-1],-0).nextSibling:r(n[i-c],0):s;for(;c<i;)e.insertBefore(r(n[c++],1),t)}else if(i===c)for(;a<l;)u&&u.has(t[a])||e.removeChild(r(t[a],-1)),a++;else if(t[a]===n[c])a++,c++;else if(t[l-1]===n[i-1])l--,i--;else{if(l-a==1&&i-c==1){u&&u.has(t[a])?e.insertBefore(r(n[c],1),r(i<o?n[i]:s,0)):e.replaceChild(r(n[c],1),r(t[a],-1));break}if(t[a]===n[i-1]&&n[c]===t[l-1]){const s=r(t[--l],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[a++],-1).nextSibling),e.insertBefore(r(n[--i],1),s),t[l]=n[i]}else{if(!u){u=new Map;let e=c;for(;e<i;)u.set(n[e],e++)}if(u.has(t[a])){const s=u.get(t[a]);if(c<s&&s<i){let o=a,d=1;for(;++o<l&&o<i&&u.has(t[o])&&u.get(t[o])===s+d;)d++;if(d>s-c){const o=r(t[a],0);for(;c<s;)e.insertBefore(r(n[c++],1),o)}else e.replaceChild(r(n[c++],1),r(t[a++],-1))}else a++}else e.removeChild(r(t[a++],-1))}}return n};const g=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),m=(e,t)=>("svg"===t?w:b)(e),b=e=>{const t=g("template");return t.innerHTML=e,t.content},w=e=>{const{content:t}=g("template"),n=g("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},v=(e,t)=>e.childNodes[t],N=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(d.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:C,importNode:$}=document,y=1!=$.length,x=y?(e,t)=>$.call(document,m(e,t),!0):m,k=y?e=>C.call(document,e,129,null,!1):e=>C.call(document,e,129);function L(e){const{type:t,path:n}=e,r=n.reduce(v,this);return"node"===t?((e,t)=>{let n;const r=document.createTextNode(""),s=o=>{switch(typeof o){case"string":case"number":case"boolean":n!==o&&(n=o,r.textContent=o,t=p(e.parentNode,t,[r],h,e));break;case"object":case"undefined":if(null==o){t=p(e.parentNode,t,[],h,e);break}default:if(n=o,u(o))if(0===o.length)t=p(e.parentNode,t,[],h,e);else switch(typeof o[0]){case"string":case"number":case"boolean":s(String(o));break;default:t=p(e.parentNode,t,o,h,e)}else"ELEMENT_NODE"in o&&(t=p(e.parentNode,t,11===o.nodeType?f.call(o.childNodes):[o],h,e))}};return s})(r,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const s=u(t)?t:[t,!1];n!==s[0]&&(n&&e.removeEventListener(r,n,s[1]),(n=s[0])&&e.addEventListener(r,n,s[1]))}}let r=!0;const s=document.createAttribute(t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNode(s),r=!1)))}})(r,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(r)}const E=new WeakMap,A=(e,t)=>{const{content:n,updates:r}=M(e,t);return{type:e,template:t,content:n,updates:r,wire:null}},T=(e,t)=>{const r=((e,t)=>{const r=[];for(let s=0,{length:o}=e;s<o;s++){const l=e[s];n.test(l)&&a(e,s+1)?r.push(l.replace(n,(e,n,r)=>`${t}${s}=${r||'"'}${n}${r?"":'"'}`)):s+1<o?r.push(l,`\x3c!--${t}${s}--\x3e`):r.push(l)}return r.join("").trim().replace(l,c)})(t,"isµ"),s=x(r,e),o=k(s),i=[],u=t.length-1;let d=0,f=`isµ${d}`;for(;d<u;){const e=o.nextNode();if(!e)throw`bad template: ${r}`;if(8===e.nodeType)e.textContent===f&&(i.push({type:"node",path:N(e)}),f=`isµ${++d}`);else{for(;e.hasAttribute(f);)i.push({type:"attr",path:N(e),name:e.getAttribute(f)}),e.removeAttribute(f),f=`isµ${++d}`;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${f}--\x3e`&&(i.push({type:"text",path:N(e)}),f=`isµ${++d}`)}}return{content:s,nodes:i}},M=(e,t)=>{const{content:n,nodes:r}=E.get(t)||S(e,t),s=$.call(document,n,!0);return{content:s,updates:r.map(L,s)}},O=(e,t)=>{const{sub:n,stack:r}=e,s={a:0,aLength:n.length,i:0,iLength:r.length},o=j(e,t,s),{a:l,i:i,aLength:a,iLength:c}=s;return l<a&&n.splice(l),i<c&&r.splice(i),o},S=(e,t)=>{const n=T(e,t);return E.set(t,n),n},j=(e,t,n)=>{const{stack:r}=e,{i:s,iLength:o}=n,{type:l,template:i,values:a}=t,c=s===o;c&&(n.iLength=r.push(A(l,i))),n.i++,B(e,a,n);let u=r[s];c||u.template===i&&u.type===l||(r[s]=u=A(l,i));const{content:d,updates:h,wire:p}=u;for(let e=0,{length:t}=h;e<t;e++)h[e](a[e]);return p||(u.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(1===n)return t[0];const r=f.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(d))},B=(e,t,n)=>{for(let r=0,{length:s}=t;r<s;r++){const s=t[r];if("object"==typeof s&&s)if(s instanceof W)t[r]=j(e,s,n);else if(u(s))for(let t=0,{length:r}=s;t<r;t++){const r=s[t];if("object"==typeof r&&r&&r instanceof W){const{sub:o}=e,{a:l,aLength:i}=n;l===i&&(n.aLength=o.push({sub:[],stack:[],wire:null})),n.a++,s[t]=O(o[l],r)}}}};function W(e,t,n){this.type=e,this.template=t,this.values=n}const{create:z,defineProperties:_}=Object,D=e=>{const t=new WeakMap;return _((t,...n)=>new W(e,t,n),{for:{value(n,r){const s=t.get(n)||t.set(n,z(null)).get(n);return s[r]||(s[r]=(o={sub:[],stack:[],wire:null},(t,...n)=>O(o,new W(e,t,n))));var o}},node:{value:(t,...n)=>O({sub:[],stack:[],wire:null},new W(e,t,n))}})},H=D("html"),P=D("svg");return e.html=H,e.render=(e,n)=>{const r="function"==typeof n?n():n,s=t.get(e)||(e=>{const n={sub:[],stack:[],wire:null};return t.set(e,n),n})(e),o=r instanceof W?O(s,r):r;return o!==s.wire&&(s.wire=o,e.textContent="",e.appendChild(o.valueOf())),e},e.svg=P,e}({});
