var pc=Object.defineProperty;var mc=(u,e,t)=>e in u?pc(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var Kt=(u,e,t)=>(mc(u,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="151",di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gc=0,yo=1,vc=2,vl=1,xc=2,os=3,In=0,Xt=1,gn=2,Gn=0,Ni=1,_o=2,Mo=3,bo=4,yc=5,Ii=100,_c=101,Mc=102,wo=103,So=104,bc=200,wc=201,Sc=202,Ac=203,xl=204,yl=205,Ec=206,Tc=207,Cc=208,Rc=209,Lc=210,Pc=0,Ic=1,Dc=2,kr=3,Nc=4,Bc=5,Fc=6,Uc=7,_l=0,Oc=1,zc=2,Pn=0,Vc=1,kc=2,Hc=3,Gc=4,Wc=5,Ml=300,Oi=301,zi=302,Hr=303,Gr=304,er=306,Vi=1e3,rn=1001,Qs=1002,Ct=1003,Wr=1004,js=1005,qt=1006,bl=1007,ii=1008,si=1009,qc=1010,Xc=1011,wl=1012,jc=1013,Qn=1014,Hn=1015,hs=1016,Yc=1017,$c=1018,Bi=1020,Kc=1021,on=1023,Zc=1024,Jc=1025,ti=1026,ki=1027,Qc=1028,eh=1029,th=1030,nh=1031,ih=1033,rr=33776,or=33777,ar=33778,lr=33779,Ao=35840,Eo=35841,To=35842,Co=35843,sh=36196,Ro=37492,Lo=37496,Po=37808,Io=37809,Do=37810,No=37811,Bo=37812,Fo=37813,Uo=37814,Oo=37815,zo=37816,Vo=37817,ko=37818,Ho=37819,Go=37820,Wo=37821,cr=36492,rh=36283,qo=36284,Xo=36285,jo=36286,us=2300,Hi=2301,hr=2302,Yo=2400,$o=2401,Ko=2402,oh=2500,ah=0,Sl=1,qr=2,ri=3e3,dt=3001,lh=3200,ch=3201,Al=0,hh=1,pn="srgb",ds="srgb-linear",El="display-p3",ur=7680,uh=519,Xr=35044,Zo="300 es",jr=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const ls=Math.PI/180,Gi=180/Math.PI;function dn(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[u&255]+Bt[u>>8&255]+Bt[u>>16&255]+Bt[u>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function It(u,e,t){return Math.max(e,Math.min(t,u))}function io(u,e){return(u%e+e)%e}function dh(u,e,t,n,i){return n+(u-e)*(i-n)/(t-e)}function fh(u,e,t){return u!==e?(t-u)/(e-u):0}function cs(u,e,t){return(1-t)*u+t*e}function ph(u,e,t,n){return cs(u,e,1-Math.exp(-t*n))}function mh(u,e=1){return e-Math.abs(io(u,e*2)-e)}function gh(u,e,t){return u<=e?0:u>=t?1:(u=(u-e)/(t-e),u*u*(3-2*u))}function vh(u,e,t){return u<=e?0:u>=t?1:(u=(u-e)/(t-e),u*u*u*(u*(u*6-15)+10))}function xh(u,e){return u+Math.floor(Math.random()*(e-u+1))}function yh(u,e){return u+Math.random()*(e-u)}function _h(u){return u*(.5-Math.random())}function Mh(u){u!==void 0&&(Jo=u);let e=Jo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bh(u){return u*ls}function wh(u){return u*Gi}function Yr(u){return(u&u-1)===0&&u!==0}function Tl(u){return Math.pow(2,Math.ceil(Math.log(u)/Math.LN2))}function Cl(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function Sh(u,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),a=r(t/2),c=s((e+n)/2),h=r((e+n)/2),l=s((e-n)/2),d=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":u.set(o*h,a*l,a*d,o*c);break;case"YZY":u.set(a*d,o*h,a*l,o*c);break;case"ZXZ":u.set(a*l,a*d,o*h,o*c);break;case"XZX":u.set(o*h,a*g,a*p,o*c);break;case"YXY":u.set(a*p,o*h,a*g,o*c);break;case"ZYZ":u.set(a*g,a*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function mt(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:ls,RAD2DEG:Gi,generateUUID:dn,clamp:It,euclideanModulo:io,mapLinear:dh,inverseLerp:fh,lerp:cs,damp:ph,pingpong:mh,smoothstep:gh,smootherstep:vh,randInt:xh,randFloat:yh,randFloatSpread:_h,seededRandom:Mh,degToRad:bh,radToDeg:wh,isPowerOfTwo:Yr,ceilPowerOfTwo:Tl,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:Sh,normalize:mt,denormalize:Rn};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,a,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],c=n[1],h=n[4],l=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],y=i[1],_=i[4],x=i[7],M=i[2],L=i[5],O=i[8];return s[0]=r*v+o*y+a*M,s[3]=r*m+o*_+a*L,s[6]=r*f+o*x+a*O,s[1]=c*v+h*y+l*M,s[4]=c*m+h*_+l*L,s[7]=c*f+h*x+l*O,s[2]=d*v+p*y+g*M,s[5]=d*m+p*_+g*L,s[8]=d*f+p*x+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*a+i*s*c-i*r*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],c=e[7],h=e[8],l=h*r-o*c,d=o*a-h*s,p=c*s-r*a,g=t*l+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=l*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*r)*v,e[3]=d*v,e[4]=(h*t-i*a)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*a-c*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*r+c*o)+r+e,-i*c,i*a,-i*(-c*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dr.makeScale(e,t)),this}rotate(e){return this.premultiply(dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(dr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dr=new rt;function Rl(u){for(let e=u.length-1;e>=0;--e)if(u[e]>=65535)return!0;return!1}function fs(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function Fi(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function fr(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const Eh=new rt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Th=new rt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ch(u){return u.convertSRGBToLinear().applyMatrix3(Th)}function Rh(u){return u.applyMatrix3(Eh).convertLinearToSRGB()}const Lh={[ds]:u=>u,[pn]:u=>u.convertSRGBToLinear(),[El]:Ch},Ph={[ds]:u=>u,[pn]:u=>u.convertLinearToSRGB(),[El]:Rh},Zt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(u){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!u},get workingColorSpace(){return ds},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,t){if(this.enabled===!1||e===t||!e||!t)return u;const n=Lh[e],i=Ph[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(u))},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}};let pi;class Ll{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=fs("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Fi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Pl{constructor(e=null){this.isSource=!0,this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(pr(i[r].image)):s.push(pr(i[r]))}else s=pr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function pr(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?Ll.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class Dt extends hi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=rn,i=rn,s=qt,r=ii,o=on,a=si,c=Dt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=dn(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ml;Dt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,c=a[0],h=a[4],l=a[8],d=a[1],p=a[5],g=a[9],v=a[2],m=a[6],f=a[10];if(Math.abs(h-d)<.01&&Math.abs(l-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,M=(f+1)/2,L=(h+d)/4,O=(l+v)/4,I=(g+m)/4;return _>x&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=L/n,s=O/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=L/i,s=I/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=O/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(l-v)*(l-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(l-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oi extends hi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Il extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dh extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],c=n[i+1],h=n[i+2],l=n[i+3];const d=s[r+0],p=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=a,e[t+1]=c,e[t+2]=h,e[t+3]=l;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(l!==v||a!==d||c!==p||h!==g){let m=1-o;const f=a*d+c*p+h*g+l*v,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const M=Math.sqrt(_),L=Math.atan2(M,f*y);m=Math.sin(m*L)/M,o=Math.sin(o*L)/M}const x=o*y;if(a=a*m+d*x,c=c*m+p*x,h=h*m+g*x,l=l*m+v*x,m===1-o){const M=1/Math.sqrt(a*a+c*c+h*h+l*l);a*=M,c*=M,h*=M,l*=M}}e[t]=a,e[t+1]=c,e[t+2]=h,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],a=n[i+1],c=n[i+2],h=n[i+3],l=s[r],d=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+h*l+a*p-c*d,e[t+1]=a*g+h*d+c*l-o*p,e[t+2]=c*g+h*p+o*d-a*l,e[t+3]=h*g-o*l-a*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,a=Math.sin,c=o(n/2),h=o(i/2),l=o(s/2),d=a(n/2),p=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=d*h*l+c*p*g,this._y=c*p*l-d*h*g,this._z=c*h*g+d*p*l,this._w=c*h*l-d*p*g;break;case"YXZ":this._x=d*h*l+c*p*g,this._y=c*p*l-d*h*g,this._z=c*h*g-d*p*l,this._w=c*h*l+d*p*g;break;case"ZXY":this._x=d*h*l-c*p*g,this._y=c*p*l+d*h*g,this._z=c*h*g+d*p*l,this._w=c*h*l-d*p*g;break;case"ZYX":this._x=d*h*l-c*p*g,this._y=c*p*l+d*h*g,this._z=c*h*g-d*p*l,this._w=c*h*l+d*p*g;break;case"YZX":this._x=d*h*l+c*p*g,this._y=c*p*l+d*h*g,this._z=c*h*g-d*p*l,this._w=c*h*l-d*p*g;break;case"XZY":this._x=d*h*l-c*p*g,this._y=c*p*l-d*h*g,this._z=c*h*g+d*p*l,this._w=c*h*l+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],h=t[6],l=t[10],d=n+o+l;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-a)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,a=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*a,this._y=i*h+r*a+s*o-n*c,this._z=s*h+r*c+n*a-i*o,this._w=r*h-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),h=Math.atan2(c,o),l=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*l+this._w*d,this._x=n*l+this._x*d,this._y=i*l+this._y*d,this._z=s*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,a=e.w,c=a*t+r*i-o*n,h=a*n+o*t-s*i,l=a*i+s*n-r*t,d=-s*t-r*n-o*i;return this.x=c*a+d*-s+h*-o-l*-r,this.y=h*a+d*-r+l*-s-c*-o,this.z=l*a+d*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new J,Qo=new _n;class Dn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),mi.copy(e.boundingBox),mi.applyMatrix4(e.matrixWorld),this.union(mi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)wn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(wn)}else i.boundingBox===null&&i.computeBoundingBox(),mi.copy(i.boundingBox),mi.applyMatrix4(e.matrixWorld),this.union(mi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Ms.subVectors(this.max,Zi),gi.subVectors(e.a,Zi),vi.subVectors(e.b,Zi),xi.subVectors(e.c,Zi),Bn.subVectors(vi,gi),Fn.subVectors(xi,vi),Xn.subVectors(gi,xi);let t=[0,-Bn.z,Bn.y,0,-Fn.z,Fn.y,0,-Xn.z,Xn.y,Bn.z,0,-Bn.x,Fn.z,0,-Fn.x,Xn.z,0,-Xn.x,-Bn.y,Bn.x,0,-Fn.y,Fn.x,0,-Xn.y,Xn.x,0];return!gr(t,gi,vi,xi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,gi,vi,xi,Ms))?!1:(bs.crossVectors(Bn,Fn),t=[bs.x,bs.y,bs.z],gr(t,gi,vi,xi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new J,new J,new J,new J,new J,new J,new J,new J],wn=new J,mi=new Dn,gi=new J,vi=new J,xi=new J,Bn=new J,Fn=new J,Xn=new J,Zi=new J,Ms=new J,bs=new J,jn=new J;function gr(u,e,t,n,i){for(let s=0,r=u.length-3;s<=r;s+=3){jn.fromArray(u,s);const o=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),a=e.dot(jn),c=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>o)return!1}return!0}const Nh=new Dn,Ji=new J,vr=new J;class Nn{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(vr)),this.expandByPoint(Ji.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new J,xr=new J,ws=new J,Un=new J,yr=new J,Ss=new J,_r=new J;class so{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xr.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(xr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ws),o=Un.dot(this.direction),a=-Un.dot(ws),c=Un.lengthSq(),h=Math.abs(1-r*r);let l,d,p,g;if(h>0)if(l=r*a-o,d=r*o-a,g=s*h,l>=0)if(d>=-g)if(d<=g){const v=1/h;l*=v,d*=v,p=l*(l+r*d+2*o)+d*(r*l+d+2*a)+c}else d=s,l=Math.max(0,-(r*d+o)),p=-l*l+d*(d+2*a)+c;else d=-s,l=Math.max(0,-(r*d+o)),p=-l*l+d*(d+2*a)+c;else d<=-g?(l=Math.max(0,-(-r*s+o)),d=l>0?-s:Math.min(Math.max(-s,-a),s),p=-l*l+d*(d+2*a)+c):d<=g?(l=0,d=Math.min(Math.max(-s,-a),s),p=d*(d+2*a)+c):(l=Math.max(0,-(r*s+o)),d=l>0?s:Math.min(Math.max(-s,-a),s),p=-l*l+d*(d+2*a)+c);else d=r>0?-s:s,l=Math.max(0,-(r*d+o)),p=-l*l+d*(d+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(xr).addScaledVector(ws,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,a;const c=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),l>=0?(o=(e.min.z-d.z)*l,a=(e.max.z-d.z)*l):(o=(e.max.z-d.z)*l,a=(e.min.z-d.z)*l),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,s){yr.subVectors(t,e),Ss.subVectors(n,e),_r.crossVectors(yr,Ss);let r=this.direction.dot(_r),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Un.subVectors(this.origin,e);const a=o*this.direction.dot(Ss.crossVectors(Un,Ss));if(a<0)return null;const c=o*this.direction.dot(yr.cross(Un));if(c<0||a+c>r)return null;const h=-o*Un.dot(_r);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,a,c,h,l,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=o,f[13]=a,f[2]=c,f[6]=h,f[10]=l,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),r=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const d=r*h,p=r*l,g=o*h,v=o*l;t[0]=a*h,t[4]=-a*l,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*a,t[2]=v-d*c,t[6]=g+p*c,t[10]=r*a}else if(e.order==="YXZ"){const d=a*h,p=a*l,g=c*h,v=c*l;t[0]=d+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*l,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=r*a}else if(e.order==="ZXY"){const d=a*h,p=a*l,g=c*h,v=c*l;t[0]=d-v*o,t[4]=-r*l,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=v-d*o,t[2]=-r*c,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const d=r*h,p=r*l,g=o*h,v=o*l;t[0]=a*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=a*l,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const d=r*a,p=r*c,g=o*a,v=o*c;t[0]=a*h,t[4]=v-d*l,t[8]=g*l+p,t[1]=l,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*l+g,t[10]=d-v*l}else if(e.order==="XZY"){const d=r*a,p=r*c,g=o*a,v=o*c;t[0]=a*h,t[4]=-l,t[8]=c*h,t[1]=d*l+v,t[5]=r*h,t[9]=p*l-g,t[2]=g*l-p,t[6]=o*h,t[10]=v*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,Fh)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),On.crossVectors(n,Jt),On.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),On.crossVectors(n,Jt)),On.normalize(),As.crossVectors(Jt,On),i[0]=On.x,i[4]=As.x,i[8]=Jt.x,i[1]=On.y,i[5]=As.y,i[9]=Jt.y,i[2]=On.z,i[6]=As.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],c=n[12],h=n[1],l=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],y=n[3],_=n[7],x=n[11],M=n[15],L=i[0],O=i[4],I=i[8],b=i[12],w=i[1],N=i[5],U=i[9],P=i[13],k=i[2],X=i[6],ie=i[10],H=i[14],B=i[3],ee=i[7],$=i[11],V=i[15];return s[0]=r*L+o*w+a*k+c*B,s[4]=r*O+o*N+a*X+c*ee,s[8]=r*I+o*U+a*ie+c*$,s[12]=r*b+o*P+a*H+c*V,s[1]=h*L+l*w+d*k+p*B,s[5]=h*O+l*N+d*X+p*ee,s[9]=h*I+l*U+d*ie+p*$,s[13]=h*b+l*P+d*H+p*V,s[2]=g*L+v*w+m*k+f*B,s[6]=g*O+v*N+m*X+f*ee,s[10]=g*I+v*U+m*ie+f*$,s[14]=g*b+v*P+m*H+f*V,s[3]=y*L+_*w+x*k+M*B,s[7]=y*O+_*N+x*X+M*ee,s[11]=y*I+_*U+x*ie+M*$,s[15]=y*b+_*P+x*H+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],c=e[13],h=e[2],l=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*a*l-i*c*l-s*o*d+n*c*d+i*o*p-n*a*p)+v*(+t*a*p-t*c*d+s*r*d-i*r*p+i*c*h-s*a*h)+m*(+t*c*l-t*o*p-s*r*l+n*r*p+s*o*h-n*c*h)+f*(-i*o*h-t*a*l+t*o*d+i*r*l-n*r*d+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],c=e[7],h=e[8],l=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=l*m*c-v*d*c+v*a*p-o*m*p-l*a*f+o*d*f,_=g*d*c-h*m*c-g*a*p+r*m*p+h*a*f-r*d*f,x=h*v*c-g*l*c+g*o*p-r*v*p-h*o*f+r*l*f,M=g*l*a-h*v*a-g*o*d+r*v*d+h*o*m-r*l*m,L=t*y+n*_+i*x+s*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=y*O,e[1]=(v*d*s-l*m*s-v*i*p+n*m*p+l*i*f-n*d*f)*O,e[2]=(o*m*s-v*a*s+v*i*c-n*m*c-o*i*f+n*a*f)*O,e[3]=(l*a*s-o*d*s-l*i*c+n*d*c+o*i*p-n*a*p)*O,e[4]=_*O,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*O,e[6]=(g*a*s-r*m*s-g*i*c+t*m*c+r*i*f-t*a*f)*O,e[7]=(r*d*s-h*a*s+h*i*c-t*d*c-r*i*p+t*a*p)*O,e[8]=x*O,e[9]=(g*l*s-h*v*s-g*n*p+t*v*p+h*n*f-t*l*f)*O,e[10]=(r*v*s-g*o*s+g*n*c-t*v*c-r*n*f+t*o*f)*O,e[11]=(h*o*s-r*l*s-h*n*c+t*l*c+r*n*p-t*o*p)*O,e[12]=M*O,e[13]=(h*v*i-g*l*i+g*n*d-t*v*d-h*n*m+t*l*m)*O,e[14]=(g*o*i-r*v*i-g*n*a+t*v*a+r*n*m-t*o*m)*O,e[15]=(r*l*i-h*o*i+h*n*a-t*l*a-r*n*d+t*o*d)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,a=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*a,c*a+i*o,0,c*o+i*a,h*o+n,h*a-i*r,0,c*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,c=s+s,h=r+r,l=o+o,d=s*c,p=s*h,g=s*l,v=r*h,m=r*l,f=o*l,y=a*c,_=a*h,x=a*l,M=n.x,L=n.y,O=n.z;return i[0]=(1-(v+f))*M,i[1]=(p+x)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(p-x)*L,i[5]=(1-(d+f))*L,i[6]=(m+y)*L,i[7]=0,i[8]=(g+_)*O,i[9]=(m-y)*O,i[10]=(1-(d+v))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=yi.set(i[0],i[1],i[2]).length();const r=yi.set(i[4],i[5],i[6]).length(),o=yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/s,h=1/r,l=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=l,ln.elements[9]*=l,ln.elements[10]*=l,t.setFromRotationMatrix(ln),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,a=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),l=(n+i)/(n-i),d=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=l,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,a=1/(t-e),c=1/(n-i),h=1/(r-s),l=(t+e)*a,d=(n+i)*c,p=(r+s)*h;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-l,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yi=new J,ln=new st,Bh=new J(0,0,0),Fh=new J(1,1,1),On=new J,As=new J,Jt=new J,ea=new st,ta=new _n;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],c=i[5],h=i[9],l=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ea,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ta.setFromEuler(this),this.setFromQuaternion(ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uh=0;const na=new J,_i=new _n,An=new st,Es=new J,Qi=new J,Oh=new J,zh=new _n,ia=new J(1,0,0),sa=new J(0,1,0),ra=new J(0,0,1),Vh={type:"added"},oa={type:"removed"};class xt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new J,t=new tr,n=new _n,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new rt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(ia,e)}rotateY(e){return this.rotateOnAxis(sa,e)}rotateZ(e){return this.rotateOnAxis(ra,e)}translateOnAxis(e,t){return na.copy(e).applyQuaternion(this.quaternion),this.position.add(na.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ia,e)}translateY(e){return this.translateOnAxis(sa,e)}translateZ(e){return this.translateOnAxis(ra,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Qi,Es,this.up):An.lookAt(Es,Qi,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(An),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const l=a[c];s(e.shapes,l)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),c=r(e.textures),h=r(e.images),l=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const c in o){const h=o[c];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new J(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new J,En=new J,Mr=new J,Tn=new J,Mi=new J,bi=new J,aa=new J,br=new J,wr=new J,Sr=new J;let Ts=!1;class un{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),En.subVectors(n,t),Mr.subVectors(e,t);const r=cn.dot(cn),o=cn.dot(En),a=cn.dot(Mr),c=En.dot(En),h=En.dot(Mr),l=r*c-o*o;if(l===0)return s.set(-2,-1,-1);const d=1/l,p=(c*a-o*h)*d,g=(r*h-o*a)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,i,s,r,o,a){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),this.getInterpolation(e,t,n,i,s,r,o,a)}static getInterpolation(e,t,n,i,s,r,o,a){return this.getBarycoord(e,t,n,i,Tn),a.setScalar(0),a.addScaledVector(s,Tn.x),a.addScaledVector(r,Tn.y),a.addScaledVector(o,Tn.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),En.subVectors(e,t),cn.cross(En).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Mi.subVectors(i,n),bi.subVectors(s,n),br.subVectors(e,n);const a=Mi.dot(br),c=bi.dot(br);if(a<=0&&c<=0)return t.copy(n);wr.subVectors(e,i);const h=Mi.dot(wr),l=bi.dot(wr);if(h>=0&&l<=h)return t.copy(i);const d=a*l-h*c;if(d<=0&&a>=0&&h<=0)return r=a/(a-h),t.copy(n).addScaledVector(Mi,r);Sr.subVectors(e,s);const p=Mi.dot(Sr),g=bi.dot(Sr);if(g>=0&&p<=g)return t.copy(s);const v=p*c-a*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(bi,o);const m=h*g-p*l;if(m<=0&&l-h>=0&&p-g>=0)return aa.subVectors(s,i),o=(l-h)/(l-h+(p-g)),t.copy(i).addScaledVector(aa,o);const f=1/(m+v+d);return r=v*f,o=d*f,t.copy(n).addScaledVector(Mi,r).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kh=0;class xn extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Ni,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Ar(u,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?u+(e-u)*6*t:t<1/2?e:t<2/3?u+(e-u)*6*(2/3-t):u}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Zt.workingColorSpace){if(e=io(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ar(r,s,e+1/3),this.g=Ar(r,s,e),this.b=Ar(r,s,e-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(e,t=pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Zt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Zt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Zt.fromWorkingColorSpace(Ft.copy(this),e),It(Ft.r*255,0,255)<<16^It(Ft.g*255,0,255)<<8^It(Ft.b*255,0,255)<<0}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,s=Ft.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,c;const h=(o+r)/2;if(o===r)a=0,c=0;else{const l=r-o;switch(c=h<=.5?l/(r+o):l/(2-r-o),r){case n:a=(i-s)/l+(i<s?6:0);break;case i:a=(s-n)/l+2;break;case s:a=(n-i)/l+4;break}a/=6}return e.h=a,e.s=c,e.l=h,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=pn){Zt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Cs);const n=cs(hn.h,Cs.h,t),i=cs(hn.s,Cs.s,t),s=cs(hn.l,Cs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Qe;Qe.NAMES=Nl;class vn extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new J,Rs=new Je;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bl extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const tn=new st,Er=new xt,wi=new J,Qt=new Dn,es=new Dn,Tt=new J;class an extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Fl:Bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Qt.min,es.min),Qt.expandByPoint(Tt),Tt.addVectors(Qt.max,es.max),Qt.expandByPoint(Tt)):(Qt.expandByPoint(es.min),Qt.expandByPoint(es.max))}Qt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],a=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),a&&(wi.fromBufferAttribute(e,c),Tt.add(wi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new J,h[w]=new J;const l=new J,d=new J,p=new J,g=new Je,v=new Je,m=new Je,f=new J,y=new J;function _(w,N,U){l.fromArray(i,w*3),d.fromArray(i,N*3),p.fromArray(i,U*3),g.fromArray(r,w*2),v.fromArray(r,N*2),m.fromArray(r,U*2),d.sub(l),p.sub(l),v.sub(g),m.sub(g);const P=1/(v.x*m.y-m.x*v.y);isFinite(P)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(P),y.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(P),c[w].add(f),c[N].add(f),c[U].add(f),h[w].add(y),h[N].add(y),h[U].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let w=0,N=x.length;w<N;++w){const U=x[w],P=U.start,k=U.count;for(let X=P,ie=P+k;X<ie;X+=3)_(n[X+0],n[X+1],n[X+2])}const M=new J,L=new J,O=new J,I=new J;function b(w){O.fromArray(s,w*3),I.copy(O);const N=c[w];M.copy(N),M.sub(O.multiplyScalar(O.dot(N))).normalize(),L.crossVectors(I,N);const P=L.dot(h[w])<0?-1:1;a[w*4]=M.x,a[w*4+1]=M.y,a[w*4+2]=M.z,a[w*4+3]=P}for(let w=0,N=x.length;w<N;++w){const U=x[w],P=U.start,k=U.count;for(let X=P,ie=P+k;X<ie;X+=3)b(n[X+0]),b(n[X+1]),b(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new J,s=new J,r=new J,o=new J,a=new J,c=new J,h=new J,l=new J;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,s),l.subVectors(i,s),h.cross(l),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),a.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),l.subVectors(i,s),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,a){const c=o.array,h=o.itemSize,l=o.normalized,d=new c.constructor(a.length*h);let p=0,g=0;for(let v=0,m=a.length;v<m;v++){o.isInterleavedBufferAttribute?p=a[v]*o.data.stride+o.offset:p=a[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Gt(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=e(a,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const a=[],c=s[o];for(let h=0,l=c.length;h<l;h++){const d=c[h],p=e(d,n);a.push(p)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a];e.data.attributes[a]=c.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let l=0,d=c.length;l<d;l++){const p=c[l];h.push(p.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],l=s[c];for(let d=0,p=l.length;d<p;d++)h.push(l[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const l=r[c];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const la=new st,fn=new so,Ls=new Nn,ca=new J,Si=new J,Ai=new J,Ei=new J,Tr=new J,Ps=new J,Is=new Je,Ds=new Je,Ns=new Je,ha=new J,ua=new J,da=new J,Bs=new J,Fs=new J;class Ot extends xt{constructor(e=new an,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let a=0,c=s.length;a<c;a++){const h=o[a],l=s[a];h!==0&&(Tr.fromBufferAttribute(l,e),r?Ps.addScaledVector(Tr,h):Ps.addScaledVector(Tr.sub(t),h))}t.add(Ps)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),fn.copy(e.ray).recast(e.near),Ls.containsPoint(fn.origin)===!1&&(fn.intersectSphere(Ls,ca)===null||fn.origin.distanceToSquared(ca)>(e.far-e.near)**2))||(la.copy(s).invert(),fn.copy(e.ray).applyMatrix4(la),n.boundingBox!==null&&fn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,l=n.attributes.normal,d=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=i[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,M=_;x<M;x+=3){const L=o.getX(x),O=o.getX(x+1),I=o.getX(x+2);r=Us(this,f,e,fn,c,h,l,L,O,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Us(this,i,e,fn,c,h,l,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=i[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,M=_;x<M;x+=3){const L=x,O=x+1,I=x+2;r=Us(this,f,e,fn,c,h,l,L,O,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=m,_=m+1,x=m+2;r=Us(this,i,e,fn,c,h,l,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gh(u,e,t,n,i,s,r,o){let a;if(e.side===Xt?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,e.side===In,o),a===null)return null;Fs.copy(o),Fs.applyMatrix4(u.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:u}}function Us(u,e,t,n,i,s,r,o,a,c){u.getVertexPosition(o,Si),u.getVertexPosition(a,Ai),u.getVertexPosition(c,Ei);const h=Gh(u,e,t,n,Si,Ai,Ei,Bs);if(h){i&&(Is.fromBufferAttribute(i,o),Ds.fromBufferAttribute(i,a),Ns.fromBufferAttribute(i,c),h.uv=un.getInterpolation(Bs,Si,Ai,Ei,Is,Ds,Ns,new Je)),s&&(Is.fromBufferAttribute(s,o),Ds.fromBufferAttribute(s,a),Ns.fromBufferAttribute(s,c),h.uv2=un.getInterpolation(Bs,Si,Ai,Ei,Is,Ds,Ns,new Je)),r&&(ha.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,a),da.fromBufferAttribute(r,c),h.normal=un.getInterpolation(Bs,Si,Ai,Ei,ha,ua,da,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:a,c,normal:new J,materialIndex:0};un.getNormal(Si,Ai,Ei,l.normal),h.face=l}return h}class ji extends an{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],c=[],h=[],l=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(l,2));function g(v,m,f,y,_,x,M,L,O,I,b){const w=x/O,N=M/I,U=x/2,P=M/2,k=L/2,X=O+1,ie=I+1;let H=0,B=0;const ee=new J;for(let $=0;$<ie;$++){const V=$*N-P;for(let q=0;q<X;q++){const E=q*w-U;ee[v]=E*y,ee[m]=V*_,ee[f]=k,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[f]=L>0?1:-1,h.push(ee.x,ee.y,ee.z),l.push(q/O),l.push(1-$/I),H+=1}}for(let $=0;$<I;$++)for(let V=0;V<O;V++){const q=d+V+X*$,E=d+V+X*($+1),T=d+(V+1)+X*($+1),C=d+(V+1)+X*$;a.push(q,E,C),a.push(E,T,C),B+=6}o.addGroup(p,B,b),p+=B,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(u){const e={};for(const t in u){e[t]={};for(const n in u[t]){const i=u[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(u){const e={};for(let t=0;t<u.length;t++){const n=Wi(u[t]);for(const i in n)e[i]=n[i]}return e}function Wh(u){const e=[];for(let t=0;t<u.length;t++)e.push(u[t].clone());return e}function Ul(u){return u.getRenderTarget()===null&&u.outputEncoding===dt?pn:ds}const qh={clone:Wi,merge:kt};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ol extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Ol{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/a,t-=r.offsetY*n/c,i*=r.width/a,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ci=1;class Yh extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ht(Ti,Ci,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ht(Ti,Ci,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Ht(Ti,Ci,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Ht(Ti,Ci,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new Ht(Ti,Ci,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const c=new Ht(Ti,Ci,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,c]=this.children,h=e.getRenderTarget(),l=e.toneMapping,d=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=l,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class zl extends Dt{constructor(e,t,n,i,s,r,o,a,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,i,s,r,o,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ji(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Gn});s.uniforms.tEquirect.value=t;const r=new Ot(i,s),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=qt),new Yh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Cr=new J,Kh=new J,Zh=new rt;class $n{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cr.subVectors(n,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zh.getNormalMatrix(e),i=this.coplanarPoint(Cr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Nn,Os=new J;class ro{constructor(e=new $n,t=new $n,n=new $n,i=new $n,s=new $n,r=new $n){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],l=n[7],d=n[8],p=n[9],g=n[10],v=n[11],m=n[12],f=n[13],y=n[14],_=n[15];return t[0].setComponents(o-i,l-a,v-d,_-m).normalize(),t[1].setComponents(o+i,l+a,v+d,_+m).normalize(),t[2].setComponents(o+s,l+c,v+p,_+f).normalize(),t[3].setComponents(o-s,l-c,v-p,_-f).normalize(),t[4].setComponents(o-r,l-h,v-g,_-y).normalize(),t[5].setComponents(o+r,l+h,v+g,_+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Os.x=i.normal.x>0?e.max.x:e.min.x,Os.y=i.normal.y>0?e.max.y:e.min.y,Os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let u=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=u.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=u.requestAnimationFrame(i),e=!0)},stop:function(){u.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){u=s}}}function Jh(u,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const l=c.array,d=c.usage,p=u.createBuffer();u.bindBuffer(h,p),u.bufferData(h,l,d),c.onUploadCallback();let g;if(l instanceof Float32Array)g=5126;else if(l instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(l instanceof Int16Array)g=5122;else if(l instanceof Uint32Array)g=5125;else if(l instanceof Int32Array)g=5124;else if(l instanceof Int8Array)g=5120;else if(l instanceof Uint8Array)g=5121;else if(l instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,l){const d=h.array,p=h.updateRange;u.bindBuffer(l,c),p.count===-1?u.bufferSubData(l,0,d):(t?u.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):u.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(u.deleteBuffer(h.buffer),n.delete(c))}function a(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const l=n.get(c);l===void 0?n.set(c,i(c,h)):l.version<c.version&&(s(l.buffer,c,h),l.version=c.version)}return{get:r,remove:o,update:a}}class nr extends an{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),c=o+1,h=a+1,l=e/o,d=t/a,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*d-r;for(let _=0;_<c;_++){const x=_*l-s;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-f/a)}}for(let f=0;f<a;f++)for(let y=0;y<o;y++){const _=y+c*f,x=y+c*(f+1),M=y+1+c*(f+1),L=y+1+c*f;p.push(_,x,L),p.push(x,M,L)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru="vec3 transformed = vec3( position );",ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_u=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Au="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ef=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_f=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nt={alphamap_fragment:Qh,alphamap_pars_fragment:eu,alphatest_fragment:tu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,begin_vertex:ru,beginnormal_vertex:ou,bsdfs:au,iridescence_fragment:lu,bumpmap_pars_fragment:cu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:du,clipping_planes_vertex:fu,color_fragment:pu,color_pars_fragment:mu,color_pars_vertex:gu,color_vertex:vu,common:xu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:_u,displacementmap_pars_vertex:Mu,displacementmap_vertex:bu,emissivemap_fragment:wu,emissivemap_pars_fragment:Su,encodings_fragment:Au,encodings_pars_fragment:Eu,envmap_fragment:Tu,envmap_common_pars_fragment:Cu,envmap_pars_fragment:Ru,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Hu,envmap_vertex:Pu,fog_vertex:Iu,fog_pars_vertex:Du,fog_fragment:Nu,fog_pars_fragment:Bu,gradientmap_pars_fragment:Fu,lightmap_fragment:Uu,lightmap_pars_fragment:Ou,lights_lambert_fragment:zu,lights_lambert_pars_fragment:Vu,lights_pars_begin:ku,lights_toon_fragment:Gu,lights_toon_pars_fragment:Wu,lights_phong_fragment:qu,lights_phong_pars_fragment:Xu,lights_physical_fragment:ju,lights_physical_pars_fragment:Yu,lights_fragment_begin:$u,lights_fragment_maps:Ku,lights_fragment_end:Zu,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:sd,map_particle_pars_fragment:rd,metalnessmap_fragment:od,metalnessmap_pars_fragment:ad,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:hd,morphtarget_vertex:ud,normal_fragment_begin:dd,normal_fragment_maps:fd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:Md,output_fragment:bd,packing:wd,premultiplied_alpha_fragment:Sd,project_vertex:Ad,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Pd,shadowmap_vertex:Id,shadowmask_pars_fragment:Dd,skinbase_vertex:Nd,skinning_pars_vertex:Bd,skinning_vertex:Fd,skinnormal_vertex:Ud,specularmap_fragment:Od,specularmap_pars_fragment:zd,tonemapping_fragment:Vd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Wd,uv_pars_vertex:qd,uv_vertex:Xd,worldpos_vertex:jd,background_vert:Yd,background_frag:$d,backgroundCube_vert:Kd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:Qd,depth_vert:ef,depth_frag:tf,distanceRGBA_vert:nf,distanceRGBA_frag:sf,equirect_vert:rf,equirect_frag:of,linedashed_vert:af,linedashed_frag:lf,meshbasic_vert:cf,meshbasic_frag:hf,meshlambert_vert:uf,meshlambert_frag:df,meshmatcap_vert:ff,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:gf,meshphong_vert:vf,meshphong_frag:xf,meshphysical_vert:yf,meshphysical_frag:_f,meshtoon_vert:Mf,meshtoon_frag:bf,points_vert:wf,points_frag:Sf,shadow_vert:Af,shadow_frag:Ef,sprite_vert:Tf,sprite_frag:Cf},Ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaTest:{value:0}}},mn={basic:{uniforms:kt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:kt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:kt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:kt([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:kt([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:kt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:kt([Ne.points,Ne.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:kt([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:kt([Ne.common,Ne.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:kt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:kt([Ne.sprite,Ne.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:kt([Ne.common,Ne.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:kt([Ne.lights,Ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};mn.physical={uniforms:kt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const zs={r:0,b:0,g:0};function Rf(u,e,t,n,i,s,r){const o=new Qe(0);let a=s===!0?0:1,c,h,l=null,d=0,p=null;function g(m,f){let y=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_));const x=u.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?v(o,a):_&&_.isColor&&(v(_,1),y=!0),(u.autoClear||y)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),_&&(_.isCubeTexture||_.mapping===er)?(h===void 0&&(h=new Ot(new ji(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Wi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=_.encoding!==dt,(l!==_||d!==_.version||p!==u.toneMapping)&&(h.material.needsUpdate=!0,l=_,d=_.version,p=u.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ot(new nr(2,2),new ai({name:"BackgroundMaterial",uniforms:Wi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_.encoding!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||d!==_.version||p!==u.toneMapping)&&(c.material.needsUpdate=!0,l=_,d=_.version,p=u.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(zs,Ul(u)),n.buffers.color.setClear(zs.r,zs.g,zs.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),a=f,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g}}function Lf(u,e,t,n){const i=u.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=m(null);let c=a,h=!1;function l(k,X,ie,H,B){let ee=!1;if(r){const $=v(H,ie,X);c!==$&&(c=$,p(c.object)),ee=f(k,H,ie,B),ee&&y(k,H,ie,B)}else{const $=X.wireframe===!0;(c.geometry!==H.id||c.program!==ie.id||c.wireframe!==$)&&(c.geometry=H.id,c.program=ie.id,c.wireframe=$,ee=!0)}B!==null&&t.update(B,34963),(ee||h)&&(h=!1,I(k,X,ie,H),B!==null&&u.bindBuffer(34963,t.get(B).buffer))}function d(){return n.isWebGL2?u.createVertexArray():s.createVertexArrayOES()}function p(k){return n.isWebGL2?u.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?u.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function v(k,X,ie){const H=ie.wireframe===!0;let B=o[k.id];B===void 0&&(B={},o[k.id]=B);let ee=B[X.id];ee===void 0&&(ee={},B[X.id]=ee);let $=ee[H];return $===void 0&&($=m(d()),ee[H]=$),$}function m(k){const X=[],ie=[],H=[];for(let B=0;B<i;B++)X[B]=0,ie[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ie,attributeDivisors:H,object:k,attributes:{},index:null}}function f(k,X,ie,H){const B=c.attributes,ee=X.attributes;let $=0;const V=ie.getAttributes();for(const q in V)if(V[q].location>=0){const T=B[q];let C=ee[q];if(C===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(C=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(C=k.instanceColor)),T===void 0||T.attribute!==C||C&&T.data!==C.data)return!0;$++}return c.attributesNum!==$||c.index!==H}function y(k,X,ie,H){const B={},ee=X.attributes;let $=0;const V=ie.getAttributes();for(const q in V)if(V[q].location>=0){let T=ee[q];T===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(T=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(T=k.instanceColor));const C={};C.attribute=T,T&&T.data&&(C.data=T.data),B[q]=C,$++}c.attributes=B,c.attributesNum=$,c.index=H}function _(){const k=c.newAttributes;for(let X=0,ie=k.length;X<ie;X++)k[X]=0}function x(k){M(k,0)}function M(k,X){const ie=c.newAttributes,H=c.enabledAttributes,B=c.attributeDivisors;ie[k]=1,H[k]===0&&(u.enableVertexAttribArray(k),H[k]=1),B[k]!==X&&((n.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),B[k]=X)}function L(){const k=c.newAttributes,X=c.enabledAttributes;for(let ie=0,H=X.length;ie<H;ie++)X[ie]!==k[ie]&&(u.disableVertexAttribArray(ie),X[ie]=0)}function O(k,X,ie,H,B,ee){n.isWebGL2===!0&&(ie===5124||ie===5125)?u.vertexAttribIPointer(k,X,ie,B,ee):u.vertexAttribPointer(k,X,ie,H,B,ee)}function I(k,X,ie,H){if(n.isWebGL2===!1&&(k.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const B=H.attributes,ee=ie.getAttributes(),$=X.defaultAttributeValues;for(const V in ee){const q=ee[V];if(q.location>=0){let E=B[V];if(E===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(E=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(E=k.instanceColor)),E!==void 0){const T=E.normalized,C=E.itemSize,G=t.get(E);if(G===void 0)continue;const F=G.buffer,te=G.type,Y=G.bytesPerElement;if(E.isInterleavedBufferAttribute){const Z=E.data,se=Z.stride,Ee=E.offset;if(Z.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)M(q.location+pe,Z.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<q.locationSize;pe++)x(q.location+pe);u.bindBuffer(34962,F);for(let pe=0;pe<q.locationSize;pe++)O(q.location+pe,C/q.locationSize,te,T,se*Y,(Ee+C/q.locationSize*pe)*Y)}else{if(E.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)M(q.location+Z,E.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let Z=0;Z<q.locationSize;Z++)x(q.location+Z);u.bindBuffer(34962,F);for(let Z=0;Z<q.locationSize;Z++)O(q.location+Z,C/q.locationSize,te,T,C*Y,C/q.locationSize*Z*Y)}}else if($!==void 0){const T=$[V];if(T!==void 0)switch(T.length){case 2:u.vertexAttrib2fv(q.location,T);break;case 3:u.vertexAttrib3fv(q.location,T);break;case 4:u.vertexAttrib4fv(q.location,T);break;default:u.vertexAttrib1fv(q.location,T)}}}}L()}function b(){U();for(const k in o){const X=o[k];for(const ie in X){const H=X[ie];for(const B in H)g(H[B].object),delete H[B];delete X[ie]}delete o[k]}}function w(k){if(o[k.id]===void 0)return;const X=o[k.id];for(const ie in X){const H=X[ie];for(const B in H)g(H[B].object),delete H[B];delete X[ie]}delete o[k.id]}function N(k){for(const X in o){const ie=o[X];if(ie[k.id]===void 0)continue;const H=ie[k.id];for(const B in H)g(H[B].object),delete H[B];delete ie[k.id]}}function U(){P(),h=!0,c!==a&&(c=a,p(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:U,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:x,disableUnusedAttributes:L}}function Pf(u,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){u.drawArrays(s,c,h),t.update(h,s,1)}function a(c,h,l){if(l===0)return;let d,p;if(i)d=u,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,l),t.update(h,s,l)}this.setMode=r,this.render=o,this.renderInstances=a}function If(u,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=u.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&u.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,l=u.getParameter(34930),d=u.getParameter(35660),p=u.getParameter(3379),g=u.getParameter(34076),v=u.getParameter(34921),m=u.getParameter(36347),f=u.getParameter(36348),y=u.getParameter(36349),_=d>0,x=r||e.has("OES_texture_float"),M=_&&x,L=r?u.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:L}}function Df(u){const e=this;let t=null,n=0,i=!1,s=!1;const r=new $n,o=new rt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const p=l.length!==0||d||n!==0||i;return i=d,n=l.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,d){t=h(l,d,0)},this.setState=function(l,d,p){const g=l.clippingPlanes,v=l.clipIntersection,m=l.clipShadows,f=u.get(l);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,_=y*4;let x=f.clippingState||null;a.value=x,x=h(g,d,_,p);for(let M=0;M!==_;++M)x[M]=t[M];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(l,d,p,g){const v=l!==null?l.length:0;let m=null;if(v!==0){if(m=a.value,g!==!0||m===null){const f=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==v;++_,x+=4)r.copy(l[_]).applyMatrix4(y,o),r.normal.toArray(m,x),m[x+3]=r.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Nf(u){let e=new WeakMap;function t(r,o){return o===Hr?r.mapping=Oi:o===Gr&&(r.mapping=zi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Hr||o===Gr)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const c=new $h(a.height/2);return c.fromEquirectangularTexture(u,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class oo extends Ol{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,fa=[.125,.215,.35,.446,.526,.582],Zn=20,Rr=new oo,pa=new Qe;let Lr=null;const Kn=(1+Math.sqrt(5))/2,Ri=1/Kn,ma=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,Kn,Ri),new J(0,Kn,-Ri),new J(Ri,0,Kn),new J(-Ri,0,Kn),new J(Kn,Ri,0),new J(-Kn,Ri,0)];class ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:hs,format:on,encoding:ri,depthBuffer:!1},i=va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bf(s)),this._blurMaterial=Ff(s,e,t)}return i}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,i){const o=new Ht(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(pa),h.toneMapping=Pn,h.autoClear=!1;const p=new vn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Ot(new ji,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(pa),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,a[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,a[f]),o.lookAt(0,c[f],0)):(o.up.set(0,a[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Vs(i,y*_,f>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xa());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;Vs(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,Rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ma[(i-1)%ma.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const a=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ot(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Zn;m>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const f=[];let y=0;for(let O=0;O<Zn;++O){const I=O/v,b=Math.exp(-I*I/2);f.push(b),O===0?y+=b:O<m&&(y+=2*b)}for(let O=0;O<f.length;O++)f[O]=f[O]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],M=3*x*(i>_-Di?i-_+Di:0),L=4*(this._cubeSize-x);Vs(t,M,L,3*x,2*x),a.setRenderTarget(t),a.render(l,Rr)}}function Bf(u){const e=[],t=[],n=[];let i=u;const s=u-Di+1+fa.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let a=1/o;r>u-Di?a=fa[r-u+Di-1]:r===0&&(a=0),n.push(a);const c=1/(o-2),h=-c,l=1+c,d=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let L=0;L<p;L++){const O=L%3*2/3-1,I=L>2?0:-1,b=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];y.set(b,v*g*L),_.set(d,m*g*L);const w=[L,L,L,L,L,L];x.set(w,f*g*L)}const M=new an;M.setAttribute("position",new Gt(y,v)),M.setAttribute("uv",new Gt(_,m)),M.setAttribute("faceIndex",new Gt(x,f)),e.push(M),i>Di&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function va(u,e,t){const n=new oi(u,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(u,e,t,n,i){u.viewport.set(e,t,n,i),u.scissor.set(e,t,n,i)}function Ff(u,e,t){const n=new Float32Array(Zn),i=new J(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xa(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ya(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uf(u){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,c=a===Hr||a===Gr,h=a===Oi||a===zi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=e.get(o);return t===null&&(t=new ga(u)),l=c?t.fromEquirectangular(o,l):t.fromCubemap(o,l),e.set(o,l),l.texture}else{if(e.has(o))return e.get(o).texture;{const l=o.image;if(c&&l&&l.height>0||h&&l&&i(l)){t===null&&(t=new ga(u));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let a=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&a++;return a===c}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Of(u){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=u.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zf(u,e,t,n){const i={},s=new WeakMap;function r(l){const d=l.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(l,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function a(l){const d=l.attributes;for(const g in d)e.update(d[g],34962);const p=l.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],34962)}}function c(l){const d=[],p=l.index,g=l.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const M=y[_+0],L=y[_+1],O=y[_+2];d.push(M,L,L,O,O,M)}}else{const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const M=_+0,L=_+1,O=_+2;d.push(M,L,L,O,O,M)}}const m=new(Rl(d)?Fl:Bl)(d,1);m.version=v;const f=s.get(l);f&&e.remove(f),s.set(l,m)}function h(l){const d=s.get(l);if(d){const p=l.index;p!==null&&d.version<p.version&&c(l)}else c(l);return s.get(l)}return{get:o,update:a,getWireframeAttribute:h}}function Vf(u,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let o,a;function c(d){o=d.type,a=d.bytesPerElement}function h(d,p){u.drawElements(s,p,o,d*a),t.update(p,s,1)}function l(d,p,g){if(g===0)return;let v,m;if(i)v=u,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,o,d*a,g),t.update(p,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=l}function kf(u){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hf(u,e){return u[0]-e[0]}function Gf(u,e){return Math.abs(e[1])-Math.abs(u[1])}function Wf(u,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function a(c,h,l){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==v){let X=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),M===!0&&(b=3);let w=h.attributes.position.count*b,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*N*4*v),P=new Il(U,w,N,v);P.type=Hn,P.needsUpdate=!0;const k=b*4;for(let ie=0;ie<v;ie++){const H=L[ie],B=O[ie],ee=I[ie],$=w*N*4*ie;for(let V=0;V<H.count;V++){const q=V*k;_===!0&&(r.fromBufferAttribute(H,V),U[$+q+0]=r.x,U[$+q+1]=r.y,U[$+q+2]=r.z,U[$+q+3]=0),x===!0&&(r.fromBufferAttribute(B,V),U[$+q+4]=r.x,U[$+q+5]=r.y,U[$+q+6]=r.z,U[$+q+7]=0),M===!0&&(r.fromBufferAttribute(ee,V),U[$+q+8]=r.x,U[$+q+9]=r.y,U[$+q+10]=r.z,U[$+q+11]=ee.itemSize===4?r.w:1)}}m={count:v,texture:P,size:new Je(w,N)},s.set(h,m),h.addEventListener("dispose",X)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];const y=h.morphTargetsRelative?1:1-f;l.getUniforms().setValue(u,"morphTargetBaseInfluence",y),l.getUniforms().setValue(u,"morphTargetInfluences",d),l.getUniforms().setValue(u,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(u,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[h.id]=v}for(let x=0;x<g;x++){const M=v[x];M[0]=x,M[1]=d[x]}v.sort(Gf);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Hf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const M=o[x],L=M[0],O=M[1];L!==Number.MAX_SAFE_INTEGER&&O?(m&&h.getAttribute("morphTarget"+x)!==m[L]&&h.setAttribute("morphTarget"+x,m[L]),f&&h.getAttribute("morphNormal"+x)!==f[L]&&h.setAttribute("morphNormal"+x,f[L]),i[x]=O,y+=O):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-y;l.getUniforms().setValue(u,"morphTargetBaseInfluence",_),l.getUniforms().setValue(u,"morphTargetInfluences",i)}}return{update:a}}function qf(u,e,t,n){let i=new WeakMap;function s(a){const c=n.render.frame,h=a.geometry,l=e.get(a,h);return i.get(l)!==c&&(e.update(l),i.set(l,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),l}function r(){i=new WeakMap}function o(a){const c=a.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const kl=new Dt,Hl=new Il,Gl=new Dh,Wl=new zl,_a=[],Ma=[],ba=new Float32Array(16),wa=new Float32Array(9),Sa=new Float32Array(4);function Yi(u,e,t){const n=u[0];if(n<=0||n>0)return u;const i=e*t;let s=_a[i];if(s===void 0&&(s=new Float32Array(i),_a[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,u[r].toArray(s,o)}return s}function wt(u,e){if(u.length!==e.length)return!1;for(let t=0,n=u.length;t<n;t++)if(u[t]!==e[t])return!1;return!0}function St(u,e){for(let t=0,n=e.length;t<n;t++)u[t]=e[t]}function ir(u,e){let t=Ma[e];t===void 0&&(t=new Int32Array(e),Ma[e]=t);for(let n=0;n!==e;++n)t[n]=u.allocateTextureUnit();return t}function Xf(u,e){const t=this.cache;t[0]!==e&&(u.uniform1f(this.addr,e),t[0]=e)}function jf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;u.uniform2fv(this.addr,e),St(t,e)}}function Yf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;u.uniform3fv(this.addr,e),St(t,e)}}function $f(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;u.uniform4fv(this.addr,e),St(t,e)}}function Kf(u,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;u.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(wt(t,n))return;Sa.set(n),u.uniformMatrix2fv(this.addr,!1,Sa),St(t,n)}}function Zf(u,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;u.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(wt(t,n))return;wa.set(n),u.uniformMatrix3fv(this.addr,!1,wa),St(t,n)}}function Jf(u,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;u.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(wt(t,n))return;ba.set(n),u.uniformMatrix4fv(this.addr,!1,ba),St(t,n)}}function Qf(u,e){const t=this.cache;t[0]!==e&&(u.uniform1i(this.addr,e),t[0]=e)}function ep(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(u.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;u.uniform2iv(this.addr,e),St(t,e)}}function tp(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(u.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;u.uniform3iv(this.addr,e),St(t,e)}}function np(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(u.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;u.uniform4iv(this.addr,e),St(t,e)}}function ip(u,e){const t=this.cache;t[0]!==e&&(u.uniform1ui(this.addr,e),t[0]=e)}function sp(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(u.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;u.uniform2uiv(this.addr,e),St(t,e)}}function rp(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(u.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;u.uniform3uiv(this.addr,e),St(t,e)}}function op(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(u.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;u.uniform4uiv(this.addr,e),St(t,e)}}function ap(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||kl,i)}function lp(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gl,i)}function cp(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wl,i)}function hp(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hl,i)}function up(u){switch(u){case 5126:return Xf;case 35664:return jf;case 35665:return Yf;case 35666:return $f;case 35674:return Kf;case 35675:return Zf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}}function dp(u,e){u.uniform1fv(this.addr,e)}function fp(u,e){const t=Yi(e,this.size,2);u.uniform2fv(this.addr,t)}function pp(u,e){const t=Yi(e,this.size,3);u.uniform3fv(this.addr,t)}function mp(u,e){const t=Yi(e,this.size,4);u.uniform4fv(this.addr,t)}function gp(u,e){const t=Yi(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,t)}function vp(u,e){const t=Yi(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,t)}function xp(u,e){const t=Yi(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,t)}function yp(u,e){u.uniform1iv(this.addr,e)}function _p(u,e){u.uniform2iv(this.addr,e)}function Mp(u,e){u.uniform3iv(this.addr,e)}function bp(u,e){u.uniform4iv(this.addr,e)}function wp(u,e){u.uniform1uiv(this.addr,e)}function Sp(u,e){u.uniform2uiv(this.addr,e)}function Ap(u,e){u.uniform3uiv(this.addr,e)}function Ep(u,e){u.uniform4uiv(this.addr,e)}function Tp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);wt(n,s)||(u.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||kl,s[r])}function Cp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);wt(n,s)||(u.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Gl,s[r])}function Rp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);wt(n,s)||(u.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Wl,s[r])}function Lp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);wt(n,s)||(u.uniform1iv(this.addr,s),St(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Hl,s[r])}function Pp(u){switch(u){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return yp;case 35667:case 35671:return _p;case 35668:case 35672:return Mp;case 35669:case 35673:return bp;case 5125:return wp;case 36294:return Sp;case 36295:return Ap;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Ip{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=up(t.type)}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pp(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Pr=/(\w+)(\])?(\[|\.)?/g;function Aa(u,e){u.seq.push(e),u.map[e.id]=e}function Bp(u,e,t){const n=u.name,i=n.length;for(Pr.lastIndex=0;;){const s=Pr.exec(n),r=Pr.lastIndex;let o=s[1];const a=s[2]==="]",c=s[3];if(a&&(o=o|0),c===void 0||c==="["&&r+2===i){Aa(t,c===void 0?new Ip(o,u,e):new Dp(o,u,e));break}else{let l=t.map[o];l===void 0&&(l=new Np(o),Aa(t,l)),t=l}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Bp(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Ea(u,e,t){const n=u.createShader(e);return u.shaderSource(n,t),u.compileShader(n),n}let Fp=0;function Up(u,e){const t=u.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Op(u){switch(u){case ri:return["Linear","( value )"];case dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function Ta(u,e,t){const n=u.getShaderParameter(e,35713),i=u.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Up(u.getShaderSource(e),r)}else return i}function zp(u,e){const t=Op(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vp(u,e){let t;switch(e){case Vc:t="Linear";break;case kc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case Gc:t="ACESFilmic";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+u+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kp(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.normalMapTangentSpace||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function Hp(u){const e=[];for(const t in u){const n=u[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gp(u,e){const t={},n=u.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=u.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:u.getAttribLocation(e,r),locationSize:o}}return t}function as(u){return u!==""}function Ca(u,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ra(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(u){return u.replace(Wp,qp)}function qp(u,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $r(t)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(u){return u.replace(Xp,jp)}function jp(u,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pa(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yp(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function $p(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Oi:case zi:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kp(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Zp(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case _l:e="ENVMAP_BLENDING_MULTIPLY";break;case Oc:e="ENVMAP_BLENDING_MIX";break;case zc:e="ENVMAP_BLENDING_ADD";break}return e}function Jp(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qp(u,e,t,n){const i=u.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=Yp(t),c=$p(t),h=Kp(t),l=Zp(t),d=Jp(t),p=t.isWebGL2?"":kp(t),g=Hp(s),v=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(as).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(as).join(`
`),f.length>0&&(f+=`
`)):(m=[Pa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[p,Pa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,zp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),r=$r(r),r=Ca(r,t),r=Ra(r,t),o=$r(o),o=Ca(o,t),o=Ra(o,t),r=La(r),o=La(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+r,x=y+f+o,M=Ea(i,35633,_),L=Ea(i,35632,x);if(i.attachShader(v,M),i.attachShader(v,L),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),u.debug.checkShaderErrors){const b=i.getProgramInfoLog(v).trim(),w=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(L).trim();let U=!0,P=!0;if(i.getProgramParameter(v,35714)===!1)if(U=!1,typeof u.debug.onShaderError=="function")u.debug.onShaderError(i,v,M,L);else{const k=Ta(i,M,"vertex"),X=Ta(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+b+`
`+k+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(w===""||N==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:b,vertexShader:{log:w,prefix:m},fragmentShader:{log:N,prefix:f}})}i.deleteShader(M),i.deleteShader(L);let O;this.getUniforms=function(){return O===void 0&&(O=new Ys(i,v)),O};let I;return this.getAttributes=function(){return I===void 0&&(I=Gp(i,v)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Fp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=L,this}let em=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nm(e),t.set(e,n)),n}}class nm{constructor(e){this.id=em++,this.code=e,this.usedTimes=0}}function im(u,e,t,n,i,s,r){const o=new Dl,a=new tm,c=[],h=i.isWebGL2,l=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===1?"uv2":"uv"}function m(b,w,N,U,P){const k=U.fog,X=P.geometry,ie=b.isMeshStandardMaterial?U.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),B=H&&H.mapping===er?H.image.height:null,ee=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,V=$!==void 0?$.length:0;let q=0;X.morphAttributes.position!==void 0&&(q=1),X.morphAttributes.normal!==void 0&&(q=2),X.morphAttributes.color!==void 0&&(q=3);let E,T,C,G;if(ee){const Ce=mn[ee];E=Ce.vertexShader,T=Ce.fragmentShader}else E=b.vertexShader,T=b.fragmentShader,a.update(b),C=a.getVertexShaderID(b),G=a.getFragmentShaderID(b);const F=u.getRenderTarget(),te=P.isInstancedMesh===!0,Y=!!b.map,Z=!!b.matcap,se=!!H,Ee=!!b.aoMap,pe=!!b.lightMap,ye=!!b.bumpMap,he=!!b.normalMap,ve=!!b.displacementMap,Ge=!!b.emissiveMap,Ue=!!b.metalnessMap,He=!!b.roughnessMap,Ae=b.clearcoat>0,je=b.iridescence>0,D=b.sheen>0,A=b.transmission>0,ne=Ae&&!!b.clearcoatMap,de=Ae&&!!b.clearcoatNormalMap,xe=Ae&&!!b.clearcoatRoughnessMap,_e=je&&!!b.iridescenceMap,W=je&&!!b.iridescenceThicknessMap,me=D&&!!b.sheenColorMap,re=D&&!!b.sheenRoughnessMap,Re=!!b.specularMap,Be=!!b.specularColorMap,Oe=!!b.specularIntensityMap,Pe=A&&!!b.transmissionMap,Ve=A&&!!b.thicknessMap,We=!!b.gradientMap,Ye=!!b.alphaMap,at=b.alphaTest>0,K=!!b.extensions,ue=!!X.attributes.uv2;return{isWebGL2:h,shaderID:ee,shaderName:b.type,vertexShader:E,fragmentShader:T,defines:b.defines,customVertexShaderID:C,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:te,instancingColor:te&&P.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?u.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:ri,map:Y,matcap:Z,envMap:se,envMapMode:se&&H.mapping,envMapCubeUVHeight:B,aoMap:Ee,lightMap:pe,bumpMap:ye,normalMap:he,displacementMap:d&&ve,emissiveMap:Ge,normalMapObjectSpace:he&&b.normalMapType===hh,normalMapTangentSpace:he&&b.normalMapType===Al,decodeVideoTexture:Y&&b.map.isVideoTexture===!0&&b.map.encoding===dt,metalnessMap:Ue,roughnessMap:He,clearcoat:Ae,clearcoatMap:ne,clearcoatNormalMap:de,clearcoatRoughnessMap:xe,iridescence:je,iridescenceMap:_e,iridescenceThicknessMap:W,sheen:D,sheenColorMap:me,sheenRoughnessMap:re,specularMap:Re,specularColorMap:Be,specularIntensityMap:Oe,transmission:A,transmissionMap:Pe,thicknessMap:Ve,gradientMap:We,opaque:b.transparent===!1&&b.blending===Ni,alphaMap:Ye,alphaTest:at,combine:b.combine,mapUv:Y&&v(b.map.channel),aoMapUv:Ee&&v(b.aoMap.channel),lightMapUv:pe&&v(b.lightMap.channel),bumpMapUv:ye&&v(b.bumpMap.channel),normalMapUv:he&&v(b.normalMap.channel),displacementMapUv:ve&&v(b.displacementMap.channel),emissiveMapUv:Ge&&v(b.emissiveMap.channel),metalnessMapUv:Ue&&v(b.metalnessMap.channel),roughnessMapUv:He&&v(b.roughnessMap.channel),clearcoatMapUv:ne&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:W&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(b.sheenRoughnessMap.channel),specularMapUv:Re&&v(b.specularMap.channel),specularColorMapUv:Be&&v(b.specularColorMap.channel),specularIntensityMapUv:Oe&&v(b.specularIntensityMap.channel),transmissionMapUv:Pe&&v(b.transmissionMap.channel),thicknessMapUv:Ve&&v(b.thicknessMap.channel),alphaMapUv:Ye&&v(b.alphaMap.channel),vertexTangents:he&&!!X.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUvs2:ue,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Y||Ye),fog:!!k,useFog:b.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:u.shadowMap.enabled&&N.length>0,shadowMapType:u.shadowMap.type,toneMapping:b.toneMapped?u.toneMapping:Pn,useLegacyLights:u.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gn,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:K&&b.extensions.derivatives===!0,extensionFragDepth:K&&b.extensions.fragDepth===!0,extensionDrawBuffers:K&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:K&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)w.push(N),w.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(y(w,b),_(w,b),w.push(u.outputEncoding)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputEncoding),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUvs2&&o.enable(13),w.vertexTangents&&o.enable(14),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.decodeVideoTexture&&o.enable(17),w.opaque&&o.enable(18),w.pointsUvs&&o.enable(19),b.push(o.mask)}function x(b){const w=g[b.type];let N;if(w){const U=mn[w];N=qh.clone(U.uniforms)}else N=b.uniforms;return N}function M(b,w){let N;for(let U=0,P=c.length;U<P;U++){const k=c[U];if(k.cacheKey===w){N=k,++N.usedTimes;break}}return N===void 0&&(N=new Qp(u,w,b,s),c.push(N)),N}function L(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function O(b){a.remove(b)}function I(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:M,releaseProgram:L,releaseShaderCache:O,programs:c,dispose:I}}function sm(){let u=new WeakMap;function e(s){let r=u.get(s);return r===void 0&&(r={},u.set(s,r)),r}function t(s){u.delete(s)}function n(s,r,o){u.get(s)[r]=o}function i(){u=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rm(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function Ia(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function Da(){const u=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(l,d,p,g,v,m){let f=u[e];return f===void 0?(f={id:l.id,object:l,geometry:d,material:p,groupOrder:g,renderOrder:l.renderOrder,z:v,group:m},u[e]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=l.renderOrder,f.z=v,f.group=m),e++,f}function o(l,d,p,g,v,m){const f=r(l,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function a(l,d,p,g,v,m){const f=r(l,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(l,d){t.length>1&&t.sort(l||rm),n.length>1&&n.sort(d||Ia),i.length>1&&i.sort(d||Ia)}function h(){for(let l=e,d=u.length;l<d;l++){const p=u[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:c}}function om(){let u=new WeakMap;function e(n,i){const s=u.get(n);let r;return s===void 0?(r=new Da,u.set(n,[r])):i>=s.length?(r=new Da,s.push(r)):r=s[i],r}function t(){u=new WeakMap}return{get:e,dispose:t}}function am(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Qe};break;case"SpotLight":t={position:new J,direction:new J,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new J,halfWidth:new J,halfHeight:new J};break}return u[e.id]=t,t}}}function lm(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=t,t}}}let cm=0;function hm(u,e){return(e.castShadow?2:0)-(u.castShadow?2:0)+(e.map?1:0)-(u.map?1:0)}function um(u,e){const t=new am,n=lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new J);const s=new J,r=new st,o=new st;function a(h,l){let d=0,p=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,m=0,f=0,y=0,_=0,x=0,M=0,L=0,O=0,I=0;h.sort(hm);const b=l===!0?Math.PI:1;for(let N=0,U=h.length;N<U;N++){const P=h[N],k=P.color,X=P.intensity,ie=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*X*b,p+=k.g*X*b,g+=k.b*X*b;else if(P.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],X);else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const ee=P.shadow,$=n.get(P);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=H,i.directionalShadowMatrix[v]=P.shadow.matrix,x++}i.directional[v]=B,v++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(k).multiplyScalar(X*b),B.distance=ie,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[f]=B;const ee=P.shadow;if(P.map&&(i.spotLightMap[O]=P.map,O++,ee.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[f]=ee.matrix,P.castShadow){const $=n.get(P);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.spotShadow[f]=$,i.spotShadowMap[f]=H,L++}f++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(k).multiplyScalar(X),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=B,y++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*b),B.distance=P.distance,B.decay=P.decay,P.castShadow){const ee=P.shadow,$=n.get(P);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=B,m++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(X*b),B.groundColor.copy(P.groundColor).multiplyScalar(X*b),i.hemi[_]=B,_++}}y>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==v||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==L||w.numSpotMaps!==O)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=L+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,w.directionalLength=v,w.pointLength=m,w.spotLength=f,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=L,w.numSpotMaps=O,i.version=cm++)}function c(h,l){let d=0,p=0,g=0,v=0,m=0;const f=l.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const x=h[y];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),o.identity(),r.copy(x.matrixWorld),r.premultiply(f),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:a,setupView:c,state:i}}function Na(u,e){const t=new um(u,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(l){n.push(l)}function o(l){i.push(l)}function a(l){t.setup(n,l)}function c(l){t.setupView(n,l)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dm(u,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Na(u,e),t.set(s,[a])):r>=o.length?(a=new Na(u,e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class fm extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pm extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vm(u,e,t){let n=new ro;const i=new Je,s=new Je,r=new gt,o=new fm({depthPacking:ch}),a=new pm,c={},h=t.maxTextureSize,l={[In]:Xt,[Xt]:In,[gn]:gn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:mm,fragmentShader:gm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl,this.render=function(x,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const O=u.getRenderTarget(),I=u.getActiveCubeFace(),b=u.getActiveMipmapLevel(),w=u.state;w.setBlending(Gn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let N=0,U=x.length;N<U;N++){const P=x[N],k=P.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null){const H=this.type!==os?{minFilter:Ct,magFilter:Ct}:{};k.map=new oi(i.x,i.y,H),k.map.texture.name=P.name+".shadowMap",k.camera.updateProjectionMatrix()}u.setRenderTarget(k.map),u.clear();const ie=k.getViewportCount();for(let H=0;H<ie;H++){const B=k.getViewport(H);r.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),w.viewport(r),k.updateMatrices(P,H),n=k.getFrustum(),_(M,L,k.camera,P,this.type)}k.isPointLightShadow!==!0&&this.type===os&&f(k,L),k.needsUpdate=!1}m.needsUpdate=!1,u.setRenderTarget(O,I,b)};function f(x,M){const L=e.update(v);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new oi(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,u.setRenderTarget(x.mapPass),u.clear(),u.renderBufferDirect(M,null,L,d,v,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,u.setRenderTarget(x.map),u.clear(),u.renderBufferDirect(M,null,L,p,v,null)}function y(x,M,L,O){let I=null;const b=L.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0)I=b;else if(I=L.isPointLight===!0?a:o,u.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const w=I.uuid,N=M.uuid;let U=c[w];U===void 0&&(U={},c[w]=U);let P=U[N];P===void 0&&(P=I.clone(),U[N]=P),I=P}if(I.visible=M.visible,I.wireframe=M.wireframe,O===os?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:l[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const w=u.properties.get(I);w.light=L}return I}function _(x,M,L,O,I){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&I===os)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld);const N=e.update(x),U=x.material;if(Array.isArray(U)){const P=N.groups;for(let k=0,X=P.length;k<X;k++){const ie=P[k],H=U[ie.materialIndex];if(H&&H.visible){const B=y(x,H,O,I);u.renderBufferDirect(L,null,N,B,x,ie)}}}else if(U.visible){const P=y(x,U,O,I);u.renderBufferDirect(L,null,N,P,x,null)}}const w=x.children;for(let N=0,U=w.length;N<U;N++)_(w[N],M,L,O,I)}}function xm(u,e,t){const n=t.isWebGL2;function i(){let K=!1;const ue=new gt;let be=null;const Ce=new gt(0,0,0,0);return{setMask:function(ke){be!==ke&&!K&&(u.colorMask(ke,ke,ke,ke),be=ke)},setLocked:function(ke){K=ke},setClear:function(ke,lt,ut,yt,zt){zt===!0&&(ke*=yt,lt*=yt,ut*=yt),ue.set(ke,lt,ut,yt),Ce.equals(ue)===!1&&(u.clearColor(ke,lt,ut,yt),Ce.copy(ue))},reset:function(){K=!1,be=null,Ce.set(-1,0,0,0)}}}function s(){let K=!1,ue=null,be=null,Ce=null;return{setTest:function(ke){ke?F(2929):te(2929)},setMask:function(ke){ue!==ke&&!K&&(u.depthMask(ke),ue=ke)},setFunc:function(ke){if(be!==ke){switch(ke){case Pc:u.depthFunc(512);break;case Ic:u.depthFunc(519);break;case Dc:u.depthFunc(513);break;case kr:u.depthFunc(515);break;case Nc:u.depthFunc(514);break;case Bc:u.depthFunc(518);break;case Fc:u.depthFunc(516);break;case Uc:u.depthFunc(517);break;default:u.depthFunc(515)}be=ke}},setLocked:function(ke){K=ke},setClear:function(ke){Ce!==ke&&(u.clearDepth(ke),Ce=ke)},reset:function(){K=!1,ue=null,be=null,Ce=null}}}function r(){let K=!1,ue=null,be=null,Ce=null,ke=null,lt=null,ut=null,yt=null,zt=null;return{setTest:function(et){K||(et?F(2960):te(2960))},setMask:function(et){ue!==et&&!K&&(u.stencilMask(et),ue=et)},setFunc:function(et,oe,fe){(be!==et||Ce!==oe||ke!==fe)&&(u.stencilFunc(et,oe,fe),be=et,Ce=oe,ke=fe)},setOp:function(et,oe,fe){(lt!==et||ut!==oe||yt!==fe)&&(u.stencilOp(et,oe,fe),lt=et,ut=oe,yt=fe)},setLocked:function(et){K=et},setClear:function(et){zt!==et&&(u.clearStencil(et),zt=et)},reset:function(){K=!1,ue=null,be=null,Ce=null,ke=null,lt=null,ut=null,yt=null,zt=null}}}const o=new i,a=new s,c=new r,h=new WeakMap,l=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,y=null,_=null,x=null,M=null,L=null,O=null,I=null,b=!1,w=null,N=null,U=null,P=null,k=null;const X=u.getParameter(35661);let ie=!1,H=0;const B=u.getParameter(7938);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),ie=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ie=H>=2);let ee=null,$={};const V=u.getParameter(3088),q=u.getParameter(2978),E=new gt().fromArray(V),T=new gt().fromArray(q);function C(K,ue,be){const Ce=new Uint8Array(4),ke=u.createTexture();u.bindTexture(K,ke),u.texParameteri(K,10241,9728),u.texParameteri(K,10240,9728);for(let lt=0;lt<be;lt++)u.texImage2D(ue+lt,0,6408,1,1,0,6408,5121,Ce);return ke}const G={};G[3553]=C(3553,3553,1),G[34067]=C(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),F(2929),a.setFunc(kr),ve(!1),Ge(yo),F(2884),ye(Gn);function F(K){d[K]!==!0&&(u.enable(K),d[K]=!0)}function te(K){d[K]!==!1&&(u.disable(K),d[K]=!1)}function Y(K,ue){return p[K]!==ue?(u.bindFramebuffer(K,ue),p[K]=ue,n&&(K===36009&&(p[36160]=ue),K===36160&&(p[36009]=ue)),!0):!1}function Z(K,ue){let be=v,Ce=!1;if(K)if(be=g.get(ue),be===void 0&&(be=[],g.set(ue,be)),K.isWebGLMultipleRenderTargets){const ke=K.texture;if(be.length!==ke.length||be[0]!==36064){for(let lt=0,ut=ke.length;lt<ut;lt++)be[lt]=36064+lt;be.length=ke.length,Ce=!0}}else be[0]!==36064&&(be[0]=36064,Ce=!0);else be[0]!==1029&&(be[0]=1029,Ce=!0);Ce&&(t.isWebGL2?u.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function se(K){return m!==K?(u.useProgram(K),m=K,!0):!1}const Ee={[Ii]:32774,[_c]:32778,[Mc]:32779};if(n)Ee[wo]=32775,Ee[So]=32776;else{const K=e.get("EXT_blend_minmax");K!==null&&(Ee[wo]=K.MIN_EXT,Ee[So]=K.MAX_EXT)}const pe={[bc]:0,[wc]:1,[Sc]:768,[xl]:770,[Lc]:776,[Cc]:774,[Ec]:772,[Ac]:769,[yl]:771,[Rc]:775,[Tc]:773};function ye(K,ue,be,Ce,ke,lt,ut,yt){if(K===Gn){f===!0&&(te(3042),f=!1);return}if(f===!1&&(F(3042),f=!0),K!==yc){if(K!==y||yt!==b){if((_!==Ii||L!==Ii)&&(u.blendEquation(32774),_=Ii,L=Ii),yt)switch(K){case Ni:u.blendFuncSeparate(1,771,1,771);break;case _o:u.blendFunc(1,1);break;case Mo:u.blendFuncSeparate(0,769,0,1);break;case bo:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ni:u.blendFuncSeparate(770,771,1,771);break;case _o:u.blendFunc(770,1);break;case Mo:u.blendFuncSeparate(0,769,0,1);break;case bo:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}x=null,M=null,O=null,I=null,y=K,b=yt}return}ke=ke||ue,lt=lt||be,ut=ut||Ce,(ue!==_||ke!==L)&&(u.blendEquationSeparate(Ee[ue],Ee[ke]),_=ue,L=ke),(be!==x||Ce!==M||lt!==O||ut!==I)&&(u.blendFuncSeparate(pe[be],pe[Ce],pe[lt],pe[ut]),x=be,M=Ce,O=lt,I=ut),y=K,b=!1}function he(K,ue){K.side===gn?te(2884):F(2884);let be=K.side===Xt;ue&&(be=!be),ve(be),K.blending===Ni&&K.transparent===!1?ye(Gn):ye(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),o.setMask(K.colorWrite);const Ce=K.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(K.stencilWriteMask),c.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),c.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),He(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?F(32926):te(32926)}function ve(K){w!==K&&(K?u.frontFace(2304):u.frontFace(2305),w=K)}function Ge(K){K!==gc?(F(2884),K!==N&&(K===yo?u.cullFace(1029):K===vc?u.cullFace(1028):u.cullFace(1032))):te(2884),N=K}function Ue(K){K!==U&&(ie&&u.lineWidth(K),U=K)}function He(K,ue,be){K?(F(32823),(P!==ue||k!==be)&&(u.polygonOffset(ue,be),P=ue,k=be)):te(32823)}function Ae(K){K?F(3089):te(3089)}function je(K){K===void 0&&(K=33984+X-1),ee!==K&&(u.activeTexture(K),ee=K)}function D(K,ue,be){be===void 0&&(ee===null?be=33984+X-1:be=ee);let Ce=$[be];Ce===void 0&&(Ce={type:void 0,texture:void 0},$[be]=Ce),(Ce.type!==K||Ce.texture!==ue)&&(ee!==be&&(u.activeTexture(be),ee=be),u.bindTexture(K,ue||G[K]),Ce.type=K,Ce.texture=ue)}function A(){const K=$[ee];K!==void 0&&K.type!==void 0&&(u.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ne(){try{u.compressedTexImage2D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function de(){try{u.compressedTexImage3D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xe(){try{u.texSubImage2D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{u.texSubImage3D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function W(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{u.compressedTexSubImage3D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function re(){try{u.texStorage2D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Re(){try{u.texStorage3D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Be(){try{u.texImage2D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Oe(){try{u.texImage3D.apply(u,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pe(K){E.equals(K)===!1&&(u.scissor(K.x,K.y,K.z,K.w),E.copy(K))}function Ve(K){T.equals(K)===!1&&(u.viewport(K.x,K.y,K.z,K.w),T.copy(K))}function We(K,ue){let be=l.get(ue);be===void 0&&(be=new WeakMap,l.set(ue,be));let Ce=be.get(K);Ce===void 0&&(Ce=u.getUniformBlockIndex(ue,K.name),be.set(K,Ce))}function Ye(K,ue){const Ce=l.get(ue).get(K);h.get(ue)!==Ce&&(u.uniformBlockBinding(ue,Ce,K.__bindingPointIndex),h.set(ue,Ce))}function at(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),n===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),d={},ee=null,$={},p={},g=new WeakMap,v=[],m=null,f=!1,y=null,_=null,x=null,M=null,L=null,O=null,I=null,b=!1,w=null,N=null,U=null,P=null,k=null,E.set(0,0,u.canvas.width,u.canvas.height),T.set(0,0,u.canvas.width,u.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:F,disable:te,bindFramebuffer:Y,drawBuffers:Z,useProgram:se,setBlending:ye,setMaterial:he,setFlipSided:ve,setCullFace:Ge,setLineWidth:Ue,setPolygonOffset:He,setScissorTest:Ae,activeTexture:je,bindTexture:D,unbindTexture:A,compressedTexImage2D:ne,compressedTexImage3D:de,texImage2D:Be,texImage3D:Oe,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:re,texStorage3D:Re,texSubImage2D:xe,texSubImage3D:_e,compressedTexSubImage2D:W,compressedTexSubImage3D:me,scissor:Pe,viewport:Ve,reset:at}}function ym(u,e,t,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,l=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,A){return f?new OffscreenCanvas(D,A):fs("canvas")}function _(D,A,ne,de){let xe=1;if((D.width>de||D.height>de)&&(xe=de/Math.max(D.width,D.height)),xe<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const _e=A?Cl:Math.floor,W=_e(xe*D.width),me=_e(xe*D.height);v===void 0&&(v=y(W,me));const re=ne?y(W,me):v;return re.width=W,re.height=me,re.getContext("2d").drawImage(D,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+W+"x"+me+")."),re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function x(D){return Yr(D.width)&&Yr(D.height)}function M(D){return o?!1:D.wrapS!==rn||D.wrapT!==rn||D.minFilter!==Ct&&D.minFilter!==qt}function L(D,A){return D.generateMipmaps&&A&&D.minFilter!==Ct&&D.minFilter!==qt}function O(D){u.generateMipmap(D)}function I(D,A,ne,de,xe=!1){if(o===!1)return A;if(D!==null){if(u[D]!==void 0)return u[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e=A;return A===6403&&(ne===5126&&(_e=33326),ne===5131&&(_e=33325),ne===5121&&(_e=33321)),A===33319&&(ne===5126&&(_e=33328),ne===5131&&(_e=33327),ne===5121&&(_e=33323)),A===6408&&(ne===5126&&(_e=34836),ne===5131&&(_e=34842),ne===5121&&(_e=de===dt&&xe===!1?35907:32856),ne===32819&&(_e=32854),ne===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function b(D,A,ne){return L(D,ne)===!0||D.isFramebufferTexture&&D.minFilter!==Ct&&D.minFilter!==qt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){return D===Ct||D===Wr||D===js?9728:9729}function N(D){const A=D.target;A.removeEventListener("dispose",N),P(A),A.isVideoTexture&&g.delete(A)}function U(D){const A=D.target;A.removeEventListener("dispose",U),X(A)}function P(D){const A=n.get(D);if(A.__webglInit===void 0)return;const ne=D.source,de=m.get(ne);if(de){const xe=de[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&k(D),Object.keys(de).length===0&&m.delete(ne)}n.remove(D)}function k(D){const A=n.get(D);u.deleteTexture(A.__webglTexture);const ne=D.source,de=m.get(ne);delete de[A.__cacheKey],r.memory.textures--}function X(D){const A=D.texture,ne=n.get(D),de=n.get(A);if(de.__webglTexture!==void 0&&(u.deleteTexture(de.__webglTexture),r.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)u.deleteFramebuffer(ne.__webglFramebuffer[xe]),ne.__webglDepthbuffer&&u.deleteRenderbuffer(ne.__webglDepthbuffer[xe]);else{if(u.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&u.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&u.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let xe=0;xe<ne.__webglColorRenderbuffer.length;xe++)ne.__webglColorRenderbuffer[xe]&&u.deleteRenderbuffer(ne.__webglColorRenderbuffer[xe]);ne.__webglDepthRenderbuffer&&u.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let xe=0,_e=A.length;xe<_e;xe++){const W=n.get(A[xe]);W.__webglTexture&&(u.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(A[xe])}n.remove(A),n.remove(D)}let ie=0;function H(){ie=0}function B(){const D=ie;return D>=a&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a),ie+=1,D}function ee(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.encoding),A.join()}function $(D,A){const ne=n.get(D);if(D.isVideoTexture&&Ae(D),D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ne,D,A);return}}t.bindTexture(3553,ne.__webglTexture,33984+A)}function V(D,A){const ne=n.get(D);if(D.version>0&&ne.__version!==D.version){te(ne,D,A);return}t.bindTexture(35866,ne.__webglTexture,33984+A)}function q(D,A){const ne=n.get(D);if(D.version>0&&ne.__version!==D.version){te(ne,D,A);return}t.bindTexture(32879,ne.__webglTexture,33984+A)}function E(D,A){const ne=n.get(D);if(D.version>0&&ne.__version!==D.version){Y(ne,D,A);return}t.bindTexture(34067,ne.__webglTexture,33984+A)}const T={[Vi]:10497,[rn]:33071,[Qs]:33648},C={[Ct]:9728,[Wr]:9984,[js]:9986,[qt]:9729,[bl]:9985,[ii]:9987};function G(D,A,ne){if(ne?(u.texParameteri(D,10242,T[A.wrapS]),u.texParameteri(D,10243,T[A.wrapT]),(D===32879||D===35866)&&u.texParameteri(D,32882,T[A.wrapR]),u.texParameteri(D,10240,C[A.magFilter]),u.texParameteri(D,10241,C[A.minFilter])):(u.texParameteri(D,10242,33071),u.texParameteri(D,10243,33071),(D===32879||D===35866)&&u.texParameteri(D,32882,33071),(A.wrapS!==rn||A.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(D,10240,w(A.magFilter)),u.texParameteri(D,10241,w(A.minFilter)),A.minFilter!==Ct&&A.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ct||A.minFilter!==js&&A.minFilter!==ii||A.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===hs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(u.texParameterf(D,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function F(D,A){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",N));const de=A.source;let xe=m.get(de);xe===void 0&&(xe={},m.set(de,xe));const _e=ee(A);if(_e!==D.__cacheKey){xe[_e]===void 0&&(xe[_e]={texture:u.createTexture(),usedTimes:0},r.memory.textures++,ne=!0),xe[_e].usedTimes++;const W=xe[D.__cacheKey];W!==void 0&&(xe[D.__cacheKey].usedTimes--,W.usedTimes===0&&k(A)),D.__cacheKey=_e,D.__webglTexture=xe[_e].texture}return ne}function te(D,A,ne){let de=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=35866),A.isData3DTexture&&(de=32879);const xe=F(D,A),_e=A.source;t.bindTexture(de,D.__webglTexture,33984+ne);const W=n.get(_e);if(_e.version!==W.__version||xe===!0){t.activeTexture(33984+ne),u.pixelStorei(37440,A.flipY),u.pixelStorei(37441,A.premultiplyAlpha),u.pixelStorei(3317,A.unpackAlignment),u.pixelStorei(37443,0);const me=M(A)&&x(A.image)===!1;let re=_(A.image,me,!1,h);re=je(A,re);const Re=x(re)||o,Be=s.convert(A.format,A.encoding);let Oe=s.convert(A.type),Pe=I(A.internalFormat,Be,Oe,A.encoding,A.isVideoTexture);G(de,A,Re);let Ve;const We=A.mipmaps,Ye=o&&A.isVideoTexture!==!0,at=W.__version===void 0||xe===!0,K=b(A,re,Re);if(A.isDepthTexture)Pe=6402,o?A.type===Hn?Pe=36012:A.type===Qn?Pe=33190:A.type===Bi?Pe=35056:Pe=33189:A.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ti&&Pe===6402&&A.type!==wl&&A.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Qn,Oe=s.convert(A.type)),A.format===ki&&Pe===6402&&(Pe=34041,A.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Bi,Oe=s.convert(A.type))),at&&(Ye?t.texStorage2D(3553,1,Pe,re.width,re.height):t.texImage2D(3553,0,Pe,re.width,re.height,0,Be,Oe,null));else if(A.isDataTexture)if(We.length>0&&Re){Ye&&at&&t.texStorage2D(3553,K,Pe,We[0].width,We[0].height);for(let ue=0,be=We.length;ue<be;ue++)Ve=We[ue],Ye?t.texSubImage2D(3553,ue,0,0,Ve.width,Ve.height,Be,Oe,Ve.data):t.texImage2D(3553,ue,Pe,Ve.width,Ve.height,0,Be,Oe,Ve.data);A.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(3553,K,Pe,re.width,re.height),t.texSubImage2D(3553,0,0,0,re.width,re.height,Be,Oe,re.data)):t.texImage2D(3553,0,Pe,re.width,re.height,0,Be,Oe,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(35866,K,Pe,We[0].width,We[0].height,re.depth);for(let ue=0,be=We.length;ue<be;ue++)Ve=We[ue],A.format!==on?Be!==null?Ye?t.compressedTexSubImage3D(35866,ue,0,0,0,Ve.width,Ve.height,re.depth,Be,Ve.data,0,0):t.compressedTexImage3D(35866,ue,Pe,Ve.width,Ve.height,re.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(35866,ue,0,0,0,Ve.width,Ve.height,re.depth,Be,Oe,Ve.data):t.texImage3D(35866,ue,Pe,Ve.width,Ve.height,re.depth,0,Be,Oe,Ve.data)}else{Ye&&at&&t.texStorage2D(3553,K,Pe,We[0].width,We[0].height);for(let ue=0,be=We.length;ue<be;ue++)Ve=We[ue],A.format!==on?Be!==null?Ye?t.compressedTexSubImage2D(3553,ue,0,0,Ve.width,Ve.height,Be,Ve.data):t.compressedTexImage2D(3553,ue,Pe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,ue,0,0,Ve.width,Ve.height,Be,Oe,Ve.data):t.texImage2D(3553,ue,Pe,Ve.width,Ve.height,0,Be,Oe,Ve.data)}else if(A.isDataArrayTexture)Ye?(at&&t.texStorage3D(35866,K,Pe,re.width,re.height,re.depth),t.texSubImage3D(35866,0,0,0,0,re.width,re.height,re.depth,Be,Oe,re.data)):t.texImage3D(35866,0,Pe,re.width,re.height,re.depth,0,Be,Oe,re.data);else if(A.isData3DTexture)Ye?(at&&t.texStorage3D(32879,K,Pe,re.width,re.height,re.depth),t.texSubImage3D(32879,0,0,0,0,re.width,re.height,re.depth,Be,Oe,re.data)):t.texImage3D(32879,0,Pe,re.width,re.height,re.depth,0,Be,Oe,re.data);else if(A.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(3553,K,Pe,re.width,re.height);else{let ue=re.width,be=re.height;for(let Ce=0;Ce<K;Ce++)t.texImage2D(3553,Ce,Pe,ue,be,0,Be,Oe,null),ue>>=1,be>>=1}}else if(We.length>0&&Re){Ye&&at&&t.texStorage2D(3553,K,Pe,We[0].width,We[0].height);for(let ue=0,be=We.length;ue<be;ue++)Ve=We[ue],Ye?t.texSubImage2D(3553,ue,0,0,Be,Oe,Ve):t.texImage2D(3553,ue,Pe,Be,Oe,Ve);A.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(3553,K,Pe,re.width,re.height),t.texSubImage2D(3553,0,0,0,Be,Oe,re)):t.texImage2D(3553,0,Pe,Be,Oe,re);L(A,Re)&&O(de),W.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Y(D,A,ne){if(A.image.length!==6)return;const de=F(D,A),xe=A.source;t.bindTexture(34067,D.__webglTexture,33984+ne);const _e=n.get(xe);if(xe.version!==_e.__version||de===!0){t.activeTexture(33984+ne),u.pixelStorei(37440,A.flipY),u.pixelStorei(37441,A.premultiplyAlpha),u.pixelStorei(3317,A.unpackAlignment),u.pixelStorei(37443,0);const W=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,re=[];for(let ue=0;ue<6;ue++)!W&&!me?re[ue]=_(A.image[ue],!1,!0,c):re[ue]=me?A.image[ue].image:A.image[ue],re[ue]=je(A,re[ue]);const Re=re[0],Be=x(Re)||o,Oe=s.convert(A.format,A.encoding),Pe=s.convert(A.type),Ve=I(A.internalFormat,Oe,Pe,A.encoding),We=o&&A.isVideoTexture!==!0,Ye=_e.__version===void 0||de===!0;let at=b(A,Re,Be);G(34067,A,Be);let K;if(W){We&&Ye&&t.texStorage2D(34067,at,Ve,Re.width,Re.height);for(let ue=0;ue<6;ue++){K=re[ue].mipmaps;for(let be=0;be<K.length;be++){const Ce=K[be];A.format!==on?Oe!==null?We?t.compressedTexSubImage2D(34069+ue,be,0,0,Ce.width,Ce.height,Oe,Ce.data):t.compressedTexImage2D(34069+ue,be,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+ue,be,0,0,Ce.width,Ce.height,Oe,Pe,Ce.data):t.texImage2D(34069+ue,be,Ve,Ce.width,Ce.height,0,Oe,Pe,Ce.data)}}}else{K=A.mipmaps,We&&Ye&&(K.length>0&&at++,t.texStorage2D(34067,at,Ve,re[0].width,re[0].height));for(let ue=0;ue<6;ue++)if(me){We?t.texSubImage2D(34069+ue,0,0,0,re[ue].width,re[ue].height,Oe,Pe,re[ue].data):t.texImage2D(34069+ue,0,Ve,re[ue].width,re[ue].height,0,Oe,Pe,re[ue].data);for(let be=0;be<K.length;be++){const ke=K[be].image[ue].image;We?t.texSubImage2D(34069+ue,be+1,0,0,ke.width,ke.height,Oe,Pe,ke.data):t.texImage2D(34069+ue,be+1,Ve,ke.width,ke.height,0,Oe,Pe,ke.data)}}else{We?t.texSubImage2D(34069+ue,0,0,0,Oe,Pe,re[ue]):t.texImage2D(34069+ue,0,Ve,Oe,Pe,re[ue]);for(let be=0;be<K.length;be++){const Ce=K[be];We?t.texSubImage2D(34069+ue,be+1,0,0,Oe,Pe,Ce.image[ue]):t.texImage2D(34069+ue,be+1,Ve,Oe,Pe,Ce.image[ue])}}}L(A,Be)&&O(34067),_e.__version=xe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Z(D,A,ne,de,xe){const _e=s.convert(ne.format,ne.encoding),W=s.convert(ne.type),me=I(ne.internalFormat,_e,W,ne.encoding);n.get(A).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,me,A.width,A.height,A.depth,0,_e,W,null):t.texImage2D(xe,0,me,A.width,A.height,0,_e,W,null)),t.bindFramebuffer(36160,D),He(A)?d.framebufferTexture2DMultisampleEXT(36160,de,xe,n.get(ne).__webglTexture,0,Ue(A)):(xe===3553||xe>=34069&&xe<=34074)&&u.framebufferTexture2D(36160,de,xe,n.get(ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function se(D,A,ne){if(u.bindRenderbuffer(36161,D),A.depthBuffer&&!A.stencilBuffer){let de=33189;if(ne||He(A)){const xe=A.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Hn?de=36012:xe.type===Qn&&(de=33190));const _e=Ue(A);He(A)?d.renderbufferStorageMultisampleEXT(36161,_e,de,A.width,A.height):u.renderbufferStorageMultisample(36161,_e,de,A.width,A.height)}else u.renderbufferStorage(36161,de,A.width,A.height);u.framebufferRenderbuffer(36160,36096,36161,D)}else if(A.depthBuffer&&A.stencilBuffer){const de=Ue(A);ne&&He(A)===!1?u.renderbufferStorageMultisample(36161,de,35056,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(36161,de,35056,A.width,A.height):u.renderbufferStorage(36161,34041,A.width,A.height),u.framebufferRenderbuffer(36160,33306,36161,D)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0;xe<de.length;xe++){const _e=de[xe],W=s.convert(_e.format,_e.encoding),me=s.convert(_e.type),re=I(_e.internalFormat,W,me,_e.encoding),Re=Ue(A);ne&&He(A)===!1?u.renderbufferStorageMultisample(36161,Re,re,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(36161,Re,re,A.width,A.height):u.renderbufferStorage(36161,re,A.width,A.height)}}u.bindRenderbuffer(36161,null)}function Ee(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);const de=n.get(A.depthTexture).__webglTexture,xe=Ue(A);if(A.depthTexture.format===ti)He(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,de,0,xe):u.framebufferTexture2D(36160,36096,3553,de,0);else if(A.depthTexture.format===ki)He(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,de,0,xe):u.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function pe(D){const A=n.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ee(A.__webglFramebuffer,D)}else if(ne){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=u.createRenderbuffer(),se(A.__webglDepthbuffer[de],D,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=u.createRenderbuffer(),se(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(36160,null)}function ye(D,A,ne){const de=n.get(D);A!==void 0&&Z(de.__webglFramebuffer,D,D.texture,36064,3553),ne!==void 0&&pe(D)}function he(D){const A=D.texture,ne=n.get(D),de=n.get(A);D.addEventListener("dispose",U),D.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=u.createTexture()),de.__version=A.version,r.memory.textures++);const xe=D.isWebGLCubeRenderTarget===!0,_e=D.isWebGLMultipleRenderTargets===!0,W=x(D)||o;if(xe){ne.__webglFramebuffer=[];for(let me=0;me<6;me++)ne.__webglFramebuffer[me]=u.createFramebuffer()}else{if(ne.__webglFramebuffer=u.createFramebuffer(),_e)if(i.drawBuffers){const me=D.texture;for(let re=0,Re=me.length;re<Re;re++){const Be=n.get(me[re]);Be.__webglTexture===void 0&&(Be.__webglTexture=u.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&He(D)===!1){const me=_e?A:[A];ne.__webglMultisampledFramebuffer=u.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer);for(let re=0;re<me.length;re++){const Re=me[re];ne.__webglColorRenderbuffer[re]=u.createRenderbuffer(),u.bindRenderbuffer(36161,ne.__webglColorRenderbuffer[re]);const Be=s.convert(Re.format,Re.encoding),Oe=s.convert(Re.type),Pe=I(Re.internalFormat,Be,Oe,Re.encoding,D.isXRRenderTarget===!0),Ve=Ue(D);u.renderbufferStorageMultisample(36161,Ve,Pe,D.width,D.height),u.framebufferRenderbuffer(36160,36064+re,36161,ne.__webglColorRenderbuffer[re])}u.bindRenderbuffer(36161,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=u.createRenderbuffer(),se(ne.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,de.__webglTexture),G(34067,A,W);for(let me=0;me<6;me++)Z(ne.__webglFramebuffer[me],D,A,36064,34069+me);L(A,W)&&O(34067),t.unbindTexture()}else if(_e){const me=D.texture;for(let re=0,Re=me.length;re<Re;re++){const Be=me[re],Oe=n.get(Be);t.bindTexture(3553,Oe.__webglTexture),G(3553,Be,W),Z(ne.__webglFramebuffer,D,Be,36064+re,3553),L(Be,W)&&O(3553)}t.unbindTexture()}else{let me=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?me=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,de.__webglTexture),G(me,A,W),Z(ne.__webglFramebuffer,D,A,36064,me),L(A,W)&&O(me),t.unbindTexture()}D.depthBuffer&&pe(D)}function ve(D){const A=x(D)||o,ne=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let de=0,xe=ne.length;de<xe;de++){const _e=ne[de];if(L(_e,A)){const W=D.isWebGLCubeRenderTarget?34067:3553,me=n.get(_e).__webglTexture;t.bindTexture(W,me),O(W),t.unbindTexture()}}}function Ge(D){if(o&&D.samples>0&&He(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ne=D.width,de=D.height;let xe=16384;const _e=[],W=D.stencilBuffer?33306:36096,me=n.get(D),re=D.isWebGLMultipleRenderTargets===!0;if(re)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Re,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Re,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){_e.push(36064+Re),D.depthBuffer&&_e.push(W);const Be=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Be===!1&&(D.depthBuffer&&(xe|=256),D.stencilBuffer&&(xe|=1024)),re&&u.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Re]),Be===!0&&(u.invalidateFramebuffer(36008,[W]),u.invalidateFramebuffer(36009,[W])),re){const Oe=n.get(A[Re]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,Oe,0)}u.blitFramebuffer(0,0,ne,de,0,0,ne,de,xe,9728),p&&u.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),re)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Re,36161,me.__webglColorRenderbuffer[Re]);const Be=n.get(A[Re]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Re,3553,Be,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function Ue(D){return Math.min(l,D.samples)}function He(D){const A=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ae(D){const A=r.render.frame;g.get(D)!==A&&(g.set(D,A),D.update())}function je(D,A){const ne=D.encoding,de=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===jr||ne!==ri&&(ne===dt?o===!1?e.has("EXT_sRGB")===!0&&de===on?(D.format=jr,D.minFilter=qt,D.generateMipmaps=!1):A=Ll.sRGBToLinear(A):(de!==on||xe!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),A}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=E,this.rebindTextures=ye,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=He}function _m(u,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===si)return 5121;if(s===Yc)return 32819;if(s===$c)return 32820;if(s===qc)return 5120;if(s===Xc)return 5122;if(s===wl)return 5123;if(s===jc)return 5124;if(s===Qn)return 5125;if(s===Hn)return 5126;if(s===hs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Kc)return 6406;if(s===on)return 6408;if(s===Zc)return 6409;if(s===Jc)return 6410;if(s===ti)return 6402;if(s===ki)return 34041;if(s===jr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qc)return 6403;if(s===eh)return 36244;if(s===th)return 33319;if(s===nh)return 33320;if(s===ih)return 36249;if(s===rr||s===or||s===ar||s===lr)if(r===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ar)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ao||s===Eo||s===To||s===Co)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===To)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ro||s===Lo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ro)return r===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Lo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Po||s===Io||s===Do||s===No||s===Bo||s===Fo||s===Uo||s===Oo||s===zo||s===Vo||s===ko||s===Ho||s===Go||s===Wo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Po)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Io)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Do)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===No)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ko)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ho)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Go)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===cr)return r===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rh||s===qo||s===Xo||s===jo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===cr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):u[s]!==void 0?u[s]:null}return{convert:i}}class Mm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ei extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bm={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],d=h.position.distanceTo(l.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wm extends Dt{constructor(e,t,n,i,s,r,o,a,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=Qn),n===void 0&&h===ki&&(n=Bi),super(null,i,s,r,o,a,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=a!==void 0?a:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Sm extends hi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,c=null,h=null,l=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,f=null;const y=[],_=[],x=new Set,M=new Map,L=new Ht;L.layers.enable(1),L.viewport=new gt;const O=new Ht;O.layers.enable(2),O.viewport=new gt;const I=[L,O],b=new Mm;b.layers.enable(1),b.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let T=y[E];return T===void 0&&(T=new Ir,y[E]=T),T.getTargetRaySpace()},this.getControllerGrip=function(E){let T=y[E];return T===void 0&&(T=new Ir,y[E]=T),T.getGripSpace()},this.getHand=function(E){let T=y[E];return T===void 0&&(T=new Ir,y[E]=T),T.getHandSpace()};function U(E){const T=_.indexOf(E.inputSource);if(T===-1)return;const C=y[T];C!==void 0&&C.dispatchEvent({type:E.type,data:E.inputSource})}function P(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",k);for(let E=0;E<y.length;E++){const T=_[E];T!==null&&(_[E]=null,y[E].disconnect(T))}w=null,N=null,e.setRenderTarget(m),p=null,d=null,l=null,i=null,f=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){s=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(E){c=E},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(E){if(i=E,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",P),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const T={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,T),i.updateRenderState({baseLayer:p}),f=new oi(p.framebufferWidth,p.framebufferHeight,{format:on,type:si,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let T=null,C=null,G=null;v.depth&&(G=v.stencil?35056:33190,T=v.stencil?ki:ti,C=v.stencil?Bi:Qn);const F={colorFormat:32856,depthFormat:G,scaleFactor:s};l=new XRWebGLBinding(i,t),d=l.createProjectionLayer(F),i.updateRenderState({layers:[d]}),f=new oi(d.textureWidth,d.textureHeight,{format:on,type:si,depthTexture:new wm(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,T),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const te=e.properties.get(f);te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(a),c=null,r=await i.requestReferenceSpace(o),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(E){for(let T=0;T<E.removed.length;T++){const C=E.removed[T],G=_.indexOf(C);G>=0&&(_[G]=null,y[G].disconnect(C))}for(let T=0;T<E.added.length;T++){const C=E.added[T];let G=_.indexOf(C);if(G===-1){for(let te=0;te<y.length;te++)if(te>=_.length){_.push(C),G=te;break}else if(_[te]===null){_[te]=C,G=te;break}if(G===-1)break}const F=y[G];F&&F.connect(C)}}const X=new J,ie=new J;function H(E,T,C){X.setFromMatrixPosition(T.matrixWorld),ie.setFromMatrixPosition(C.matrixWorld);const G=X.distanceTo(ie),F=T.projectionMatrix.elements,te=C.projectionMatrix.elements,Y=F[14]/(F[10]-1),Z=F[14]/(F[10]+1),se=(F[9]+1)/F[5],Ee=(F[9]-1)/F[5],pe=(F[8]-1)/F[0],ye=(te[8]+1)/te[0],he=Y*pe,ve=Y*ye,Ge=G/(-pe+ye),Ue=Ge*-pe;T.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Ue),E.translateZ(Ge),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();const He=Y+Ge,Ae=Z+Ge,je=he-Ue,D=ve+(G-Ue),A=se*Z/Ae*He,ne=Ee*Z/Ae*He;E.projectionMatrix.makePerspective(je,D,A,ne,He,Ae),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}function B(E,T){T===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(T.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(i===null)return;b.near=O.near=L.near=E.near,b.far=O.far=L.far=E.far,(w!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,N=b.far);const T=E.parent,C=b.cameras;B(b,T);for(let G=0;G<C.length;G++)B(C[G],T);C.length===2?H(b,L,O):b.projectionMatrix.copy(L.projectionMatrix),ee(E,b,T)};function ee(E,T,C){C===null?E.matrix.copy(T.matrixWorld):(E.matrix.copy(C.matrixWorld),E.matrix.invert(),E.matrix.multiply(T.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0);const G=E.children;for(let F=0,te=G.length;F<te;F++)G[F].updateMatrixWorld(!0);E.projectionMatrix.copy(T.projectionMatrix),E.projectionMatrixInverse.copy(T.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Gi*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return a},this.setFoveation=function(E){a=E,d!==null&&(d.fixedFoveation=E),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=E)},this.getPlanes=function(){return x};let $=null;function V(E,T){if(h=T.getViewerPose(c||r),g=T,h!==null){const C=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let G=!1;C.length!==b.cameras.length&&(b.cameras.length=0,G=!0);for(let F=0;F<C.length;F++){const te=C[F];let Y=null;if(p!==null)Y=p.getViewport(te);else{const se=l.getViewSubImage(d,te);Y=se.viewport,F===0&&(e.setRenderTargetTextures(f,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(f))}let Z=I[F];Z===void 0&&(Z=new Ht,Z.layers.enable(F),Z.viewport=new gt,I[F]=Z),Z.matrix.fromArray(te.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(te.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Y.x,Y.y,Y.width,Y.height),F===0&&(b.matrix.copy(Z.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),G===!0&&b.cameras.push(Z)}}for(let C=0;C<y.length;C++){const G=_[C],F=y[C];G!==null&&F!==void 0&&F.update(G,T,c||r)}if($&&$(E,T),T.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:T.detectedPlanes});let C=null;for(const G of x)T.detectedPlanes.has(G)||(C===null&&(C=[]),C.push(G));if(C!==null)for(const G of C)x.delete(G),M.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of T.detectedPlanes)if(!x.has(G))x.add(G),M.set(G,T.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const F=M.get(G);G.lastChangedTime>F&&(M.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}g=null}const q=new Vl;q.setAnimationLoop(V),this.setAnimationLoop=function(E){$=E},this.dispose=function(){}}}function Am(u,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ul(u)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),l(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,y,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=u.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Em(u,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?u.getParameter(35375):0;function a(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(y,M);const L=e.render.frame;s[y.id]!==L&&(d(y),s[y.id]=L)}function h(y){const _=l();y.__bindingPointIndex=_;const x=u.createBuffer(),M=y.__size,L=y.usage;return u.bindBuffer(35345,x),u.bufferData(35345,M,L),u.bindBuffer(35345,null),u.bindBufferBase(35345,_,x),x}function l(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,M=y.__cache;u.bindBuffer(35345,_);for(let L=0,O=x.length;L<O;L++){const I=x[L];if(p(I,L,M)===!0){const b=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let U=0;U<w.length;U++){const P=w[U],k=v(P);typeof P=="number"?(I.__data[0]=P,u.bufferSubData(35345,b+N,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=P.elements[0],I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=P.elements[0],I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=P.elements[0]):(P.toArray(I.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}u.bufferSubData(35345,b,I.__data)}}u.bindBuffer(35345,null)}function p(y,_,x){const M=y.value;if(x[_]===void 0){if(typeof M=="number")x[_]=M;else{const L=Array.isArray(M)?M:[M],O=[];for(let I=0;I<L.length;I++)O.push(L[I].clone());x[_]=O}return!0}else if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const L=Array.isArray(x[_])?x[_]:[x[_]],O=Array.isArray(M)?M:[M];for(let I=0;I<L.length;I++){const b=L[I];if(b.equals(O[I])===!1)return b.copy(O[I]),!0}}return!1}function g(y){const _=y.uniforms;let x=0;const M=16;let L=0;for(let O=0,I=_.length;O<I;O++){const b=_[O],w={boundary:0,storage:0},N=Array.isArray(b.value)?b.value:[b.value];for(let U=0,P=N.length;U<P;U++){const k=N[U],X=v(k);w.boundary+=X.boundary,w.storage+=X.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,O>0){L=x%M;const U=M-L;L!==0&&U-w.boundary<0&&(x+=M-L,b.__offset=x)}x+=w.storage}return L=x%M,L>0&&(x+=M-L),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),u.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function f(){for(const y in i)u.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:a,update:c,dispose:f}}function Tm(){const u=fs("canvas");return u.style.display="block",u}class ql{constructor(e={}){const{canvas:t=Tm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;let p=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ri,this.useLegacyLights=!0,this.toneMapping=Pn,this.toneMappingExposure=1;const f=this;let y=!1,_=0,x=0,M=null,L=-1,O=null;const I=new gt,b=new gt;let w=null,N=t.width,U=t.height,P=1,k=null,X=null;const ie=new gt(0,0,N,U),H=new gt(0,0,N,U);let B=!1;const ee=new ro;let $=!1,V=!1,q=null;const E=new st,T=new J,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return M===null?P:1}let F=n;function te(S,R){for(let j=0;j<S.length;j++){const z=S[j],Q=t.getContext(z,R);if(Q!==null)return Q}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),F===null){const R=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&R.shift(),F=te(R,S),F===null)throw te(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,Z,se,Ee,pe,ye,he,ve,Ge,Ue,He,Ae,je,D,A,ne,de,xe,_e,W,me,re,Re,Be;function Oe(){Y=new Of(F),Z=new If(F,Y,e),Y.init(Z),re=new _m(F,Y,Z),se=new xm(F,Y,Z),Ee=new kf,pe=new sm,ye=new ym(F,Y,se,pe,Z,re,Ee),he=new Nf(f),ve=new Uf(f),Ge=new Jh(F,Z),Re=new Lf(F,Y,Ge,Z),Ue=new zf(F,Ge,Ee,Re),He=new qf(F,Ue,Ge,Ee),_e=new Wf(F,Z,ye),ne=new Df(pe),Ae=new im(f,he,ve,Y,Z,Re,ne),je=new Am(f,pe),D=new om,A=new dm(Y,Z),xe=new Rf(f,he,ve,se,He,d,a),de=new vm(f,He,Z),Be=new Em(F,Ee,Z,se),W=new Pf(F,Y,Ee,Z),me=new Vf(F,Y,Ee,Z),Ee.programs=Ae.programs,f.capabilities=Z,f.extensions=Y,f.properties=pe,f.renderLists=D,f.shadowMap=de,f.state=se,f.info=Ee}Oe();const Pe=new Sm(f,F);this.xr=Pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(S){S!==void 0&&(P=S,this.setSize(N,U,!1))},this.getSize=function(S){return S.set(N,U)},this.setSize=function(S,R,j=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,U=R,t.width=Math.floor(S*P),t.height=Math.floor(R*P),j===!0&&(t.style.width=S+"px",t.style.height=R+"px"),this.setViewport(0,0,S,R)},this.getDrawingBufferSize=function(S){return S.set(N*P,U*P).floor()},this.setDrawingBufferSize=function(S,R,j){N=S,U=R,P=j,t.width=Math.floor(S*j),t.height=Math.floor(R*j),this.setViewport(0,0,S,R)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,R,j,z){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,R,j,z),se.viewport(I.copy(ie).multiplyScalar(P).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,R,j,z){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,R,j,z),se.scissor(b.copy(H).multiplyScalar(P).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(S){se.setScissorTest(B=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,R=!0,j=!0){let z=0;S&&(z|=16384),R&&(z|=256),j&&(z|=1024),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),D.dispose(),A.dispose(),pe.dispose(),he.dispose(),ve.dispose(),He.dispose(),Re.dispose(),Be.dispose(),Ae.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ke),Pe.removeEventListener("sessionend",lt),q&&(q.dispose(),q=null),ut.stop()};function Ve(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Ee.autoReset,R=de.enabled,j=de.autoUpdate,z=de.needsUpdate,Q=de.type;Oe(),Ee.autoReset=S,de.enabled=R,de.autoUpdate=j,de.needsUpdate=z,de.type=Q}function Ye(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const R=S.target;R.removeEventListener("dispose",at),K(R)}function K(S){ue(S),pe.remove(S)}function ue(S){const R=pe.get(S).programs;R!==void 0&&(R.forEach(function(j){Ae.releaseProgram(j)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,R,j,z,Q,le){R===null&&(R=C);const ae=Q.isMesh&&Q.matrixWorld.determinant()<0,ge=qe(S,R,j,z,Q);se.setMaterial(z,ae);let Se=j.index,Le=1;z.wireframe===!0&&(Se=Ue.getWireframeAttribute(j),Le=2);const ce=j.drawRange,Ie=j.attributes.position;let ze=ce.start*Le,it=(ce.start+ce.count)*Le;le!==null&&(ze=Math.max(ze,le.start*Le),it=Math.min(it,(le.start+le.count)*Le)),Se!==null?(ze=Math.max(ze,0),it=Math.min(it,Se.count)):Ie!=null&&(ze=Math.max(ze,0),it=Math.min(it,Ie.count));const Xe=it-ze;if(Xe<0||Xe===1/0)return;Re.setup(Q,z,ge,j,Se);let Ze,Fe=W;if(Se!==null&&(Ze=Ge.get(Se),Fe=me,Fe.setIndex(Ze)),Q.isMesh)z.wireframe===!0?(se.setLineWidth(z.wireframeLinewidth*G()),Fe.setMode(1)):Fe.setMode(4);else if(Q.isLine){let $e=z.linewidth;$e===void 0&&($e=1),se.setLineWidth($e*G()),Q.isLineSegments?Fe.setMode(1):Q.isLineLoop?Fe.setMode(2):Fe.setMode(3)}else Q.isPoints?Fe.setMode(0):Q.isSprite&&Fe.setMode(4);if(Q.isInstancedMesh)Fe.renderInstances(ze,Xe,Q.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,$e);Fe.renderInstances(ze,Xe,Nt)}else Fe.render(ze,Xe)},this.compile=function(S,R){function j(z,Q,le){z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,Me(z,Q,le),z.side=In,z.needsUpdate=!0,Me(z,Q,le),z.side=gn):Me(z,Q,le)}g=A.get(S),g.init(),m.push(g),S.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights(f.useLegacyLights),S.traverse(function(z){const Q=z.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const ae=Q[le];j(ae,S,z)}else j(Q,S,z)}),m.pop(),g=null};let be=null;function Ce(S){be&&be(S)}function ke(){ut.stop()}function lt(){ut.start()}const ut=new Vl;ut.setAnimationLoop(Ce),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(S){be=S,Pe.setAnimationLoop(S),S===null?ut.stop():ut.start()},Pe.addEventListener("sessionstart",ke),Pe.addEventListener("sessionend",lt),this.render=function(S,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(R),R=Pe.getCamera()),S.isScene===!0&&S.onBeforeRender(f,S,R,M),g=A.get(S,m.length),g.init(),m.push(g),E.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ee.setFromProjectionMatrix(E),V=this.localClippingEnabled,$=ne.init(this.clippingPlanes,V),p=D.get(S,v.length),p.init(),v.push(p),yt(S,R,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(k,X),$===!0&&ne.beginShadows();const j=g.state.shadowsArray;if(de.render(j,S,R),$===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(p,S),g.setupLights(f.useLegacyLights),R.isArrayCamera){const z=R.cameras;for(let Q=0,le=z.length;Q<le;Q++){const ae=z[Q];zt(p,S,ae,ae.viewport)}}else zt(p,S,R);M!==null&&(ye.updateMultisampleRenderTarget(M),ye.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(f,S,R),Re.resetDefaultState(),L=-1,O=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function yt(S,R,j,z){if(S.visible===!1)return;if(S.layers.test(R.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(R);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){z&&T.setFromMatrixPosition(S.matrixWorld).applyMatrix4(E);const ae=He.update(S),ge=S.material;ge.visible&&p.push(S,ae,ge,j,T.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ee.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ee.render.frame),!S.frustumCulled||ee.intersectsObject(S))){z&&T.setFromMatrixPosition(S.matrixWorld).applyMatrix4(E);const ae=He.update(S),ge=S.material;if(Array.isArray(ge)){const Se=ae.groups;for(let Le=0,ce=Se.length;Le<ce;Le++){const Ie=Se[Le],ze=ge[Ie.materialIndex];ze&&ze.visible&&p.push(S,ae,ze,j,T.z,Ie)}}else ge.visible&&p.push(S,ae,ge,j,T.z,null)}}const le=S.children;for(let ae=0,ge=le.length;ae<ge;ae++)yt(le[ae],R,j,z)}function zt(S,R,j,z){const Q=S.opaque,le=S.transmissive,ae=S.transparent;g.setupLightsView(j),$===!0&&ne.setGlobalState(f.clippingPlanes,j),le.length>0&&et(Q,le,R,j),z&&se.viewport(I.copy(z)),Q.length>0&&oe(Q,R,j),le.length>0&&oe(le,R,j),ae.length>0&&oe(ae,R,j),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function et(S,R,j,z){if(q===null){const ge=Z.isWebGL2;q=new oi(1024,1024,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?hs:si,minFilter:ii,samples:ge&&o===!0?4:0})}const Q=f.getRenderTarget();f.setRenderTarget(q),f.clear();const le=f.toneMapping;f.toneMapping=Pn,oe(S,j,z),ye.updateMultisampleRenderTarget(q),ye.updateRenderTargetMipmap(q);let ae=!1;for(let ge=0,Se=R.length;ge<Se;ge++){const Le=R[ge],ce=Le.object,Ie=Le.geometry,ze=Le.material,it=Le.group;if(ze.side===gn&&ce.layers.test(z.layers)){const Xe=ze.side;ze.side=Xt,ze.needsUpdate=!0,fe(ce,j,z,Ie,ze,it),ze.side=Xe,ze.needsUpdate=!0,ae=!0}}ae===!0&&(ye.updateMultisampleRenderTarget(q),ye.updateRenderTargetMipmap(q)),f.setRenderTarget(Q),f.toneMapping=le}function oe(S,R,j){const z=R.isScene===!0?R.overrideMaterial:null;for(let Q=0,le=S.length;Q<le;Q++){const ae=S[Q],ge=ae.object,Se=ae.geometry,Le=z===null?ae.material:z,ce=ae.group;ge.layers.test(j.layers)&&fe(ge,R,j,Se,Le,ce)}}function fe(S,R,j,z,Q,le){S.onBeforeRender(f,R,j,z,Q,le),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(f,R,j,z,S,le),Q.transparent===!0&&Q.side===gn&&Q.forceSinglePass===!1?(Q.side=Xt,Q.needsUpdate=!0,f.renderBufferDirect(j,R,z,Q,S,le),Q.side=In,Q.needsUpdate=!0,f.renderBufferDirect(j,R,z,Q,S,le),Q.side=gn):f.renderBufferDirect(j,R,z,Q,S,le),S.onAfterRender(f,R,j,z,Q,le)}function Me(S,R,j){R.isScene!==!0&&(R=C);const z=pe.get(S),Q=g.state.lights,le=g.state.shadowsArray,ae=Q.state.version,ge=Ae.getParameters(S,Q.state,le,R,j),Se=Ae.getProgramCacheKey(ge);let Le=z.programs;z.environment=S.isMeshStandardMaterial?R.environment:null,z.fog=R.fog,z.envMap=(S.isMeshStandardMaterial?ve:he).get(S.envMap||z.environment),Le===void 0&&(S.addEventListener("dispose",at),Le=new Map,z.programs=Le);let ce=Le.get(Se);if(ce!==void 0){if(z.currentProgram===ce&&z.lightsStateVersion===ae)return we(S,ge),ce}else ge.uniforms=Ae.getUniforms(S),S.onBuild(j,ge,f),S.onBeforeCompile(ge,f),ce=Ae.acquireProgram(ge,Se),Le.set(Se,ce),z.uniforms=ge.uniforms;const Ie=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=ne.uniform),we(S,ge),z.needsLights=Te(S),z.lightsStateVersion=ae,z.needsLights&&(Ie.ambientLightColor.value=Q.state.ambient,Ie.lightProbe.value=Q.state.probe,Ie.directionalLights.value=Q.state.directional,Ie.directionalLightShadows.value=Q.state.directionalShadow,Ie.spotLights.value=Q.state.spot,Ie.spotLightShadows.value=Q.state.spotShadow,Ie.rectAreaLights.value=Q.state.rectArea,Ie.ltc_1.value=Q.state.rectAreaLTC1,Ie.ltc_2.value=Q.state.rectAreaLTC2,Ie.pointLights.value=Q.state.point,Ie.pointLightShadows.value=Q.state.pointShadow,Ie.hemisphereLights.value=Q.state.hemi,Ie.directionalShadowMap.value=Q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ie.spotShadowMap.value=Q.state.spotShadowMap,Ie.spotLightMatrix.value=Q.state.spotLightMatrix,Ie.spotLightMap.value=Q.state.spotLightMap,Ie.pointShadowMap.value=Q.state.pointShadowMap,Ie.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ze=ce.getUniforms(),it=Ys.seqWithValue(ze.seq,Ie);return z.currentProgram=ce,z.uniformsList=it,ce}function we(S,R){const j=pe.get(S);j.outputEncoding=R.outputEncoding,j.instancing=R.instancing,j.skinning=R.skinning,j.morphTargets=R.morphTargets,j.morphNormals=R.morphNormals,j.morphColors=R.morphColors,j.morphTargetsCount=R.morphTargetsCount,j.numClippingPlanes=R.numClippingPlanes,j.numIntersection=R.numClipIntersection,j.vertexAlphas=R.vertexAlphas,j.vertexTangents=R.vertexTangents,j.toneMapping=R.toneMapping}function qe(S,R,j,z,Q){R.isScene!==!0&&(R=C),ye.resetTextureUnits();const le=R.fog,ae=z.isMeshStandardMaterial?R.environment:null,ge=M===null?f.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:ri,Se=(z.isMeshStandardMaterial?ve:he).get(z.envMap||ae),Le=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ce=!!z.normalMap&&!!j.attributes.tangent,Ie=!!j.morphAttributes.position,ze=!!j.morphAttributes.normal,it=!!j.morphAttributes.color,Xe=z.toneMapped?f.toneMapping:Pn,Ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=Ze!==void 0?Ze.length:0,$e=pe.get(z),Nt=g.state.lights;if($===!0&&(V===!0||S!==O)){const ft=S===O&&z.id===L;ne.setState(z,S,ft)}let ct=!1;z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Nt.state.version||$e.outputEncoding!==ge||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Se||z.fog===!0&&$e.fog!==le||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ne.numPlanes||$e.numIntersection!==ne.numIntersection)||$e.vertexAlphas!==Le||$e.vertexTangents!==ce||$e.morphTargets!==Ie||$e.morphNormals!==ze||$e.morphColors!==it||$e.toneMapping!==Xe||Z.isWebGL2===!0&&$e.morphTargetsCount!==Fe)&&(ct=!0):(ct=!0,$e.__version=z.version);let Rt=$e.currentProgram;ct===!0&&(Rt=Me(z,R,Q));let Lt=!1,ht=!1,Yt=!1;const tt=Rt.getUniforms(),Pt=$e.uniforms;if(se.useProgram(Rt.program)&&(Lt=!0,ht=!0,Yt=!0),z.id!==L&&(L=z.id,ht=!0),Lt||O!==S){if(tt.setValue(F,"projectionMatrix",S.projectionMatrix),Z.logarithmicDepthBuffer&&tt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),O!==S&&(O=S,ht=!0,Yt=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const ft=tt.map.cameraPosition;ft!==void 0&&ft.setValue(F,T.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&tt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Q.isSkinnedMesh)&&tt.setValue(F,"viewMatrix",S.matrixWorldInverse)}if(Q.isSkinnedMesh){tt.setOptional(F,Q,"bindMatrix"),tt.setOptional(F,Q,"bindMatrixInverse");const ft=Q.skeleton;ft&&(Z.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),tt.setValue(F,"boneTexture",ft.boneTexture,ye),tt.setValue(F,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const At=j.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0&&Z.isWebGL2===!0)&&_e.update(Q,j,Rt),(ht||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,tt.setValue(F,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pt.envMap.value=Se,Pt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),ht&&(tt.setValue(F,"toneMappingExposure",f.toneMappingExposure),$e.needsLights&&De(Pt,Yt),le&&z.fog===!0&&je.refreshFogUniforms(Pt,le),je.refreshMaterialUniforms(Pt,z,P,U,q),Ys.upload(F,$e.uniformsList,Pt,ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ys.upload(F,$e.uniformsList,Pt,ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&tt.setValue(F,"center",Q.center),tt.setValue(F,"modelViewMatrix",Q.modelViewMatrix),tt.setValue(F,"normalMatrix",Q.normalMatrix),tt.setValue(F,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ft=z.uniformsGroups;for(let Mt=0,Wt=ft.length;Mt<Wt;Mt++)if(Z.isWebGL2){const en=ft[Mt];Be.update(en,Rt),Be.bind(en,Rt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rt}function De(S,R){S.ambientLightColor.needsUpdate=R,S.lightProbe.needsUpdate=R,S.directionalLights.needsUpdate=R,S.directionalLightShadows.needsUpdate=R,S.pointLights.needsUpdate=R,S.pointLightShadows.needsUpdate=R,S.spotLights.needsUpdate=R,S.spotLightShadows.needsUpdate=R,S.rectAreaLights.needsUpdate=R,S.hemisphereLights.needsUpdate=R}function Te(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,R,j){pe.get(S.texture).__webglTexture=R,pe.get(S.depthTexture).__webglTexture=j;const z=pe.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,R){const j=pe.get(S);j.__webglFramebuffer=R,j.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(S,R=0,j=0){M=S,_=R,x=j;let z=!0,Q=null,le=!1,ae=!1;if(S){const Se=pe.get(S);Se.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),z=!1):Se.__webglFramebuffer===void 0?ye.setupRenderTarget(S):Se.__hasExternalTextures&&ye.rebindTextures(S,pe.get(S.texture).__webglTexture,pe.get(S.depthTexture).__webglTexture);const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ae=!0);const ce=pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Q=ce[R],le=!0):Z.isWebGL2&&S.samples>0&&ye.useMultisampledRTT(S)===!1?Q=pe.get(S).__webglMultisampledFramebuffer:Q=ce,I.copy(S.viewport),b.copy(S.scissor),w=S.scissorTest}else I.copy(ie).multiplyScalar(P).floor(),b.copy(H).multiplyScalar(P).floor(),w=B;if(se.bindFramebuffer(36160,Q)&&Z.drawBuffers&&z&&se.drawBuffers(S,Q),se.viewport(I),se.scissor(b),se.setScissorTest(w),le){const Se=pe.get(S.texture);F.framebufferTexture2D(36160,36064,34069+R,Se.__webglTexture,j)}else if(ae){const Se=pe.get(S.texture),Le=R||0;F.framebufferTextureLayer(36160,36064,Se.__webglTexture,j||0,Le)}L=-1},this.readRenderTargetPixels=function(S,R,j,z,Q,le,ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(ge=ge[ae]),ge){se.bindFramebuffer(36160,ge);try{const Se=S.texture,Le=Se.format,ce=Se.type;if(Le!==on&&re.convert(Le)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=ce===hs&&(Y.has("EXT_color_buffer_half_float")||Z.isWebGL2&&Y.has("EXT_color_buffer_float"));if(ce!==si&&re.convert(ce)!==F.getParameter(35738)&&!(ce===Hn&&(Z.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=S.width-z&&j>=0&&j<=S.height-Q&&F.readPixels(R,j,z,Q,re.convert(Le),re.convert(ce),le)}finally{const Se=M!==null?pe.get(M).__webglFramebuffer:null;se.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(S,R,j=0){const z=Math.pow(2,-j),Q=Math.floor(R.image.width*z),le=Math.floor(R.image.height*z);ye.setTexture2D(R,0),F.copyTexSubImage2D(3553,j,0,0,S.x,S.y,Q,le),se.unbindTexture()},this.copyTextureToTexture=function(S,R,j,z=0){const Q=R.image.width,le=R.image.height,ae=re.convert(j.format),ge=re.convert(j.type);ye.setTexture2D(j,0),F.pixelStorei(37440,j.flipY),F.pixelStorei(37441,j.premultiplyAlpha),F.pixelStorei(3317,j.unpackAlignment),R.isDataTexture?F.texSubImage2D(3553,z,S.x,S.y,Q,le,ae,ge,R.image.data):R.isCompressedTexture?F.compressedTexSubImage2D(3553,z,S.x,S.y,R.mipmaps[0].width,R.mipmaps[0].height,ae,R.mipmaps[0].data):F.texSubImage2D(3553,z,S.x,S.y,ae,ge,R.image),z===0&&j.generateMipmaps&&F.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(S,R,j,z,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=S.max.x-S.min.x+1,ae=S.max.y-S.min.y+1,ge=S.max.z-S.min.z+1,Se=re.convert(z.format),Le=re.convert(z.type);let ce;if(z.isData3DTexture)ye.setTexture3D(z,0),ce=32879;else if(z.isDataArrayTexture)ye.setTexture2DArray(z,0),ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,z.flipY),F.pixelStorei(37441,z.premultiplyAlpha),F.pixelStorei(3317,z.unpackAlignment);const Ie=F.getParameter(3314),ze=F.getParameter(32878),it=F.getParameter(3316),Xe=F.getParameter(3315),Ze=F.getParameter(32877),Fe=j.isCompressedTexture?j.mipmaps[0]:j.image;F.pixelStorei(3314,Fe.width),F.pixelStorei(32878,Fe.height),F.pixelStorei(3316,S.min.x),F.pixelStorei(3315,S.min.y),F.pixelStorei(32877,S.min.z),j.isDataTexture||j.isData3DTexture?F.texSubImage3D(ce,Q,R.x,R.y,R.z,le,ae,ge,Se,Le,Fe.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ce,Q,R.x,R.y,R.z,le,ae,ge,Se,Fe.data)):F.texSubImage3D(ce,Q,R.x,R.y,R.z,le,ae,ge,Se,Le,Fe),F.pixelStorei(3314,Ie),F.pixelStorei(32878,ze),F.pixelStorei(3316,it),F.pixelStorei(3315,Xe),F.pixelStorei(32877,Ze),Q===0&&z.generateMipmaps&&F.generateMipmap(ce),se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ye.setTextureCube(S,0):S.isData3DTexture?ye.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ye.setTexture2DArray(S,0):ye.setTexture2D(S,0),se.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,se.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Cm extends ql{}Cm.prototype.isWebGL1Renderer=!0;class Rm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Lm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new J;class lo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ba=new J,Fa=new gt,Ua=new gt,Pm=new J,Oa=new st,Li=new J;class Im extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Li.fromBufferAttribute(t,n),this.applyBoneTransform(n,Li),this.boundingBox.expandByPoint(Li)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Li.fromBufferAttribute(t,n),this.applyBoneTransform(n,Li),this.boundingSphere.expandByPoint(Li)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fa.fromBufferAttribute(i.attributes.skinIndex,e),Ua.fromBufferAttribute(i.attributes.skinWeight,e),Ba.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ua.getComponent(s);if(r!==0){const o=Fa.getComponent(s);Oa.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pm.copy(Ba).applyMatrix4(Oa),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Xl extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dm extends Dt{constructor(e=null,t=1,n=1,i,s,r,o,a,c=Ct,h=Ct,l,d){super(null,r,o,a,c,h,i,s,l,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const za=new st,Nm=new st;class co{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Nm;za.multiplyMatrices(o,t[s]),za.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new co(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Dm(t,e,e,on,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Xl),this.bones.push(r),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Va extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pi=new st,ka=new st,ks=[],Ha=new Dn,Bm=new st,ts=new Ot,ns=new Nn;class Fm extends Ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Ha.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Ha)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ns.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Pi),ka.multiplyMatrices(n,Pi),ts.matrixWorld=ka,ts.raycast(e,ks);for(let r=0,o=ks.length;r<o;r++){const a=ks[r];a.instanceId=s,a.object=this,t.push(a)}ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ho extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new J,Wa=new J,qa=new st,Dr=new so,Hs=new Nn;class uo extends xt{constructor(e=new an,t=new ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ga.fromBufferAttribute(t,i-1),Wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;qa.copy(i).invert(),Dr.copy(e.ray).applyMatrix4(qa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=new J,h=new J,l=new J,d=new J,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let _=f,x=y-1;_<x;_+=p){const M=g.getX(_),L=g.getX(_+1);if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,L),Dr.distanceSqToSegment(c,h,d,l)>a)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let _=f,x=y-1;_<x;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Dr.distanceSqToSegment(c,h,d,l)>a)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Xa=new J,ja=new J;class jl extends uo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Xa.fromBufferAttribute(t,i),ja.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xa.distanceTo(ja);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Um extends uo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yl extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ya=new st,Kr=new so,Gs=new Nn,Ws=new J;class Om extends xt{constructor(e=new an,t=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;Ya.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Ya);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=n.index,l=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Ws.fromBufferAttribute(l,m),$a(Ws,m,a,i,e,t,this)}}else{const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=d,v=p;g<v;g++)Ws.fromBufferAttribute(l,g),$a(Ws,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $a(u,e,t,n,i,s,r){const o=Kr.distanceSqToPoint(u);if(o<t){const a=new J;Kr.closestPointToPoint(u,a),a.applyMatrix4(n);const c=i.ray.origin.distanceTo(a);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class fo extends an{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let c=0;const h=[],l=new J,d=new J,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const y=[],_=f/n;let x=0;f===0&&r===0?x=.5/t:f===n&&a===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const L=M/t;l.x=-e*Math.cos(i+L*s)*Math.sin(r+_*o),l.y=e*Math.cos(r+_*o),l.z=e*Math.sin(i+L*s)*Math.sin(r+_*o),g.push(l.x,l.y,l.z),d.copy(l).normalize(),v.push(d.x,d.y,d.z),m.push(L+x,1-_),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const _=h[f][y+1],x=h[f][y],M=h[f+1][y],L=h[f+1][y+1];(f!==0||r>0)&&p.push(_,x,L),(f!==n-1||a<Math.PI)&&p.push(x,M,L)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class po extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends po{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function zn(u,e,t){return $l(u)?new u.constructor(u.subarray(e,t!==void 0?t:u.length)):u.slice(e,t)}function qs(u,e,t){return!u||!t&&u.constructor===e?u:typeof e.BYTES_PER_ELEMENT=="number"?new e(u):Array.prototype.slice.call(u)}function $l(u){return ArrayBuffer.isView(u)&&!(u instanceof DataView)}function zm(u){function e(i,s){return u[i]-u[s]}const t=u.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ka(u,e,t){const n=u.length,i=new u.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let a=0;a!==e;++a)i[r++]=u[o+a]}return i}function Kl(u,e,t,n){let i=1,s=u[0];for(;s!==void 0&&s[n]===void 0;)s=u[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=u[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=u[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=u[i++];while(s!==void 0)}class xs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vm extends xs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yo,endingEnd:Yo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case $o:s=e,o=2*t-n;break;case Ko:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case $o:r=e,a=2*n-t;break;case Ko:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let M=0;M!==o;++M)s[M]=f*r[h+M]+y*r[c+M]+_*r[a+M]+x*r[l+M];return s}}class km extends xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,h=(n-t)/(i-t),l=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*l+r[a+d]*h;return s}}class Hm extends xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case Hi:t=this.InterpolantFactoryMethodLinear;break;case hr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Hi;case this.InterpolantFactoryMethodSmooth:return hr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=zn(n,s,r),this.values=zn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0&&$l(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=zn(this.times),t=zn(this.values),n=this.getValueSize(),i=this.getInterpolation()===hr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let a=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)a=!0;else{const l=o*n,d=l-n,p=l+n;for(let g=0;g!==n;++g){const v=t[l+g];if(v!==t[d+g]||v!==t[p+g]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const l=o*n,d=r*n;for(let p=0;p!==n;++p)t[d+p]=t[l+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,c=0;c!==n;++c)t[a+c]=t[o+c];++r}return r!==e.length?(this.times=zn(e,0,r),this.values=zn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=zn(this.times,0),t=zn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Hi;class $i extends Mn{}$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=us;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Zl extends Mn{}Zl.prototype.ValueTypeName="color";class ps extends Mn{}ps.prototype.ValueTypeName="number";class Gm extends xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(s,0,r,c-o,r,c,a);return s}}class li extends Mn{InterpolantFactoryMethodLinear(e){return new Gm(this.times,this.values,this.getValueSize(),e)}}li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=Hi;li.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends Mn{}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=us;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends Mn{}ms.prototype.ValueTypeName="vector";class Wm{constructor(e,t=-1,n,i=oh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Xm(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let a=[],c=[];a.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=zm(a);a=Ka(a,1,h),c=Ka(c,1,h),!i&&a[0]===0&&(a.push(s),c.push(c[0])),r.push(new ps(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const l=h[1];let d=i[l];d||(i[l]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,p,g,v){if(p.length!==0){const m=[],f=[];Kl(p,m,f,g),m.length!==0&&v.push(new l(d,m,f))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let l=0;l<c.length;l++){const d=c[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];m.push(_.time),f.push(_.morphTarget===v?1:0)}i.push(new ps(".morphTargetInfluence["+v+"]",m,f))}a=p.length*r}else{const p=".bones["+t[l].name+"]";n(ms,p+".position",d,"pos",i),n(li,p+".quaternion",d,"rot",i),n(ms,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qm(u){switch(u.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return Zl;case"quaternion":return li;case"bool":case"boolean":return $i;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+u)}function Xm(u){if(u.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qm(u.type);if(u.times===void 0){const t=[],n=[];Kl(u.keys,t,n,"value"),u.times=t,u.values=n}return e.parse!==void 0?e.parse(u):new e(u.name,u.times,u.values,u.interpolation)}const qi={enabled:!1,files:{},add:function(u,e){this.enabled!==!1&&(this.files[u]=e)},get:function(u){if(this.enabled!==!1)return this.files[u]},remove:function(u){delete this.files[u]},clear:function(){this.files={}}};class jm{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,l){return c.push(h,l),this},this.removeHandler=function(h){const l=c.indexOf(h);return l!==-1&&c.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=c.length;l<d;l+=2){const p=c[l],g=c[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Ym=new jm;class ys{constructor(e){this.manager=e!==void 0?e:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class $m extends Error{constructor(e,t){super(e),this.response=t}}class Jl extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Cn[e],l=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){y();function y(){l.read().then(({done:_,value:x})=>{if(_)f.close();else{v+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let L=0,O=h.length;L<O;L++){const I=h[L];I.onProgress&&I.onProgress(M)}f.enqueue(x),y()}})}}});return new Response(m)}else throw new $m(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(a){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{qi.add(e,c);const h=Cn[e];delete Cn[e];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Cn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Km extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=qi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=fs("img");function a(){h(),qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(l){h(),i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Zm extends ys{constructor(e){super(e)}load(e,t,n,i){const s=new Dt,r=new Km(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class sr extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Nr=new st,Za=new J,Ja=new J;class mo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Za.setFromMatrixPosition(e.matrixWorld),t.position.copy(Za),Ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ja),t.updateMatrixWorld(),Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jm extends mo{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qm extends sr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Jm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qa=new st,is=new J,Br=new J;class eg extends mo{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),Br.copy(n.position),Br.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Br),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),Qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa)}}class Ql extends sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new eg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tg extends mo{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ng extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ig extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sg extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=qi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(a){qi.add(e,a),t&&t(a),s.manager.itemEnd(e)}).catch(function(a){i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const go="\\[\\]\\.:\\/",rg=new RegExp("["+go+"]","g"),vo="[^"+go+"]",og="[^"+go.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",vo),lg=/(WCOD+)?/.source.replace("WCOD",og),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vo),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vo),ug=new RegExp("^"+ag+lg+cg+hg+"$"),dg=["material","materials","bones","map"];class fg{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(e){const t=ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);dg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=fg;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class el{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pg extends jl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Qe(n),i=new Qe(i);const s=t/2,r=e/t,o=e/2,a=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=r){a.push(-o,0,g,o,0,g),a.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new an;h.setAttribute("position",new jt(a,3)),h.setAttribute("color",new jt(c,3));const l=new ho({vertexColors:!0,toneMapped:!1});super(h,l),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);const tl={type:"change"},Fr={type:"start"},nl={type:"end"};class mg extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(W){W.addEventListener("keydown",Ae),this._domElementKeyEvents=W},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tl),n.update(),s=i.NONE},this.update=function(){const W=new J,me=new _n().setFromUnitVectors(e.up,new J(0,1,0)),re=me.clone().invert(),Re=new J,Be=new _n,Oe=2*Math.PI;return function(){const Ve=n.object.position;W.copy(Ve).sub(n.target),W.applyQuaternion(me),o.setFromVector3(W),n.autoRotate&&s===i.NONE&&b(O()),n.enableDamping?(o.theta+=a.theta*n.dampingFactor,o.phi+=a.phi*n.dampingFactor):(o.theta+=a.theta,o.phi+=a.phi);let We=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;return isFinite(We)&&isFinite(Ye)&&(We<-Math.PI?We+=Oe:We>Math.PI&&(We-=Oe),Ye<-Math.PI?Ye+=Oe:Ye>Math.PI&&(Ye-=Oe),We<=Ye?o.theta=Math.max(We,Math.min(Ye,o.theta)):o.theta=o.theta>(We+Ye)/2?Math.max(We,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),W.setFromSpherical(o),W.applyQuaternion(re),Ve.copy(n.target).add(W),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),h.set(0,0,0)),c=1,l||Re.distanceToSquared(n.object.position)>r||8*(1-Be.dot(n.object.quaternion))>r?(n.dispatchEvent(tl),Re.copy(n.object.position),Be.copy(n.object.quaternion),l=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",ve),n.domElement.removeEventListener("wheel",He),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",ve),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ae),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new el,a=new el;let c=1;const h=new J;let l=!1;const d=new Je,p=new Je,g=new Je,v=new Je,m=new Je,f=new Je,y=new Je,_=new Je,x=new Je,M=[],L={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function b(W){a.theta-=W}function w(W){a.phi-=W}const N=function(){const W=new J;return function(re,Re){W.setFromMatrixColumn(Re,0),W.multiplyScalar(-re),h.add(W)}}(),U=function(){const W=new J;return function(re,Re){n.screenSpacePanning===!0?W.setFromMatrixColumn(Re,1):(W.setFromMatrixColumn(Re,0),W.crossVectors(n.object.up,W)),W.multiplyScalar(re),h.add(W)}}(),P=function(){const W=new J;return function(re,Re){const Be=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;W.copy(Oe).sub(n.target);let Pe=W.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*re*Pe/Be.clientHeight,n.object.matrix),U(2*Re*Pe/Be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(re*(n.object.right-n.object.left)/n.object.zoom/Be.clientWidth,n.object.matrix),U(Re*(n.object.top-n.object.bottom)/n.object.zoom/Be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(W){n.object.isPerspectiveCamera?c/=W:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*W)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(W){n.object.isPerspectiveCamera?c*=W:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/W)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(W){d.set(W.clientX,W.clientY)}function H(W){y.set(W.clientX,W.clientY)}function B(W){v.set(W.clientX,W.clientY)}function ee(W){p.set(W.clientX,W.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const me=n.domElement;b(2*Math.PI*g.x/me.clientHeight),w(2*Math.PI*g.y/me.clientHeight),d.copy(p),n.update()}function $(W){_.set(W.clientX,W.clientY),x.subVectors(_,y),x.y>0?k(I()):x.y<0&&X(I()),y.copy(_),n.update()}function V(W){m.set(W.clientX,W.clientY),f.subVectors(m,v).multiplyScalar(n.panSpeed),P(f.x,f.y),v.copy(m),n.update()}function q(W){W.deltaY<0?X(I()):W.deltaY>0&&k(I()),n.update()}function E(W){let me=!1;switch(W.code){case n.keys.UP:W.ctrlKey||W.metaKey||W.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:W.ctrlKey||W.metaKey||W.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:W.ctrlKey||W.metaKey||W.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:W.ctrlKey||W.metaKey||W.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),me=!0;break}me&&(W.preventDefault(),n.update())}function T(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const W=.5*(M[0].pageX+M[1].pageX),me=.5*(M[0].pageY+M[1].pageY);d.set(W,me)}}function C(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const W=.5*(M[0].pageX+M[1].pageX),me=.5*(M[0].pageY+M[1].pageY);v.set(W,me)}}function G(){const W=M[0].pageX-M[1].pageX,me=M[0].pageY-M[1].pageY,re=Math.sqrt(W*W+me*me);y.set(0,re)}function F(){n.enableZoom&&G(),n.enablePan&&C()}function te(){n.enableZoom&&G(),n.enableRotate&&T()}function Y(W){if(M.length==1)p.set(W.pageX,W.pageY);else{const re=_e(W),Re=.5*(W.pageX+re.x),Be=.5*(W.pageY+re.y);p.set(Re,Be)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const me=n.domElement;b(2*Math.PI*g.x/me.clientHeight),w(2*Math.PI*g.y/me.clientHeight),d.copy(p)}function Z(W){if(M.length===1)m.set(W.pageX,W.pageY);else{const me=_e(W),re=.5*(W.pageX+me.x),Re=.5*(W.pageY+me.y);m.set(re,Re)}f.subVectors(m,v).multiplyScalar(n.panSpeed),P(f.x,f.y),v.copy(m)}function se(W){const me=_e(W),re=W.pageX-me.x,Re=W.pageY-me.y,Be=Math.sqrt(re*re+Re*Re);_.set(0,Be),x.set(0,Math.pow(_.y/y.y,n.zoomSpeed)),k(x.y),y.copy(_)}function Ee(W){n.enableZoom&&se(W),n.enablePan&&Z(W)}function pe(W){n.enableZoom&&se(W),n.enableRotate&&Y(W)}function ye(W){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(W.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",ve)),ne(W),W.pointerType==="touch"?je(W):Ge(W))}function he(W){n.enabled!==!1&&(W.pointerType==="touch"?D(W):Ue(W))}function ve(W){de(W),M.length===0&&(n.domElement.releasePointerCapture(W.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",ve)),n.dispatchEvent(nl),s=i.NONE}function Ge(W){let me;switch(W.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case di.DOLLY:if(n.enableZoom===!1)return;H(W),s=i.DOLLY;break;case di.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enablePan===!1)return;B(W),s=i.PAN}else{if(n.enableRotate===!1)return;ie(W),s=i.ROTATE}break;case di.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enableRotate===!1)return;ie(W),s=i.ROTATE}else{if(n.enablePan===!1)return;B(W),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fr)}function Ue(W){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(W);break;case i.DOLLY:if(n.enableZoom===!1)return;$(W);break;case i.PAN:if(n.enablePan===!1)return;V(W);break}}function He(W){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(W.preventDefault(),n.dispatchEvent(Fr),q(W),n.dispatchEvent(nl))}function Ae(W){n.enabled===!1||n.enablePan===!1||E(W)}function je(W){switch(xe(W),M.length){case 1:switch(n.touches.ONE){case fi.ROTATE:if(n.enableRotate===!1)return;T(),s=i.TOUCH_ROTATE;break;case fi.PAN:if(n.enablePan===!1)return;C(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(),s=i.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Fr)}function D(W){switch(xe(W),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Y(W),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Z(W),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(W),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(W),n.update();break;default:s=i.NONE}}function A(W){n.enabled!==!1&&W.preventDefault()}function ne(W){M.push(W)}function de(W){delete L[W.pointerId];for(let me=0;me<M.length;me++)if(M[me].pointerId==W.pointerId){M.splice(me,1);return}}function xe(W){let me=L[W.pointerId];me===void 0&&(me=new Je,L[W.pointerId]=me),me.set(W.pageX,W.pageY)}function _e(W){const me=W.pointerId===M[0].pointerId?M[1]:M[0];return L[me.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",ve),n.domElement.addEventListener("wheel",He,{passive:!1}),this.update()}}class Xi{static createButton(e){const t=document.createElement("button");function n(){let a=null;async function c(l){l.addEventListener("end",h),await e.xr.setSession(l),t.textContent="EXIT VR",a=l}function h(){a.removeEventListener("end",h),t.textContent="ENTER VR",a=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(a===null){const l={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",l).then(c)}else a.end()}}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function s(){i(),t.textContent="VR NOT SUPPORTED"}function r(a){i(),console.warn("Exception when trying to call xr.isSessionSupported",a),t.textContent="VR NOT ALLOWED"}function o(a){a.style.position="absolute",a.style.bottom="20px",a.style.padding="12px 6px",a.style.border="1px solid #fff",a.style.borderRadius="4px",a.style.background="rgba(0,0,0,0.1)",a.style.color="#fff",a.style.font="normal 13px sans-serif",a.style.textAlign="center",a.style.opacity="0.5",a.style.outline="none",a.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(a){a?n():s(),a&&Xi.xrSessionIsGranted&&t.click()}).catch(r),t;{const a=document.createElement("a");return window.isSecureContext===!1?(a.href=document.location.href.replace(/^http:/,"https:"),a.innerHTML="WEBXR NEEDS HTTPS"):(a.href="https://immersiveweb.dev/",a.innerHTML="WEBXR NOT AVAILABLE"),a.style.left="calc(50% - 90px)",a.style.width="180px",a.style.textDecoration="none",o(a),a}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Xi.xrSessionIsGranted=!0})}}}Xi.xrSessionIsGranted=!1;Xi.registerSessionGrantedListener();function il(u,e){if(e===ah)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),u;if(e===qr||e===Sl){let t=u.getIndex();if(t===null){const r=[],o=u.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);u.setIndex(r),t=u.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),u}const n=t.count-2,i=[];if(e===qr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=u.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),u}class ec extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _g(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Pg(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Zr.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},a=new Jl(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},a=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===tc){try{r[ot.KHR_BINARY_GLTF]=new Ig(e)}catch(l){i&&i(l);return}s=JSON.parse(r[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(a.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](c);o[l.name]=l,r[l.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const l=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(l){case ot.KHR_MATERIALS_UNLIT:r[l]=new xg;break;case ot.KHR_DRACO_MESH_COMPRESSION:r[l]=new Dg(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:r[l]=new Ng;break;case ot.KHR_MESH_QUANTIZATION:r[l]=new Bg;break;default:d.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function gg(){let u={};return{get:function(e){return u[e]},add:function(e,t){u[e]=t},remove:function(e){delete u[e]},removeAll:function(){u={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vg{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Qe(16777215);a.color!==void 0&&h.fromArray(a.color);const l=a.range!==void 0?a.range:0;switch(a.type){case"directional":c=new ng(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ql(h),c.distance=l;break;case"spot":c=new Qm(h),c.distance=l,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,c.angle=a.spot.outerConeAngle,c.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return c.position.set(0,0,0),c.decay=2,kn(c,a),a.intensity!==void 0&&(c.intensity=a.intensity),c.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class xg{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return vn}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,dt))}return Promise.all(i)}}class yg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _g{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(s)}}class Mg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class bg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,dt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class wg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Sg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Qe(o[0],o[1],o[2]),Promise.all(s)}}class Ag{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Eg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Qe(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,dt)),Promise.all(s)}}class Tg{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Cg{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Rg{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(a=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lg{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const a=i.byteOffset||0,c=i.byteLength||0,h=i.count,l=i.byteStride,d=new Uint8Array(o,a,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,l,d,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(h*l);return r.decodeGltfBuffer(new Uint8Array(p),h,l,d,i.mode,i.filter),p})})}else return null}}class Pg{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==nn.TRIANGLES&&c.mode!==nn.TRIANGLE_STRIP&&c.mode!==nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],a={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(a[c]=h,a[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),l=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of l){const v=new st,m=new J,f=new _n,y=new J(1,1,1),_=new Fm(g.geometry,g.material,d);for(let x=0;x<d;x++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,x),a.ROTATION&&f.fromBufferAttribute(a.ROTATION,x),a.SCALE&&y.fromBufferAttribute(a.SCALE,x),_.setMatrixAt(x,v.compose(m,f,y));for(const x in a)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,a[x]);xt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const tc="glTF",ss=12,sl={JSON:1313821514,BIN:5130562};class Ig{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ss,s=new DataView(e,ss);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===sl.JSON){const c=new Uint8Array(e,ss+r,o);this.content=n.decode(c)}else if(a===sl.BIN){const c=ss+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},c={};for(const h in r){const l=Jr[h]||h.toLowerCase();o[l]=r[h]}for(const h in e.attributes){const l=Jr[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ui[d.componentType];c[l]=p.name,a[l]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(l){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const g=d.attributes[p],v=a[p];v!==void 0&&(g.normalized=v)}l(d)},o,c)})})}}class Ng{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Bg{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class nc extends xs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,c=o*3,h=i-t,l=(n-t)/h,d=l*l,p=d*l,g=e*c,v=g-c,m=-2*p+3*d,f=p-d,y=1-m,_=f-d+l;for(let x=0;x!==o;x++){const M=r[v+x+o],L=r[v+x+a]*h,O=r[g+x+o],I=r[g+x]*h;s[x]=y*M+_*L+m*O+f*I}return s}}const Fg=new _n;class Ug extends nc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Fg.fromArray(s).normalize().toArray(s),s}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ui={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rl={9728:Ct,9729:qt,9984:Wr,9985:bl,9986:js,9987:ii},ol={33071:rn,33648:Qs,10497:Vi},Ur={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Og={CUBICSPLINE:void 0,LINEAR:Hi,STEP:us},Or={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zg(u){return u.DefaultMaterial===void 0&&(u.DefaultMaterial=new po({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),u.DefaultMaterial}function rs(u,e,t){for(const n in t.extensions)u[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(u,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(u.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vg(u,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const l=e[c];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(i=!0),l.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(u);const r=[],o=[],a=[];for(let c=0,h=e.length;c<h;c++){const l=e[c];if(n){const d=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):u.attributes.position;r.push(d)}if(i){const d=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):u.attributes.normal;o.push(d)}if(s){const d=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):u.attributes.color;a.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(c){const h=c[0],l=c[1],d=c[2];return n&&(u.morphAttributes.position=h),i&&(u.morphAttributes.normal=l),s&&(u.morphAttributes.color=d),u.morphTargetsRelative=!0,u})}function kg(u,e){if(u.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)u.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(u.morphTargetInfluences.length===t.length){u.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)u.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hg(u){const e=u.extensions&&u.extensions[ot.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+al(e.attributes):t=u.indices+":"+al(u.attributes)+":"+u.mode,t}function al(u){let e="";const t=Object.keys(u).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+u[t[n]]+";";return e}function Qr(u){switch(u){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gg(u){return u.search(/\.jpe?g($|\?)/i)>0||u.search(/^data\:image\/jpeg/)===0?"image/jpeg":u.search(/\.webp($|\?)/i)>0||u.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Wg=new st;class qg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Zm(this.options.manager):this.textureLoader=new sg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};rs(s,o,i),kn(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Zr.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Ur[i.type],o=Ui[i.componentType],a=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new Gt(c,r,a))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],a=Ur[i.type],c=Ui[i.componentType],h=c.BYTES_PER_ELEMENT,l=h*a,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(p&&p!==l){const f=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let _=t.cache.get(y);_||(v=new c(o,f*p,i.count*p/h),_=new Lm(v,p/h),t.cache.add(y,_)),m=new lo(_,a,d%p/h,g)}else o===null?v=new c(i.count*a):v=new c(o,d,i.count*a),m=new Gt(v,a,g);if(i.sparse!==void 0){const f=Ur.SCALAR,y=Ui[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new y(r[1],_,i.sparse.count*f),L=new c(r[2],x,i.sparse.count*a);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized));for(let O=0,I=M.length;O<I;O++){const b=M[O];if(m.setX(b,L[O*a]),a>=2&&m.setY(b,L[O*a+1]),a>=3&&m.setZ(b,L[O*a+2]),a>=4&&m.setW(b,L[O*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=rl[d.magFilter]||qt,h.minFilter=rl[d.minFilter]||ii,h.wrapS=ol[d.wrapS]||Vi,h.wrapT=ol[d.wrapT]||Vi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const r=i.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",c=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(l){c=!0;const d=new Blob([l],{type:r.mimeType});return a=o.createObjectURL(d),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(a).then(function(l){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Dt(v);m.needsUpdate=!0,d(m)}),t.load(Zr.resolveURL(l,s.path),g,void 0,p)})}).then(function(l){return c===!0&&o.revokeObjectURL(a),l.userData.mimeType=r.mimeType||Gg(r.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),l});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(r);r=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Yl,xn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new ho,xn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(o,a)),n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),s&&(a.vertexColors=!0),r&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return po}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},a=s.extensions||{},c=[];if(a[ot.KHR_MATERIALS_UNLIT]){const l=i[ot.KHR_MATERIALS_UNLIT];r=l.getMaterialType(),c.push(l.extendParams(o,s,t))}else{const l=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}l.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",l.baseColorTexture,dt)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=gn);const h=s.alphaMode||Or.OPAQUE;if(h===Or.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Or.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==vn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){const l=s.normalTexture.scale;o.normalScale.set(l,l)}return s.occlusionTexture!==void 0&&r!==vn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==vn&&(o.emissive=new Qe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==vn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,dt)),Promise.all(c).then(function(){const l=new r(o);return s.name&&(l.name=s.name),kn(l,s),t.associations.set(l,{materials:e}),s.extensions&&rs(i,l,s),l})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return ll(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o],h=Hg(c),l=i[h];if(l)r.push(l.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ll(new an,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,c=r.length;a<c;a++){const h=r[a].material===void 0?zg(this.cache):this.getDependency("material",r[a].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const c=a.slice(0,a.length-1),h=a[a.length-1],l=[];for(let p=0,g=h.length;p<g;p++){const v=h[p],m=r[p];let f;const y=c[p];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Im(v,y):new Ot(v,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?f.geometry=il(f.geometry,Sl):m.mode===nn.TRIANGLE_FAN&&(f.geometry=il(f.geometry,qr));else if(m.mode===nn.LINES)f=new jl(v,y);else if(m.mode===nn.LINE_STRIP)f=new uo(v,y);else if(m.mode===nn.LINE_LOOP)f=new Um(v,y);else if(m.mode===nn.POINTS)f=new Om(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&kg(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),kn(f,s),m.extensions&&rs(i,f,m),t.assignFinalMaterial(f),l.push(f)}for(let p=0,g=l.length;p<g;p++)t.associations.set(l[p],{meshes:e,primitives:p});if(l.length===1)return l[0];const d=new ei;t.associations.set(d,{meshes:e});for(let p=0,g=l.length;p<g;p++)d.add(l[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Ah.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new oo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],a=[];for(let c=0,h=r.length;c<h;c++){const l=r[c];if(l){o.push(l);const d=new st;s!==null&&d.fromArray(s.array,c*16),a.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new co(o,a)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],r=[],o=[],a=[],c=[];for(let h=0,l=n.channels.length;h<l;h++){const d=n.channels[h],p=n.samplers[d.sampler],g=d.target,v=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(s.push(this.getDependency("node",v)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),a.push(p),c.push(g))}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(h){const l=h[0],d=h[1],p=h[2],g=h[3],v=h[4],m=[];for(let f=0,y=l.length;f<y;f++){const _=l[f],x=d[f],M=p[f],L=g[f],O=v[f];if(_===void 0)continue;_.updateMatrix();let I;switch(Vn[O.path]){case Vn.weights:I=ps;break;case Vn.rotation:I=li;break;case Vn.position:case Vn.scale:default:I=ms;break}const b=_.name?_.name:_.uuid,w=L.interpolation!==void 0?Og[L.interpolation]:Hi,N=[];Vn[O.path]===Vn.weights?_.traverse(function(P){P.morphTargetInfluences&&N.push(P.name?P.name:P.uuid)}):N.push(b);let U=M.array;if(M.normalized){const P=Qr(U.constructor),k=new Float32Array(U.length);for(let X=0,ie=U.length;X<ie;X++)k[X]=U[X]*P;U=k}for(let P=0,k=N.length;P<k;P++){const X=new I(N[P]+"."+Vn[O.path],x.array,U,w);L.interpolation==="CUBICSPLINE"&&(X.createInterpolant=function(H){const B=this instanceof li?Ug:nc;return new B(this.times,this.values,this.getValueSize()/3,H)},X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(X)}}return new Wm(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let a=0,c=i.weights.length;a<c;a++)o.morphTargetInfluences[a]=i.weights[a]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)r.push(n.getDependency("node",o[c]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),a]).then(function(c){const h=c[0],l=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Wg)});for(let p=0,g=l.length;p<g;p++)h.add(l[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],a=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return a&&o.push(a),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Xl:c.length>1?h=new ei:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let l=0,d=c.length;l<d;l++)h.add(c[l]);if(s.name&&(h.userData.name=s.name,h.name=r),kn(h,s),s.extensions&&rs(n,h,s),s.matrix!==void 0){const l=new st;l.fromArray(s.matrix),h.applyMatrix4(l)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ei;n.name&&(s.name=i.createUniqueName(n.name)),kn(s,n),n.extensions&&rs(t,s,n);const r=n.nodes||[],o=[];for(let a=0,c=r.length;a<c;a++)o.push(i.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let h=0,l=a.length;h<l;h++)s.add(a[h]);const c=h=>{const l=new Map;for(const[d,p]of i.associations)(d instanceof xn||d instanceof Dt)&&l.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&l.set(d,p)}),l};return i.associations=c(s),s})}}function Xg(u,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,c=o.max;if(a!==void 0&&c!==void 0){if(i.set(new J(a[0],a[1],a[2]),new J(c[0],c[1],c[2])),o.normalized){const h=Qr(Ui[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new J,a=new J;for(let c=0,h=s.length;c<h;c++){const l=s[c];if(l.POSITION!==void 0){const d=t.json.accessors[l.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=Qr(Ui[d.componentType]);a.multiplyScalar(v)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}u.boundingBox=i;const r=new Nn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,u.boundingSphere=r}function ll(u,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(a){u.setAttribute(o,a)})}for(const r in n){const o=Jr[r]||r.toLowerCase();o in u.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!u.index){const r=t.getDependency("accessor",e.indices).then(function(o){u.setIndex(o)});i.push(r)}return kn(u,e),Xg(u,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vg(u,e.targets,t):u})}const _t={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function ic(u){const e=await fetch(u);if(e.ok)return e.json();throw new Error(e.statusText)}async function jg(u){if(!u)throw new Error("No basePath supplied");return await ic(`${u}/profilesList.json`)}async function Yg(u,e,t=null,n=!0){if(!u)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await jg(e);let s;if(u.profiles.some(a=>{const c=i[a];return c&&(s={profileId:a,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}),!!s}),!s){if(!t)throw new Error("No matching profile name found");const a=i[t];if(!a)throw new Error(`No matching profile name found and default profile "${t}" missing.`);s={profileId:t,profilePath:`${e}/${a.path}`,deprecated:!!a.deprecated}}const r=await ic(s.profilePath);let o;if(n){let a;if(u.handedness==="any"?a=r.layouts[Object.keys(r.layouts)[0]]:a=r.layouts[u.handedness],!a)throw new Error(`No matching handedness, ${u.handedness}, in profile ${s.profileId}`);a.assetPath&&(o=s.profilePath.replace("profile.json",a.assetPath))}return{profile:r,assetPath:o}}const $g={xAxis:0,yAxis:0,button:0,state:_t.ComponentState.DEFAULT};function Kg(u=0,e=0){let t=u,n=e;if(Math.sqrt(u*u+e*e)>1){const r=Math.atan2(e,u);t=Math.cos(r),n=Math.sin(r)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class Zg{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===_t.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent($g)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:s,normalizedYAxis:r}=Kg(e,t);switch(this.componentProperty){case _t.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?s:.5;break;case _t.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?r:.5;break;case _t.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case _t.ComponentProperty.STATE:this.valueNodeProperty===_t.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class Jg{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new Zg(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:_t.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=_t.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=_t.ComponentState.PRESSED:(t.touched||this.values.button>_t.ButtonTouchThreshold)&&(this.values.state=_t.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===_t.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>_t.AxisTouchThreshold&&(this.values.state=_t.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===_t.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>_t.AxisTouchThreshold&&(this.values.state=_t.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Qg{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const s=this.layoutDescription.components[i];this.components[i]=new Jg(i,s)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const ev="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",tv="generic-trigger";class nv extends xt{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:s,maxNode:r,value:o,valueNodeProperty:a}=n;i&&(a===_t.VisualResponseProperty.VISIBILITY?i.visible=o:a===_t.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(s.quaternion,r.quaternion,o),i.position.lerpVectors(s.position,r.position,o)))})}))}}function iv(u,e){Object.values(u.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:s}=t;if(n===_t.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const r=new fo(.001),o=new vn({color:255}),a=new Ot(r,o);t.touchPointNode.add(a)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(s).forEach(r=>{const{valueNodeName:o,minNodeName:a,maxNodeName:c,valueNodeProperty:h}=r;if(h===_t.VisualResponseProperty.TRANSFORM){if(r.minNode=e.getObjectByName(a),r.maxNode=e.getObjectByName(c),!r.minNode){console.warn(`Could not find ${a} in the model`);return}if(!r.maxNode){console.warn(`Could not find ${c} in the model`);return}}r.valueNode=e.getObjectByName(o),r.valueNode||console.warn(`Could not find ${o} in the model`)})})}function cl(u,e){iv(u.motionController,e),u.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=u.envMap,t.material.needsUpdate=!0)}),u.add(e)}class sv{constructor(e=null){this.gltfLoader=e,this.path=ev,this._assetCache={},this.gltfLoader||(this.gltfLoader=new ec)}createControllerModel(e){const t=new nv;let n=null;return e.addEventListener("connected",i=>{const s=i.data;s.targetRayMode!=="tracked-pointer"||!s.gamepad||Yg(s,this.path,tv).then(({profile:r,assetPath:o})=>{t.motionController=new Qg(s,r,o);const a=this._assetCache[t.motionController.assetUrl];if(a)n=a.scene.clone(),cl(t,n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,n=c.scene.clone(),cl(t,n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(r=>{console.warn(r)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}class rv{constructor(e,t){Kt(this,"jointObject");Kt(this,"jointEndObject");Kt(this,"length");this.length=e,this.jointObject=t,this.jointEndObject=new Ot,this.jointEndObject.visible=!1,this.jointEndObject.position.setZ(e),this.jointObject.add(this.jointEndObject)}setPosition(e,t,n){this.jointObject.position.set(e,t,n)}setEndPosition(e,t,n){const i=new J(e,t,n);let s=new J;s.subVectors(this.getPosition(),this.getEndPosition());let r=new J;r.addVectors(i,s),this.setPosition(r.x,r.y,r.z)}getPosition(){return this.jointObject.position}getEndPosition(){let e=new J;return this.jointEndObject.getWorldPosition(e),e}lookAt(e){this.jointObject.lookAt(e)}}function Xs(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var sc={exports:{}};(function(u,e){(function(t){u.exports=t()})(function(){return function t(n,i,s){function r(c,h){if(!i[c]){if(!n[c]){var l=typeof Xs=="function"&&Xs;if(!h&&l)return l(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}var d=i[c]={exports:{}};n[c][0].call(d.exports,function(p){var g=n[c][1][p];return r(g||p)},d,d.exports,t,n,i,s)}return i[c].exports}for(var o=typeof Xs=="function"&&Xs,a=0;a<s.length;a++)r(s[a]);return r}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var s=t("../math/Vec3");t("../utils/Utils"),n.exports=r;function r(c){c=c||{},this.lowerBound=new s,c.lowerBound&&this.lowerBound.copy(c.lowerBound),this.upperBound=new s,c.upperBound&&this.upperBound.copy(c.upperBound)}var o=new s;r.prototype.setFromPoints=function(c,h,l,d){var p=this.lowerBound,g=this.upperBound,v=l;p.copy(c[0]),v&&v.vmult(p,p),g.copy(p);for(var m=1;m<c.length;m++){var f=c[m];v&&(v.vmult(f,o),f=o),f.x>g.x&&(g.x=f.x),f.x<p.x&&(p.x=f.x),f.y>g.y&&(g.y=f.y),f.y<p.y&&(p.y=f.y),f.z>g.z&&(g.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(g,g)),d&&(p.x-=d,p.y-=d,p.z-=d,g.x+=d,g.y+=d,g.z+=d),this},r.prototype.copy=function(c){return this.lowerBound.copy(c.lowerBound),this.upperBound.copy(c.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(c){var h=c.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=c.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=c.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=c.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=c.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=c.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},r.prototype.overlaps=function(c){var h=this.lowerBound,l=this.upperBound,d=c.lowerBound,p=c.upperBound;return(d.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(d.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(d.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},r.prototype.contains=function(c){var h=this.lowerBound,l=this.upperBound,d=c.lowerBound,p=c.upperBound;return h.x<=d.x&&l.x>=p.x&&h.y<=d.y&&l.y>=p.y&&h.z<=d.z&&l.z>=p.z},r.prototype.getCorners=function(c,h,l,d,p,g,v,m){var f=this.lowerBound,y=this.upperBound;c.copy(f),h.set(y.x,f.y,f.z),l.set(y.x,y.y,f.z),d.set(f.x,y.y,y.z),p.set(y.x,f.y,f.z),g.set(f.x,y.y,f.z),v.set(f.x,f.y,y.z),m.copy(y)};var a=[new s,new s,new s,new s,new s,new s,new s,new s];r.prototype.toLocalFrame=function(c,h){var l=a,d=l[0],p=l[1],g=l[2],v=l[3],m=l[4],f=l[5],y=l[6],_=l[7];this.getCorners(d,p,g,v,m,f,y,_);for(var x=0;x!==8;x++){var M=l[x];c.pointToLocal(M,M)}return h.setFromPoints(l)},r.prototype.toWorldFrame=function(c,h){var l=a,d=l[0],p=l[1],g=l[2],v=l[3],m=l[4],f=l[5],y=l[6],_=l[7];this.getCorners(d,p,g,v,m,f,y,_);for(var x=0;x!==8;x++){var M=l[x];c.pointToWorld(M,M)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(r,o){if(r=r.index,o=o.index,o>r){var a=o;o=r,r=a}return this.matrix[(r*(r+1)>>1)+o-1]},s.prototype.set=function(r,o,a){if(r=r.index,o=o.index,o>r){var c=o;o=r,r=c}this.matrix[(r*(r+1)>>1)+o-1]=a?1:0},s.prototype.reset=function(){for(var r=0,o=this.matrix.length;r!==o;r++)this.matrix[r]=0},s.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(t,n,i){var s=t("../objects/Body"),r=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=a;function a(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}a.prototype.collisionPairs=function(v,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var c=s.STATIC|s.KINEMATIC;a.prototype.needBroadphaseCollision=function(v,m){return!(!(v.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&v.collisionFilterMask)||(v.type&c||v.sleepState===s.SLEEPING)&&(m.type&c||m.sleepState===s.SLEEPING))},a.prototype.intersectionTest=function(v,m,f,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(v,m,f,y):this.doBoundingSphereBroadphase(v,m,f,y)};var h=new r;new r,new o,new r,a.prototype.doBoundingSphereBroadphase=function(v,m,f,y){var _=h;m.position.vsub(v.position,_);var x=Math.pow(v.boundingRadius+m.boundingRadius,2),M=_.norm2();M<x&&(f.push(v),y.push(m))},a.prototype.doBoundingBoxBroadphase=function(v,m,f,y){v.aabbNeedsUpdate&&v.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),v.aabb.overlaps(m.aabb)&&(f.push(v),y.push(m))};var l={keys:[]},d=[],p=[];a.prototype.makePairsUnique=function(v,m){for(var f=l,y=d,_=p,x=v.length,M=0;M!==x;M++)y[M]=v[M],_[M]=m[M];v.length=0,m.length=0;for(var M=0;M!==x;M++){var L=y[M].id,O=_[M].id,I=L<O?L+","+O:O+","+L;f[I]=M,f.keys.push(I)}for(var M=0;M!==f.keys.length;M++){var I=f.keys.pop(),b=f[I];v.push(y[b]),m.push(_[b]),delete f[I]}},a.prototype.setWorld=function(v){};var g=new r;a.boundingSphereCheck=function(v,m){var f=g;return v.position.vsub(m.position,f),Math.pow(v.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},a.prototype.aabbQuery=function(v,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=a;var s=t("./Broadphase"),r=t("../math/Vec3"),o=t("../shapes/Shape");function a(h,l,d,p,g){s.apply(this),this.nx=d||10,this.ny=p||10,this.nz=g||10,this.aabbMin=h||new r(100,100,100),this.aabbMax=l||new r(-100,-100,-100);var v=this.nx*this.ny*this.nz;if(v<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=v,this.binLengths.length=v;for(var m=0;m<v;m++)this.bins[m]=[],this.binLengths[m]=0}a.prototype=new s,a.prototype.constructor=a;var c=new r;new r,a.prototype.collisionPairs=function(h,l,d){var p=h.numObjects(),g=h.bodies,F=this.aabbMax,G=this.aabbMin,v=this.nx,m=this.ny,f=this.nz,y=m*f,_=f,x=1,M=F.x,L=F.y,O=F.z,I=G.x,b=G.y,w=G.z,N=v/(M-I),U=m/(L-b),P=f/(O-w),k=(M-I)/v,X=(L-b)/m,ie=(O-w)/f,H=Math.sqrt(k*k+X*X+ie*ie)*.5,B=o.types,ee=B.SPHERE,$=B.PLANE;B.BOX,B.COMPOUND,B.CONVEXPOLYHEDRON;for(var V=this.bins,q=this.binLengths,E=this.bins.length,T=0;T!==E;T++)q[T]=0;var C=Math.ceil,G=Math.min,F=Math.max;function te(re,Re,Be,Oe,Pe,Ve,We){var Ye=(re-I)*N|0,at=(Re-b)*U|0,K=(Be-w)*P|0,ue=C((Oe-I)*N),be=C((Pe-b)*U),Ce=C((Ve-w)*P);Ye<0?Ye=0:Ye>=v&&(Ye=v-1),at<0?at=0:at>=m&&(at=m-1),K<0?K=0:K>=f&&(K=f-1),ue<0?ue=0:ue>=v&&(ue=v-1),be<0?be=0:be>=m&&(be=m-1),Ce<0?Ce=0:Ce>=f&&(Ce=f-1),Ye*=y,at*=_,K*=x,ue*=y,be*=_,Ce*=x;for(var ke=Ye;ke<=ue;ke+=y)for(var lt=at;lt<=be;lt+=_)for(var ut=K;ut<=Ce;ut+=x){var yt=ke+lt+ut;V[yt][q[yt]++]=We}}for(var T=0;T!==p;T++){var Y=g[T],Z=Y.shape;switch(Z.type){case ee:var se=Y.position.x,Ee=Y.position.y,pe=Y.position.z,ye=Z.radius;te(se-ye,Ee-ye,pe-ye,se+ye,Ee+ye,pe+ye,Y);break;case $:Z.worldNormalNeedsUpdate&&Z.computeWorldNormal(Y.quaternion);var he=Z.worldNormal,ve=I+k*.5-Y.position.x,Ge=b+X*.5-Y.position.y,Ue=w+ie*.5-Y.position.z,He=c;He.set(ve,Ge,Ue);for(var Ae=0,je=0;Ae!==v;Ae++,je+=y,He.y=Ge,He.x+=k)for(var D=0,A=0;D!==m;D++,A+=_,He.z=Ue,He.y+=X)for(var ne=0,de=0;ne!==f;ne++,de+=x,He.z+=ie)if(He.dot(he)<H){var xe=je+A+de;V[xe][q[xe]++]=Y}break;default:Y.aabbNeedsUpdate&&Y.computeAABB(),te(Y.aabb.lowerBound.x,Y.aabb.lowerBound.y,Y.aabb.lowerBound.z,Y.aabb.upperBound.x,Y.aabb.upperBound.y,Y.aabb.upperBound.z,Y);break}}for(var T=0;T!==E;T++){var _e=q[T];if(_e>1)for(var W=V[T],Ae=0;Ae!==_e;Ae++)for(var Y=W[Ae],D=0;D!==Ae;D++){var me=W[D];this.needBroadphaseCollision(Y,me)&&this.intersectionTest(Y,me,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=o;var s=t("./Broadphase"),r=t("./AABB");function o(){s.apply(this)}o.prototype=new s,o.prototype.constructor=o,o.prototype.collisionPairs=function(a,c,h){var l=a.bodies,d=l.length,p,g,v,m;for(p=0;p!==d;p++)for(g=0;g!==p;g++)v=l[p],m=l[g],this.needBroadphaseCollision(v,m)&&this.intersectionTest(v,m,c,h)},new r,o.prototype.aabbQuery=function(a,c,h){h=h||[];for(var l=0;l<a.bodies.length;l++){var d=a.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(c)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(r,o){if(r=r.id,o=o.id,o>r){var a=o;o=r,r=a}return r+"-"+o in this.matrix},s.prototype.set=function(r,o,a){if(r=r.id,o=o.id,o>r){var c=o;o=r,r=c}a?this.matrix[r+"-"+o]=!0:delete this.matrix[r+"-"+o]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(r){}},{}],9:[function(t,n,i){n.exports=l;var s=t("../math/Vec3"),r=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var a=t("../collision/RaycastResult"),c=t("../shapes/Shape"),h=t("../collision/AABB");function l(E,T){this.from=E?E.clone():new s,this.to=T?T.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new a,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new h,p=[];l.prototype.intersectWorld=function(E,T){return this.mode=T.mode||l.ANY,this.result=T.result||new a,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),p.length=0,E.broadphase.aabbQuery(E,d,p),this.intersectBodies(p),this.hasHit};var g=new s,v=new s;l.pointInTriangle=m;function m(E,T,C,G){G.vsub(T,$),C.vsub(T,g),E.vsub(T,v);var F=$.dot($),te=$.dot(g),Y=$.dot(v),Z=g.dot(g),se=g.dot(v),Ee,pe;return(Ee=Z*Y-te*se)>=0&&(pe=F*se-te*Y)>=0&&Ee+pe<F*Z-te*te}var f=new s,y=new r;l.prototype.intersectBody=function(E,T){T&&(this.result=T,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!E.collisionResponse)&&!(!(this.collisionFilterGroup&E.collisionFilterMask)||!(E.collisionFilterGroup&this.collisionFilterMask)))for(var G=f,F=y,te=0,Y=E.shapes.length;te<Y;te++){var Z=E.shapes[te];if(!(C&&!Z.collisionResponse)&&(E.quaternion.mult(E.shapeOrientations[te],F),E.quaternion.vmult(E.shapeOffsets[te],G),G.vadd(E.position,G),this.intersectShape(Z,F,G,E),this.result._shouldStop))break}},l.prototype.intersectBodies=function(E,T){T&&(this.result=T,this._updateDirection());for(var C=0,G=E.length;!this.result._shouldStop&&C<G;C++)this.intersectBody(E[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(E,T,C,G){var F=this.from,te=q(F,this._direction,C);if(!(te>E.boundingSphereRadius)){var Y=this[E.type];Y&&Y.call(this,E,T,C,G)}},new s,new s;var _=new s,x=new s,M=new s,L=new s;new s,new a,l.prototype.intersectBox=function(E,T,C,G){return this.intersectConvex(E.convexPolyhedronRepresentation,T,C,G)},l.prototype[c.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(E,T,C,G){var F=this.from,te=this.to,Y=this._direction,Z=new s(0,0,1);T.vmult(Z,Z);var se=new s;F.vsub(C,se);var Ee=se.dot(Z);te.vsub(C,se);var pe=se.dot(Z);if(!(Ee*pe>0)&&!(F.distanceTo(te)<Ee)){var ye=Z.dot(Y);if(!(Math.abs(ye)<this.precision)){var he=new s,ve=new s,Ge=new s;F.vsub(C,he);var Ue=-Z.dot(he)/ye;Y.scale(Ue,ve),F.vadd(ve,Ge),this.reportIntersection(Z,Ge,E,G,-1)}}},l.prototype[c.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(E){var T=this.to,C=this.from;E.lowerBound.x=Math.min(T.x,C.x),E.lowerBound.y=Math.min(T.y,C.y),E.lowerBound.z=Math.min(T.z,C.z),E.upperBound.x=Math.max(T.x,C.x),E.upperBound.y=Math.max(T.y,C.y),E.upperBound.z=Math.max(T.z,C.z)};var O={faceList:[0]};l.prototype.intersectHeightfield=function(E,T,C,G){E.data,E.elementSize;var F=new s,te=new l(this.from,this.to);o.pointToLocalFrame(C,T,te.from,te.from),o.pointToLocalFrame(C,T,te.to,te.to);var Y=[],Z=null,se=null,Ee=null,pe=null,ye=E.getIndexOfPosition(te.from.x,te.from.y,Y,!1);if(ye&&(Z=Y[0],se=Y[1],Ee=Y[0],pe=Y[1]),ye=E.getIndexOfPosition(te.to.x,te.to.y,Y,!1),ye&&((Z===null||Y[0]<Z)&&(Z=Y[0]),(Ee===null||Y[0]>Ee)&&(Ee=Y[0]),(se===null||Y[1]<se)&&(se=Y[1]),(pe===null||Y[1]>pe)&&(pe=Y[1])),Z!==null){var he=[];E.getRectMinMax(Z,se,Ee,pe,he),he[0],he[1];for(var ve=Z;ve<=Ee;ve++)for(var Ge=se;Ge<=pe;Ge++){if(this.result._shouldStop||(E.getConvexTrianglePillar(ve,Ge,!1),o.pointToWorldFrame(C,T,E.pillarOffset,F),this.intersectConvex(E.pillarConvex,T,F,G,O),this.result._shouldStop))return;E.getConvexTrianglePillar(ve,Ge,!0),o.pointToWorldFrame(C,T,E.pillarOffset,F),this.intersectConvex(E.pillarConvex,T,F,G,O)}}},l.prototype[c.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var I=new s,b=new s;l.prototype.intersectSphere=function(E,T,C,G){var F=this.from,te=this.to,Y=E.radius,Z=Math.pow(te.x-F.x,2)+Math.pow(te.y-F.y,2)+Math.pow(te.z-F.z,2),se=2*((te.x-F.x)*(F.x-C.x)+(te.y-F.y)*(F.y-C.y)+(te.z-F.z)*(F.z-C.z)),Ee=Math.pow(F.x-C.x,2)+Math.pow(F.y-C.y,2)+Math.pow(F.z-C.z,2)-Math.pow(Y,2),pe=Math.pow(se,2)-4*Z*Ee,ye=I,he=b;if(!(pe<0))if(pe===0)F.lerp(te,pe,ye),ye.vsub(C,he),he.normalize(),this.reportIntersection(he,ye,E,G,-1);else{var ve=(-se-Math.sqrt(pe))/(2*Z),Ge=(-se+Math.sqrt(pe))/(2*Z);if(ve>=0&&ve<=1&&(F.lerp(te,ve,ye),ye.vsub(C,he),he.normalize(),this.reportIntersection(he,ye,E,G,-1)),this.result._shouldStop)return;Ge>=0&&Ge<=1&&(F.lerp(te,Ge,ye),ye.vsub(C,he),he.normalize(),this.reportIntersection(he,ye,E,G,-1))}},l.prototype[c.types.SPHERE]=l.prototype.intersectSphere;var w=new s;new s,new s;var N=new s;l.prototype.intersectConvex=function(T,C,G,F,te){for(var Y=w,Z=N,se=te&&te.faceList||null,Ee=T.faces,pe=T.vertices,ye=T.faceNormals,he=this._direction,ve=this.from,Ge=this.to,Ue=ve.distanceTo(Ge),He=se?se.length:Ee.length,Ae=this.result,je=0;!Ae._shouldStop&&je<He;je++){var D=se?se[je]:je,A=Ee[D],ne=ye[D],de=C,xe=G;Z.copy(pe[A[0]]),de.vmult(Z,Z),Z.vadd(xe,Z),Z.vsub(ve,Z),de.vmult(ne,Y);var _e=he.dot(Y);if(!(Math.abs(_e)<this.precision)){var W=Y.dot(Z)/_e;if(!(W<0)){he.mult(W,_),_.vadd(ve,_),x.copy(pe[A[0]]),de.vmult(x,x),xe.vadd(x,x);for(var me=1;!Ae._shouldStop&&me<A.length-1;me++){M.copy(pe[A[me]]),L.copy(pe[A[me+1]]),de.vmult(M,M),de.vmult(L,L),xe.vadd(M,M),xe.vadd(L,L);var re=_.distanceTo(ve);!(m(_,x,M,L)||m(_,M,x,L))||re>Ue||this.reportIntersection(Y,_,T,F,D)}}}}},l.prototype[c.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var U=new s,P=new s,k=new s,X=new s,ie=new s,H=new s;new h;var B=[],ee=new o;l.prototype.intersectTrimesh=function(T,C,G,F,te){var Y=U,Z=B,se=ee,Ee=N,pe=P,ye=k,he=X,ve=H,Ge=ie;te&&te.faceList;var Ue=T.indices;T.vertices,T.faceNormals;var He=this.from,Ae=this.to,je=this._direction;se.position.copy(G),se.quaternion.copy(C),o.vectorToLocalFrame(G,C,je,pe),o.pointToLocalFrame(G,C,He,ye),o.pointToLocalFrame(G,C,Ae,he);var D=ye.distanceSquared(he);T.tree.rayQuery(this,se,Z);for(var A=0,ne=Z.length;!this.result._shouldStop&&A!==ne;A++){var de=Z[A];T.getNormal(de,Y),T.getVertex(Ue[de*3],x),x.vsub(ye,Ee);var xe=pe.dot(Y),_e=Y.dot(Ee)/xe;if(!(_e<0)){pe.scale(_e,_),_.vadd(ye,_),T.getVertex(Ue[de*3+1],M),T.getVertex(Ue[de*3+2],L);var W=_.distanceSquared(ye);!(m(_,M,x,L)||m(_,x,M,L))||W>D||(o.vectorToWorldFrame(C,Y,Ge),o.pointToWorldFrame(G,C,_,ve),this.reportIntersection(Ge,ve,T,F,de))}}Z.length=0},l.prototype[c.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(E,T,C,G,F){var te=this.from,Y=this.to,Z=te.distanceTo(T),se=this.result;if(!(this.skipBackfaces&&E.dot(this._direction)>0))switch(se.hitFaceIndex=typeof F<"u"?F:-1,this.mode){case l.ALL:this.hasHit=!0,se.set(te,Y,E,T,C,G,Z),se.hasHit=!0,this.callback(se);break;case l.CLOSEST:(Z<se.distance||!se.hasHit)&&(this.hasHit=!0,se.hasHit=!0,se.set(te,Y,E,T,C,G,Z));break;case l.ANY:this.hasHit=!0,se.hasHit=!0,se.set(te,Y,E,T,C,G,Z),se._shouldStop=!0;break}};var $=new s,V=new s;function q(E,T,C){C.vsub(E,$);var G=$.dot(T);T.mult(G,V),V.vadd(E,V);var F=C.distanceTo(V);return F}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var s=t("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(o,a,c,h,l,d,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(a),this.hitNormalWorld.copy(c),this.hitPointWorld.copy(h),this.shape=l,this.body=d,this.distance=p}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var s=t("../collision/Broadphase");n.exports=r;function r(o){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var a=this.axisList;this._addBodyHandler=function(c){a.push(c.body)},this._removeBodyHandler=function(c){var h=a.indexOf(c.body);h!==-1&&a.splice(h,1)},o&&this.setWorld(o)}r.prototype=new s,r.prototype.setWorld=function(o){this.axisList.length=0;for(var a=0;a<o.bodies.length;a++)this.axisList.push(o.bodies[a]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},r.insertionSortX=function(o){for(var a=1,c=o.length;a<c;a++){for(var h=o[a],l=a-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},r.insertionSortY=function(o){for(var a=1,c=o.length;a<c;a++){for(var h=o[a],l=a-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},r.insertionSortZ=function(o){for(var a=1,c=o.length;a<c;a++){for(var h=o[a],l=a-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},r.prototype.collisionPairs=function(o,a,c){var h=this.axisList,l=h.length,d=this.axisIndex,p,g;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var v=h[p];for(g=p+1;g<l;g++){var m=h[g];if(this.needBroadphaseCollision(v,m)){if(!r.checkBounds(v,m,d))break;this.intersectionTest(v,m,a,c)}}}},r.prototype.sortList=function(){for(var o=this.axisList,a=this.axisIndex,c=o.length,h=0;h!==c;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}a===0?r.insertionSortX(o):a===1?r.insertionSortY(o):a===2&&r.insertionSortZ(o)},r.checkBounds=function(o,a,c){var h,l;c===0?(h=o.position.x,l=a.position.x):c===1?(h=o.position.y,l=a.position.y):c===2&&(h=o.position.z,l=a.position.z);var d=o.boundingRadius,p=a.boundingRadius,g=h+d,v=l-p;return v<g},r.prototype.autoDetectAxis=function(){for(var o=0,a=0,c=0,h=0,l=0,d=0,p=this.axisList,g=p.length,v=1/g,m=0;m!==g;m++){var f=p[m],y=f.position.x;o+=y,a+=y*y;var _=f.position.y;c+=_,h+=_*_;var x=f.position.z;l+=x,d+=x*x}var M=a-o*o*v,L=h-c*c*v,O=d-l*l*v;M>L?M>O?this.axisIndex=0:this.axisIndex=2:L>O?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(o,a,c){c=c||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var d=this.axisList;a.lowerBound[l],a.upperBound[l];for(var p=0;p<d.length;p++){var g=d[p];g.aabbNeedsUpdate&&g.computeAABB(),g.aabb.overlaps(a)&&c.push(g)}return c}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=c,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var a=t("../math/Vec3");function c(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6,g=d.pivotA?d.pivotA.clone():new a,v=d.pivotB?d.pivotB.clone():new a;this.axisA=d.axisA?d.axisA.clone():new a,this.axisB=d.axisB?d.axisB.clone():new a,s.call(this,h,g,l,v,p),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new r(h,l,d),f=this.twistEquation=new o(h,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}c.prototype=new s,c.constructor=c,new a,new a,c.prototype.update=function(){var h=this.bodyA,l=this.bodyB,d=this.coneEquation,p=this.twistEquation;s.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),d.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=r;var s=t("../utils/Utils");function r(o,a,c){c=s.defaults(c,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=a,this.id=r.idCounter++,this.collideConnected=c.collideConnected,c.wakeUpBodies&&(o&&o.wakeUp(),a&&a.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var o=this.equations,a=0;a<o.length;a++)o[a].enabled=!0},r.prototype.disable=function(){for(var o=this.equations,a=0;a<o.length;a++)o[a].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=o;var s=t("./Constraint"),r=t("../equations/ContactEquation");function o(a,c,h,l){s.call(this,a,c),typeof h>"u"&&(h=a.position.distanceTo(c.position)),typeof l>"u"&&(l=1e6),this.distance=h;var d=this.distanceEquation=new r(a,c);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new s,o.prototype.update=function(){var a=this.bodyA,c=this.bodyB,h=this.distanceEquation,l=this.distance*.5,d=h.ni;c.position.vsub(a.position,d),d.normalize(),d.mult(l,h.ri),d.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=c,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var a=t("../math/Vec3");function c(d,p,g){g=g||{};var v=typeof g.maxForce<"u"?g.maxForce:1e6,m=g.pivotA?g.pivotA.clone():new a,f=g.pivotB?g.pivotB.clone():new a;s.call(this,d,m,p,f,v);var y=this.axisA=g.axisA?g.axisA.clone():new a(1,0,0);y.normalize();var _=this.axisB=g.axisB?g.axisB.clone():new a(1,0,0);_.normalize();var x=this.rotationalEquation1=new r(d,p,g),M=this.rotationalEquation2=new r(d,p,g),L=this.motorEquation=new o(d,p,v);L.enabled=!1,this.equations.push(x,M,L)}c.prototype=new s,c.constructor=c,c.prototype.enableMotor=function(){this.motorEquation.enabled=!0},c.prototype.disableMotor=function(){this.motorEquation.enabled=!1},c.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},c.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new a,l=new a;c.prototype.update=function(){var d=this.bodyA,p=this.bodyB,g=this.motorEquation,v=this.rotationalEquation1,m=this.rotationalEquation2,f=h,y=l,_=this.axisA,x=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(_,f),p.quaternion.vmult(x,y),f.tangents(v.axisA,m.axisA),v.axisB.copy(y),m.axisB.copy(y),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,g.axisA),p.quaternion.vmult(this.axisB,g.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=a,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function a(c,h,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,g=new o,v=new o;c.position.vadd(h.position,v),v.scale(.5,v),h.pointToLocalFrame(v,g),c.pointToLocalFrame(v,p),s.call(this,c,p,h,g,d);var m=this.rotationalEquation1=new r(c,h,l),f=this.rotationalEquation2=new r(c,h,l),y=this.rotationalEquation3=new r(c,h,l);this.equations.push(m,f,y)}a.prototype=new s,a.constructor=a,new o,new o,a.prototype.update=function(){var c=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,p=this.rotationalEquation3;s.prototype.update.call(this),c.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),c.vectorToWorldFrame(o.UNIT_Y,d.axisA),h.vectorToWorldFrame(o.UNIT_Z,d.axisB),c.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=a;var s=t("./Constraint"),r=t("../equations/ContactEquation"),o=t("../math/Vec3");function a(c,h,l,d,p){s.call(this,c,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=d?d.clone():new o;var g=this.equationX=new r(c,l),v=this.equationY=new r(c,l),m=this.equationZ=new r(c,l);this.equations.push(g,v,m),g.minForce=v.minForce=m.minForce=-p,g.maxForce=v.maxForce=m.maxForce=p,g.ni.set(1,0,0),v.ni.set(0,1,0),m.ni.set(0,0,1)}a.prototype=new s,a.prototype.update=function(){var c=this.bodyA,h=this.bodyB,l=this.equationX,d=this.equationY,p=this.equationZ;c.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function o(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,h,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new r,o.prototype.constructor=o;var a=new s,c=new s;o.prototype.computeB=function(h){var l=this.a,d=this.b,p=this.axisA,g=this.axisB,v=a,m=c,f=this.jacobianElementA,y=this.jacobianElementB;p.cross(g,v),g.cross(p,m),f.rotational.copy(m),y.rotational.copy(v);var _=Math.cos(this.angle)-p.dot(g),x=this.computeGW(),M=this.computeGiMf(),L=-_*l-x*d-h*M;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=o;var s=t("./Equation"),r=t("../math/Vec3");t("../math/Mat3");function o(m,f,y){y=typeof y<"u"?y:1e6,s.call(this,m,f,0,y),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}o.prototype=new s,o.prototype.constructor=o;var a=new r,c=new r,h=new r;o.prototype.computeB=function(m){var f=this.a,y=this.b,_=this.bi,x=this.bj,M=this.ri,L=this.rj,O=a,I=c,b=_.velocity,w=_.angularVelocity;_.force,_.torque;var N=x.velocity,U=x.angularVelocity;x.force,x.torque;var P=h,k=this.jacobianElementA,X=this.jacobianElementB,ie=this.ni;M.cross(ie,O),L.cross(ie,I),ie.negate(k.spatial),O.negate(k.rotational),X.spatial.copy(ie),X.rotational.copy(I),P.copy(x.position),P.vadd(L,P),P.vsub(_.position,P),P.vsub(M,P);var H=ie.dot(P),B=this.restitution+1,ee=B*N.dot(ie)-B*b.dot(ie)+U.dot(I)-w.dot(O),$=this.computeGiMf(),V=-H*f-ee*y-m*$;return V};var l=new r,d=new r,p=new r,g=new r,v=new r;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=d,y=p,_=g,x=v;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(y,m),this.bj.getVelocityAtWorldPoint(_,f),m.vsub(f,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=o;var s=t("../math/JacobianElement"),r=t("../math/Vec3");function o(v,m,f,y){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof y>"u"?1e6:y,this.bi=v,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(v,m,f){var y=m,_=v,x=f;this.a=4/(x*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(x*x*_*(1+4*y))},o.prototype.computeB=function(v,m,f){var y=this.computeGW(),_=this.computeGq(),x=this.computeGiMf();return-_*v-y*m-x*f},o.prototype.computeGq=function(){var v=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,_=f.position,x=y.position;return v.spatial.dot(_)+m.spatial.dot(x)};var a=new r;o.prototype.computeGW=function(){var v=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,_=f.velocity,x=y.velocity,M=f.angularVelocity||a,L=y.angularVelocity||a;return v.multiplyVectors(_,M)+m.multiplyVectors(x,L)},o.prototype.computeGWlambda=function(){var v=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,_=f.vlambda,x=y.vlambda,M=f.wlambda||a,L=y.wlambda||a;return v.multiplyVectors(_,M)+m.multiplyVectors(x,L)};var c=new r,h=new r,l=new r,d=new r;o.prototype.computeGiMf=function(){var v=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,_=f.force,x=f.torque,M=y.force,L=y.torque,O=f.invMassSolve,I=y.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(x,l):l.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(L,d):d.set(0,0,0),_.mult(O,c),M.mult(I,h),v.multiplyVectors(c,l)+m.multiplyVectors(h,d)};var p=new r;o.prototype.computeGiMGt=function(){var v=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,y=this.bj,_=f.invMassSolve,x=y.invMassSolve,M=f.invInertiaWorldSolve,L=y.invInertiaWorldSolve,O=_+x;return M&&(M.vmult(v.rotational,p),O+=p.dot(v.rotational)),L&&(L.vmult(m.rotational,p),O+=p.dot(m.rotational)),O};var g=new r;new r,new r,new r,new r,new r,o.prototype.addToWlambda=function(v){var m=this.jacobianElementA,f=this.jacobianElementB,y=this.bi,_=this.bj,x=g;m.spatial.mult(y.invMassSolve*v,x),y.vlambda.vadd(x,y.vlambda),f.spatial.mult(_.invMassSolve*v,x),_.vlambda.vadd(x,_.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(v,x),y.wlambda.vadd(x,y.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(f.rotational,x),x.mult(v,x),_.wlambda.vadd(x,_.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=o;var s=t("./Equation"),r=t("../math/Vec3");t("../math/Mat3");function o(h,l,d){s.call(this,h,l,-d,d),this.ri=new r,this.rj=new r,this.t=new r}o.prototype=new s,o.prototype.constructor=o;var a=new r,c=new r;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,p=this.rj,g=a,v=c,m=this.t;d.cross(m,g),p.cross(m,v);var f=this.jacobianElementA,y=this.jacobianElementB;m.negate(f.spatial),g.negate(f.rotational),y.spatial.copy(m),y.rotational.copy(v);var _=this.computeGW(),x=this.computeGiMf(),M=-_*l-h*x;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function o(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,h,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new r,o.prototype.constructor=o;var a=new s,c=new s;o.prototype.computeB=function(h){var l=this.a,d=this.b,p=this.axisA,g=this.axisB,v=a,m=c,f=this.jacobianElementA,y=this.jacobianElementB;p.cross(g,v),g.cross(p,m),f.rotational.copy(m),y.rotational.copy(v);var _=Math.cos(this.maxAngle)-p.dot(g),x=this.computeGW(),M=this.computeGiMf(),L=-_*l-x*d-h*M;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function o(a,c,h){h=typeof h<"u"?h:1e6,r.call(this,a,c,-h,h),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeB=function(a){this.a;var c=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,d=this.jacobianElementA,p=this.jacobianElementB;d.rotational.copy(h),l.negate(p.rotational);var g=this.computeGW()-this.targetVelocity,v=this.computeGiMf(),m=-g*c-a*v;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var s=t("../utils/Utils");n.exports=r;function r(o,a,c){c=s.defaults(c,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[o,a],this.friction=c.friction,this.restitution=c.restitution,this.contactEquationStiffness=c.contactEquationStiffness,this.contactEquationRelaxation=c.contactEquationRelaxation,this.frictionEquationStiffness=c.frictionEquationStiffness,this.frictionEquationRelaxation=c.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=s;function s(r){var o="";r=r||{},typeof r=="string"?(o=r,r={}):typeof r=="object"&&(o=""),this.name=o,this.id=s.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}s.idCounter=0},{}],26:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(){this.spatial=new s,this.rotational=new s}r.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(o,a){return o.dot(this.spatial)+a.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},r.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},r.prototype.setTrace=function(o){var a=this.elements;a[0]=o.x,a[4]=o.y,a[8]=o.z},r.prototype.getTrace=function(a){var a=a||new s,c=this.elements;a.x=c[0],a.y=c[4],a.z=c[8]},r.prototype.vmult=function(o,a){a=a||new s;var c=this.elements,h=o.x,l=o.y,d=o.z;return a.x=c[0]*h+c[1]*l+c[2]*d,a.y=c[3]*h+c[4]*l+c[5]*d,a.z=c[6]*h+c[7]*l+c[8]*d,a},r.prototype.smult=function(o){for(var a=0;a<this.elements.length;a++)this.elements[a]*=o},r.prototype.mmult=function(o,a){for(var c=a||new r,h=0;h<3;h++)for(var l=0;l<3;l++){for(var d=0,p=0;p<3;p++)d+=o.elements[h+p*3]*this.elements[p+l*3];c.elements[h+l*3]=d}return c},r.prototype.scale=function(o,a){a=a||new r;for(var c=this.elements,h=a.elements,l=0;l!==3;l++)h[3*l+0]=o.x*c[3*l+0],h[3*l+1]=o.y*c[3*l+1],h[3*l+2]=o.z*c[3*l+2];return a},r.prototype.solve=function(o,a){a=a||new s;for(var c=3,h=4,l=[],d=0;d<c*h;d++)l.push(0);var d,p;for(d=0;d<3;d++)for(p=0;p<3;p++)l[d+h*p]=this.elements[d+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var g=3,v=g,m,f=4,y;do{if(d=v-g,l[d+h*d]===0){for(p=d+1;p<v;p++)if(l[d+h*p]!==0){m=f;do y=f-m,l[y+h*d]+=l[y+h*p];while(--m);break}}if(l[d+h*d]!==0)for(p=d+1;p<v;p++){var _=l[d+h*p]/l[d+h*d];m=f;do y=f-m,l[y+h*p]=y<=d?0:l[y+h*p]-l[y+h*d]*_;while(--m)}}while(--g);if(a.z=l[2*h+3]/l[2*h+2],a.y=(l[1*h+3]-l[1*h+2]*a.z)/l[1*h+1],a.x=(l[0*h+3]-l[0*h+2]*a.z-l[0*h+1]*a.y)/l[0*h+0],isNaN(a.x)||isNaN(a.y)||isNaN(a.z)||a.x===1/0||a.y===1/0||a.z===1/0)throw"Could not solve equation! Got x=["+a.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return a},r.prototype.e=function(o,a,c){if(c===void 0)return this.elements[a+3*o];this.elements[a+3*o]=c},r.prototype.copy=function(o){for(var a=0;a<o.elements.length;a++)this.elements[a]=o.elements[a];return this},r.prototype.toString=function(){for(var o="",a=",",c=0;c<9;c++)o+=this.elements[c]+a;return o},r.prototype.reverse=function(o){o=o||new r;for(var a=3,c=6,h=[],l=0;l<a*c;l++)h.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)h[l+c*d]=this.elements[l+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,g=p,v,m=c,f;do{if(l=g-p,h[l+c*l]===0){for(d=l+1;d<g;d++)if(h[l+c*d]!==0){v=m;do f=m-v,h[f+c*l]+=h[f+c*d];while(--v);break}}if(h[l+c*l]!==0)for(d=l+1;d<g;d++){var y=h[l+c*d]/h[l+c*l];v=m;do f=m-v,h[f+c*d]=f<=l?0:h[f+c*d]-h[f+c*l]*y;while(--v)}}while(--p);l=2;do{d=l-1;do{var y=h[l+c*d]/h[l+c*l];v=c;do f=c-v,h[f+c*d]=h[f+c*d]-h[f+c*l]*y;while(--v)}while(d--)}while(--l);l=2;do{var y=1/h[l+c*l];v=c;do f=c-v,h[f+c*l]=h[f+c*l]*y;while(--v)}while(l--);l=2;do{d=2;do{if(f=h[a+d+c*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,f)}while(d--)}while(l--);return o},r.prototype.setRotationFromQuaternion=function(o){var a=o.x,c=o.y,h=o.z,l=o.w,d=a+a,p=c+c,g=h+h,v=a*d,m=a*p,f=a*g,y=c*p,_=c*g,x=h*g,M=l*d,L=l*p,O=l*g,I=this.elements;return I[3*0+0]=1-(y+x),I[3*0+1]=m-O,I[3*0+2]=f+L,I[3*1+0]=m+O,I[3*1+1]=1-(v+x),I[3*1+2]=_-M,I[3*2+0]=f-L,I[3*2+1]=_+M,I[3*2+2]=1-(v+y),this},r.prototype.transpose=function(o){o=o||new r;for(var a=o.elements,c=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)a[3*h+l]=c[3*l+h];return o}},{"./Vec3":30}],28:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(d,p,g,v){this.x=d!==void 0?d:0,this.y=p!==void 0?p:0,this.z=g!==void 0?g:0,this.w=v!==void 0?v:1}r.prototype.set=function(d,p,g,v){this.x=d,this.y=p,this.z=g,this.w=v},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(d,p){var g=Math.sin(p*.5);this.x=d.x*g,this.y=d.y*g,this.z=d.z*g,this.w=Math.cos(p*.5)},r.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var p=2*Math.acos(this.w),g=Math.sqrt(1-this.w*this.w);return g<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/g,d.y=this.y/g,d.z=this.z/g),[d,p]};var o=new s,a=new s;r.prototype.setFromVectors=function(d,p){if(d.isAntiparallelTo(p)){var g=o,v=a;d.tangents(g,v),this.setFromAxisAngle(g,Math.PI)}else{var m=d.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(p.norm(),2))+d.dot(p),this.normalize()}};var c=new s,h=new s,l=new s;r.prototype.mult=function(d,p){p=p||new r;var g=this.w,v=c,m=h,f=l;return v.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),p.w=g*d.w-v.dot(m),v.cross(m,f),p.x=g*m.x+d.w*v.x+f.x,p.y=g*m.y+d.w*v.y+f.y,p.z=g*m.z+d.w*v.z+f.z,p},r.prototype.inverse=function(d){var p=this.x,g=this.y,v=this.z,m=this.w;d=d||new r,this.conjugate(d);var f=1/(p*p+g*g+v*v+m*m);return d.x*=f,d.y*=f,d.z*=f,d.w*=f,d},r.prototype.conjugate=function(d){return d=d||new r,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},r.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.vmult=function(d,p){p=p||new s;var g=d.x,v=d.y,m=d.z,f=this.x,y=this.y,_=this.z,x=this.w,M=x*g+y*m-_*v,L=x*v+_*g-f*m,O=x*m+f*v-y*g,I=-f*g-y*v-_*m;return p.x=M*x+I*-f+L*-_-O*-y,p.y=L*x+I*-y+O*-f-M*-_,p.z=O*x+I*-_+M*-y-L*-f,p},r.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},r.prototype.toEuler=function(d,p){p=p||"YZX";var g,v,m,f=this.x,y=this.y,_=this.z,x=this.w;switch(p){case"YZX":var M=f*y+_*x;if(M>.499&&(g=2*Math.atan2(f,x),v=Math.PI/2,m=0),M<-.499&&(g=-2*Math.atan2(f,x),v=-Math.PI/2,m=0),isNaN(g)){var L=f*f,O=y*y,I=_*_;g=Math.atan2(2*y*x-2*f*_,1-2*O-2*I),v=Math.asin(2*M),m=Math.atan2(2*f*x-2*y*_,1-2*L-2*I)}break;default:throw new Error("Euler order "+p+" not supported yet.")}d.y=g,d.z=v,d.x=m},r.prototype.setFromEuler=function(d,p,g,v){v=v||"XYZ";var m=Math.cos(d/2),f=Math.cos(p/2),y=Math.cos(g/2),_=Math.sin(d/2),x=Math.sin(p/2),M=Math.sin(g/2);return v==="XYZ"?(this.x=_*f*y+m*x*M,this.y=m*x*y-_*f*M,this.z=m*f*M+_*x*y,this.w=m*f*y-_*x*M):v==="YXZ"?(this.x=_*f*y+m*x*M,this.y=m*x*y-_*f*M,this.z=m*f*M-_*x*y,this.w=m*f*y+_*x*M):v==="ZXY"?(this.x=_*f*y-m*x*M,this.y=m*x*y+_*f*M,this.z=m*f*M+_*x*y,this.w=m*f*y-_*x*M):v==="ZYX"?(this.x=_*f*y-m*x*M,this.y=m*x*y+_*f*M,this.z=m*f*M-_*x*y,this.w=m*f*y+_*x*M):v==="YZX"?(this.x=_*f*y+m*x*M,this.y=m*x*y+_*f*M,this.z=m*f*M-_*x*y,this.w=m*f*y-_*x*M):v==="XZY"&&(this.x=_*f*y-m*x*M,this.y=m*x*y-_*f*M,this.z=m*f*M+_*x*y,this.w=m*f*y+_*x*M),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var s=t("./Vec3"),r=t("./Quaternion");n.exports=o;function o(c){c=c||{},this.position=new s,c.position&&this.position.copy(c.position),this.quaternion=new r,c.quaternion&&this.quaternion.copy(c.quaternion)}var a=new r;o.pointToLocalFrame=function(c,h,l,p){var p=p||new s;return l.vsub(c,p),h.conjugate(a),a.vmult(p,p),p},o.prototype.pointToLocal=function(c,h){return o.pointToLocalFrame(this.position,this.quaternion,c,h)},o.pointToWorldFrame=function(c,h,l,p){var p=p||new s;return h.vmult(l,p),p.vadd(c,p),p},o.prototype.pointToWorld=function(c,h){return o.pointToWorldFrame(this.position,this.quaternion,c,h)},o.prototype.vectorToWorldFrame=function(c,l){var l=l||new s;return this.quaternion.vmult(c,l),l},o.vectorToWorldFrame=function(c,h,l){return c.vmult(h,l),l},o.vectorToLocalFrame=function(c,h,l,p){var p=p||new s;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=r;var s=t("./Mat3");function r(h,l,d){this.x=h||0,this.y=l||0,this.z=d||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(h,l){var d=h.x,p=h.y,g=h.z,v=this.x,m=this.y,f=this.z;return l=l||new r,l.x=m*g-f*p,l.y=f*d-v*g,l.z=v*p-m*d,l},r.prototype.set=function(h,l,d){return this.x=h,this.y=l,this.z=d,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new r(this.x+h.x,this.y+h.y,this.z+h.z)},r.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new r(this.x-h.x,this.y-h.y,this.z-h.z)},r.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var h=this.x,l=this.y,d=this.z,p=Math.sqrt(h*h+l*l+d*d);if(p>0){var g=1/p;this.x*=g,this.y*=g,this.z*=g}else this.x=0,this.y=0,this.z=0;return p},r.prototype.unit=function(h){h=h||new r;var l=this.x,d=this.y,p=this.z,g=Math.sqrt(l*l+d*d+p*p);return g>0?(g=1/g,h.x=l*g,h.y=d*g,h.z=p*g):(h.x=1,h.y=0,h.z=0),h},r.prototype.norm=function(){var h=this.x,l=this.y,d=this.z;return Math.sqrt(h*h+l*l+d*d)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(h){var l=this.x,d=this.y,p=this.z,g=h.x,v=h.y,m=h.z;return Math.sqrt((g-l)*(g-l)+(v-d)*(v-d)+(m-p)*(m-p))},r.prototype.distanceSquared=function(h){var l=this.x,d=this.y,p=this.z,g=h.x,v=h.y,m=h.z;return(g-l)*(g-l)+(v-d)*(v-d)+(m-p)*(m-p)},r.prototype.mult=function(h,l){l=l||new r;var d=this.x,p=this.y,g=this.z;return l.x=h*d,l.y=h*p,l.z=h*g,l},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(h){return h=h||new r,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new r,a=new r;r.prototype.tangents=function(h,l){var d=this.norm();if(d>0){var p=o,g=1/d;p.set(this.x*g,this.y*g,this.z*g);var v=a;Math.abs(p.x)<.9?(v.set(1,0,0),p.cross(v,h)):(v.set(0,1,0),p.cross(v,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},r.prototype.lerp=function(h,l,d){var p=this.x,g=this.y,v=this.z;d.x=p+(h.x-p)*l,d.y=g+(h.y-g)*l,d.z=v+(h.z-v)*l},r.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},r.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var c=new r;r.prototype.isAntiparallelTo=function(h,l){return this.negate(c),c.almostEquals(h,l)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=l;var s=t("../utils/EventTarget");t("../shapes/Shape");var r=t("../math/Vec3"),o=t("../math/Mat3"),a=t("../math/Quaternion");t("../material/Material");var c=t("../collision/AABB"),h=t("../shapes/Box");function l(N){N=N||{},s.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof N.collisionFilterGroup=="number"?N.collisionFilterGroup:1,this.collisionFilterMask=typeof N.collisionFilterMask=="number"?N.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,N.position&&this.position.copy(N.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,N.velocity&&this.velocity.copy(N.velocity),this.initVelocity=new r,this.force=new r;var U=typeof N.mass=="number"?N.mass:0;this.mass=U,this.invMass=U>0?1/U:0,this.material=N.material||null,this.linearDamping=typeof N.linearDamping=="number"?N.linearDamping:.01,this.type=U<=0?l.STATIC:l.DYNAMIC,typeof N.type==typeof l.STATIC&&(this.type=N.type),this.allowSleep=typeof N.allowSleep<"u"?N.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof N.sleepSpeedLimit<"u"?N.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof N.sleepTimeLimit<"u"?N.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new a,N.quaternion&&this.quaternion.copy(N.quaternion),this.initQuaternion=new a,this.angularVelocity=new r,N.angularVelocity&&this.angularVelocity.copy(N.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new a,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof N.fixedRotation<"u"?N.fixedRotation:!1,this.angularDamping=typeof N.angularDamping<"u"?N.angularDamping:.01,this.aabb=new c,this.aabbNeedsUpdate=!0,this.wlambda=new r,N.shape&&this.addShape(N.shape),this.updateMassProperties()}l.prototype=new s,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var N=this.sleepState;this.sleepState=0,N===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(N){if(this.allowSleep){var U=this.sleepState,P=this.velocity.norm2()+this.angularVelocity.norm2(),k=Math.pow(this.sleepSpeedLimit,2);U===l.AWAKE&&P<k?(this.sleepState=l.SLEEPY,this.timeLastSleepy=N,this.dispatchEvent(l.sleepyEvent)):U===l.SLEEPY&&P>k?this.wakeUp():U===l.SLEEPY&&N-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(N,P){var P=P||new r;return N.vsub(this.position,P),this.quaternion.conjugate().vmult(P,P),P},l.prototype.vectorToLocalFrame=function(N,P){var P=P||new r;return this.quaternion.conjugate().vmult(N,P),P},l.prototype.pointToWorldFrame=function(N,P){var P=P||new r;return this.quaternion.vmult(N,P),P.vadd(this.position,P),P},l.prototype.vectorToWorldFrame=function(N,P){var P=P||new r;return this.quaternion.vmult(N,P),P};var d=new r,p=new a;l.prototype.addShape=function(N,U,P){var k=new r,X=new a;return U&&k.copy(U),P&&X.copy(P),this.shapes.push(N),this.shapeOffsets.push(k),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var N=this.shapes,U=this.shapeOffsets,P=N.length,k=0,X=0;X!==P;X++){var ie=N[X];ie.updateBoundingSphereRadius();var H=U[X].norm(),B=ie.boundingSphereRadius;H+B>k&&(k=H+B)}this.boundingRadius=k};var g=new c;l.prototype.computeAABB=function(){for(var N=this.shapes,U=this.shapeOffsets,P=this.shapeOrientations,k=N.length,X=d,ie=p,H=this.quaternion,B=this.aabb,ee=g,$=0;$!==k;$++){var V=N[$];P[$].mult(H,ie),ie.vmult(U[$],X),X.vadd(this.position,X),V.calculateWorldAABB(X,ie,ee.lowerBound,ee.upperBound),$===0?B.copy(ee):B.extend(ee)}this.aabbNeedsUpdate=!1};var v=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(N){var U=this.invInertia;if(!(U.x===U.y&&U.y===U.z&&!N)){var P=v,k=m;P.setRotationFromQuaternion(this.quaternion),P.transpose(k),P.scale(U,P),P.mmult(k,this.invInertiaWorld)}};var f=new r,y=new r;l.prototype.applyForce=function(N,U){if(this.type===l.DYNAMIC){var P=f;U.vsub(this.position,P);var k=y;P.cross(N,k),this.force.vadd(N,this.force),this.torque.vadd(k,this.torque)}};var _=new r,x=new r;l.prototype.applyLocalForce=function(N,U){if(this.type===l.DYNAMIC){var P=_,k=x;this.vectorToWorldFrame(N,P),this.pointToWorldFrame(U,k),this.applyForce(P,k)}};var M=new r,L=new r,O=new r;l.prototype.applyImpulse=function(N,U){if(this.type===l.DYNAMIC){var P=M;U.vsub(this.position,P);var k=L;k.copy(N),k.mult(this.invMass,k),this.velocity.vadd(k,this.velocity);var X=O;P.cross(N,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var I=new r,b=new r;l.prototype.applyLocalImpulse=function(N,U){if(this.type===l.DYNAMIC){var P=I,k=b;this.vectorToWorldFrame(N,P),this.pointToWorldFrame(U,k),this.applyImpulse(P,k)}};var w=new r;l.prototype.updateMassProperties=function(){var N=w;this.invMass=this.mass>0?1/this.mass:0;var U=this.inertia,P=this.fixedRotation;this.computeAABB(),N.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(N,this.mass,U),this.invInertia.set(U.x>0&&!P?1/U.x:0,U.y>0&&!P?1/U.y:0,U.z>0&&!P?1/U.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(N,U){var P=new r;return N.vsub(this.position,P),this.angularVelocity.cross(P,U),this.velocity.vadd(U,U),U}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var s=t("../math/Vec3"),r=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),a=t("../objects/WheelInfo");n.exports=c;function c(H){this.chassisBody=H.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof H.indexRightAxis<"u"?H.indexRightAxis:1,this.indexForwardAxis=typeof H.indexForwardAxis<"u"?H.indexForwardAxis:0,this.indexUpAxis=typeof H.indexUpAxis<"u"?H.indexUpAxis:2}new s,new s,new s;var h=new s,l=new s,d=new s;new o,c.prototype.addWheel=function(H){H=H||{};var B=new a(H),ee=this.wheelInfos.length;return this.wheelInfos.push(B),ee},c.prototype.setSteeringValue=function(H,B){var ee=this.wheelInfos[B];ee.steering=H},new s,c.prototype.applyEngineForce=function(H,B){this.wheelInfos[B].engineForce=H},c.prototype.setBrake=function(H,B){this.wheelInfos[B].brake=H},c.prototype.addToWorld=function(H){this.constraints,H.add(this.chassisBody);var B=this;this.preStepCallback=function(){B.updateVehicle(H.dt)},H.addEventListener("preStep",this.preStepCallback),this.world=H},c.prototype.getVehicleAxisWorld=function(H,B){B.set(H===0?1:0,H===1?1:0,H===2?1:0),this.chassisBody.vectorToWorldFrame(B,B)},c.prototype.updateVehicle=function(H){for(var B=this.wheelInfos,ee=B.length,$=this.chassisBody,V=0;V<ee;V++)this.updateWheelTransform(V);this.currentVehicleSpeedKmHour=3.6*$.velocity.norm();var q=new s;this.getVehicleAxisWorld(this.indexForwardAxis,q),q.dot($.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var V=0;V<ee;V++)this.castRay(B[V]);this.updateSuspension(H);for(var E=new s,T=new s,V=0;V<ee;V++){var C=B[V],G=C.suspensionForce;G>C.maxSuspensionForce&&(G=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(G*H,E),C.raycastResult.hitPointWorld.vsub($.position,T),$.applyImpulse(E,C.raycastResult.hitPointWorld)}this.updateFriction(H);var F=new s,te=new s,Y=new s;for(V=0;V<ee;V++){var C=B[V];$.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,Y);var Z=1;switch(this.indexUpAxis){case 1:Z=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var se=te.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(se,F),te.vsub(F,te);var Ee=te.dot(Y);C.deltaRotation=Z*Ee*H/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*H),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},c.prototype.updateSuspension=function(H){for(var B=this.chassisBody,ee=B.mass,$=this.wheelInfos,V=$.length,q=0;q<V;q++){var E=$[q];if(E.isInContact){var T,C=E.suspensionRestLength,G=E.suspensionLength,F=C-G;T=E.suspensionStiffness*F*E.clippedInvContactDotSuspension;var te=E.suspensionRelativeVelocity,Y;te<0?Y=E.dampingCompression:Y=E.dampingRelaxation,T-=Y*te,E.suspensionForce=T*ee,E.suspensionForce<0&&(E.suspensionForce=0)}else E.suspensionForce=0}},c.prototype.removeFromWorld=function(H){this.constraints,H.remove(this.chassisBody),H.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new s,g=new s;c.prototype.castRay=function(H){var B=p,ee=g;this.updateWheelTransformWorld(H);var $=this.chassisBody,V=-1,q=H.suspensionRestLength+H.radius;H.directionWorld.scale(q,B);var E=H.chassisConnectionPointWorld;E.vadd(B,ee);var T=H.raycastResult;T.reset();var C=$.collisionResponse;$.collisionResponse=!1,this.world.rayTest(E,ee,T),$.collisionResponse=C;var G=T.body;if(H.raycastResult.groundObject=0,G){V=T.distance,H.raycastResult.hitNormalWorld=T.hitNormalWorld,H.isInContact=!0;var F=T.distance;H.suspensionLength=F-H.radius;var te=H.suspensionRestLength-H.maxSuspensionTravel,Y=H.suspensionRestLength+H.maxSuspensionTravel;H.suspensionLength<te&&(H.suspensionLength=te),H.suspensionLength>Y&&(H.suspensionLength=Y,H.raycastResult.reset());var Z=H.raycastResult.hitNormalWorld.dot(H.directionWorld),se=new s;$.getVelocityAtWorldPoint(H.raycastResult.hitPointWorld,se);var Ee=H.raycastResult.hitNormalWorld.dot(se);if(Z>=-.1)H.suspensionRelativeVelocity=0,H.clippedInvContactDotSuspension=1/.1;else{var pe=-1/Z;H.suspensionRelativeVelocity=Ee*pe,H.clippedInvContactDotSuspension=pe}}else H.suspensionLength=H.suspensionRestLength+0*H.maxSuspensionTravel,H.suspensionRelativeVelocity=0,H.directionWorld.scale(-1,H.raycastResult.hitNormalWorld),H.clippedInvContactDotSuspension=1;return V},c.prototype.updateWheelTransformWorld=function(H){H.isInContact=!1;var B=this.chassisBody;B.pointToWorldFrame(H.chassisConnectionPointLocal,H.chassisConnectionPointWorld),B.vectorToWorldFrame(H.directionLocal,H.directionWorld),B.vectorToWorldFrame(H.axleLocal,H.axleWorld)},c.prototype.updateWheelTransform=function(H){var B=h,ee=l,$=d,V=this.wheelInfos[H];this.updateWheelTransformWorld(V),V.directionLocal.scale(-1,B),ee.copy(V.axleLocal),B.cross(ee,$),$.normalize(),ee.normalize();var q=V.steering,E=new r;E.setFromAxisAngle(B,q);var T=new r;T.setFromAxisAngle(ee,V.rotation);var C=V.worldTransform.quaternion;this.chassisBody.quaternion.mult(E,C),C.mult(T,C),C.normalize();var G=V.worldTransform.position;G.copy(V.directionWorld),G.scale(V.suspensionLength,G),G.vadd(V.chassisConnectionPointWorld,G)};var v=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];c.prototype.getWheelTransformWorld=function(H){return this.wheelInfos[H].worldTransform};var m=new s,f=[],y=[],_=1;c.prototype.updateFriction=function(H){for(var B=m,ee=this.wheelInfos,$=ee.length,V=this.chassisBody,q=y,E=f,T=0;T<$;T++){var C=ee[T],G=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,q[T]||(q[T]=new s),E[T]||(E[T]=new s)}for(var T=0;T<$;T++){var C=ee[T],G=C.raycastResult.body;if(G){var F=E[T],te=this.getWheelTransformWorld(T);te.vectorToWorldFrame(v[this.indexRightAxis],F);var Y=C.raycastResult.hitNormalWorld,Z=F.dot(Y);Y.scale(Z,B),F.vsub(B,F),F.normalize(),Y.cross(F,q[T]),q[T].normalize(),C.sideImpulse=ie(V,C.raycastResult.hitPointWorld,G,C.raycastResult.hitPointWorld,F),C.sideImpulse*=_}}var se=1,Ee=.5;this.sliding=!1;for(var T=0;T<$;T++){var C=ee[T],G=C.raycastResult.body,pe=0;if(C.slipInfo=1,G){var ye=0,he=C.brake?C.brake:ye;pe=O(V,G,C.raycastResult.hitPointWorld,q[T],he),pe+=C.engineForce*H;var ve=he/pe;C.slipInfo*=ve}if(C.forwardImpulse=0,C.skidInfo=1,G){C.skidInfo=1;var Ge=C.suspensionForce*H*C.frictionSlip,Ue=Ge,He=Ge*Ue;C.forwardImpulse=pe;var Ae=C.forwardImpulse*Ee,je=C.sideImpulse*se,D=Ae*Ae+je*je;if(C.sliding=!1,D>He){this.sliding=!0,C.sliding=!0;var ve=Ge/Math.sqrt(D);C.skidInfo*=ve}}}if(this.sliding)for(var T=0;T<$;T++){var C=ee[T];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var T=0;T<$;T++){var C=ee[T],A=new s;if(A.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var ne=new s;q[T].scale(C.forwardImpulse,ne),V.applyImpulse(ne,A)}if(C.sideImpulse!==0){var G=C.raycastResult.body,de=new s;de.copy(C.raycastResult.hitPointWorld);var xe=new s;E[T].scale(C.sideImpulse,xe),V.pointToLocalFrame(A,A),A["xyz"[this.indexUpAxis]]*=C.rollInfluence,V.pointToWorldFrame(A,A),V.applyImpulse(xe,A),xe.scale(-1,xe),G.applyImpulse(xe,de)}}};var x=new s,M=new s,L=new s;function O(H,B,ee,$,V){var q=0,E=ee,T=x,C=M,G=L;H.getVelocityAtWorldPoint(E,T),B.getVelocityAtWorldPoint(E,C),T.vsub(C,G);var F=$.dot(G),te=U(H,ee,$),Y=U(B,ee,$),Z=1,se=Z/(te+Y);return q=-F*se,V<q&&(q=V),q<-V&&(q=-V),q}var I=new s,b=new s,w=new s,N=new s;function U(H,B,ee){var $=I,V=b,q=w,E=N;return B.vsub(H.position,$),$.cross(ee,V),H.invInertiaWorld.vmult(V,E),E.cross($,q),H.invMass+ee.dot(q)}var P=new s,k=new s,X=new s;function ie(H,B,ee,$,V,Z){var E=V.norm2();if(E>1.1)return 0;var T=P,C=k,G=X;H.getVelocityAtWorldPoint(B,T),ee.getVelocityAtWorldPoint($,C),T.vsub(C,G);var F=V.dot(G),te=.2,Y=1/(H.invMass+ee.invMass),Z=-te*F*Y;return Z}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var s=t("./Body"),r=t("../shapes/Sphere"),o=t("../shapes/Box"),a=t("../math/Vec3"),c=t("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new a(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var g=new o(new a(5,2,.5));this.chassisBody=new s(1,g)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var g=p.body;g||(g=new s(1,new r(1.2))),this.wheelBodies.push(g),this.wheelForces.push(0),new a;var v=typeof p.position<"u"?p.position.clone():new a,m=new a;this.chassisBody.pointToWorldFrame(v,m),g.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new a(0,1,0);this.wheelAxes.push(f);var y=new c(this.chassisBody,g,{pivotA:v,axisA:f,pivotB:a.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,g){var v=this.wheelAxes[g],m=Math.cos(p),f=Math.sin(p),y=v.x,_=v.y;this.constraints[g].axisA.set(m*y-f*_,f*y+m*_,0)},h.prototype.setMotorSpeed=function(p,g){var v=this.constraints[g];v.enableMotor(),v.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var g=this.constraints[p];g.disableMotor()};var l=new a;h.prototype.setWheelForce=function(p,g){this.wheelForces[g]=p},h.prototype.applyWheelForce=function(p,g){var v=this.wheelAxes[g],m=this.wheelBodies[g],f=m.torque;v.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)p.add(v[m]);for(var m=0;m<g.length;m++)p.addConstraint(g[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,g=0;g<p.length;g++)this.applyWheelForce(p[g],g)},h.prototype.removeFromWorld=function(p){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)p.remove(v[m]);for(var m=0;m<g.length;m++)p.removeConstraint(g[m])};var d=new a;h.prototype.getWheelSpeed=function(p){var g=this.wheelAxes[p],v=this.wheelBodies[p],m=v.angularVelocity;return this.chassisBody.vectorToWorldFrame(g,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=r,t("../shapes/Shape");var s=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(g){this.particles.push(g),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(g){var v=this.particles.indexOf(g);v!==-1&&(this.particles.splice(v,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new s;r.prototype.getNeighbors=function(g,v){for(var m=this.particles.length,f=g.id,y=this.smoothingRadius*this.smoothingRadius,_=o,x=0;x!==m;x++){var M=this.particles[x];M.position.vsub(g.position,_),f!==M.id&&_.norm2()<y&&v.push(M)}};var a=new s,c=new s,h=new s,l=new s,d=new s,p=new s;r.prototype.update=function(){for(var g=this.particles.length,v=a,m=this.speedOfSound,f=this.eps,y=0;y!==g;y++){var _=this.particles[y],x=this.neighbors[y];x.length=0,this.getNeighbors(_,x),x.push(this.particles[y]);for(var M=x.length,L=0,O=0;O!==M;O++){_.position.vsub(x[O].position,v);var I=v.norm(),b=this.w(I);L+=x[O].mass*b}this.densities[y]=L,this.pressures[y]=m*m*(this.densities[y]-this.density)}for(var w=c,N=h,U=l,P=d,k=p,y=0;y!==g;y++){var X=this.particles[y];w.set(0,0,0),N.set(0,0,0);for(var ie,H,x=this.neighbors[y],M=x.length,O=0;O!==M;O++){var B=x[O];X.position.vsub(B.position,P);var ee=P.norm();ie=-B.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+f)+this.pressures[O]/(this.densities[O]*this.densities[O]+f)),this.gradw(P,U),U.mult(ie,U),w.vadd(U,w),B.velocity.vsub(X.velocity,k),k.mult(1/(1e-4+this.densities[y]*this.densities[O])*this.viscosity*B.mass,k),H=this.nablaw(ee),k.mult(H,k),N.vadd(k,N)}N.mult(X.mass,N),w.mult(X.mass,w),X.force.vadd(N,X.force),X.force.vadd(w,X.force)}},r.prototype.w=function(g){var v=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(v,9))*Math.pow(v*v-g*g,3)},r.prototype.gradw=function(g,v){var m=g.norm(),f=this.smoothingRadius;g.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),v)},r.prototype.nablaw=function(g){var v=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(v,9))*(v*v-g*g)*(7*g*g-3*v*v);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var s=t("../math/Vec3");n.exports=r;function r(y,_,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=y,this.bodyB=_,this.localAnchorA=new s,this.localAnchorB=new s,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}r.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},r.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},r.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},r.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var o=new s,a=new s,c=new s,h=new s,l=new s,d=new s,p=new s,g=new s,v=new s,m=new s,f=new s;r.prototype.applyForce=function(){var y=this.stiffness,_=this.damping,x=this.restLength,M=this.bodyA,L=this.bodyB,O=o,I=a,b=c,w=h,N=f,U=l,P=d,k=p,X=g,ie=v,H=m;this.getWorldAnchorA(U),this.getWorldAnchorB(P),U.vsub(M.position,k),P.vsub(L.position,X),P.vsub(U,O);var B=O.norm();I.copy(O),I.normalize(),L.velocity.vsub(M.velocity,b),L.angularVelocity.cross(X,N),b.vadd(N,b),M.angularVelocity.cross(k,N),b.vsub(N,b),I.mult(-y*(B-x)-_*b.dot(I),w),M.force.vsub(w,M.force),L.force.vadd(w,L.force),k.cross(w,ie),X.cross(w,H),M.torque.vsub(ie,M.torque),L.torque.vadd(H,L.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var s=t("../math/Vec3"),r=t("../math/Transform"),o=t("../collision/RaycastResult"),a=t("../utils/Utils");n.exports=c;function c(d){d=a.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new r,this.isInContact=!1}var l=new s,h=new s,l=new s;c.prototype.updateWheel=function(d){var p=this.raycastResult;if(this.isInContact){var g=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,l);var v=p.hitNormalWorld.dot(l);if(g>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/g;this.suspensionRelativeVelocity=v*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3"),o=t("./ConvexPolyhedron");function a(l){s.call(this),this.type=s.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a,a.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,p=this.halfExtents.z,g=r,v=[new g(-l,-d,-p),new g(l,-d,-p),new g(l,d,-p),new g(-l,d,-p),new g(-l,-d,p),new g(l,-d,p),new g(l,d,p),new g(-l,d,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new g(0,0,1),new g(0,1,0),new g(1,0,0);var f=new o(v,m);this.convexPolyhedronRepresentation=f,f.material=this.material},a.prototype.calculateLocalInertia=function(l,d){return d=d||new r,a.calculateInertia(this.halfExtents,l,d),d},a.calculateInertia=function(l,d,p){var g=l;p.x=1/12*d*(2*g.y*2*g.y+2*g.z*2*g.z),p.y=1/12*d*(2*g.x*2*g.x+2*g.z*2*g.z),p.z=1/12*d*(2*g.y*2*g.y+2*g.x*2*g.x)},a.prototype.getSideNormals=function(l,d){var p=l,g=this.halfExtents;if(p[0].set(g.x,0,0),p[1].set(0,g.y,0),p[2].set(0,0,g.z),p[3].set(-g.x,0,0),p[4].set(0,-g.y,0),p[5].set(0,0,-g.z),d!==void 0)for(var v=0;v!==p.length;v++)d.vmult(p[v],p[v]);return p},a.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var c=new r;new r,a.prototype.forEachWorldCorner=function(l,d,p){for(var g=this.halfExtents,v=[[g.x,g.y,g.z],[-g.x,g.y,g.z],[-g.x,-g.y,g.z],[-g.x,-g.y,-g.z],[g.x,-g.y,-g.z],[g.x,g.y,-g.z],[-g.x,g.y,-g.z],[g.x,-g.y,g.z]],m=0;m<v.length;m++)c.set(v[m][0],v[m][1],v[m][2]),d.vmult(c,c),l.vadd(c,c),p(c.x,c.y,c.z)};var h=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.calculateWorldAABB=function(l,d,p,g){var v=this.halfExtents;h[0].set(v.x,v.y,v.z),h[1].set(-v.x,v.y,v.z),h[2].set(-v.x,-v.y,v.z),h[3].set(-v.x,-v.y,-v.z),h[4].set(v.x,-v.y,-v.z),h[5].set(v.x,v.y,-v.z),h[6].set(-v.x,v.y,-v.z),h[7].set(v.x,-v.y,v.z);var m=h[0];d.vmult(m,m),l.vadd(m,m),g.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];d.vmult(m,m),l.vadd(m,m);var y=m.x,_=m.y,x=m.z;y>g.x&&(g.x=y),_>g.y&&(g.y=_),x>g.z&&(g.z=x),y<p.x&&(p.x=y),_<p.y&&(p.y=_),x<p.z&&(p.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function a(V,q,E){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=V||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=q||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=E?E.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a;var c=new r;a.prototype.computeEdges=function(){var V=this.faces,q=this.vertices;q.length;var E=this.uniqueEdges;E.length=0;for(var T=c,C=0;C!==V.length;C++)for(var G=V[C],F=G.length,te=0;te!==F;te++){var Y=(te+1)%F;q[G[te]].vsub(q[G[Y]],T),T.normalize();for(var Z=!1,se=0;se!==E.length;se++)if(E[se].almostEquals(T)||E[se].almostEquals(T)){Z=!0;break}Z||E.push(T.clone())}},a.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var V=0;V<this.faces.length;V++){for(var q=0;q<this.faces[V].length;q++)if(!this.vertices[this.faces[V][q]])throw new Error("Vertex "+this.faces[V][q]+" not found!");var E=this.faceNormals[V]||new r;this.getFaceNormal(V,E),E.negate(E),this.faceNormals[V]=E;var T=this.vertices[this.faces[V][0]];if(E.dot(T)<0){console.error(".faceNormals["+V+"] = Vec3("+E.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var q=0;q<this.faces[V].length;q++)console.warn(".vertices["+this.faces[V][q]+"] = Vec3("+this.vertices[this.faces[V][q]].toString()+")")}}};var h=new r,l=new r;a.computeNormal=function(V,q,E,T){q.vsub(V,l),E.vsub(q,h),h.cross(l,T),T.isZero()||T.normalize()},a.prototype.getFaceNormal=function(V,q){var E=this.faces[V],T=this.vertices[E[0]],C=this.vertices[E[1]],G=this.vertices[E[2]];return a.computeNormal(T,C,G,q)};var d=new r;a.prototype.clipAgainstHull=function(V,q,E,T,C,G,F,te,Y){for(var Z=d,se=-1,Ee=-Number.MAX_VALUE,pe=0;pe<E.faces.length;pe++){Z.copy(E.faceNormals[pe]),C.vmult(Z,Z);var ye=Z.dot(G);ye>Ee&&(Ee=ye,se=pe)}for(var he=[],ve=E.faces[se],Ge=ve.length,Ue=0;Ue<Ge;Ue++){var He=E.vertices[ve[Ue]],Ae=new r;Ae.copy(He),C.vmult(Ae,Ae),T.vadd(Ae,Ae),he.push(Ae)}se>=0&&this.clipFaceAgainstHull(G,V,q,he,F,te,Y)};var p=new r,g=new r,v=new r,m=new r,f=new r,y=new r;a.prototype.findSeparatingAxis=function(V,q,E,T,C,G,F,te){var Y=p,Z=g,se=v,Ee=m,pe=f,ye=y,he=Number.MAX_VALUE,ve=this;if(ve.uniqueAxes)for(var Ue=0;Ue!==ve.uniqueAxes.length;Ue++){E.vmult(ve.uniqueAxes[Ue],Y);var Ae=ve.testSepAxis(Y,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(Y))}else for(var Ge=F?F.length:ve.faces.length,Ue=0;Ue<Ge;Ue++){var He=F?F[Ue]:Ue;Y.copy(ve.faceNormals[He]),E.vmult(Y,Y);var Ae=ve.testSepAxis(Y,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(Y))}if(V.uniqueAxes)for(var Ue=0;Ue!==V.uniqueAxes.length;Ue++){C.vmult(V.uniqueAxes[Ue],Z);var Ae=ve.testSepAxis(Z,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(Z))}else for(var je=te?te.length:V.faces.length,Ue=0;Ue<je;Ue++){var He=te?te[Ue]:Ue;Z.copy(V.faceNormals[He]),C.vmult(Z,Z);var Ae=ve.testSepAxis(Z,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(Z))}for(var D=0;D!==ve.uniqueEdges.length;D++){E.vmult(ve.uniqueEdges[D],Ee);for(var A=0;A!==V.uniqueEdges.length;A++)if(C.vmult(V.uniqueEdges[A],pe),Ee.cross(pe,ye),!ye.almostZero()){ye.normalize();var ne=ve.testSepAxis(ye,V,q,E,T,C);if(ne===!1)return!1;ne<he&&(he=ne,G.copy(ye))}}return T.vsub(q,se),se.dot(G)>0&&G.negate(G),!0};var _=[],x=[];a.prototype.testSepAxis=function(V,q,E,T,C,G){var F=this;a.project(F,V,E,T,_),a.project(q,V,C,G,x);var te=_[0],Y=_[1],Z=x[0],se=x[1],Ee=te-se,pe=Z-Y,ye=Ee<pe?Ee:pe;return ye};var M=new r,L=new r;a.prototype.calculateLocalInertia=function(V,q){this.computeLocalAABB(M,L);var E=L.x-M.x,T=L.y-M.y,C=L.z-M.z;q.x=1/12*V*(2*T*2*T+2*C*2*C),q.y=1/12*V*(2*E*2*E+2*C*2*C),q.z=1/12*V*(2*T*2*T+2*E*2*E)},a.prototype.getPlaneConstantOfFace=function(V){var q=this.faces[V],E=this.faceNormals[V],T=this.vertices[q[0]],C=-E.dot(T);return C};var O=new r,I=new r,b=new r,w=new r,N=new r,U=new r,P=new r,k=new r;a.prototype.clipFaceAgainstHull=function(V,q,E,T,C,G,F){for(var te=O,Y=I,Z=b,se=w,Ee=N,pe=U,ye=P,he=k,ve=this,Ge=[],Ue=T,He=Ge,Ae=-1,je=Number.MAX_VALUE,D=0;D<ve.faces.length;D++){te.copy(ve.faceNormals[D]),E.vmult(te,te);var A=te.dot(V);A<je&&(je=A,Ae=D)}if(!(Ae<0)){var ne=ve.faces[Ae];ne.connectedFaces=[];for(var de=0;de<ve.faces.length;de++)for(var xe=0;xe<ve.faces[de].length;xe++)ne.indexOf(ve.faces[de][xe])!==-1&&de!==Ae&&ne.connectedFaces.indexOf(de)===-1&&ne.connectedFaces.push(de);Ue.length;for(var _e=ne.length,W=0;W<_e;W++){var me=ve.vertices[ne[W]],re=ve.vertices[ne[(W+1)%_e]];me.vsub(re,Y),Z.copy(Y),E.vmult(Z,Z),q.vadd(Z,Z),se.copy(this.faceNormals[Ae]),E.vmult(se,se),q.vadd(se,se),Z.cross(se,Ee),Ee.negate(Ee),pe.copy(me),E.vmult(pe,pe),q.vadd(pe,pe),-pe.dot(Ee);var Oe;{var Re=ne.connectedFaces[W];ye.copy(this.faceNormals[Re]);var Be=this.getPlaneConstantOfFace(Re);he.copy(ye),E.vmult(he,he);var Oe=Be-he.dot(q)}for(this.clipFaceAgainstPlane(Ue,He,he,Oe);Ue.length;)Ue.shift();for(;He.length;)Ue.push(He.shift())}ye.copy(this.faceNormals[Ae]);var Be=this.getPlaneConstantOfFace(Ae);he.copy(ye),E.vmult(he,he);for(var Oe=Be-he.dot(q),de=0;de<Ue.length;de++){var Pe=he.dot(Ue[de])+Oe;if(Pe<=C&&(console.log("clamped: depth="+Pe+" to minDist="+(C+"")),Pe=C),Pe<=G){var Ve=Ue[de];if(Pe<=0){var We={point:Ve,normal:he,depth:Pe};F.push(We)}}}}},a.prototype.clipFaceAgainstPlane=function(V,q,E,T){var C,G,F=V.length;if(F<2)return q;var te=V[V.length-1],Y=V[0];C=E.dot(te)+T;for(var Z=0;Z<F;Z++){if(Y=V[Z],G=E.dot(Y)+T,C<0)if(G<0){var se=new r;se.copy(Y),q.push(se)}else{var se=new r;te.lerp(Y,C/(C-G),se),q.push(se)}else if(G<0){var se=new r;te.lerp(Y,C/(C-G),se),q.push(se),q.push(Y)}te=Y,C=G}return q},a.prototype.computeWorldVertices=function(V,q){for(var E=this.vertices.length;this.worldVertices.length<E;)this.worldVertices.push(new r);for(var T=this.vertices,C=this.worldVertices,G=0;G!==E;G++)q.vmult(T[G],C[G]),V.vadd(C[G],C[G]);this.worldVerticesNeedsUpdate=!1},new r,a.prototype.computeLocalAABB=function(V,q){var E=this.vertices.length,T=this.vertices;V.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),q.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<E;C++){var G=T[C];G.x<V.x?V.x=G.x:G.x>q.x&&(q.x=G.x),G.y<V.y?V.y=G.y:G.y>q.y&&(q.y=G.y),G.z<V.z?V.z=G.z:G.z>q.z&&(q.z=G.z)}},a.prototype.computeWorldFaceNormals=function(V){for(var q=this.faceNormals.length;this.worldFaceNormals.length<q;)this.worldFaceNormals.push(new r);for(var E=this.faceNormals,T=this.worldFaceNormals,C=0;C!==q;C++)V.vmult(E[C],T[C]);this.worldFaceNormalsNeedsUpdate=!1},a.prototype.updateBoundingSphereRadius=function(){for(var V=0,q=this.vertices,E=0,T=q.length;E!==T;E++){var C=q[E].norm2();C>V&&(V=C)}this.boundingSphereRadius=Math.sqrt(V)};var X=new r;a.prototype.calculateWorldAABB=function(V,q,E,T){for(var C=this.vertices.length,G=this.vertices,F,te,Y,Z,se,Ee,pe=0;pe<C;pe++){X.copy(G[pe]),q.vmult(X,X),V.vadd(X,X);var ye=X;ye.x<F||F===void 0?F=ye.x:(ye.x>Z||Z===void 0)&&(Z=ye.x),ye.y<te||te===void 0?te=ye.y:(ye.y>se||se===void 0)&&(se=ye.y),ye.z<Y||Y===void 0?Y=ye.z:(ye.z>Ee||Ee===void 0)&&(Ee=ye.z)}E.set(F,te,Y),T.set(Z,se,Ee)},a.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},a.prototype.getAveragePointLocal=function(V){V=V||new r;for(var q=this.vertices.length,E=this.vertices,T=0;T<q;T++)V.vadd(E[T],V);return V.mult(1/q,V),V},a.prototype.transformAllPoints=function(V,q){var E=this.vertices.length,T=this.vertices;if(q){for(var C=0;C<E;C++){var G=T[C];q.vmult(G,G)}for(var C=0;C<this.faceNormals.length;C++){var G=this.faceNormals[C];q.vmult(G,G)}}if(V)for(var C=0;C<E;C++){var G=T[C];G.vadd(V,G)}};var ie=new r,H=new r,B=new r;a.prototype.pointIsInside=function(V){var q=this.vertices.length,E=this.vertices,T=this.faces,C=this.faceNormals,G=null,F=this.faces.length,te=ie;this.getAveragePointLocal(te);for(var Y=0;Y<F;Y++){this.faces[Y].length;var q=C[Y],Z=E[T[Y][0]],se=H;V.vsub(Z,se);var Ee=q.dot(se),pe=B;te.vsub(Z,pe);var ye=q.dot(pe);if(Ee<0&&ye>0||Ee>0&&ye<0)return!1}return G?1:-1},new r;var ee=new r,$=new r;a.project=function(V,q,E,T,C){var G=V.vertices.length,F=ee,te=0,Y=0,Z=$,se=V.vertices;Z.setZero(),o.vectorToLocalFrame(E,T,q,F),o.pointToLocalFrame(E,T,Z,Z);var Ee=Z.dot(F);Y=te=se[0].dot(F);for(var pe=1;pe<G;pe++){var ye=se[pe].dot(F);ye>te&&(te=ye),ye<Y&&(Y=ye)}if(Y-=Ee,te-=Ee,Y>te){var he=Y;Y=te,te=he}C[0]=te,C[1]=Y}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function a(c,h,l,d){var p=d,g=[],v=[],m=[],f=[],y=[],_=Math.cos,x=Math.sin;g.push(new r(h*_(0),h*x(0),-l*.5)),f.push(0),g.push(new r(c*_(0),c*x(0),l*.5)),y.push(1);for(var M=0;M<p;M++){var L=2*Math.PI/p*(M+1),O=2*Math.PI/p*(M+.5);M<p-1?(g.push(new r(h*_(L),h*x(L),-l*.5)),f.push(2*M+2),g.push(new r(c*_(L),c*x(L),l*.5)),y.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(p%2===1||M<p/2)&&v.push(new r(_(O),x(O),0))}m.push(y),v.push(new r(0,0,1));for(var I=[],M=0;M<f.length;M++)I.push(f[f.length-M-1]);m.push(I),this.type=s.types.CONVEXPOLYHEDRON,o.call(this,g,m,v)}a.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var s=t("./Shape"),r=t("./ConvexPolyhedron"),o=t("../math/Vec3"),a=t("../utils/Utils");n.exports=c;function c(h,l){l=a.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new r,this.pillarOffset=new o,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}c.prototype=new s,c.prototype.update=function(){this._cachedPillars={}},c.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var g=h[d][p];g<l&&(l=g)}this.minValue=l},c.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var g=h[d][p];g>l&&(l=g)}this.maxValue=l},c.prototype.setHeightValueAtIndex=function(h,l,d){var p=this.data;p[h][l]=d,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},c.prototype.getRectMinMax=function(h,l,d,p,g){g=g||[];for(var v=this.data,m=this.minValue,f=h;f<=d;f++)for(var y=l;y<=p;y++){var _=v[f][y];_>m&&(m=_)}g[0]=this.minValue,g[1]=m},c.prototype.getIndexOfPosition=function(h,l,d,p){var g=this.elementSize,v=this.data,m=Math.floor(h/g),f=Math.floor(l/g);return d[0]=m,d[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=v.length-1&&(m=v.length-1),f>=v[0].length-1&&(f=v[0].length-1)),!(m<0||f<0||m>=v.length-1||f>=v[0].length-1)},c.prototype.getHeightAt=function(h,l,d){var p=[];this.getIndexOfPosition(h,l,p,d);var g=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,g),(g[0]+g[1])/2},c.prototype.getCacheConvexTrianglePillarKey=function(h,l,d){return h+"_"+l+"_"+(d?1:0)},c.prototype.getCachedConvexTrianglePillar=function(h,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},c.prototype.setCachedConvexTrianglePillar=function(h,l,d,p,g){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]={convex:p,offset:g}},c.prototype.clearCachedConvexTrianglePillar=function(h,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},c.prototype.getConvexTrianglePillar=function(h,l,d){var p=this.pillarConvex,g=this.pillarOffset;if(this.cacheEnabled){var v=this.getCachedConvexTrianglePillar(h,l,d);if(v){this.pillarConvex=v.convex,this.pillarOffset=v.offset;return}p=new r,g=new o,this.pillarConvex=p,this.pillarOffset=g}var v=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var y=0;y<6;y++)p.vertices[y]||(p.vertices[y]=new o);f.length=5;for(var y=0;y<5;y++)f[y]||(f[y]=[]);var _=p.vertices,x=(Math.min(v[h][l],v[h+1][l],v[h][l+1],v[h+1][l+1])-this.minValue)/2+this.minValue;d?(g.set((h+.75)*m,(l+.75)*m,x),_[0].set(.25*m,.25*m,v[h+1][l+1]-x),_[1].set(-.75*m,.25*m,v[h][l+1]-x),_[2].set(.25*m,-.75*m,v[h+1][l]-x),_[3].set(.25*m,.25*m,-x-1),_[4].set(-.75*m,.25*m,-x-1),_[5].set(.25*m,-.75*m,-x-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(g.set((h+.25)*m,(l+.25)*m,x),_[0].set(-.25*m,-.25*m,v[h][l]-x),_[1].set(.75*m,-.25*m,v[h+1][l]-x),_[2].set(-.25*m,.75*m,v[h][l+1]-x),_[3].set(-.25*m,-.25*m,-x-1),_[4].set(.75*m,-.25*m,-x-1),_[5].set(-.25*m,.75*m,-x-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,d,p,g)},c.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},c.prototype.volume=function(){return Number.MAX_VALUE},c.prototype.calculateWorldAABB=function(h,l,d,p){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},c.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=o;var s=t("./Shape"),r=t("../math/Vec3");function o(){s.call(this),this.type=s.types.PARTICLE}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(a,c){return c=c||new r,c.set(0,0,0),c},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(a,c,h,l){h.copy(a),l.copy(a)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=o;var s=t("./Shape"),r=t("../math/Vec3");function o(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(c){var h=this.worldNormal;h.set(0,0,1),c.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(c,h){return h=h||new r,h},o.prototype.volume=function(){return Number.MAX_VALUE};var a=new r;o.prototype.calculateWorldAABB=function(c,h,l,d){a.set(0,0,1),h.vmult(a,a);var p=Number.MAX_VALUE;l.set(-p,-p,-p),d.set(p,p,p),a.x===1&&(d.x=c.x),a.y===1&&(d.y=c.y),a.z===1&&(d.z=c.z),a.x===-1&&(l.x=c.x),a.y===-1&&(l.y=c.y),a.z===-1&&(l.z=c.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=s;var s=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(r,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=o;var s=t("./Shape"),r=t("../math/Vec3");function o(a){if(s.call(this),this.radius=a!==void 0?Number(a):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(a,c){c=c||new r;var h=2*a*this.radius*this.radius/5;return c.x=h,c.y=h,c.z=h,c},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(a,c,h,l){for(var d=this.radius,p=["x","y","z"],g=0;g<p.length;g++){var v=p[g];h[v]=a[v]-d,l[v]=a[v]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=h;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),a=t("../collision/AABB"),c=t("../utils/Octree");function h(I,b){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(I),this.indices=new Int16Array(b),this.normals=new Float32Array(b.length),this.aabb=new a,this.edges=null,this.scale=new r(1,1,1),this.tree=new c,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new s,h.prototype.constructor=h;var l=new r;h.prototype.updateTree=function(){var I=this.tree;I.reset(),I.aabb.copy(this.aabb);var b=this.scale;I.aabb.lowerBound.x*=1/b.x,I.aabb.lowerBound.y*=1/b.y,I.aabb.lowerBound.z*=1/b.z,I.aabb.upperBound.x*=1/b.x,I.aabb.upperBound.y*=1/b.y,I.aabb.upperBound.z*=1/b.z;for(var w=new a,N=new r,U=new r,P=new r,k=[N,U,P],X=0;X<this.indices.length/3;X++){var ie=X*3;this._getUnscaledVertex(this.indices[ie],N),this._getUnscaledVertex(this.indices[ie+1],U),this._getUnscaledVertex(this.indices[ie+2],P),w.setFromPoints(k),I.insert(w,X)}I.removeEmptyNodes()};var d=new a;h.prototype.getTrianglesInAABB=function(I,b){d.copy(I);var w=this.scale,N=w.x,U=w.y,P=w.z,k=d.lowerBound,X=d.upperBound;return k.x/=N,k.y/=U,k.z/=P,X.x/=N,X.y/=U,X.z/=P,this.tree.aabbQuery(d,b)},h.prototype.setScale=function(I){var b=this.scale.x===this.scale.y===this.scale.z,w=I.x===I.y===I.z;b&&w||this.updateNormals(),this.scale.copy(I),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var I=l,b=this.normals,w=0;w<this.indices.length/3;w++){var N=w*3,U=this.indices[N],P=this.indices[N+1],k=this.indices[N+2];this.getVertex(U,f),this.getVertex(P,y),this.getVertex(k,_),h.computeNormal(y,f,_,I),b[N]=I.x,b[N+1]=I.y,b[N+2]=I.z}},h.prototype.updateEdges=function(){for(var I={},b=function(ie,H){var B=U<P?U+"_"+P:P+"_"+U;I[B]=!0},w=0;w<this.indices.length/3;w++){var N=w*3,U=this.indices[N],P=this.indices[N+1];this.indices[N+2],b(),b(),b()}var k=Object.keys(I);this.edges=new Int16Array(k.length*2);for(var w=0;w<k.length;w++){var X=k[w].split("_");this.edges[2*w]=parseInt(X[0],10),this.edges[2*w+1]=parseInt(X[1],10)}},h.prototype.getEdgeVertex=function(I,b,w){var N=this.edges[I*2+(b?1:0)];this.getVertex(N,w)};var p=new r,g=new r;h.prototype.getEdgeVector=function(I,b){var w=p,N=g;this.getEdgeVertex(I,0,w),this.getEdgeVertex(I,1,N),N.vsub(w,b)};var v=new r,m=new r;h.computeNormal=function(I,b,w,N){b.vsub(I,m),w.vsub(b,v),v.cross(m,N),N.isZero()||N.normalize()};var f=new r,y=new r,_=new r;h.prototype.getVertex=function(I,b){var w=this.scale;return this._getUnscaledVertex(I,b),b.x*=w.x,b.y*=w.y,b.z*=w.z,b},h.prototype._getUnscaledVertex=function(I,b){var w=I*3,N=this.vertices;return b.set(N[w],N[w+1],N[w+2])},h.prototype.getWorldVertex=function(I,b,w,N){return this.getVertex(I,N),o.pointToWorldFrame(b,w,N,N),N},h.prototype.getTriangleVertices=function(I,b,w,N){var U=I*3;this.getVertex(this.indices[U],b),this.getVertex(this.indices[U+1],w),this.getVertex(this.indices[U+2],N)},h.prototype.getNormal=function(I,b){var w=I*3;return b.set(this.normals[w],this.normals[w+1],this.normals[w+2])};var x=new a;h.prototype.calculateLocalInertia=function(I,b){this.computeLocalAABB(x);var w=x.upperBound.x-x.lowerBound.x,N=x.upperBound.y-x.lowerBound.y,U=x.upperBound.z-x.lowerBound.z;return b.set(1/12*I*(2*N*2*N+2*U*2*U),1/12*I*(2*w*2*w+2*U*2*U),1/12*I*(2*N*2*N+2*w*2*w))};var M=new r;h.prototype.computeLocalAABB=function(I){var b=I.lowerBound,w=I.upperBound,N=this.vertices.length;this.vertices;var U=M;this.getVertex(0,U),b.copy(U),w.copy(U);for(var P=0;P!==N;P++)this.getVertex(P,U),U.x<b.x?b.x=U.x:U.x>w.x&&(w.x=U.x),U.y<b.y?b.y=U.y:U.y>w.y&&(w.y=U.y),U.z<b.z?b.z=U.z:U.z>w.z&&(w.z=U.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var I=0,b=this.vertices,w=new r,N=0,U=b.length/3;N!==U;N++){this.getVertex(N,w);var P=w.norm2();P>I&&(I=P)}this.boundingSphereRadius=Math.sqrt(I)},new r;var L=new o,O=new a;h.prototype.calculateWorldAABB=function(I,b,w,N){var U=L,P=O;U.position=I,U.quaternion=b,this.aabb.toWorldFrame(U,P),w.copy(P.lowerBound),N.copy(P.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(I,b,w,N,U){I=I||1,b=b||.5,w=w||8,N=N||6,U=U||Math.PI*2;for(var P=[],k=[],X=0;X<=w;X++)for(var ie=0;ie<=N;ie++){var H=ie/N*U,B=X/w*Math.PI*2,ee=(I+b*Math.cos(B))*Math.cos(H),$=(I+b*Math.cos(B))*Math.sin(H),V=b*Math.sin(B);P.push(ee,$,V)}for(var X=1;X<=w;X++)for(var ie=1;ie<=N;ie++){var q=(N+1)*X+ie-1,E=(N+1)*(X-1)+ie-1,T=(N+1)*(X-1)+ie,C=(N+1)*X+ie;k.push(q,E,C),k.push(E,T,C)}return new h(P,k)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=r,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver");function r(){s.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new s;var o=[],a=[],c=[];r.prototype.solve=function(h,l){var d=0,p=this.iterations,g=this.tolerance*this.tolerance,v=this.equations,m=v.length,f=l.bodies,y=f.length,_=h,x,M,L,O,I,b;if(m!==0)for(var w=0;w!==y;w++)f[w].updateSolveMassProperties();var N=a,U=c,P=o;N.length=m,U.length=m,P.length=m;for(var w=0;w!==m;w++){var k=v[w];P[w]=0,U[w]=k.computeB(_),N[w]=1/k.computeC()}if(m!==0){for(var w=0;w!==y;w++){var X=f[w],ie=X.vlambda,H=X.wlambda;ie.set(0,0,0),H&&H.set(0,0,0)}for(d=0;d!==p;d++){O=0;for(var B=0;B!==m;B++){var k=v[B];x=U[B],M=N[B],b=P[B],I=k.computeGWlambda(),L=M*(x-I-k.eps*b),b+L<k.minForce?L=k.minForce-b:b+L>k.maxForce&&(L=k.maxForce-b),P[B]+=L,O+=L>0?L:-L,k.addToWlambda(L)}if(O*O<g)break}for(var w=0;w!==y;w++){var X=f[w],ee=X.velocity,$=X.angularVelocity;ee.vadd(X.vlambda,ee),$&&$.vadd(X.wlambda,$)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(r,o){return 0},s.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},s.prototype.removeEquation=function(r){var o=this.equations,a=o.indexOf(r);a!==-1&&o.splice(a,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver"),r=t("../objects/Body");function o(f){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new s;var a=[],c=[],h={bodies:[]},l=r.STATIC;function d(f){for(var y=f.length,_=0;_!==y;_++){var x=f[_];if(!x.visited&&!(x.body.type&l))return x}return!1}var p=[];function g(f,y,_,x){for(p.push(f),f.visited=!0,y(f,_,x);p.length;)for(var M=p.pop(),L;L=d(M.children);)L.visited=!0,y(L,_,x),p.push(L)}function v(f,y,_){y.push(f.body);for(var x=f.eqs.length,M=0;M!==x;M++){var L=f.eqs[M];_.indexOf(L)===-1&&_.push(L)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,y){for(var _=a,x=this.nodePool,M=y.bodies,L=this.equations,O=L.length,I=M.length,b=this.subsolver;x.length<I;)x.push(this.createNode());_.length=I;for(var w=0;w<I;w++)_[w]=x[w];for(var w=0;w!==I;w++){var N=_[w];N.body=M[w],N.children.length=0,N.eqs.length=0,N.visited=!1}for(var U=0;U!==O;U++){var P=L[U],w=M.indexOf(P.bi),k=M.indexOf(P.bj),X=_[w],ie=_[k];X.children.push(ie),X.eqs.push(P),ie.children.push(X),ie.eqs.push(P)}var H,B=0,ee=c;b.tolerance=this.tolerance,b.iterations=this.iterations;for(var $=h;H=d(_);){ee.length=0,$.bodies.length=0,g(H,v,$.bodies,ee);var V=ee.length;ee=ee.sort(m);for(var w=0;w!==V;w++)b.addEquation(ee[w]);b.solve(f,$),b.removeAllEquations(),B++}return B};function m(f,y){return y.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(r,o){this._listeners===void 0&&(this._listeners={});var a=this._listeners;return a[r]===void 0&&(a[r]=[]),a[r].indexOf(o)===-1&&a[r].push(o),this},hasEventListener:function(r,o){if(this._listeners===void 0)return!1;var a=this._listeners;return a[r]!==void 0&&a[r].indexOf(o)!==-1},removeEventListener:function(r,o){if(this._listeners===void 0)return this;var a=this._listeners;if(a[r]===void 0)return this;var c=a[r].indexOf(o);return c!==-1&&a[r].splice(c,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var o=this._listeners,a=o[r.type];if(a!==void 0){r.target=this;for(var c=0,h=a.length;c<h;c++)a[c].call(this,r)}return this}}},{}],50:[function(t,n,i){var s=t("../collision/AABB"),r=t("../math/Vec3");n.exports=a;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new s,this.data=[],this.children=[]}function a(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}a.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,p){var g=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var v=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;v.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(v[f].insert(l,d,p+1))return!0;m&&(v.length=0)}return g.push(d),!0};var c=new r;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,p=l.upperBound,g=this.children;g.push(new o({aabb:new s({lowerBound:new r(0,0,0)})}),new o({aabb:new s({lowerBound:new r(1,0,0)})}),new o({aabb:new s({lowerBound:new r(1,1,0)})}),new o({aabb:new s({lowerBound:new r(1,1,1)})}),new o({aabb:new s({lowerBound:new r(0,1,1)})}),new o({aabb:new s({lowerBound:new r(0,0,1)})}),new o({aabb:new s({lowerBound:new r(1,0,1)})}),new o({aabb:new s({lowerBound:new r(0,1,0)})})),p.vsub(d,c),c.scale(.5,c);for(var v=this.root||this,m=0;m!==8;m++){var f=g[m];f.root=v;var y=f.aabb.lowerBound;y.x*=c.x,y.y*=c.y,y.z*=c.z,y.vadd(d,y),y.vadd(c,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var p=[this];p.length;){var g=p.pop();g.aabb.overlaps(l)&&Array.prototype.push.apply(d,g.data),Array.prototype.push.apply(p,g.children)}return d};var h=new s;o.prototype.rayQuery=function(l,d,p){return l.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),p=d.children.length-1;p>=0;p--)d.children[p].data.length||d.children.splice(p,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var r=arguments.length,o=0;o!==r;o++)this.objects.push(arguments[o])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(r,o){if(r>o){var a=o;o=r,r=a}return this.data[r+"-"+o]},s.prototype.set=function(r,o,a){if(r>o){var c=o;o=r,r=c}var h=r+"-"+o;this.get(r,o)||this.data.keys.push(h),this.data[h]=a},s.prototype.reset=function(){for(var r=this.data,o=r.keys;o.length>0;){var a=o.pop();delete r[a]}}},{}],53:[function(t,n,i){function s(){}n.exports=s,s.defaults=function(r,o){r=r||{};for(var a in o)a in r||(r[a]=o[a]);return r}},{}],54:[function(t,n,i){n.exports=o;var s=t("../math/Vec3"),r=t("./Pool");function o(){r.call(this),this.type=s}o.prototype=new r,o.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=g;var s=t("../collision/AABB"),r=t("../shapes/Shape"),o=t("../collision/Ray"),a=t("../math/Vec3"),c=t("../math/Transform");t("../shapes/ConvexPolyhedron");var h=t("../math/Quaternion");t("../solver/Solver");var l=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),p=t("../equations/FrictionEquation");function g(oe){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=oe,this.currentContactMaterial=null,this.enableFrictionReduction=!1}g.prototype.createContactEquation=function(oe,fe,Me,we,qe,De){var Te;this.contactPointPool.length?(Te=this.contactPointPool.pop(),Te.bi=oe,Te.bj=fe):Te=new d(oe,fe),Te.enabled=oe.collisionResponse&&fe.collisionResponse&&Me.collisionResponse&&we.collisionResponse;var S=this.currentContactMaterial;Te.restitution=S.restitution,Te.setSpookParams(S.contactEquationStiffness,S.contactEquationRelaxation,this.world.dt);var R=Me.material||oe.material,j=we.material||fe.material;return R&&j&&R.restitution>=0&&j.restitution>=0&&(Te.restitution=R.restitution*j.restitution),Te.si=qe||Me,Te.sj=De||we,Te},g.prototype.createFrictionEquationsFromContact=function(oe,fe){var Me=oe.bi,we=oe.bj,qe=oe.si,De=oe.sj,Te=this.world,S=this.currentContactMaterial,R=S.friction,j=qe.material||Me.material,z=De.material||we.material;if(j&&z&&j.friction>=0&&z.friction>=0&&(R=j.friction*z.friction),R>0){var Q=R*Te.gravity.length(),le=Me.invMass+we.invMass;le>0&&(le=1/le);var ae=this.frictionEquationPool,ge=ae.length?ae.pop():new p(Me,we,Q*le),Se=ae.length?ae.pop():new p(Me,we,Q*le);return ge.bi=Se.bi=Me,ge.bj=Se.bj=we,ge.minForce=Se.minForce=-Q*le,ge.maxForce=Se.maxForce=Q*le,ge.ri.copy(oe.ri),ge.rj.copy(oe.rj),Se.ri.copy(oe.ri),Se.rj.copy(oe.rj),oe.ni.tangents(ge.t,Se.t),ge.setSpookParams(S.frictionEquationStiffness,S.frictionEquationRelaxation,Te.dt),Se.setSpookParams(S.frictionEquationStiffness,S.frictionEquationRelaxation,Te.dt),ge.enabled=Se.enabled=oe.enabled,fe.push(ge,Se),!0}return!1};var v=new a,m=new a,f=new a;g.prototype.createFrictionFromAverage=function(oe){var fe=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(fe,this.frictionResult)||oe===1)){var Me=this.frictionResult[this.frictionResult.length-2],we=this.frictionResult[this.frictionResult.length-1];v.setZero(),m.setZero(),f.setZero();var qe=fe.bi;fe.bj;for(var De=0;De!==oe;De++)fe=this.result[this.result.length-1-De],fe.bodyA!==qe?(v.vadd(fe.ni,v),m.vadd(fe.ri,m),f.vadd(fe.rj,f)):(v.vsub(fe.ni,v),m.vadd(fe.rj,m),f.vadd(fe.ri,f));var Te=1/oe;m.scale(Te,Me.ri),f.scale(Te,Me.rj),we.ri.copy(Me.ri),we.rj.copy(Me.rj),v.normalize(),v.tangents(Me.t,we.t)}};var y=new a,_=new a,x=new h,M=new h;g.prototype.getContacts=function(oe,fe,Me,we,qe,De,Te){this.contactPointPool=qe,this.frictionEquationPool=Te,this.result=we,this.frictionResult=De;for(var S=x,R=M,j=y,z=_,Q=0,le=oe.length;Q!==le;Q++){var ae=oe[Q],ge=fe[Q],Se=null;ae.material&&ge.material&&(Se=Me.getContactMaterial(ae.material,ge.material)||null);for(var Le=0;Le<ae.shapes.length;Le++){ae.quaternion.mult(ae.shapeOrientations[Le],S),ae.quaternion.vmult(ae.shapeOffsets[Le],j),j.vadd(ae.position,j);for(var ce=ae.shapes[Le],Ie=0;Ie<ge.shapes.length;Ie++){ge.quaternion.mult(ge.shapeOrientations[Ie],R),ge.quaternion.vmult(ge.shapeOffsets[Ie],z),z.vadd(ge.position,z);var ze=ge.shapes[Ie];if(!(j.distanceTo(z)>ce.boundingSphereRadius+ze.boundingSphereRadius)){var it=null;ce.material&&ze.material&&(it=Me.getContactMaterial(ce.material,ze.material)||null),this.currentContactMaterial=it||Se||Me.defaultContactMaterial;var Xe=this[ce.type|ze.type];Xe&&(ce.type<ze.type?Xe.call(this,ce,ze,j,z,S,R,ae,ge,ce,ze):Xe.call(this,ze,ce,z,j,R,S,ge,ae,ce,ze))}}}}},g.prototype[r.types.BOX|r.types.BOX]=g.prototype.boxBox=function(oe,fe,Me,we,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,fe.convexPolyhedronRepresentation.material=fe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,fe.convexPolyhedronRepresentation.collisionResponse=fe.collisionResponse,this.convexConvex(oe.convexPolyhedronRepresentation,fe.convexPolyhedronRepresentation,Me,we,qe,De,Te,S,oe,fe)},g.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=g.prototype.boxConvex=function(oe,fe,Me,we,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexConvex(oe.convexPolyhedronRepresentation,fe,Me,we,qe,De,Te,S,oe,fe)},g.prototype[r.types.BOX|r.types.PARTICLE]=g.prototype.boxParticle=function(oe,fe,Me,we,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexParticle(oe.convexPolyhedronRepresentation,fe,Me,we,qe,De,Te,S,oe,fe)},g.prototype[r.types.SPHERE]=g.prototype.sphereSphere=function(oe,fe,Me,we,qe,De,Te,S){var R=this.createContactEquation(Te,S,oe,fe);we.vsub(Me,R.ni),R.ni.normalize(),R.ri.copy(R.ni),R.rj.copy(R.ni),R.ri.mult(oe.radius,R.ri),R.rj.mult(-fe.radius,R.rj),R.ri.vadd(Me,R.ri),R.ri.vsub(Te.position,R.ri),R.rj.vadd(we,R.rj),R.rj.vsub(S.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)};var L=new a,O=new a,I=new a;g.prototype[r.types.PLANE|r.types.TRIMESH]=g.prototype.planeTrimesh=function(oe,fe,Me,we,qe,De,Te,S){var R=new a,j=L;j.set(0,0,1),qe.vmult(j,j);for(var z=0;z<fe.vertices.length/3;z++){fe.getVertex(z,R);var Q=new a;Q.copy(R),c.pointToWorldFrame(we,De,Q,R);var le=O;R.vsub(Me,le);var ae=j.dot(le);if(ae<=0){var ge=this.createContactEquation(Te,S,oe,fe);ge.ni.copy(j);var Se=I;j.scale(le.dot(j),Se),R.vsub(Se,Se),ge.ri.copy(Se),ge.ri.vsub(Te.position,ge.ri),ge.rj.copy(R),ge.rj.vsub(S.position,ge.rj),this.result.push(ge),this.createFrictionEquationsFromContact(ge,this.frictionResult)}}};var b=new a,w=new a;new a;var N=new a,U=new a,P=new a,k=new a,X=new a,ie=new a,H=new a,B=new a,ee=new a,$=new a,V=new a,q=new s,E=[];g.prototype[r.types.SPHERE|r.types.TRIMESH]=g.prototype.sphereTrimesh=function(oe,fe,Me,we,qe,De,Te,S){var R=P,j=k,z=X,Q=ie,le=H,ae=B,ge=q,Se=U,Le=w,ce=E;c.pointToLocalFrame(we,De,Me,le);var Ie=oe.radius;ge.lowerBound.set(le.x-Ie,le.y-Ie,le.z-Ie),ge.upperBound.set(le.x+Ie,le.y+Ie,le.z+Ie),fe.getTrianglesInAABB(ge,ce);for(var ze=N,it=oe.radius*oe.radius,Xe=0;Xe<ce.length;Xe++)for(var Ze=0;Ze<3;Ze++)if(fe.getVertex(fe.indices[ce[Xe]*3+Ze],ze),ze.vsub(le,Le),Le.norm2()<=it){Se.copy(ze),c.pointToWorldFrame(we,De,Se,ze),ze.vsub(Me,Le);var Fe=this.createContactEquation(Te,S,oe,fe);Fe.ni.copy(Le),Fe.ni.normalize(),Fe.ri.copy(Fe.ni),Fe.ri.scale(oe.radius,Fe.ri),Fe.ri.vadd(Me,Fe.ri),Fe.ri.vsub(Te.position,Fe.ri),Fe.rj.copy(ze),Fe.rj.vsub(S.position,Fe.rj),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}for(var Xe=0;Xe<ce.length;Xe++)for(var Ze=0;Ze<3;Ze++){fe.getVertex(fe.indices[ce[Xe]*3+Ze],R),fe.getVertex(fe.indices[ce[Xe]*3+(Ze+1)%3],j),j.vsub(R,z),le.vsub(j,ae);var $e=ae.dot(z);le.vsub(R,ae);var Nt=ae.dot(z);if(Nt>0&&$e<0){le.vsub(R,ae),Q.copy(z),Q.normalize(),Nt=ae.dot(Q),Q.scale(Nt,ae),ae.vadd(R,ae);var ct=ae.distanceTo(le);if(ct<oe.radius){var Fe=this.createContactEquation(Te,S,oe,fe);ae.vsub(le,Fe.ni),Fe.ni.normalize(),Fe.ni.scale(oe.radius,Fe.ri),c.pointToWorldFrame(we,De,ae,ae),ae.vsub(S.position,Fe.rj),c.vectorToWorldFrame(De,Fe.ni,Fe.ni),c.vectorToWorldFrame(De,Fe.ri,Fe.ri),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}}}for(var Rt=ee,Lt=$,ht=V,Yt=b,Xe=0,tt=ce.length;Xe!==tt;Xe++){fe.getTriangleVertices(ce[Xe],Rt,Lt,ht),fe.getNormal(ce[Xe],Yt),le.vsub(Rt,ae);var ct=ae.dot(Yt);if(Yt.scale(ct,ae),le.vsub(ae,ae),ct=ae.distanceTo(le),o.pointInTriangle(ae,Rt,Lt,ht)&&ct<oe.radius){var Fe=this.createContactEquation(Te,S,oe,fe);ae.vsub(le,Fe.ni),Fe.ni.normalize(),Fe.ni.scale(oe.radius,Fe.ri),c.pointToWorldFrame(we,De,ae,ae),ae.vsub(S.position,Fe.rj),c.vectorToWorldFrame(De,Fe.ni,Fe.ni),c.vectorToWorldFrame(De,Fe.ri,Fe.ri),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}}ce.length=0};var T=new a,C=new a;g.prototype[r.types.SPHERE|r.types.PLANE]=g.prototype.spherePlane=function(oe,fe,Me,we,qe,De,Te,S){var R=this.createContactEquation(Te,S,oe,fe);if(R.ni.set(0,0,1),De.vmult(R.ni,R.ni),R.ni.negate(R.ni),R.ni.normalize(),R.ni.mult(oe.radius,R.ri),Me.vsub(we,T),R.ni.mult(R.ni.dot(T),C),T.vsub(C,R.rj),-T.dot(R.ni)<=oe.radius){var j=R.ri,z=R.rj;j.vadd(Me,j),j.vsub(Te.position,j),z.vadd(we,z),z.vsub(S.position,z),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}};var G=new a,F=new a,te=new a;function Y(oe,fe,Me){for(var we=null,qe=oe.length,De=0;De!==qe;De++){var Te=oe[De],S=G;oe[(De+1)%qe].vsub(Te,S);var R=F;S.cross(fe,R);var j=te;Me.vsub(Te,j);var z=R.dot(j);if(we===null||z>0&&we===!0||z<=0&&we===!1){we===null&&(we=z>0);continue}else return!1}return!0}var Z=new a,se=new a,Ee=new a,pe=new a,ye=[new a,new a,new a,new a,new a,new a],he=new a,ve=new a,Ge=new a,Ue=new a;g.prototype[r.types.SPHERE|r.types.BOX]=g.prototype.sphereBox=function(oe,fe,Me,we,qe,De,Te,S){var R=this.v3pool,j=ye;Me.vsub(we,Z),fe.getSideNormals(j,De);for(var z=oe.radius,Q=!1,le=ve,ae=Ge,ge=Ue,Se=null,Le=0,ce=0,Ie=0,ze=null,it=0,Xe=j.length;it!==Xe&&Q===!1;it++){var Ze=se;Ze.copy(j[it]);var Fe=Ze.norm();Ze.normalize();var $e=Z.dot(Ze);if($e<Fe+z&&$e>0){var Nt=Ee,ct=pe;Nt.copy(j[(it+1)%3]),ct.copy(j[(it+2)%3]);var Rt=Nt.norm(),Lt=ct.norm();Nt.normalize(),ct.normalize();var ht=Z.dot(Nt),Yt=Z.dot(ct);if(ht<Rt&&ht>-Rt&&Yt<Lt&&Yt>-Lt){var Et=Math.abs($e-Fe-z);(ze===null||Et<ze)&&(ze=Et,ce=ht,Ie=Yt,Se=Fe,le.copy(Ze),ae.copy(Nt),ge.copy(ct),Le++)}}}if(Le){Q=!0;var Ke=this.createContactEquation(Te,S,oe,fe);le.mult(-z,Ke.ri),Ke.ni.copy(le),Ke.ni.negate(Ke.ni),le.mult(Se,le),ae.mult(ce,ae),le.vadd(ae,le),ge.mult(Ie,ge),le.vadd(ge,Ke.rj),Ke.ri.vadd(Me,Ke.ri),Ke.ri.vsub(Te.position,Ke.ri),Ke.rj.vadd(we,Ke.rj),Ke.rj.vsub(S.position,Ke.rj),this.result.push(Ke),this.createFrictionEquationsFromContact(Ke,this.frictionResult)}for(var tt=R.get(),Pt=he,At=0;At!==2&&!Q;At++)for(var ft=0;ft!==2&&!Q;ft++)for(var Mt=0;Mt!==2&&!Q;Mt++)if(tt.set(0,0,0),At?tt.vadd(j[0],tt):tt.vsub(j[0],tt),ft?tt.vadd(j[1],tt):tt.vsub(j[1],tt),Mt?tt.vadd(j[2],tt):tt.vsub(j[2],tt),we.vadd(tt,Pt),Pt.vsub(Me,Pt),Pt.norm2()<z*z){Q=!0;var Ke=this.createContactEquation(Te,S,oe,fe);Ke.ri.copy(Pt),Ke.ri.normalize(),Ke.ni.copy(Ke.ri),Ke.ri.mult(z,Ke.ri),Ke.rj.copy(tt),Ke.ri.vadd(Me,Ke.ri),Ke.ri.vsub(Te.position,Ke.ri),Ke.rj.vadd(we,Ke.rj),Ke.rj.vsub(S.position,Ke.rj),this.result.push(Ke),this.createFrictionEquationsFromContact(Ke,this.frictionResult)}R.release(tt),tt=null;for(var Wt=R.get(),en=R.get(),Ke=R.get(),$t=R.get(),Et=R.get(),Wn=j.length,At=0;At!==Wn&&!Q;At++)for(var ft=0;ft!==Wn&&!Q;ft++)if(At%3!==ft%3){j[ft].cross(j[At],Wt),Wt.normalize(),j[At].vadd(j[ft],en),Ke.copy(Me),Ke.vsub(en,Ke),Ke.vsub(we,Ke);var qn=Ke.dot(Wt);Wt.mult(qn,$t);for(var Mt=0;Mt===At%3||Mt===ft%3;)Mt++;Et.copy(Me),Et.vsub($t,Et),Et.vsub(en,Et),Et.vsub(we,Et);var dc=Math.abs(qn),fc=Et.norm();if(dc<j[Mt].norm()&&fc<z){Q=!0;var vt=this.createContactEquation(Te,S,oe,fe);en.vadd($t,vt.rj),vt.rj.copy(vt.rj),Et.negate(vt.ni),vt.ni.normalize(),vt.ri.copy(vt.rj),vt.ri.vadd(we,vt.ri),vt.ri.vsub(Me,vt.ri),vt.ri.normalize(),vt.ri.mult(z,vt.ri),vt.ri.vadd(Me,vt.ri),vt.ri.vsub(Te.position,vt.ri),vt.rj.vadd(we,vt.rj),vt.rj.vsub(S.position,vt.rj),this.result.push(vt),this.createFrictionEquationsFromContact(vt,this.frictionResult)}}R.release(Wt,en,Ke,$t,Et)};var He=new a,Ae=new a,je=new a,D=new a,A=new a,ne=new a,de=new a,xe=new a,_e=new a,W=new a;g.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=g.prototype.sphereConvex=function(oe,fe,Me,we,qe,De,Te,S){var R=this.v3pool;Me.vsub(we,He);for(var j=fe.faceNormals,z=fe.faces,Q=fe.vertices,le=oe.radius,ae=0;ae!==Q.length;ae++){var ge=Q[ae],Se=A;De.vmult(ge,Se),we.vadd(Se,Se);var Le=D;if(Se.vsub(Me,Le),Le.norm2()<le*le){Ie=!0;var ce=this.createContactEquation(Te,S,oe,fe);ce.ri.copy(Le),ce.ri.normalize(),ce.ni.copy(ce.ri),ce.ri.mult(le,ce.ri),Se.vsub(we,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Te.position,ce.ri),ce.rj.vadd(we,ce.rj),ce.rj.vsub(S.position,ce.rj),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);return}}for(var Ie=!1,ae=0,ze=z.length;ae!==ze&&Ie===!1;ae++){var it=j[ae],Xe=z[ae],Ze=ne;De.vmult(it,Ze);var Fe=de;De.vmult(Q[Xe[0]],Fe),Fe.vadd(we,Fe);var $e=xe;Ze.mult(-le,$e),Me.vadd($e,$e);var Nt=_e;$e.vsub(Fe,Nt);var ct=Nt.dot(Ze),Rt=W;if(Me.vsub(Fe,Rt),ct<0&&Rt.dot(Ze)>0){for(var Lt=[],ht=0,Yt=Xe.length;ht!==Yt;ht++){var tt=R.get();De.vmult(Q[Xe[ht]],tt),we.vadd(tt,tt),Lt.push(tt)}if(Y(Lt,Ze,Me)){Ie=!0;var ce=this.createContactEquation(Te,S,oe,fe);Ze.mult(-le,ce.ri),Ze.negate(ce.ni);var Pt=R.get();Ze.mult(-ct,Pt);var At=R.get();Ze.mult(-le,At),Me.vsub(we,ce.rj),ce.rj.vadd(At,ce.rj),ce.rj.vadd(Pt,ce.rj),ce.rj.vadd(we,ce.rj),ce.rj.vsub(S.position,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Te.position,ce.ri),R.release(Pt),R.release(At),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(var ht=0,ft=Lt.length;ht!==ft;ht++)R.release(Lt[ht]);return}else for(var ht=0;ht!==Xe.length;ht++){var Mt=R.get(),Wt=R.get();De.vmult(Q[Xe[(ht+1)%Xe.length]],Mt),De.vmult(Q[Xe[(ht+2)%Xe.length]],Wt),we.vadd(Mt,Mt),we.vadd(Wt,Wt);var en=Ae;Wt.vsub(Mt,en);var Ke=je;en.unit(Ke);var $t=R.get(),Et=R.get();Me.vsub(Mt,Et);var Wn=Et.dot(Ke);Ke.mult(Wn,$t),$t.vadd(Mt,$t);var qn=R.get();if($t.vsub(Me,qn),Wn>0&&Wn*Wn<en.norm2()&&qn.norm2()<le*le){var ce=this.createContactEquation(Te,S,oe,fe);$t.vsub(we,ce.rj),$t.vsub(Me,ce.ni),ce.ni.normalize(),ce.ni.mult(le,ce.ri),ce.rj.vadd(we,ce.rj),ce.rj.vsub(S.position,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Te.position,ce.ri),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(var ht=0,ft=Lt.length;ht!==ft;ht++)R.release(Lt[ht]);R.release(Mt),R.release(Wt),R.release($t),R.release(qn),R.release(Et);return}R.release(Mt),R.release(Wt),R.release($t),R.release(qn),R.release(Et)}for(var ht=0,ft=Lt.length;ht!==ft;ht++)R.release(Lt[ht])}}},new a,new a,g.prototype[r.types.PLANE|r.types.BOX]=g.prototype.planeBox=function(oe,fe,Me,we,qe,De,Te,S){fe.convexPolyhedronRepresentation.material=fe.material,fe.convexPolyhedronRepresentation.collisionResponse=fe.collisionResponse,this.planeConvex(oe,fe.convexPolyhedronRepresentation,Me,we,qe,De,Te,S)};var me=new a,re=new a,Re=new a,Be=new a;g.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=g.prototype.planeConvex=function(oe,fe,Me,we,qe,De,Te,S){var R=me,j=re;j.set(0,0,1),qe.vmult(j,j);for(var z=0,Q=Re,le=0;le!==fe.vertices.length;le++){R.copy(fe.vertices[le]),De.vmult(R,R),we.vadd(R,R),R.vsub(Me,Q);var ae=j.dot(Q);if(ae<=0){var ge=this.createContactEquation(Te,S,oe,fe),Se=Be;j.mult(j.dot(Q),Se),R.vsub(Se,Se),Se.vsub(Me,ge.ri),ge.ni.copy(j),R.vsub(we,ge.rj),ge.ri.vadd(Me,ge.ri),ge.ri.vsub(Te.position,ge.ri),ge.rj.vadd(we,ge.rj),ge.rj.vsub(S.position,ge.rj),this.result.push(ge),z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ge,this.frictionResult)}}this.enableFrictionReduction&&z&&this.createFrictionFromAverage(z)};var Oe=new a,Pe=new a;g.prototype[r.types.CONVEXPOLYHEDRON]=g.prototype.convexConvex=function(oe,fe,Me,we,qe,De,Te,S,R,j,z,Q){var le=Oe;if(!(Me.distanceTo(we)>oe.boundingSphereRadius+fe.boundingSphereRadius)&&oe.findSeparatingAxis(fe,Me,qe,we,De,le,z,Q)){var ae=[],ge=Pe;oe.clipAgainstHull(Me,qe,fe,we,De,le,-100,100,ae);for(var Se=0,Le=0;Le!==ae.length;Le++){var ce=this.createContactEquation(Te,S,oe,fe,R,j),Ie=ce.ri,ze=ce.rj;le.negate(ce.ni),ae[Le].normal.negate(ge),ge.mult(ae[Le].depth,ge),ae[Le].point.vadd(ge,Ie),ze.copy(ae[Le].point),Ie.vsub(Me,Ie),ze.vsub(we,ze),Ie.vadd(Me,Ie),Ie.vsub(Te.position,Ie),ze.vadd(we,ze),ze.vsub(S.position,ze),this.result.push(ce),Se++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ce,this.frictionResult)}this.enableFrictionReduction&&Se&&this.createFrictionFromAverage(Se)}};var Ve=new a,We=new a,Ye=new a;g.prototype[r.types.PLANE|r.types.PARTICLE]=g.prototype.planeParticle=function(oe,fe,Me,we,qe,De,Te,S){var R=Ve;R.set(0,0,1),Te.quaternion.vmult(R,R);var j=We;we.vsub(Te.position,j);var z=R.dot(j);if(z<=0){var Q=this.createContactEquation(S,Te,fe,oe);Q.ni.copy(R),Q.ni.negate(Q.ni),Q.ri.set(0,0,0);var le=Ye;R.mult(R.dot(we),le),we.vsub(le,le),Q.rj.copy(le),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}};var at=new a;g.prototype[r.types.PARTICLE|r.types.SPHERE]=g.prototype.sphereParticle=function(oe,fe,Me,we,qe,De,Te,S){var R=at;R.set(0,0,1),we.vsub(Me,R);var j=R.norm2();if(j<=oe.radius*oe.radius){var z=this.createContactEquation(S,Te,fe,oe);R.normalize(),z.rj.copy(R),z.rj.mult(oe.radius,z.rj),z.ni.copy(R),z.ni.negate(z.ni),z.ri.set(0,0,0),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}};var K=new h,ue=new a;new a;var be=new a,Ce=new a,ke=new a;g.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=g.prototype.convexParticle=function(oe,fe,Me,we,qe,De,Te,S){var R=-1,j=be,z=ke,Q=null,le=ue;if(le.copy(we),le.vsub(Me,le),qe.conjugate(K),K.vmult(le,le),oe.pointIsInside(le)){oe.worldVerticesNeedsUpdate&&oe.computeWorldVertices(Me,qe),oe.worldFaceNormalsNeedsUpdate&&oe.computeWorldFaceNormals(qe);for(var ae=0,ge=oe.faces.length;ae!==ge;ae++){var Se=[oe.worldVertices[oe.faces[ae][0]]],Le=oe.worldFaceNormals[ae];we.vsub(Se[0],Ce);var ce=-Le.dot(Ce);(Q===null||Math.abs(ce)<Math.abs(Q))&&(Q=ce,R=ae,j.copy(Le))}if(R!==-1){var Ie=this.createContactEquation(S,Te,fe,oe);j.mult(Q,z),z.vadd(we,z),z.vsub(Me,z),Ie.rj.copy(z),j.negate(Ie.ni),Ie.ri.set(0,0,0);var ze=Ie.ri,it=Ie.rj;ze.vadd(we,ze),ze.vsub(S.position,ze),it.vadd(Me,it),it.vsub(Te.position,it),this.result.push(Ie),this.createFrictionEquationsFromContact(Ie,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},g.prototype[r.types.BOX|r.types.HEIGHTFIELD]=g.prototype.boxHeightfield=function(oe,fe,Me,we,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexHeightfield(oe.convexPolyhedronRepresentation,fe,Me,we,qe,De,Te,S)};var lt=new a,ut=new a,yt=[0];g.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=g.prototype.convexHeightfield=function(oe,fe,Me,we,qe,De,Te,S){var R=fe.data,j=fe.elementSize,z=oe.boundingSphereRadius,Q=ut,le=yt,ae=lt;c.pointToLocalFrame(we,De,Me,ae);var ge=Math.floor((ae.x-z)/j)-1,Se=Math.ceil((ae.x+z)/j)+1,Le=Math.floor((ae.y-z)/j)-1,ce=Math.ceil((ae.y+z)/j)+1;if(!(Se<0||ce<0||ge>R.length||Le>R[0].length)){ge<0&&(ge=0),Se<0&&(Se=0),Le<0&&(Le=0),ce<0&&(ce=0),ge>=R.length&&(ge=R.length-1),Se>=R.length&&(Se=R.length-1),ce>=R[0].length&&(ce=R[0].length-1),Le>=R[0].length&&(Le=R[0].length-1);var Ie=[];fe.getRectMinMax(ge,Le,Se,ce,Ie);var ze=Ie[0],it=Ie[1];if(!(ae.z-z>it||ae.z+z<ze))for(var Xe=ge;Xe<Se;Xe++)for(var Ze=Le;Ze<ce;Ze++)fe.getConvexTrianglePillar(Xe,Ze,!1),c.pointToWorldFrame(we,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.convexConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S,null,null,le,null),fe.getConvexTrianglePillar(Xe,Ze,!0),c.pointToWorldFrame(we,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.convexConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S,null,null,le,null)}};var zt=new a,et=new a;g.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=g.prototype.sphereHeightfield=function(oe,fe,Me,we,qe,De,Te,S){var R=fe.data,j=oe.radius,z=fe.elementSize,Q=et,le=zt;c.pointToLocalFrame(we,De,Me,le);var ae=Math.floor((le.x-j)/z)-1,ge=Math.ceil((le.x+j)/z)+1,Se=Math.floor((le.y-j)/z)-1,Le=Math.ceil((le.y+j)/z)+1;if(!(ge<0||Le<0||ae>R.length||Le>R[0].length)){ae<0&&(ae=0),ge<0&&(ge=0),Se<0&&(Se=0),Le<0&&(Le=0),ae>=R.length&&(ae=R.length-1),ge>=R.length&&(ge=R.length-1),Le>=R[0].length&&(Le=R[0].length-1),Se>=R[0].length&&(Se=R[0].length-1);var ce=[];fe.getRectMinMax(ae,Se,ge,Le,ce);var Ie=ce[0],ze=ce[1];if(!(le.z-j>ze||le.z+j<Ie))for(var it=this.result,Xe=ae;Xe<ge;Xe++)for(var Ze=Se;Ze<Le;Ze++){var Fe=it.length;fe.getConvexTrianglePillar(Xe,Ze,!1),c.pointToWorldFrame(we,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.sphereConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S),fe.getConvexTrianglePillar(Xe,Ze,!0),c.pointToWorldFrame(we,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.sphereConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S);var $e=it.length-Fe;if($e>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=x;var s=t("../shapes/Shape"),r=t("../math/Vec3"),o=t("../math/Quaternion"),a=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var c=t("./Narrowphase"),h=t("../utils/EventTarget"),l=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),p=t("../material/ContactMaterial"),g=t("../objects/Body"),v=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),f=t("../collision/AABB"),y=t("../collision/Ray"),_=t("../collision/NaiveBroadphase");function x(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new _,this.bodies=[],this.solver=new a,this.constraints=[],this.narrowphase=new c(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new v,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new h,new f;var M=new y;if(x.prototype.getContactMaterial=function(B,ee){return this.contactMaterialTable.get(B.id,ee.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var B=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=B,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(B){this.bodies.indexOf(B)===-1&&(B.index=this.bodies.length,this.bodies.push(B),B.world=this,B.initPosition.copy(B.position),B.initVelocity.copy(B.velocity),B.timeLastSleepy=this.time,B instanceof g&&(B.initAngularVelocity.copy(B.angularVelocity),B.initQuaternion.copy(B.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=B,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(B){this.constraints.push(B)},x.prototype.removeConstraint=function(B){var ee=this.constraints.indexOf(B);ee!==-1&&this.constraints.splice(ee,1)},x.prototype.rayTest=function(B,ee,$){$ instanceof m?this.raycastClosest(B,ee,{skipBackfaces:!0},$):this.raycastAll(B,ee,{skipBackfaces:!0},$)},x.prototype.raycastAll=function(B,ee,$,V){return $.mode=y.ALL,$.from=B,$.to=ee,$.callback=V,M.intersectWorld(this,$)},x.prototype.raycastAny=function(B,ee,$,V){return $.mode=y.ANY,$.from=B,$.to=ee,$.result=V,M.intersectWorld(this,$)},x.prototype.raycastClosest=function(B,ee,$,V){return $.mode=y.CLOSEST,$.from=B,$.to=ee,$.result=V,M.intersectWorld(this,$)},x.prototype.remove=function(B){B.world=null;var ee=this.bodies.length-1,$=this.bodies,V=$.indexOf(B);if(V!==-1){$.splice(V,1);for(var q=0;q!==$.length;q++)$[q].index=q;this.collisionMatrix.setNumObjects(ee),this.removeBodyEvent.body=B,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(B){this.materials.push(B)},x.prototype.addContactMaterial=function(B){this.contactmaterials.push(B),this.contactMaterialTable.set(B.materials[0].id,B.materials[1].id,B)},typeof performance>"u"&&(performance={}),!performance.now){var L=Date.now();performance.timing&&performance.timing.navigationStart&&(L=performance.timing.navigationStart),performance.now=function(){return Date.now()-L}}var O=new r;x.prototype.step=function(B,ee,$){if($=$||10,ee=ee||0,ee===0)this.internalStep(B),this.time+=B;else{var V=Math.floor((this.time+ee)/B)-Math.floor(this.time/B);V=Math.min(V,$);for(var q=performance.now(),E=0;E!==V&&(this.internalStep(B),!(performance.now()-q>B*1e3));E++);this.time+=ee;for(var T=this.time%B,C=T/B,G=O,F=this.bodies,te=0;te!==F.length;te++){var Y=F[te];Y.type!==g.STATIC&&Y.sleepState!==g.SLEEPING?(Y.position.vsub(Y.previousPosition,G),G.scale(C,G),Y.position.vadd(G,Y.interpolatedPosition)):(Y.interpolatedPosition.copy(Y.position),Y.interpolatedQuaternion.copy(Y.quaternion))}}};var I={type:"postStep"},b={type:"preStep"},w={type:"collide",body:null,contact:null},N=[],U=[],P=[],k=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new o;var X=new o,ie=new o,H=new r;x.prototype.internalStep=function(B){this.dt=B;var ee=this.contacts,$=P,V=k,q=this.numObjects(),E=this.bodies,T=this.solver,C=this.gravity,G=this.doProfiling,F=this.profile,te=g.DYNAMIC,Y,Z=this.constraints,se=U;C.norm();var Ee=C.x,pe=C.y,ye=C.z,he=0;for(G&&(Y=performance.now()),he=0;he!==q;he++){var ve=E[he];if(ve.type&te){var Ge=ve.force,Ue=ve.mass;Ge.x+=Ue*Ee,Ge.y+=Ue*pe,Ge.z+=Ue*ye}}for(var he=0,He=this.subsystems.length;he!==He;he++)this.subsystems[he].update();G&&(Y=performance.now()),$.length=0,V.length=0,this.broadphase.collisionPairs(this,$,V),G&&(F.broadphase=performance.now()-Y);var Oe=Z.length;for(he=0;he!==Oe;he++){var Ae=Z[he];if(!Ae.collideConnected)for(var je=$.length-1;je>=0;je-=1)(Ae.bodyA===$[je]&&Ae.bodyB===V[je]||Ae.bodyB===$[je]&&Ae.bodyA===V[je])&&($.splice(je,1),V.splice(je,1))}this.collisionMatrixTick(),G&&(Y=performance.now());var D=N,A=ee.length;for(he=0;he!==A;he++)D.push(ee[he]);ee.length=0;var ne=this.frictionEquations.length;for(he=0;he!==ne;he++)se.push(this.frictionEquations[he]);this.frictionEquations.length=0,this.narrowphase.getContacts($,V,this,ee,D,this.frictionEquations,se),G&&(F.narrowphase=performance.now()-Y),G&&(Y=performance.now());for(var he=0;he<this.frictionEquations.length;he++)T.addEquation(this.frictionEquations[he]);for(var de=ee.length,xe=0;xe!==de;xe++){var Ae=ee[xe],ve=Ae.bi,_e=Ae.bj;Ae.si,Ae.sj;var W;if(ve.material&&_e.material?W=this.getContactMaterial(ve.material,_e.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,ve.material&&_e.material&&(ve.material.friction>=0&&_e.material.friction>=0&&ve.material.friction*_e.material.friction,ve.material.restitution>=0&&_e.material.restitution>=0&&(Ae.restitution=ve.material.restitution*_e.material.restitution)),T.addEquation(Ae),ve.allowSleep&&ve.type===g.DYNAMIC&&ve.sleepState===g.SLEEPING&&_e.sleepState===g.AWAKE&&_e.type!==g.STATIC){var me=_e.velocity.norm2()+_e.angularVelocity.norm2(),re=Math.pow(_e.sleepSpeedLimit,2);me>=re*2&&(ve._wakeUpAfterNarrowphase=!0)}if(_e.allowSleep&&_e.type===g.DYNAMIC&&_e.sleepState===g.SLEEPING&&ve.sleepState===g.AWAKE&&ve.type!==g.STATIC){var Re=ve.velocity.norm2()+ve.angularVelocity.norm2(),Be=Math.pow(ve.sleepSpeedLimit,2);Re>=Be*2&&(_e._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ve,_e,!0),this.collisionMatrixPrevious.get(ve,_e)||(w.body=_e,w.contact=Ae,ve.dispatchEvent(w),w.body=ve,_e.dispatchEvent(w))}for(G&&(F.makeContactConstraints=performance.now()-Y,Y=performance.now()),he=0;he!==q;he++){var ve=E[he];ve._wakeUpAfterNarrowphase&&(ve.wakeUp(),ve._wakeUpAfterNarrowphase=!1)}var Oe=Z.length;for(he=0;he!==Oe;he++){var Ae=Z[he];Ae.update();for(var je=0,Pe=Ae.equations.length;je!==Pe;je++){var Ve=Ae.equations[je];T.addEquation(Ve)}}T.solve(B,this),G&&(F.solve=performance.now()-Y),T.removeAllEquations();var We=Math.pow;for(he=0;he!==q;he++){var ve=E[he];if(ve.type&te){var Ye=We(1-ve.linearDamping,B),at=ve.velocity;at.mult(Ye,at);var K=ve.angularVelocity;if(K){var ue=We(1-ve.angularDamping,B);K.mult(ue,K)}}}for(this.dispatchEvent(b),he=0;he!==q;he++){var ve=E[he];ve.preStep&&ve.preStep.call(ve)}G&&(Y=performance.now());var be=X,Ce=ie,ke=this.stepnumber,lt=g.DYNAMIC|g.KINEMATIC,ut=ke%(this.quatNormalizeSkip+1)===0,yt=this.quatNormalizeFast,zt=B*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,he=0;he!==q;he++){var et=E[he],oe=et.force,fe=et.torque;if(et.type&lt&&et.sleepState!==g.SLEEPING){var Me=et.velocity,we=et.angularVelocity,qe=et.position,De=et.quaternion,Te=et.invMass,S=et.invInertiaWorld;Me.x+=oe.x*Te*B,Me.y+=oe.y*Te*B,Me.z+=oe.z*Te*B,et.angularVelocity&&(S.vmult(fe,H),H.mult(B,H),H.vadd(we,we)),qe.x+=Me.x*B,qe.y+=Me.y*B,qe.z+=Me.z*B,et.angularVelocity&&(be.set(we.x,we.y,we.z,0),be.mult(De,Ce),De.x+=zt*Ce.x,De.y+=zt*Ce.y,De.z+=zt*Ce.z,De.w+=zt*Ce.w,ut&&(yt?De.normalizeFast():De.normalize())),et.aabb&&(et.aabbNeedsUpdate=!0),et.updateInertiaWorld&&et.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(F.integrate=performance.now()-Y),this.time+=B,this.stepnumber+=1,this.dispatchEvent(I),he=0;he!==q;he++){var ve=E[he],R=ve.postStep;R&&R.call(ve)}if(this.allowSleep)for(he=0;he!==q;he++)E[he].sleepTick(this.time)},x.prototype.clearForces=function(){for(var B=this.bodies,ee=B.length,$=0;$!==ee;$++){var V=B[$];V.force,V.torque,V.force.set(0,0,0),V.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(sc);var sn=sc.exports;class ov{constructor(e){Kt(this,"physicsBody");Kt(this,"visualObject");Kt(this,"isCurrentlyHeld");Kt(this,"holdingParent");Kt(this,"frameRecordingAmount",10);Kt(this,"throwStrengthMultiplier",1);Kt(this,"frameCounter",0);Kt(this,"recordedDeltaTimes");Kt(this,"recordedPositions");const t=new sn.Box(new sn.Vec3(.1,.1,.1));this.physicsBody=new sn.Body({mass:1,position:e}),this.physicsBody.addShape(t),this.visualObject=new Ot(new ji(.2,.2,.2),new vn({color:16711680,wireframe:!0})),this.isCurrentlyHeld=!1,this.recordedDeltaTimes=new Array(this.frameRecordingAmount),this.recordedPositions=new Array(this.frameRecordingAmount),this.recordedDeltaTimes.fill(0),this.recordedPositions.fill(void 0)}update(e){this.isCurrentlyHeld&&(this.physicsBody.position.copy(this.holdingParent.position),this.physicsBody.quaternion.copy(this.holdingParent.quaternion),this.recordedDeltaTimes[this.frameCounter]=e,this.recordedPositions[this.frameCounter]=this.visualObject.position,this.frameCounter=(this.frameCounter+1)%this.frameRecordingAmount),this.visualObject.position.copy(this.physicsBody.position),this.visualObject.quaternion.copy(this.physicsBody.quaternion)}distanceTo(e){return this.visualObject.position.distanceTo(e)}pickUp(e){console.log("pick up"),this.isCurrentlyHeld=!0,this.holdingParent=e,this.physicsBody.type=sn.Body.KINEMATIC}release(){console.log("release"),this.isCurrentlyHeld=!1,this.holdingParent=void 0,this.physicsBody.type=sn.Body.DYNAMIC;let e=0,t=new J(0,0,0);for(let n=1;n<this.frameRecordingAmount;n++){if(this.recordedPositions[n]==null||this.recordedPositions[n-1]==null)continue;let i=new J(0,0,0);i.subVectors(this.recordedPositions[n-1],this.recordedPositions[n]),i=i.divideScalar(this.recordedDeltaTimes[n]),t=t.add(i),e++}e>0&&(t=t.divideScalar(e)),this.physicsBody.velocity.copy(t.multiplyScalar(this.throwStrengthMultiplier)),this.recordedDeltaTimes.fill(0),this.recordedPositions.fill(void 0)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id=`lil-gui-name-${++yn.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class av extends yn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function eo(u){let e,t;return(e=u.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=u.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=u.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const lv={isPrimitive:!0,match:u=>typeof u=="string",fromHexString:eo,toHexString:eo},gs={isPrimitive:!0,match:u=>typeof u=="number",fromHexString:u=>parseInt(u.substring(1),16),toHexString:u=>"#"+u.toString(16).padStart(6,0)},cv={isPrimitive:!1,match:u=>Array.isArray(u),fromHexString(u,e,t=1){const n=gs.fromHexString(u);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([u,e,t],n=1){n=255/n;const i=u*n<<16^e*n<<8^t*n<<0;return gs.toHexString(i)}},hv={isPrimitive:!1,match:u=>Object(u)===u,fromHexString(u,e,t=1){const n=gs.fromHexString(u);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:u,g:e,b:t},n=1){n=255/n;const i=u*n<<16^e*n<<8^t*n<<0;return gs.toHexString(i)}},uv=[lv,gs,cv,hv];function dv(u){return uv.find(e=>e.match(u))}class fv extends yn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=dv(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=eo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class zr extends yn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class pv extends yn{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let r=!1,o,a,c,h,l;const d=5,p=y=>{o=y.clientX,a=c=y.clientY,r=!0,h=this.getValue(),l=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=y=>{if(r){const _=y.clientX-o,x=y.clientY-a;Math.abs(x)>d?(y.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&v()}if(!r){const _=y.clientY-c;l-=_*this._step*this._arrowKeyMultiplier(y),h+l>this._max?l=this._max-h:h+l<this._min&&(l=this._min-h),this._snapClampSetValue(h+l)}c=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,y,_,x,M)=>(f-y)/(_-y)*(M-x)+x,t=f=>{const y=this.$slider.getBoundingClientRect();let _=e(f,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,o,a;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),r=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,a=f.touches[0].clientY,r=!0):c(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d))},l=f=>{if(r){const y=f.touches[0].clientX-o,_=f.touches[0].clientY-a;Math.abs(y)>Math.abs(_)?c(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let v;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const _=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class mv extends yn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class gv extends yn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const vv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function xv(u){const e=document.createElement("style");e.innerHTML=u;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let hl=!1;class xo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:r=!1,injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),a&&this.domElement.classList.add("allow-touch-styles"),!hl&&o&&(xv(vv),hl=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=r}add(e,t,n,i,s){if(Object(n)===n)return new mv(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new pv(this,e,t,n,i,s);case"boolean":return new av(this,e,t);case"string":return new gv(this,e,t);case"function":return new zr(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new fv(this,e,t,n)}addFolder(e){const t=new xo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof zr||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof zr)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const yv=xo,rc=new yv,_v=.2;var Jn;let _s=[],$s,Ks,oc={interactableFrameRecordingAmount:15,throwStrengthMultiplier:1};rc.add(oc,"interactableFrameRecordingAmount").name("Frames for calculating Throwspeed").onChange(u=>_s.forEach(e=>{e.interactableFrameRecordingAmount=u}));rc.add(oc,"throwStrengthMultiplier").name("Throw Strength").onChange(u=>_s.forEach(e=>{e.throwStrengthMultiplier=u}));function Mv(){Jn=new sn.World,Jn.gravity.set(0,-1,0),Jn.broadphase=new sn.NaiveBroadphase,Jn.solver.iterations=10;var u=new sn.Plane,e=new sn.Body({mass:0,position:new sn.Vec3(0,1.5,0)});e.addShape(u),e.quaternion.setFromAxisAngle(new sn.Vec3(1,0,0),-Math.PI/2),Jn.addBody(e);let t=new vn({color:16711680,wireframe:!0}),n=new nr(10,10),i=new Ot(n,t);Ln.add(i),i.position.copy(e.position),i.quaternion.copy(e.quaternion),Av()}function bv(){$s=ul(ci[ci.length-1].jointObject.position),ul(vs[vs.length-1].jointObject.position)}function wv(u){switch(u){case 0:if($s==null)return;$s.pickUp(ci[ci.length-1].jointObject),Ks=$s;break}}function Sv(u){switch(u){case 0:if(Ks==null)return;Ks.release(),Ks=void 0;break}}function ul(u){let e,t=_v;return _s.forEach(n=>{let i=n.distanceTo(u);i<t&&(e=n,t=i)}),e}function Av(){const u=new ov(new sn.Vec3(0,3,.2));_s.push(u),Jn.add(u.physicsBody),Ln.add(u.visualObject)}function Ev(u){Jn.step(u),_s.forEach(e=>{e.update(u)})}let Ln,ni,Ut,ac,to,dl=0,Zs,Js,Vr=.2,ci=[],vs=[];const Tv=[.9,.85,0];let lc=new J(.12,-.15,.05),cc=new J(-.12,-.15,.05),hc=new J(0,0,0),uc=new J(0,0,0);Cv();function Cv(){Ln=new Rm,ni=new Ht(75,window.innerWidth/window.innerHeight,.1,1e3),ni.position.z=1,Ut=new ql({antialias:!0}),Ut.xr.enabled=!0,Ut.setPixelRatio(window.devicePixelRatio),Ut.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",Lv),Ut.outputEncoding=dt,document.body.appendChild(Ut.domElement),document.body.appendChild(Xi.createButton(Ut)),to=Dv();const u=new ig(6316128,2);Ln.add(u);const e=new Ql(4210752,2,50);e.position.setZ(3),Ln.add(e);const t=new pg(10,10);Ln.add(t),ac=new mg(ni,Ut.domElement),Mv();const n=new ec;n.load("armL.glb",i=>{Js=i.scene,Js.scale.set(1,1,1),Js.position.set(0,0,0),n.load("armR.glb",s=>{Zs=s.scene,Zs.scale.set(1,1,1),Zs.position.set(0,0,0),Rv()})})}function Rv(){ml(Zs,ci),ml(Js,vs);let u=document.getElementById("arm_scale");pl(u.value),u.addEventListener("change",t=>pl(t.target.value));let e=document.getElementById("shoulder_offset");fl(e.value),e.addEventListener("change",t=>fl(t.target.value)),Ut.setAnimationLoop(Pv)}function fl(u){u=parseFloat(u),cc.x=-u,lc.x=u}function pl(u){u=parseFloat(u);for(let e=0;e<3;e++)ci[e].jointObject.scale.set(u,u,u),vs[e].jointObject.scale.set(u,u,u)}function Lv(){const u=window.innerWidth,e=window.innerHeight,t=u/e;Ut.setSize(u,e),ni.aspect=t,ni.updateProjectionMatrix()}function Pv(u){Iv(),gl(ci,hc,to[0]),gl(vs,uc,to[1]),u*=.001;let e=u-dl;dl=u,ac.enabled=!Ut.xr.isPresenting,bv(),Ev(e),Ut.render(Ln,ni)}function Iv(){let u;Ut.xr.isPresenting?u=Ut.xr.getCamera().cameras[0].position:u=ni.position,hc.addVectors(u,lc),uc.addVectors(u,cc)}function ml(u,e){for(let t=0;t<3;t++){u.children[0].scale.set(Vr,Vr,Vr);let n=new rv(Tv[t],u.children[0]);e.push(n),Ln.add(n.jointObject)}}function gl(u,e,t){const n=t.position,i=t.rotation;u[u.length-1].setPosition(t.position.x,n.y,n.z),u[u.length-1].jointObject.rotation.set(i.x,i.y,i.z);for(let r=u.length-2;r>=0;r--){u[r].lookAt(u[r+1].getPosition());const o=u[r+1].getPosition();u[r].setEndPosition(o.x,o.y,o.z)}let s=new J;s.subVectors(u[0].getPosition(),e);for(let r=0;r<u.length;r++){let o=new J;o.subVectors(u[r].getPosition(),s),u[r].setPosition(o.x,o.y,o.z)}}function Dv(){const u=new sv,e=[];for(let t=0;t<2;t++){const n=Ut.xr.getController(t);n.userData.selectPressed=!1,n.userData.selectPressedPrev=!1,Ln.add(n),e.push(n),n.addEventListener("selectstart",()=>wv(t)),n.addEventListener("selectend",()=>Sv(t));const i=Ut.xr.getControllerGrip(t);i.add(u.createControllerModel(i))}return e}
