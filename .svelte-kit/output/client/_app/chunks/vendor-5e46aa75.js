function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function l(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function s(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,i){if(r){const c=u(n,e,o,i);t.p(c,r)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let _,m=!1;function p(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function g(t,n){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:p(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<c.length;l++){for(;s<i.length&&c[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function $(t,n,e){m&&!e?g(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function E(){return v(" ")}function w(){return v("")}function N(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function S(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function j(t,n,e,o){return S(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function z(t,n,e){return j(t,n,e,y)}function B(t,n,e){return j(t,n,e,b)}function C(t,n){return S(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>v(n)),!0)}function M(t){return C(t," ")}function O(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function I(t){_=t}function L(){if(!_)throw new Error("Function called outside component initialization");return _}function q(t){L().$$.on_mount.push(t)}function D(t){L().$$.after_update.push(t)}function F(t,n){L().$$.context.set(t,n)}function H(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const P=[],G=[],J=[],K=[],W=Promise.resolve();let Q=!1;function R(t){J.push(t)}let U=!1;const V=new Set;function X(){if(!U){U=!0;do{for(let t=0;t<P.length;t+=1){const n=P[t];I(n),Y(n.$$)}for(I(null),P.length=0;G.length;)G.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];V.has(n)||(V.add(n),n())}J.length=0}while(P.length);for(;K.length;)K.pop()();Q=!1,U=!1,V.clear()}}function Y(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}const Z=new Set;let tt;function nt(){tt={r:0,c:[],p:tt}}function et(){tt.r||r(tt.c),tt=tt.p}function ot(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function rt(t,n,e,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function it(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ct(t){return"object"==typeof t&&null!==t?t:{}}function at(t){t&&t.c()}function lt(t,n){t&&t.l(n)}function st(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,o),c||R((()=>{const n=l.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(R)}function ut(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(P.push(t),Q||(Q=!0,W.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function dt(n,e,i,c,a,l,s,u=[-1]){const f=_;I(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(d.root);let h=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&ft(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){m=!0;const t=A(e.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();e.intro&&ot(n.$$.fragment),st(n,e.target,e.anchor,e.customElement),m=!1,X()}I(f)}class ht{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t=[];function mt(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!_t.length;for(const e of r)e[1](),_t.push(e,n);if(t){for(let t=0;t<_t.length;t+=2)_t[t][0](_t[t+1]);_t.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.add(l),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}export{q as A,n as B,mt as C,g as D,s as E,b as F,B as G,T as H,N as I,d as J,h as K,f as L,H as M,t as N,l as O,ht as S,A as a,k as b,z as c,x as d,y as e,$ as f,C as g,O as h,dt as i,at as j,E as k,w as l,lt as m,M as n,st as o,it as p,ct as q,nt as r,c as s,v as t,rt as u,ut as v,et as w,ot as x,F as y,D as z};
