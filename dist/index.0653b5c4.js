function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},o=e.parcelRequire3a11;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire3a11=o),o.register("27Lyk",(function(e,n){var r,i;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>i),(t=>i=t));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.0653b5c4.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(t){return t&&t.Math==Math&&t};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof e&&e)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,p,h={};p=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d=Function.prototype,v=d.call,g=p&&d.bind.bind(v,v);h=p?g:function(t){return function(){return v.apply(t,arguments)}};var m,y={},b="object"==typeof document&&document.all,_=(m={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;y=m.IS_HTMLDDA?function(t){return"function"==typeof t||t===_}:function(t){return"function"==typeof t};var w,E,S,O={};S=function(t){return null==t};var j=TypeError;E=function(t){if(S(t))throw j("Can't call method on "+t);return t};var L=Object;w=function(t){return L(E(t))};var F=h({}.hasOwnProperty);O=Object.hasOwn||function(t,e){return F(w(t),e)};var T,k=Function.prototype,$=c&&Object.getOwnPropertyDescriptor,x=O(k,"name"),P={EXISTS:x,PROPER:x&&"something"===function(){}.name,CONFIGURABLE:x&&(!c||c&&$(k,"name").configurable)}.CONFIGURABLE,M={},I={},A=Object.defineProperty;T=function(t,e){try{A(a,t,{value:e,configurable:!0,writable:!0})}catch(n){a[t]=e}return e};var N="__core-js_shared__",q=a[N]||T(N,{});I=q;var C=h(Function.toString);y(I.inspectSource)||(I.inspectSource=function(t){return C(t)}),M=I.inspectSource;var R,H,D=a.WeakMap;H=y(D)&&/native code/.test(String(D));var z={},G=m.all;z=m.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:y(t)||t===G}:function(t){return"object"==typeof t?null!==t:y(t)};var U,B,W,V={},Y=a.document,Q=z(Y)&&z(Y.createElement);W=function(t){return Q?Y.createElement(t):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(W("div"),"a",{get:function(){return 7}}).a}));var J;J=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(t){if(z(t))return t;throw Z(X(t)+" is not an object")};var tt,et,nt={},rt=Function.prototype.call;nt=p?rt.bind(rt):function(){return rt.apply(rt,arguments)};var it,ot={},at=function(t){return y(t)?t:void 0};it=function(t,e){return arguments.length<2?at(a[t]):a[t]&&a[t][e]};var st={};st=h({}.isPrototypeOf);var ct,ut,lt,ft={};ft="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var pt,ht,dt=a.process,vt=a.Deno,gt=dt&&dt.versions||vt&&vt.version,mt=gt&&gt.v8;mt&&(ht=(pt=mt.split("."))[0]>0&&pt[0]<4?1:+(pt[0]+pt[1])),!ht&&ft&&(!(pt=ft.match(/Edge\/(\d+)/))||pt[1]>=74)&&(pt=ft.match(/Chrome\/(\d+)/))&&(ht=+pt[1]),lt=ht,ct=(ut=!!Object.getOwnPropertySymbols&&!u((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&lt&&lt<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var yt=Object;ot=ct?function(t){return"symbol"==typeof t}:function(t){var e=it("Symbol");return y(e)&&st(e.prototype,yt(t))};var bt,_t,wt,Et=String;wt=function(t){try{return Et(t)}catch(t){return"Object"}};var St=TypeError;_t=function(t){if(y(t))return t;throw St(wt(t)+" is not a function")},bt=function(t,e){var n=t[e];return S(n)?void 0:_t(n)};var Ot,jt=TypeError;Ot=function(t,e){var n,r;if("string"===e&&y(n=t.toString)&&!z(r=nt(n,t)))return r;if(y(n=t.valueOf)&&!z(r=nt(n,t)))return r;if("string"!==e&&y(n=t.toString)&&!z(r=nt(n,t)))return r;throw jt("Can't convert object to primitive value")};var Lt;(Lt=function(t,e){return I[t]||(I[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.27.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Ft,Tt=0,kt=Math.random(),$t=h(1..toString);Ft=function(t){return"Symbol("+(void 0===t?"":t)+")_"+$t(++Tt+kt,36)};var xt=a.Symbol,Pt=Lt("wks"),Mt=ct?xt.for||xt:xt&&xt.withoutSetter||Ft,It=TypeError,At=function(t){return O(Pt,t)||(Pt[t]=ut&&O(xt,t)?xt[t]:Mt("Symbol."+t)),Pt[t]}("toPrimitive");et=function(t,e){if(!z(t)||ot(t))return t;var n,r=bt(t,At);if(r){if(void 0===e&&(e="default"),n=nt(r,t,e),!z(n)||ot(n))return n;throw It("Can't convert object to primitive value")}return void 0===e&&(e="number"),Ot(t,e)},tt=function(t){var e=et(t,"string");return ot(e)?e:e+""};var Nt=TypeError,qt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,Rt="enumerable",Ht="configurable",Dt="writable";U=c?J?function(t,e,n){if(K(t),e=tt(e),K(n),"function"==typeof t&&"prototype"===e&&"value"in n&&Dt in n&&!n[Dt]){var r=Ct(t,e);r&&r[Dt]&&(t[e]=n.value,n={configurable:Ht in n?n[Ht]:r[Ht],enumerable:Rt in n?n[Rt]:r[Rt],writable:!1})}return qt(t,e,n)}:qt:function(t,e,n){if(K(t),e=tt(e),K(n),B)try{return qt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Nt("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var zt;zt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},V=c?function(t,e,n){return U(t,e,zt(1,n))}:function(t,e,n){return t[e]=n,t};var Gt,Ut=Lt("keys");Gt=function(t){return Ut[t]||(Ut[t]=Ft(t))};var Bt={};Bt={};var Wt,Vt,Yt,Qt="Object already initialized",Jt=a.TypeError,Kt=a.WeakMap;if(H||I.state){var Xt=I.state||(I.state=new Kt);Xt.get=Xt.get,Xt.has=Xt.has,Xt.set=Xt.set,Wt=function(t,e){if(Xt.has(t))throw Jt(Qt);return e.facade=t,Xt.set(t,e),e},Vt=function(t){return Xt.get(t)||{}},Yt=function(t){return Xt.has(t)}}else{var Zt=Gt("state");Bt[Zt]=!0,Wt=function(t,e){if(O(t,Zt))throw Jt(Qt);return e.facade=t,V(t,Zt,e),e},Vt=function(t){return O(t,Zt)?t[Zt]:{}},Yt=function(t){return O(t,Zt)}}var te=(R={set:Wt,get:Vt,has:Yt,enforce:function(t){return Yt(t)?Vt(t):Wt(t,{})},getterFor:function(t){return function(e){var n;if(!z(e)||(n=Vt(e)).type!==t)throw Jt("Incompatible receiver, "+t+" required");return n}}}).enforce,ee=R.get,ne=String,re=Object.defineProperty,ie=h("".slice),oe=h("".replace),ae=h([].join),se=c&&!u((function(){return 8!==re((function(){}),"length",{value:8}).length})),ce=String(String).split("String"),ue=f=function(t,e,n){"Symbol("===ie(ne(e),0,7)&&(e="["+oe(ne(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!O(t,"name")||P&&t.name!==e)&&(c?re(t,"name",{value:e,configurable:!0}):t.name=e),se&&n&&O(n,"arity")&&t.length!==n.arity&&re(t,"length",{value:n.arity});try{n&&O(n,"constructor")&&n.constructor?c&&re(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=te(t);return O(r,"source")||(r.source=ae(ce,"string"==typeof e?e:"")),t};Function.prototype.toString=ue((function(){return y(this)&&ee(this).source||M(this)}),"toString"),l=function(t,e,n){return n.get&&f(n.get,e,{getter:!0}),n.set&&f(n.set,e,{setter:!0}),U(t,e,n)};var le;le=function(){var t=K(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var fe=a.RegExp,pe=fe.prototype;c&&u((function(){var t=!0;try{fe(".","d")}catch(e){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",i=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(pe,"flags").get.call(e)!==r||n!==r}))&&l(pe,"flags",{configurable:!0,get:le});var he,de,ve,ge={}.propertyIsEnumerable,me=Object.getOwnPropertyDescriptor,ye=me&&!ge.call({1:2},1);ve=ye?function(t){var e=me(this,t);return!!e&&e.enumerable}:ge;var be,_e,we={},Ee=h({}.toString),Se=h("".slice);_e=function(t){return Se(Ee(t),8,-1)};var Oe=Object,je=h("".split);we=u((function(){return!Oe("z").propertyIsEnumerable(0)}))?function(t){return"String"==_e(t)?je(t,""):Oe(t)}:Oe,be=function(t){return we(E(t))};var Le,Fe=Object.getOwnPropertyDescriptor,Te=de=c?Fe:function(t,e){if(t=be(t),e=tt(e),B)try{return Fe(t,e)}catch(t){}if(O(t,e))return zt(!nt(ve,t,e),t[e])};Le=function(t,e,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:e;if(y(n)&&f(n,o,r),r.global)i?t[e]=n:T(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=n:U(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var ke,$e,xe,Pe,Me,Ie={},Ae={},Ne=Math.ceil,qe=Math.floor;Ae=Math.trunc||function(t){var e=+t;return(e>0?qe:Ne)(e)},Me=function(t){var e=+t;return e!=e||0===e?0:Ae(e)};var Ce=Math.max,Re=Math.min;Pe=function(t,e){var n=Me(t);return n<0?Ce(n+e,0):Re(n,e)};var He,De,ze=Math.min;De=function(t){return t>0?ze(Me(t),9007199254740991):0},He=function(t){return De(t.length)};var Ge=function(t){return function(e,n,r){var i,o=be(e),a=He(o),s=Pe(r,a);if(t&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((t||s in o)&&o[s]===n)return t||s||0;return!t&&-1}},Ue={includes:Ge(!0),indexOf:Ge(!1)}.indexOf,Be=h([].push);xe=function(t,e){var n,r=be(t),i=0,o=[];for(n in r)!O(Bt,n)&&O(r,n)&&Be(o,n);for(;e.length>i;)O(r,n=e[i++])&&(~Ue(o,n)||Be(o,n));return o};var We,Ve=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");$e=Object.getOwnPropertyNames||function(t){return xe(t,Ve)},We=Object.getOwnPropertySymbols;var Ye=h([].concat);Ie=it("Reflect","ownKeys")||function(t){var e=$e(K(t));return We?Ye(e,We(t)):e},ke=function(t,e,n){for(var r=Ie(e),i=U,o=de,a=0;a<r.length;a++){var s=r[a];O(t,s)||n&&O(n,s)||i(t,s,o(e,s))}};var Qe={},Je=/#|\.prototype\./,Ke=function(t,e){var n=Ze[Xe(t)];return n==en||n!=tn&&(y(e)?u(e):!!e)},Xe=Ke.normalize=function(t){return String(t).replace(Je,".").toLowerCase()},Ze=Ke.data={},tn=Ke.NATIVE="N",en=Ke.POLYFILL="P";Qe=Ke,he=function(t,e){var n,r,i,o,s,c=t.target,u=t.global,l=t.stat;if(n=u?a:l?a[c]||T(c,{}):(a[c]||{}).prototype)for(r in e){if(o=e[r],i=t.dontCallGetSet?(s=Te(n,r))&&s.value:n[r],!Qe(u?r:c+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;ke(o,i)}(t.sham||i&&i.sham)&&V(o,"sham",!0),Le(n,r,o,t)}};var nn,rn={},on=Function.prototype,an=on.apply,sn=on.call;rn="object"==typeof Reflect&&Reflect.apply||(p?sn.bind(an):function(){return sn.apply(an,arguments)});var cn,un,ln=(un=function(t){if("Function"===_e(t))return h(t)})(un.bind);cn=function(t,e){return _t(t),void 0===e?t:p?ln(t,e):function(){return t.apply(e,arguments)}};var fn={};fn=it("document","documentElement");var pn={};pn=h([].slice);var hn={},dn=TypeError;hn=function(t,e){if(t<e)throw dn("Not enough arguments");return t};var vn;vn=/(?:ipad|iphone|ipod).*applewebkit/i.test(ft);var gn,mn,yn,bn,_n=mn={};function wn(){throw new Error("setTimeout has not been defined")}function En(){throw new Error("clearTimeout has not been defined")}function Sn(t){if(yn===setTimeout)return setTimeout(t,0);if((yn===wn||!yn)&&setTimeout)return yn=setTimeout,setTimeout(t,0);try{return yn(t,0)}catch(e){try{return yn.call(null,t,0)}catch(e){return yn.call(this,t,0)}}}!function(){try{yn="function"==typeof setTimeout?setTimeout:wn}catch(t){yn=wn}try{bn="function"==typeof clearTimeout?clearTimeout:En}catch(t){bn=En}}();var On,jn=[],Ln=!1,Fn=-1;function Tn(){Ln&&On&&(Ln=!1,On.length?jn=On.concat(jn):Fn=-1,jn.length&&kn())}function kn(){if(!Ln){var t=Sn(Tn);Ln=!0;for(var e=jn.length;e;){for(On=jn,jn=[];++Fn<e;)On&&On[Fn].run();Fn=-1,e=jn.length}On=null,Ln=!1,function(t){if(bn===clearTimeout)return clearTimeout(t);if((bn===En||!bn)&&clearTimeout)return bn=clearTimeout,clearTimeout(t);try{bn(t)}catch(e){try{return bn.call(null,t)}catch(e){return bn.call(this,t)}}}(t)}}function $n(t,e){this.fun=t,this.array=e}function xn(){}_n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];jn.push(new $n(t,e)),1!==jn.length||Ln||Sn(kn)},$n.prototype.run=function(){this.fun.apply(null,this.array)},_n.title="browser",_n.browser=!0,_n.env={},_n.argv=[],_n.version="",_n.versions={},_n.on=xn,_n.addListener=xn,_n.once=xn,_n.off=xn,_n.removeListener=xn,_n.removeAllListeners=xn,_n.emit=xn,_n.prependListener=xn,_n.prependOnceListener=xn,_n.listeners=function(t){return[]},_n.binding=function(t){throw new Error("process.binding is not supported")},_n.cwd=function(){return"/"},_n.chdir=function(t){throw new Error("process.chdir is not supported")},_n.umask=function(){return 0},gn=void 0!==mn&&"process"==_e(mn);var Pn,Mn,In,An,Nn=a.setImmediate,qn=a.clearImmediate,Cn=a.process,Rn=a.Dispatch,Hn=a.Function,Dn=a.MessageChannel,zn=a.String,Gn=0,Un={},Bn="onreadystatechange";u((function(){Pn=a.location}));var Wn=function(t){if(O(Un,t)){var e=Un[t];delete Un[t],e()}},Vn=function(t){return function(){Wn(t)}},Yn=function(t){Wn(t.data)},Qn=function(t){a.postMessage(zn(t),Pn.protocol+"//"+Pn.host)};Nn&&qn||(Nn=function(t){hn(arguments.length,1);var e=y(t)?t:Hn(t),n=pn(arguments,1);return Un[++Gn]=function(){rn(e,void 0,n)},Mn(Gn),Gn},qn=function(t){delete Un[t]},gn?Mn=function(t){Cn.nextTick(Vn(t))}:Rn&&Rn.now?Mn=function(t){Rn.now(Vn(t))}:Dn&&!vn?(An=(In=new Dn).port2,In.port1.onmessage=Yn,Mn=cn(An.postMessage,An)):a.addEventListener&&y(a.postMessage)&&!a.importScripts&&Pn&&"file:"!==Pn.protocol&&!u(Qn)?(Mn=Qn,a.addEventListener("message",Yn,!1)):Mn=Bn in W("script")?function(t){fn.appendChild(W("script"))[Bn]=function(){fn.removeChild(this),Wn(t)}}:function(t){setTimeout(Vn(t),0)});var Jn=(nn={set:Nn,clear:qn}).clear;he({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Jn},{clearImmediate:Jn});var Kn,Xn,Zn=nn.set;Xn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var tr,er=a.Function,nr=/MSIE .\./.test(ft)||Xn&&((tr=a.Bun.version.split(".")).length<3||0==tr[0]&&(tr[1]<3||3==tr[1]&&0==tr[2]));Kn=function(t,e){var n=e?2:1;return nr?function(r,i){var o=hn(arguments.length,1)>n,a=y(r)?r:er(r),s=o?pn(arguments,n):[],c=o?function(){rn(a,this,s)}:a;return e?t(c,i):t(c)}:t};var rr=a.setImmediate?Kn(Zn,!1):Zn;he({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==rr},{setImmediate:rr});var ir=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),s=new $(r||[]);return i(a,"_invoke",{value:L(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",g={};function m(){}function y(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(x([])));E&&E!==n&&r.call(E,a)&&(_=E);var S=b.prototype=m.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(i,o,a,s){var c=f(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return o=o?o.then(i,i):i()}})}function L(t,e,n){var r=p;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=F(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?v:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}function F(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,F(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=f(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function x(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=b,i(S,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},O(j.prototype),u(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new j(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),u(S,c,"Generator"),u(S,a,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=x,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}({});try{regeneratorRuntime=ir}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=ir:Function("r","regeneratorRuntime = r")(ir)}const or="https://forkify-api.herokuapp.com/api/v2/recipes/",ar=async function(t){try{const n=fetch(t),r=await Promise.race([n,(e=10,new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),i=await r.json();if(!r.ok)throw new Error(`${i.message} (${r.status})`);return i}catch(t){throw t}var e},sr={recipe:{},search:{query:"",results:[],page:1,resultPerPage:10}},cr=function(t=sr.search.page){sr.search.page=t;const e=(t-1)*sr.search.resultPerPage,n=t*sr.search.resultPerPage;return sr.search.results.slice(e,n)};var ur,lr,fr,pr;ur=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString(),Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=t&&r.push(t),0!=e&&r.push((0===t?e:Math.abs(e))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(fr=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},pr=function(t,e){if(e){var n=Math.pow(10,e);return Math.round(t*n)/n}return Math.round(t)},function(){if(fr(this.denominator)){var t=pr(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}fr(this.numerator)&&(t=pr(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var n=[],r=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return r.forEach((function(t){var e=i.indexOf(t);e>=0&&(n.push(t),i.splice(e,1))})),0===n.length?1:function(){var t,e=n[0];for(t=1;t<n.length;t++)e*=n[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),n=[],r=2;r*r<=e;)e%r==0?(n.push(r),e/=r):r++;return 1!=e&&n.push(e),n},lr=Fraction;class hr{_data;render(t){if(this._data=t,!t||Array.isArray(t)&&0===t.length)return this.renderError();const e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}update(t){this._data=t;const e=this._generateMarkup(),n=document.createRange().createContextualFragment(e),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((t,e)=>{const n=i[e];t.isEqualNode(n)||""===t.firstChild?.nodeValue.trim()||(n.textContent=t.textContent),t.isEqualNode(n)||Array.from(t.attributes).forEach((t=>n.setAttribute(t.name,t.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const t=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(ur)}#icon-loader"></use>npm i fractional\n        </svg>\n      </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){const e=`\n          <div class="error">\n            <div>\n              <svg>\n                <use href="${n(ur)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${t}</p>\n          </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(t=this._message){const e=`\n          <div class="message">\n            <div>\n              <svg>\n                <use href="${n(ur)}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${t}</p>\n          </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}full(){return`${this._data}`}}var dr=new class extends hr{_parentElement=document.querySelector(".recipe");_errorMessage="We couldn't find that recipe. Please Try another one!";_message="";addHandleRender(t){["hashchange","load"].forEach((e=>window.addEventListener(e,t)))}addHandlerUpdateServings(t){this._parentElement.addEventListener("click",(function(e){const n=e.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&t(+r)}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(ur)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(ur)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(ur)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(ur)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated">\n            \x3c!-- This is commented out\n            <svg> <use href="${n(ur)}#icon-user"></use></svg> \n             --\x3e\n          </div>\n          <button class="btn--round">\n            <svg class="">\n              <use href="${n(ur)}#icon-bookmark-fill"></use>\n            </svg>\n          </button>\n        </div>\n\n\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n        ${this._data.ingredients.map(this._generateMarkupIngredients).join("")}\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceuRL}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(ur)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}_generateMarkupIngredients(t){return`\n          <li class="recipe__ingredient">\n                      <svg class="recipe__icon">\n                        <use href="${n(ur)}#icon-check"></use>\n                      </svg>\n                      <div class="recipe__quantity">${t.quantity?new lr(t.quantity).toString():""}</div>\n                      <div class="recipe__description">\n                        <span class="recipe__unit">${t.unit}</span>\n                        ${t.description}\n                      </div>\n                    </li>\n          `}};var vr=new class{#t=document.querySelector(".search");getQuery(){const t=this.#t.querySelector(".search__field").value;return this.#e(),t}#e(){this.#t.querySelector(".search__field").value=""}addHandlerSearch(t){this.#t.addEventListener("submit",(function(e){e.preventDefault(),t()}))}};var gr=new class extends hr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_message="";_generateMarkup(){return console.log(this._data),this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${t.id===e?"preview__link--active":""}" href="#${t.id}">\n            <figure class="preview__fig">\n                <img src="${t.image}" alt="Test" />\n            </figure>\n            <div class="preview__data">\n                <h4 class="preview__title">${t.title}</h4>\n                <p class="preview__publisher">${t.publisher}</p>\n            </div>\n        </a>\n      </li>\n    `}};var mr=new class extends hr{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",(function(e){const n=e.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;t(r)}))}_generateMarkup(){const t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultPerPage);return 1===t&&e>1?`\n          <button data-goto="${t+1}" class="btn--inline pagination__btn--next">\n                <span>Page ${t+1} of ${e}</span>\n                <svg class="search__icon">\n                  <use href="${n(ur)}#icon-arrow-right"></use>\n                </svg>\n          </button>\n      `:t===e&&e>1?`\n          <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">\n              <svg class="search__icon">\n                <use href="${n(ur)}#icon-arrow-left"></use>\n              </svg>\n              <span>Page ${t-1}</span>\n          </button>\n      `:t<e?`\n       <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">\n              <svg class="search__icon">\n                <use href="${n(ur)}#icon-arrow-left"></use>\n              </svg>\n              <span>Page ${t-1}</span>\n          </button>\n\n       <button data-goto="${t+1}"class="btn--inline pagination__btn--next">\n                <span>Page ${t+1} of ${e}</span>\n                <svg class="search__icon">\n                  <use href="${n(ur)}#icon-arrow-right"></use>\n                </svg>\n          </button>   \n      `:""}};const yr=async()=>{try{const t=window.location.hash.slice(1);if(!t)return;dr.renderSpinner(),gr.update(cr()),await async function(t){try{const e=await ar(`${or}${t}`);let{recipe:n}=e.data;sr.recipe={id:n.id,title:n.title,publisher:n.publisher,sourceuRL:n.source_url,image:n.image_url,servings:n.servings=1,cookingTime:n.cooking_time,ingredients:n.ingredients}}catch(t){throw t}}(t),dr.render(sr.recipe)}catch(t){dr.renderError()}},br=async function(){try{gr.renderSpinner();const t=vr.getQuery();if(!t)return;await async function(t){try{sr.search.query=t;const e=await ar(`${or}?search=${t}`);console.log(e),sr.search.results=e.data.recipes.map((t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url})))}catch(t){throw console.log(`${t}  💥💥💥`),t}}(t),gr.render(cr()),mr.render(sr.search)}catch(t){console.log(t)}},_r=function(t){gr.render(cr(t)),mr.render(sr.search)},wr=function(t){!function(t){sr.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*t/sr.recipe.servings})),sr.recipe.servings=t}(t),dr.update(sr.recipe)};dr.addHandleRender(yr),dr.addHandlerUpdateServings(wr),vr.addHandlerSearch(br),mr.addHandlerClick(_r);
//# sourceMappingURL=index.0653b5c4.js.map
