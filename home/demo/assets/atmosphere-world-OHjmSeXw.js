import{WebGLRenderer as Re}from"./three.module-3SIJWF1t.js";import{v as Oe,s as Pe,a as Ge}from"./environment-contract-TGGH_Mcj.js";import{a4 as Ne,R as Ce,a5 as $e,C as k,a as he,E as _e,a6 as Be,a7 as We,V as ge,S as ve,a8 as qe,M as je,a9 as Ie,aa as Ve,l as Ue,ab as He}from"./three.core-JwXrd0pP.js";const ze=`
uniform vec3 sunDirection,moonDirection,skyTop,skyHorizon,fogColor;
uniform float skyBearing,starVisibility;
uniform float daylight,warmth,cloudCover,windStrength,rainfall,snowfall,autumn,winter;
uniform sampler2D starMap;
vec3 celestialSky(vec3 rd){
 float h=max(rd.y,0.);vec3 c=mix(skyHorizon,skyTop,pow(h,.46));
 float s=max(dot(rd,sunDirection),0.);
 c+=vec3(1.,.69,.39)*pow(s,34.)*.23*daylight*(1.-cloudCover*.85);
 if(sunDirection.y>-.014)c+=vec3(1.,.89,.68)*smoothstep(.99991,.999965,s)*1.6*(1.-cloudCover*.8);
 vec2 st=vec2(atan(rd.x,rd.z)/6.2831853+.5+skyBearing/6.2831853,asin(clamp(rd.y,-1.,1.))/3.14159265+.5);
 c+=texture2D(starMap,st).rgb*starVisibility*smoothstep(0.,.15,h);
 vec3 pole=abs(moonDirection.y)>.999?vec3(0.,0.,1.):vec3(0.,1.,0.);vec3 right=normalize(cross(pole,moonDirection));vec3 up=normalize(cross(moonDirection,right));
 vec2 m=vec2(dot(rd,right),dot(rd,up))/.008;
 float r2=dot(m,m);
 if(dot(rd,moonDirection)>.9998&&r2<1.&&moonDirection.y>0.){
  vec3 normal=normalize(right*m.x+up*m.y-moonDirection*sqrt(1.-r2));
  float lit=smoothstep(-.02,.12,dot(normal,sunDirection));
  vec3 dark=mix(vec3(.03,.045,.07),c,daylight);c=mix(c,mix(dark,vec3(.81,.85,.80),lit),(.78-daylight*.25)*(1.-cloudCover*.75));
 }
 return c;
}
vec3 atmosphereGrade(vec3 color){
 vec3 night=color*vec3(.13,.21,.36)+vec3(.007,.012,.022);
 color=mix(night,color,daylight);
 return mix(color,vec3(dot(color,vec3(.2126,.7152,.0722)))*vec3(.87,.96,1.07),cloudCover*.2);
}
float weatherHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
vec3 weatherVeil(vec3 color,vec2 uv,float seconds){
 float rain=0.;
 for(int layer=0;layer<2;layer++){
  float scale=22.+float(layer)*15.;vec2 p=uv*scale;p.x+=p.y*.14+seconds*windStrength*.26;p.y+=seconds*(7.+float(layer)*4.);
  vec2 cell=floor(p);vec2 q=fract(p);float seed=weatherHash(cell);
  rain+=smoothstep(.035,0.,abs(q.x-.25-seed*.5))*smoothstep(.42,.08,abs(q.y-.5))*step(.74-rainfall*.25,seed);
 }
 color=mix(color,fogColor+vec3(.15,.18,.20)*(.2+daylight*.8),rain*rainfall*.28);
 float snow=0.;
 for(int layer=0;layer<2;layer++){
  float scale=18.+float(layer)*13.;vec2 p=uv*scale;p.x+=sin(seconds*.12+p.y)*.3;p.y+=seconds*(.28+float(layer)*.21);
  vec2 cell=floor(p),q=fract(p);float seed=weatherHash(cell+71.);float d=length(q-vec2(.5+sin(seed*6.28)*.23,.5));snow+=smoothstep(.055,.014,d)*step(.7,seed);
 }
 return mix(color,vec3(.74,.80,.82)*(.25+daylight*.75),snow*snowfall*.7);
}

`,I=Math.PI*1.5,Z={daylight:"daylight",warmth:"warmth",starVisibility:"starVisibility",cloudCover:"cloud",windStrength:"wind",rainfall:"rain",snowfall:"snow",autumn:"autumn",winter:"winter"};function Le(t){Oe(t);for(const c of Object.values(Z)){const n=t.atmosphere[c];if(!Number.isFinite(n)||n<0||n>1)throw new TypeError(`Host atmosphere.${c} must be in 0..1`)}return t}function we(t){const[c,n,i]=t,o=Math.cos(I),r=Math.sin(I);return[c*o-i*r,n,c*r+i*o]}function Ke({document:t,onReady:c=()=>{},onError:n=()=>{},fetch:i=globalThis.fetch}){const o=t.createElement("canvas");o.width=2048,o.height=1024;const r=o.getContext("2d");if(!r)throw new Error("The local celestial catalogue requires a 2D texture surface");r.fillStyle="#000",r.fillRect(0,0,o.width,o.height);const p=new Ne(o);p.wrapS=Ce,p.colorSpace=$e;const v={skyBearing:{value:I},sunDirection:{value:new he(0,1,0)},moonDirection:{value:new he(0,-1,0)},skyTop:{value:new k},skyHorizon:{value:new k},fogColor:{value:new k},starMap:{value:p}};for(const u of Object.keys(Z))v[u]={value:0};let h=!1,D=!1,a=null,m=null,g=null,x=0,S="",y="idle";function C(u=!1){if(!D||h||!a||!m)return;const l=a,d=`${l.region.lat}:${l.region.lng}:${l.instant.slice(0,16)}`;if(!u&&d===S)return;S=d,r.fillStyle="#000",r.fillRect(0,0,o.width,o.height);const f=new Date(l.instant);for(const[,E,w,T]of m){const z=Pe(E,w,f,l.region.lat,l.region.lng);if(z.altitude<0)continue;const F=(z.azimuth/360+.5)%1*o.width,P=(.5-z.altitude/180)*o.height,G=Math.min(1,Math.pow(10,-.18*(T+1))*.9),N=Math.max(.42,1.6-T*.17);r.fillStyle=`rgba(219,231,255,${G})`,r.beginPath(),r.arc(F,P,N,0,Math.PI*2),r.fill()}p.needsUpdate=!0}function M(){if(!D||h||!a||m||g)return;const u=++x,l=new AbortController;g=l,y="loading",Promise.resolve().then(()=>h||!D||u!==x?null:i(new URL("/home/demo/assets/stars-hyg-IHqtqHPv.json",import.meta.url),{signal:l.signal})).then(async d=>{if(!d||h||!D||u!==x)return;if(!d.ok)throw new Error(`Local celestial catalogue returned ${d.status}`);const f=await d.json();if(!(h||!D||u!==x)){if(!Array.isArray(f.stars)||f.stars.length>1e4||!f.stars.every(E=>Array.isArray(E)&&E.length===4&&typeof E[0]=="string"&&E.slice(1).every(Number.isFinite)))throw new Error("Invalid local celestial catalogue");m=f.stars,g=null,y="loaded",C(!0),c()}}).catch(d=>{h||!D||u!==x||l.signal.aborted||(g=null,y="failed",n(d))})}return{uniforms:v,setEnvironment(u){if(h)return;Le(u),a=u;const l=u.atmosphere;v.sunDirection.value.fromArray(we(u.sun.direction)),v.moonDirection.value.fromArray(we(u.moon.direction));for(const[E,w]of Object.entries(Z))v[E].value=l[w];const d=new k(.26,.47,.68).lerp(new k(.22,.23,.4),l.warmth*.4).lerp(new k(.47,.54,.59),l.cloud*.65),f=new k(.76,.83,.81).lerp(new k(.97,.67,.43),l.warmth*.62).lerp(new k(.65,.71,.72),l.cloud*.52);v.skyTop.value.setRGB(.012,.026,.069).lerp(d,l.daylight),v.skyHorizon.value.setRGB(.058,.083,.15).lerp(f,l.daylight),v.fogColor.value.setRGB(.045,.072,.11).lerp(new k(.57,.66,.59).lerp(f,.24),l.daylight),C(),M()},setActive(u){h||(D=!!u,D?(C(),M()):(x++,g==null||g.abort(),g=null,m||(y="idle")))},diagnostics:()=>({catalog:y,starCount:(m==null?void 0:m.length)||0,skyBearing:I}),dispose(){h||(h=!0,D=!1,x++,g==null||g.abort(),g=null,p.dispose())}}}const Xe=`
 precision highp float;uniform vec2 resolution;uniform float time;uniform float energy;
 ${ze}
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1)),f.x),f.y);}
 float fbm(vec2 p){float r=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<5;i++){r+=noise(p)*a;p=m*p;a*=.48;}return r;}
 vec3 sky(vec3 rd){float y=max(rd.y,0.);vec3 c=celestialSky(rd);float light=max(dot(rd,sunDirection),0.);
 vec2 p=rd.xz/max(rd.y+.13,.13)*.8;float f=fbm(p*vec2(.6,2.7)+vec2(time*.003*(.3+windStrength),0));float cloud=smoothstep(.69-cloudCover*.34,.82-cloudCover*.28,f)*smoothstep(0.,.22,y);
 vec3 shade=atmosphereGrade(mix(vec3(.55,.61,.72),vec3(.91,.85,.77),smoothstep(.50,.70,f)))+pow(light,12.)*vec3(.10,.06,.02)*daylight;
 return mix(c,shade,cloud*.94);}

 float height(vec2 p){return (.8+windStrength*.7)*( sin(p.x*.65+time*.5)*.07+sin(p.y*.49-time*.37)*.09+sin(p.x*1.8+p.y*.92+time*.38)*.023+sin(p.y*3.8-time*.47+p.x)*.012+fbm(p*3.+vec2(time*.07,0))*.04);}
 void main(){vec2 uv=(gl_FragCoord.xy-resolution*.5)/resolution.y;vec3 ro=vec3(0.,2.9,-6.),rd=normalize(vec3(uv.x,uv.y-.06,1.2));vec3 c;
 if(rd.y>0.){c=sky(rd);float d=abs(rd.y-.008-fbm(vec2(rd.x*19.,.9))*.014);float land=smoothstep(.006,0.,d);c=mix(c,atmosphereGrade(vec3(.31,.43,.42)),land*smoothstep(.25,.65,abs(rd.x)));}
 else {float dist=-ro.y/rd.y;vec3 p=ro+rd*dist;float h=height(p.xz);dist=(h-ro.y)/rd.y;p=ro+rd*dist;float eps=.05;vec3 n=normalize(vec3(height(p.xz-vec2(eps,0))-height(p.xz+vec2(eps,0)),eps*2.,height(p.xz-vec2(0,eps))-height(p.xz+vec2(0,eps))));vec3 refl=reflect(rd,n);float fres=pow(1.-max(dot(-rd,n),0.),4.);vec3 deep=atmosphereGrade(vec3(.06,.17,.28)),shallow=atmosphereGrade(vec3(.16,.35,.41));c=mix(mix(deep,shallow,noise(p.xz*.25)*.25),sky(refl),.34+fres*.62);
 float spec=pow(max(dot(refl,sunDirection),0.),500.);c+=vec3(1.,.69,.33)*spec*(.65+energy*.22)*daylight;float foam=smoothstep(.96,1.,noise(p.xz*3.7+time*.12))*exp(-dist*.02);c+=foam*.04;float mist=1.-exp(-dist*.009);c=mix(c,fogColor,mist*.61);}
 c=pow(c,vec3(.94));float v=1.-.18*dot(uv,uv);gl_FragColor=vec4(weatherVeil(c*v,gl_FragCoord.xy/resolution,time),1.);}`,Qe=Object.freeze([{centre:[-25,-3,30],scale:[22,19,35],period:105},{centre:[-23,14,47],scale:[14,12,20],period:105},{centre:[33,0,83],scale:[24,18,36],period:130},{centre:[27,16,92],scale:[14,16,22],period:130},{centre:[-8,-12,147],scale:[38,16,40],period:160}].map(t=>Object.freeze({...t,centre:Object.freeze(t.centre),scale:Object.freeze(t.scale)}))),ke=t=>Number.isInteger(t)?`${t}.`:String(t),ye=t=>`vec3(${t.map(ke).join(",")})`,Ye=Qe.map((t,c)=>`${c===0?"float banks=":"banks=max(banks,"}ellipsoid(q,${ye(t.centre)},${ye(t.scale)},${ke(t.period)})${c===0?";":");"}`).join(`
`),Je=.2,Ze=.22,be=3;function et(){let t=!1,c=0,n=0,i=0,o=0;return{setWind(r){if(typeof r!="number"||!Number.isFinite(r)||r<0||r>1)throw new TypeError("Cloud wind must be finite and in 0..1");o=.45+.55*r,t||(i=o,t=!0)},advance(r){if(typeof r!="number"||!Number.isFinite(r)||r<0)throw new TypeError("Cloud motion delta must be finite and non-negative");if(!t)throw new Error("Cloud motion requires a host wind input");const p=Math.min(Je,r);if(p===0)return;const v=i-o,h=-Math.expm1(-p/be);n+=Ze*(o*p+v*be*h),i-=v*h,c+=p},snapshot(){return{initialized:t,seconds:c,travelX:n,windScale:i,targetScale:o}}}}const tt=`
precision highp float;precision highp sampler3D;
uniform sampler3D field;uniform vec2 resolution;uniform vec2 gaze;
uniform float time;uniform float energy;uniform float uTravel;uniform float uWindScale;out vec4 fragColor;
uniform float cloudSolar,cloudLunar;
${ze.replaceAll("texture2D(","texture(")}
float n3(vec3 p){return texture(field,p/64.).r;}
float fbm(vec3 p){return n3(p)*.56+n3(p*2.03+17.)*.27+n3(p*4.09+31.)*.12+n3(p*8.01+13.)*.05;}
float ellipsoid(vec3 p,vec3 centre,vec3 scale,float period){
 vec3 local=p-centre;
 // Wrap only the bank's distance, outside its support. Shared detailed fields
 // remain unwrapped, so the lower deck cannot jump across a repeat seam.
 local.x=mod(local.x+period*.5,period)-period*.5;
 return 1.-length(local/scale);
}
float density(vec3 p){
 // One continuous wind field transports the whole cloud volume.
 // The mass, warp and erosion share this coordinate; detail never boils on top.
 float depth=smoothstep(25.,145.,p.z);
 // A single translation carries form and detail together. Depth-dependent
 // speed accumulated shear for every second alive, stretching banks into
 // ridges at long phases. Perspective already gives nearby banks more motion.
 p.x-=uTravel;
 // Bounded depth drift and lift retain the inhabited composition over hours.
 p.z-=.8*sin(time*.008)*uWindScale;
 p.y-=.32*sin(time*.012)*(1.-depth);
 // Broad weather shapes first, detailed erosion confined to their boundaries.
 vec3 warp=(vec3(fbm(p*.11),fbm(p*.115+23.),fbm(p*.11+47.))-.5)*8.5;
 vec3 q=p+warp;
 // A nearer shaded left wall, one sunlit crest beyond, and an opening to distance.
 ${Ye}
 float under=clamp((-9.+fbm(p*.055)*4.5-p.y)*.12,0.,1.);
 float form=max(banks*(1.42+cloudCover*.63),under);
 // Breathing happens at weather scale (roughly three minutes), with only a
 // small change in boundary density; there is no independently animated grit.
 float formation=.025*sin(time*.035+fbm(p*.035)*6.2831853);
 float erosion=(1.-fbm(p*.49))*.84;
 float detail=(1.-fbm(p*.98))*(1.-smoothstep(.04,.55,form))*.08;
 return clamp(form-erosion-detail+formation+(cloudCover-.3)*.12,0.,1.)*(1.2+cloudCover*.8);
}
float phase(float c,float g){return (1.-g*g)/pow(max(.03,1.+g*g-2.*g*c),1.5);}
float cloudDirect(vec3 pos,vec3 light){
 float shadow=density(pos+light*.7)*.6+density(pos+light*2.2)*1.2+density(pos+light*5.)*1.9+density(pos+light*10.)*2.4;
 return exp(-shadow*.75);
}
void main(){
 vec2 uv=(gl_FragCoord.xy-resolution*.5)/resolution.y;
 vec3 ro=vec3(0.,8.4,-20.); // The resident rests; the weather moves around them.
 vec3 rd=normalize(vec3(uv.x+gaze.x*.07,uv.y-.055+gaze.y*.035,1.07));
 vec3 background=celestialSky(rd),sum=vec3(0.);float trans=1.,t=.3;
 float sunForward=phase(dot(rd,sunDirection),.56)*.12;
 float moonForward=phase(dot(rd,moonDirection),.56)*.12;
 for(int i=0;i<88;i++){
  float stepSize=.20+t*.047;vec3 pos=ro+rd*t;float d=density(pos);
  if(d>.014){
   // A source contributes only when the host's altitude/phase permits it.
   // Keep each direction independent; interpolating sun/moon directions can
   // collapse opposite vectors or swing shadows through an invented sky.
   float sunDirect=0.,moonDirect=0.;
   if(cloudSolar>0.)sunDirect=cloudDirect(pos,sunDirection);
   if(cloudLunar>0.)moonDirect=cloudDirect(pos,moonDirection);
   float high=clamp((pos.y+3.)/19.,0.,1.);
   vec3 shadow=mix(vec3(.20,.28,.40),vec3(.44,.52,.60),high);
   vec3 lit=mix(vec3(.99,.96,.86),vec3(1.,.76,.52),warmth*.7);
   float sunScatter=clamp(sunDirect*(.89+sunForward),0.,1.)*cloudSolar;
   float moonScatter=clamp(moonDirect*(.89+moonForward),0.,1.)*cloudLunar;
   vec3 pigment=shadow+(lit-shadow)*sunScatter+(vec3(.72,.80,.95)-shadow)*moonScatter;
   pigment+=vec3(1.,.86,.66)*pow(sunDirect,3.)*.15*cloudSolar;
   pigment+=vec3(.62,.74,1.)*pow(moonDirect,3.)*.15*cloudLunar;
   float direct=max(sunDirect*cloudSolar,moonDirect*cloudLunar);
   pigment=atmosphereGrade(pigment);pigment+=vec3(.06,.035,.07)*energy*direct;
   float haze=1.-exp(-t*.0045);pigment=mix(pigment,background,haze*.65);
   float a=1.-exp(-d*stepSize*1.12);sum+=trans*pigment*a;trans*=1.-a;
  }
  if(trans<.008||t>165.)break;t+=stepSize;
 }
 vec3 color=sum+trans*background;
 // Fine sun-facing vapour, held below the contrast of the main banks.
 float halo=pow(max(dot(rd,sunDirection),0.),24.)*trans;
 color+=vec3(1.,.87,.65)*halo*.11*daylight*cloudSolar;
 fragColor=vec4(color,1.);
}`,ot=.16,xe=(t,c,n)=>{const i=Math.max(0,Math.min(1,(n-t)/(c-t)));return i*i*(3-2*i)},Se=(t,c)=>{if(typeof t!="number"||!Number.isFinite(t)||t<-90||t>90)throw new TypeError(`Cloud ${c} altitude must be explicit degrees in -90..90`);return t};function De(t){var p,v,h;const c=Se((p=t==null?void 0:t.sun)==null?void 0:p.altitude,"sun"),n=Se((v=t==null?void 0:t.moon)==null?void 0:v.altitude,"moon"),i=(h=t==null?void 0:t.moon)==null?void 0:h.fraction;if(typeof i!="number"||!Number.isFinite(i)||i<0||i>1)throw new TypeError("Cloud moon illumination must be explicit in 0..1");const o=xe(-6,6,c),r=ot*xe(0,8,n)*i*(1-o);return{solar:o,lunar:r}}const rt="2026-09-07.4",J=.23,Ee="void main(){gl_Position=vec4(position.xy,0.,1.);}";function nt(){let t=97054;const c=new Uint8Array(4096*64);for(let i=0;i<c.length;i++)t=Math.imul(t,1664525)+1013904223>>>0,c[i]=Math.floor(t/4294967296*256);const n=new Ie(c,64,64,64);return n.format=Ve,n.type=Ue,n.minFilter=n.magFilter=He,n.wrapS=n.wrapT=n.wrapR=Ce,n.unpackAlignment=1,n.needsUpdate=!0,n}function ct(t,c=()=>{},n={}){return it(t,c,n)}function it(t,c=()=>{},n={},i={}){var ue,fe,me;const o=t.ownerDocument||globalThis.document,r=(o==null?void 0:o.defaultView)||globalThis,p=i.now||(()=>performance.now()),v=i.requestFrame||(e=>r.requestAnimationFrame(e)),h=i.cancelFrame||(e=>r.cancelAnimationFrame(e)),D=i.ResizeObserver??globalThis.ResizeObserver;let a,m,g,x,S,y,C,M,u=!1,l=!1,d=!1,f=!1,E=!1,w=null,T=null,z="balanced",F=0,P=0,G=0,N=null,$=0,V=0;const U=Ge(),_=et(),ee=()=>z==="full"?1e3/30:1e3/20;let te=0,oe=0,re=0;const ne=new Set;let W="",H=null;const ie=new _e,Ae=new Be,K=()=>{var e,s;return{renderer:"authored-atmosphere",version:rt,scene:w,loaded:!!w,active:A(),still:l,disposed:d,failed:f,quality:z,frame:G,lastPaint:N,sceneTime:w==="clouds"?_.snapshot().seconds:P,scoreLevel:$,cloudMotion:w==="clouds"?_.snapshot():void 0,cloudLight:w==="clouds"&&T?De(T):void 0,frameMs:te,frameMsMeaning:"CPU render submission duration; not GPU completion time",drawCalls:oe,triangles:re,reaction:w==="ocean"?{kind:"specular gain",maximumRelativeGain:J*.22/.65}:{kind:"additive RGB pigment",maximumRGB:[.06,.035,.07].map(b=>b*J)},width:((e=a==null?void 0:a.domElement)==null?void 0:e.width)||0,height:((s=a==null?void 0:a.domElement)==null?void 0:s.height)||0,...m==null?void 0:m.diagnostics()}};function X(e,s={}){c({...K(),status:e,...s})}function ae(){F&&h(F),F=0,U.reset()}function A(){return u&&!d&&!f&&!(o!=null&&o.hidden)&&!!w&&!!T}function se(){var e,s,b,L;E||(E=!0,ae(),M==null||M.disconnect(),(e=o==null?void 0:o.removeEventListener)==null||e.call(o,"visibilitychange",ce),(s=r.removeEventListener)==null||s.call(r,"resize",Q),(b=t.removeEventListener)==null||b.call(t,"webglcontextlost",de),m==null||m.dispose(),x==null||x.dispose(),g==null||g.dispose(),S==null||S.dispose(),y==null||y.dispose(),a==null||a.dispose(),(L=a==null?void 0:a.forceContextLoss)==null||L.call(a))}function q(e){var b;if(d||f)return;f=!0,u=!1;const s=e instanceof Error?e:new Error(String(e));se(),X("failed",{message:s.message}),(b=n.onError)==null||b.call(n,s)}function Me(){const e=t.getBoundingClientRect();if(!Number.isFinite(e.width)||!Number.isFinite(e.height)||e.width<1||e.height<1)return!1;const s=Math.min(Number(r.devicePixelRatio)||1,1.35),b=w==="clouds"?z==="full"?1:.75:z==="full"?s:Math.min(s,1),L=`${e.width}:${e.height}:${b}`;return L!==W&&(W=L,a.setPixelRatio(b),a.setSize(e.width,e.height,!1),a.getDrawingBufferSize(S.uniforms.resolution.value)),!0}function B(){var e,s,b,L;if(!A())return!1;try{if(!Me())return!1;const R=_.snapshot();S.uniforms.time.value=w==="clouds"?R.seconds:P,S.uniforms.energy.value=l?0:$,y.uniforms.uTravel.value=R.travelX,y.uniforms.uWindScale.value=R.windScale,S.uniforms.gaze.value.set(0,0);const Te=p();if(a.render(ie,Ae),te=Math.max(0,p()-Te),oe=((e=a.info.render)==null?void 0:e.calls)||0,re=((s=a.info.render)==null?void 0:s.triangles)||0,H)throw H;const Y=a.getContext();if(Y.isContextLost())throw new Error("Atmosphere WebGL context was lost");if((b=a.info.programs)!=null&&b.some(j=>{var pe;return((pe=j.diagnostics)==null?void 0:pe.runnable)===!1}))throw new Error("Atmosphere shader failed to compile or link");if(!ne.has(C.material)){const j=Y.getError();if(j!==Y.NO_ERROR)throw new Error(`Atmosphere draw failed (WebGL ${j})`);ne.add(C.material)}return G++,N=p(),(L=n.onPaint)==null||L.call(n,{...K(),frame:G,lastPaint:N}),!0}catch(R){return q(R),!1}}function le(e){if(F=0,!A()||l)return;const s=U.step(e,ee());s!==null&&(P+=s,w==="clouds"&&_.advance(s),$+=(V-$)*Math.min(1,s*3),B()),A()&&!l&&(F=v(le))}function Fe(){ae(),A()&&!l&&(U.step(p(),ee()),F=v(le))}function O(){d||f||(m.setActive(A()),A()&&B(),Fe())}function Q(){A()&&B()}function ce(){d||f||O()}function de(e){e.preventDefault(),q(new Error("Atmosphere WebGL context was lost"))}try{a=(i.createRenderer||(s=>new Re(s)))({canvas:t,antialias:!1,alpha:!1,powerPreference:"low-power"}),a.debug.checkShaderErrors=!0,a.debug.onShaderError=(s,b,L,R)=>{H=new Error(`Atmosphere shader failed: ${s.getProgramInfoLog(b)||s.getShaderInfoLog(R)||s.getShaderInfoLog(L)||"unknown compiler error"}`)},m=(i.createSky||Ke)({document:o,onReady:()=>{A()&&B()},onError:q}),x=nt(),g=new We(2,2);const e={...m.uniforms,time:{value:0},energy:{value:0},uTravel:{value:0},uWindScale:{value:0},cloudSolar:{value:0},cloudLunar:{value:0},gaze:{value:new ge},resolution:{value:new ge},field:{value:x}};S=new ve({uniforms:e,vertexShader:Ee,fragmentShader:Xe,depthTest:!1,depthWrite:!1}),y=new ve({uniforms:e,vertexShader:Ee,fragmentShader:tt,glslVersion:qe,depthTest:!1,depthWrite:!1}),C=new je(g,S),C.frustumCulled=!1,ie.add(C),typeof D=="function"?(M=new D(Q),M.observe(t)):(ue=r.addEventListener)==null||ue.call(r,"resize",Q),(fe=o==null?void 0:o.addEventListener)==null||fe.call(o,"visibilitychange",ce),(me=t.addEventListener)==null||me.call(t,"webglcontextlost",de)}catch(e){throw q(e),e}return{setPlace(e){if(!(d||f)){if(e!=="ocean"&&e!=="clouds")throw new TypeError("Atmosphere place must be ocean or clouds");w!==e&&(X("loading",{requestedPlace:e}),w=e,C.material=e==="clouds"?y:S,W="",X("loaded"),O())}},setEnvironment(e){if(d||f)return;Le(e);const s=De(e);_.setWind(e.atmosphere.wind),T=e,m.setEnvironment(e),y.uniforms.cloudSolar.value=s.solar,y.uniforms.cloudLunar.value=s.lunar,O()},setActive(e){d||f||u===!!e||(u=!!e,O())},setStill(e){d||f||l===!!e||(l=!!e,l&&($=0,V=0),O())},setQuality(e){if(!(d||f)){if(e!=="balanced"&&e!=="full")throw new TypeError("Atmosphere quality must be balanced or full");z!==e&&(z=e,W="",O())}},setLevel(e){d||f||(V=l?0:Math.max(0,Math.min(1,Number.isFinite(e)?e:0))*J)},renderOnce:B,diagnostics:K,dispose(){d||(d=!0,u=!1,se())}}}export{rt as ATMOSPHERE_VERSION,J as MAX_SCORE_REACTION,it as createAtmosphereEngine,ct as createAtmosphereWorld,nt as createCloudField};
