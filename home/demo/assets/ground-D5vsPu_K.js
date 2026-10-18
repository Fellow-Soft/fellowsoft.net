import{s as xn,B as kn,p as Ga,P as Be,S as Mn,i as Sn,c as Tn,m as Ea,a as Bt,b as da,d as Ca,e as k,U as An,f as $n,g as On}from"./house-DKedvOF5.js";const za=Math.PI*2,En=9.81,Cn=.074/1e3,we=Object.freeze({angle:1500/1080,waterline:.67,eye:1.7,shortest:.04,longest:6,spread:.95,seed:20261014,rest:.35,engaged:.25,envelope:7,reach:.45,faintest:.02,shore:.012,dazzle:Object.freeze([Object.freeze([.0056,.4]),Object.freeze([.0185,.25])])}),Mt=Object.freeze({high:Object.freeze({cell:1.5,ripples:12,most:1e4}),mid:Object.freeze({cell:2.25,ripples:10,most:6e3}),television:Object.freeze({cell:2,ripples:10,most:3200}),plate:Object.freeze({cell:1.5,ripples:14,most:16e3})}),mt=t=>Math.max(0,Math.min(1,t)),Zt=(t,a,e)=>{const r=mt((e-t)/(a-t));return r*r*(3-2*r)},He=(t,a,e)=>t+(a-t)*e,Ra=(t,a,e)=>[He(t[0],a[0],e),He(t[1],a[1],e),He(t[2],a[2],e)],ha=new Map;function zn(t){const a=Math.max(2,Math.round(t)||2);if(ha.has(a))return ha.get(a);let e=we.seed>>>0;const r=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),h=(we.longest/we.shortest)**(1/(a-1)),c=Object.freeze(Array.from({length:a},(f,q)=>{const p=we.shortest*h**q*(.9+.2*r()),w=za/p;return Object.freeze({k:w,spread:(r()-.5)*2*we.spread,omega:Math.sqrt(En*w+Cn*w*w*w),phase:r()*za})}));return ha.set(a,c),c}function Rn(t){if(Array.isArray(t))return t.slice(0,3);const a=String(t??"");if(a.startsWith("#")){const r=Number.parseInt(a.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}const e=a.match(/\d+(?:\.\d+)?/gu);return e?e.slice(0,3).map(r=>Number(r)/255):[1,1,1]}function Ya({windMph:t=0,windFrom:a=270,raining:e=!1}={}){const r=Math.max(0,Number(t)||0)*.44704,h=Math.min(.045,.004+.0028*r)+(e?.006:0),c=((Number.isFinite(a)?a:270)+180)*Math.PI/180;return Object.freeze({slope:h,toward:Math.atan2(-Math.cos(c),-Math.sin(c))})}function Ka(t,a,e){if(!t||typeof t!="object"||!a)return null;const r=t.sun&&Number.isFinite(t.sun.altitude)?t.sun:null,h=!r&&t.moon&&Number.isFinite(t.moon.altitude)?t.moon:null;if(!r&&!h)return null;const c=Math.max(.5,Number(a.radius)||0),f=mt((e.crest*e.height-(a.y-c))/(2*c)),q=t.fog?(1-mt(t.fog.reach))**2:1,p=t.falls&&t.falls.kind!=="snow"?.6:1,w=1-mt(t.lying??0),n=q*p*w;if(r){const W=r.altitude,D=Zt(30,0,W),L=Ra(Ra([1,.97,.9],Rn(e.glow),.5),[1,.62,.32],D*.85);return Object.freeze({kind:"sun",x:a.x,elevation:Math.max(.002,W*Math.PI/180),colour:L,power:34*mt(r.glow)*f*Zt(-.5,3,W)*n,sharp:.03+.012*D})}const o=we.waterline*e.height-a.y,z=(1-mt(t.cover??0))**1.2;return Object.freeze({kind:"moon",x:a.x,elevation:Math.max(.002,Math.atan(o/(we.angle*e.height))),colour:[.86,.9,.95],power:14*mt(h.brightness)*z*f*n,sharp:.024})}function Ln(t,a,e,r){const h=zn(r.ripples),c=h.length,f=Math.sqrt(2*e.slope/c),{width:q,height:p}=t,w=Math.max(p,t.full??p),n=we.angle*p,o=we.waterline*p,z=Math.sin(a.elevation),W=Math.cos(a.elevation),D=a.sharp*a.sharp,L=2*we.envelope*(e.slope+D),A=we.reach*p,S=h.map(j=>{const ie=e.toward+j.spread;return{kx:j.k*Math.cos(ie),kz:j.k*Math.sin(ie),ux:Math.cos(ie),uz:Math.sin(ie)}}),B=(j,ie)=>{const Te=(j+.5)*ie/n,T=Math.sin(Te),R=Math.cos(Te),$=T+z,K=(R-W)/$;if(K*K>L)return null;const oe=we.eye/Math.tan(Te),We=oe*ie/n,fe=we.eye*(ie/n)/(T*T),C=new Float64Array(c);let _=0;S.forEach((ve,he)=>{const De=Math.abs(ve.kx)*We+Math.abs(ve.kz)*fe;C[he]=Math.exp(-De*De/6),_+=(1-C[he]*C[he])*f*f/2});const ce=D/(D+_),Se=Math.cos((Math.PI-Te-a.elevation)/2);if(ce*(.02+.98*(1-Se)**5)*a.power<we.faintest)return null;const qe=Math.asin(Math.min(1,Math.sqrt(L)*$/Math.max(1e-6,W))),Ae=Math.min(A,qe*n),ye=Math.max(0,Math.floor((a.x-Ae)/ie)),Ee=Math.min(Math.ceil(q/ie),Math.ceil((a.x+Ae)/ie));return Ee<=ye?null:{row:j,from:ye,to:Ee,sinD:T,cosD:R,sum:$,distance:oe,res:C,unresolved:_}},I=j=>{const ie=Math.max(0,Math.ceil((w-o)/j)),Te=[];let T=0;for(let R=0;R<ie;R++){const $=B(R,j);$&&(Te.push($),T+=$.to-$.from)}return{cell:j,list:Te,count:T}};let Y=I(Math.max(.5,r.cell));for(let j=0;Y.count>r.most&&j<4;j++)Y=I(Y.cell*Math.sqrt(Y.count/r.most)*1.01);const{cell:ae,list:J,count:y}=Y;if(!J.length)return null;let le=1/0,be=-1/0;for(const j of J)le=Math.min(le,j.from),be=Math.max(be,j.to);const ee=J[0].row,ke=be-le,U=J[J.length-1].row+1-ee,$e=new Float32Array(y),P=new Float32Array(y),Me=new Float32Array(y),Re=[];let Oe=0;for(const j of J){const{sinD:ie,cosD:Te,sum:T,distance:R}=j,$=[],K=(j.from+.5)*ae-q/2;S.forEach((C,_)=>{const ce=j.res[_];if(ce<=.02)return;const Se=C.kx*R/n;$.push({index:_,offset:C.kz*R+Se*K,step:Se*ae,tiltX:-f*ce*C.ux,tiltZ:-f*ce*C.uz})});const oe=D+j.unresolved,We=D/oe*Zt(0,we.shore*p,(j.row+.5)*ae)*a.power,fe=j.to-j.from;for(let C=0;C<fe;C++){const _=(a.x-(j.from+C+.5)*ae)/n,ce=Math.sin(_),Se=Math.cos(_),qe=-W*ce/T,Ae=(Te-W*Se)/T,ye=Oe+C;if((qe*qe+Ae*Ae)/L>1)continue;const Ee=W*Se-Te,ve=Math.max(0,(T*ie-Ee*Te)/Math.sqrt(W*ce*W*ce+T*T+Ee*Ee));$e[ye]=qe,P[ye]=Ae,Me[ye]=We*(.02+.98*(1-ve)**5)}Re.push(Object.freeze({at:(j.row-ee)*ke+(j.from-le),start:Oe,cells:fe,half:1/(2*oe),ripple:Int32Array.from($,C=>C.index),offset:Float64Array.from($,C=>C.offset),turnSin:Float64Array.from($,C=>Math.sin(C.step)),turnCos:Float64Array.from($,C=>Math.cos(C.step)),tiltX:Float64Array.from($,C=>C.tiltX),tiltZ:Float64Array.from($,C=>C.tiltZ)})),Oe+=fe}return Object.freeze({ripples:h,cell:ae,left:le*ae,top:o+ee*ae,columns:ke,rows:U,lines:Re,askX:$e,askZ:P,gives:Me})}function Qa(t,a,e,r,h,c=null){if(!e||!(e.power>1e-4)||!a||!(a.width>0)||!(a.height>0)||!r||!h)return null;const f=c??{},q=[a.width,a.height,a.full??a.height,e.x,e.elevation,e.sharp,e.power,r.slope,r.toward,h.cell,h.ripples,h.most].join("|");f.key!==q&&(f.plan=Ln(a,e,r,h),f.key=q);const p=f.plan;if(!p)return null;const{ripples:w,cell:n,columns:o,rows:z,lines:W,askX:D,askZ:L,gives:A}=p,S=o*z;(!f.light||f.light.length<S)&&(f.light=new Float32Array(Math.ceil(S*1.25)));const B=f.light;B.fill(0,0,S);const I=w.length;(!f.turning||f.turning.length<I*3)&&(f.turning=new Float64Array(I*3));const Y=f.turning.subarray(0,I),ae=f.turning.subarray(I,2*I),J=f.turning.subarray(2*I,3*I);for(let T=0;T<I;T++)Y[T]=w[T].phase-w[T].omega*t;for(const T of W){const R=T.ripple.length,{offset:$,turnSin:K,turnCos:oe,tiltX:We,tiltZ:fe,half:C}=T;for(let _=0;_<R;_++){const ce=$[_]+Y[T.ripple[_]];ae[_]=Math.sin(ce),J[_]=Math.cos(ce)}for(let _=0;_<T.cells;_++){let ce=0,Se=0;for(let he=0;he<R;he++){const De=ae[he],Ue=J[he];ce+=We[he]*De,Se+=fe[he]*De,ae[he]=De*oe[he]+Ue*K[he],J[he]=Ue*oe[he]-De*K[he]}const qe=T.start+_,Ae=A[qe];if(Ae===0)continue;const ye=D[qe]-ce,Ee=L[qe]-Se,ve=(ye*ye+Ee*Ee)*C;ve<12&&(B[T.at+_]+=Math.exp(-ve)*Ae)}}const[y,le,be]=e.colour;(!f.toned||f.toned.length<S*3)&&(f.toned=new Float32Array(Math.ceil(S*3*1.25)));const ee=f.toned,ke=y*.2126+le*.7152+be*.0722;for(let T=0,R=0;T<S;T++,R+=3){const $=B[T]*ke;if($>1e-5){const K=(1-Math.exp(-$))/$*B[T],oe=Zt(1.2,5,$)*.6;ee[R]=He(y*K,1,oe),ee[R+1]=He(le*K,1,oe),ee[R+2]=He(be*K,1,oe)}else ee[R]=0,ee[R+1]=0,ee[R+2]=0}(!f.pixels||f.pixels.length<S*4)&&(f.pixels=new Uint8ClampedArray(Math.ceil(S*4*1.25)));const U=f.pixels.subarray(0,S*4);(!f.bright||f.bright.length<S)&&(f.bright=new Float32Array(Math.ceil(S*1.25)),f.spread=new Float32Array(f.bright.length),f.between=new Float32Array(f.bright.length),f.dazzle=new Float32Array(f.bright.length));const{bright:$e,spread:P,between:Me,dazzle:Re}=f;for(let T=0,R=0;T<S;T++,R+=3)$e[T]=ee[R]*.2126+ee[R+1]*.7152+ee[R+2]*.0722;Re.fill(0,0,S);let Oe=$e;for(const[T,R]of we.dazzle){const $=Math.max(1,Math.round(T*a.height/n/2));La(Oe,P,Me,o,z,$),La(P,P,Me,o,z,$);for(let K=0;K<S;K++)Re[K]+=R*P[K];Oe=P}const j=He(y,1,.3)/Math.max(.05,He(ke,1,.3)),ie=He(le,1,.3)/Math.max(.05,He(ke,1,.3)),Te=He(be,1,.3)/Math.max(.05,He(ke,1,.3));for(let T=0,R=0,$=0;T<S;T++,R+=3,$+=4){const K=Re[T];U[$]=(ee[R]+K*j)*255,U[$+1]=(ee[R+1]+K*ie)*255,U[$+2]=(ee[R+2]+K*Te)*255,U[$+3]=255}return Object.freeze({kind:e.kind??"body",left:p.left,top:p.top,cell:n,columns:o,rows:z,pixels:U})}function La(t,a,e,r,h,c){const f=1/(2*c+1);for(let q=0;q<h;q++){const p=q*r;let w=0;for(let n=0;n<c&&n<r;n++)w+=t[p+n];for(let n=0;n<r;n++)n+c<r&&(w+=t[p+n+c]),e[p+n]=w*f,n>=c&&(w-=t[p+n-c])}for(let q=0;q<r;q++){let p=0;for(let w=0;w<c&&w<h;w++)p+=e[w*r+q];for(let w=0;w<h;w++)w+c<h&&(p+=e[(w+c)*r+q]),a[w*r+q]=p*f,w>=c&&(p-=e[(w-c)*r+q])}}const Xa=Object.freeze({high:Object.freeze({dprCap:1.6,frameInterval:0,density:1}),mid:Object.freeze({dprCap:1.15,frameInterval:33,density:.68})}),It=607,In=1.7,Pn=2400,jn=.001,Ia=.25,Nn=.0465,Dn=.255,Fn=.15,ua=9,Wn=Object.freeze([0,.1,.25,.5,1,1.5,2,3,4]),_n=(t,a,e)=>t*e*(1-Math.exp(-a/e)),pt=Object.freeze({from:.88,ink:Object.freeze([13,36,31]),alpha:.66});function Hn(t,a,e){const r=Vt(t.waterDeep),h=Vt(V(t.water,t.waterDeep,.55)),c=(a-e)*(1-.48),f=pt.alpha/(a*(1-pt.from)),q=r.map((A,S)=>(1-pt.alpha)*A+pt.alpha*pt.ink[S]),p=r.map((A,S)=>(1-pt.alpha)*(A-h[S])/c+(pt.ink[S]-A)*f),w=p.map((A,S)=>q[S]>0?Math.max(0,-A/q[S]):0),n=[.2126,.7152,.0722],o=q.reduce((A,S,B)=>A+S*n[B],0),z=o>0?Math.max(0,-p.reduce((A,S,B)=>A+S*n[B],0)/o):0,W=-Math.log(1-Fn),D=z>0?Math.max(ua,W/z):ua,L=w.map(A=>A>0?Math.max(ua,Math.min(D,W/A)):D);return{ease:D,stops:Wn.map(A=>[A/4,`rgb(${w.map((S,B)=>Math.round(255*Math.exp(-_n(S,A*D,L[B])))).join(",")})`])}}const Bn=1600,St=1.15,wt=Object.freeze({hour:13.5,season:"summer"}),Za=Object.freeze(["winter","spring","summer","autumn"]),Va=Object.freeze({birds:!1}),Pa=Object.freeze({spring:Object.freeze({wood:"#4b6a4c",reed:["rgba(96,131,84,.44)","rgba(64,101,66,.7)","rgba(38,72,52,.92)"],spike:"rgba(190,168,188,.56)"}),summer:Object.freeze({wood:"#3f5a46",reed:["rgba(57,86,59,.48)","rgba(38,71,52,.74)","rgba(24,51,42,.94)"],spike:"rgba(154,124,156,.56)"}),autumn:Object.freeze({wood:"#6d5638",reed:["rgba(120,102,58,.5)","rgba(88,79,47,.76)","rgba(52,55,36,.93)"],spike:"rgba(198,158,88,.62)"}),winter:Object.freeze({wood:"#5c6461",reed:["rgba(132,124,101,.46)","rgba(101,98,82,.72)","rgba(66,70,62,.9)"],spike:"rgba(186,180,162,.55)"})}),Ut=Object.freeze([{hour:0,palette:{top:"#101a24",upper:"#1d3038",lower:"#385052",horizon:"#63706a",water:"#314945",waterDeep:"#142c29",glow:"#d6d7c5",darkness:1}},{hour:4.8,palette:{top:"#263a4d",upper:"#526879",lower:"#8a8f8d",horizon:"#bd9b86",water:"#5e7470",waterDeep:"#24423b",glow:"#e8c39d",darkness:.72}},{hour:6.5,palette:{top:"#7896a1",upper:"#9fb2b0",lower:"#d9c2a7",horizon:"#efb082",water:"#7f9990",waterDeep:"#31564a",glow:"#ffe2a1",darkness:.12}},{hour:9.5,palette:{top:"#8eabb4",upper:"#b6c6c2",lower:"#d8d4bd",horizon:"#e5c9a4",water:"#91aaa1",waterDeep:"#365d52",glow:"#f7dfae",darkness:0}},{hour:13.5,palette:{top:"#7ea4b2",upper:"#abc0bd",lower:"#d8d9c7",horizon:"#e8d7b7",water:"#80a29a",waterDeep:"#2f5b51",glow:"#f8e6bd",darkness:0}},{hour:17.5,palette:{top:"#7e9da7",upper:"#a7b4aa",lower:"#d6b894",horizon:"#e59b6f",water:"#718c7e",waterDeep:"#294b41",glow:"#ffd08b",darkness:.04}},{hour:20,palette:{top:"#4d6171",upper:"#747d83",lower:"#a98478",horizon:"#d38a69",water:"#536a65",waterDeep:"#213b36",glow:"#f3b775",darkness:.42}},{hour:22,palette:{top:"#172432",upper:"#2a3d49",lower:"#4d5c60",horizon:"#6f706c",water:"#3a514d",waterDeep:"#172f2c",glow:"#d9d4b6",darkness:.88}},{hour:24,palette:{top:"#101a24",upper:"#1d3038",lower:"#385052",horizon:"#63706a",water:"#314945",waterDeep:"#142c29",glow:"#d6d7c5",darkness:1}}]);function at(t){return Math.max(0,Math.min(1,t))}function Gt(t){let a=t>>>0;return()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296)}function Vt(t){if(t.startsWith("#")){const e=Number.parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}const a=t.match(/\d+(?:\.\d+)?/g);return a?a.slice(0,3).map(Number):[0,0,0]}function V(t,a,e){const r=Vt(t),h=Vt(a);return`rgb(${r.map((c,f)=>Math.round(c+(h[f]-c)*e)).join(",")})`}function ja(t){if(typeof t!="function")return wt;let a;try{a=t()}catch{return wt}if(!a||typeof a!="object")return wt;const e=Number(a.hour);if(!Number.isFinite(e)||e<0||e>24)return wt;const r=Za.indexOf(a.season)===-1?wt.season:a.season;return{hour:e,season:r}}function wa(t,a){const e=Ut.findIndex(w=>w.hour>=t),r=Math.max(1,e<0?Ut.length-1:e),h=Ut[r],c=Ut[r-1],f=(t-c.hour)/Math.max(.001,h.hour-c.hour),q=a==="spring"?"#8fae8f":a==="summer"?"#708f72":a==="autumn"?"#a58361":"#9aa7a1",p=w=>V(V(c.palette[w],h.palette[w],f),q,.06);return{top:p("top"),upper:p("upper"),lower:p("lower"),horizon:p("horizon"),water:p("water"),waterDeep:p("waterDeep"),glow:p("glow"),darkness:c.palette.darkness+(h.palette.darkness-c.palette.darkness)*f}}function Un(t,a,e){return{top:V(t.top,a.top,e),upper:V(t.upper,a.upper,e),lower:V(t.lower,a.lower,e),horizon:V(t.horizon,a.horizon,e),water:V(t.water,a.water,e),waterDeep:V(t.waterDeep,a.waterDeep,e),glow:V(t.glow,a.glow,e),darkness:t.darkness+(a.darkness-t.darkness)*e}}function Gn(t){const a=at(t);return a*a*(3-2*a)}function Na(t){const a=t&&typeof t.code=="string"?t.code:null,e=t&&Number.isFinite(t.windMph)?Math.max(0,Math.min(60,t.windMph)):0,h={clear:{cloud:18,precipitation:0,snowfall:0,fog:0,storm:0},cloudy:{cloud:82,precipitation:0,snowfall:0,fog:0,storm:0},rain:{cloud:92,precipitation:1.2,snowfall:0,fog:.08,storm:0},snow:{cloud:90,precipitation:0,snowfall:.8,fog:.12,storm:0},fog:{cloud:72,precipitation:0,snowfall:0,fog:1,storm:0},storm:{cloud:100,precipitation:2.1,snowfall:0,fog:.16,storm:1}}[a]||{cloud:18,precipitation:0,snowfall:0,fog:0,storm:0};return{code:a,wind:e,...h}}function Da(t){return{...t}}function Rt(t){return Math.min(2.2,.55+t.wind/18)}function Yn(t,a,e){const r=1-Math.exp(-Math.max(0,e)*2.6);for(const h of["cloud","precipitation","snowfall","wind","fog","storm"])t[h]+=(a[h]-t[h])*r;Math.abs(t.cloud-a.cloud)<.02&&(t.code=a.code)}const fa=Object.freeze({told:!1,air:null,cover:0,drain:0,sun:null,afterglow:0,moon:null,fog:null,haze:0,falls:null,lying:0,glaze:0,storm:null,wind:Object.freeze({kmh:0,side:0,lean:0,stream:!1}),stars:1,whimsy:Va});function Fa(t){if(typeof t!="function")return fa;let a;try{a=t()}catch{return fa}return!a||typeof a!="object"?fa:a}function Kn(t){const a=t&&typeof t=="object"?t.whimsy:null;return!a||typeof a!="object"?Va:{birds:a.birds===!0}}function Ja(t,a){const e=Math.min(1,Math.max(0,a.drain||0)),r=a.storm?a.storm.charcoal:0,h=!a.moon&&t.darkness>.7?(t.darkness-.7)/.3:0;if(e<.02&&!r&&h<.02)return t;if(h>.02){const n="#0c1418",o=z=>Math.min(.62,z);t={top:V(t.top,n,o(h*.46)),upper:V(t.upper,n,o(h*.42)),lower:V(t.lower,n,o(h*.36)),horizon:V(t.horizon,n,o(h*.22)),water:V(t.water,n,o(h*.4)),waterDeep:V(t.waterDeep,n,o(h*.46)),glow:V(t.glow,n,o(h*.2)),darkness:Math.min(1,t.darkness+h*.04)}}if(e<.02&&!r)return t;const c=V("#8d9296","#1e262c",t.darkness),f="#3c464a",q=V("#6c7a63","#2d3a35",t.darkness),p=(n,o,z)=>V(n,o,Math.min(.86,z)),w={top:p(t.top,c,e*.62),upper:p(t.upper,c,e*.7),lower:p(t.lower,c,e*.72),horizon:p(t.horizon,c,e*.8),water:p(t.water,c,e*.5),waterDeep:p(t.waterDeep,c,e*.34),glow:p(t.glow,c,e*.78),darkness:Math.min(1,t.darkness+e*.06)};return r?{top:p(w.top,f,r*.72),upper:p(w.upper,f,r*.66),lower:p(w.lower,q,r*.42),horizon:p(w.horizon,q,r*.5),water:p(w.water,f,r*.4),waterDeep:p(w.waterDeep,f,r*.3),glow:p(w.glow,q,r*.5),darkness:Math.min(1,w.darkness+r*.12)}:w}function it(t,a){return Math.max(1,Math.min(t.length,Math.ceil(t.length*a)))}const pa=Math.PI*2;function en(){const t=Gt(It),a=Array.from({length:70},()=>({x:t(),y:t()*.58,r:.25+t()*.9,phase:t()*Math.PI*2})),e=Array.from({length:330},()=>({x:t(),base:.69+t()*.09,h:.025+t()*.09,lean:(t()-.5)*.02,depth:t(),head:t()>.94,phase:t()*Math.PI*2})),r=Array.from({length:290},()=>({x:t(),base:.86+t()*.22,h:.12+t()*.27,lean:(t()-.5)*.055,depth:t(),head:t()>.84,phase:t()*Math.PI*2}));Array.from({length:24},()=>({x:t(),y:.72+t()*.23,rx:5+t()*16,turn:t()*Math.PI,bloom:t()}));const h=Array.from({length:11},()=>({x:t(),y:.49+t()*.28,r:16+t()*26,speed:.07+t()*.13,phase:t()*Math.PI*2})),c=Array.from({length:3},(L,A)=>({base:.606+A*.021,crest:Array.from({length:41},(S,B)=>{const I=B/40;return(Math.sin(I*(2.1+A*1.3)*Math.PI+A*2.1)*.55+Math.sin(I*(4.3+A*2.1)*Math.PI+A*3.7)*.21+(t()-.5)*.15)*(.052-A*.013)})})),f=c.map(L=>L.crest.map(A=>L.base+A)),q=Array.from({length:11},()=>{const L=t(),A=.06+L*.12+t()*.05,S=5+Math.floor(t()*3),B=[];for(let I=0;I<S;I++){const Y=(I+.5)/S,ae=1-Math.abs(Y-.5)*2;B.push({dx:(Y-.5)*1.9+(t()-.5)*.18,dy:-(.25+ae*.85)*(.6+t()*.5),r:(.34+ae*.5)*(.75+t()*.5)})}return{x:t(),y:.05+t()*.26+L*.04,w:A,h:(.022+t()*.028)*(.7+L),depth:L,speed:.35+t()*.7,lobes:B,drop:Math.max(...B.map(I=>I.dy+I.r*St)),spread:Math.max(...B.map(I=>Math.abs(I.dx)+I.r))}}),p=Array.from({length:240},()=>({x:t(),base:.77+t()*.1,h:.06+t()*.15,lean:(t()-.5)*.035,depth:t(),head:t()>.9,phase:t()*Math.PI*2})),w=Array.from({length:46},()=>({x:t(),base:.84+t()*.2,h:.07+t()*.17,spread:.012+t()*.03,blades:5+Math.floor(t()*5),depth:t(),phase:t()*Math.PI*2,spike:t()})),n=Array.from({length:26},()=>({x:t(),y:.6+t()*.3,r:.8+t()*1.5,speed:.5+t()*1.4,phase:t()*Math.PI*2,rise:t()})),o=Gt(It+1),z=Array.from({length:Pn},()=>{const L=o(),A=o(),S=o(),B=(o()-.5)*.01,I=.1+o()*.3,Y=o()>.9,ae=Math.min(2,Math.floor((I-.1)/.3*3));return{x:L,down:A,grow:S,lean:B,depth:I,headed:Y,layer:ae,phase:o()*Math.PI*2}}),W=Gt(It+2);for(const L of[e,p,r,w])for(const A of L)A.keep=W();const D=Gt(It+3);for(const L of z)L.stop=D(),L.keep=D();return{stars:a,farReeds:e,foregroundReeds:r,wisps:h,ridges:c,ridgeLines:f,clouds:q,midReeds:p,sedges:w,flits:n,skirtReeds:z}}function Qn(t,a){return t.map(e=>{const r=.02+e.down*a,h=.012+e.grow*.07,c=r-jn,f=h<=c?h:c*(Ia+(1-Ia)*e.stop);return Object.freeze({x:e.x,base:1+r,h:f,depth:e.depth,layer:e.layer,phase:e.phase,keep:e.keep,lean:e.lean*f/Nn,bend:f/Dn,head:e.headed&&f>.04&&r-f>.03})})}const tn=en(),Yt=Object.freeze((()=>{const{ridgeLines:t}=tn;return t[0].map((a,e)=>Math.min(...t.map(r=>r[e])))})());function an(t){const a=Yt.length-1,e=at(Number(t)||0)*a,r=Math.min(a-1,Math.floor(e));return Yt[r]+(Yt[r+1]-Yt[r])*(e-r)}const ga=Object.freeze(tn.clouds),Ne=Object.freeze({radius:.019,halo:.13,haloStops:Object.freeze([Object.freeze([0,.58]),Object.freeze([.3,.16]),Object.freeze([1,0])]),earthshine:Object.freeze([206,212,206]),lit:Object.freeze([238,240,228]),litAlpha:.92}),Ve=Object.freeze({across:232,share:.34,down:100});function ba(t){const a=Math.min(Ve.across,t*Ve.share);return Object.freeze([Object.freeze({left:0,top:0,right:a,bottom:Ve.down}),Object.freeze({left:t-a,top:0,right:t,bottom:Ve.down})])}function Jt(t){if(!t||typeof t!="object")return null;const a={left:Number(t.left),top:Number(t.top),right:Number(t.right),bottom:Number(t.bottom)};return[a.left,a.top,a.right,a.bottom].every(Number.isFinite)&&a.right>a.left&&a.bottom>a.top?Object.freeze(a):null}function Wa(t){return Array.isArray(t)?Object.freeze(t.map(Jt).filter(Boolean)):null}function nn(t,a,e,r,h,c){let f=1;for(const q of c){const p=Math.max((q.left-h-t)/e,(t-h-q.right)/e,(q.top-h-a)/r,(a-h-q.bottom)/r);f=Math.min(f,p)}return Math.max(0,Math.min(1,f))}const on=8;function va(t,a,e,r,h){const c=t*r,f=a*h,q=Math.min(Ve.across,r*Ve.share),p=Math.max(0,q+e-c,c+e-(r-q)),w=Math.max(0,Ve.down+e+on-f);return Object.freeze({x:c,y:f+Math.min(w,p)})}function _a(t,a,e=null){const r=Jt(e);if(!r){const f=Math.min(a*.271,t*.346);return Object.freeze({middle:t/2,half:f,fall:Math.max(1,Math.min(f*.55,(t/2-f)*.5)),bed:0})}const h=(r.right-r.left)/2,c=Math.max(0,Math.min(r.left,t-r.right));return Object.freeze({middle:(r.left+r.right)/2,half:h,fall:Math.max(1,Math.min(h*.55,c*.5)),bed:at((r.bottom/a-ea.root)/(1-ea.root))})}const ea=Object.freeze({root:.86,thins:.95}),gt=Object.freeze({near:.88,sedge:.85,middle:.7,far:.75});function ya(t,a,e){const r=Math.abs(t-a.middle)-a.half;if(r<=0)return e;if(r>=a.fall)return 0;const h=1-r/a.fall;return e*h*h*(3-2*h)}const Ha=(t,a,e,r)=>t.keep>=ya(a,e,r);function sn(t,a){const r=2*Math.min(1,Math.max(0,Number(t)||0))-1;return Object.freeze({limbAnticlockwise:!a,terminatorAnticlockwise:r<0==!!a,terminatorWidth:Math.abs(r)})}function Xn(t,a){const e=sn(t,a),r=e.limbAnticlockwise?0:1,h=e.terminatorAnticlockwise?0:1,c=Math.round(e.terminatorWidth*1e4)/1e4;return`M 0 -1 A 1 1 0 0 ${r} 0 1 A ${c} 1 0 0 ${h} 0 -1 Z`}function Zn(t){const a=t&&typeof t=="object"?t.moon:null;if(!a||t.sun)return null;const e=a.halo>.02?a.halo:0;return Object.freeze({x:a.x,y:a.y,radius:Ne.radius,halo:Ne.halo,earthshine:a.earthshine*a.brightness,lit:Ne.litAlpha*a.brightness,haloStrength:e,fraction:a.fraction,waxing:a.waxing,path:Xn(a.fraction,a.waxing)})}const Ba=Object.freeze({dawn:7.76,day:13.55,dusk:18.65,night:24});function rn(t){return{lit:V(t.glow,"#fffaf0",.34),body:V(t.upper,t.lower,.4),under:V(t.top,t.upper,.3),lid:V(t.upper,"#8d9296",.5)}}function Vn(t,a,e){const r=Object.hasOwn(Ba,t)?Ba[t]:wt.hour,h=Ja(wa(r,Za.includes(a)?a:wt.season),e);return Object.freeze({...rn(h),sky:Object.freeze([h.top,h.upper,h.lower,h.horizon])})}function Jn(t,a,e,r,h){const c=t&&typeof t=="object"?t.moon:null;if(!c||t.sun||!e||!r||!(e.width>0)||!(e.height>0))return null;const{width:f,height:q}=e,p=f*Ne.radius,w=va(c.x,c.y,p,f,q);if(!(w.y<q*we.waterline))return null;const n=Ka(t,{x:w.x,y:w.y,radius:p},{height:q,glow:"#ffffff",crest:an(w.x/f)});if(!n||!(n.power>1e-4))return null;const o=Ya({windMph:a,windFrom:t.air&&Number.isFinite(t.air.windFrom)?t.air.windFrom:270,raining:!!(t.falls&&t.falls.kind!=="snow")});return Qa(0,{width:r.width,height:h*r.scale,full:r.height},{...n,x:w.x-r.left},o,Mt.plate)}function eo(t){const a=t&&t.canvas;if(!a||typeof a.getContext!="function")throw new TypeError("Finger Lakes needs a canvas");const e=a.getContext("2d");if(!e)throw new Error("2D canvas is unavailable");let r=t.tier==="mid"?"mid":"high",h=!!t.quiet,c=!!t.engaged,f=!1,q=!1,p=0,w=0,n=1,o=1,z=1,W=0,D=0,L=0,A=-1,S=0,B=0,I=!1;const Y=t.moment,ae=t.sky;let J=ja(Y),y=Fa(t.sky),le=wa(J.hour,J.season),be={...le},ee=0,ke=Na(t.weather),U=Da(ke),$e=Math.max(0,Number(t.skirt)||0),P=1,Me={reach:-1,reeds:[]};const Re=t.moon!==!1,Oe=t.layer==="front",j=t.layer==="water",ie=t.sway!==!1,Te=t.waterLight!==!1;let T=0;const R={};let $=null,K=null,oe=Jt(t.windowBox),We=oe,fe=1,C=Wa(t.cards),_=t.cards!==!1&&!(C&&C.length===0),ce=_?1:0,Se=0,qe=0,Ae=0,ye=0,Ee=.32+Rt(U)*.12,ve=null;const{stars:he,farReeds:De,foregroundReeds:Ue,wisps:nt,ridges:lt,ridgeLines:Pt,clouds:Tt,midReeds:At,sedges:l,flits:m,skirtReeds:N}=en();function X(){return Xa[r]}function Ce(){const d=c?Math.min(X().dprCap,r==="high"?1.3:1):X().dprCap;return Math.min(window.devicePixelRatio||1,d)}function xe(){const d=a.getBoundingClientRect(),v=Math.max(1,d.width||window.innerWidth||1),pe=Math.max(1,d.height||window.innerHeight||1),se=Ce(),O=Math.max(1,Math.round(v*se)),G=Math.max(1,Math.round(pe*se));(a.width!==O||a.height!==G)&&(a.width=O,a.height=G),n=v,P=pe,o=Math.max(1,pe-$e),z=se,e.setTransform(se,0,0,se,0,0)}function Z(d){W=d.clientX/Math.max(window.innerWidth,1)-.5}window.addEventListener("pointermove",Z,{passive:!0});function Ye(d){if(!ee)return be;const v=Gn((d-ee)/Bn);return v>=1?be:Un(le,be,v)}function Ke(d){const v=ja(Y);le=Ye(d),be=wa(v.hour,v.season),ee=d,J=v}function Qe(d){const v=Math.floor(d/6e4);v!==A&&(A=v,Ke(d))}function bt(d){const v=d.length-1,pe=O=>n*O/v,se=O=>o*d[O];e.lineTo(0,se(0));for(let O=1;O<v;O++)e.quadraticCurveTo(pe(O),se(O),(pe(O)+pe(O+1))/2,(se(O)+se(O+1))/2);e.lineTo(n,se(v))}function ct(d,v,pe,se=!1){const O=d.x*n,G=d.base*o,ue=d.h*o,F=Rt(U),ge=h||!ie?0:Math.sin(Se+d.phase)*(2+d.depth*7)*F*(d.bend??1),Ie=ve*ue*(.18+d.depth*.2),M=at(y.lying),Pe=O+d.lean*n+ge+Ie+M*ue*.06,E=G-ue*(1-M*.08-Math.abs(y.wind.lean)*.06);if(e.strokeStyle=v,e.lineWidth=pe,e.beginPath(),se&&G>o&&P>o?(e.moveTo(O,P+pe),e.lineTo(O,G)):e.moveTo(O,G),e.quadraticCurveTo(O+ge*.2,G-ue*.52,Pe,E),e.stroke(),d.depth>.42)for(const Q of[-1,1]){const de=G-ue*(Q<0?.24:.43),_e=ue*(d.head?.62:.46),ot=O+Q*_e*.38+ge*.65+Ie*.55,dt=de-_e*.62,Le=(3+d.depth*6)*(d.head?1.25:1);e.fillStyle=v,e.beginPath(),e.moveTo(O+ge*.1,de),e.quadraticCurveTo(O+Q*Le,de-_e*.66,ot,dt),e.quadraticCurveTo(O+Q*Le*.3,de-_e*.42,O+ge*.1,de),e.fill(),e.save(),e.globalAlpha*=.18,e.strokeStyle="rgb(212,220,174)",e.lineWidth=.6,e.beginPath(),e.moveTo(O,de),e.quadraticCurveTo(O+Q*Le*.7,de-_e*.55,ot,dt),e.stroke(),e.restore()}if(d.head){e.save(),e.translate(Pe,E+3),e.rotate(d.lean*4+ge*.002),e.fillStyle=v,e.beginPath();const Q=2+d.depth*2,de=8+d.depth*6;e.moveTo(-Q,-de+Q),e.quadraticCurveTo(-Q,-de,0,-de),e.quadraticCurveTo(Q,-de,Q,-de+Q),e.lineTo(Q,de-Q),e.quadraticCurveTo(Q,de,0,de),e.quadraticCurveTo(-Q,de,-Q,de-Q),e.closePath(),e.fill(),M>.02&&(e.fillStyle=`rgba(246,249,252,${.5+M*.4})`,e.beginPath(),e.ellipse(-.6,-(6+d.depth*4),2.4+d.depth*1.9,1.9+d.depth*1.4,0,0,Math.PI*2),e.fill()),e.restore()}else M>.02&&d.depth>.4&&(e.fillStyle=`rgba(246,249,252,${.34+M*.3})`,e.beginPath(),e.ellipse(Pe,E+1,1.5+d.depth,1,0,0,Math.PI*2),e.fill())}function jt(d,v,pe){const se=d.x*n,O=d.base*o,G=d.h*o,ue=Rt(U),F=ie?Math.sin(qe+d.phase)*(1.4+d.depth*5)*ue:0;e.strokeStyle=v,e.lineWidth=.55+d.depth*.8;for(let ge=0;ge<d.blades;ge++){const Ie=(ge/Math.max(1,d.blades-1)-.5)*2,M=Ie*d.spread*n,Pe=O-G*(.6+(1-Math.abs(Ie))*.4);e.beginPath(),e.moveTo(se,O),e.quadraticCurveTo(se+M*.26+F*.3,O-G*.64,se+M+F,Pe),e.stroke()}if(d.spike>.62){const ge=se+F*.8,Ie=O-G*1.26;e.lineWidth=.7+d.depth*.5,e.beginPath(),e.moveTo(se,O),e.quadraticCurveTo(se+F*.3,O-G*.72,ge,Ie),e.stroke(),e.fillStyle=pe,e.beginPath(),e.ellipse(ge,Ie,1.3+d.depth*1.4,G*.13,0,0,Math.PI*2),e.fill()}}function Nt(d,v){const pe=n*.29,se=o*.97,O=[{x:-.012,top:.755,lean:-.006,scale:.88},{x:0,top:.71,lean:.002,scale:1},{x:.014,top:.775,lean:.008,scale:.78}];e.save(),e.lineCap="round";for(let G=0;G<O.length;G++){const ue=O[G],F=pe+n*ue.x,ge=ie?Math.sin(v*.31+G*1.8)*n*.0022:0,Ie=F+n*ue.lean+ge,M=o*ue.top;e.strokeStyle=`rgba(31,65,48,${.55+d.darkness*.23})`,e.lineWidth=Math.max(1.1,n*92e-5*ue.scale),e.beginPath(),e.moveTo(F,se),e.bezierCurveTo(F-n*.004,o*.88,Ie+n*.002,o*(ue.top+.075),Ie,M),e.stroke(),e.save(),e.translate(Ie,M+o*.011),e.rotate(ue.lean*9+ge*.001);const Pe=e.createLinearGradient(-5,0,6,0);Pe.addColorStop(0,"rgba(68,55,38,.82)"),Pe.addColorStop(.5,"rgba(126,91,52,.9)"),Pe.addColorStop(1,"rgba(64,52,37,.8)"),e.fillStyle=Pe,e.beginPath(),e.roundRect(-Math.max(2.2,n*.0018),0,Math.max(4.4,n*.0036),o*.034*ue.scale,5),e.fill(),e.restore()}e.strokeStyle=`rgba(42,79,55,${.36+d.darkness*.18})`,e.lineWidth=Math.max(.7,n*58e-5);for(let G=0;G<7;G++){const ue=pe+n*(-.025+G*.008),F=(G-3)*n*.013,ge=o*(.79+G%3*.025);e.beginPath(),e.moveTo(ue,se),e.quadraticCurveTo(ue+F*.35,o*.87,ue+F,ge),e.stroke()}e.restore()}const Dt=Object.freeze(Object.fromEntries(["high","mid"].map(d=>[d,Object.freeze({cell:Mt[d].cell*1.4,ripples:Mt[d].ripples,most:Math.round(Mt[d].most*.6)})])));function ze(){return(c?Dt:Mt)[r]??Mt.mid}function Je(){let d=null;try{typeof document<"u"&&typeof document.createElement=="function"?d=document.createElement("canvas"):typeof OffscreenCanvas=="function"&&(d=new OffscreenCanvas(1,1))}catch{d=null}const v=d&&typeof d.getContext=="function"?d.getContext("2d"):null;return v?{canvas:d,context:v,image:null}:null}function ln(d){if(!d)return;$===null&&($=Je()??!1);const v=$;v&&((v.canvas.width!==d.columns||v.canvas.height!==d.rows||!v.image)&&(v.canvas.width=d.columns,v.canvas.height=d.rows,v.image=v.context.createImageData(d.columns,d.rows)),v.image.data.set(d.pixels),v.context.putImageData(v.image,0,0),e.save(),e.globalCompositeOperation="lighter",e.imageSmoothingEnabled=!0,e.drawImage(v.canvas,d.left,d.top,d.columns*d.cell,d.rows*d.cell),e.restore())}function ta(d,v=!1){const pe=performance.now();xe(),Qe(d);const se=L?Math.max(0,(d-L)/1e3):0,O=Math.min(.1,se);L=d,Yn(U,ke,O);const G=Math.min(.25,se),ue=Rt(U);Ee=.32+ue*.12,Se=(Se+G*Ee)%pa,qe=(qe+G*(.26+ue*.1))%pa,Ae+=G*.0011*Math.max(2,U.wind),h||(T+=G*(c?we.engaged:we.rest)),ye=d/1e3;const F=d/1e3;B===null&&(B=F),y=Fa(ae),ce=v?Number(_):ce+(Number(_)-ce)*(1-Math.exp(-O*2.6)),fe=v?1:fe+(1-fe)*(1-Math.exp(-O*2.6)),fe>.995&&(fe=1,We=oe);const ge=y.wind.lean*(y.wind.stream?1.5:1)*-y.wind.side;ve=ve===null?ge:ve+(ge-ve)*(1-Math.exp(-O*2.6));const Ie=Kn(y),M=Ja(Ye(d),y),Pe=Pa[J.season]||Pa.summer,E=o*.67,Q=X().density,de=e.createLinearGradient(0,0,0,E);if(de.addColorStop(0,M.top),de.addColorStop(.38,M.upper),de.addColorStop(.74,M.lower),de.addColorStop(1,M.horizon),e.fillStyle=de,e.fillRect(0,0,n,P),y.storm){e.fillStyle=`rgba(23,35,42,${y.storm.charcoal*.44})`,e.fillRect(0,0,n,E);const i=e.createLinearGradient(0,E-o*.3,0,E);i.addColorStop(0,"rgba(108,122,99,0)"),i.addColorStop(1,`rgba(108,122,99,${y.storm.underlight*.38})`),e.fillStyle=i,e.fillRect(0,E-o*.3,n,o*.3)}e.save(),e.globalAlpha=M.darkness;for(let i=0;i<it(he,Q);i++){const s=he[i],u=h?.55:.55+Math.sin(F*.7+s.phase)*.35;e.fillStyle=`rgba(255,248,220,${(.12+u*.5)*y.stars})`,e.beginPath(),e.arc(s.x*n+W*s.r*4,s.y*o,s.r,0,Math.PI*2),e.fill()}e.restore();const _e=y.sun||y.moon||null,ot=n*(y.sun?.026:Ne.radius),dt=_e?va(_e.x,_e.y,ot,n,o):null,Le=dt?dt.x:n*.5,Xe=dt?dt.y:o*.2,Ma=!!y.sun||Re,$t=y.air?y.cover:Math.min(1,U.cloud/100),hn=.16+$t*.52,Ft=rn(M),un=Ft.lit,Sa=Ft.body,na=Ft.under,qt=(i,s)=>i.replace("rgb","rgba").replace(")",`,${s})`),ht=Math.min(o,n*.62),oa=(i,s,u,g,b)=>{const x=i.w*n,H=i.h*ht;e.beginPath(),i.lobes.forEach((re,me)=>{const te=g*b[me];if(te<=0)return;const Ze=s+re.dx*x,je=u+re.dy*H*g;e.moveTo(Ze+re.r*x*te,je),e.ellipse(Ze,je,re.r*x*te,re.r*H*St*te,0,0,Math.PI*2)})};if($t>.8){const i=e.createLinearGradient(0,0,0,E),s=Ft.lid;i.addColorStop(0,s.replace("rgb","rgba").replace(")",`,${($t-.8)/.2*.5})`)),i.addColorStop(1,s.replace("rgb","rgba").replace(")",`,${($t-.8)/.2*.26})`)),e.fillStyle=i,e.fillRect(0,0,n,E)}e.save();const sa=r==="mid"?4:6;e.filter=`blur(${sa}px)`;const fn=Math.round(it(Tt,Q)*Math.min(1,$t**.7)),Ta=ce>.001?C??ba(n):null,pn=sa*3,gn=(i,s,u)=>{const g=i.w*n,b=i.h*ht;return i.lobes.map(x=>{if(!Ta)return 1;const H=nn(s+x.dx*g,u+x.dy*b,x.r*g,x.r*b*St,pn,Ta);return 1-ce*(1-H)})};for(let i=0;i<fn;i++){const s=Tt[i],u=h?0:Ae*s.speed*(.5+s.depth)%1.4,g=((s.x+u)%1.4-.2)*n,b=s.y*o+s.h*ht,x=gn(s,g,b);if(!x.some(kt=>kt>0))continue;let H=-1/0,re=0;s.lobes.forEach((kt,ca)=>{x[ca]<=0||(H=Math.max(H,kt.dy+kt.r*St*x[ca]),re=Math.max(re,Math.abs(kt.dx)+kt.r*x[ca]))});const me=b+H*s.h*ht,te=hn*(.62+s.depth*.55);e.fillStyle=qt(un,Math.min(.92,te*1.05)),oa(s,g,b,1,x),e.fill(),e.save(),oa(s,g,b,1,x),e.clip();const Ze=(Le>g?-1:1)*s.w*n*.1,je=e.createLinearGradient(0,b-s.h*ht*2.2,0,me);je.addColorStop(0,qt(Sa,Math.min(.9,te*.96))),je.addColorStop(.62,qt(Sa,Math.min(.94,te))),je.addColorStop(1,qt(na,Math.min(.96,te*1.12))),e.fillStyle=je,oa(s,g+Ze,b+s.h*ht*.22,.96,x),e.fill();const zt=b-s.h*ht*.42,ft=sa*3,tt=re*s.w*n+ft,Ge=e.createLinearGradient(0,zt,0,me);Ge.addColorStop(0,qt(na,0)),Ge.addColorStop(1,qt(na,Math.min(.9,te*.7))),e.fillStyle=Ge,e.fillRect(g-tt,zt,tt*2,me+ft-zt),e.restore()}if(e.restore(),y.afterglow>.01){const i=e.createLinearGradient(0,E-o*.3,0,E);i.addColorStop(0,M.glow.replace("rgb","rgba").replace(")",",0)")),i.addColorStop(1,M.glow.replace("rgb","rgba").replace(")",`,${y.afterglow*.34})`)),e.fillStyle=i,e.fillRect(0,E-o*.3,n,o*.3)}if(_e&&Ma){const i=y.sun?y.sun.glow:_e.halo;if(i>.02){const s=e.createRadialGradient(Le,Xe,0,Le,Xe,n*(y.sun?.24:Ne.halo));s.addColorStop(0,M.glow.replace("rgb","rgba").replace(")",`,${.58*i})`)),s.addColorStop(.3,M.glow.replace("rgb","rgba").replace(")",`,${.16*i})`)),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,n,E)}}if(y.sun&&y.sun.disc>.02){e.save(),e.globalCompositeOperation="screen";const i=y.sun.disc,s=e.createRadialGradient(Le,Xe,0,Le,Xe,ot*1.18);s.addColorStop(0,`rgba(255,246,220,${.98*i})`),s.addColorStop(.55,M.glow.replace("rgb","rgba").replace(")",`,${.95*i})`)),s.addColorStop(.9,M.glow.replace("rgb","rgba").replace(")",`,${.3*i})`)),s.addColorStop(1,M.glow.replace("rgb","rgba").replace(")",",0)")),e.fillStyle=s,e.beginPath(),e.arc(Le,Xe,ot*1.18,0,Math.PI*2),e.fill(),e.restore()}if(y.moon&&!y.sun&&Re){const i=y.moon,s=ot;e.save(),e.globalCompositeOperation="screen",e.fillStyle=`rgba(${Ne.earthshine.join(",")},${i.earthshine*i.brightness})`,e.beginPath(),e.arc(Le,Xe,s,0,Math.PI*2),e.fill();const u=sn(i.fraction,i.waxing);e.fillStyle=`rgba(${Ne.lit.join(",")},${Ne.litAlpha*i.brightness})`,e.beginPath(),e.arc(Le,Xe,s,-Math.PI/2,Math.PI/2,u.limbAnticlockwise),e.ellipse(Le,Xe,u.terminatorWidth*s,s,0,Math.PI/2,-Math.PI/2,u.terminatorAnticlockwise),e.closePath(),e.fill(),e.restore()}Oe&&e.clearRect(0,0,n,P);for(let i=lt.length-1;i>=0;i--){const s=1-i/lt.length;e.fillStyle=V(M.lower,Pe.wood,.26+s*.46),e.globalAlpha=.34+s*.42,e.beginPath(),e.moveTo(0,o),bt(Pt[i]),e.lineTo(n,o),e.closePath(),e.fill()}e.globalAlpha=1;const st=at(y.lying);if(st>.02)for(let i=lt.length-1;i>=0;i--){const s=lt[i],u=1-i/lt.length,g=s.crest.length-1;e.fillStyle=`rgba(240,243,246,${(.2+u*.3)*st})`,e.beginPath(),e.moveTo(0,o*(s.base+s.crest[0]));for(let b=1;b<=g;b++)e.lineTo(n*b/g,o*(s.base+s.crest[b]));for(let b=g;b>=0;b--)e.lineTo(n*b/g,o*(s.base+s.crest[b])+o*(.006+u*.012));e.closePath(),e.fill()}const Wt=e.createLinearGradient(0,E-o*.08,0,E+o*.04);if(Wt.addColorStop(0,"rgba(226,230,214,0)"),Wt.addColorStop(.5,`rgba(226,230,214,${.08+M.darkness*.1})`),Wt.addColorStop(1,"rgba(226,230,214,0)"),e.fillStyle=Wt,e.fillRect(0,E-o*.1,n,o*.15),y.fog){const i=y.fog.reach,s=y.fog.veils;for(let u=0;u<s;u++){const g=u/Math.max(1,s-1),b=E-o*(.24-g*.26),x=o*(.1+g*.16),H=at((i-g*.34)/.66);if(H<=.01)continue;const re=e.createLinearGradient(0,b,0,b+x),me=V(M.upper,"#e8ece4",.6+g*.2);re.addColorStop(0,me.replace("rgb","rgba").replace(")",",0)")),re.addColorStop(.35,me.replace("rgb","rgba").replace(")",`,${H*(.38+g*.28)})`)),re.addColorStop(.72,me.replace("rgb","rgba").replace(")",`,${H*(.22+g*.2)})`)),re.addColorStop(1,me.replace("rgb","rgba").replace(")",",0)")),e.fillStyle=re,e.beginPath(),e.moveTo(0,b);for(let te=0;te<=24;te++){const Ze=n*te/24;e.lineTo(Ze,b+Math.sin(te*(.3+u*.12)+u*2.1+(h?0:F*.045))*o*.006)}e.lineTo(n,b+x),e.lineTo(0,b+x),e.closePath(),e.fill()}e.fillStyle=V(M.upper,"#e8ece4",.7).replace("rgb","rgba").replace(")",`,${at(i*.5)})`),e.fillRect(0,0,n,E+o*.04)}if(y.haze>.02){const i=e.createLinearGradient(0,E-o*.16,0,E+o*.02);i.addColorStop(0,"rgba(244,226,196,0)"),i.addColorStop(.55,`rgba(244,226,196,${y.haze*.3})`),i.addColorStop(1,`rgba(238,214,182,${y.haze*.16})`),e.fillStyle=i,e.fillRect(0,E-o*.16,n,o*.18);for(let s=0;s<3;s++){const u=E-o*(.03+s*.018),g=h?0:Math.sin(F*.6+s*1.7)*n*.01;e.fillStyle=`rgba(250,238,214,${y.haze*(.09-s*.02)})`,e.fillRect(g,u,n,o*.008)}}const mn=Math.max(0,1-Math.abs(J.hour-6.4)/3.1),wn=Math.max(0,1-Math.abs(J.hour-20.2)/2.4),Aa=Math.max(mn,wn*.7);if(Aa>.02){e.save();for(let i=0;i<4;i++){const s=E-o*(.055-i*.022),u=Math.sin(F*(.045+i*.022)+i*1.7)*n*.06,g=e.createLinearGradient(0,s-o*.03,0,s+o*.05);g.addColorStop(0,"rgba(233,235,222,0)"),g.addColorStop(.5,`rgba(233,235,222,${Aa*(.2-i*.032)})`),g.addColorStop(1,"rgba(226,231,219,0)"),e.fillStyle=g,e.beginPath(),e.ellipse(n*(.2+i*.21)+u,s+o*.012,n*(.42+i*.12),o*(.038+i*.012),0,0,Math.PI*2),e.fill()}e.restore()}e.fillStyle=`rgba(28,56,46,${.12+M.darkness*.12})`,e.beginPath(),e.moveTo(0,E+4);for(let i=0;i<=36;i++){const s=n*i/36,u=E-o*(.012+Math.sin(i*1.7)*.006+Math.sin(i*.43)*.009);e.lineTo(s,u)}e.lineTo(n,E+o*.035),e.lineTo(0,E+o*.035),e.closePath(),e.fill();const rt=Ie.birds&&!h&&!v?xn(F,{since:B}):null;if(rt){const i=-.08+rt.along*1.16,s=(rt.toward>0?i:1-i)*n,u=(rt.band+rt.sink*rt.along)*o,g=o*.019,b=o*.0062;e.save(),e.strokeStyle=`rgba(34,57,52,${.22+M.darkness*.34})`,e.lineWidth=Math.max(.7,o*.0013),e.beginPath();for(let x=0;x<rt.count;x++){const H=Math.ceil(x/2),re=x===0?0:x%2===1?1:-1,me=s-rt.toward*H*g,te=u+re*H*g*.42,Ze=Math.sin((F*kn.beat+x*.31)*Math.PI*2),je=b*(.5+Ze*.5);e.moveTo(me-b,te+je),e.quadraticCurveTo(me-b*.4,te-je*.6,me,te),e.quadraticCurveTo(me+b*.4,te-je*.6,me+b,te+je)}e.stroke(),e.restore()}const ra=_a(n,o,oe),vt=fe<1?_a(n,o,We):null,Ot=(i,s,u,g=u)=>{const b=Ha(i,s,ra,u);return!vt||b===Ha(i,s,vt,g)?b?1:0:b?fe:1-fe},xt=i=>{e.save(),e.globalAlpha*=i},Et=P-o>.5;for(let i=0;i<it(De,Q);i++){const s=De[i],u=Ot(s,s.x*n,gt.far);u&&(u<1&&xt(u),ct(s,`rgba(43,72,59,${.2+s.depth*.42})`,.55+s.depth*.7),u<1&&e.restore())}const et=E-o*.04,ut=e.createLinearGradient(0,et,0,o);if(ut.addColorStop(0,"rgba(0,0,0,0)"),ut.addColorStop(.1,M.water.replace("rgb","rgba").replace(")",",.2)")),ut.addColorStop(.22,V(M.horizon,M.water,.62).replace("rgb","rgba").replace(")",",.68)")),ut.addColorStop(.32,M.water),ut.addColorStop(.48,V(M.water,M.waterDeep,.55)),ut.addColorStop(1,M.waterDeep),e.fillStyle=ut,e.fillRect(0,et,n,P-et),st>.02){const i=e.createLinearGradient(0,et,0,o);i.addColorStop(0,`rgba(238,243,247,${.42*st})`),i.addColorStop(.35,`rgba(232,239,246,${.68*st})`),i.addColorStop(1,`rgba(196,212,230,${.72*st})`),e.fillStyle=i,e.fillRect(0,et,n,P-et);for(let s=0;s<5;s++){const u=et+(o-et)*(.14+s*.19);e.fillStyle=`rgba(250,252,255,${(.16-s*.02)*st})`,e.beginPath(),e.ellipse(n*(.18+s*.19),u,n*(.2+s*.06),o*(.018+s*.006),0,0,Math.PI*2),e.fill()}e.fillStyle=`rgba(178,198,222,${.3*st})`,e.fillRect(0,o*.92,n,P-o*.92)}if(K=null,_e&&Ma&&Xe<E){const i=Ka(y,{x:Le,y:Xe,radius:ot},{height:o,glow:M.glow,crest:an(Le/n)}),s=Ya({windMph:U.wind,windFrom:y.air&&Number.isFinite(y.air.windFrom)?y.air.windFrom:270,raining:!!(y.falls&&y.falls.kind!=="snow")});K=i&&i.power>1e-4?Object.freeze({clock:T,rate:h?0:c?we.engaged:we.rest,field:Object.freeze({width:n,height:o,full:P}),body:i,sea:s,detail:ze()}):null,Te&&K&&ln(Qa(K.clock,K.field,i,s,K.detail,R))}j&&e.clearRect(0,0,n,P);const Ct=e.createLinearGradient(0,E-o*.055,0,E+o*.105);Ct.addColorStop(0,"rgba(226,230,214,0)"),Ct.addColorStop(.33,`rgba(214,221,204,${.025+M.darkness*.025})`),Ct.addColorStop(.58,`rgba(69,91,73,${.035+M.darkness*.035})`),Ct.addColorStop(1,"rgba(32,61,51,0)"),e.fillStyle=Ct,e.fillRect(0,E-o*.06,n,o*.18),e.save(),e.globalAlpha=.15,e.strokeStyle=M.horizon;const bn=Math.ceil(34*Q);for(let i=0;i<bn;i++){const s=E+7+i*(o-E)/35,u=Math.sin(F*.16+i)*12,g=(i*97+u)%n;e.beginPath(),e.moveTo(g,s),e.lineTo(Math.min(n,g+n*(.08+i%5*.025)),s),e.stroke()}if(Et){const i=(o-E)/35*1.3;for(let s=0;o+5+s*i<P;s++){const u=o+5+s*i,g=Math.sin(F*.16+s*1.3)*12,b=(s*131+g)%n;e.beginPath(),e.moveTo(b,u),e.lineTo(Math.min(n,b+Math.min(n*(.1+s%4*.03),60+s%4*40)),u),e.stroke()}}if(e.restore(),y.falls){const i=y.falls,s=Math.ceil(i.count*Q),u=(b,x)=>(b%x+x)%x,g=b=>{const x=Math.sin(b*127.1+311.7)*43758.5453;return x-Math.floor(x)};e.save(),e.lineCap="round";for(let b=0;b<s;b++){const x=.22+g(b+9)*.78,H=i.kind==="snow",re=i.kind==="sleet",me=H?(12+x*29)*i.fall:(125+x*195)*(i.storm?1.25:1),te=h?0:F,Ze=u(g(b+29)*(o+48)+te*me,o+48)-24,je=i.lean*te*me*.48,zt=H?Math.sin(te*(.22+x*.18)+b)*(7+x*13):0,ft=u(g(b+61)*(n+80)+je+zt,n+80)-40;for(let tt=Ze;tt<P+24;tt+=o+48)if(H){const Ge=.65+x*2.1;e.fillStyle=`rgba(235,242,239,${.18+x*.4})`,e.beginPath(),e.ellipse(ft,tt,Ge,Ge*(.48+g(b+101)*.36),Math.sin(te*.22+b)*.7,0,Math.PI*2),e.fill()}else{const Ge=(re?4:8)+x*(re?5:12);e.strokeStyle=`rgba(210,225,224,${.08+x*(re?.3:.18)})`,e.lineWidth=.45+x*(re?.5:.6),e.beginPath(),e.moveTo(ft,tt),e.lineTo(ft+i.lean*Ge*.8,tt+Ge),e.stroke(),re&&(e.fillStyle=`rgba(233,241,239,${.24*i.pallor})`,e.beginPath(),e.arc(ft+i.lean*Ge*.8,tt+Ge,.6+x*.35,0,Math.PI*2),e.fill())}}if(i.kind!=="snow"&&!j){const b=Math.min(20,Math.ceil(s/8));for(let x=0;x<b;x++){const H=u((h?.35:F*.37)+g(x+211),1),re=g(x+231),me=n*(.12+g(x+241)*.76),te=E+(o-E)*(.12+re*.65);e.strokeStyle=`rgba(197,218,209,${Math.sin(H*Math.PI)*.12})`,e.lineWidth=.65,e.beginPath(),e.ellipse(me,te,(3+H*15)*(.5+re),1+H*2.1,0,0,Math.PI*2),e.stroke()}}e.restore()}e.save(),e.globalCompositeOperation="screen",e.globalAlpha=.28+M.darkness*.7;const yn=Oe||j?0:it(nt,Q);for(let i=0;i<yn;i++){const s=nt[i],u=Math.sin(F*s.speed+s.phase)*n*.035,g=Math.cos(F*s.speed*1.4+s.phase)*o*.012,b=s.x*n+u,x=s.y*o+g,H=e.createRadialGradient(b,x,0,b,x,s.r);H.addColorStop(0,"rgba(255,228,158,.72)"),H.addColorStop(.16,"rgba(238,194,113,.25)"),H.addColorStop(1,"rgba(224,186,100,0)"),e.fillStyle=H,e.fillRect(b-s.r,x-s.r,s.r*2,s.r*2)}e.restore();const _t=Pe.reed;for(let i=0;i<it(At,Q);i++){const s=At[i],u=Ot(s,s.x*n,gt.middle);u&&(u<1&&xt(u),ct(s,_t[0],.5+s.depth*.55),u<1&&e.restore())}const qn=it(Ue,Q),vn=it(l,Q),ia=gt.near+(ea.thins-gt.near)*ra.bed,$a=vt?gt.near+(ea.thins-gt.near)*vt.bed:ia,Ht=Et?(P-o)/o+.04:0;Et&&Me.reach!==Ht&&(Me={reach:Ht,reeds:Qn(N,Ht)});const Oa=Et?Math.min(N.length,Math.ceil(n*Ht*In*Q)):0;for(let i=0;i<3;i++){for(let s=0;s<qn;s++){const u=Ue[s];if(Math.floor(u.depth*3)!==i)continue;const g=Ot(u,u.x*n,ia,$a);g&&(g<1&&xt(g),ct(u,_t[i],.8+i*.55,!0),g<1&&e.restore())}for(let s=0;s<vn;s++){const u=l[s];if(Math.floor(u.depth*3)!==i)continue;const g=Ot(u,u.x*n,gt.sedge);g&&(g<1&&xt(g),jt(u,_t[i],Pe.spike),g<1&&e.restore())}if(i===1&&!h){const s=ya(n*.29,ra,1)<.5,u=vt?ya(n*.29,vt,1)<.5:s,g=s===u?Number(s):s?fe:1-fe;g>0&&g<1&&xt(g),g>0&&Nt(M,F),g>0&&g<1&&e.restore()}if(Oa){e.save(),e.beginPath(),e.rect(0,o,n,P-o),e.clip();for(let s=0;s<Oa;s++){const u=Me.reeds[s];if(u.layer!==i||(u.base-u.h)*o>P)continue;const g=Ot(u,u.x*n,ia,$a);g&&(g<1&&xt(g),ct(u,_t[i],.8+i*.55),g<1&&e.restore())}e.restore()}}if(!h&&(J.season==="summer"||J.season==="spring")){e.save();const i=it(m,Q);if(M.darkness>.3){e.globalCompositeOperation="screen";for(let s=0;s<i;s++){const u=m[s],g=Math.sin(F*u.speed*2.1+u.phase);if(g<.35)continue;const b=(u.x+Math.sin(F*u.speed*.3+u.phase)*.03)*n,x=(u.y-u.rise*.04-Math.cos(F*u.speed*.42+u.phase)*.015)*o,H=e.createRadialGradient(b,x,0,b,x,u.r*5);H.addColorStop(0,`rgba(255,236,164,${(g-.35)*1.1})`),H.addColorStop(1,"rgba(255,214,120,0)"),e.fillStyle=H,e.fillRect(b-u.r*5,x-u.r*5,u.r*10,u.r*10)}}else{e.strokeStyle=`rgba(56,82,76,${.26+M.darkness*.2})`,e.lineWidth=.8;for(let s=0;s<i;s++){const u=m[s];if(u.rise>.4)continue;const g=(u.x+Math.sin(F*u.speed*.7+u.phase)*.05)*n,b=(u.y-.03+Math.cos(F*u.speed*.9+u.phase)*.012)*o;e.beginPath(),e.moveTo(g-u.r*2.4,b-u.r),e.lineTo(g+u.r*2.4,b-u.r*.4),e.moveTo(g-u.r*2.2,b+u.r*.5),e.lineTo(g+u.r*2.2,b+u.r*.2),e.stroke()}}e.restore()}const la=e.createLinearGradient(0,o*.88,0,o);if(la.addColorStop(0,"rgba(18,45,37,0)"),la.addColorStop(1,"rgba(13,36,31,.66)"),e.fillStyle=la,e.fillRect(0,o*.88,n,P-o*.88),Et&&!Oe&&!j){const i=Hn(M,o,et),s=e.createLinearGradient(0,o,0,o+i.ease*4);for(const[u,g]of i.stops)s.addColorStop(u,g);e.save(),e.globalCompositeOperation="multiply",e.fillStyle=s,e.fillRect(0,o,n,P-o),e.restore()}if(y.storm&&!h){const i=Math.max(8,y.storm.everySeconds),s=F%i;if(s<.22){const u=1-s/.22;e.fillStyle=`rgba(231,238,224,${u*y.storm.charcoal*.16})`,e.fillRect(0,0,n,E)}}if(y.storm&&d<S){const i=at((S-d)/220);e.fillStyle=`rgba(231,238,224,${i*.16})`,e.fillRect(0,0,n,E)}w++,typeof t.onFrameCost=="function"&&t.onFrameCost(performance.now()-pe,performance.now())}function yt(){q||ta(performance.now(),!0)}function cn(){return c?Math.max(33,X().frameInterval):X().frameInterval}function xa(d){if(p=0,!f||q)return;const v=cn();(!v||!D||d-D>=v)&&(D=d,ta(d)),f&&!p&&(p=window.requestAnimationFrame(xa))}function dn(){q||f||(f=!0,D=0,I&&(B=null),I=!0,p=window.requestAnimationFrame(xa))}function ka(){f=!1,p&&window.cancelAnimationFrame(p),p=0}function aa(){xe(),ta(performance.now(),!f)}return xe(),Object.freeze({start:dn,stop:ka,renderStill:yt,resize:xe,setTier(d){d!=="high"&&d!=="mid"||r!==d&&(r=d,aa())},setWeather(d){ke=Na(d),f||yt()},setQuiet(d){const v=!!d;h!==v&&(h=v,f||yt())},setEngaged(d){const v=!!d;c!==v&&(c=v,aa())},retarget(){Ke(performance.now()),f||yt()},pixelRatio(){return z},framesRendered(){return w},wind(){return .22+at(U.wind/30)*.5},windNow(){const d=ve??y.wind.lean*(y.wind.stream?1.5:1)*-y.wind.side;return Object.freeze({phase:Se,rate:Ee,period:pa/Ee,at:ye,strength:Rt(U),lean:d===0?0:d,kmh:y.wind.kmh,moving:f&&!h})},waterLightNow(){return K},setCards(d){const v=Wa(d),pe=d!==!1&&!(v&&v.length===0);pe&&(C=v),_=pe,f||yt()},setWindowBox(d){const v=Jt(d);JSON.stringify(v)!==JSON.stringify(oe)&&(fe>=.5&&(We=oe,fe=0),oe=v,f||yt())},setSkirt(d){const v=Math.max(0,Number(d)||0);v!==$e&&($e=v,aa())},debugLightning(){S=performance.now()+220},snapshot(){const d=Ye(performance.now());return{renderer:"finger-lakes-2d",seed:It,tier:r,running:f,quiet:h,engaged:c,density:X().density,pixelRatio:z,framesRendered:w,hour:J.hour,season:J.season,darkness:d.darkness,weather:Da(U),skirt:$e,composed:{width:n,height:o},cards:_?C??ba(n):[],windowBox:oe}},destroy(){q||(ka(),q=!0,window.removeEventListener("pointermove",Z))}})}const to=Object.freeze({high:6,mid:4}),ao=t=>t==="mid"?"mid":"high",Ua=.67,no=.05,ne=t=>Math.round(t*100)/100,qa=t=>Math.min(1,Math.max(0,t));function oo(t,a){if(t===!1)return null;if(!Array.isArray(t))return ba(a);const e=t.filter(r=>r&&typeof r=="object"&&[r.left,r.top,r.right,r.bottom].every(Number.isFinite)&&r.right>r.left&&r.bottom>r.top);return e.length?e:null}function so(t,a=1){return!Array.isArray(t)||!Number.isFinite(a)||!(a>0)||a===1?t:t.map(e=>e&&typeof e=="object"?{...e,left:e.left/a,top:e.top/a,right:e.right/a,bottom:e.bottom/a}:e)}function ro(t,a,{cards:e=null,tier:r="high"}={}){if(!t||typeof t!="object"||!t.told||!t.air)return[];const h=qa(Number(t.cover)),c=Number(a==null?void 0:a.width),f=Number(a==null?void 0:a.height);if(!(h>0)||!(c>0)||!(f>0))return[];const q=ao(r),p=Math.max(1,Math.min(ga.length,Math.ceil(ga.length*Xa[q].density))),w=Math.round(p*Math.min(1,h**.7)),n=.16+h*.52,o=Math.min(f,c*.62),z=t.sun||t.moon||null,W=c*(t.sun?.026:Ne.radius),D=z?va(z.x,z.y,W,c,f):null,L=D?D.x:c*.5,A=oo(e,c),S=to[q]*3,B=[];for(let I=0;I<w;I++){const Y=ga[I],ae=(Y.x%1.4-.2)*c,J=Y.y*f+Y.h*o,y=Y.w*c,le=Y.h*o,be=Y.lobes.map(U=>A?nn(ae+U.dx*y,J+U.dy*le,U.r*y,U.r*le*St,S,A):1);if(!be.some(U=>U>0))continue;const ee=(U,$e,P)=>Y.lobes.flatMap((Me,Re)=>{const Oe=P*be[Re];return Oe<=0?[]:[{x:U+Me.dx*y,y:$e+Me.dy*le*P,rx:Me.r*y*Oe,ry:Me.r*le*St*Oe}]}),ke=(L>ae?-1:1)*Y.w*c*.1;B.push({masses:{rim:ee(ae,J,1),body:ee(ae+ke*.3,J+le*.12,.98),under:ee(ae+ke*.4,J+le*.55,.93)},weight:n*(.62+Y.depth*.55)})}return B}function io(t,a,e,{cards:r=null,tier:h="high"}={}){const c=ro(t,e,{cards:r,tier:h});if(!c.length)return null;const f=Vn(a==null?void 0:a.hour,a==null?void 0:a.season,t),q=qa(Number(t.cover)),p=qa(Number(t.drain)),w=Ga(e,Object.hasOwn(Be,a==null?void 0:a.hour)?Be[a.hour]:.52);return Object.freeze({banks:c,veil:p>no?Object.freeze({alpha:p,foot:e.height*Ua}):null,deck:q>.8?Object.freeze({top:ne((q-.8)/.2*.5),foot:ne((q-.8)/.2*.26),to:e.height*Ua}):null,faces:f,field:Object.freeze({width:e.width,height:e.height}),frame:w})}const lo=({x:t,y:a,rx:e,ry:r})=>`M${ne(t+e)} ${ne(a)}A${ne(e)} ${ne(r)} 0 1 0 ${ne(t-e)} ${ne(a)}A${ne(e)} ${ne(r)} 0 1 0 ${ne(t+e)} ${ne(a)}Z`,ma=t=>t.map(lo).join("");function co(t,a="qs-cloud"){const{banks:e,veil:r,deck:h,faces:c,field:f,frame:q}=t,p=[],w=[],n=(o,z,W)=>`<stop offset="${o}" stop-color="${z}" stop-opacity="${ne(W)}"/>`;return r&&(p.push(`<linearGradient id="${a}-veil" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="${ne(r.foot)}">`+[[0,c.sky[0]],[.38,c.sky[1]],[.74,c.sky[2]],[1,c.sky[3]]].map(([o,z])=>n(o,z,1)).join("")+"</linearGradient>"),w.push(`<rect class="qs-cloud-veil" x="0" y="0" width="${ne(f.width)}" height="${ne(r.foot)}" fill="url(#${a}-veil)" fill-opacity="${ne(r.alpha)}"/>`)),h&&(p.push(`<linearGradient id="${a}-deck" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="${ne(h.to)}">`+n(0,c.lid,h.top)+n(1,c.lid,h.foot)+"</linearGradient>"),w.push(`<rect class="qs-cloud-deck" x="0" y="0" width="${ne(f.width)}" height="${ne(h.to)}" fill="url(#${a}-deck)"/>`)),e.forEach((o,z)=>{const W=ma(o.masses.rim),D=o.weight;p.push(`<clipPath id="${a}-b${z}"><path d="${W}"/></clipPath>`),w.push(`<g class="qs-cloud-bank"><path class="qs-cloud-rim" d="${W}" fill="${c.lit}" fill-opacity="${ne(Math.min(.92,D*1.05))}"/><g clip-path="url(#${a}-b${z})"><path class="qs-cloud-body" d="${ma(o.masses.body)}" fill="${c.body}" fill-opacity="${ne(Math.min(.94,D))}"/><path class="qs-cloud-under" d="${ma(o.masses.under)}" fill="${c.under}" fill-opacity="${ne(Math.min(.9,D*.84))}"/></g></g>`)}),{viewBox:`${ne(q.left)} ${ne(q.top)} ${ne(q.width)} ${ne(q.height)}`,markup:`<defs>${p.join("")}</defs>${w.join("")}`}}const Kt={dawn:new URL("/home/demo/assets/field-dawn-CNF33KmO.webp",import.meta.url).href,day:new URL("/home/demo/assets/field-day-BV1IwuPp.webp",import.meta.url).href,dusk:new URL("/home/demo/assets/field-dusk-BFal2Eyt.webp",import.meta.url).href,night:new URL("/home/demo/assets/field-night-DLtMrsl1.webp",import.meta.url).href},Qt={dawn:new URL("/home/demo/assets/field-dawn-sky-EUpwrZCj.webp",import.meta.url).href,day:new URL("/home/demo/assets/field-day-sky-CAyv0q3-.webp",import.meta.url).href,dusk:new URL("/home/demo/assets/field-dusk-sky-4_yFgI2A.webp",import.meta.url).href,night:new URL("/home/demo/assets/field-night-sky-BNC1xa1f.webp",import.meta.url).href},Xt={dawn:new URL("/home/demo/assets/field-dawn-water-DLqyOy0X.webp",import.meta.url).href,day:new URL("/home/demo/assets/field-day-water-BEiDYvt8.webp",import.meta.url).href,dusk:new URL("/home/demo/assets/field-dusk-water-B7y-2f8O.webp",import.meta.url).href,night:new URL("/home/demo/assets/field-night-water-p64WG6hz.webp",import.meta.url).href},Fe=(()=>{const t=k.height+k.skirt,a=e=>Math.round(e*1e6)/1e6;return Object.freeze({tall:a(t/k.height*100),down:a(k.height/(2*t)*100),field:a(k.height/t*100)})})(),ho=`
@property --qs-sky-top {
  syntax: '<color>';
  inherits: true;
  initial-value: #7ea4b2;
}
@property --qs-sky-upper {
  syntax: '<color>';
  inherits: true;
  initial-value: #abc0bd;
}
@property --qs-sky-lower {
  syntax: '<color>';
  inherits: true;
  initial-value: #d8d9c7;
}
@property --qs-sky-horizon {
  syntax: '<color>';
  inherits: true;
  initial-value: #e8d7b7;
}
@property --qs-glow {
  syntax: '<color>';
  inherits: true;
  initial-value: #f8e6bd;
}
@property --qs-water {
  syntax: '<color>';
  inherits: true;
  initial-value: #80a29a;
}
@property --qs-water-deep {
  syntax: '<color>';
  inherits: true;
  initial-value: #2f5b51;
}
.quiet-scene {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 1.1s ease,
    --qs-sky-top 1.6s ease,
    --qs-sky-upper 1.6s ease,
    --qs-sky-lower 1.6s ease,
    --qs-sky-horizon 1.6s ease,
    --qs-glow 1.6s ease,
    --qs-water 1.6s ease,
    --qs-water-deep 1.6s ease;
  /* THE PLATE BEFORE THE HOUSE HAS SAID WHAT HOUR IT IS. There is no
     picture here and there deliberately is not one: day used to be the
     pre-theme fallback, which is how a television opened on a noon field
     in the middle of the night and how the plate stood under a dusk card
     (AUDIT-2026-09-19.md 4B item 35). An hour nobody read is the one
     thing the one sky law does not allow, so the untold plate stands
     aside and the front's own pressed field is the ground, exactly as it
     is when the field will not start at all.
     The colours below are the image-independent safety net and are
     deliberately local to the quiet scene: the live field follows
     continuous light, while these share the locked public field's exact
     sky and marsh pigments. */
  --qs-sky-top: #7ea4b2;
  --qs-sky-upper: #abc0bd;
  --qs-sky-lower: #d8d9c7;
  --qs-sky-horizon: #e8d7b7;
  --qs-glow: #f8e6bd;
  --qs-water: #80a29a;
  --qs-water-deep: #2f5b51;
  --qs-plate: none;
  --qs-plate-sky: none;
  --qs-plate-water: none;
  --qs-plate-position: 52% center;
  --qs-plate-x: 0.52;
  --qs-glow-x: 55%;
  --qs-glow-y: 17%;
}
/* THE FILM TOKENS, CARRIED IN. The still plate reads five values the lift did
   not bring, because the source site declared them in its own token sheet and
   that sheet is not part of the marsh. Undeclared, the paper tooth composited
   at full strength and the plate read as a screen door. They are carried here
   from ~/Projects/fellowsoft/surface/tokens.css (sha256
   682776cbfab626bcca1c1844de9b1cced4f4b41c0605e2c7342cffc726ebce25), value for
   value, scoped to the plate so nothing leaks into the house. */
.quiet-scene {
  --t-breathe: 5.4s;
  --star-opacity: 0.20;
  --noise-blend: screen;
  --noise-opacity: 0.04;
  --vignette-darkness: 0.72;
}
.quiet-scene[data-plate-hour="dawn"] {
  --star-opacity: 0;
  --noise-blend: multiply;
  --noise-opacity: 0.07;
  --vignette-darkness: 0.40;
}
.quiet-scene[data-plate-hour="day"] {
  --star-opacity: 0;
  --noise-blend: multiply;
  --noise-opacity: 0.065;
  --vignette-darkness: 0.36;
}
.quiet-scene[data-plate-hour="dusk"] {
  --star-opacity: 0.20;
  --noise-blend: screen;
  --noise-opacity: 0.04;
  --vignette-darkness: 0.72;
}
.quiet-scene[data-plate-hour="night"] {
  --star-opacity: 0.95;
  --noise-blend: screen;
  --noise-opacity: 0.028;
  --vignette-darkness: 0.88;
}

.marsh.is-up .quiet-scene { opacity: 1; }
/* AND A PLATE WITH NO HOUR STAYS ASIDE WHEN THE CURTAIN LIFTS. With the curtain
   down the quiet scene is already transparent, so this is the one rule the
   untold plate needs, and it is written after the rule it has to stand against
   for exactly that reason. */
.marsh.is-up .quiet-scene[data-plate-hour="${An}"] { opacity: 0; }

.quiet-scene[data-plate-hour="dawn"] {
  --qs-sky-top: #7896a1;
  --qs-sky-upper: #9fb2b0;
  --qs-sky-lower: #d9c2a7;
  --qs-sky-horizon: #efb082;
  --qs-glow: #ffe2a1;
  --qs-water: #7f9990;
  --qs-water-deep: #31564a;
  --qs-plate: url(${Kt.dawn});
  --qs-plate-sky: url(${Qt.dawn});
  --qs-plate-water: url(${Xt.dawn});
  --qs-plate-position: ${Math.round(Be.dawn*100)}% center;
  --qs-plate-x: ${Be.dawn};
  --qs-glow-x: 22%;
  --qs-glow-y: 69%;
}
.quiet-scene[data-plate-hour="day"] {
  --qs-sky-top: #7ea4b2;
  --qs-sky-upper: #abc0bd;
  --qs-sky-lower: #d8d9c7;
  --qs-sky-horizon: #e8d7b7;
  --qs-glow: #f8e6bd;
  --qs-water: #80a29a;
  --qs-water-deep: #2f5b51;
  --qs-plate: url(${Kt.day});
  --qs-plate-sky: url(${Qt.day});
  --qs-plate-water: url(${Xt.day});
  --qs-plate-position: ${Math.round(Be.day*100)}% center;
  --qs-plate-x: ${Be.day};
  --qs-glow-x: 55%;
  --qs-glow-y: 17%;
}
.quiet-scene[data-plate-hour="dusk"] {
  --qs-sky-top: #4d6171;
  --qs-sky-upper: #747d83;
  --qs-sky-lower: #a98478;
  --qs-sky-horizon: #d38a69;
  --qs-glow: #f3b775;
  --qs-water: #536a65;
  --qs-water-deep: #213b36;
  --qs-plate: url(${Kt.dusk});
  --qs-plate-sky: url(${Qt.dusk});
  --qs-plate-water: url(${Xt.dusk});
  --qs-plate-position: ${Math.round(Be.dusk*100)}% center;
  --qs-plate-x: ${Be.dusk};
  --qs-glow-x: 66%;
  --qs-glow-y: 67%;
}
.quiet-scene[data-plate-hour="night"] {
  --qs-sky-top: #101a24;
  --qs-sky-upper: #1d3038;
  --qs-sky-lower: #385052;
  --qs-sky-horizon: #63706a;
  --qs-glow: #d6d7c5;
  --qs-water: #314945;
  --qs-water-deep: #142c29;
  --qs-plate: url(${Kt.night});
  --qs-plate-sky: url(${Qt.night});
  --qs-plate-water: url(${Xt.night});
  --qs-plate-position: ${Math.round(Be.night*100)}% center;
  --qs-plate-x: ${Be.night};
  --qs-glow-x: 82%;
  --qs-glow-y: 16%;
}

/* THE HANDOFF. The quiet scene stays planted but becomes non-visible
   while the living canvas owns the frame. There is deliberately no
   opacity transition here: the still plate and the live grass are two
   complete compositions, so blending them would print both fields at
   once. veil-instant also suppresses the quiet scene's curtain fade
   while ownership returns to it. */
.quiet-scene.is-veiled {
  opacity: 0;
  visibility: hidden;
  transition: none;
}
.marsh.is-up .quiet-scene.is-veiled {
  opacity: 0;
  visibility: hidden;
}
.quiet-scene.veil-instant { transition: none; }

/* THE FIELD'S OWN BOX, AND THE SKIRT UNDER IT. The quiet scene fills the host,
   and the host may reach below the box the field is composed for, down under the
   house's ledge (\`../Ground.jsx\`, the skirt). This is the composed box: the host
   less its skirt. Everything the picture is laid by is measured on it, so a
   skirt moves nothing above its foot; the plate itself hangs on past the foot
   into the skirt, and the quiet scene is what clips it. With no skirt this box
   is the host, which is today's field. */
.quiet-scene { background: var(--qs-water-deep); }
.qs-field {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: var(--marsh-skirt, 0px);
  container-type: size;
}
/* THE PLATE, AT ITS OWN ASPECT. Every engine with container units lays it by
   \`plateBox\` in \`plates.mjs\`: the picture's composed ${k.width} by ${k.height} covers the
   field exactly as it did, from the side the hour says and from the middle up
   and down, and the ${k.skirt} under it carry on below the foot. The element is the
   picture's own shape, so its width is the only length it is laid by, and
   nothing in it can come out an oval.
   An engine without container units cannot measure the field, so it lays the
   element a skirt's share taller than the field, ${Fe.tall}% of it, and covers that
   with the picture from the side the hour says and ${Fe.down}% down. Cover scales
   the picture by exactly what it would scale the composed part by over the
   field alone, and ${Fe.down}% down puts the middle of the composed part on the
   middle of the field, so the field is cut exactly as the container units cut
   it and the skirt hangs below it as far as the element reaches, and the copy
   under it (\`.qs-plate-under\`, below) carries it the rest of the way. Until
   September 26 the element was the field's own box and the picture was laid
   over it by cover from the middle, which was right for the plates of ${k.width} by
   ${k.height} and wrong for these: the whole taller picture was squeezed into the
   field, its horizon stood high and its skirt stood inside the field. */
.qs-plate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${Fe.tall}%;
  background-image: var(--qs-plate);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: calc(var(--qs-plate-x) * 100%) ${Fe.down}%;
  transition: background 1.6s ease, filter 1.6s ease;
}
@supports (width: 1cqw) {
  .qs-plate {
    width: max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}));
    height: auto;
    aspect-ratio: ${k.width} / ${k.height+k.skirt};
    left: calc((var(--qs-field-width, 100cqw) - max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}))) * var(--qs-plate-x));
    top: calc((var(--qs-field-height, 100cqh) - max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))) / 2);
    background-position: 0 0;
    background-size: 100% auto;
  }
}
/* AND THE REST OF THE SKIRT, FOR THE SAME ENGINE. The element above reaches a
   skirt's share of the field below its foot, three tenths of the field's height,
   and a field much wider than the plate carries more skirt than that in its
   picture: the television's field under its ledge is 960 by 348 over a ledge of
   192, and there the element covered 104 pixels of the skirt and the last 88
   showed the scene's flat water. So under it, and so drawn first, a second copy
   is laid from the middle of the field down half the field's width, which is
   where the picture ends on a field wider than the plate, covered and hung from
   its foot: on such a field it is the picture at the very scale and place the
   element above lays it, and carries it on to its foot. On a narrower field the
   picture ends lower than this copy does, so the element above covers the whole
   of it. An engine with container units lays the plate whole and has no need
   of it. */
.qs-plate-under {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background-image: var(--qs-plate);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: calc(var(--qs-plate-x) * 100%) 100%;
  transition: background 1.6s ease, filter 1.6s ease;
}
@supports (width: 1cqw) {
  .qs-plate-under { display: none; }
}
/* THE MOON OF THE READING, OVER THE PLATE. The plates are baked with no moon in
   them, because a baked moon is the bake's own night on every night after it:
   the walk of September 25 found it in the middle of the sky and gibbous, a
   moment after the living field had drawn that night's full moon in the east.
   So the moon is drawn here, once for each reading, where and as the living
   field draws it (\`finger-lakes.js\`, \`moonOverPlate\`).
   It is laid in the plate's own frame, the box \`plateBox\` lays the plate in,
   and seen through the plate's sky (\`--qs-plate-sky\`), which the bake cuts
   from everything the living field lays in front of its moon. So the moon goes
   down behind the plate's own hills as the plate is cut on this screen, stands
   behind its reeds and shows faintly through its farthest ridge, as the living
   field's does. Until the review of September 26 it was clipped by the field's
   line of hills laid across the field's box, which is not where a plate cut
   from the middle stands them: on the television's engaged field the moon was
   sliced flat in open sky, and on a phone it stood in front of the hills.
   Inside the frame the moon is placed in the field's own box: across and in
   size as a share of the field's width, and down as a share of the sky from
   the field's top to the plate's own horizon (\`plates.mjs\`,
   \`plateSkyShare\`), which is the field's height wherever the plate is not
   cut top and bottom; less the frame's offset; and moved down out of the
   corners where the house pins its cards by the living field's own rule
   (\`bodyPlace\`), written below in lengths. The disc is its own square, so it stands round whatever shape the
   screen is. An engine without container units lays the frame and the sky in
   it exactly as it lays the plate there, a skirt's share taller than the field
   and cut ${Fe.down}% down, and the moon at its reading's place in the field's own
   part of it. The moon's light on the water is laid below (\`.qs-glade\`). */
.qs-moon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${Fe.tall}%;
  pointer-events: none;
  -webkit-mask: var(--qs-plate-sky) no-repeat;
  mask: var(--qs-plate-sky) no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: calc(var(--qs-plate-x) * 100%) ${Fe.down}%;
  mask-position: calc(var(--qs-plate-x) * 100%) ${Fe.down}%;
}
.qs-moon[data-moon="none"] { display: none; }
/* THE CLOUD OF THE READING, OVER THE PLATE. The plates are baked under a clear sky, so a
   cloudy reading was shown a clear picture under a card that said cloudy, at less motion
   and on the television, where the living field would have drawn it (the walk of October
   5, W1-34). It is laid here, held still, in the plate's own frame as the moon is, and
   seen through the plate's sky, so it stands behind the plate's hills and its reeds. The
   frame is the moon's, written again for it so that neither rule is the other's, and the
   drawing inside it is an svg whose view box is the frame in the field's own pixels, so
   the banks stand where the living field stands them for the same sky
   (\`plate-clouds.mjs\`). It is laid under the moon, as the living field lays its banks
   under its moon. An engine without container units lays the frame as it lays the
   plate's, a skirt's share taller than the field. */
.qs-clouds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${Fe.tall}%;
  pointer-events: none;
  -webkit-mask: var(--qs-plate-sky) no-repeat;
  mask: var(--qs-plate-sky) no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: calc(var(--qs-plate-x) * 100%) ${Fe.down}%;
  mask-position: calc(var(--qs-plate-x) * 100%) ${Fe.down}%;
}
.qs-clouds[data-clouds="none"] { display: none; }
.qs-clouds-field { display: block; width: 100%; height: 100%; }
@supports (width: 1cqw) {
  .qs-clouds {
    height: auto;
    width: max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}));
    aspect-ratio: ${k.width} / ${k.height+k.skirt};
    left: calc((var(--qs-field-width, 100cqw) - max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}))) * var(--qs-plate-x));
    top: calc((var(--qs-field-height, 100cqh) - max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))) / 2);
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
}
.qs-moon-halo,
.qs-moon-disc {
  position: absolute;
  left: calc(var(--qs-moon-x, .5) * 100%);
  top: calc(var(--qs-moon-y, .2) * ${Fe.field}%);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}
.qs-moon-halo {
  width: calc(var(--qs-moon-halo, .13) * 200%);
  border-radius: 50%;
  background: radial-gradient(closest-side,
    color-mix(in srgb, var(--qs-glow) var(--qs-moon-halo-core, 0%), transparent) 0%,
    color-mix(in srgb, var(--qs-glow) var(--qs-moon-halo-mid, 0%), transparent) 30%,
    transparent 100%);
}
.qs-moon-disc {
  display: block;
  width: calc(var(--qs-moon-r, .019) * 200%);
  overflow: visible;
  mix-blend-mode: screen;
}
@supports (width: 1cqw) {
  .qs-moon {
    height: auto;
    width: max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}));
    aspect-ratio: ${k.width} / ${k.height+k.skirt};
    left: calc((var(--qs-field-width, 100cqw) - max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}))) * var(--qs-plate-x));
    top: calc((var(--qs-field-height, 100cqh) - max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))) / 2);
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
  .qs-moon-halo,
  .qs-moon-disc {
    --qs-moon-across: calc(var(--qs-moon-x, .5) * var(--qs-field-width, 100cqw));
    --qs-moon-down: calc(var(--qs-moon-y, .2) * ((var(--qs-field-height, 100cqh) - max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))) / ${2*$n}
      + max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))));
    --qs-moon-radius: calc(var(--qs-moon-r, .019) * var(--qs-field-width, 100cqw));
    --qs-corner: min(${Ve.across}px, calc(${Ve.share} * var(--qs-field-width, 100cqw)));
    left: calc(var(--qs-moon-across) - (var(--qs-field-width, 100cqw) - max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}))) * var(--qs-plate-x));
    top: calc(var(--qs-moon-down)
      + min(
        max(0px, calc(${Ve.down+on}px + var(--qs-moon-radius) - var(--qs-moon-down))),
        max(0px,
          calc(var(--qs-corner) + var(--qs-moon-radius) - var(--qs-moon-across)),
          calc(var(--qs-moon-across) + var(--qs-moon-radius) - var(--qs-field-width, 100cqw) + var(--qs-corner))))
      - (var(--qs-field-height, 100cqh) - max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))) / 2);
  }
  .qs-moon-halo { width: calc(var(--qs-moon-halo, .13) * calc(2 * var(--qs-field-width, 100cqw))); }
  .qs-moon-disc { width: calc(var(--qs-moon-radius) * 2); }
}
/* THE MOON'S LIGHT ON THE WATER, OVER THE PLATE. The living field lays its
   moon's light on the water under its reeds, worked out from the wind's
   ripples (\`water-light.mjs\`), and the plate lays the same light for each
   reading at its still moment (\`moonOnThePlate\` in \`finger-lakes.js\`), worked
   for the plate's own frame and put into one small picture, which stands here
   where the light stands on the plate's water, seen through the plate's water
   (\`--qs-plate-water\`) so it lies behind the plate's reeds. Its box is the
   plate's own, as the plate is laid over this field (\`plateBox\`), and the
   picture is placed in it in shares of it. It is light on the water, so the
   whole of it is screened onto the plate. An engine without container units
   cannot say where the plate's water stands on the screen, and lays none. */
.qs-glade { display: none; }
@supports (width: 1cqw) {
  .qs-glade {
    display: block;
    position: absolute;
    pointer-events: none;
    width: max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}));
    aspect-ratio: ${k.width} / ${k.height+k.skirt};
    left: calc((var(--qs-field-width, 100cqw) - max(var(--qs-field-width, 100cqw), calc(var(--qs-field-height, 100cqh) * ${k.width/k.height}))) * var(--qs-plate-x));
    top: calc((var(--qs-field-height, 100cqh) - max(calc(var(--qs-field-width, 100cqw) * ${k.height/k.width}), var(--qs-field-height, 100cqh))) / 2);
    -webkit-mask: var(--qs-plate-water) 0 0 / 100% 100% no-repeat;
    mask: var(--qs-plate-water) 0 0 / 100% 100% no-repeat;
    mix-blend-mode: screen;
  }
  .qs-glade[data-glade="none"] { display: none; }
  .qs-glade-light {
    position: absolute;
    display: block;
    left: var(--qs-glade-left, 0%);
    top: var(--qs-glade-top, 0%);
    width: var(--qs-glade-width, 0%);
    height: var(--qs-glade-height, 0%);
  }
}
.qs-moon-dark { fill: rgb(${Ne.earthshine.join(", ")}); fill-opacity: var(--qs-moon-earthshine, 0); }
.qs-moon-lit { fill: rgb(${Ne.lit.join(", ")}); fill-opacity: var(--qs-moon-lit, 0); }
.qs-sky {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(
      circle at var(--qs-glow-x) var(--qs-glow-y),
      var(--qs-glow) 0,
      transparent 13%
    ),
    linear-gradient(
      to bottom,
      var(--qs-sky-top) 0%,
      var(--qs-sky-upper) 35%,
      var(--qs-sky-lower) 61%,
      var(--qs-sky-horizon) 72%
    );
  transition: background 1.6s ease, filter 1.6s ease;
}
/* THE READING'S CLOUD, ON A BAKED CLEAR FIELD. The four plates are authored
   under a clear sky, so the one honest thing cloud can do to one is take its
   colour: an overcast sky loses its warmth long before it loses much of its
   brightness, which is what palette.mjs says and greys its own colours by. The
   five steps and their shares are one table in plates.mjs and these rules are
   written from it, so the sheet and the module cannot drift apart. A clear sky
   gets no rule at all, because saturate(1) would still put this element on a
   compositing layer of its own for nothing. What is falling, what is lying and
   how far a person can see cannot reach a baked picture and none of them are
   faked here; plates.mjs writes down what that costs. */
${On.filter(t=>t.saturation<1).map(t=>`.quiet-scene[data-plate-cloud="${t.cloud}"] :is(.qs-sky, .qs-plate, .qs-plate-under) { filter: saturate(${t.saturation}); }`).join(`
`)}
/* A still horizon veil and open water give the fallback the public
   field's depth without a bitmap, a blur, or another rendering loop. */
.qs-sky::before,
.qs-sky::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
}
.qs-sky::before,
.qs-sky::after,
.qs-stars,
.qs-disc,
.qs-grass {
  /* The baked plate is the locked site's own field, rendered once at
     each canonical hour and compressed to a 36–85 KB WebP. Keeping
     these CSS layers in the source gives an image-independent color
     safety net; the local plate is the authored low-tier foreground. */
  display: none;
}
.qs-sky::before {
  top: 58%;
  height: 20%;
  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(238, 232, 205, 0.12) 44%,
      rgba(38, 68, 58, 0.08) 68%,
      transparent
    );
}
.qs-sky::after {
  bottom: 0;
  height: 34%;
  background:
    linear-gradient(to bottom, rgba(246, 239, 213, 0.1), transparent 19%),
    linear-gradient(to bottom, var(--qs-water), var(--qs-water-deep));
  clip-path: polygon(0 2%, 14% 1%, 27% 3%, 41% 1%, 56% 2%, 71% 0, 86% 2%, 100% 1%, 100% 100%, 0 100%);
  transition: background 1.6s ease;
}

/* Stars print at the theme's star opacity; daylight themes carry zero. */
.qs-stars {
  position: absolute;
  inset: 0 0 30% 0;
  opacity: var(--star-opacity);
  transition: opacity 1.6s ease;
  background-image:
    radial-gradient(1px 1px at 8% 22%, rgba(255, 255, 255, 0.9), transparent 55%),
    radial-gradient(1.5px 1.5px at 18% 9%, rgba(255, 255, 255, 0.8), transparent 55%),
    radial-gradient(1px 1px at 27% 31%, rgba(255, 255, 255, 0.7), transparent 55%),
    radial-gradient(1px 1px at 36% 14%, rgba(255, 255, 255, 0.85), transparent 55%),
    radial-gradient(1.5px 1.5px at 47% 26%, rgba(255, 255, 255, 0.75), transparent 55%),
    radial-gradient(1px 1px at 55% 7%, rgba(255, 255, 255, 0.9), transparent 55%),
    radial-gradient(1px 1px at 63% 35%, rgba(255, 255, 255, 0.65), transparent 55%),
    radial-gradient(1.5px 1.5px at 72% 16%, rgba(255, 255, 255, 0.85), transparent 55%),
    radial-gradient(1px 1px at 81% 27%, rgba(255, 255, 255, 0.7), transparent 55%),
    radial-gradient(1px 1px at 88% 10%, rgba(255, 255, 255, 0.9), transparent 55%),
    radial-gradient(1.5px 1.5px at 94% 33%, rgba(255, 255, 255, 0.7), transparent 55%),
    radial-gradient(1px 1px at 13% 42%, rgba(255, 255, 255, 0.5), transparent 55%),
    radial-gradient(1px 1px at 68% 44%, rgba(255, 255, 255, 0.5), transparent 55%);
}

/* The disc: sun by day, moon by night. Each theme places it. */
.qs-disc {
  position: absolute;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--qs-glow);
  left: 14%;
  bottom: 32%;
  transition: background 1.6s ease;
}
.qs-disc::before {
  content: '';
  position: absolute;
  inset: -120%;
  border-radius: 50%;
  background: radial-gradient(circle, var(--qs-glow) 0%, transparent 62%);
  opacity: 0.24;
}
/* Phase hint: a sky-toned bite that only prints at night. IT REPORTS NO PHASE.
   The bite is a fixed shape at a fixed offset and it asks the reading nothing,
   so this disc is night weather and not the moon of the hour: how much of the
   moon is lit is in marshMoon in the adapter, and no rule below reads it. Since
   September 26 no moon is baked into any plate: the moon a resident sees over
   a plate is drawn for each reading, at its phase and where the living field
   stands it (\`.qs-moon\` above), and this disc is hidden with the rest of the
   colour safety net. */
.qs-disc::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--qs-sky-top);
  transform: translate(30%, -14%) scale(0.9);
  opacity: 0;
  transition: background 1.6s ease, opacity 1.6s ease;
}
.quiet-scene[data-plate-hour="night"] .qs-disc::after { opacity: 1; }

.quiet-scene[data-plate-hour="dawn"] .qs-disc { left: 18%; bottom: 28%; width: 96px; height: 96px; }
.quiet-scene[data-plate-hour="day"]  .qs-disc { left: 52%; bottom: auto; top: 14%; width: 80px; height: 80px; }
.quiet-scene[data-plate-hour="night"] .qs-disc { left: auto; right: 18%; bottom: auto; top: 15%; width: 72px; height: 72px; }

/* Three still marsh planes, far to near. Each bank and reed line is a
   gradient or pseudo-element: richer than the old sawtooth polygons,
   but with no image decode, canvas, filter, or animation cost. */
.qs-grass {
  position: absolute;
  left: -2%;
  right: -2%;
  bottom: 0;
  background: transparent;
  isolation: isolate;
}
.qs-grass::before,
.qs-grass::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
  transition: background 1.6s ease;
}
.qs-grass::after {
  z-index: -1;
  bottom: 0;
}
.qs-grass-far {
  height: 34%;
}
.qs-grass-far::before {
  top: 0;
  bottom: 18%;
  opacity: 0.42;
  background:
    radial-gradient(ellipse at 8% 27%, rgba(24, 54, 45, 0.5) 0 2px, transparent 3px),
    radial-gradient(ellipse at 31% 14%, rgba(24, 54, 45, 0.42) 0 2px, transparent 3px),
    radial-gradient(ellipse at 67% 23%, rgba(24, 54, 45, 0.46) 0 2px, transparent 3px),
    radial-gradient(ellipse at 91% 9%, rgba(24, 54, 45, 0.4) 0 2px, transparent 3px),
    repeating-linear-gradient(
      88deg,
      transparent 0 17px,
      rgba(24, 54, 45, 0.34) 18px 19px,
      transparent 20px 31px
    );
}
.qs-grass-far::after {
  top: 19%;
  background:
    radial-gradient(ellipse at 54% 0, rgba(239, 225, 191, 0.12), transparent 48%),
    linear-gradient(to bottom, rgba(20, 52, 43, 0.08), rgba(9, 32, 26, 0.3)),
    var(--qs-water);
  clip-path: polygon(0 17%, 9% 13%, 18% 16%, 29% 10%, 41% 14%, 53% 8%, 65% 13%, 77% 7%, 89% 12%, 100% 9%, 100% 100%, 0 100%);
}
.qs-grass-mid {
  height: 25%;
}
.qs-grass-mid::before {
  top: 0;
  bottom: 9%;
  opacity: 0.64;
  background:
    radial-gradient(ellipse at 13% 22%, rgba(12, 39, 31, 0.66) 0 2px, transparent 3px),
    radial-gradient(ellipse at 43% 8%, rgba(12, 39, 31, 0.58) 0 2px, transparent 3px),
    radial-gradient(ellipse at 74% 18%, rgba(12, 39, 31, 0.62) 0 2px, transparent 3px),
    repeating-linear-gradient(
      86deg,
      transparent 0 11px,
      rgba(12, 39, 31, 0.48) 12px 13px,
      transparent 14px 23px
    );
}
.qs-grass-mid::after {
  top: 17%;
  background:
    linear-gradient(to bottom, rgba(231, 224, 198, 0.07), transparent 20%),
    linear-gradient(to bottom, var(--qs-water-deep), rgba(8, 28, 22, 0.86));
  clip-path: polygon(0 15%, 8% 20%, 17% 12%, 27% 18%, 38% 10%, 49% 16%, 60% 9%, 71% 15%, 82% 8%, 92% 14%, 100% 10%, 100% 100%, 0 100%);
}
.qs-grass-near {
  height: 19%;
}
.qs-grass-near::before {
  top: 0;
  bottom: 0;
  opacity: 0.82;
  background:
    radial-gradient(ellipse at 7% 16%, rgba(5, 25, 19, 0.8) 0 2px, transparent 3px),
    radial-gradient(ellipse at 35% 5%, rgba(5, 25, 19, 0.72) 0 2px, transparent 3px),
    radial-gradient(ellipse at 62% 13%, rgba(5, 25, 19, 0.76) 0 2px, transparent 3px),
    radial-gradient(ellipse at 88% 4%, rgba(5, 25, 19, 0.7) 0 2px, transparent 3px),
    repeating-linear-gradient(
      84deg,
      transparent 0 8px,
      rgba(5, 25, 19, 0.64) 9px 10px,
      transparent 11px 18px
    );
}
.qs-grass-near::after {
  top: 21%;
  background:
    linear-gradient(to bottom, rgba(168, 187, 154, 0.16), transparent 16%),
    linear-gradient(to bottom, var(--qs-water-deep), rgba(3, 17, 13, 0.96));
  clip-path: polygon(0 13%, 7% 7%, 15% 14%, 23% 5%, 31% 12%, 40% 4%, 49% 13%, 58% 6%, 67% 12%, 76% 3%, 85% 11%, 93% 5%, 100% 12%, 100% 100%, 0 100%);
}

/* Faint halftone breath, the painted world's own idle. It exists only
   behind the curtain; the printed page never carries it. Reduced motion
   collapses the breath to a still tone via the global parity block. */
.qs-halftone {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 7px 7px;
  mix-blend-mode: var(--noise-blend);
  opacity: var(--noise-opacity);
  animation: qs-breathe var(--t-breathe) ease-in-out infinite alternate;
}
@keyframes qs-breathe {
  from { opacity: calc(var(--noise-opacity) * 0.55); }
  to   { opacity: calc(var(--noise-opacity) * 1.55); }
}
/* Low is an authored still, not a visibly diminished renderer. Its
   paper tooth remains, but the full-viewport opacity loop rests. The tier is
   written on the marsh's own element and never on the document's
   (\`publishQuality\` below), because a document may hold more than one front,
   so the rest is keyed there. Keyed on the document's element, as it was lifted,
   it matched nothing: the breath went on compositing the whole screen every
   frame on the television and at the resting rungs, which are the low tier. */
.marsh[data-scene-quality="low"] .qs-halftone {
  animation: none;
  opacity: var(--noise-opacity);
}

/* The painting darkens toward its frame. The frame is the composed box, so the
   vignette is the one cover would lay over that box, the ellipse through its
   farthest corner from half way across and 38 in a hundred down, and it carries
   on over the skirt as that same ellipse rather than being laid again over the
   taller box. An engine without container units lays it over the whole host,
   as it always did. */
.qs-vignette {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: calc(var(--marsh-skirt, 0px) * -1);
  background: radial-gradient(ellipse at 50% 38%, transparent 52%, rgba(0, 0, 0, var(--vignette-darkness)) 145%);
  opacity: 0.16;
}
@supports (width: 1cqw) {
  .qs-vignette {
    background: radial-gradient(calc(.70711 * var(--qs-field-width, 100cqw)) calc(.87681 * var(--qs-field-height, 100cqh)) at calc(.5 * var(--qs-field-width, 100cqw)) calc(.38 * var(--qs-field-height, 100cqh)), transparent 52%, rgba(0, 0, 0, var(--vignette-darkness)) 145%);
  }
}

`,uo=`
<div class="quiet-scene" aria-hidden="true">
  <div class="qs-field">
    <div class="qs-sky"></div>
    <div class="qs-plate-under"></div>
    <div class="qs-plate"></div>
    <div class="qs-clouds" data-clouds="none">
      <svg class="qs-clouds-field" viewBox="0 0 1 1" preserveAspectRatio="none" focusable="false"></svg>
    </div>
    <div class="qs-glade" data-glade="none">
      <canvas class="qs-glade-light" width="1" height="1"></canvas>
    </div>
    <div class="qs-moon" data-moon="none">
      <div class="qs-moon-halo"></div>
      <svg class="qs-moon-disc" viewBox="-1 -1 2 2" focusable="false"><circle class="qs-moon-dark" r="1"></circle><path class="qs-moon-lit" d=""></path></svg>
    </div>
    <div class="qs-vignette"></div>
  </div>
  <div class="qs-stars"></div>
  <div class="qs-disc"></div>
  <div class="qs-grass qs-grass-far"></div>
  <div class="qs-grass qs-grass-mid"></div>
  <div class="qs-grass qs-grass-near"></div>
  <div class="qs-halftone"></div>
</div>
`,fo=`
.meadow-scene {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
}
.marsh.is-up .meadow-scene.is-live {
  opacity: 1;
  visibility: visible;
}
.meadow-canvas { display: block; width: 100%; height: 100%; }
`,po=`
<div class="meadow-scene" aria-hidden="true">
  <canvas class="meadow-canvas"></canvas>
</div>
`;let Lt=null,go=0;function mo(){Lt||typeof document>"u"||(Lt=document.createElement("style"),Lt.dataset.marsh="true",Lt.textContent=ho+fo,document.head.appendChild(Lt))}function bo(t={}){const a=t.host;if(!a||typeof a.querySelector!="function")throw new TypeError("The marsh needs an element to stand in.");mo(),a.classList.add("marsh"),a.insertAdjacentHTML("afterbegin",uo+po);const e=a.querySelector(".quiet-scene"),r=a.querySelector(".meadow-scene"),h=a.querySelector(".meadow-canvas"),c={reading:null,reducedMotion:t.reducedMotion??null,tier:t.tier??null,skirt:Math.max(0,Number(t.skirt)||0),cards:t.cards??null,windowBox:t.windowBox??null};function f(l){Sn(l)&&(c.reading=l)}f(t.reading);const q=["clear","cloudy","rain","snow","fog","storm"],p={code:null,windMph:0};function w(){n.status==="live"&&$e()}const n={status:"idle",running:!1,curtain:!1,quiet:!1,engaged:!1,qualityMode:"auto",qualityActive:"high",qualityReason:"unresolved",qualityWindowStart:0,qualityWindowFrames:0,qualityWindowCost:0,qualityWindowSlow:0,lowDeferred:!1,framesRendered:0};let o=null;const z=typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1,addEventListener(){},removeEventListener(){}};function W(){return c.reducedMotion!==null&&c.reducedMotion||z.matches}const D="fellowsoft.scene-quality",L="fellowsoft.scene-quality-next-low",A=Object.freeze(["auto","high","mid","low"]);function S(){try{const l=window.houseDemoLocal.getItem(D);return A.indexOf(l)!==-1?l:"auto"}catch{return"auto"}}function B(l){try{l==="auto"?window.houseDemoLocal.removeItem(D):window.houseDemoLocal.setItem(D,l)}catch{}}function I(){try{const l=window.houseDemoLocal.getItem(L)==="1";return l&&window.houseDemoLocal.removeItem(L),l}catch{return!1}}function Y(l){try{l?window.houseDemoLocal.setItem(L,"1"):window.houseDemoLocal.removeItem(L)}catch{}}function ae(){var xe,Z;const l=Number((xe=typeof navigator>"u"?null:navigator)==null?void 0:xe.deviceMemory)||0,m=Number((Z=typeof navigator>"u"?null:navigator)==null?void 0:Z.hardwareConcurrency)||0,N=Math.min(Number(window.devicePixelRatio)||1,2),X=Math.max(1,window.innerWidth)*Math.max(1,window.innerHeight)*N*N,Ce=typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches;return l&&l<=4||m&&m<=4||Ce||X>12e6?l&&l<=4?"device-memory":m&&m<=4?"cpu-count":Ce?"coarse-pointer":"pixel-work":null}function J(){if(W())return{tier:"low",reason:"reduced-motion"};const l=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(l&&l.saveData)return{tier:"low",reason:"save-data"};const m=Number(navigator.deviceMemory)||0,N=Number(navigator.hardwareConcurrency)||0;if(m&&m<=2||N&&N<=2)return{tier:"low",reason:m&&m<=2?"device-memory":"cpu-count"};const X=ae();return X?{tier:"mid",reason:X}:{tier:"high",reason:"capability"}}function y(){return c.tier==="high"||c.tier==="mid"?c.tier:n.qualityMode==="high"||n.qualityMode==="mid"?n.qualityMode:ae()?"mid":"high"}function le(l){return W()?{tier:"low",reason:"reduced-motion"}:c.tier?{tier:c.tier,reason:"host-profile"}:l!=="auto"?{tier:l,reason:"manual"}:J()}function be(){a.setAttribute("data-scene-quality",n.qualityActive),a.setAttribute("data-scene-quality-mode",n.qualityMode)}function ee(){n.qualityWindowStart=0,n.qualityWindowFrames=0,n.qualityWindowCost=0,n.qualityWindowSlow=0}n.qualityMode=S();{const l=I(),m=le(n.qualityMode),N=l&&n.qualityMode==="auto"&&m.tier!=="low"?{tier:"low",reason:"runtime-deferred"}:m;n.qualityActive=N.tier,n.qualityReason=N.reason,be()}function ke(){return n.curtain}function U(){const l=p.code;return l?{code:l,windMph:p.windMph}:null}function $e(){o&&(o.setWeather(U()),o.setQuiet(n.quiet),o.retarget())}function P(){return{mode:n.qualityMode,active:n.qualityActive,reason:n.qualityReason,pixelRatio:n.qualityActive==="low"?0:o?o.pixelRatio():0,framesRendered:o?o.framesRendered():n.framesRendered}}function Me(l,m){if(l!=="high"&&l!=="mid"&&l!=="low")return;const N=n.qualityActive!==l;n.qualityActive=l,n.qualityReason=m||n.qualityReason,be(),ee(),n.status==="live"&&o?l==="low"?(o.stop(),n.running=!1,R(!1)):(N&&o.setTier(l),$()):l!=="low"&&ke()&&ie()}function Re(l){const m=le(n.qualityMode);Me(m.tier,l||m.reason)}function Oe(l){n.lowDeferred||(n.lowDeferred=!0,n.qualityReason=l+"-low-next-launch",ee(),n.qualityMode==="auto"&&Y(!0))}function j(l){n.qualityActive==="high"?Me("mid",l):n.qualityActive==="mid"&&Oe(l)}async function ie(){if(n.status==="idle"&&!(n.qualityActive==="low"||W())&&c.reading!==null){n.status="loading";try{o=eo({canvas:h,tier:n.qualityActive,weather:U(),quiet:n.quiet,engaged:n.engaged,skirt:c.skirt,cards:c.cards,windowBox:c.windowBox,moment:()=>Ea(c.reading),sky:()=>Bt(c.reading),onFrameCost(l,m){n.framesRendered++,K(l,m)}}),o.renderStill()}catch(l){o&&typeof o.destroy=="function"&&o.destroy(),o=null,Te("the Finger Lakes field declined to start",l);return}n.status="live",$()}}function Te(l,m){n.status="failed",n.running=!1,n.qualityActive="low",n.qualityReason="scene-failed",be(),R(!1),console.warn("FellowSoft field: "+l+". The quiet scene stands behind the curtain this session.",m)}function T(){return n.status==="live"&&n.qualityActive!=="low"&&ke()&&!document.hidden&&!W()}function R(l){if(l){e.classList.add("is-veiled"),r.classList.add("is-live");return}r.classList.remove("is-live"),e.classList.contains("is-veiled")&&(e.classList.add("veil-instant"),e.classList.remove("is-veiled"),e.offsetWidth,e.classList.remove("veil-instant"))}function $(){if(n.status!=="live")return;const l=T();R(l),o&&(l?(o.setTier(n.qualityActive),o.setEngaged(n.engaged),o.start(),n.running=!0):(o.stop(),n.running=!1))}function K(l,m){if(n.qualityActive==="low"||n.lowDeferred)return;if(!n.qualityWindowStart){n.qualityWindowStart=m;return}const N=n.qualityActive==="high"?13.5:24;if(n.qualityWindowFrames++,n.qualityWindowCost+=l,l>N&&n.qualityWindowSlow++,m-n.qualityWindowStart<6e3)return;const X=Math.max(1,n.qualityWindowFrames),Ce=n.qualityWindowCost/X,xe=n.qualityWindowSlow/X;ee(),X>=30&&(Ce>N||xe>.25)&&j("runtime-slow")}const oe=a.querySelector(".qs-moon"),We=a.querySelector(".qs-moon-lit");function fe(){if(!oe)return;const l=c.reading===null?null:Zn(Bt(c.reading));if(!l){oe.setAttribute("data-moon","none");return}const m=X=>String(Math.round(X*1e5)/1e5),N=X=>`${Math.round(X*1e5)/1e3}%`;oe.setAttribute("data-moon","up"),oe.setAttribute("data-moon-phase",String(Math.round(l.fraction*1e3)/1e3)),oe.setAttribute("style",[`--qs-moon-x: ${m(l.x)}`,`--qs-moon-y: ${m(l.y)}`,`--qs-moon-r: ${m(l.radius)}`,`--qs-moon-halo: ${m(l.halo)}`,`--qs-moon-halo-core: ${N(Ne.haloStops[0][1]*l.haloStrength)}`,`--qs-moon-halo-mid: ${N(Ne.haloStops[1][1]*l.haloStrength)}`,`--qs-moon-earthshine: ${Math.round(l.earthshine*1e4)/1e4}`,`--qs-moon-lit: ${Math.round(l.lit*1e4)/1e4}`].join("; ")),We&&We.setAttribute("d",l.path)}const C=a.querySelector(".qs-glade"),_=a.querySelector(".qs-glade-light");let ce="";function Se(){var ct,jt,Nt,Dt;if(!C)return;const l=he&&c.reading!==null?De():null,m=l?Bt(c.reading):null,N=l?((ct=Ca(c.reading))==null?void 0:ct.windMph)??0:0,X=Be[da(c.reading).hour]??Be.night,Ce=l?JSON.stringify([l.width,l.height,X,N,m.moon,m.sun?1:0,((jt=m.air)==null?void 0:jt.windFrom)??null,((Nt=m.fog)==null?void 0:Nt.reach)??0,((Dt=m.falls)==null?void 0:Dt.kind)??null,m.lying]):"";if(Ce===ce)return;ce=Ce;const xe=l?Ga(l,X):null,Z=xe?Jn(m,N,l,xe,k.height):null,Ye=Z&&_&&typeof _.getContext=="function"?_.getContext("2d"):null;if(!Z||!Ye){C.setAttribute("data-glade","none");return}_.width=Z.columns,_.height=Z.rows;const Ke=Ye.createImageData(Z.columns,Z.rows),Qe=Ke.data;for(let ze=0;ze<Qe.length;ze+=4){const Je=Math.max(Z.pixels[ze],Z.pixels[ze+1],Z.pixels[ze+2]);Je&&(Qe[ze]=Z.pixels[ze]*255/Je,Qe[ze+1]=Z.pixels[ze+1]*255/Je,Qe[ze+2]=Z.pixels[ze+2]*255/Je,Qe[ze+3]=Je)}Ye.putImageData(Ke,0,0);const bt=(ze,Je)=>`${Math.round(ze/Je*1e6)/1e4}%`;C.setAttribute("data-glade","up"),C.setAttribute("style",[`--qs-glade-left: ${bt(Z.left,xe.width)}`,`--qs-glade-top: ${bt(Z.top,xe.height)}`,`--qs-glade-width: ${bt(Z.columns*Z.cell,xe.width)}`,`--qs-glade-height: ${bt(Z.rows*Z.cell,xe.height)}`].join("; "))}const qe=a.querySelector(".qs-clouds"),Ae=a.querySelector(".qs-clouds-field"),ye=a.querySelector(".qs-field"),Ee=`qs-cloud-${++go}`;let ve="",he=typeof ResizeObserver!="function";function De(){if(!ye)return null;let l=0,m=0;if(typeof window.getComputedStyle=="function")try{const N=window.getComputedStyle(ye);l=parseFloat(N.width),m=parseFloat(N.height)}catch{l=0,m=0}if(!(l>0&&m>0)&&typeof ye.getBoundingClientRect=="function"){const N=ye.getBoundingClientRect();l=N.width,m=N.height}return l>0&&m>0?{width:l,height:m}:null}function Ue(l=da(c.reading)){var Z,Ye,Ke,Qe;if(!he)return;const m=De();if(m&&((Ye=(Z=e.style)==null?void 0:Z.setProperty)==null||Ye.call(Z,"--qs-field-width",`${m.width}px`),(Qe=(Ke=e.style)==null?void 0:Ke.setProperty)==null||Qe.call(Ke,"--qs-field-height",`${m.height}px`)),!qe||!Ae)return;const N=l.told&&c.reading!==null?m:null,X=N?io(Bt(c.reading),{hour:l.hour,season:Ea(c.reading).season},N,{cards:so(c.cards,Tn(ye)),tier:y()}):null;if(!X){ve!==""&&(qe.setAttribute("data-clouds","none"),qe.removeAttribute("data-banks"),Ae.innerHTML="",ve="");return}const Ce=co(X,Ee),xe=`${Ce.viewBox}|${Ce.markup}`;xe!==ve&&(ve=xe,Ae.setAttribute("viewBox",Ce.viewBox),Ae.innerHTML=Ce.markup,qe.setAttribute("data-clouds","up"),qe.setAttribute("data-banks",String(X.banks.length)))}let nt=null;ye&&typeof ResizeObserver=="function"&&(nt=new ResizeObserver(()=>{he=!0,Ue(),Se()}),nt.observe(ye));function lt(){const l=da(c.reading);return e.setAttribute("data-plate-hour",l.hour),e.setAttribute("data-plate-cloud",l.cloud),e.setAttribute("data-plate-weather",l.weather),l.told&&a.setAttribute("data-marsh-hour",l.hour),fe(),Se(),Ue(l),l}function Pt(){const l=lt(),m=Ca(c.reading),N=m&&q.indexOf(m.code)!==-1?m.code:null,X=m&&typeof m.windMph=="number"&&isFinite(m.windMph)?Math.max(0,Math.min(60,m.windMph)):0,Ce=p.windMph!==(N?X:0);p.windMph=N?X:0,N!==p.code||Ce?(p.code=N,w()):n.status==="live"&&$e(),l.told&&ke()&&ie()}function Tt(){$()}function At(){Re(),$()}return document.addEventListener("visibilitychange",Tt),z.addEventListener("change",At),Pt(),{onCurtain(l){n.curtain=!!l,a.classList.toggle("is-up",n.curtain),n.curtain&&ie(),$()},setReading(l){f(l),Pt()},setTier(l){c.tier=l==="high"||l==="mid"||l==="low"?l:null,Re(),Ue()},setReducedMotion(l){c.reducedMotion=l==null?null:!!l,Re("motion-setting"),$()},status(){return n.status},quality(){return P()},setQuality(l){if(A.indexOf(l)===-1)return P();n.qualityMode=l,n.lowDeferred=!1,Y(!1),B(l),Ue();const m=le(l);return n.status==="failed"&&m.tier!=="low"?(n.qualityActive="low",n.qualityReason="scene-failed",be(),P()):(Me(m.tier,m.reason),P())},wind(){return o?o.wind():0},windNow(){return o&&n.running?o.windNow():Mn},setSkirt(l){const m=Math.max(0,Number(l)||0);m!==c.skirt&&(c.skirt=m,o&&o.setSkirt(m))},setCards(l){c.cards=l??null,o&&o.setCards(c.cards),Ue()},setWindowBox(l){c.windowBox=l??null,o&&o.setWindowBox(c.windowBox)},setQuiet(l){const m=!!l;n.quiet!==m&&(n.quiet=m,n.status==="live"&&$e())},setEngaged(l){const m=!!l;n.engaged!==m&&(n.engaged=m,!(n.status!=="live"||!o)&&o.setEngaged(m))},snapshot(){return{status:n.status,running:n.running,curtain:n.curtain,quiet:n.quiet,hour:a.getAttribute("data-marsh-hour"),plate:{hour:e.getAttribute("data-plate-hour"),cloud:e.getAttribute("data-plate-cloud"),weather:e.getAttribute("data-plate-weather")},weather:{code:p.code,windMph:p.windMph},quality:P(),field:o?o.snapshot():null}},destroy(){document.removeEventListener("visibilitychange",Tt),z.removeEventListener("change",At),nt&&nt.disconnect(),nt=null,o&&typeof o.destroy=="function"&&o.destroy(),o=null,n.status="idle",n.running=!1,e&&e.remove(),r&&r.remove(),a.classList.remove("marsh","is-up")}}}export{bo as createMarsh};
