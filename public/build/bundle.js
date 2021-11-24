var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function d(){return i(" ")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}let v;function $(t){v=t}const g=[],j=[],x=[],b=[],_=Promise.resolve();let C=!1;function k(t){x.push(t)}let w=!1;const E=new Set;function S(){if(!w){w=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];$(e),O(e.$$)}for($(null),g.length=0;j.length;)j.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(g.length);for(;b.length;)b.pop()();C=!1,w=!1,E.clear()}}function O(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const A=new Set;function L(t,e){-1===t.$$.dirty[0]&&(g.push(t),C||(C=!0,_.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(o,r,l,c,i,d,f,p=[-1]){const m=v;$(o);const h=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||m.$$.root};f&&f(h.root);let y=!1;if(h.ctx=l?l(o,r.props||{},((t,e,...n)=>{const s=n.length?n[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),y&&L(o,t)),e})):[],h.update(),y=!0,s(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();r.intro&&((g=o.$$.fragment)&&g.i&&(A.delete(g),g.i(j))),function(t,n,o,r){const{fragment:l,on_mount:u,on_destroy:c,after_update:i}=t.$$;l&&l.m(n,o),r||k((()=>{const n=u.map(e).filter(a);c?c.push(...n):s(n),t.$$.on_mount=[]})),i.forEach(k)}(o,r.target,r.anchor,r.customElement),S()}var g,j;$(m)}function P(t){let e,n,s,a,o,f,m,y,v,$,g,j;return{c(){e=c("div"),n=c("span"),s=i("Similarity: "),a=i(t[4]),o=d(),f=c("span"),m=i("Distance: "),y=i(t[5]),v=d(),$=c("span"),g=i("Word Count: "),j=i(t[6]),p(n,"class","svelte-u1jmy6"),p(f,"class","svelte-u1jmy6"),p($,"class","svelte-u1jmy6"),p(e,"class","results svelte-u1jmy6")},m(t,u){l(t,e,u),r(e,n),r(n,s),r(n,a),r(e,o),r(e,f),r(f,m),r(f,y),r(e,v),r(e,$),r($,g),r($,j)},p(t,e){16&e&&h(a,t[4]),32&e&&h(y,t[5]),64&e&&h(j,t[6])},d(t){t&&u(e)}}}function T(e){let n,a,o,m,v,$,g,j,x,b,_,C,k,w,E,S,O,A,L,N,T,z,R,W,q,B,D,J,M,F,G,H,I,K,Q,U,V,X,Y,Z=e[4]&&P(e);return{c(){n=c("main"),a=c("article"),o=c("textarea"),m=d(),v=c("div"),$=c("div"),g=c("p"),g.textContent="Small or Large changes?",j=d(),x=c("article"),b=c("span"),b.textContent="Small",_=d(),C=c("input"),k=d(),w=c("span"),w.textContent="Large",E=d(),S=c("div"),O=c("p"),O.textContent="Reduce or expand word count?",A=d(),L=c("article"),N=c("span"),N.textContent="Reduce",T=d(),z=c("input"),R=d(),W=c("span"),W.textContent="Expand",q=d(),B=c("div"),D=c("button"),D.textContent="Paraphrase",J=d(),M=c("div"),F=c("span"),G=i("Word Count: "),H=i(e[7]),I=d(),K=c("article"),Q=c("p"),U=i(e[1]),V=d(),Z&&Z.c(),p(o,"placeholder","Enter text that you'd like to paraphrase"),p(o,"class","user_text svelte-u1jmy6"),p(g,"class","svelte-u1jmy6"),p(b,"class","svelte-u1jmy6"),p(C,"type","range"),p(C,"min","1"),p(C,"max","4"),p(C,"class","svelte-u1jmy6"),p(w,"class","svelte-u1jmy6"),p(x,"class","slide svelte-u1jmy6"),p($,"class","svelte-u1jmy6"),p(O,"class","svelte-u1jmy6"),p(N,"class","svelte-u1jmy6"),p(z,"type","range"),p(z,"min","1"),p(z,"max","3"),p(z,"class","svelte-u1jmy6"),p(W,"class","svelte-u1jmy6"),p(L,"class","slide svelte-u1jmy6"),p(S,"class","svelte-u1jmy6"),p(v,"class","sliders svelte-u1jmy6"),p(D,"class","btn svelte-u1jmy6"),p(B,"class","btnContainer svelte-u1jmy6"),p(F,"class","svelte-u1jmy6"),p(M,"class","results svelte-u1jmy6"),p(a,"class","io paraphrase_form svelte-u1jmy6"),p(Q,"class","svelte-u1jmy6"),p(K,"class","io output svelte-u1jmy6"),p(n,"class","paraphrase svelte-u1jmy6")},m(t,s){l(t,n,s),r(n,a),r(a,o),y(o,e[0]),r(a,m),r(a,v),r(v,$),r($,g),r($,j),r($,x),r(x,b),r(x,_),r(x,C),y(C,e[3]),r(x,k),r(x,w),r(v,E),r(v,S),r(S,O),r(S,A),r(S,L),r(L,N),r(L,T),r(L,z),y(z,e[2]),r(L,R),r(L,W),r(a,q),r(a,B),r(B,D),r(a,J),r(a,M),r(M,F),r(F,G),r(F,H),r(n,I),r(n,K),r(K,Q),r(Q,U),r(K,V),Z&&Z.m(K,null),X||(Y=[f(o,"input",e[9]),f(C,"change",e[10]),f(C,"input",e[10]),f(z,"change",e[11]),f(z,"input",e[11]),f(D,"click",e[8])],X=!0)},p(t,[e]){1&e&&y(o,t[0]),8&e&&y(C,t[3]),4&e&&y(z,t[2]),128&e&&h(H,t[7]),2&e&&h(U,t[1]),t[4]?Z?Z.p(t,e):(Z=P(t),Z.c(),Z.m(K,null)):Z&&(Z.d(1),Z=null)},i:t,o:t,d(t){t&&u(n),Z&&Z.d(),X=!1,s(Y)}}}function z(t,e,n){let s,a,o="",r="",l=1,u=3,c=0,i=0;return t.$$.update=()=>{1&t.$$.dirty&&n(7,s=o.split(" ").length),2&t.$$.dirty&&n(6,a=r.split(" ").length)},[o,r,l,u,c,i,a,s,async function(){n(1,r="");const t=await fetch("https://finished-ainize-paraphrase-app-imjeffhi4.endpoint.ainize.ai/paraphrase/",{method:"POST",body:JSON.stringify({text:o,distance:u,wordCount:l})}),e=await t.json();n(1,r=e.Paraphrase),n(4,c=e.Similarity),n(5,i=e.distance)},function(){o=this.value,n(0,o)},function(){u=m(this.value),n(3,u)},function(){l=m(this.value),n(2,l)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,z,T,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
