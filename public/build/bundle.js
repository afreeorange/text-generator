var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){for(const n in e)g(t,n,e[n])}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}let w;function x(t){w=t}const b=[],B=[],S=[],C=[],k=Promise.resolve();let _=!1;function E(t){S.push(t)}const j=new Set;let G=0;function T(){const t=w;do{for(;G<b.length;){const t=b[G];G++,x(t),A(t.$$)}for(x(null),b.length=0,G=0;B.length;)B.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];j.has(e)||(j.add(e),e())}S.length=0}while(b.length);for(;C.length;)C.pop()();_=!1,j.clear(),x(t)}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const I=new Set;function O(t,e){t&&t.i&&(I.delete(t),t.i(e))}function z(t,e,o,i){const{fragment:l,on_mount:s,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,o),i||E((()=>{const e=s.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(E)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,c,i,l,s,u,f=[-1]){const d=w;x(e);const p=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&N(e,t)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();n.intro&&O(e.$$.fragment),z(e,n.target,n.anchor,n.customElement),T()}x(d)}class q{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var L=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"],M=["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","𝗶","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗾","𝗿","𝘀","𝘁","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇","𝗔","𝗕","𝗖","𝗗","𝗘","𝗙","𝗚","𝗛","𝗜","𝗝","𝗞","𝗟","𝗠","𝗡","𝗢","𝗣","𝗤","𝗥","𝗦","𝗧","𝗨","𝗩","𝗪","𝗫","𝗬","𝗭","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵","𝟬"],U=["𝙖","𝙗","𝙘","𝙙","𝙚","𝙛","𝙜","𝙝","𝙞","𝙟","𝙠","𝙡","𝙢","𝙣","𝙤","𝙥","𝙦","𝙧","𝙨","𝙩","𝙪","𝙫","𝙬","𝙭","𝙮","𝙯","𝘼","𝘽","𝘾","𝘿","𝙀","𝙁","𝙂","𝙃","𝙄","𝙅","𝙆","𝙇","𝙈","𝙉","𝙊","𝙋","𝙌","𝙍","𝙎","𝙏","𝙐","𝙑","𝙒","𝙓","𝙔","𝙕","1","2","3","4","5","6","7","8","9","0"],D=["🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉","🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉","1","2","3","4","5","6","7","8","9","0"],P=["🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺","🅻","🅼","🅽","🅾","🅿","🆀","🆁","🆂","🆃","🆄","🆅","🆆","🆇","🆈","🆉","🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺","🅻","🅼","🅽","🅾","🅿","🆀","🆁","🆂","🆃","🆄","🆅","🆆","🆇","🆈","🆉","1","2","3","4","5","6","7","8","9","0"],Q=["ⓐ","ⓑ","ⓒ","ⓓ","ⓔ","ⓕ","ⓖ","ⓗ","ⓘ","ⓙ","ⓚ","ⓛ","ⓜ","ⓝ","ⓞ","ⓟ","ⓠ","ⓡ","ⓢ","ⓣ","ⓤ","ⓥ","ⓦ","ⓧ","ⓨ","ⓩ","Ⓐ","Ⓑ","Ⓒ","Ⓓ","Ⓔ","Ⓕ","Ⓖ","Ⓗ","Ⓘ","Ⓙ","Ⓚ","Ⓛ","Ⓜ","Ⓝ","Ⓞ","Ⓟ","Ⓠ","Ⓡ","Ⓢ","Ⓣ","Ⓤ","Ⓥ","Ⓦ","Ⓧ","Ⓨ","Ⓩ","①","②","③","④","⑤","⑥","⑦","⑧","⑨","⓪,"],Y=["𝒶","𝒷","𝒸","𝒹","𝑒","𝒻","𝑔","𝒽","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","𝑜","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏","𝒜","𝐵","𝒞","𝒟","𝐸","𝐹","𝒢","𝐻","𝐼","𝒥","𝒦","𝐿","𝑀","𝒩","𝒪","𝒫","𝒬","𝑅","𝒮","𝒯","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵","𝟣","𝟤","𝟥","𝟦","𝟧","𝟨","𝟩","𝟪","𝟫","𝟢"],Z=["𝓪","𝓫","𝓬","𝓭","𝓮","𝓯","𝓰","𝓱","𝓲","𝓳","𝓴","𝓵","𝓶","𝓷","𝓸","𝓹","𝓺","𝓻","𝓼","𝓽","𝓾","𝓿","𝔀","𝔁","𝔂","𝔃","𝓐","𝓑","𝓒","𝓓","𝓔","𝓕","𝓖","𝓗","𝓘","𝓙","𝓚","𝓛","𝓜","𝓝","𝓞","𝓟","𝓠","𝓡","𝓢","𝓣","𝓤","𝓥","𝓦","𝓧","𝓨","𝓩","1","2","3","4","5","6","7","8","9","0"],H=["𝔞","𝔟","𝔠","𝔡","𝔢","𝔣","𝔤","𝔥","𝔦","𝔧","𝔨","𝔩","𝔪","𝔫","𝔬","𝔭","𝔮","𝔯","𝔰","𝔱","𝔲","𝔳","𝔴","𝔵","𝔶","𝔷","𝔄","𝔅","ℭ","𝔇","𝔈","𝔉","𝔊","ℌ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒","𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ","1","2","3","4","5","6","7","8","9","0"],J=["𝖆","𝖇","𝖈","𝖉","𝖊","𝖋","𝖌","𝖍","𝖎","𝖏","𝖐","𝖑","𝖒","𝖓","𝖔","𝖕","𝖖","𝖗","𝖘","𝖙","𝖚","𝖛","𝖜","𝖝","𝖞","𝖟","𝕬","𝕭","𝕮","𝕯","𝕰","𝕱","𝕲","𝕳","𝕴","𝕵","𝕶","𝕷","𝕸","𝕹","𝕺","𝕻","𝕼","𝕽","𝕾","𝕿","𝖀","𝖁","𝖂","𝖃","𝖄","𝖅","1","2","3","4","5","6","7","8","9","0"],K=["𝘢","𝘣","𝘤","𝘥","𝘦","𝘧","𝘨","𝘩","𝘪","𝘫","𝘬","𝘭","𝘮","𝘯","𝘰","𝘱","𝘲","𝘳","𝘴","𝘵","𝘶","𝘷","𝘸","𝘹","𝘺","𝘻","𝘈","𝘉","𝘊","𝘋","𝘌","𝘍","𝘎","𝘏","𝘐","𝘑","𝘒","𝘓","𝘔","𝘕","𝘖","𝘗","𝘘","𝘙","𝘚","𝘛","𝘜","𝘝","𝘞","𝘟","𝘠","𝘡","1","2","3","4","5","6","7","8","9","0"],R=["a̷","b̷","c̷","d̷","e̷","f̷","g̷","h̷","i̷","j̷","k̷","l̷","m̷","n̷","o̷","p̷","q̷","r̷","s̷","t̷","u̷","v̷","w̷","x̷","y̷","z̷","A̷","B̷","C̷","D̷","E̷","F̷","G̷","H̷","I̷","J̷","K̷","L̷","M̷","N̷","O̷","P̷","Q̷","R̷","S̷","T̷","U̷","V̷","W̷","X̷","Y̷","Z̷","1̷","2̷","3̷","4̷","5̷","6̷","7̷","8̷","9̷","0̷"],V=["𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫","𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡","𝟘"],X=["a̶","b̶","c̶","d̶","e̶","f̶","g̶","h̶","i̶","j̶","k̶","l̶","m̶","n̶","o̶","p̶","q̶","r̶","s̶","t̶","u̶","v̶","w̶","x̶","y̶","z̶","A̶","B̶","C̶","D̶","E̶","F̶","G̶","H̶","I̶","J̶","K̶","L̶","M̶","N̶","O̶","P̶","Q̶","R̶","S̶","T̶","U̶","V̶","W̶","X̶","Y̶","Z̶","1̶","2̶","3̶","4̶","5̶","6̶","7̶","8̶","9̶","0̶"],tt=["𝚊","𝚋","𝚌","𝚍","𝚎","𝚏","𝚐","𝚑","𝚒","𝚓","𝚔","𝚕","𝚖","𝚗","𝚘","𝚙","𝚚","𝚛","𝚜","𝚝","𝚞","𝚟","𝚠","𝚡","𝚢","𝚣","𝙰","𝙱","𝙲","𝙳","𝙴","𝙵","𝙶","𝙷","𝙸","𝙹","𝙺","𝙻","𝙼","𝙽","𝙾","𝙿","𝚀","𝚁","𝚂","𝚃","𝚄","𝚅","𝚆","𝚇","𝚈","𝚉","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿","𝟶"],et=["ａ","ｂ","ｃ","ｄ","ｅ","ｆ","ｇ","ｈ","ｉ","ｊ","ｋ","ｌ","ｍ","ｎ","ｏ","ｐ","ｑ","ｒ","ｓ","ｔ","ｕ","ｖ","ｗ","ｘ","ｙ","ｚ","Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ","１","２","３","４","５","６","７","８","９","０"],nt=["ᵃ","ᵇ","ᶜ","ᵈ","ᵉ","ᶠ","ᵍ","ʰ","ᶦ","ʲ","ᵏ","ˡ","ᵐ","ⁿ","ᵒ","ᵖ","ᵠ","ʳ","ˢ","ᵗ","ᵘ","ᵛ","ʷ","ˣ","ʸ","ᶻ","ᴬ","ᴮ","ᶜ","ᴰ","ᴱ","ᶠ","ᴳ","ᴴ","ᴵ","ᴶ","ᴷ","ᴸ","ᴹ","ᴺ","ᴼ","ᴾ","ᵠ","ᴿ","ˢ","ᵀ","ᵁ","ⱽ","ᵂ","ˣ","ʸ","ᶻ","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","⁰"],ot=["ₐ","ᵦ","𝒸","𝒹","ₑ","𝒻","𝓰","ₕ","ᵢ","ⱼ","ₖ","ₗ","ₘ","ₙ","ₒ","ₚ","ᵩ","ᵣ","ₛ","ₜ","ᵤ","ᵥ","𝓌","ₓ","ᵧ","𝓏","ₐ","B","C","D","ₑ","F","G","ₕ","ᵢ","ⱼ","ₖ","ₗ","ₘ","ₙ","ₒ","ₚ","Q","ᵣ","ₛ","ₜ","ᵤ","ᵥ","W","ₓ","Y","Z","₁","₂","₃","₄","₅","₆","₇","₈","₉","₀"];const rt={};L.forEach(((t,e)=>{rt[t]={Bold:M[e],"Bold Italic":U[e],Box:D[e],"Box Filled":P[e],Circle:Q[e],Cursive:Y[e],"Cursive Bold":Z[e],Goth:H[e],"Goth Bold":J[e],Italic:K[e],Slash:R[e],Stem:V[e],Strike:X[e],Subscript:ot[e],Superscript:nt[e],Typewriter:tt[e],Wide:et[e]}}));const ct=L,it=(t,e)=>t.map((t=>ct.includes(t)?rt[t][e]:t)).join("");function lt(n){let o,r,c=[{"stroke-width":"0"},{viewBox:"0 0 32 32"},{height:"1.5em"},{width:"1.5em"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],i={};for(let t=0;t<c.length;t+=1)i=e(i,c[t]);return{c(){o=d("svg"),r=d("path"),g(r,"d","M19.906 17.847c.429 0 .79.21 1.102.636.31.422.468.944.468 1.56 0 .619-.156 1.141-.468 1.563s-.678.634-1.102.634c-.451 0-.839-.21-1.151-.634-.307-.422-.465-.944-.465-1.563s.153-1.139.465-1.56c.312-.427.702-.636 1.151-.636zm5.519-5.715c1.202 1.303 1.809 2.884 1.809 4.738 0 1.203-.142 2.286-.415 3.249-.278.958-.629 1.743-1.048 2.343a6.705 6.705 0 0 1-1.565 1.585c-.622.461-1.195.79-1.712 1.002s-1.112.376-1.785.49c-.665.117-1.168.18-1.517.198-.336.015-.702.022-1.097.022-.088 0-.385.01-.879.024-.482.02-.896.029-1.218.029s-.736-.01-1.218-.029a56.19 56.19 0 0 0-.879-.024c-.395 0-.764-.005-1.098-.022-.35-.017-.852-.08-1.514-.198a8.023 8.023 0 0 1-1.787-.49c-.517-.21-1.089-.541-1.708-1.002a6.832 6.832 0 0 1-1.568-1.585c-.419-.6-.772-1.385-1.048-2.343-.272-.963-.414-2.046-.414-3.249 0-1.854.605-3.435 1.81-4.738-.133-.065-.14-.714-.021-1.952.107-1.239.37-2.38.797-3.421 1.503.16 3.352 1.008 5.567 2.539.748-.195 1.772-.295 3.078-.295 1.37 0 2.394.1 3.079.295 1.009-.681 1.975-1.239 2.896-1.663.936-.419 1.609-.667 2.033-.731l.634-.145c.429 1.041.692 2.185.8 3.421.124 1.237.117 1.887-.015 1.952zm-9.373 12.551c2.703 0 4.741-.324 6.125-.973 1.38-.651 2.082-1.99 2.082-4.008 0-1.17-.441-2.15-1.322-2.932a2.991 2.991 0 0 0-1.595-.781c-.595-.098-1.514-.098-2.755 0-1.236.1-2.082.145-2.537.145-.619 0-1.291-.033-2.125-.098a65.737 65.737 0 0 0-1.954-.122 6.021 6.021 0 0 0-1.538.172c-.557.133-1.008.357-1.373.681-.84.75-1.266 1.725-1.266 2.932 0 2.019.684 3.357 2.05 4.006 1.365.653 3.397.975 6.101.975zm-3.909-6.836c.424 0 .789.21 1.098.636.31.422.467.944.467 1.56 0 .619-.155 1.141-.467 1.563-.309.422-.677.634-1.098.634-.455 0-.841-.21-1.153-.634-.309-.422-.467-.944-.467-1.563s.155-1.139.467-1.56c.312-.427.699-.636 1.153-.636z"),$(o,i)},m(t,e){u(t,o,e),s(o,r)},p(t,[e]){$(o,i=function(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],l=e[c];if(l){for(const t in i)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[c]=l}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(c,[{"stroke-width":"0"},{viewBox:"0 0 32 32"},{height:"1.5em"},{width:"1.5em"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:t,o:t,d(t){t&&a(o)}}}function st(t,n,o){return t.$$set=t=>{o(0,n=e(e({},n),l(t)))},[n=l(n)]}class ut extends q{constructor(t){super(),W(this,t,st,lt,i,{})}}function at(t,e,n){const o=t.slice();return o[6]=e[n],o}function ft(t){let e,n,o,r=t[2][t[6]]+"";return{c(){e=f("div"),n=p(r),g(e,"data-style",o=t[6]),g(e,"class","svelte-6e8yn4")},m(t,o){u(t,e,o),s(e,n)},p(t,c){4&c&&r!==(r=t[2][t[6]]+"")&&y(n,r),4&c&&o!==(o=t[6])&&g(e,"data-style",o)},d(t){t&&a(e)}}}function dt(t){let e,n,o,r,c,i,l,d=t[6]+"",$=t[1]&&ft(t);function v(){return t[5](t[6])}return{c(){e=f("p"),n=f("small"),o=p(d),r=h(),$&&$.c(),c=h(),g(n,"class","svelte-6e8yn4"),g(e,"class","svelte-6e8yn4")},m(t,a){u(t,e,a),s(e,n),s(n,o),s(e,r),$&&$.m(e,null),s(e,c),i||(l=m(e,"click",v),i=!0)},p(n,r){t=n,4&r&&d!==(d=t[6]+"")&&y(o,d),t[1]?$?$.p(t,r):($=ft(t),$.c(),$.m(e,c)):$&&($.d(1),$=null)},d(t){t&&a(e),$&&$.d(),i=!1,l()}}}function pt(t){let e,n,o,r,c,i,l,d,p,$,y,w,x=Object.keys(t[2]),b=[];for(let e=0;e<x.length;e+=1)b[e]=dt(at(t,x,e));return p=new ut({props:{class:"logo"}}),{c(){e=f("input"),n=h(),o=f("main"),r=f("small"),r.textContent="Click/tap to copy",c=h();for(let t=0;t<b.length;t+=1)b[t].c();var t;i=h(),l=f("footer"),d=f("a"),(t=p.$$.fragment)&&t.c(),g(e,"placeholder","type something..."),g(e,"class","svelte-6e8yn4"),g(r,"class","svelte-6e8yn4"),g(o,"class","svelte-6e8yn4"),g(d,"href","https://github.com/afreeorange/stylish-text-generator"),g(d,"title","Source on Github"),g(d,"class","svelte-6e8yn4"),g(l,"class","svelte-6e8yn4")},m(a,f){u(a,e,f),v(e,t[0]),u(a,n,f),u(a,o,f),s(o,r),s(o,c);for(let t=0;t<b.length;t+=1)b[t].m(o,null);u(a,i,f),u(a,l,f),s(l,d),z(p,d,null),$=!0,y||(w=m(e,"input",t[4]),y=!0)},p(t,[n]){if(1&n&&e.value!==t[0]&&v(e,t[0]),14&n){let e;for(x=Object.keys(t[2]),e=0;e<x.length;e+=1){const r=at(t,x,e);b[e]?b[e].p(r,n):(b[e]=dt(r),b[e].c(),b[e].m(o,null))}for(;e<b.length;e+=1)b[e].d(1);b.length=x.length}},i(t){$||(O(p.$$.fragment,t),$=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),(void 0).c.push((()=>{I.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(p.$$.fragment,t),$=!1},d(t){t&&a(e),t&&a(n),t&&a(o),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),t&&a(i),t&&a(l),F(p),y=!1,w()}}}function ht(t,e,n){let o,r;const c=t=>{const e=document.querySelector(`[data-style="${t}"]`);navigator.clipboard.writeText(e.innerText)};let i="";return t.$$.update=()=>{1&t.$$.dirty&&n(2,o=(t=>{const e=t.split("");return{Italic:it(e,"Italic"),Bold:it(e,"Bold"),"Bold Italic":it(e,"Bold Italic"),"Alternating Case One":e.map(((t,e)=>e%2==0?t:t.toUpperCase())).join(""),"Alternating Case Two":e.map(((t,e)=>e%2==0?t.toUpperCase():t)).join(""),Box:it(e,"Box"),"Box Filled":it(e,"Box Filled"),Circle:it(e,"Circle"),Cursive:it(e,"Cursive"),"Cursive Bold":it(e,"Cursive Bold"),Goth:it(e,"Goth"),"Goth Bold":it(e,"Goth Bold"),Slash:it(e,"Slash"),Stem:it(e,"Stem"),Strike:it(e,"Strike"),Subscript:it(e,"Subscript"),Superscript:it(e,"Superscript"),Typewriter:it(e,"Typewriter"),Wide:it(e,"Wide")}})(i)),1&t.$$.dirty&&n(1,r=0!==i.length)},[i,r,o,c,function(){i=this.value,n(0,i)},t=>c(t)]}return new class extends q{constructor(t){super(),W(this,t,ht,pt,i,{})}}({target:document.body})}();
