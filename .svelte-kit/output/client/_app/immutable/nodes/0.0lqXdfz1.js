import{B as e,C as t,D as n,F as r,H as i,I as a,J as o,O as s,P as c,Q as l,S as u,T as d,U as f,V as p,W as m,Z as h,_ as g,a as _,b as v,c as y,d as b,g as x,i as S,it as ee,l as te,nt as C,o as ne,p as re,q as ie,s as ae,tt as oe,u as se,w}from"../chunks/Cl2OrdxH.js";import{n as ce}from"../chunks/CtoAaVNU.js";import"../chunks/xihTtKlq.js";import"../chunks/DJtZkepv.js";var le=ee({prerender:()=>!0}),ue=()=>{let e=ce;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},de={subscribe(e){return ue().page.subscribe(e)}};function fe(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,flash:o,spin:s,spinPulse:c,spinReverse:l,pulse:u,fixedWidth:d,inverse:f,border:p,listItem:m,flip:h,size:g,rotation:_,pull:v}=e,y={"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h===`horizontal`||h===`both`,"fa-flip-vertical":h===`vertical`||h===`both`,[`fa-${g}`]:g!=null,[`fa-rotate-${_}`]:_!=null&&_!==0,[`fa-pull-${v}`]:v!=null,"fa-swap-opacity":e.swapOpacity};return Object.keys(y).map(e=>y[e]?e:null).filter(e=>e)}function pe(e){return e-=0,e===e}function me(e){return pe(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}function he(e){return typeof e==`string`?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join(`-`).toLowerCase()+`:`+e[n]+`;`,``)}function ge(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>ge(e,t)),i=Object.keys(t.attributes||{}).reduce((e,n)=>{let r=t.attributes[n];return n===`style`?e.attrs.style=he(r):n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[me(n)]=r,e},{attrs:{}});return e(t.tag,{...i.attrs},r)}function _e(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ve(e){if(Array.isArray(e))return e}function ye(e){if(Array.isArray(e))return _e(e)}function be(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,je(r.key),r)}}function Se(e,t,n){return t&&xe(e.prototype,t),n&&xe(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Ne(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function T(e,t,n){return(t=je(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function we(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Te(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Ee(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Oe(Object(n),!0).forEach(function(t){T(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ke(e,t){return ve(e)||Te(e,t)||Ne(e,t)||Ee()}function D(e){return ye(e)||we(e)||Ne(e)||De()}function Ae(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function je(e){var t=Ae(e,`string`);return typeof t==`symbol`?t:t+``}function Me(e){"@babel/helpers - typeof";return Me=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Me(e)}function Ne(e,t){if(e){if(typeof e==`string`)return _e(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_e(e,t):void 0}}var Pe=function(){},Fe={},Ie={},Le=null,Re={mark:Pe,measure:Pe};try{typeof window<`u`&&(Fe=window),typeof document<`u`&&(Ie=document),typeof MutationObserver<`u`&&(Le=MutationObserver),typeof performance<`u`&&(Re=performance)}catch{}var ze=(Fe.navigator||{}).userAgent,Be=ze===void 0?``:ze,O=Fe,k=Ie,Ve=Le,He=Re;O.document;var A=!!k.documentElement&&!!k.head&&typeof k.addEventListener==`function`&&typeof k.createElement==`function`,Ue=~Be.indexOf(`MSIE`)||~Be.indexOf(`Trident/`),We,Ge=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ke=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,qe={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Je={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ye=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],j=`classic`,Xe=`duotone`,Ze=`sharp`,Qe=`sharp-duotone`,$e=`chisel`,et=`etch`,tt=`graphite`,nt=`jelly`,rt=`jelly-duo`,it=`jelly-fill`,at=`mosaic`,ot=`notdog`,st=`notdog-duo`,ct=`pixel`,lt=`slab`,ut=`slab-duo`,dt=`slab-press`,ft=`slab-press-duo`,pt=`thumbprint`,mt=`utility`,ht=`utility-duo`,gt=`utility-fill`,_t=`vellum`,vt=`whiteboard`,yt=`Classic`,bt=`Duotone`,xt=`Sharp`,St=`Sharp Duotone`,Ct=`Chisel`,wt=`Etch`,Tt=`Graphite`,Et=`Jelly`,Dt=`Jelly Duo`,Ot=`Jelly Fill`,kt=`Mosaic`,At=`Notdog`,jt=`Notdog Duo`,Mt=`Pixel`,Nt=`Slab`,Pt=`Slab Duo`,Ft=`Slab Press`,It=`Slab Press Duo`,Lt=`Thumbprint`,Rt=`Utility`,zt=`Utility Duo`,Bt=`Utility Fill`,Vt=`Vellum`,Ht=`Whiteboard`,Ut=[j,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt];We={},T(T(T(T(T(T(T(T(T(T(We,j,yt),Xe,bt),Ze,xt),Qe,St),$e,Ct),et,wt),tt,Tt),nt,Et),rt,Dt),it,Ot),T(T(T(T(T(T(T(T(T(T(We,at,kt),ot,At),st,jt),ct,Mt),lt,Nt),ut,Pt),dt,Ft),ft,It),pt,Lt),mt,Rt),T(T(T(T(We,ht,zt),gt,Bt),_t,Vt),vt,Ht);var Wt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Gt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Kt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),qt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Jt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Yt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Xt=[`kit`];T(T({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Zt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Qt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},$t={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},en={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},tn,nn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},rn=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];tn={},T(T(T(T(T(T(T(T(T(T(tn,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),T(T(T(T(T(T(T(T(T(T(tn,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),T(T(T(T(tn,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),T(T({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var an={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},on={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},sn={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},cn=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(rn,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),ln=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],un=[1,2,3,4,5,6,7,8,9,10],dn=un.concat([11,12,13,14,15,16,17,18,19,20]),fn=[].concat(D(Object.keys(on)),ln,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,nn.GROUP,nn.SWAP_OPACITY,nn.PRIMARY,nn.SECONDARY],un.map(function(e){return`${e}x`}),dn.map(function(e){return`w-${e}`})),pn={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},M=`___FONT_AWESOME___`,mn=16,hn=`fa`,gn=`svg-inline--fa`,N=`data-fa-i2svg`,_n=`data-fa-pseudo-element`,vn=`data-fa-pseudo-element-pending`,yn=`data-prefix`,bn=`data-icon`,xn=`fontawesome-i2svg`,Sn=`async`,Cn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],wn=[`::before`,`::after`,`:before`,`:after`],Tn=function(){try{return!0}catch{return!1}}();function P(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[j]}})}var En=E({},qe);En[j]=E(E(E(E({},{"fa-duotone":`duotone`}),qe[j]),Yt.kit),Yt[`kit-duotone`]);var Dn=P(En),On=E({},qt);On[j]=E(E(E(E({},{duotone:`fad`}),On[j]),en.kit),en[`kit-duotone`]);var kn=P(On),An=E({},sn);An[j]=E(E({},An[j]),$t.kit);var jn=P(An),Mn=E({},an);Mn[j]=E(E({},Mn[j]),Zt.kit),P(Mn);var Nn=Ge,Pn=`fa-layers-text`,Fn=Ke;P(E({},Wt));var In=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Ln=Je,Rn=[].concat(D(Xt),D(fn)),F=O.FontAwesomeConfig||{};function zn(e){var t=k.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Bn(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}k&&typeof k.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=ke(e,2),n=t[0],r=t[1],i=Bn(zn(n));i!=null&&(F[r]=i)});var Vn={styleDefault:`solid`,familyDefault:j,cssPrefix:hn,replacementClass:gn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};F.familyPrefix&&(F.cssPrefix=F.familyPrefix);var I=E(E({},Vn),F);I.autoReplaceSvg||(I.observeMutations=!1);var L={};Object.keys(Vn).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(t){I[e]=t,R.forEach(function(e){return e(L)})},get:function(){return I[e]}})}),Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){I.cssPrefix=e,R.forEach(function(e){return e(L)})},get:function(){return I.cssPrefix}}),O.FontAwesomeConfig=L;var R=[];function Hn(e){return R.push(e),function(){R.splice(R.indexOf(e),1)}}var z=mn,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Un(e){if(!(!e||!A)){var t=k.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=k.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return k.head.insertBefore(t,r),e}}var Wn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Gn(){for(var e=12,t=``;e-->0;)t+=Wn[Math.random()*62|0];return t}function V(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kn(e){return e.classList?V(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function qn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${qn(e[n])}" `},``).trim()}function Yn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Xn(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function Zn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Qn(e){var t=e.transform,n=e.width,r=n===void 0?mn:n,i=e.height,a=i===void 0?mn:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Ue?c+=`translate(${t.x/z-r/2}em, ${t.y/z-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:c+=`translate(${t.x/z}em, ${t.y/z}em) `,c+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var $n=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function er(){var e=hn,t=gn,n=L.cssPrefix,r=L.replacementClass,i=$n;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var tr=!1;function nr(){L.autoAddCss&&!tr&&(Un(er()),tr=!0)}var rr={mixout:function(){return{dom:{css:er,insertCss:nr}}},hooks:function(){return{beforeDOMElementCreation:function(){nr()},beforeI2svg:function(){nr()}}}},H=O||{};H[M]||(H[M]={}),H[M].styles||(H[M].styles={}),H[M].hooks||(H[M].hooks={}),H[M].shims||(H[M].shims=[]);var U=H[M],ir=[],ar=function(){k.removeEventListener(`DOMContentLoaded`,ar),or=1,ir.map(function(e){return e()})},or=!1;A&&(or=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),or||k.addEventListener(`DOMContentLoaded`,ar));function sr(e){A&&(or?setTimeout(e,0):ir.push(e))}function W(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?qn(e):`<${t} ${Jn(r)}>${a.map(W).join(``)}</${t}>`}function cr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var lr=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},ur=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:lr(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function dr(e){return D(e).length===1?e.codePointAt(0).toString(16):null}function fr(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function pr(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=fr(t);typeof U.hooks.addPack==`function`&&!r?U.hooks.addPack(e,fr(t)):U.styles[e]=E(E({},U.styles[e]||{}),i),e===`fas`&&pr(`fa`,t)}var G=U.styles,mr=U.shims,hr=Object.keys(jn),gr=hr.reduce(function(e,t){return e[t]=Object.keys(jn[t]),e},{}),_r=null,vr={},yr={},br={},xr={},Sr={};function Cr(e){return~Rn.indexOf(e)}function wr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Cr(i)?i:null}var Tr=function(){var e=function(e){return ur(G,function(t,n,r){return t[r]=ur(n,e,{}),t},{})};vr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),yr=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Sr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in G||L.autoFetchSvg,n=ur(mr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});br=n.names,xr=n.unicodes,_r=Mr(L.styleDefault,{family:L.familyDefault})};Hn(function(e){_r=Mr(e.styleDefault,{family:L.familyDefault})}),Tr();function Er(e,t){return(vr[e]||{})[t]}function Dr(e,t){return(yr[e]||{})[t]}function K(e,t){return(Sr[e]||{})[t]}function Or(e){return br[e]||{prefix:null,iconName:null}}function kr(e){var t=xr[e],n=Er(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function q(){return _r}var Ar=function(){return{prefix:null,iconName:null,rest:[]}};function jr(e){var t=j,n=hr.reduce(function(e,t){return e[t]=`${L.cssPrefix}-${t}`,e},{});return Ut.forEach(function(r){(e.includes(n[r])||e.some(function(e){return gr[r].includes(e)}))&&(t=r)}),t}function Mr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?j:t,r=Dn[n][e];if(n===Xe&&!e)return`fad`;var i=kn[n][e]||kn[n][r],a=e in U.styles?e:null;return i||a||null}function Nr(e){var t=[],n=null;return e.forEach(function(e){var r=wr(L.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Pr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Fr=cn.concat(Jt);function Ir(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Pr(e.filter(function(e){return Fr.includes(e)})),a=Pr(e.filter(function(e){return!Fr.includes(e)})),o=ke(i.filter(function(e){return r=e,!Ye.includes(e)}),1)[0],s=o===void 0?null:o,c=jr(i),l=E(E({},Nr(a)),{},{prefix:Mr(s,{family:c})});return E(E(E({},l),Br({values:e,family:c,styles:G,config:L,canonical:l,givenPrefix:r})),Lr(n,r,l))}function Lr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Or(i):{},o=K(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!G.far&&G.fas&&!L.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Rr=Ut.filter(function(e){return e!==j||e!==Xe}),zr=Object.keys(sn).filter(function(e){return e!==j}).map(function(e){return Object.keys(sn[e])}).flat();function Br(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Xe,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Rr.includes(n)&&(Object.keys(s).find(function(e){return zr.includes(e)})||l.autoFetchSvg)&&(r.prefix=Kt.get(n).defaultShortPrefixId,r.iconName=K(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=q()||`fas`),r}var Vr=function(){function e(){be(this,e),this.definitions={}}return Se(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=E(E({},e.definitions[n]||{}),t[n]),pr(n,t[n]);var r=jn[j][n];r&&pr(r,t[n]),Tr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Hr=[],J={},Y={},Ur=Object.keys(Y);function Wr(e,t){var n=t.mixoutsTo;return Hr=e,J={},Object.keys(Y).forEach(function(e){Ur.indexOf(e)===-1&&delete Y[e]}),Hr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Me(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){J[e]||(J[e]=[]),J[e].push(r[e])})}e.provides&&e.provides(Y)}),n}function Gr(e,t){var n=[...arguments].slice(2);return(J[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function X(e){var t=[...arguments].slice(1);(J[e]||[]).forEach(function(e){e.apply(null,t)})}function Z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Y[e]?Y[e].apply(null,t):void 0}function Kr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||q();if(t)return t=K(n,t)||t,cr(qr.definitions,n,t)||cr(U.styles,n,t)}var qr=new Vr,Q={noAuto:function(){L.autoReplaceSvg=!1,L.observeMutations=!1,X(`noAuto`)},config:L,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(X(`beforeI2svg`,e),Z(`pseudoElements2svg`,e),Z(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,sr(function(){Jr({autoReplaceSvgRoot:t}),X(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Me(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Mr(e[0]);return{prefix:n,iconName:K(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${L.cssPrefix}-`)>-1||e.match(Nn))){var r=Ir(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=q();return{prefix:i,iconName:K(i,e)||e}}}},library:qr,findIconDefinition:Kr,toHtml:W},Jr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?k:e;(Object.keys(U.styles).length>0||L.autoFetchSvg)&&A&&L.autoReplaceSvg&&Q.dom.i2svg({node:t})};function Yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return W(e)})}}),Object.defineProperty(e,"node",{get:function(){if(A){var t=k.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Xr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Xn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Yn(E(E({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Zr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${L.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:E(E({},i),{},{id:o}),children:r}]}]}function Qr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function $r(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[L.replacementClass,a?`${L.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:E(E({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Qr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[N]=``);var _=E(E({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E({},l.styles)}),v=r.found&&n.found?Z(`generateAbstractMask`,_)||{children:[],attributes:{}}:Z(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Zr(_):Xr(_)}function ei(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=E(E({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[N]=``);var l=E({},a.styles);Xn(i)&&(l.transform=Qn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Yn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function ti(e){var t=e.content,n=e.extra,r=E(E({},n.attributes),{},{class:n.classes.join(` `)}),i=Yn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var ni=U.styles;function ri(e){var t=e[0],n=e[1],r=ke(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${L.cssPrefix}-${Ln.GROUP}`},children:[{tag:`path`,attributes:{class:`${L.cssPrefix}-${Ln.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${L.cssPrefix}-${Ln.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var ii={found:!1,width:512,height:512};function ai(e,t){!Tn&&!L.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function oi(e,t){var n=t;return t===`fa`&&L.styleDefault!==null&&(t=q()),new Promise(function(r,i){if(n===`fa`){var a=Or(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ni[t]&&ni[t][e]){var o=ni[t][e];return r(ri(o))}ai(e,t),r(E(E({},ii),{},{icon:L.showMissingIcons&&e&&Z(`missingIconAbstract`)||{}}))})}var si=function(){},ci=L.measurePerformance&&He&&He.mark&&He.measure?He:{mark:si,measure:si},li=`FA "7.3.0"`,ui=function(e){return ci.mark(`${li} ${e} begins`),function(){return di(e)}},di=function(e){ci.mark(`${li} ${e} ends`),ci.measure(`${li} ${e}`,`${li} ${e} begins`,`${li} ${e} ends`)},fi={begin:ui,end:di},pi=function(){};function mi(e){return typeof(e.getAttribute?e.getAttribute(N):null)==`string`}function hi(e){var t=e.getAttribute?e.getAttribute(yn):null,n=e.getAttribute?e.getAttribute(bn):null;return t&&n}function gi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function _i(){return L.autoReplaceSvg===!0?Si.replace:Si[L.autoReplaceSvg]||Si.replace}function vi(e){return k.createElementNS(`http://www.w3.org/2000/svg`,e)}function yi(e){return k.createElement(e)}function bi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?vi:yi:t;if(typeof e==`string`)return k.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(bi(e,{ceFn:n}))}),r}function xi(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Si={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(bi(e),t)}),t.getAttribute(N)===null&&L.keepOriginalSource){var n=k.createComment(xi(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Kn(t).indexOf(L.replacementClass))return Si.replace(e);var r=RegExp(`${L.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===L.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return W(e)}).join(`
`);t.setAttribute(N,``),t.innerHTML=a}};function Ci(e){e()}function wi(e,t){var n=typeof t==`function`?t:pi;if(e.length===0)n();else{var r=Ci;L.mutateApproach===Sn&&(r=O.requestAnimationFrame||Ci),r(function(){var t=_i(),r=fi.begin(`mutate`);e.map(t),r(),n()})}}var Ti=!1;function Ei(){Ti=!0}function Di(){Ti=!1}var Oi=null;function ki(e){if(Ve&&L.observeMutations){var t=e.treeCallback,n=t===void 0?pi:t,r=e.nodeCallback,i=r===void 0?pi:r,a=e.pseudoElementsCallback,o=a===void 0?pi:a,s=e.observeMutationsRoot,c=s===void 0?k:s;Oi=new Ve(function(e){if(!Ti){var t=q();V(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!mi(e.addedNodes[0])&&(L.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&L.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&mi(e.target)&&~In.indexOf(e.attributeName))if(e.attributeName===`class`&&hi(e.target)){var r=Ir(Kn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(yn,a||t),s&&e.target.setAttribute(bn,s)}else gi(e.target)&&i(e.target)})}}),A&&Oi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ai(){Oi&&Oi.disconnect()}function ji(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Mi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ir(Kn(e));return i.prefix||=q(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Dr(i.prefix,e.innerText)||Er(i.prefix,dr(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Ni(e){return V(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Pi(){return{iconName:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Mi(e),r=n.iconName,i=n.prefix,a=n.rest,o=Ni(e),s=Gr(`parseNodeAttributes`,{},e);return E({iconName:r,prefix:i,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ji(e):[],attributes:o}},s)}var Ii=U.styles;function Li(e){var t=L.autoReplaceSvg===`nest`?Fi(e,{styleParser:!1}):Fi(e);return~t.extra.classes.indexOf(Pn)?Z(`generateLayersText`,e,t):Z(`generateSvgReplacementMutation`,e,t)}function Ri(){return[].concat(D(Jt),D(cn))}function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();var n=k.documentElement.classList,r=function(e){return n.add(`${xn}-${e}`)},i=function(e){return n.remove(`${xn}-${e}`)},a=L.autoFetchSvg?Ri():Ye.concat(Object.keys(Ii));a.includes(`fa`)||a.push(`fa`);var o=[`.${Pn}:not([${N}])`].concat(a.map(function(e){return`.${e}:not([${N}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=V(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=fi.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Li(t);n&&e.push(n)}catch(e){Tn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){wi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Li(e).then(function(e){e&&wi([e],t)})}function Vi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Kr(i||{}),e(r,E(E({},n),{},{mask:i}))}}var Hi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Yr(E({type:`icon`},e),function(){return X(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),$r({icons:{main:ri(v),mask:s?ri(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:E(E({},B),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Ui={mixout:function(){return{icon:Vi(Hi)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=zi,e.nodeCallback=Bi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?k:t,r=e.callback;return zi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([oi(n,r),o.iconName?oi(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=ke(o,2),u=l[0],d=l[1];t([e,$r({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Yn(a);o.length>0&&(n.style=o);var s;return Xn(i)&&(s=Z(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Wi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Yr({type:`layer`},function(){X(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${L.cssPrefix}-layers`].concat(D(r)).join(` `)},children:n}]})}}}},Gi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Yr({type:`counter`,content:e},function(){return X(`beforeDOMElementCreation`,{content:e,params:t}),ti({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${L.cssPrefix}-layers-counter`].concat(D(a))}})})}}}},Ki={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Yr({type:`text`,content:e},function(){return X(`beforeDOMElementCreation`,{content:e,params:t}),ei({content:e,transform:E(E({},B),r),extra:{attributes:s,styles:l,classes:[`${L.cssPrefix}-layers-text`].concat(D(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Ue){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,ei({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},qi=RegExp(`"`,`ug`),Ji=[1105920,1112319],Yi=E(E(E(E({},{FontAwesome:{normal:`fas`,400:`fas`}}),Gt),pn),Qt),Xi=Object.keys(Yi).reduce(function(e,t){return e[t.toLowerCase()]=Yi[t],e},{}),Zi=Object.keys(Xi).reduce(function(e,t){var n=Xi[t];return e[t]=n[900]||D(Object.entries(n))[0][1],e},{});function Qi(e){return dr(D(e.replace(qi,``))[0]||``)}function $i(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(qi,``),r=n.codePointAt(0),i=r>=Ji[0]&&r<=Ji[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function ea(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Xi[n]||{})[i]||Zi[n]}function ta(e,t){var n=`${vn}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=V(e.children).filter(function(e){return e.getAttribute(_n)===t})[0],o=O.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Fn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=ea(s,l),p=Qi(d),m=c[0].startsWith(`FontAwesome`),h=$i(o),g=Er(f,p),_=g;if(m){var v=kr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(yn)!==f||a.getAttribute(bn)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Pi(),b=y.extra;b.attributes[_n]=t,oi(g,f).then(function(i){var a=$r(E(E({},y),{},{icons:{main:i,mask:Ar()},prefix:f,iconName:_,extra:b,watchable:!0})),o=k.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return W(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function na(e){return Promise.all([ta(e,`::before`),ta(e,`::after`)])}function ra(e){return e.parentNode!==document.head&&!~Cn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_n)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ia=function(e){return!!e&&wn.some(function(t){return e.includes(t)})},aa=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Ce(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ia(a)){var o=wn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function oa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(A){var n;if(t)n=e;else if(L.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Ce(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Ce(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Ce(aa(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){L.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=V(n).filter(ra).map(na),i=fi.begin(`searchPseudoElements`);Ei(),Promise.all(r).then(function(){i(),Di(),e()}).catch(function(){i(),Di(),t()})})}}var sa={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=oa,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?k:t;L.searchPseudoElements&&oa(n)}}},ca=!1,la={mixout:function(){return{dom:{unwatch:function(){Ei(),ca=!0}}}},hooks:function(){return{bootstrap:function(){ki(Gr(`mutationObserverCallbacks`,{}))},noAuto:function(){Ai()},watch:function(e){var t=e.observeMutationsRoot;ca?Di():ki(Gr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},ua=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},da={mixout:function(){return{parse:{transform:function(e){return ua(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=ua(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:E({},a.outer),children:[{tag:`g`,attributes:E({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:E(E({},t.icon.attributes),a.path)}]}]}}}},fa={x:0,y:0,width:`100%`,height:`100%`};function pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ma(e){return e.tag===`g`?e.children:[e]}Wr([rr,Ui,Wi,Gi,Ki,sa,la,da,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ir(n.split(` `).map(function(e){return e.trim()})):Ar();return r.prefix||=q(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Zn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:E(E({},fa),{},{fill:`white`})},p=c.children?{children:c.children.map(pa)}:{},m={tag:`g`,attributes:E({},d.inner),children:[pa(E({tag:c.tag,attributes:E(E({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:E({},d.outer),children:[m]},g=`mask-${a||Gn()}`,_=`clip-${a||Gn()}`,v={tag:`mask`,attributes:E(E({},fa),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:ma(u)},v]};return t.push(y,{tag:`rect`,attributes:E({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},fa)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;O.matchMedia&&(t=O.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:E(E({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=E(E({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:E(E({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:E(E({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:E(E({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:E(E({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:E(E({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:E(E({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:E(E({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Q}),Q.noAuto;var ha=Q.config;Q.library,Q.dom;var ga=Q.parse;Q.findIconDefinition,Q.toHtml;var _a=Q.icon;Q.layer,Q.text,Q.counter;var va=!1;try{va=!0}catch{}function ya(...e){!va&&console&&typeof console.error==`function`&&console.error(...e)}function ba(e){if(e&&typeof e==`object`&&e.prefix&&e.iconName&&e.icon)return e;if(ga.icon)return ga.icon(e);if(e===null)return null;if(e&&typeof e==`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function xa(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var Sa=d(`<svg></svg>`);function Ca(e,t){l(t,!1);let n=_(t,`tag`,8),r=_(t,`props`,8),i=_(t,`children`,8),a=_(t,`style`,8,null),o=_(t,`ref`,12,null);if(n()!==`svg`)throw Error(`SvgElement requires a tag of "svg"`);function s(e){return e?.reduce((e,t)=>e+(t.tag?c(t):t),``)||``}function c({tag:e,props:t,children:n}){return`<${e} ${Object.keys(t).map(e=>`${e}="${t[e]}"`).join(` `)}>${s(n)}</${e}>`}let d=s(i()),f=r()?.style?`${r().style}${a()||``}`:a(),p={...r(),style:f};y();var m=Sa();se(m,()=>({...p})),g(m,()=>d,!0),C(m),te(m,e=>o(e),()=>o()),u(e,m),h()}function wa(e,n){let r=S(n,[`children`,`$$slots`,`$$events`,`$$legacy`]),i=S(r,`border.mask.maskId.fixedWidth.inverse.flip.icon.listItem.pull.pulse.rotation.size.spin.spinPulse.spinReverse.beat.fade.beatFade.bounce.shake.symbol.title.titleId.transform.swapOpacity.ref.style`.split(`.`));l(n,!1),_(n,`border`,8,!1);let a=_(n,`mask`,8,null),o=_(n,`maskId`,8,null);_(n,`fixedWidth`,8,!1),_(n,`inverse`,8,!1),_(n,`flip`,8,!1);let c=_(n,`icon`,8,null);_(n,`listItem`,8,!1),_(n,`pull`,8,null),_(n,`pulse`,8,!1),_(n,`rotation`,8,null),_(n,`size`,8,null),_(n,`spin`,8,!1),_(n,`spinPulse`,8,!1),_(n,`spinReverse`,8,!1),_(n,`beat`,8,!1),_(n,`fade`,8,!1),_(n,`beatFade`,8,!1),_(n,`bounce`,8,!1),_(n,`shake`,8,!1);let d=_(n,`symbol`,8,!1),g=_(n,`title`,8,``),b=_(n,`titleId`,8,null),x=_(n,`transform`,8,null);_(n,`swapOpacity`,8,!1);let ee=_(n,`ref`,12,null),te=_(n,`style`,8,null),C=ba(c()),re=xa(`classes`,[...fe(r),...(r.class||``).split(` `)]),ie=xa(`transform`,typeof x()==`string`?ga.transform(x()):x()),ae=xa(`mask`,ba(a())),oe=_a(C,{...re,...ie,...ae,symbol:d(),title:g(),titleId:b(),maskId:o()}),se=f(null);if(!oe)ya(`Could not find icon`,C);else{let{abstract:e}=oe;m(se,ge((e,t,n)=>({tag:e,props:t,children:n}),e[0],i))}y();var w=t(),ce=p(w),le=e=>{Ca(e,ne(()=>s(se),{get style(){return te()},get ref(){return ee()},set ref(e){ee(e)},$$legacy:!0}))};v(ce,e=>{s(se)&&e(le)}),u(e,w),h()}var Ta={prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},Ea=w(`<nav id="navigation" aria-label="Primary navigation"><a class="brand-mark" aria-label="Lazy Solutions home"><img class="lazy_icon" src="/media/images/logo.svg" alt="Lazy Solutions Homepage" height="35" width="42"/> <span class="brand-name">Lazy Solutions</span></a> <button class="menu-toggle" aria-label="Toggle menu"><!></button> <div class="nav-links"><a href="/#Projects">Projects</a> <a href="/blog">Blog</a> <a href="/#About">About Us</a> <a href="/#navbar-footer">Social</a> <a target="_blank" rel="noopener noreferrer sponsored">Asset Store</a> <a href="/support">Support</a></div></nav>`);function Da(t){let r=f(!1);function o(){m(r,!s(r)),document.body.classList.toggle(`no-scroll`,s(r))}function c(){m(r,!1),document.body.classList.remove(`no-scroll`)}var l=Ea();let d;var p=e(l);b(p,`href`,`/`);var h=i(p,2);wa(e(h),{get icon(){return Ta}}),C(h);var g=i(h,2),_=e(g),v=i(_,2),y=i(v,2),x=i(y,2),S=i(x,2);b(S,`href`,`https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/publishers/48996`);var ee=i(S,2);C(g),C(l),a(()=>{d=re(l,1,``,null,d,{"nav-open":s(r)}),b(h,`aria-expanded`,s(r))}),n(`click`,p,c),n(`click`,h,o),n(`click`,_,c),n(`click`,v,c),n(`click`,y,c),n(`click`,x,c),n(`click`,S,c),n(`click`,ee,c),u(t,l)}var Oa={prefix:`fab`,iconName:`discord`,icon:[576,512,[],`f392`,`M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z`]},ka={prefix:`fab`,iconName:`youtube`,icon:[576,512,[61802],`f167`,`M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z`]},Aa={prefix:`fab`,iconName:`x-twitter`,icon:[448,512,[],`e61b`,`M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z`]},ja=w(`<footer id="navbar-footer"><div class="footer-inner"><div class="footer-brand"><p>Professional Unity assets and production tools from Sweden.</p></div> <div class="footer-links"><h2>Social</h2> <nav class="social-media" aria-label="Social links"><a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/ayE4EHB6bQ" aria-label="Discord"><!></a> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@lazysolutions" aria-label="YouTube"><!></a> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Lazy_Solutions" aria-label="X"><!></a></nav></div> <div class="footer-meta"><p>This site contains Unity Asset Store affiliate links.</p> <p>&copy; 2018 - 2026 Patric Keisala. All rights reserved.</p></div></div></footer>`);function Ma(t){var n=ja(),r=e(n),a=i(e(r),2),o=i(e(a),2),s=e(o);wa(e(s),{get icon(){return Oa}}),C(s);var c=i(s,2);wa(e(c),{get icon(){return ka}}),C(c);var l=i(c,2);wa(e(l),{get icon(){return Aa}}),C(l),C(o),C(a),oe(2),C(r),C(n),u(t,n)}var $=ae(()=>ha),Na=w(`<!> <!> <!>`,1);function Pa(e,t){l(t,!1);let n=()=>o(de,`$page`,a),[a,s]=ie(),d=f();$($().autoAddCss=!1),$($().keepOriginalSource=!1),$($().showMissingIcons=!1),c(()=>n(),()=>{m(d,n().url.pathname)}),r(),y();var g=Na(),_=p(g);Da(_,{});var v=i(_,2);x(v,t,`default`,{},null),Ma(i(v,2),{}),u(e,g),h(),s()}export{Pa as component,le as universal};