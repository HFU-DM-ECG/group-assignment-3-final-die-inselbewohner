var cc=Object.defineProperty;var hc=(u,e,t)=>e in u?cc(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var _t=(u,e,t)=>(hc(u,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="151",pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uc=0,_o=1,dc=2,pl=1,fc=2,as=3,Dn=0,$t=1,fn=2,Xn=0,Fi=1,Mo=2,wo=3,bo=4,pc=5,Ni=100,mc=101,gc=102,So=103,Ao=104,vc=200,xc=201,yc=202,_c=203,ml=204,gl=205,Mc=206,wc=207,bc=208,Sc=209,Ac=210,Ec=0,Tc=1,Cc=2,Wr=3,Rc=4,Lc=5,Pc=6,Ic=7,vl=0,Dc=1,Nc=2,Pn=0,Bc=1,Fc=2,Uc=3,Oc=4,zc=5,xl=300,Vi=301,ki=302,qr=303,Xr=304,er=306,Hi=1e3,on=1001,Js=1002,Pt=1003,jr=1004,Ys=1005,jt=1006,yl=1007,oi=1008,ai=1009,Vc=1010,kc=1011,_l=1012,Hc=1013,ni=1014,Gn=1015,ds=1016,Gc=1017,Wc=1018,Ui=1020,qc=1021,an=1023,Xc=1024,jc=1025,si=1026,Gi=1027,Yc=1028,$c=1029,Kc=1030,Zc=1031,Jc=1033,or=33776,ar=33777,lr=33778,cr=33779,Eo=35840,To=35841,Co=35842,Ro=35843,Qc=36196,Lo=37492,Po=37496,Io=37808,Do=37809,No=37810,Bo=37811,Fo=37812,Uo=37813,Oo=37814,zo=37815,Vo=37816,ko=37817,Ho=37818,Go=37819,Wo=37820,qo=37821,hr=36492,eh=36283,Xo=36284,jo=36285,Yo=36286,fs=2300,Wi=2301,ur=2302,$o=2400,Ko=2401,Zo=2402,th=2500,nh=0,Ml=1,Yr=2,li=3e3,dt=3001,ih=3200,sh=3201,wl=0,rh=1,vn="srgb",ps="srgb-linear",bl="display-p3",dr=7680,oh=519,$r=35044,Jo="300 es",Kr=1035;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const cs=Math.PI/180,qi=180/Math.PI;function pn(){const u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[u&255]+Ot[u>>8&255]+Ot[u>>16&255]+Ot[u>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Bt(u,e,t){return Math.max(e,Math.min(t,u))}function oo(u,e){return(u%e+e)%e}function ah(u,e,t,n,i){return n+(u-e)*(i-n)/(t-e)}function lh(u,e,t){return u!==e?(t-u)/(e-u):0}function hs(u,e,t){return(1-t)*u+t*e}function ch(u,e,t,n){return hs(u,e,1-Math.exp(-t*n))}function hh(u,e=1){return e-Math.abs(oo(u,e*2)-e)}function uh(u,e,t){return u<=e?0:u>=t?1:(u=(u-e)/(t-e),u*u*(3-2*u))}function dh(u,e,t){return u<=e?0:u>=t?1:(u=(u-e)/(t-e),u*u*u*(u*(u*6-15)+10))}function fh(u,e){return u+Math.floor(Math.random()*(e-u+1))}function ph(u,e){return u+Math.random()*(e-u)}function mh(u){return u*(.5-Math.random())}function gh(u){u!==void 0&&(Qo=u);let e=Qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(u){return u*cs}function xh(u){return u*qi}function Zr(u){return(u&u-1)===0&&u!==0}function Sl(u){return Math.pow(2,Math.ceil(Math.log(u)/Math.LN2))}function Al(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function yh(u,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),a=r(t/2),h=s((e+n)/2),c=r((e+n)/2),l=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":u.set(o*c,a*l,a*d,o*h);break;case"YZY":u.set(a*d,o*c,a*l,o*h);break;case"ZXZ":u.set(a*l,a*d,o*c,o*h);break;case"XZX":u.set(o*c,a*g,a*f,o*h);break;case"YXY":u.set(a*f,o*c,a*g,o*h);break;case"ZYZ":u.set(a*g,a*f,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function mt(u,e){switch(e.constructor){case Float32Array:return u;case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}const _h={DEG2RAD:cs,RAD2DEG:qi,generateUUID:pn,clamp:Bt,euclideanModulo:oo,mapLinear:ah,inverseLerp:lh,lerp:hs,damp:ch,pingpong:hh,smoothstep:uh,smootherstep:dh,randInt:fh,randFloat:ph,randFloatSpread:mh,seededRandom:gh,degToRad:vh,radToDeg:xh,isPowerOfTwo:Zr,ceilPowerOfTwo:Sl,floorPowerOfTwo:Al,setQuaternionFromProperEuler:yh,normalize:mt,denormalize:Ln};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,a,h){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=a,c[6]=n,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],h=n[1],c=n[4],l=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],_=i[4],x=i[7],M=i[2],L=i[5],O=i[8];return s[0]=r*v+o*y+a*M,s[3]=r*m+o*_+a*L,s[6]=r*p+o*x+a*O,s[1]=h*v+c*y+l*M,s[4]=h*m+c*_+l*L,s[7]=h*p+c*x+l*O,s[2]=d*v+f*y+g*M,s[5]=d*m+f*_+g*L,s[8]=d*p+f*x+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],h=e[7],c=e[8];return t*r*c-t*o*h-n*s*c+n*o*a+i*s*h-i*r*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],h=e[7],c=e[8],l=c*r-o*h,d=o*a-c*s,f=h*s-r*a,g=t*l+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=l*v,e[1]=(i*h-c*n)*v,e[2]=(o*n-i*r)*v,e[3]=d*v,e[4]=(c*t-i*a)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*a-h*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const a=Math.cos(s),h=Math.sin(s);return this.set(n*a,n*h,-n*(a*r+h*o)+r+e,-i*h,i*a,-i*(-h*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new rt;function El(u){for(let e=u.length-1;e>=0;--e)if(u[e]>=65535)return!0;return!1}function ms(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function Oi(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function pr(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const Mh=new rt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),wh=new rt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bh(u){return u.convertSRGBToLinear().applyMatrix3(wh)}function Sh(u){return u.applyMatrix3(Mh).convertLinearToSRGB()}const Ah={[ps]:u=>u,[vn]:u=>u.convertSRGBToLinear(),[bl]:bh},Eh={[ps]:u=>u,[vn]:u=>u.convertLinearToSRGB(),[bl]:Sh},Qt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(u){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!u},get workingColorSpace(){return ps},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,e,t){if(this.enabled===!1||e===t||!e||!t)return u;const n=Ah[e],i=Eh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(u))},fromWorkingColorSpace:function(u,e){return this.convert(u,this.workingColorSpace,e)},toWorkingColorSpace:function(u,e){return this.convert(u,e,this.workingColorSpace)}};let gi;class Tl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=ms("canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Oi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Cl{constructor(e=null){this.isSource=!0,this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(mr(i[r].image)):s.push(mr(i[r]))}else s=mr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function mr(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?Tl.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Th=0;class Ft extends di{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=on,i=on,s=jt,r=oi,o=an,a=ai,h=Ft.DEFAULT_ANISOTROPY,c=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=pn(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=xl;Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,h=a[0],c=a[4],l=a[8],d=a[1],f=a[5],g=a[9],v=a[2],m=a[6],p=a[10];if(Math.abs(c-d)<.01&&Math.abs(l-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(l+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(h+1)/2,x=(f+1)/2,M=(p+1)/2,L=(c+d)/4,O=(l+v)/4,I=(g+m)/4;return _>x&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=L/n,s=O/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=L/i,s=I/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=O/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(l-v)*(l-v)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(l-v)/y,this.z=(d-c)/y,this.w=Math.acos((h+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ci extends di{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rl extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ch extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],h=n[i+1],c=n[i+2],l=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],v=s[r+3];if(o===0){e[t+0]=a,e[t+1]=h,e[t+2]=c,e[t+3]=l;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(l!==v||a!==d||h!==f||c!==g){let m=1-o;const p=a*d+h*f+c*g+l*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),L=Math.atan2(M,p*y);m=Math.sin(m*L)/M,o=Math.sin(o*L)/M}const x=o*y;if(a=a*m+d*x,h=h*m+f*x,c=c*m+g*x,l=l*m+v*x,m===1-o){const M=1/Math.sqrt(a*a+h*h+c*c+l*l);a*=M,h*=M,c*=M,l*=M}}e[t]=a,e[t+1]=h,e[t+2]=c,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],a=n[i+1],h=n[i+2],c=n[i+3],l=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+c*l+a*f-h*d,e[t+1]=a*g+c*d+h*l-o*f,e[t+2]=h*g+c*f+o*d-a*l,e[t+3]=c*g-o*l-a*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,a=Math.sin,h=o(n/2),c=o(i/2),l=o(s/2),d=a(n/2),f=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=d*c*l+h*f*g,this._y=h*f*l-d*c*g,this._z=h*c*g+d*f*l,this._w=h*c*l-d*f*g;break;case"YXZ":this._x=d*c*l+h*f*g,this._y=h*f*l-d*c*g,this._z=h*c*g-d*f*l,this._w=h*c*l+d*f*g;break;case"ZXY":this._x=d*c*l-h*f*g,this._y=h*f*l+d*c*g,this._z=h*c*g+d*f*l,this._w=h*c*l-d*f*g;break;case"ZYX":this._x=d*c*l-h*f*g,this._y=h*f*l+d*c*g,this._z=h*c*g-d*f*l,this._w=h*c*l+d*f*g;break;case"YZX":this._x=d*c*l+h*f*g,this._y=h*f*l+d*c*g,this._z=h*c*g-d*f*l,this._w=h*c*l-d*f*g;break;case"XZY":this._x=d*c*l-h*f*g,this._y=h*f*l-d*c*g,this._z=h*c*g+d*f*l,this._w=h*c*l+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],h=t[2],c=t[6],l=t[10],d=n+o+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-a)*f,this._y=(s-h)*f,this._z=(r-i)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(c-a)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+h)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(s-h)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(a+c)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(r-i)/f,this._x=(s+h)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,a=t._y,h=t._z,c=t._w;return this._x=n*c+r*o+i*h-s*a,this._y=i*c+r*a+s*o-n*h,this._z=s*c+r*h+n*a-i*o,this._w=r*c-n*o-i*a-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(a),c=Math.atan2(h,o),l=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=r*l+this._w*d,this._x=n*l+this._x*d,this._y=i*l+this._y*d,this._z=s*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,a=e.w,h=a*t+r*i-o*n,c=a*n+o*t-s*i,l=a*i+s*n-r*t,d=-s*t-r*n-o*i;return this.x=h*a+d*-s+c*-o-l*-r,this.y=c*a+d*-r+l*-s-h*-o,this.z=l*a+d*-o+h*-r-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new K,ea=new Mn;class Nn{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),vi.copy(e.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)Sn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Sn)}else i.boundingBox===null&&i.computeBoundingBox(),vi.copy(i.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),ws.subVectors(this.max,Ji),xi.subVectors(e.a,Ji),yi.subVectors(e.b,Ji),_i.subVectors(e.c,Ji),Fn.subVectors(yi,xi),Un.subVectors(_i,yi),Kn.subVectors(xi,_i);let t=[0,-Fn.z,Fn.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,Fn.z,0,-Fn.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-Fn.y,Fn.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!vr(t,xi,yi,_i,ws)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,xi,yi,_i,ws))?!1:(bs.crossVectors(Fn,Un),t=[bs.x,bs.y,bs.z],vr(t,xi,yi,_i,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new K,new K,new K,new K,new K,new K,new K,new K],Sn=new K,vi=new Nn,xi=new K,yi=new K,_i=new K,Fn=new K,Un=new K,Kn=new K,Ji=new K,ws=new K,bs=new K,Zn=new K;function vr(u,e,t,n,i){for(let s=0,r=u.length-3;s<=r;s+=3){Zn.fromArray(u,s);const o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),a=e.dot(Zn),h=t.dot(Zn),c=n.dot(Zn);if(Math.max(-Math.max(a,h,c),Math.min(a,h,c))>o)return!1}return!0}const Rh=new Nn,Qi=new K,xr=new K;class Bn{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(xr)),this.expandByPoint(Qi.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new K,yr=new K,Ss=new K,On=new K,_r=new K,As=new K,Mr=new K;class ao{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yr.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),On.copy(this.origin).sub(yr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ss),o=On.dot(this.direction),a=-On.dot(Ss),h=On.lengthSq(),c=Math.abs(1-r*r);let l,d,f,g;if(c>0)if(l=r*a-o,d=r*o-a,g=s*c,l>=0)if(d>=-g)if(d<=g){const v=1/c;l*=v,d*=v,f=l*(l+r*d+2*o)+d*(r*l+d+2*a)+h}else d=s,l=Math.max(0,-(r*d+o)),f=-l*l+d*(d+2*a)+h;else d=-s,l=Math.max(0,-(r*d+o)),f=-l*l+d*(d+2*a)+h;else d<=-g?(l=Math.max(0,-(-r*s+o)),d=l>0?-s:Math.min(Math.max(-s,-a),s),f=-l*l+d*(d+2*a)+h):d<=g?(l=0,d=Math.min(Math.max(-s,-a),s),f=d*(d+2*a)+h):(l=Math.max(0,-(r*s+o)),d=l>0?s:Math.min(Math.max(-s,-a),s),f=-l*l+d*(d+2*a)+h);else d=r>0?-s:s,l=Math.max(0,-(r*d+o)),f=-l*l+d*(d+2*a)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(yr).addScaledVector(Ss,d),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,a;const h=1/this.direction.x,c=1/this.direction.y,l=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),c>=0?(s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),l>=0?(o=(e.min.z-d.z)*l,a=(e.max.z-d.z)*l):(o=(e.max.z-d.z)*l,a=(e.min.z-d.z)*l),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){_r.subVectors(t,e),As.subVectors(n,e),Mr.crossVectors(_r,As);let r=this.direction.dot(Mr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;On.subVectors(this.origin,e);const a=o*this.direction.dot(As.crossVectors(On,As));if(a<0)return null;const h=o*this.direction.dot(_r.cross(On));if(h<0||a+h>r)return null;const c=-o*On.dot(Mr);return c<0?null:this.at(c/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,a,h,c,l,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=a,p[2]=h,p[6]=c,p[10]=l,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),r=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),h=Math.sin(i),c=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const d=r*c,f=r*l,g=o*c,v=o*l;t[0]=a*c,t[4]=-a*l,t[8]=h,t[1]=f+g*h,t[5]=d-v*h,t[9]=-o*a,t[2]=v-d*h,t[6]=g+f*h,t[10]=r*a}else if(e.order==="YXZ"){const d=a*c,f=a*l,g=h*c,v=h*l;t[0]=d+v*o,t[4]=g*o-f,t[8]=r*h,t[1]=r*l,t[5]=r*c,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=r*a}else if(e.order==="ZXY"){const d=a*c,f=a*l,g=h*c,v=h*l;t[0]=d-v*o,t[4]=-r*l,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*c,t[9]=v-d*o,t[2]=-r*h,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const d=r*c,f=r*l,g=o*c,v=o*l;t[0]=a*c,t[4]=g*h-f,t[8]=d*h+v,t[1]=a*l,t[5]=v*h+d,t[9]=f*h-g,t[2]=-h,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const d=r*a,f=r*h,g=o*a,v=o*h;t[0]=a*c,t[4]=v-d*l,t[8]=g*l+f,t[1]=l,t[5]=r*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*l+g,t[10]=d-v*l}else if(e.order==="XZY"){const d=r*a,f=r*h,g=o*a,v=o*h;t[0]=a*c,t[4]=-l,t[8]=h*c,t[1]=d*l+v,t[5]=r*c,t[9]=f*l-g,t[2]=g*l-f,t[6]=o*c,t[10]=v*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Ph)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),zn.crossVectors(n,en),zn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),zn.crossVectors(n,en)),zn.normalize(),Es.crossVectors(en,zn),i[0]=zn.x,i[4]=Es.x,i[8]=en.x,i[1]=zn.y,i[5]=Es.y,i[9]=en.y,i[2]=zn.z,i[6]=Es.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],h=n[12],c=n[1],l=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],M=n[15],L=i[0],O=i[4],I=i[8],w=i[12],b=i[1],N=i[5],U=i[9],P=i[13],k=i[2],X=i[6],ie=i[10],H=i[14],B=i[3],ee=i[7],$=i[11],V=i[15];return s[0]=r*L+o*b+a*k+h*B,s[4]=r*O+o*N+a*X+h*ee,s[8]=r*I+o*U+a*ie+h*$,s[12]=r*w+o*P+a*H+h*V,s[1]=c*L+l*b+d*k+f*B,s[5]=c*O+l*N+d*X+f*ee,s[9]=c*I+l*U+d*ie+f*$,s[13]=c*w+l*P+d*H+f*V,s[2]=g*L+v*b+m*k+p*B,s[6]=g*O+v*N+m*X+p*ee,s[10]=g*I+v*U+m*ie+p*$,s[14]=g*w+v*P+m*H+p*V,s[3]=y*L+_*b+x*k+M*B,s[7]=y*O+_*N+x*X+M*ee,s[11]=y*I+_*U+x*ie+M*$,s[15]=y*w+_*P+x*H+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],h=e[13],c=e[2],l=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*a*l-i*h*l-s*o*d+n*h*d+i*o*f-n*a*f)+v*(+t*a*f-t*h*d+s*r*d-i*r*f+i*h*c-s*a*c)+m*(+t*h*l-t*o*f-s*r*l+n*r*f+s*o*c-n*h*c)+p*(-i*o*c-t*a*l+t*o*d+i*r*l-n*r*d+n*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],h=e[7],c=e[8],l=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=l*m*h-v*d*h+v*a*f-o*m*f-l*a*p+o*d*p,_=g*d*h-c*m*h-g*a*f+r*m*f+c*a*p-r*d*p,x=c*v*h-g*l*h+g*o*f-r*v*f-c*o*p+r*l*p,M=g*l*a-c*v*a-g*o*d+r*v*d+c*o*m-r*l*m,L=t*y+n*_+i*x+s*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=y*O,e[1]=(v*d*s-l*m*s-v*i*f+n*m*f+l*i*p-n*d*p)*O,e[2]=(o*m*s-v*a*s+v*i*h-n*m*h-o*i*p+n*a*p)*O,e[3]=(l*a*s-o*d*s-l*i*h+n*d*h+o*i*f-n*a*f)*O,e[4]=_*O,e[5]=(c*m*s-g*d*s+g*i*f-t*m*f-c*i*p+t*d*p)*O,e[6]=(g*a*s-r*m*s-g*i*h+t*m*h+r*i*p-t*a*p)*O,e[7]=(r*d*s-c*a*s+c*i*h-t*d*h-r*i*f+t*a*f)*O,e[8]=x*O,e[9]=(g*l*s-c*v*s-g*n*f+t*v*f+c*n*p-t*l*p)*O,e[10]=(r*v*s-g*o*s+g*n*h-t*v*h-r*n*p+t*o*p)*O,e[11]=(c*o*s-r*l*s-c*n*h+t*l*h+r*n*f-t*o*f)*O,e[12]=M*O,e[13]=(c*v*i-g*l*i+g*n*d-t*v*d-c*n*m+t*l*m)*O,e[14]=(g*o*i-r*v*i-g*n*a+t*v*a+r*n*m-t*o*m)*O,e[15]=(r*l*i-c*o*i+c*n*a-t*l*a-r*n*d+t*o*d)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,a=e.z,h=s*r,c=s*o;return this.set(h*r+n,h*o-i*a,h*a+i*o,0,h*o+i*a,c*o+n,c*a-i*r,0,h*a-i*o,c*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,h=s+s,c=r+r,l=o+o,d=s*h,f=s*c,g=s*l,v=r*c,m=r*l,p=o*l,y=a*h,_=a*c,x=a*l,M=n.x,L=n.y,O=n.z;return i[0]=(1-(v+p))*M,i[1]=(f+x)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(f-x)*L,i[5]=(1-(d+p))*L,i[6]=(m+y)*L,i[7]=0,i[8]=(g+_)*O,i[9]=(m-y)*O,i[10]=(1-(d+v))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Mi.set(i[0],i[1],i[2]).length();const r=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const h=1/s,c=1/r,l=1/o;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=c,cn.elements[5]*=c,cn.elements[6]*=c,cn.elements[8]*=l,cn.elements[9]*=l,cn.elements[10]*=l,t.setFromRotationMatrix(cn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,a=2*s/(t-e),h=2*s/(n-i),c=(t+e)/(t-e),l=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=h,o[9]=l,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,a=1/(t-e),h=1/(n-i),c=1/(r-s),l=(t+e)*a,d=(n+i)*h,f=(r+s)*c;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-l,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new K,cn=new st,Lh=new K(0,0,0),Ph=new K(1,1,1),zn=new K,Es=new K,en=new K,ta=new st,na=new Mn;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],h=i[5],c=i[9],l=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Bt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return na.setFromEuler(this),this.setFromQuaternion(na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ih=0;const ia=new K,wi=new Mn,En=new st,Ts=new K,es=new K,Dh=new K,Nh=new Mn,sa=new K(1,0,0),ra=new K(0,1,0),oa=new K(0,0,1),Bh={type:"added"},aa={type:"removed"};class xt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new K,t=new tr,n=new Mn,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new rt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(sa,e)}rotateY(e){return this.rotateOnAxis(ra,e)}rotateZ(e){return this.rotateOnAxis(oa,e)}translateOnAxis(e,t){return ia.copy(e).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sa,e)}translateY(e){return this.translateOnAxis(ra,e)}translateZ(e){return this.translateOnAxis(oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(es,Ts,this.up):En.lookAt(Ts,es,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(En),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(aa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let h=0,c=a.length;h<c;h++){const l=a[h];s(e.shapes,l)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,h=this.material.length;a<h;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),h=r(e.textures),c=r(e.images),l=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const h in o){const c=o[h];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new K(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new K,Tn=new K,wr=new K,Cn=new K,bi=new K,Si=new K,la=new K,br=new K,Sr=new K,Ar=new K;let Cs=!1;class dn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Tn.subVectors(n,t),wr.subVectors(e,t);const r=hn.dot(hn),o=hn.dot(Tn),a=hn.dot(wr),h=Tn.dot(Tn),c=Tn.dot(wr),l=r*h-o*o;if(l===0)return s.set(-2,-1,-1);const d=1/l,f=(h*a-o*c)*d,g=(r*c-o*a)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,i,s,r,o,a){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(e,t,n,i,s,r,o,a)}static getInterpolation(e,t,n,i,s,r,o,a){return this.getBarycoord(e,t,n,i,Cn),a.setScalar(0),a.addScaledVector(s,Cn.x),a.addScaledVector(r,Cn.y),a.addScaledVector(o,Cn.z),a}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Tn.subVectors(e,t),hn.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),hn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;bi.subVectors(i,n),Si.subVectors(s,n),br.subVectors(e,n);const a=bi.dot(br),h=Si.dot(br);if(a<=0&&h<=0)return t.copy(n);Sr.subVectors(e,i);const c=bi.dot(Sr),l=Si.dot(Sr);if(c>=0&&l<=c)return t.copy(i);const d=a*l-c*h;if(d<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(n).addScaledVector(bi,r);Ar.subVectors(e,s);const f=bi.dot(Ar),g=Si.dot(Ar);if(g>=0&&f<=g)return t.copy(s);const v=f*h-a*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(n).addScaledVector(Si,o);const m=c*g-f*l;if(m<=0&&l-c>=0&&f-g>=0)return la.subVectors(s,i),o=(l-c)/(l-c+(f-g)),t.copy(i).addScaledVector(la,o);const p=1/(m+v+d);return r=v*p,o=d*p,t.copy(n).addScaledVector(bi,r).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fh=0;class yn extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Fi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Er(u,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?u+(e-u)*6*t:t<1/2?e:t<2/3?u+(e-u)*6*(2/3-t):u}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=oo(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Er(r,s,e+1/3),this.g=Er(r,s,e),this.b=Er(r,s,e-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Qt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Qt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,h=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,h,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Qt.fromWorkingColorSpace(zt.copy(this),e),Bt(zt.r*255,0,255)<<16^Bt(zt.g*255,0,255)<<8^Bt(zt.b*255,0,255)<<0}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,s=zt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,h;const c=(o+r)/2;if(o===r)a=0,h=0;else{const l=r-o;switch(h=c<=.5?l/(r+o):l/(2-r-o),r){case n:a=(i-s)/l+(i<s?6:0);break;case i:a=(s-n)/l+2;break;case s:a=(n-i)/l+4;break}a/=6}return e.h=a,e.s=h,e.l=c,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=vn){Qt.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Rs);const n=hs(un.h,Rs.h,t),i=hs(un.s,Rs.s,t),s=hs(un.l,Rs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Qe;Qe.NAMES=Pl;class Wn extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new K,Ls=new Je;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$r,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$r&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Il extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uh=0;const sn=new st,Tr=new xt,Ai=new K,tn=new Nn,ts=new Nn,Lt=new K;class ln extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(El(e)?Dl:Il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(tn.min,ts.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,ts.max),tn.expandByPoint(Lt)):(tn.expandByPoint(ts.min),tn.expandByPoint(ts.max))}tn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],a=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Lt.fromBufferAttribute(o,h),a&&(Ai.fromBufferAttribute(e,h),Lt.add(Ai)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,h=[],c=[];for(let b=0;b<o;b++)h[b]=new K,c[b]=new K;const l=new K,d=new K,f=new K,g=new Je,v=new Je,m=new Je,p=new K,y=new K;function _(b,N,U){l.fromArray(i,b*3),d.fromArray(i,N*3),f.fromArray(i,U*3),g.fromArray(r,b*2),v.fromArray(r,N*2),m.fromArray(r,U*2),d.sub(l),f.sub(l),v.sub(g),m.sub(g);const P=1/(v.x*m.y-m.x*v.y);isFinite(P)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(P),y.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(P),h[b].add(p),h[N].add(p),h[U].add(p),c[b].add(y),c[N].add(y),c[U].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,N=x.length;b<N;++b){const U=x[b],P=U.start,k=U.count;for(let X=P,ie=P+k;X<ie;X+=3)_(n[X+0],n[X+1],n[X+2])}const M=new K,L=new K,O=new K,I=new K;function w(b){O.fromArray(s,b*3),I.copy(O);const N=h[b];M.copy(N),M.sub(O.multiplyScalar(O.dot(N))).normalize(),L.crossVectors(I,N);const P=L.dot(c[b])<0?-1:1;a[b*4]=M.x,a[b*4+1]=M.y,a[b*4+2]=M.z,a[b*4+3]=P}for(let b=0,N=x.length;b<N;++b){const U=x[b],P=U.start,k=U.count;for(let X=P,ie=P+k;X<ie;X+=3)w(n[X+0]),w(n[X+1]),w(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new K,s=new K,r=new K,o=new K,a=new K,h=new K,c=new K,l=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),c.subVectors(r,s),l.subVectors(i,s),c.cross(l),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),o.add(c),a.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),c.subVectors(r,s),l.subVectors(i,s),c.cross(l),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,a){const h=o.array,c=o.itemSize,l=o.normalized,d=new h.constructor(a.length*c);let f=0,g=0;for(let v=0,m=a.length;v<m;v++){o.isInterleavedBufferAttribute?f=a[v]*o.data.stride+o.offset:f=a[v]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new qt(d,c,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],h=e(a,n);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const a=[],h=s[o];for(let c=0,l=h.length;c<l;c++){const d=h[c],f=e(d,n);a.push(f)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const h=r[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(e[h]=a[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const h=n[a];e.data.attributes[a]=h.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],c=[];for(let l=0,d=h.length;l<d;l++){const f=h[l];c.push(f.toJSON(e.data))}c.length>0&&(i[a]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],l=s[h];for(let d=0,f=l.length;d<f;d++)c.push(l[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,c=r.length;h<c;h++){const l=r[h];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ca=new st,gn=new ao,Ps=new Bn,ha=new K,Ei=new K,Ti=new K,Ci=new K,Cr=new K,Is=new K,Ds=new Je,Ns=new Je,Bs=new Je,ua=new K,da=new K,fa=new K,Fs=new K,Us=new K;class At extends xt{constructor(e=new ln,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let a=0,h=s.length;a<h;a++){const c=o[a],l=s[a];c!==0&&(Cr.fromBufferAttribute(l,e),r?Is.addScaledVector(Cr,c):Is.addScaledVector(Cr.sub(t),c))}t.add(Is)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),gn.copy(e.ray).recast(e.near),Ps.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Ps,ha)===null||gn.origin.distanceToSquared(ha)>(e.far-e.near)**2))||(ca.copy(s).invert(),gn.copy(e.ray).applyMatrix4(ca),n.boundingBox!==null&&gn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,h=n.attributes.uv,c=n.attributes.uv2,l=n.attributes.normal,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=i[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=_;x<M;x+=3){const L=o.getX(x),O=o.getX(x+1),I=o.getX(x+2);r=Os(this,p,e,gn,h,c,l,L,O,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Os(this,i,e,gn,h,c,l,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=i[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=_;x<M;x+=3){const L=x,O=x+1,I=x+2;r=Os(this,p,e,gn,h,c,l,L,O,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,x=m+2;r=Os(this,i,e,gn,h,c,l,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Oh(u,e,t,n,i,s,r,o){let a;if(e.side===$t?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,e.side===Dn,o),a===null)return null;Us.copy(o),Us.applyMatrix4(u.matrixWorld);const h=t.ray.origin.distanceTo(Us);return h<t.near||h>t.far?null:{distance:h,point:Us.clone(),object:u}}function Os(u,e,t,n,i,s,r,o,a,h){u.getVertexPosition(o,Ei),u.getVertexPosition(a,Ti),u.getVertexPosition(h,Ci);const c=Oh(u,e,t,n,Ei,Ti,Ci,Fs);if(c){i&&(Ds.fromBufferAttribute(i,o),Ns.fromBufferAttribute(i,a),Bs.fromBufferAttribute(i,h),c.uv=dn.getInterpolation(Fs,Ei,Ti,Ci,Ds,Ns,Bs,new Je)),s&&(Ds.fromBufferAttribute(s,o),Ns.fromBufferAttribute(s,a),Bs.fromBufferAttribute(s,h),c.uv2=dn.getInterpolation(Fs,Ei,Ti,Ci,Ds,Ns,Bs,new Je)),r&&(ua.fromBufferAttribute(r,o),da.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,h),c.normal=dn.getInterpolation(Fs,Ei,Ti,Ci,ua,da,fa,new K),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const l={a:o,b:a,c:h,normal:new K,materialIndex:0};dn.getNormal(Ei,Ti,Ci,l.normal),c.face=l}return c}class jn extends ln{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],h=[],c=[],l=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2));function g(v,m,p,y,_,x,M,L,O,I,w){const b=x/O,N=M/I,U=x/2,P=M/2,k=L/2,X=O+1,ie=I+1;let H=0,B=0;const ee=new K;for(let $=0;$<ie;$++){const V=$*N-P;for(let q=0;q<X;q++){const E=q*b-U;ee[v]=E*y,ee[m]=V*_,ee[p]=k,h.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[p]=L>0?1:-1,c.push(ee.x,ee.y,ee.z),l.push(q/O),l.push(1-$/I),H+=1}}for(let $=0;$<I;$++)for(let V=0;V<O;V++){const q=d+V+X*$,E=d+V+X*($+1),T=d+(V+1)+X*($+1),C=d+(V+1)+X*$;a.push(q,E,C),a.push(E,T,C),B+=6}o.addGroup(f,B,w),f+=B,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(u){const e={};for(const t in u){e[t]={};for(const n in u[t]){const i=u[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(u){const e={};for(let t=0;t<u.length;t++){const n=Xi(u[t]);for(const i in n)e[i]=n[i]}return e}function zh(u){const e=[];for(let t=0;t<u.length;t++)e.push(u[t].clone());return e}function Nl(u){return u.getRenderTarget()===null&&u.outputEncoding===dt?vn:ps}const Vh={clone:Xi,merge:Ht};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bl extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Bl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,h=r.fullHeight;s+=r.offsetX*i/a,t-=r.offsetY*n/h,i*=r.width/a,n*=r.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Li=1;class Gh extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Wt(Ri,Li,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Wt(Ri,Li,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Wt(Ri,Li,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Wt(Ri,Li,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new Wt(Ri,Li,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const h=new Wt(Ri,Li,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,h]=this.children,c=e.getRenderTarget(),l=e.toneMapping,d=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(c),e.toneMapping=l,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Fl extends Ft{constructor(e,t,n,i,s,r,o,a,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,i,s,r,o,a,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wh extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Xn});s.uniforms.tEquirect.value=t;const r=new At(i,s),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=jt),new Gh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Rr=new K,qh=new K,Xh=new rt;class Qn{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rr.subVectors(n,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xh.getNormalMatrix(e),i=this.coplanarPoint(Rr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Bn,zs=new K;class lo{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,s=new Qn,r=new Qn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],h=n[5],c=n[6],l=n[7],d=n[8],f=n[9],g=n[10],v=n[11],m=n[12],p=n[13],y=n[14],_=n[15];return t[0].setComponents(o-i,l-a,v-d,_-m).normalize(),t[1].setComponents(o+i,l+a,v+d,_+m).normalize(),t[2].setComponents(o+s,l+h,v+f,_+p).normalize(),t[3].setComponents(o-s,l-h,v-f,_-p).normalize(),t[4].setComponents(o-r,l-c,v-g,_-y).normalize(),t[5].setComponents(o+r,l+c,v+g,_+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zs.x=i.normal.x>0?e.max.x:e.min.x,zs.y=i.normal.y>0?e.max.y:e.min.y,zs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let u=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=u.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=u.requestAnimationFrame(i),e=!0)},stop:function(){u.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){u=s}}}function jh(u,e){const t=e.isWebGL2,n=new WeakMap;function i(h,c){const l=h.array,d=h.usage,f=u.createBuffer();u.bindBuffer(c,f),u.bufferData(c,l,d),h.onUploadCallback();let g;if(l instanceof Float32Array)g=5126;else if(l instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(l instanceof Int16Array)g=5122;else if(l instanceof Uint32Array)g=5125;else if(l instanceof Int32Array)g=5124;else if(l instanceof Int8Array)g=5120;else if(l instanceof Uint8Array)g=5121;else if(l instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:h.version}}function s(h,c,l){const d=c.array,f=c.updateRange;u.bindBuffer(l,h),f.count===-1?u.bufferSubData(l,0,d):(t?u.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):u.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c&&(u.deleteBuffer(c.buffer),n.delete(h))}function a(h,c){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);l===void 0?n.set(h,i(h,c)):l.version<h.version&&(s(l.buffer,h,c),l.version=h.version)}return{get:r,remove:o,update:a}}class nr extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),h=o+1,c=a+1,l=e/o,d=t/a,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const y=p*d-r;for(let _=0;_<h;_++){const x=_*l-s;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/a)}}for(let p=0;p<a;p++)for(let y=0;y<o;y++){const _=y+h*p,x=y+h*(p+1),M=y+1+h*(p+1),L=y+1+h*p;f.push(_,x,L),f.push(x,M,L)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu="vec3 transformed = vec3( position );",tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iu=`#ifdef USE_IRIDESCENCE
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
#endif`,su=`#ifdef USE_BUMPMAP
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
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
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
#endif`,Uu=`#if defined( USE_ENVMAP )
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
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
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
#endif`,Gu=`struct PhysicalMaterial {
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
}`,Wu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ed=`#if defined( USE_POINTS_UV )
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
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
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
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cd=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#ifdef USE_UV
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
#endif`,Vd=`#ifdef USE_UV
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
#endif`,kd=`#ifdef USE_UV
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
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`#include <common>
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
}`,Kd=`#if DEPTH_PACKING == 3200
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
}`,Zd=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tf=`uniform float scale;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 diffuse;
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
}`,of=`#define LAMBERT
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
}`,af=`#define LAMBERT
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
}`,lf=`#define MATCAP
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
}`,cf=`#define MATCAP
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
}`,hf=`#define NORMAL
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
}`,uf=`#define NORMAL
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
}`,df=`#define PHONG
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
}`,ff=`#define PHONG
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
}`,pf=`#define STANDARD
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
}`,mf=`#define STANDARD
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
}`,gf=`#define TOON
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
}`,vf=`#define TOON
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
}`,xf=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,Mf=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,bf=`uniform vec3 diffuse;
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
}`,nt={alphamap_fragment:Yh,alphamap_pars_fragment:$h,alphatest_fragment:Kh,alphatest_pars_fragment:Zh,aomap_fragment:Jh,aomap_pars_fragment:Qh,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ru,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:au,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:yu,encodings_fragment:_u,encodings_pars_fragment:Mu,envmap_fragment:wu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Su,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Uu,envmap_vertex:Eu,fog_vertex:Tu,fog_pars_vertex:Cu,fog_fragment:Ru,fog_pars_fragment:Lu,gradientmap_pars_fragment:Pu,lightmap_fragment:Iu,lightmap_pars_fragment:Du,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Bu,lights_pars_begin:Fu,lights_toon_fragment:Ou,lights_toon_pars_fragment:zu,lights_phong_fragment:Vu,lights_phong_pars_fragment:ku,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Wu,lights_fragment_maps:qu,lights_fragment_end:Xu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Ku,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:nd,morphcolor_vertex:id,morphnormal_vertex:sd,morphtarget_pars_vertex:rd,morphtarget_vertex:od,normal_fragment_begin:ad,normal_fragment_maps:ld,normal_pars_fragment:cd,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,output_fragment:vd,packing:xd,premultiplied_alpha_fragment:yd,project_vertex:_d,dithering_fragment:Md,dithering_pars_fragment:wd,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:Cd,skinbase_vertex:Rd,skinning_pars_vertex:Ld,skinning_vertex:Pd,skinnormal_vertex:Id,specularmap_fragment:Dd,specularmap_pars_fragment:Nd,tonemapping_fragment:Bd,tonemapping_pars_fragment:Fd,transmission_fragment:Ud,transmission_pars_fragment:Od,uv_pars_fragment:zd,uv_pars_vertex:Vd,uv_vertex:kd,worldpos_vertex:Hd,background_vert:Gd,background_frag:Wd,backgroundCube_vert:qd,backgroundCube_frag:Xd,cube_vert:jd,cube_frag:Yd,depth_vert:$d,depth_frag:Kd,distanceRGBA_vert:Zd,distanceRGBA_frag:Jd,equirect_vert:Qd,equirect_frag:ef,linedashed_vert:tf,linedashed_frag:nf,meshbasic_vert:sf,meshbasic_frag:rf,meshlambert_vert:of,meshlambert_frag:af,meshmatcap_vert:lf,meshmatcap_frag:cf,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:df,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:vf,points_vert:xf,points_frag:yf,shadow_vert:_f,shadow_frag:Mf,sprite_vert:wf,sprite_frag:bf},Ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaTest:{value:0}}},xn={basic:{uniforms:Ht([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Ht([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Ht([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Ht([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Ht([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Ht([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Ht([Ne.points,Ne.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Ht([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Ht([Ne.common,Ne.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Ht([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Ht([Ne.sprite,Ne.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Ht([Ne.common,Ne.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Ht([Ne.lights,Ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xn.physical={uniforms:Ht([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Vs={r:0,b:0,g:0};function Sf(u,e,t,n,i,s,r){const o=new Qe(0);let a=s===!0?0:1,h,c,l=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_));const x=u.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?v(o,a):_&&_.isColor&&(v(_,1),y=!0),(u.autoClear||y)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),_&&(_.isCubeTexture||_.mapping===er)?(c===void 0&&(c=new At(new jn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Xi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.encoding!==dt,(l!==_||d!==_.version||f!==u.toneMapping)&&(c.material.needsUpdate=!0,l=_,d=_.version,f=u.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new At(new nr(2,2),new hi({name:"BackgroundMaterial",uniforms:Xi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_.encoding!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||d!==_.version||f!==u.toneMapping)&&(h.material.needsUpdate=!0,l=_,d=_.version,f=u.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function v(m,p){m.getRGB(Vs,Nl(u)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:g}}function Af(u,e,t,n){const i=u.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=m(null);let h=a,c=!1;function l(k,X,ie,H,B){let ee=!1;if(r){const $=v(H,ie,X);h!==$&&(h=$,f(h.object)),ee=p(k,H,ie,B),ee&&y(k,H,ie,B)}else{const $=X.wireframe===!0;(h.geometry!==H.id||h.program!==ie.id||h.wireframe!==$)&&(h.geometry=H.id,h.program=ie.id,h.wireframe=$,ee=!0)}B!==null&&t.update(B,34963),(ee||c)&&(c=!1,I(k,X,ie,H),B!==null&&u.bindBuffer(34963,t.get(B).buffer))}function d(){return n.isWebGL2?u.createVertexArray():s.createVertexArrayOES()}function f(k){return n.isWebGL2?u.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?u.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function v(k,X,ie){const H=ie.wireframe===!0;let B=o[k.id];B===void 0&&(B={},o[k.id]=B);let ee=B[X.id];ee===void 0&&(ee={},B[X.id]=ee);let $=ee[H];return $===void 0&&($=m(d()),ee[H]=$),$}function m(k){const X=[],ie=[],H=[];for(let B=0;B<i;B++)X[B]=0,ie[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ie,attributeDivisors:H,object:k,attributes:{},index:null}}function p(k,X,ie,H){const B=h.attributes,ee=X.attributes;let $=0;const V=ie.getAttributes();for(const q in V)if(V[q].location>=0){const T=B[q];let C=ee[q];if(C===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(C=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(C=k.instanceColor)),T===void 0||T.attribute!==C||C&&T.data!==C.data)return!0;$++}return h.attributesNum!==$||h.index!==H}function y(k,X,ie,H){const B={},ee=X.attributes;let $=0;const V=ie.getAttributes();for(const q in V)if(V[q].location>=0){let T=ee[q];T===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(T=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(T=k.instanceColor));const C={};C.attribute=T,T&&T.data&&(C.data=T.data),B[q]=C,$++}h.attributes=B,h.attributesNum=$,h.index=H}function _(){const k=h.newAttributes;for(let X=0,ie=k.length;X<ie;X++)k[X]=0}function x(k){M(k,0)}function M(k,X){const ie=h.newAttributes,H=h.enabledAttributes,B=h.attributeDivisors;ie[k]=1,H[k]===0&&(u.enableVertexAttribArray(k),H[k]=1),B[k]!==X&&((n.isWebGL2?u:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),B[k]=X)}function L(){const k=h.newAttributes,X=h.enabledAttributes;for(let ie=0,H=X.length;ie<H;ie++)X[ie]!==k[ie]&&(u.disableVertexAttribArray(ie),X[ie]=0)}function O(k,X,ie,H,B,ee){n.isWebGL2===!0&&(ie===5124||ie===5125)?u.vertexAttribIPointer(k,X,ie,B,ee):u.vertexAttribPointer(k,X,ie,H,B,ee)}function I(k,X,ie,H){if(n.isWebGL2===!1&&(k.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const B=H.attributes,ee=ie.getAttributes(),$=X.defaultAttributeValues;for(const V in ee){const q=ee[V];if(q.location>=0){let E=B[V];if(E===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(E=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(E=k.instanceColor)),E!==void 0){const T=E.normalized,C=E.itemSize,G=t.get(E);if(G===void 0)continue;const F=G.buffer,te=G.type,Y=G.bytesPerElement;if(E.isInterleavedBufferAttribute){const J=E.data,se=J.stride,Ee=E.offset;if(J.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)M(q.location+pe,J.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<q.locationSize;pe++)x(q.location+pe);u.bindBuffer(34962,F);for(let pe=0;pe<q.locationSize;pe++)O(q.location+pe,C/q.locationSize,te,T,se*Y,(Ee+C/q.locationSize*pe)*Y)}else{if(E.isInstancedBufferAttribute){for(let J=0;J<q.locationSize;J++)M(q.location+J,E.meshPerAttribute);k.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let J=0;J<q.locationSize;J++)x(q.location+J);u.bindBuffer(34962,F);for(let J=0;J<q.locationSize;J++)O(q.location+J,C/q.locationSize,te,T,C*Y,C/q.locationSize*J*Y)}}else if($!==void 0){const T=$[V];if(T!==void 0)switch(T.length){case 2:u.vertexAttrib2fv(q.location,T);break;case 3:u.vertexAttrib3fv(q.location,T);break;case 4:u.vertexAttrib4fv(q.location,T);break;default:u.vertexAttrib1fv(q.location,T)}}}}L()}function w(){U();for(const k in o){const X=o[k];for(const ie in X){const H=X[ie];for(const B in H)g(H[B].object),delete H[B];delete X[ie]}delete o[k]}}function b(k){if(o[k.id]===void 0)return;const X=o[k.id];for(const ie in X){const H=X[ie];for(const B in H)g(H[B].object),delete H[B];delete X[ie]}delete o[k.id]}function N(k){for(const X in o){const ie=o[X];if(ie[k.id]===void 0)continue;const H=ie[k.id];for(const B in H)g(H[B].object),delete H[B];delete ie[k.id]}}function U(){P(),c=!0,h!==a&&(h=a,f(h.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:U,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:x,disableUnusedAttributes:L}}function Ef(u,e,t,n){const i=n.isWebGL2;let s;function r(h){s=h}function o(h,c){u.drawArrays(s,h,c),t.update(c,s,1)}function a(h,c,l){if(l===0)return;let d,f;if(i)d=u,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,h,c,l),t.update(c,s,l)}this.setMode=r,this.render=o,this.renderInstances=a}function Tf(u,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=u.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&u.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const h=r||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,l=u.getParameter(34930),d=u.getParameter(35660),f=u.getParameter(3379),g=u.getParameter(34076),v=u.getParameter(34921),m=u.getParameter(36347),p=u.getParameter(36348),y=u.getParameter(36349),_=d>0,x=r||e.has("OES_texture_float"),M=_&&x,L=r?u.getParameter(36183):0;return{isWebGL2:r,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:L}}function Cf(u){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Qn,o=new rt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||i;return i=d,n=l.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,d){t=c(l,d,0)},this.setState=function(l,d,f){const g=l.clippingPlanes,v=l.clipIntersection,m=l.clipShadows,p=u.get(l);if(!i||g===null||g.length===0||s&&!m)s?c(null):h();else{const y=s?0:n,_=y*4;let x=p.clippingState||null;a.value=x,x=c(g,d,_,f);for(let M=0;M!==_;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(l,d,f,g){const v=l!==null?l.length:0;let m=null;if(v!==0){if(m=a.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)r.copy(l[_]).applyMatrix4(y,o),r.normal.toArray(m,x),m[x+3]=r.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Rf(u){let e=new WeakMap;function t(r,o){return o===qr?r.mapping=Vi:o===Xr&&(r.mapping=ki),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===qr||o===Xr)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const h=new Wh(a.height/2);return h.fromEquirectangularTexture(u,r),e.set(r,h),r.addEventListener("dispose",i),t(h.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class co extends Bl{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,pa=[.125,.215,.35,.446,.526,.582],ti=20,Lr=new co,ma=new Qe;let Pr=null;const ei=(1+Math.sqrt(5))/2,Pi=1/ei,ga=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ei,Pi),new K(0,ei,-Pi),new K(Pi,0,ei),new K(-Pi,0,ei),new K(ei,Pi,0),new K(-ei,Pi,0)];class va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr),e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ds,format:an,encoding:li,depthBuffer:!1},i=xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(s)),this._blurMaterial=Pf(s,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,i){const o=new Wt(90,1,t,n),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,d=c.toneMapping;c.getClearColor(ma),c.toneMapping=Pn,c.autoClear=!1;const f=new Wn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new At(new jn,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(ma),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,a[p],0),o.lookAt(h[p],0,0)):y===1?(o.up.set(0,0,a[p]),o.lookAt(0,h[p],0)):(o.up.set(0,a[p],0),o.lookAt(0,0,h[p]));const _=this._cubeSize;ks(i,y*_,p>2?_:0,_,_),c.setRenderTarget(i),v&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vi||e.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ya());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new At(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;ks(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,Lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ga[(i-1)%ga.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const a=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,l=new At(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ti-1),v=s/g,m=isFinite(s)?1+Math.floor(c*v):ti;m>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const p=[];let y=0;for(let O=0;O<ti;++O){const I=O/v,w=Math.exp(-I*I/2);p.push(w),O===0?y+=w:O<m&&(y+=2*w)}for(let O=0;O<p.length;O++)p[O]=p[O]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],M=3*x*(i>_-Bi?i-_+Bi:0),L=4*(this._cubeSize-x);ks(t,M,L,3*x,2*x),a.setRenderTarget(t),a.render(l,Lr)}}function Lf(u){const e=[],t=[],n=[];let i=u;const s=u-Bi+1+pa.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let a=1/o;r>u-Bi?a=pa[r-u+Bi-1]:r===0&&(a=0),n.push(a);const h=1/(o-2),c=-h,l=1+h,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let L=0;L<f;L++){const O=L%3*2/3-1,I=L>2?0:-1,w=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];y.set(w,v*g*L),_.set(d,m*g*L);const b=[L,L,L,L,L,L];x.set(b,p*g*L)}const M=new ln;M.setAttribute("position",new qt(y,v)),M.setAttribute("uv",new qt(_,m)),M.setAttribute("faceIndex",new qt(x,p)),e.push(M),i>Bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xa(u,e,t){const n=new ci(u,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(u,e,t,n,i){u.viewport.set(e,t,n,i),u.scissor.set(e,t,n,i)}function Pf(u,e,t){const n=new Float32Array(ti),i=new K(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ya(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function _a(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function If(u){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,h=a===qr||a===Xr,c=a===Vi||a===ki;if(h||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=e.get(o);return t===null&&(t=new va(u)),l=h?t.fromEquirectangular(o,l):t.fromCubemap(o,l),e.set(o,l),l.texture}else{if(e.has(o))return e.get(o).texture;{const l=o.image;if(h&&l&&l.height>0||c&&l&&i(l)){t===null&&(t=new va(u));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let a=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&a++;return a===h}function s(o){const a=o.target;a.removeEventListener("dispose",s);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Df(u){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=u.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nf(u,e,t,n){const i={},s=new WeakMap;function r(l){const d=l.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(l,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function a(l){const d=l.attributes;for(const g in d)e.update(d[g],34962);const f=l.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],34962)}}function h(l){const d=[],f=l.index,g=l.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const M=y[_+0],L=y[_+1],O=y[_+2];d.push(M,L,L,O,O,M)}}else{const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const M=_+0,L=_+1,O=_+2;d.push(M,L,L,O,O,M)}}const m=new(El(d)?Dl:Il)(d,1);m.version=v;const p=s.get(l);p&&e.remove(p),s.set(l,m)}function c(l){const d=s.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&h(l)}else h(l);return s.get(l)}return{get:o,update:a,getWireframeAttribute:c}}function Bf(u,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let o,a;function h(d){o=d.type,a=d.bytesPerElement}function c(d,f){u.drawElements(s,f,o,d*a),t.update(f,s,1)}function l(d,f,g){if(g===0)return;let v,m;if(i)v=u,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,f,o,d*a,g),t.update(f,s,g)}this.setMode=r,this.setIndex=h,this.render=c,this.renderInstances=l}function Ff(u){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uf(u,e){return u[0]-e[0]}function Of(u,e){return Math.abs(e[1])-Math.abs(u[1])}function zf(u,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new gt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function a(h,c,l){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==v){let X=function(){P.dispose(),s.delete(c),c.removeEventListener("dispose",X)};var f=X;m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let b=c.attributes.position.count*w,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*N*4*v),P=new Rl(U,b,N,v);P.type=Gn,P.needsUpdate=!0;const k=w*4;for(let ie=0;ie<v;ie++){const H=L[ie],B=O[ie],ee=I[ie],$=b*N*4*ie;for(let V=0;V<H.count;V++){const q=V*k;_===!0&&(r.fromBufferAttribute(H,V),U[$+q+0]=r.x,U[$+q+1]=r.y,U[$+q+2]=r.z,U[$+q+3]=0),x===!0&&(r.fromBufferAttribute(B,V),U[$+q+4]=r.x,U[$+q+5]=r.y,U[$+q+6]=r.z,U[$+q+7]=0),M===!0&&(r.fromBufferAttribute(ee,V),U[$+q+8]=r.x,U[$+q+9]=r.y,U[$+q+10]=r.z,U[$+q+11]=ee.itemSize===4?r.w:1)}}m={count:v,texture:P,size:new Je(b,N)},s.set(c,m),c.addEventListener("dispose",X)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];const y=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(u,"morphTargetBaseInfluence",y),l.getUniforms().setValue(u,"morphTargetInfluences",d),l.getUniforms().setValue(u,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(u,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=n[c.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[c.id]=v}for(let x=0;x<g;x++){const M=v[x];M[0]=x,M[1]=d[x]}v.sort(Of);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Uf);const m=c.morphAttributes.position,p=c.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const M=o[x],L=M[0],O=M[1];L!==Number.MAX_SAFE_INTEGER&&O?(m&&c.getAttribute("morphTarget"+x)!==m[L]&&c.setAttribute("morphTarget"+x,m[L]),p&&c.getAttribute("morphNormal"+x)!==p[L]&&c.setAttribute("morphNormal"+x,p[L]),i[x]=O,y+=O):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),p&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const _=c.morphTargetsRelative?1:1-y;l.getUniforms().setValue(u,"morphTargetBaseInfluence",_),l.getUniforms().setValue(u,"morphTargetInfluences",i)}}return{update:a}}function Vf(u,e,t,n){let i=new WeakMap;function s(a){const h=n.render.frame,c=a.geometry,l=e.get(a,c);return i.get(l)!==h&&(e.update(l),i.set(l,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),l}function r(){i=new WeakMap}function o(a){const h=a.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:r}}const Ol=new Ft,zl=new Rl,Vl=new Ch,kl=new Fl,Ma=[],wa=[],ba=new Float32Array(16),Sa=new Float32Array(9),Aa=new Float32Array(4);function $i(u,e,t){const n=u[0];if(n<=0||n>0)return u;const i=e*t;let s=Ma[i];if(s===void 0&&(s=new Float32Array(i),Ma[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,u[r].toArray(s,o)}return s}function Et(u,e){if(u.length!==e.length)return!1;for(let t=0,n=u.length;t<n;t++)if(u[t]!==e[t])return!1;return!0}function Tt(u,e){for(let t=0,n=e.length;t<n;t++)u[t]=e[t]}function ir(u,e){let t=wa[e];t===void 0&&(t=new Int32Array(e),wa[e]=t);for(let n=0;n!==e;++n)t[n]=u.allocateTextureUnit();return t}function kf(u,e){const t=this.cache;t[0]!==e&&(u.uniform1f(this.addr,e),t[0]=e)}function Hf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(u.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;u.uniform2fv(this.addr,e),Tt(t,e)}}function Gf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(u.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(u.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;u.uniform3fv(this.addr,e),Tt(t,e)}}function Wf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(u.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;u.uniform4fv(this.addr,e),Tt(t,e)}}function qf(u,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;u.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Aa.set(n),u.uniformMatrix2fv(this.addr,!1,Aa),Tt(t,n)}}function Xf(u,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;u.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Sa.set(n),u.uniformMatrix3fv(this.addr,!1,Sa),Tt(t,n)}}function jf(u,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;u.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;ba.set(n),u.uniformMatrix4fv(this.addr,!1,ba),Tt(t,n)}}function Yf(u,e){const t=this.cache;t[0]!==e&&(u.uniform1i(this.addr,e),t[0]=e)}function $f(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(u.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;u.uniform2iv(this.addr,e),Tt(t,e)}}function Kf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(u.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;u.uniform3iv(this.addr,e),Tt(t,e)}}function Zf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(u.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;u.uniform4iv(this.addr,e),Tt(t,e)}}function Jf(u,e){const t=this.cache;t[0]!==e&&(u.uniform1ui(this.addr,e),t[0]=e)}function Qf(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(u.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;u.uniform2uiv(this.addr,e),Tt(t,e)}}function ep(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(u.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;u.uniform3uiv(this.addr,e),Tt(t,e)}}function tp(u,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(u.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;u.uniform4uiv(this.addr,e),Tt(t,e)}}function np(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ol,i)}function ip(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vl,i)}function sp(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kl,i)}function rp(u,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(u.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zl,i)}function op(u){switch(u){case 5126:return kf;case 35664:return Hf;case 35665:return Gf;case 35666:return Wf;case 35674:return qf;case 35675:return Xf;case 35676:return jf;case 5124:case 35670:return Yf;case 35667:case 35671:return $f;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function ap(u,e){u.uniform1fv(this.addr,e)}function lp(u,e){const t=$i(e,this.size,2);u.uniform2fv(this.addr,t)}function cp(u,e){const t=$i(e,this.size,3);u.uniform3fv(this.addr,t)}function hp(u,e){const t=$i(e,this.size,4);u.uniform4fv(this.addr,t)}function up(u,e){const t=$i(e,this.size,4);u.uniformMatrix2fv(this.addr,!1,t)}function dp(u,e){const t=$i(e,this.size,9);u.uniformMatrix3fv(this.addr,!1,t)}function fp(u,e){const t=$i(e,this.size,16);u.uniformMatrix4fv(this.addr,!1,t)}function pp(u,e){u.uniform1iv(this.addr,e)}function mp(u,e){u.uniform2iv(this.addr,e)}function gp(u,e){u.uniform3iv(this.addr,e)}function vp(u,e){u.uniform4iv(this.addr,e)}function xp(u,e){u.uniform1uiv(this.addr,e)}function yp(u,e){u.uniform2uiv(this.addr,e)}function _p(u,e){u.uniform3uiv(this.addr,e)}function Mp(u,e){u.uniform4uiv(this.addr,e)}function wp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);Et(n,s)||(u.uniform1iv(this.addr,s),Tt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Ol,s[r])}function bp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);Et(n,s)||(u.uniform1iv(this.addr,s),Tt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Vl,s[r])}function Sp(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);Et(n,s)||(u.uniform1iv(this.addr,s),Tt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||kl,s[r])}function Ap(u,e,t){const n=this.cache,i=e.length,s=ir(t,i);Et(n,s)||(u.uniform1iv(this.addr,s),Tt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||zl,s[r])}function Ep(u){switch(u){case 5126:return ap;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return yp;case 36295:return _p;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ap}}class Tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=op(t.type)}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ep(t.type)}}class Rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Ea(u,e){u.seq.push(e),u.map[e.id]=e}function Lp(u,e,t){const n=u.name,i=n.length;for(Ir.lastIndex=0;;){const s=Ir.exec(n),r=Ir.lastIndex;let o=s[1];const a=s[2]==="]",h=s[3];if(a&&(o=o|0),h===void 0||h==="["&&r+2===i){Ea(t,h===void 0?new Tp(o,u,e):new Cp(o,u,e));break}else{let l=t.map[o];l===void 0&&(l=new Rp(o),Ea(t,l)),t=l}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Lp(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Ta(u,e,t){const n=u.createShader(e);return u.shaderSource(n,t),u.compileShader(n),n}let Pp=0;function Ip(u,e){const t=u.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Dp(u){switch(u){case li:return["Linear","( value )"];case dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function Ca(u,e,t){const n=u.getShaderParameter(e,35713),i=u.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ip(u.getShaderSource(e),r)}else return i}function Np(u,e){const t=Dp(e);return"vec4 "+u+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Bp(u,e){let t;switch(e){case Bc:t="Linear";break;case Fc:t="Reinhard";break;case Uc:t="OptimizedCineon";break;case Oc:t="ACESFilmic";break;case zc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+u+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fp(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.normalMapTangentSpace||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function Up(u){const e=[];for(const t in u){const n=u[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Op(u,e){const t={},n=u.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=u.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:u.getAttribLocation(e,r),locationSize:o}}return t}function ls(u){return u!==""}function Ra(u,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function La(u,e){return u.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(u){return u.replace(zp,Vp)}function Vp(u,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jr(t)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(u){return u.replace(kp,Hp)}function Hp(u,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ia(u){let e="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?e+=`
#define HIGH_PRECISION`:u.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gp(u){let e="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF":u.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===as&&(e="SHADOWMAP_TYPE_VSM"),e}function Wp(u){let e="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Vi:case ki:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(u){let e="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(u){let e="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Nc:e="ENVMAP_BLENDING_ADD";break}return e}function jp(u){const e=u.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yp(u,e,t,n){const i=u.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=Gp(t),h=Wp(t),c=qp(t),l=Xp(t),d=jp(t),f=t.isWebGL2?"":Fp(t),g=Up(s),v=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=[f,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[Ia(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[f,Ia(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Bp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,Np("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),r=Jr(r),r=Ra(r,t),r=La(r,t),o=Jr(o),o=Ra(o,t),o=La(o,t),r=Pa(r),o=Pa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+r,x=y+p+o,M=Ta(i,35633,_),L=Ta(i,35632,x);if(i.attachShader(v,M),i.attachShader(v,L),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),u.debug.checkShaderErrors){const w=i.getProgramInfoLog(v).trim(),b=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(L).trim();let U=!0,P=!0;if(i.getProgramParameter(v,35714)===!1)if(U=!1,typeof u.debug.onShaderError=="function")u.debug.onShaderError(i,v,M,L);else{const k=Ca(i,M,"vertex"),X=Ca(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+w+`
`+k+`
`+X)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(b===""||N==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:w,vertexShader:{log:b,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(M),i.deleteShader(L);let O;this.getUniforms=function(){return O===void 0&&(O=new $s(i,v)),O};let I;return this.getAttributes=function(){return I===void 0&&(I=Op(i,v)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=L,this}let $p=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zp(e),t.set(e,n)),n}}class Zp{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}}function Jp(u,e,t,n,i,s,r){const o=new Ll,a=new Kp,h=[],c=i.isWebGL2,l=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===1?"uv2":"uv"}function m(w,b,N,U,P){const k=U.fog,X=P.geometry,ie=w.isMeshStandardMaterial?U.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||ie),B=H&&H.mapping===er?H.image.height:null,ee=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,V=$!==void 0?$.length:0;let q=0;X.morphAttributes.position!==void 0&&(q=1),X.morphAttributes.normal!==void 0&&(q=2),X.morphAttributes.color!==void 0&&(q=3);let E,T,C,G;if(ee){const Ce=xn[ee];E=Ce.vertexShader,T=Ce.fragmentShader}else E=w.vertexShader,T=w.fragmentShader,a.update(w),C=a.getVertexShaderID(w),G=a.getFragmentShaderID(w);const F=u.getRenderTarget(),te=P.isInstancedMesh===!0,Y=!!w.map,J=!!w.matcap,se=!!H,Ee=!!w.aoMap,pe=!!w.lightMap,ye=!!w.bumpMap,he=!!w.normalMap,ve=!!w.displacementMap,Ge=!!w.emissiveMap,Ue=!!w.metalnessMap,He=!!w.roughnessMap,Ae=w.clearcoat>0,je=w.iridescence>0,D=w.sheen>0,A=w.transmission>0,ne=Ae&&!!w.clearcoatMap,de=Ae&&!!w.clearcoatNormalMap,xe=Ae&&!!w.clearcoatRoughnessMap,_e=je&&!!w.iridescenceMap,W=je&&!!w.iridescenceThicknessMap,me=D&&!!w.sheenColorMap,re=D&&!!w.sheenRoughnessMap,Re=!!w.specularMap,Be=!!w.specularColorMap,Oe=!!w.specularIntensityMap,Pe=A&&!!w.transmissionMap,Ve=A&&!!w.thicknessMap,We=!!w.gradientMap,Ye=!!w.alphaMap,at=w.alphaTest>0,Z=!!w.extensions,ue=!!X.attributes.uv2;return{isWebGL2:c,shaderID:ee,shaderName:w.type,vertexShader:E,fragmentShader:T,defines:w.defines,customVertexShaderID:C,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,instancing:te,instancingColor:te&&P.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?u.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:li,map:Y,matcap:J,envMap:se,envMapMode:se&&H.mapping,envMapCubeUVHeight:B,aoMap:Ee,lightMap:pe,bumpMap:ye,normalMap:he,displacementMap:d&&ve,emissiveMap:Ge,normalMapObjectSpace:he&&w.normalMapType===rh,normalMapTangentSpace:he&&w.normalMapType===wl,decodeVideoTexture:Y&&w.map.isVideoTexture===!0&&w.map.encoding===dt,metalnessMap:Ue,roughnessMap:He,clearcoat:Ae,clearcoatMap:ne,clearcoatNormalMap:de,clearcoatRoughnessMap:xe,iridescence:je,iridescenceMap:_e,iridescenceThicknessMap:W,sheen:D,sheenColorMap:me,sheenRoughnessMap:re,specularMap:Re,specularColorMap:Be,specularIntensityMap:Oe,transmission:A,transmissionMap:Pe,thicknessMap:Ve,gradientMap:We,opaque:w.transparent===!1&&w.blending===Fi,alphaMap:Ye,alphaTest:at,combine:w.combine,mapUv:Y&&v(w.map.channel),aoMapUv:Ee&&v(w.aoMap.channel),lightMapUv:pe&&v(w.lightMap.channel),bumpMapUv:ye&&v(w.bumpMap.channel),normalMapUv:he&&v(w.normalMap.channel),displacementMapUv:ve&&v(w.displacementMap.channel),emissiveMapUv:Ge&&v(w.emissiveMap.channel),metalnessMapUv:Ue&&v(w.metalnessMap.channel),roughnessMapUv:He&&v(w.roughnessMap.channel),clearcoatMapUv:ne&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:W&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(w.sheenRoughnessMap.channel),specularMapUv:Re&&v(w.specularMap.channel),specularColorMapUv:Be&&v(w.specularColorMap.channel),specularIntensityMapUv:Oe&&v(w.specularIntensityMap.channel),transmissionMapUv:Pe&&v(w.transmissionMap.channel),thicknessMapUv:Ve&&v(w.thicknessMap.channel),alphaMapUv:Ye&&v(w.alphaMap.channel),vertexTangents:he&&!!X.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUvs2:ue,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Y||Ye),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:u.shadowMap.enabled&&N.length>0,shadowMapType:u.shadowMap.type,toneMapping:w.toneMapped?u.toneMapping:Pn,useLegacyLights:u.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fn,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Z&&w.extensions.derivatives===!0,extensionFragDepth:Z&&w.extensions.fragDepth===!0,extensionDrawBuffers:Z&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)b.push(N),b.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(u.outputEncoding)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputEncoding),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUvs2&&o.enable(13),b.vertexTangents&&o.enable(14),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.decodeVideoTexture&&o.enable(17),b.opaque&&o.enable(18),b.pointsUvs&&o.enable(19),w.push(o.mask)}function x(w){const b=g[w.type];let N;if(b){const U=xn[b];N=Vh.clone(U.uniforms)}else N=w.uniforms;return N}function M(w,b){let N;for(let U=0,P=h.length;U<P;U++){const k=h[U];if(k.cacheKey===b){N=k,++N.usedTimes;break}}return N===void 0&&(N=new Yp(u,b,w,s),h.push(N)),N}function L(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function O(w){a.remove(w)}function I(){a.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:L,releaseShaderCache:O,programs:h,dispose:I}}function Qp(){let u=new WeakMap;function e(s){let r=u.get(s);return r===void 0&&(r={},u.set(s,r)),r}function t(s){u.delete(s)}function n(s,r,o){u.get(s)[r]=o}function i(){u=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function em(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.material.id!==e.material.id?u.material.id-e.material.id:u.z!==e.z?u.z-e.z:u.id-e.id}function Da(u,e){return u.groupOrder!==e.groupOrder?u.groupOrder-e.groupOrder:u.renderOrder!==e.renderOrder?u.renderOrder-e.renderOrder:u.z!==e.z?e.z-u.z:u.id-e.id}function Na(){const u=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(l,d,f,g,v,m){let p=u[e];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:g,renderOrder:l.renderOrder,z:v,group:m},u[e]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=l.renderOrder,p.z=v,p.group=m),e++,p}function o(l,d,f,g,v,m){const p=r(l,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function a(l,d,f,g,v,m){const p=r(l,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(l,d){t.length>1&&t.sort(l||em),n.length>1&&n.sort(d||Da),i.length>1&&i.sort(d||Da)}function c(){for(let l=e,d=u.length;l<d;l++){const f=u[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:c,sort:h}}function tm(){let u=new WeakMap;function e(n,i){const s=u.get(n);let r;return s===void 0?(r=new Na,u.set(n,[r])):i>=s.length?(r=new Na,s.push(r)):r=s[i],r}function t(){u=new WeakMap}return{get:e,dispose:t}}function nm(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Qe};break;case"SpotLight":t={position:new K,direction:new K,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new K,halfWidth:new K,halfHeight:new K};break}return u[e.id]=t,t}}}function im(){const u={};return{get:function(e){if(u[e.id]!==void 0)return u[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[e.id]=t,t}}}let sm=0;function rm(u,e){return(e.castShadow?2:0)-(u.castShadow?2:0)+(e.map?1:0)-(u.map?1:0)}function om(u,e){const t=new nm,n=im(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,r=new st,o=new st;function a(c,l){let d=0,f=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,m=0,p=0,y=0,_=0,x=0,M=0,L=0,O=0,I=0;c.sort(rm);const w=l===!0?Math.PI:1;for(let N=0,U=c.length;N<U;N++){const P=c[N],k=P.color,X=P.intensity,ie=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*X*w,f+=k.g*X*w,g+=k.b*X*w;else if(P.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],X);else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const ee=P.shadow,$=n.get(P);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=H,i.directionalShadowMatrix[v]=P.shadow.matrix,x++}i.directional[v]=B,v++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(k).multiplyScalar(X*w),B.distance=ie,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[p]=B;const ee=P.shadow;if(P.map&&(i.spotLightMap[O]=P.map,O++,ee.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=ee.matrix,P.castShadow){const $=n.get(P);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=H,L++}p++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(k).multiplyScalar(X),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=B,y++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*w),B.distance=P.distance,B.decay=P.decay,P.castShadow){const ee=P.shadow,$=n.get(P);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=B,m++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(X*w),B.groundColor.copy(P.groundColor).multiplyScalar(X*w),i.hemi[_]=B,_++}}y>0&&(e.isWebGL2||u.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==v||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==y||b.hemiLength!==_||b.numDirectionalShadows!==x||b.numPointShadows!==M||b.numSpotShadows!==L||b.numSpotMaps!==O)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=L+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,b.directionalLength=v,b.pointLength=m,b.spotLength=p,b.rectAreaLength=y,b.hemiLength=_,b.numDirectionalShadows=x,b.numPointShadows=M,b.numSpotShadows=L,b.numSpotMaps=O,i.version=sm++)}function h(c,l){let d=0,f=0,g=0,v=0,m=0;const p=l.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){const x=c[y];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:h,state:i}}function Ba(u,e){const t=new om(u,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(l){n.push(l)}function o(l){i.push(l)}function a(l){t.setup(n,l)}function h(l){t.setupView(n,l)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function am(u,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ba(u,e),t.set(s,[a])):r>=o.length?(a=new Ba(u,e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class lm extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cm extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,um=`uniform sampler2D shadow_pass;
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
}`;function dm(u,e,t){let n=new lo;const i=new Je,s=new Je,r=new gt,o=new lm({depthPacking:sh}),a=new cm,h={},c=t.maxTextureSize,l={[Dn]:$t,[$t]:Dn,[fn]:fn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:hm,fragmentShader:um}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl,this.render=function(x,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const O=u.getRenderTarget(),I=u.getActiveCubeFace(),w=u.getActiveMipmapLevel(),b=u.state;b.setBlending(Xn),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let N=0,U=x.length;N<U;N++){const P=x[N],k=P.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null){const H=this.type!==as?{minFilter:Pt,magFilter:Pt}:{};k.map=new ci(i.x,i.y,H),k.map.texture.name=P.name+".shadowMap",k.camera.updateProjectionMatrix()}u.setRenderTarget(k.map),u.clear();const ie=k.getViewportCount();for(let H=0;H<ie;H++){const B=k.getViewport(H);r.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),b.viewport(r),k.updateMatrices(P,H),n=k.getFrustum(),_(M,L,k.camera,P,this.type)}k.isPointLightShadow!==!0&&this.type===as&&p(k,L),k.needsUpdate=!1}m.needsUpdate=!1,u.setRenderTarget(O,I,w)};function p(x,M){const L=e.update(v);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ci(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,u.setRenderTarget(x.mapPass),u.clear(),u.renderBufferDirect(M,null,L,d,v,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,u.setRenderTarget(x.map),u.clear(),u.renderBufferDirect(M,null,L,f,v,null)}function y(x,M,L,O){let I=null;const w=L.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(w!==void 0)I=w;else if(I=L.isPointLight===!0?a:o,u.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const b=I.uuid,N=M.uuid;let U=h[b];U===void 0&&(U={},h[b]=U);let P=U[N];P===void 0&&(P=I.clone(),U[N]=P),I=P}if(I.visible=M.visible,I.wireframe=M.wireframe,O===as?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:l[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const b=u.properties.get(I);b.light=L}return I}function _(x,M,L,O,I){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&I===as)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld);const N=e.update(x),U=x.material;if(Array.isArray(U)){const P=N.groups;for(let k=0,X=P.length;k<X;k++){const ie=P[k],H=U[ie.materialIndex];if(H&&H.visible){const B=y(x,H,O,I);u.renderBufferDirect(L,null,N,B,x,ie)}}}else if(U.visible){const P=y(x,U,O,I);u.renderBufferDirect(L,null,N,P,x,null)}}const b=x.children;for(let N=0,U=b.length;N<U;N++)_(b[N],M,L,O,I)}}function fm(u,e,t){const n=t.isWebGL2;function i(){let Z=!1;const ue=new gt;let we=null;const Ce=new gt(0,0,0,0);return{setMask:function(ke){we!==ke&&!Z&&(u.colorMask(ke,ke,ke,ke),we=ke)},setLocked:function(ke){Z=ke},setClear:function(ke,lt,ut,yt,Vt){Vt===!0&&(ke*=yt,lt*=yt,ut*=yt),ue.set(ke,lt,ut,yt),Ce.equals(ue)===!1&&(u.clearColor(ke,lt,ut,yt),Ce.copy(ue))},reset:function(){Z=!1,we=null,Ce.set(-1,0,0,0)}}}function s(){let Z=!1,ue=null,we=null,Ce=null;return{setTest:function(ke){ke?F(2929):te(2929)},setMask:function(ke){ue!==ke&&!Z&&(u.depthMask(ke),ue=ke)},setFunc:function(ke){if(we!==ke){switch(ke){case Ec:u.depthFunc(512);break;case Tc:u.depthFunc(519);break;case Cc:u.depthFunc(513);break;case Wr:u.depthFunc(515);break;case Rc:u.depthFunc(514);break;case Lc:u.depthFunc(518);break;case Pc:u.depthFunc(516);break;case Ic:u.depthFunc(517);break;default:u.depthFunc(515)}we=ke}},setLocked:function(ke){Z=ke},setClear:function(ke){Ce!==ke&&(u.clearDepth(ke),Ce=ke)},reset:function(){Z=!1,ue=null,we=null,Ce=null}}}function r(){let Z=!1,ue=null,we=null,Ce=null,ke=null,lt=null,ut=null,yt=null,Vt=null;return{setTest:function(et){Z||(et?F(2960):te(2960))},setMask:function(et){ue!==et&&!Z&&(u.stencilMask(et),ue=et)},setFunc:function(et,oe,fe){(we!==et||Ce!==oe||ke!==fe)&&(u.stencilFunc(et,oe,fe),we=et,Ce=oe,ke=fe)},setOp:function(et,oe,fe){(lt!==et||ut!==oe||yt!==fe)&&(u.stencilOp(et,oe,fe),lt=et,ut=oe,yt=fe)},setLocked:function(et){Z=et},setClear:function(et){Vt!==et&&(u.clearStencil(et),Vt=et)},reset:function(){Z=!1,ue=null,we=null,Ce=null,ke=null,lt=null,ut=null,yt=null,Vt=null}}}const o=new i,a=new s,h=new r,c=new WeakMap,l=new WeakMap;let d={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,M=null,L=null,O=null,I=null,w=!1,b=null,N=null,U=null,P=null,k=null;const X=u.getParameter(35661);let ie=!1,H=0;const B=u.getParameter(7938);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),ie=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ie=H>=2);let ee=null,$={};const V=u.getParameter(3088),q=u.getParameter(2978),E=new gt().fromArray(V),T=new gt().fromArray(q);function C(Z,ue,we){const Ce=new Uint8Array(4),ke=u.createTexture();u.bindTexture(Z,ke),u.texParameteri(Z,10241,9728),u.texParameteri(Z,10240,9728);for(let lt=0;lt<we;lt++)u.texImage2D(ue+lt,0,6408,1,1,0,6408,5121,Ce);return ke}const G={};G[3553]=C(3553,3553,1),G[34067]=C(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),h.setClear(0),F(2929),a.setFunc(Wr),ve(!1),Ge(_o),F(2884),ye(Xn);function F(Z){d[Z]!==!0&&(u.enable(Z),d[Z]=!0)}function te(Z){d[Z]!==!1&&(u.disable(Z),d[Z]=!1)}function Y(Z,ue){return f[Z]!==ue?(u.bindFramebuffer(Z,ue),f[Z]=ue,n&&(Z===36009&&(f[36160]=ue),Z===36160&&(f[36009]=ue)),!0):!1}function J(Z,ue){let we=v,Ce=!1;if(Z)if(we=g.get(ue),we===void 0&&(we=[],g.set(ue,we)),Z.isWebGLMultipleRenderTargets){const ke=Z.texture;if(we.length!==ke.length||we[0]!==36064){for(let lt=0,ut=ke.length;lt<ut;lt++)we[lt]=36064+lt;we.length=ke.length,Ce=!0}}else we[0]!==36064&&(we[0]=36064,Ce=!0);else we[0]!==1029&&(we[0]=1029,Ce=!0);Ce&&(t.isWebGL2?u.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function se(Z){return m!==Z?(u.useProgram(Z),m=Z,!0):!1}const Ee={[Ni]:32774,[mc]:32778,[gc]:32779};if(n)Ee[So]=32775,Ee[Ao]=32776;else{const Z=e.get("EXT_blend_minmax");Z!==null&&(Ee[So]=Z.MIN_EXT,Ee[Ao]=Z.MAX_EXT)}const pe={[vc]:0,[xc]:1,[yc]:768,[ml]:770,[Ac]:776,[bc]:774,[Mc]:772,[_c]:769,[gl]:771,[Sc]:775,[wc]:773};function ye(Z,ue,we,Ce,ke,lt,ut,yt){if(Z===Xn){p===!0&&(te(3042),p=!1);return}if(p===!1&&(F(3042),p=!0),Z!==pc){if(Z!==y||yt!==w){if((_!==Ni||L!==Ni)&&(u.blendEquation(32774),_=Ni,L=Ni),yt)switch(Z){case Fi:u.blendFuncSeparate(1,771,1,771);break;case Mo:u.blendFunc(1,1);break;case wo:u.blendFuncSeparate(0,769,0,1);break;case bo:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Fi:u.blendFuncSeparate(770,771,1,771);break;case Mo:u.blendFunc(770,1);break;case wo:u.blendFuncSeparate(0,769,0,1);break;case bo:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}x=null,M=null,O=null,I=null,y=Z,w=yt}return}ke=ke||ue,lt=lt||we,ut=ut||Ce,(ue!==_||ke!==L)&&(u.blendEquationSeparate(Ee[ue],Ee[ke]),_=ue,L=ke),(we!==x||Ce!==M||lt!==O||ut!==I)&&(u.blendFuncSeparate(pe[we],pe[Ce],pe[lt],pe[ut]),x=we,M=Ce,O=lt,I=ut),y=Z,w=!1}function he(Z,ue){Z.side===fn?te(2884):F(2884);let we=Z.side===$t;ue&&(we=!we),ve(we),Z.blending===Fi&&Z.transparent===!1?ye(Xn):ye(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),o.setMask(Z.colorWrite);const Ce=Z.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),He(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?F(32926):te(32926)}function ve(Z){b!==Z&&(Z?u.frontFace(2304):u.frontFace(2305),b=Z)}function Ge(Z){Z!==uc?(F(2884),Z!==N&&(Z===_o?u.cullFace(1029):Z===dc?u.cullFace(1028):u.cullFace(1032))):te(2884),N=Z}function Ue(Z){Z!==U&&(ie&&u.lineWidth(Z),U=Z)}function He(Z,ue,we){Z?(F(32823),(P!==ue||k!==we)&&(u.polygonOffset(ue,we),P=ue,k=we)):te(32823)}function Ae(Z){Z?F(3089):te(3089)}function je(Z){Z===void 0&&(Z=33984+X-1),ee!==Z&&(u.activeTexture(Z),ee=Z)}function D(Z,ue,we){we===void 0&&(ee===null?we=33984+X-1:we=ee);let Ce=$[we];Ce===void 0&&(Ce={type:void 0,texture:void 0},$[we]=Ce),(Ce.type!==Z||Ce.texture!==ue)&&(ee!==we&&(u.activeTexture(we),ee=we),u.bindTexture(Z,ue||G[Z]),Ce.type=Z,Ce.texture=ue)}function A(){const Z=$[ee];Z!==void 0&&Z.type!==void 0&&(u.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ne(){try{u.compressedTexImage2D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function de(){try{u.compressedTexImage3D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{u.texSubImage2D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _e(){try{u.texSubImage3D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function W(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{u.compressedTexSubImage3D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function re(){try{u.texStorage2D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{u.texStorage3D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Be(){try{u.texImage2D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Oe(){try{u.texImage3D.apply(u,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pe(Z){E.equals(Z)===!1&&(u.scissor(Z.x,Z.y,Z.z,Z.w),E.copy(Z))}function Ve(Z){T.equals(Z)===!1&&(u.viewport(Z.x,Z.y,Z.z,Z.w),T.copy(Z))}function We(Z,ue){let we=l.get(ue);we===void 0&&(we=new WeakMap,l.set(ue,we));let Ce=we.get(Z);Ce===void 0&&(Ce=u.getUniformBlockIndex(ue,Z.name),we.set(Z,Ce))}function Ye(Z,ue){const Ce=l.get(ue).get(Z);c.get(ue)!==Ce&&(u.uniformBlockBinding(ue,Ce,Z.__bindingPointIndex),c.set(ue,Ce))}function at(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),n===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),d={},ee=null,$={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,M=null,L=null,O=null,I=null,w=!1,b=null,N=null,U=null,P=null,k=null,E.set(0,0,u.canvas.width,u.canvas.height),T.set(0,0,u.canvas.width,u.canvas.height),o.reset(),a.reset(),h.reset()}return{buffers:{color:o,depth:a,stencil:h},enable:F,disable:te,bindFramebuffer:Y,drawBuffers:J,useProgram:se,setBlending:ye,setMaterial:he,setFlipSided:ve,setCullFace:Ge,setLineWidth:Ue,setPolygonOffset:He,setScissorTest:Ae,activeTexture:je,bindTexture:D,unbindTexture:A,compressedTexImage2D:ne,compressedTexImage3D:de,texImage2D:Be,texImage3D:Oe,updateUBOMapping:We,uniformBlockBinding:Ye,texStorage2D:re,texStorage3D:Re,texSubImage2D:xe,texSubImage3D:_e,compressedTexSubImage2D:W,compressedTexSubImage3D:me,scissor:Pe,viewport:Ve,reset:at}}function pm(u,e,t,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,h=i.maxCubemapSize,c=i.maxTextureSize,l=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,A){return p?new OffscreenCanvas(D,A):ms("canvas")}function _(D,A,ne,de){let xe=1;if((D.width>de||D.height>de)&&(xe=de/Math.max(D.width,D.height)),xe<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const _e=A?Al:Math.floor,W=_e(xe*D.width),me=_e(xe*D.height);v===void 0&&(v=y(W,me));const re=ne?y(W,me):v;return re.width=W,re.height=me,re.getContext("2d").drawImage(D,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+W+"x"+me+")."),re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function x(D){return Zr(D.width)&&Zr(D.height)}function M(D){return o?!1:D.wrapS!==on||D.wrapT!==on||D.minFilter!==Pt&&D.minFilter!==jt}function L(D,A){return D.generateMipmaps&&A&&D.minFilter!==Pt&&D.minFilter!==jt}function O(D){u.generateMipmap(D)}function I(D,A,ne,de,xe=!1){if(o===!1)return A;if(D!==null){if(u[D]!==void 0)return u[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e=A;return A===6403&&(ne===5126&&(_e=33326),ne===5131&&(_e=33325),ne===5121&&(_e=33321)),A===33319&&(ne===5126&&(_e=33328),ne===5131&&(_e=33327),ne===5121&&(_e=33323)),A===6408&&(ne===5126&&(_e=34836),ne===5131&&(_e=34842),ne===5121&&(_e=de===dt&&xe===!1?35907:32856),ne===32819&&(_e=32854),ne===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function w(D,A,ne){return L(D,ne)===!0||D.isFramebufferTexture&&D.minFilter!==Pt&&D.minFilter!==jt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function b(D){return D===Pt||D===jr||D===Ys?9728:9729}function N(D){const A=D.target;A.removeEventListener("dispose",N),P(A),A.isVideoTexture&&g.delete(A)}function U(D){const A=D.target;A.removeEventListener("dispose",U),X(A)}function P(D){const A=n.get(D);if(A.__webglInit===void 0)return;const ne=D.source,de=m.get(ne);if(de){const xe=de[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&k(D),Object.keys(de).length===0&&m.delete(ne)}n.remove(D)}function k(D){const A=n.get(D);u.deleteTexture(A.__webglTexture);const ne=D.source,de=m.get(ne);delete de[A.__cacheKey],r.memory.textures--}function X(D){const A=D.texture,ne=n.get(D),de=n.get(A);if(de.__webglTexture!==void 0&&(u.deleteTexture(de.__webglTexture),r.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)u.deleteFramebuffer(ne.__webglFramebuffer[xe]),ne.__webglDepthbuffer&&u.deleteRenderbuffer(ne.__webglDepthbuffer[xe]);else{if(u.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&u.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&u.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let xe=0;xe<ne.__webglColorRenderbuffer.length;xe++)ne.__webglColorRenderbuffer[xe]&&u.deleteRenderbuffer(ne.__webglColorRenderbuffer[xe]);ne.__webglDepthRenderbuffer&&u.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let xe=0,_e=A.length;xe<_e;xe++){const W=n.get(A[xe]);W.__webglTexture&&(u.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(A[xe])}n.remove(A),n.remove(D)}let ie=0;function H(){ie=0}function B(){const D=ie;return D>=a&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a),ie+=1,D}function ee(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.encoding),A.join()}function $(D,A){const ne=n.get(D);if(D.isVideoTexture&&Ae(D),D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){const de=D.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ne,D,A);return}}t.bindTexture(3553,ne.__webglTexture,33984+A)}function V(D,A){const ne=n.get(D);if(D.version>0&&ne.__version!==D.version){te(ne,D,A);return}t.bindTexture(35866,ne.__webglTexture,33984+A)}function q(D,A){const ne=n.get(D);if(D.version>0&&ne.__version!==D.version){te(ne,D,A);return}t.bindTexture(32879,ne.__webglTexture,33984+A)}function E(D,A){const ne=n.get(D);if(D.version>0&&ne.__version!==D.version){Y(ne,D,A);return}t.bindTexture(34067,ne.__webglTexture,33984+A)}const T={[Hi]:10497,[on]:33071,[Js]:33648},C={[Pt]:9728,[jr]:9984,[Ys]:9986,[jt]:9729,[yl]:9985,[oi]:9987};function G(D,A,ne){if(ne?(u.texParameteri(D,10242,T[A.wrapS]),u.texParameteri(D,10243,T[A.wrapT]),(D===32879||D===35866)&&u.texParameteri(D,32882,T[A.wrapR]),u.texParameteri(D,10240,C[A.magFilter]),u.texParameteri(D,10241,C[A.minFilter])):(u.texParameteri(D,10242,33071),u.texParameteri(D,10243,33071),(D===32879||D===35866)&&u.texParameteri(D,32882,33071),(A.wrapS!==on||A.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(D,10240,b(A.magFilter)),u.texParameteri(D,10241,b(A.minFilter)),A.minFilter!==Pt&&A.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Pt||A.minFilter!==Ys&&A.minFilter!==oi||A.type===Gn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(u.texParameterf(D,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function F(D,A){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",N));const de=A.source;let xe=m.get(de);xe===void 0&&(xe={},m.set(de,xe));const _e=ee(A);if(_e!==D.__cacheKey){xe[_e]===void 0&&(xe[_e]={texture:u.createTexture(),usedTimes:0},r.memory.textures++,ne=!0),xe[_e].usedTimes++;const W=xe[D.__cacheKey];W!==void 0&&(xe[D.__cacheKey].usedTimes--,W.usedTimes===0&&k(A)),D.__cacheKey=_e,D.__webglTexture=xe[_e].texture}return ne}function te(D,A,ne){let de=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=35866),A.isData3DTexture&&(de=32879);const xe=F(D,A),_e=A.source;t.bindTexture(de,D.__webglTexture,33984+ne);const W=n.get(_e);if(_e.version!==W.__version||xe===!0){t.activeTexture(33984+ne),u.pixelStorei(37440,A.flipY),u.pixelStorei(37441,A.premultiplyAlpha),u.pixelStorei(3317,A.unpackAlignment),u.pixelStorei(37443,0);const me=M(A)&&x(A.image)===!1;let re=_(A.image,me,!1,c);re=je(A,re);const Re=x(re)||o,Be=s.convert(A.format,A.encoding);let Oe=s.convert(A.type),Pe=I(A.internalFormat,Be,Oe,A.encoding,A.isVideoTexture);G(de,A,Re);let Ve;const We=A.mipmaps,Ye=o&&A.isVideoTexture!==!0,at=W.__version===void 0||xe===!0,Z=w(A,re,Re);if(A.isDepthTexture)Pe=6402,o?A.type===Gn?Pe=36012:A.type===ni?Pe=33190:A.type===Ui?Pe=35056:Pe=33189:A.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===si&&Pe===6402&&A.type!==_l&&A.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ni,Oe=s.convert(A.type)),A.format===Gi&&Pe===6402&&(Pe=34041,A.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ui,Oe=s.convert(A.type))),at&&(Ye?t.texStorage2D(3553,1,Pe,re.width,re.height):t.texImage2D(3553,0,Pe,re.width,re.height,0,Be,Oe,null));else if(A.isDataTexture)if(We.length>0&&Re){Ye&&at&&t.texStorage2D(3553,Z,Pe,We[0].width,We[0].height);for(let ue=0,we=We.length;ue<we;ue++)Ve=We[ue],Ye?t.texSubImage2D(3553,ue,0,0,Ve.width,Ve.height,Be,Oe,Ve.data):t.texImage2D(3553,ue,Pe,Ve.width,Ve.height,0,Be,Oe,Ve.data);A.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(3553,Z,Pe,re.width,re.height),t.texSubImage2D(3553,0,0,0,re.width,re.height,Be,Oe,re.data)):t.texImage2D(3553,0,Pe,re.width,re.height,0,Be,Oe,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ye&&at&&t.texStorage3D(35866,Z,Pe,We[0].width,We[0].height,re.depth);for(let ue=0,we=We.length;ue<we;ue++)Ve=We[ue],A.format!==an?Be!==null?Ye?t.compressedTexSubImage3D(35866,ue,0,0,0,Ve.width,Ve.height,re.depth,Be,Ve.data,0,0):t.compressedTexImage3D(35866,ue,Pe,Ve.width,Ve.height,re.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(35866,ue,0,0,0,Ve.width,Ve.height,re.depth,Be,Oe,Ve.data):t.texImage3D(35866,ue,Pe,Ve.width,Ve.height,re.depth,0,Be,Oe,Ve.data)}else{Ye&&at&&t.texStorage2D(3553,Z,Pe,We[0].width,We[0].height);for(let ue=0,we=We.length;ue<we;ue++)Ve=We[ue],A.format!==an?Be!==null?Ye?t.compressedTexSubImage2D(3553,ue,0,0,Ve.width,Ve.height,Be,Ve.data):t.compressedTexImage2D(3553,ue,Pe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,ue,0,0,Ve.width,Ve.height,Be,Oe,Ve.data):t.texImage2D(3553,ue,Pe,Ve.width,Ve.height,0,Be,Oe,Ve.data)}else if(A.isDataArrayTexture)Ye?(at&&t.texStorage3D(35866,Z,Pe,re.width,re.height,re.depth),t.texSubImage3D(35866,0,0,0,0,re.width,re.height,re.depth,Be,Oe,re.data)):t.texImage3D(35866,0,Pe,re.width,re.height,re.depth,0,Be,Oe,re.data);else if(A.isData3DTexture)Ye?(at&&t.texStorage3D(32879,Z,Pe,re.width,re.height,re.depth),t.texSubImage3D(32879,0,0,0,0,re.width,re.height,re.depth,Be,Oe,re.data)):t.texImage3D(32879,0,Pe,re.width,re.height,re.depth,0,Be,Oe,re.data);else if(A.isFramebufferTexture){if(at)if(Ye)t.texStorage2D(3553,Z,Pe,re.width,re.height);else{let ue=re.width,we=re.height;for(let Ce=0;Ce<Z;Ce++)t.texImage2D(3553,Ce,Pe,ue,we,0,Be,Oe,null),ue>>=1,we>>=1}}else if(We.length>0&&Re){Ye&&at&&t.texStorage2D(3553,Z,Pe,We[0].width,We[0].height);for(let ue=0,we=We.length;ue<we;ue++)Ve=We[ue],Ye?t.texSubImage2D(3553,ue,0,0,Be,Oe,Ve):t.texImage2D(3553,ue,Pe,Be,Oe,Ve);A.generateMipmaps=!1}else Ye?(at&&t.texStorage2D(3553,Z,Pe,re.width,re.height),t.texSubImage2D(3553,0,0,0,Be,Oe,re)):t.texImage2D(3553,0,Pe,Be,Oe,re);L(A,Re)&&O(de),W.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Y(D,A,ne){if(A.image.length!==6)return;const de=F(D,A),xe=A.source;t.bindTexture(34067,D.__webglTexture,33984+ne);const _e=n.get(xe);if(xe.version!==_e.__version||de===!0){t.activeTexture(33984+ne),u.pixelStorei(37440,A.flipY),u.pixelStorei(37441,A.premultiplyAlpha),u.pixelStorei(3317,A.unpackAlignment),u.pixelStorei(37443,0);const W=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,re=[];for(let ue=0;ue<6;ue++)!W&&!me?re[ue]=_(A.image[ue],!1,!0,h):re[ue]=me?A.image[ue].image:A.image[ue],re[ue]=je(A,re[ue]);const Re=re[0],Be=x(Re)||o,Oe=s.convert(A.format,A.encoding),Pe=s.convert(A.type),Ve=I(A.internalFormat,Oe,Pe,A.encoding),We=o&&A.isVideoTexture!==!0,Ye=_e.__version===void 0||de===!0;let at=w(A,Re,Be);G(34067,A,Be);let Z;if(W){We&&Ye&&t.texStorage2D(34067,at,Ve,Re.width,Re.height);for(let ue=0;ue<6;ue++){Z=re[ue].mipmaps;for(let we=0;we<Z.length;we++){const Ce=Z[we];A.format!==an?Oe!==null?We?t.compressedTexSubImage2D(34069+ue,we,0,0,Ce.width,Ce.height,Oe,Ce.data):t.compressedTexImage2D(34069+ue,we,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+ue,we,0,0,Ce.width,Ce.height,Oe,Pe,Ce.data):t.texImage2D(34069+ue,we,Ve,Ce.width,Ce.height,0,Oe,Pe,Ce.data)}}}else{Z=A.mipmaps,We&&Ye&&(Z.length>0&&at++,t.texStorage2D(34067,at,Ve,re[0].width,re[0].height));for(let ue=0;ue<6;ue++)if(me){We?t.texSubImage2D(34069+ue,0,0,0,re[ue].width,re[ue].height,Oe,Pe,re[ue].data):t.texImage2D(34069+ue,0,Ve,re[ue].width,re[ue].height,0,Oe,Pe,re[ue].data);for(let we=0;we<Z.length;we++){const ke=Z[we].image[ue].image;We?t.texSubImage2D(34069+ue,we+1,0,0,ke.width,ke.height,Oe,Pe,ke.data):t.texImage2D(34069+ue,we+1,Ve,ke.width,ke.height,0,Oe,Pe,ke.data)}}else{We?t.texSubImage2D(34069+ue,0,0,0,Oe,Pe,re[ue]):t.texImage2D(34069+ue,0,Ve,Oe,Pe,re[ue]);for(let we=0;we<Z.length;we++){const Ce=Z[we];We?t.texSubImage2D(34069+ue,we+1,0,0,Oe,Pe,Ce.image[ue]):t.texImage2D(34069+ue,we+1,Ve,Oe,Pe,Ce.image[ue])}}}L(A,Be)&&O(34067),_e.__version=xe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function J(D,A,ne,de,xe){const _e=s.convert(ne.format,ne.encoding),W=s.convert(ne.type),me=I(ne.internalFormat,_e,W,ne.encoding);n.get(A).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,me,A.width,A.height,A.depth,0,_e,W,null):t.texImage2D(xe,0,me,A.width,A.height,0,_e,W,null)),t.bindFramebuffer(36160,D),He(A)?d.framebufferTexture2DMultisampleEXT(36160,de,xe,n.get(ne).__webglTexture,0,Ue(A)):(xe===3553||xe>=34069&&xe<=34074)&&u.framebufferTexture2D(36160,de,xe,n.get(ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function se(D,A,ne){if(u.bindRenderbuffer(36161,D),A.depthBuffer&&!A.stencilBuffer){let de=33189;if(ne||He(A)){const xe=A.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Gn?de=36012:xe.type===ni&&(de=33190));const _e=Ue(A);He(A)?d.renderbufferStorageMultisampleEXT(36161,_e,de,A.width,A.height):u.renderbufferStorageMultisample(36161,_e,de,A.width,A.height)}else u.renderbufferStorage(36161,de,A.width,A.height);u.framebufferRenderbuffer(36160,36096,36161,D)}else if(A.depthBuffer&&A.stencilBuffer){const de=Ue(A);ne&&He(A)===!1?u.renderbufferStorageMultisample(36161,de,35056,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(36161,de,35056,A.width,A.height):u.renderbufferStorage(36161,34041,A.width,A.height),u.framebufferRenderbuffer(36160,33306,36161,D)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0;xe<de.length;xe++){const _e=de[xe],W=s.convert(_e.format,_e.encoding),me=s.convert(_e.type),re=I(_e.internalFormat,W,me,_e.encoding),Re=Ue(A);ne&&He(A)===!1?u.renderbufferStorageMultisample(36161,Re,re,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(36161,Re,re,A.width,A.height):u.renderbufferStorage(36161,re,A.width,A.height)}}u.bindRenderbuffer(36161,null)}function Ee(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);const de=n.get(A.depthTexture).__webglTexture,xe=Ue(A);if(A.depthTexture.format===si)He(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,de,0,xe):u.framebufferTexture2D(36160,36096,3553,de,0);else if(A.depthTexture.format===Gi)He(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,de,0,xe):u.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function pe(D){const A=n.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ee(A.__webglFramebuffer,D)}else if(ne){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=u.createRenderbuffer(),se(A.__webglDepthbuffer[de],D,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=u.createRenderbuffer(),se(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(36160,null)}function ye(D,A,ne){const de=n.get(D);A!==void 0&&J(de.__webglFramebuffer,D,D.texture,36064,3553),ne!==void 0&&pe(D)}function he(D){const A=D.texture,ne=n.get(D),de=n.get(A);D.addEventListener("dispose",U),D.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=u.createTexture()),de.__version=A.version,r.memory.textures++);const xe=D.isWebGLCubeRenderTarget===!0,_e=D.isWebGLMultipleRenderTargets===!0,W=x(D)||o;if(xe){ne.__webglFramebuffer=[];for(let me=0;me<6;me++)ne.__webglFramebuffer[me]=u.createFramebuffer()}else{if(ne.__webglFramebuffer=u.createFramebuffer(),_e)if(i.drawBuffers){const me=D.texture;for(let re=0,Re=me.length;re<Re;re++){const Be=n.get(me[re]);Be.__webglTexture===void 0&&(Be.__webglTexture=u.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&He(D)===!1){const me=_e?A:[A];ne.__webglMultisampledFramebuffer=u.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer);for(let re=0;re<me.length;re++){const Re=me[re];ne.__webglColorRenderbuffer[re]=u.createRenderbuffer(),u.bindRenderbuffer(36161,ne.__webglColorRenderbuffer[re]);const Be=s.convert(Re.format,Re.encoding),Oe=s.convert(Re.type),Pe=I(Re.internalFormat,Be,Oe,Re.encoding,D.isXRRenderTarget===!0),Ve=Ue(D);u.renderbufferStorageMultisample(36161,Ve,Pe,D.width,D.height),u.framebufferRenderbuffer(36160,36064+re,36161,ne.__webglColorRenderbuffer[re])}u.bindRenderbuffer(36161,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=u.createRenderbuffer(),se(ne.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,de.__webglTexture),G(34067,A,W);for(let me=0;me<6;me++)J(ne.__webglFramebuffer[me],D,A,36064,34069+me);L(A,W)&&O(34067),t.unbindTexture()}else if(_e){const me=D.texture;for(let re=0,Re=me.length;re<Re;re++){const Be=me[re],Oe=n.get(Be);t.bindTexture(3553,Oe.__webglTexture),G(3553,Be,W),J(ne.__webglFramebuffer,D,Be,36064+re,3553),L(Be,W)&&O(3553)}t.unbindTexture()}else{let me=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?me=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,de.__webglTexture),G(me,A,W),J(ne.__webglFramebuffer,D,A,36064,me),L(A,W)&&O(me),t.unbindTexture()}D.depthBuffer&&pe(D)}function ve(D){const A=x(D)||o,ne=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let de=0,xe=ne.length;de<xe;de++){const _e=ne[de];if(L(_e,A)){const W=D.isWebGLCubeRenderTarget?34067:3553,me=n.get(_e).__webglTexture;t.bindTexture(W,me),O(W),t.unbindTexture()}}}function Ge(D){if(o&&D.samples>0&&He(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ne=D.width,de=D.height;let xe=16384;const _e=[],W=D.stencilBuffer?33306:36096,me=n.get(D),re=D.isWebGLMultipleRenderTargets===!0;if(re)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Re,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Re,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){_e.push(36064+Re),D.depthBuffer&&_e.push(W);const Be=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Be===!1&&(D.depthBuffer&&(xe|=256),D.stencilBuffer&&(xe|=1024)),re&&u.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Re]),Be===!0&&(u.invalidateFramebuffer(36008,[W]),u.invalidateFramebuffer(36009,[W])),re){const Oe=n.get(A[Re]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,Oe,0)}u.blitFramebuffer(0,0,ne,de,0,0,ne,de,xe,9728),f&&u.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),re)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+Re,36161,me.__webglColorRenderbuffer[Re]);const Be=n.get(A[Re]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),u.framebufferTexture2D(36009,36064+Re,3553,Be,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function Ue(D){return Math.min(l,D.samples)}function He(D){const A=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ae(D){const A=r.render.frame;g.get(D)!==A&&(g.set(D,A),D.update())}function je(D,A){const ne=D.encoding,de=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Kr||ne!==li&&(ne===dt?o===!1?e.has("EXT_sRGB")===!0&&de===an?(D.format=Kr,D.minFilter=jt,D.generateMipmaps=!1):A=Tl.sRGBToLinear(A):(de!==an||xe!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),A}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=E,this.rebindTextures=ye,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=He}function mm(u,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===ai)return 5121;if(s===Gc)return 32819;if(s===Wc)return 32820;if(s===Vc)return 5120;if(s===kc)return 5122;if(s===_l)return 5123;if(s===Hc)return 5124;if(s===ni)return 5125;if(s===Gn)return 5126;if(s===ds)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qc)return 6406;if(s===an)return 6408;if(s===Xc)return 6409;if(s===jc)return 6410;if(s===si)return 6402;if(s===Gi)return 34041;if(s===Kr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Yc)return 6403;if(s===$c)return 36244;if(s===Kc)return 33319;if(s===Zc)return 33320;if(s===Jc)return 36249;if(s===or||s===ar||s===lr||s===cr)if(r===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===or)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===or)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eo||s===To||s===Co||s===Ro)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===To)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lo||s===Po)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Lo)return r===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Po)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Io||s===Do||s===No||s===Bo||s===Fo||s===Uo||s===Oo||s===zo||s===Vo||s===ko||s===Ho||s===Go||s===Wo||s===qo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Io)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Do)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===No)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ho)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Go)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qo)return r===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===hr)return r===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===eh||s===Xo||s===jo||s===Yo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===hr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):u[s]!==void 0?u[s]:null}return{convert:i}}class gm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ii extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vm={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],d=c.position.distanceTo(l.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xm extends Ft{constructor(e,t,n,i,s,r,o,a,h,c){if(c=c!==void 0?c:si,c!==si&&c!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===si&&(n=ni),n===void 0&&c===Gi&&(n=Ui),super(null,i,s,r,o,a,c,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=a!==void 0?a:Pt,this.flipY=!1,this.generateMipmaps=!1}}class ym extends di{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,h=null,c=null,l=null,d=null,f=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const y=[],_=[],x=new Set,M=new Map,L=new Wt;L.layers.enable(1),L.viewport=new gt;const O=new Wt;O.layers.enable(2),O.viewport=new gt;const I=[L,O],w=new gm;w.layers.enable(1),w.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let T=y[E];return T===void 0&&(T=new Dr,y[E]=T),T.getTargetRaySpace()},this.getControllerGrip=function(E){let T=y[E];return T===void 0&&(T=new Dr,y[E]=T),T.getGripSpace()},this.getHand=function(E){let T=y[E];return T===void 0&&(T=new Dr,y[E]=T),T.getHandSpace()};function U(E){const T=_.indexOf(E.inputSource);if(T===-1)return;const C=y[T];C!==void 0&&C.dispatchEvent({type:E.type,data:E.inputSource})}function P(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",k);for(let E=0;E<y.length;E++){const T=_[E];T!==null&&(_[E]=null,y[E].disconnect(T))}b=null,N=null,e.setRenderTarget(m),f=null,d=null,l=null,i=null,p=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){s=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(E){h=E},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(E){if(i=E,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",P),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const T={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,T),i.updateRenderState({baseLayer:f}),p=new ci(f.framebufferWidth,f.framebufferHeight,{format:an,type:ai,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let T=null,C=null,G=null;v.depth&&(G=v.stencil?35056:33190,T=v.stencil?Gi:si,C=v.stencil?Ui:ni);const F={colorFormat:32856,depthFormat:G,scaleFactor:s};l=new XRWebGLBinding(i,t),d=l.createProjectionLayer(F),i.updateRenderState({layers:[d]}),p=new ci(d.textureWidth,d.textureHeight,{format:an,type:ai,depthTexture:new xm(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,T),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const te=e.properties.get(p);te.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(a),h=null,r=await i.requestReferenceSpace(o),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(E){for(let T=0;T<E.removed.length;T++){const C=E.removed[T],G=_.indexOf(C);G>=0&&(_[G]=null,y[G].disconnect(C))}for(let T=0;T<E.added.length;T++){const C=E.added[T];let G=_.indexOf(C);if(G===-1){for(let te=0;te<y.length;te++)if(te>=_.length){_.push(C),G=te;break}else if(_[te]===null){_[te]=C,G=te;break}if(G===-1)break}const F=y[G];F&&F.connect(C)}}const X=new K,ie=new K;function H(E,T,C){X.setFromMatrixPosition(T.matrixWorld),ie.setFromMatrixPosition(C.matrixWorld);const G=X.distanceTo(ie),F=T.projectionMatrix.elements,te=C.projectionMatrix.elements,Y=F[14]/(F[10]-1),J=F[14]/(F[10]+1),se=(F[9]+1)/F[5],Ee=(F[9]-1)/F[5],pe=(F[8]-1)/F[0],ye=(te[8]+1)/te[0],he=Y*pe,ve=Y*ye,Ge=G/(-pe+ye),Ue=Ge*-pe;T.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Ue),E.translateZ(Ge),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();const He=Y+Ge,Ae=J+Ge,je=he-Ue,D=ve+(G-Ue),A=se*J/Ae*He,ne=Ee*J/Ae*He;E.projectionMatrix.makePerspective(je,D,A,ne,He,Ae),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}function B(E,T){T===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(T.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(i===null)return;w.near=O.near=L.near=E.near,w.far=O.far=L.far=E.far,(b!==w.near||N!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,N=w.far);const T=E.parent,C=w.cameras;B(w,T);for(let G=0;G<C.length;G++)B(C[G],T);C.length===2?H(w,L,O):w.projectionMatrix.copy(L.projectionMatrix),ee(E,w,T)};function ee(E,T,C){C===null?E.matrix.copy(T.matrixWorld):(E.matrix.copy(C.matrixWorld),E.matrix.invert(),E.matrix.multiply(T.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0);const G=E.children;for(let F=0,te=G.length;F<te;F++)G[F].updateMatrixWorld(!0);E.projectionMatrix.copy(T.projectionMatrix),E.projectionMatrixInverse.copy(T.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=qi*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return a},this.setFoveation=function(E){a=E,d!==null&&(d.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.getPlanes=function(){return x};let $=null;function V(E,T){if(c=T.getViewerPose(h||r),g=T,c!==null){const C=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let G=!1;C.length!==w.cameras.length&&(w.cameras.length=0,G=!0);for(let F=0;F<C.length;F++){const te=C[F];let Y=null;if(f!==null)Y=f.getViewport(te);else{const se=l.getViewSubImage(d,te);Y=se.viewport,F===0&&(e.setRenderTargetTextures(p,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(p))}let J=I[F];J===void 0&&(J=new Wt,J.layers.enable(F),J.viewport=new gt,I[F]=J),J.matrix.fromArray(te.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(te.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Y.x,Y.y,Y.width,Y.height),F===0&&(w.matrix.copy(J.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),G===!0&&w.cameras.push(J)}}for(let C=0;C<y.length;C++){const G=_[C],F=y[C];G!==null&&F!==void 0&&F.update(G,T,h||r)}if($&&$(E,T),T.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:T.detectedPlanes});let C=null;for(const G of x)T.detectedPlanes.has(G)||(C===null&&(C=[]),C.push(G));if(C!==null)for(const G of C)x.delete(G),M.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of T.detectedPlanes)if(!x.has(G))x.add(G),M.set(G,T.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const F=M.get(G);G.lastChangedTime>F&&(M.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}g=null}const q=new Ul;q.setAnimationLoop(V),this.setAnimationLoop=function(E){$=E},this.dispose=function(){}}}function _m(u,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nl(u)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),l(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,y,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=u.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mm(u,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?u.getParameter(35375):0;function a(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function h(y,_){let x=i[y.id];x===void 0&&(g(y),x=c(y),i[y.id]=x,y.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(y,M);const L=e.render.frame;s[y.id]!==L&&(d(y),s[y.id]=L)}function c(y){const _=l();y.__bindingPointIndex=_;const x=u.createBuffer(),M=y.__size,L=y.usage;return u.bindBuffer(35345,x),u.bufferData(35345,M,L),u.bindBuffer(35345,null),u.bindBufferBase(35345,_,x),x}function l(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,M=y.__cache;u.bindBuffer(35345,_);for(let L=0,O=x.length;L<O;L++){const I=x[L];if(f(I,L,M)===!0){const w=I.__offset,b=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let U=0;U<b.length;U++){const P=b[U],k=v(P);typeof P=="number"?(I.__data[0]=P,u.bufferSubData(35345,w+N,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=P.elements[0],I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=P.elements[0],I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=P.elements[0]):(P.toArray(I.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}u.bufferSubData(35345,w,I.__data)}}u.bindBuffer(35345,null)}function f(y,_,x){const M=y.value;if(x[_]===void 0){if(typeof M=="number")x[_]=M;else{const L=Array.isArray(M)?M:[M],O=[];for(let I=0;I<L.length;I++)O.push(L[I].clone());x[_]=O}return!0}else if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const L=Array.isArray(x[_])?x[_]:[x[_]],O=Array.isArray(M)?M:[M];for(let I=0;I<L.length;I++){const w=L[I];if(w.equals(O[I])===!1)return w.copy(O[I]),!0}}return!1}function g(y){const _=y.uniforms;let x=0;const M=16;let L=0;for(let O=0,I=_.length;O<I;O++){const w=_[O],b={boundary:0,storage:0},N=Array.isArray(w.value)?w.value:[w.value];for(let U=0,P=N.length;U<P;U++){const k=N[U],X=v(k);b.boundary+=X.boundary,b.storage+=X.storage}if(w.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,O>0){L=x%M;const U=M-L;L!==0&&U-b.boundary<0&&(x+=M-L,w.__offset=x)}x+=b.storage}return L=x%M,L>0&&(x+=M-L),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),u.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const y in i)u.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:a,update:h,dispose:p}}function wm(){const u=ms("canvas");return u.style.display="block",u}class Hl{constructor(e={}){const{canvas:t=wm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;let f=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=li,this.useLegacyLights=!0,this.toneMapping=Pn,this.toneMappingExposure=1;const p=this;let y=!1,_=0,x=0,M=null,L=-1,O=null;const I=new gt,w=new gt;let b=null,N=t.width,U=t.height,P=1,k=null,X=null;const ie=new gt(0,0,N,U),H=new gt(0,0,N,U);let B=!1;const ee=new lo;let $=!1,V=!1,q=null;const E=new st,T=new K,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return M===null?P:1}let F=n;function te(S,R){for(let j=0;j<S.length;j++){const z=S[j],Q=t.getContext(z,R);if(Q!==null)return Q}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),F===null){const R=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&R.shift(),F=te(R,S),F===null)throw te(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Y,J,se,Ee,pe,ye,he,ve,Ge,Ue,He,Ae,je,D,A,ne,de,xe,_e,W,me,re,Re,Be;function Oe(){Y=new Df(F),J=new Tf(F,Y,e),Y.init(J),re=new mm(F,Y,J),se=new fm(F,Y,J),Ee=new Ff,pe=new Qp,ye=new pm(F,Y,se,pe,J,re,Ee),he=new Rf(p),ve=new If(p),Ge=new jh(F,J),Re=new Af(F,Y,Ge,J),Ue=new Nf(F,Ge,Ee,Re),He=new Vf(F,Ue,Ge,Ee),_e=new zf(F,J,ye),ne=new Cf(pe),Ae=new Jp(p,he,ve,Y,J,Re,ne),je=new _m(p,pe),D=new tm,A=new am(Y,J),xe=new Sf(p,he,ve,se,He,d,a),de=new dm(p,He,J),Be=new Mm(F,Ee,J,se),W=new Ef(F,Y,Ee,J),me=new Bf(F,Y,Ee,J),Ee.programs=Ae.programs,p.capabilities=J,p.extensions=Y,p.properties=pe,p.renderLists=D,p.shadowMap=de,p.state=se,p.info=Ee}Oe();const Pe=new ym(p,F);this.xr=Pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=Y.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Y.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(S){S!==void 0&&(P=S,this.setSize(N,U,!1))},this.getSize=function(S){return S.set(N,U)},this.setSize=function(S,R,j=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,U=R,t.width=Math.floor(S*P),t.height=Math.floor(R*P),j===!0&&(t.style.width=S+"px",t.style.height=R+"px"),this.setViewport(0,0,S,R)},this.getDrawingBufferSize=function(S){return S.set(N*P,U*P).floor()},this.setDrawingBufferSize=function(S,R,j){N=S,U=R,P=j,t.width=Math.floor(S*j),t.height=Math.floor(R*j),this.setViewport(0,0,S,R)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,R,j,z){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,R,j,z),se.viewport(I.copy(ie).multiplyScalar(P).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,R,j,z){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,R,j,z),se.scissor(w.copy(H).multiplyScalar(P).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(S){se.setScissorTest(B=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,R=!0,j=!0){let z=0;S&&(z|=16384),R&&(z|=256),j&&(z|=1024),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),D.dispose(),A.dispose(),pe.dispose(),he.dispose(),ve.dispose(),He.dispose(),Re.dispose(),Be.dispose(),Ae.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ke),Pe.removeEventListener("sessionend",lt),q&&(q.dispose(),q=null),ut.stop()};function Ve(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Ee.autoReset,R=de.enabled,j=de.autoUpdate,z=de.needsUpdate,Q=de.type;Oe(),Ee.autoReset=S,de.enabled=R,de.autoUpdate=j,de.needsUpdate=z,de.type=Q}function Ye(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const R=S.target;R.removeEventListener("dispose",at),Z(R)}function Z(S){ue(S),pe.remove(S)}function ue(S){const R=pe.get(S).programs;R!==void 0&&(R.forEach(function(j){Ae.releaseProgram(j)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,R,j,z,Q,le){R===null&&(R=C);const ae=Q.isMesh&&Q.matrixWorld.determinant()<0,ge=qe(S,R,j,z,Q);se.setMaterial(z,ae);let Se=j.index,Le=1;z.wireframe===!0&&(Se=Ue.getWireframeAttribute(j),Le=2);const ce=j.drawRange,Ie=j.attributes.position;let ze=ce.start*Le,it=(ce.start+ce.count)*Le;le!==null&&(ze=Math.max(ze,le.start*Le),it=Math.min(it,(le.start+le.count)*Le)),Se!==null?(ze=Math.max(ze,0),it=Math.min(it,Se.count)):Ie!=null&&(ze=Math.max(ze,0),it=Math.min(it,Ie.count));const Xe=it-ze;if(Xe<0||Xe===1/0)return;Re.setup(Q,z,ge,j,Se);let Ze,Fe=W;if(Se!==null&&(Ze=Ge.get(Se),Fe=me,Fe.setIndex(Ze)),Q.isMesh)z.wireframe===!0?(se.setLineWidth(z.wireframeLinewidth*G()),Fe.setMode(1)):Fe.setMode(4);else if(Q.isLine){let $e=z.linewidth;$e===void 0&&($e=1),se.setLineWidth($e*G()),Q.isLineSegments?Fe.setMode(1):Q.isLineLoop?Fe.setMode(2):Fe.setMode(3)}else Q.isPoints?Fe.setMode(0):Q.isSprite&&Fe.setMode(4);if(Q.isInstancedMesh)Fe.renderInstances(ze,Xe,Q.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ut=Math.min(j.instanceCount,$e);Fe.renderInstances(ze,Xe,Ut)}else Fe.render(ze,Xe)},this.compile=function(S,R){function j(z,Q,le){z.transparent===!0&&z.side===fn&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,Me(z,Q,le),z.side=Dn,z.needsUpdate=!0,Me(z,Q,le),z.side=fn):Me(z,Q,le)}g=A.get(S),g.init(),m.push(g),S.traverseVisible(function(z){z.isLight&&z.layers.test(R.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights(p.useLegacyLights),S.traverse(function(z){const Q=z.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const ae=Q[le];j(ae,S,z)}else j(Q,S,z)}),m.pop(),g=null};let we=null;function Ce(S){we&&we(S)}function ke(){ut.stop()}function lt(){ut.start()}const ut=new Ul;ut.setAnimationLoop(Ce),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(S){we=S,Pe.setAnimationLoop(S),S===null?ut.stop():ut.start()},Pe.addEventListener("sessionstart",ke),Pe.addEventListener("sessionend",lt),this.render=function(S,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(R),R=Pe.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,R,M),g=A.get(S,m.length),g.init(),m.push(g),E.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ee.setFromProjectionMatrix(E),V=this.localClippingEnabled,$=ne.init(this.clippingPlanes,V),f=D.get(S,v.length),f.init(),v.push(f),yt(S,R,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(k,X),$===!0&&ne.beginShadows();const j=g.state.shadowsArray;if(de.render(j,S,R),$===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(f,S),g.setupLights(p.useLegacyLights),R.isArrayCamera){const z=R.cameras;for(let Q=0,le=z.length;Q<le;Q++){const ae=z[Q];Vt(f,S,ae,ae.viewport)}}else Vt(f,S,R);M!==null&&(ye.updateMultisampleRenderTarget(M),ye.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(p,S,R),Re.resetDefaultState(),L=-1,O=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?f=v[v.length-1]:f=null};function yt(S,R,j,z){if(S.visible===!1)return;if(S.layers.test(R.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(R);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){z&&T.setFromMatrixPosition(S.matrixWorld).applyMatrix4(E);const ae=He.update(S),ge=S.material;ge.visible&&f.push(S,ae,ge,j,T.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ee.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ee.render.frame),!S.frustumCulled||ee.intersectsObject(S))){z&&T.setFromMatrixPosition(S.matrixWorld).applyMatrix4(E);const ae=He.update(S),ge=S.material;if(Array.isArray(ge)){const Se=ae.groups;for(let Le=0,ce=Se.length;Le<ce;Le++){const Ie=Se[Le],ze=ge[Ie.materialIndex];ze&&ze.visible&&f.push(S,ae,ze,j,T.z,Ie)}}else ge.visible&&f.push(S,ae,ge,j,T.z,null)}}const le=S.children;for(let ae=0,ge=le.length;ae<ge;ae++)yt(le[ae],R,j,z)}function Vt(S,R,j,z){const Q=S.opaque,le=S.transmissive,ae=S.transparent;g.setupLightsView(j),$===!0&&ne.setGlobalState(p.clippingPlanes,j),le.length>0&&et(Q,le,R,j),z&&se.viewport(I.copy(z)),Q.length>0&&oe(Q,R,j),le.length>0&&oe(le,R,j),ae.length>0&&oe(ae,R,j),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function et(S,R,j,z){if(q===null){const ge=J.isWebGL2;q=new ci(1024,1024,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?ds:ai,minFilter:oi,samples:ge&&o===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(q),p.clear();const le=p.toneMapping;p.toneMapping=Pn,oe(S,j,z),ye.updateMultisampleRenderTarget(q),ye.updateRenderTargetMipmap(q);let ae=!1;for(let ge=0,Se=R.length;ge<Se;ge++){const Le=R[ge],ce=Le.object,Ie=Le.geometry,ze=Le.material,it=Le.group;if(ze.side===fn&&ce.layers.test(z.layers)){const Xe=ze.side;ze.side=$t,ze.needsUpdate=!0,fe(ce,j,z,Ie,ze,it),ze.side=Xe,ze.needsUpdate=!0,ae=!0}}ae===!0&&(ye.updateMultisampleRenderTarget(q),ye.updateRenderTargetMipmap(q)),p.setRenderTarget(Q),p.toneMapping=le}function oe(S,R,j){const z=R.isScene===!0?R.overrideMaterial:null;for(let Q=0,le=S.length;Q<le;Q++){const ae=S[Q],ge=ae.object,Se=ae.geometry,Le=z===null?ae.material:z,ce=ae.group;ge.layers.test(j.layers)&&fe(ge,R,j,Se,Le,ce)}}function fe(S,R,j,z,Q,le){S.onBeforeRender(p,R,j,z,Q,le),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(p,R,j,z,S,le),Q.transparent===!0&&Q.side===fn&&Q.forceSinglePass===!1?(Q.side=$t,Q.needsUpdate=!0,p.renderBufferDirect(j,R,z,Q,S,le),Q.side=Dn,Q.needsUpdate=!0,p.renderBufferDirect(j,R,z,Q,S,le),Q.side=fn):p.renderBufferDirect(j,R,z,Q,S,le),S.onAfterRender(p,R,j,z,Q,le)}function Me(S,R,j){R.isScene!==!0&&(R=C);const z=pe.get(S),Q=g.state.lights,le=g.state.shadowsArray,ae=Q.state.version,ge=Ae.getParameters(S,Q.state,le,R,j),Se=Ae.getProgramCacheKey(ge);let Le=z.programs;z.environment=S.isMeshStandardMaterial?R.environment:null,z.fog=R.fog,z.envMap=(S.isMeshStandardMaterial?ve:he).get(S.envMap||z.environment),Le===void 0&&(S.addEventListener("dispose",at),Le=new Map,z.programs=Le);let ce=Le.get(Se);if(ce!==void 0){if(z.currentProgram===ce&&z.lightsStateVersion===ae)return be(S,ge),ce}else ge.uniforms=Ae.getUniforms(S),S.onBuild(j,ge,p),S.onBeforeCompile(ge,p),ce=Ae.acquireProgram(ge,Se),Le.set(Se,ce),z.uniforms=ge.uniforms;const Ie=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=ne.uniform),be(S,ge),z.needsLights=Te(S),z.lightsStateVersion=ae,z.needsLights&&(Ie.ambientLightColor.value=Q.state.ambient,Ie.lightProbe.value=Q.state.probe,Ie.directionalLights.value=Q.state.directional,Ie.directionalLightShadows.value=Q.state.directionalShadow,Ie.spotLights.value=Q.state.spot,Ie.spotLightShadows.value=Q.state.spotShadow,Ie.rectAreaLights.value=Q.state.rectArea,Ie.ltc_1.value=Q.state.rectAreaLTC1,Ie.ltc_2.value=Q.state.rectAreaLTC2,Ie.pointLights.value=Q.state.point,Ie.pointLightShadows.value=Q.state.pointShadow,Ie.hemisphereLights.value=Q.state.hemi,Ie.directionalShadowMap.value=Q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ie.spotShadowMap.value=Q.state.spotShadowMap,Ie.spotLightMatrix.value=Q.state.spotLightMatrix,Ie.spotLightMap.value=Q.state.spotLightMap,Ie.pointShadowMap.value=Q.state.pointShadowMap,Ie.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ze=ce.getUniforms(),it=$s.seqWithValue(ze.seq,Ie);return z.currentProgram=ce,z.uniformsList=it,ce}function be(S,R){const j=pe.get(S);j.outputEncoding=R.outputEncoding,j.instancing=R.instancing,j.skinning=R.skinning,j.morphTargets=R.morphTargets,j.morphNormals=R.morphNormals,j.morphColors=R.morphColors,j.morphTargetsCount=R.morphTargetsCount,j.numClippingPlanes=R.numClippingPlanes,j.numIntersection=R.numClipIntersection,j.vertexAlphas=R.vertexAlphas,j.vertexTangents=R.vertexTangents,j.toneMapping=R.toneMapping}function qe(S,R,j,z,Q){R.isScene!==!0&&(R=C),ye.resetTextureUnits();const le=R.fog,ae=z.isMeshStandardMaterial?R.environment:null,ge=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:li,Se=(z.isMeshStandardMaterial?ve:he).get(z.envMap||ae),Le=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ce=!!z.normalMap&&!!j.attributes.tangent,Ie=!!j.morphAttributes.position,ze=!!j.morphAttributes.normal,it=!!j.morphAttributes.color,Xe=z.toneMapped?p.toneMapping:Pn,Ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=Ze!==void 0?Ze.length:0,$e=pe.get(z),Ut=g.state.lights;if($===!0&&(V===!0||S!==O)){const ft=S===O&&z.id===L;ne.setState(z,S,ft)}let ct=!1;z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ut.state.version||$e.outputEncoding!==ge||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Se||z.fog===!0&&$e.fog!==le||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ne.numPlanes||$e.numIntersection!==ne.numIntersection)||$e.vertexAlphas!==Le||$e.vertexTangents!==ce||$e.morphTargets!==Ie||$e.morphNormals!==ze||$e.morphColors!==it||$e.toneMapping!==Xe||J.isWebGL2===!0&&$e.morphTargetsCount!==Fe)&&(ct=!0):(ct=!0,$e.__version=z.version);let It=$e.currentProgram;ct===!0&&(It=Me(z,R,Q));let Dt=!1,ht=!1,Zt=!1;const tt=It.getUniforms(),Nt=$e.uniforms;if(se.useProgram(It.program)&&(Dt=!0,ht=!0,Zt=!0),z.id!==L&&(L=z.id,ht=!0),Dt||O!==S){if(tt.setValue(F,"projectionMatrix",S.projectionMatrix),J.logarithmicDepthBuffer&&tt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),O!==S&&(O=S,ht=!0,Zt=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const ft=tt.map.cameraPosition;ft!==void 0&&ft.setValue(F,T.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&tt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Q.isSkinnedMesh)&&tt.setValue(F,"viewMatrix",S.matrixWorldInverse)}if(Q.isSkinnedMesh){tt.setOptional(F,Q,"bindMatrix"),tt.setOptional(F,Q,"bindMatrixInverse");const ft=Q.skeleton;ft&&(J.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),tt.setValue(F,"boneTexture",ft.boneTexture,ye),tt.setValue(F,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ct=j.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0&&J.isWebGL2===!0)&&_e.update(Q,j,It),(ht||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,tt.setValue(F,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Nt.envMap.value=Se,Nt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),ht&&(tt.setValue(F,"toneMappingExposure",p.toneMappingExposure),$e.needsLights&&De(Nt,Zt),le&&z.fog===!0&&je.refreshFogUniforms(Nt,le),je.refreshMaterialUniforms(Nt,z,P,U,q),$s.upload(F,$e.uniformsList,Nt,ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($s.upload(F,$e.uniformsList,Nt,ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&tt.setValue(F,"center",Q.center),tt.setValue(F,"modelViewMatrix",Q.modelViewMatrix),tt.setValue(F,"normalMatrix",Q.normalMatrix),tt.setValue(F,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ft=z.uniformsGroups;for(let bt=0,Xt=ft.length;bt<Xt;bt++)if(J.isWebGL2){const nn=ft[bt];Be.update(nn,It),Be.bind(nn,It)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return It}function De(S,R){S.ambientLightColor.needsUpdate=R,S.lightProbe.needsUpdate=R,S.directionalLights.needsUpdate=R,S.directionalLightShadows.needsUpdate=R,S.pointLights.needsUpdate=R,S.pointLightShadows.needsUpdate=R,S.spotLights.needsUpdate=R,S.spotLightShadows.needsUpdate=R,S.rectAreaLights.needsUpdate=R,S.hemisphereLights.needsUpdate=R}function Te(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,R,j){pe.get(S.texture).__webglTexture=R,pe.get(S.depthTexture).__webglTexture=j;const z=pe.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,R){const j=pe.get(S);j.__webglFramebuffer=R,j.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(S,R=0,j=0){M=S,_=R,x=j;let z=!0,Q=null,le=!1,ae=!1;if(S){const Se=pe.get(S);Se.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),z=!1):Se.__webglFramebuffer===void 0?ye.setupRenderTarget(S):Se.__hasExternalTextures&&ye.rebindTextures(S,pe.get(S.texture).__webglTexture,pe.get(S.depthTexture).__webglTexture);const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ae=!0);const ce=pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Q=ce[R],le=!0):J.isWebGL2&&S.samples>0&&ye.useMultisampledRTT(S)===!1?Q=pe.get(S).__webglMultisampledFramebuffer:Q=ce,I.copy(S.viewport),w.copy(S.scissor),b=S.scissorTest}else I.copy(ie).multiplyScalar(P).floor(),w.copy(H).multiplyScalar(P).floor(),b=B;if(se.bindFramebuffer(36160,Q)&&J.drawBuffers&&z&&se.drawBuffers(S,Q),se.viewport(I),se.scissor(w),se.setScissorTest(b),le){const Se=pe.get(S.texture);F.framebufferTexture2D(36160,36064,34069+R,Se.__webglTexture,j)}else if(ae){const Se=pe.get(S.texture),Le=R||0;F.framebufferTextureLayer(36160,36064,Se.__webglTexture,j||0,Le)}L=-1},this.readRenderTargetPixels=function(S,R,j,z,Q,le,ae){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(ge=ge[ae]),ge){se.bindFramebuffer(36160,ge);try{const Se=S.texture,Le=Se.format,ce=Se.type;if(Le!==an&&re.convert(Le)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=ce===ds&&(Y.has("EXT_color_buffer_half_float")||J.isWebGL2&&Y.has("EXT_color_buffer_float"));if(ce!==ai&&re.convert(ce)!==F.getParameter(35738)&&!(ce===Gn&&(J.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=S.width-z&&j>=0&&j<=S.height-Q&&F.readPixels(R,j,z,Q,re.convert(Le),re.convert(ce),le)}finally{const Se=M!==null?pe.get(M).__webglFramebuffer:null;se.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(S,R,j=0){const z=Math.pow(2,-j),Q=Math.floor(R.image.width*z),le=Math.floor(R.image.height*z);ye.setTexture2D(R,0),F.copyTexSubImage2D(3553,j,0,0,S.x,S.y,Q,le),se.unbindTexture()},this.copyTextureToTexture=function(S,R,j,z=0){const Q=R.image.width,le=R.image.height,ae=re.convert(j.format),ge=re.convert(j.type);ye.setTexture2D(j,0),F.pixelStorei(37440,j.flipY),F.pixelStorei(37441,j.premultiplyAlpha),F.pixelStorei(3317,j.unpackAlignment),R.isDataTexture?F.texSubImage2D(3553,z,S.x,S.y,Q,le,ae,ge,R.image.data):R.isCompressedTexture?F.compressedTexSubImage2D(3553,z,S.x,S.y,R.mipmaps[0].width,R.mipmaps[0].height,ae,R.mipmaps[0].data):F.texSubImage2D(3553,z,S.x,S.y,ae,ge,R.image),z===0&&j.generateMipmaps&&F.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(S,R,j,z,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=S.max.x-S.min.x+1,ae=S.max.y-S.min.y+1,ge=S.max.z-S.min.z+1,Se=re.convert(z.format),Le=re.convert(z.type);let ce;if(z.isData3DTexture)ye.setTexture3D(z,0),ce=32879;else if(z.isDataArrayTexture)ye.setTexture2DArray(z,0),ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,z.flipY),F.pixelStorei(37441,z.premultiplyAlpha),F.pixelStorei(3317,z.unpackAlignment);const Ie=F.getParameter(3314),ze=F.getParameter(32878),it=F.getParameter(3316),Xe=F.getParameter(3315),Ze=F.getParameter(32877),Fe=j.isCompressedTexture?j.mipmaps[0]:j.image;F.pixelStorei(3314,Fe.width),F.pixelStorei(32878,Fe.height),F.pixelStorei(3316,S.min.x),F.pixelStorei(3315,S.min.y),F.pixelStorei(32877,S.min.z),j.isDataTexture||j.isData3DTexture?F.texSubImage3D(ce,Q,R.x,R.y,R.z,le,ae,ge,Se,Le,Fe.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ce,Q,R.x,R.y,R.z,le,ae,ge,Se,Fe.data)):F.texSubImage3D(ce,Q,R.x,R.y,R.z,le,ae,ge,Se,Le,Fe),F.pixelStorei(3314,Ie),F.pixelStorei(32878,ze),F.pixelStorei(3316,it),F.pixelStorei(3315,Xe),F.pixelStorei(32877,Ze),Q===0&&z.generateMipmaps&&F.generateMipmap(ce),se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ye.setTextureCube(S,0):S.isData3DTexture?ye.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ye.setTexture2DArray(S,0):ye.setTexture2D(S,0),se.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,se.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class bm extends Hl{}bm.prototype.isWebGL1Renderer=!0;class Sm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Am{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$r,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new K;class uo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fa=new K,Ua=new gt,Oa=new gt,Em=new K,za=new st,Ii=new K;class Tm extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ii.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ii),this.boundingBox.expandByPoint(Ii)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ii.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ii),this.boundingSphere.expandByPoint(Ii)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ua.fromBufferAttribute(i.attributes.skinIndex,e),Oa.fromBufferAttribute(i.attributes.skinWeight,e),Fa.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Oa.getComponent(s);if(r!==0){const o=Ua.getComponent(s);za.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Em.copy(Fa).applyMatrix4(za),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gl extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cm extends Ft{constructor(e=null,t=1,n=1,i,s,r,o,a,h=Pt,c=Pt,l,d){super(null,r,o,a,h,c,i,s,l,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=new st,Rm=new st;class fo{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Rm;Va.multiplyMatrices(o,t[s]),Va.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Sl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cm(t,e,e,an,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Gl),this.bones.push(r),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ka extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new st,Ha=new st,Hs=[],Ga=new Nn,Lm=new st,ns=new At,is=new Bn;class Pm extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Ga.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Ga)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),is.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Di),Ha.multiplyMatrices(n,Di),ns.matrixWorld=Ha,ns.raycast(e,Hs);for(let r=0,o=Hs.length;r<o;r++){const a=Hs[r];a.instanceId=s,a.object=this,t.push(a)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class po extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new K,qa=new K,Xa=new st,Nr=new ao,Gs=new Bn;class mo extends xt{constructor(e=new ln,t=new po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wa.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(qa);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;Xa.copy(i).invert(),Nr.copy(e.ray).applyMatrix4(Xa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,h=new K,c=new K,l=new K,d=new K,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let _=p,x=y-1;_<x;_+=f){const M=g.getX(_),L=g.getX(_+1);if(h.fromBufferAttribute(m,M),c.fromBufferAttribute(m,L),Nr.distanceSqToSegment(h,c,d,l)>a)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let _=p,x=y-1;_<x;_+=f){if(h.fromBufferAttribute(m,_),c.fromBufferAttribute(m,_+1),Nr.distanceSqToSegment(h,c,d,l)>a)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ja=new K,Ya=new K;class Wl extends mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ja.fromBufferAttribute(t,i),Ya.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ja.distanceTo(Ya);e.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Im extends mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ql extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $a=new st,Qr=new ao,Ws=new Bn,qs=new K;class Dm extends xt{constructor(e=new ln,t=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;$a.copy(i).invert(),Qr.copy(e.ray).applyMatrix4($a);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,h=n.index,l=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,v=f;g<v;g++){const m=h.getX(g);qs.fromBufferAttribute(l,m),Ka(qs,m,a,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=d,v=f;g<v;g++)qs.fromBufferAttribute(l,g),Ka(qs,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ka(u,e,t,n,i,s,r){const o=Qr.distanceSqToPoint(u);if(o<t){const a=new K;Qr.closestPointToPoint(u,a),a.applyMatrix4(n);const h=i.ray.origin.distanceTo(a);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class sr extends ln{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let h=0;const c=[],l=new K,d=new K,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&r===0?x=.5/t:p===n&&a===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const L=M/t;l.x=-e*Math.cos(i+L*s)*Math.sin(r+_*o),l.y=e*Math.cos(r+_*o),l.z=e*Math.sin(i+L*s)*Math.sin(r+_*o),g.push(l.x,l.y,l.z),d.copy(l).normalize(),v.push(d.x,d.y,d.z),m.push(L+x,1-_),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=c[p][y+1],x=c[p][y],M=c[p+1][y],L=c[p+1][y+1];(p!==0||r>0)&&f.push(_,x,L),(p!==n-1||a<Math.PI)&&f.push(x,M,L)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class In extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends In{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Vn(u,e,t){return Xl(u)?new u.constructor(u.subarray(e,t!==void 0?t:u.length)):u.slice(e,t)}function Xs(u,e,t){return!u||!t&&u.constructor===e?u:typeof e.BYTES_PER_ELEMENT=="number"?new e(u):Array.prototype.slice.call(u)}function Xl(u){return ArrayBuffer.isView(u)&&!(u instanceof DataView)}function Nm(u){function e(i,s){return u[i]-u[s]}const t=u.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Za(u,e,t){const n=u.length,i=new u.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let a=0;a!==e;++a)i[r++]=u[o+a]}return i}function jl(u,e,t,n){let i=1,s=u[0];for(;s!==void 0&&s[n]===void 0;)s=u[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=u[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=u[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=u[i++];while(s!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bm extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:s=e,o=2*t-n;break;case Zo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ko:r=e,a=2*n-t;break;case Zo:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}const h=(n-t)*.5,c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(a-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,h=a-o,c=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let M=0;M!==o;++M)s[M]=p*r[c+M]+y*r[h+M]+_*r[a+M]+x*r[l+M];return s}}class Fm extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,h=a-o,c=(n-t)/(i-t),l=1-c;for(let d=0;d!==o;++d)s[d]=r[h+d]*l+r[a+d]*c;return s}}class Um extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case ur:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return ur}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Vn(n,s,r),this.values=Vn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0&&Xl(i))for(let o=0,a=i.length;o!==a;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=Vn(this.times),t=Vn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ur,s=e.length-1;let r=1;for(let o=1;o<s;++o){let a=!1;const h=e[o],c=e[o+1];if(h!==c&&(o!==1||h!==e[0]))if(i)a=!0;else{const l=o*n,d=l-n,f=l+n;for(let g=0;g!==n;++g){const v=t[l+g];if(v!==t[d+g]||v!==t[f+g]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const l=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[l+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,h=0;h!==n;++h)t[a+h]=t[o+h];++r}return r!==e.length?(this.times=Vn(e,0,r),this.values=Vn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Vn(this.times,0),t=Vn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Wi;class Ki extends wn{}Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=fs;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Yl extends wn{}Yl.prototype.ValueTypeName="color";class gs extends wn{}gs.prototype.ValueTypeName="number";class Om extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let h=e*o;for(let c=h+o;h!==c;h+=4)Mn.slerpFlat(s,0,r,h-o,r,h,a);return s}}class ui extends wn{InterpolantFactoryMethodLinear(e){return new Om(this.times,this.values,this.getValueSize(),e)}}ui.prototype.ValueTypeName="quaternion";ui.prototype.DefaultInterpolation=Wi;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends wn{}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=fs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends wn{}vs.prototype.ValueTypeName="vector";class zm{constructor(e,t=-1,n,i=th){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(km(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let a=[],h=[];a.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);const c=Nm(a);a=Za(a,1,c),h=Za(h,1,c),!i&&a[0]===0&&(a.push(s),h.push(h[0])),r.push(new gs(".morphTargetInfluences["+t[o].name+"]",a,h).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const h=e[o],c=h.name.match(s);if(c&&c.length>1){const l=c[1];let d=i[l];d||(i[l]=d=[]),d.push(h)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,f,g,v){if(f.length!==0){const m=[],p=[];jl(f,m,p,g),m.length!==0&&v.push(new l(d,m,p))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const h=e.hierarchy||[];for(let l=0;l<h.length;l++){const d=h[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];m.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new gs(".morphTargetInfluence["+v+"]",m,p))}a=f.length*r}else{const f=".bones["+t[l].name+"]";n(vs,f+".position",d,"pos",i),n(ui,f+".quaternion",d,"rot",i),n(vs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vm(u){switch(u.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Yl;case"quaternion":return ui;case"bool":case"boolean":return Ki;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+u)}function km(u){if(u.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vm(u.type);if(u.times===void 0){const t=[],n=[];jl(u.keys,t,n,"value"),u.times=t,u.values=n}return e.parse!==void 0?e.parse(u):new e(u.name,u.times,u.values,u.interpolation)}const ji={enabled:!1,files:{},add:function(u,e){this.enabled!==!1&&(this.files[u]=e)},get:function(u){if(this.enabled!==!1)return this.files[u]},remove:function(u){delete this.files[u]},clear:function(){this.files={}}};class Hm{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,a;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,r,o),s=!0},this.itemEnd=function(c){r++,i.onProgress!==void 0&&i.onProgress(c,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,l){return h.push(c,l),this},this.removeHandler=function(c){const l=h.indexOf(c);return l!==-1&&h.splice(l,2),this},this.getHandler=function(c){for(let l=0,d=h.length;l<d;l+=2){const f=h[l],g=h[l+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}}const Gm=new Hm;class Ms{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Rn={};class Wm extends Error{constructor(e,t){super(e),this.response=t}}class $l extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ji.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=Rn[e],l=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){l.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let L=0,O=c.length;L<O;L++){const I=c[L];I.onProgress&&I.onProgress(M)}p.enqueue(x),y()}})}}});return new Response(m)}else throw new Wm(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(a){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o===void 0)return h.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{ji.add(e,h);const c=Rn[e];delete Rn[e];for(let l=0,d=c.length;l<d;l++){const f=c[l];f.onLoad&&f.onLoad(h)}}).catch(h=>{const c=Rn[e];if(c===void 0)throw this.manager.itemError(e),h;delete Rn[e];for(let l=0,d=c.length;l<d;l++){const f=c[l];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qm extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ji.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=ms("img");function a(){c(),ji.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(l){c(),i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Xm extends Ms{constructor(e){super(e)}load(e,t,n,i){const s=new Ft,r=new qm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class rr extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Br=new st,Ja=new K,Qa=new K;class go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ja),Qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qa),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jm extends go{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ym extends rr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new jm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const el=new st,ss=new K,Fr=new K;class $m extends go{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(ss),Fr.copy(n.position),Fr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fr),n.updateMatrixWorld(),i.makeTranslation(-ss.x,-ss.y,-ss.z),el.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el)}}class Kl extends rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Km extends go{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Km}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jm extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qm extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=ji.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(a){ji.add(e,a),t&&t(a),s.manager.itemEnd(e)}).catch(function(a){i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const vo="\\[\\]\\.:\\/",eg=new RegExp("["+vo+"]","g"),xo="[^"+vo+"]",tg="[^"+vo.replace("\\.","")+"]",ng=/((?:WC+[\/:])*)/.source.replace("WC",xo),ig=/(WCOD+)?/.source.replace("WCOD",tg),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xo),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xo),og=new RegExp("^"+ng+ig+sg+rg+"$"),ag=["material","materials","bones","map"];class lg{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eg,"")}static parseTrackName(e){const t=og.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ag.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const r=e[i];if(r===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=lg;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cg extends Wl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Qe(n),i=new Qe(i);const s=t/2,r=e/t,o=e/2,a=[],h=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=r){a.push(-o,0,g,o,0,g),a.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(h,f),f+=3,v.toArray(h,f),f+=3,v.toArray(h,f),f+=3,v.toArray(h,f),f+=3}const c=new ln;c.setAttribute("position",new Kt(a,3)),c.setAttribute("color",new Kt(h,3));const l=new po({vertexColors:!0,toneMapped:!1});super(c,l),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);const nl={type:"change"},Ur={type:"start"},il={type:"end"};class hg extends di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(W){W.addEventListener("keydown",Ae),this._domElementKeyEvents=W},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nl),n.update(),s=i.NONE},this.update=function(){const W=new K,me=new Mn().setFromUnitVectors(e.up,new K(0,1,0)),re=me.clone().invert(),Re=new K,Be=new Mn,Oe=2*Math.PI;return function(){const Ve=n.object.position;W.copy(Ve).sub(n.target),W.applyQuaternion(me),o.setFromVector3(W),n.autoRotate&&s===i.NONE&&w(O()),n.enableDamping?(o.theta+=a.theta*n.dampingFactor,o.phi+=a.phi*n.dampingFactor):(o.theta+=a.theta,o.phi+=a.phi);let We=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;return isFinite(We)&&isFinite(Ye)&&(We<-Math.PI?We+=Oe:We>Math.PI&&(We-=Oe),Ye<-Math.PI?Ye+=Oe:Ye>Math.PI&&(Ye-=Oe),We<=Ye?o.theta=Math.max(We,Math.min(Ye,o.theta)):o.theta=o.theta>(We+Ye)/2?Math.max(We,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=h,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),W.setFromSpherical(o),W.applyQuaternion(re),Ve.copy(n.target).add(W),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),c.set(0,0,0)),h=1,l||Re.distanceToSquared(n.object.position)>r||8*(1-Be.dot(n.object.quaternion))>r?(n.dispatchEvent(nl),Re.copy(n.object.position),Be.copy(n.object.quaternion),l=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",ve),n.domElement.removeEventListener("wheel",He),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",ve),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ae),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new tl,a=new tl;let h=1;const c=new K;let l=!1;const d=new Je,f=new Je,g=new Je,v=new Je,m=new Je,p=new Je,y=new Je,_=new Je,x=new Je,M=[],L={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function w(W){a.theta-=W}function b(W){a.phi-=W}const N=function(){const W=new K;return function(re,Re){W.setFromMatrixColumn(Re,0),W.multiplyScalar(-re),c.add(W)}}(),U=function(){const W=new K;return function(re,Re){n.screenSpacePanning===!0?W.setFromMatrixColumn(Re,1):(W.setFromMatrixColumn(Re,0),W.crossVectors(n.object.up,W)),W.multiplyScalar(re),c.add(W)}}(),P=function(){const W=new K;return function(re,Re){const Be=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;W.copy(Oe).sub(n.target);let Pe=W.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*re*Pe/Be.clientHeight,n.object.matrix),U(2*Re*Pe/Be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(re*(n.object.right-n.object.left)/n.object.zoom/Be.clientWidth,n.object.matrix),U(Re*(n.object.top-n.object.bottom)/n.object.zoom/Be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(W){n.object.isPerspectiveCamera?h/=W:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*W)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(W){n.object.isPerspectiveCamera?h*=W:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/W)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(W){d.set(W.clientX,W.clientY)}function H(W){y.set(W.clientX,W.clientY)}function B(W){v.set(W.clientX,W.clientY)}function ee(W){f.set(W.clientX,W.clientY),g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const me=n.domElement;w(2*Math.PI*g.x/me.clientHeight),b(2*Math.PI*g.y/me.clientHeight),d.copy(f),n.update()}function $(W){_.set(W.clientX,W.clientY),x.subVectors(_,y),x.y>0?k(I()):x.y<0&&X(I()),y.copy(_),n.update()}function V(W){m.set(W.clientX,W.clientY),p.subVectors(m,v).multiplyScalar(n.panSpeed),P(p.x,p.y),v.copy(m),n.update()}function q(W){W.deltaY<0?X(I()):W.deltaY>0&&k(I()),n.update()}function E(W){let me=!1;switch(W.code){case n.keys.UP:W.ctrlKey||W.metaKey||W.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:W.ctrlKey||W.metaKey||W.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:W.ctrlKey||W.metaKey||W.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:W.ctrlKey||W.metaKey||W.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),me=!0;break}me&&(W.preventDefault(),n.update())}function T(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const W=.5*(M[0].pageX+M[1].pageX),me=.5*(M[0].pageY+M[1].pageY);d.set(W,me)}}function C(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const W=.5*(M[0].pageX+M[1].pageX),me=.5*(M[0].pageY+M[1].pageY);v.set(W,me)}}function G(){const W=M[0].pageX-M[1].pageX,me=M[0].pageY-M[1].pageY,re=Math.sqrt(W*W+me*me);y.set(0,re)}function F(){n.enableZoom&&G(),n.enablePan&&C()}function te(){n.enableZoom&&G(),n.enableRotate&&T()}function Y(W){if(M.length==1)f.set(W.pageX,W.pageY);else{const re=_e(W),Re=.5*(W.pageX+re.x),Be=.5*(W.pageY+re.y);f.set(Re,Be)}g.subVectors(f,d).multiplyScalar(n.rotateSpeed);const me=n.domElement;w(2*Math.PI*g.x/me.clientHeight),b(2*Math.PI*g.y/me.clientHeight),d.copy(f)}function J(W){if(M.length===1)m.set(W.pageX,W.pageY);else{const me=_e(W),re=.5*(W.pageX+me.x),Re=.5*(W.pageY+me.y);m.set(re,Re)}p.subVectors(m,v).multiplyScalar(n.panSpeed),P(p.x,p.y),v.copy(m)}function se(W){const me=_e(W),re=W.pageX-me.x,Re=W.pageY-me.y,Be=Math.sqrt(re*re+Re*Re);_.set(0,Be),x.set(0,Math.pow(_.y/y.y,n.zoomSpeed)),k(x.y),y.copy(_)}function Ee(W){n.enableZoom&&se(W),n.enablePan&&J(W)}function pe(W){n.enableZoom&&se(W),n.enableRotate&&Y(W)}function ye(W){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(W.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",ve)),ne(W),W.pointerType==="touch"?je(W):Ge(W))}function he(W){n.enabled!==!1&&(W.pointerType==="touch"?D(W):Ue(W))}function ve(W){de(W),M.length===0&&(n.domElement.releasePointerCapture(W.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",ve)),n.dispatchEvent(il),s=i.NONE}function Ge(W){let me;switch(W.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case pi.DOLLY:if(n.enableZoom===!1)return;H(W),s=i.DOLLY;break;case pi.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enablePan===!1)return;B(W),s=i.PAN}else{if(n.enableRotate===!1)return;ie(W),s=i.ROTATE}break;case pi.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(n.enableRotate===!1)return;ie(W),s=i.ROTATE}else{if(n.enablePan===!1)return;B(W),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ur)}function Ue(W){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(W);break;case i.DOLLY:if(n.enableZoom===!1)return;$(W);break;case i.PAN:if(n.enablePan===!1)return;V(W);break}}function He(W){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(W.preventDefault(),n.dispatchEvent(Ur),q(W),n.dispatchEvent(il))}function Ae(W){n.enabled===!1||n.enablePan===!1||E(W)}function je(W){switch(xe(W),M.length){case 1:switch(n.touches.ONE){case mi.ROTATE:if(n.enableRotate===!1)return;T(),s=i.TOUCH_ROTATE;break;case mi.PAN:if(n.enablePan===!1)return;C(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(),s=i.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ur)}function D(W){switch(xe(W),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Y(W),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;J(W),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(W),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(W),n.update();break;default:s=i.NONE}}function A(W){n.enabled!==!1&&W.preventDefault()}function ne(W){M.push(W)}function de(W){delete L[W.pointerId];for(let me=0;me<M.length;me++)if(M[me].pointerId==W.pointerId){M.splice(me,1);return}}function xe(W){let me=L[W.pointerId];me===void 0&&(me=new Je,L[W.pointerId]=me),me.set(W.pageX,W.pageY)}function _e(W){const me=W.pointerId===M[0].pointerId?M[1]:M[0];return L[me.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",ve),n.domElement.addEventListener("wheel",He,{passive:!1}),this.update()}}class Yi{static createButton(e){const t=document.createElement("button");function n(){let a=null;async function h(l){l.addEventListener("end",c),await e.xr.setSession(l),t.textContent="EXIT VR",a=l}function c(){a.removeEventListener("end",c),t.textContent="ENTER VR",a=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(a===null){const l={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",l).then(h)}else a.end()}}function i(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function s(){i(),t.textContent="VR NOT SUPPORTED"}function r(a){i(),console.warn("Exception when trying to call xr.isSessionSupported",a),t.textContent="VR NOT ALLOWED"}function o(a){a.style.position="absolute",a.style.bottom="20px",a.style.padding="12px 6px",a.style.border="1px solid #fff",a.style.borderRadius="4px",a.style.background="rgba(0,0,0,0.1)",a.style.color="#fff",a.style.font="normal 13px sans-serif",a.style.textAlign="center",a.style.opacity="0.5",a.style.outline="none",a.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(a){a?n():s(),a&&Yi.xrSessionIsGranted&&t.click()}).catch(r),t;{const a=document.createElement("a");return window.isSecureContext===!1?(a.href=document.location.href.replace(/^http:/,"https:"),a.innerHTML="WEBXR NEEDS HTTPS"):(a.href="https://immersiveweb.dev/",a.innerHTML="WEBXR NOT AVAILABLE"),a.style.left="calc(50% - 90px)",a.style.width="180px",a.style.textDecoration="none",o(a),a}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Yi.xrSessionIsGranted=!0})}}}Yi.xrSessionIsGranted=!1;Yi.registerSessionGrantedListener();function sl(u,e){if(e===nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),u;if(e===Yr||e===Ml){let t=u.getIndex();if(t===null){const r=[],o=u.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);u.setIndex(r),t=u.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),u}const n=t.count-2,i=[];if(e===Yr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=u.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),u}class Zl extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mg(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new pg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new Eg(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=eo.extractUrlBase(e),this.manager.itemStart(e);const o=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},a=new $l(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(h){try{s.parse(h,r,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},a=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Jl){try{r[ot.KHR_BINARY_GLTF]=new Tg(e)}catch(l){i&&i(l);return}s=JSON.parse(r[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(a.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Vg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const l=this.pluginCallbacks[c](h);o[l.name]=l,r[l.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const l=s.extensionsUsed[c],d=s.extensionsRequired||[];switch(l){case ot.KHR_MATERIALS_UNLIT:r[l]=new fg;break;case ot.KHR_DRACO_MESH_COMPRESSION:r[l]=new Cg(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:r[l]=new Rg;break;case ot.KHR_MESH_QUANTIZATION:r[l]=new Lg;break;default:d.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}h.setExtensions(r),h.setPlugins(o),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function ug(){let u={};return{get:function(e){return u[e]},add:function(e,t){u[e]=t},remove:function(e){delete u[e]},removeAll:function(){u={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dg{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const c=new Qe(16777215);a.color!==void 0&&c.fromArray(a.color);const l=a.range!==void 0?a.range:0;switch(a.type){case"directional":h=new Zm(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Kl(c),h.distance=l;break;case"spot":h=new Ym(c),h.distance=l,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,h.angle=a.spot.outerConeAngle,h.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return h.position.set(0,0,0),h.decay=2,Hn(h,a),a.intensity!==void 0&&(h.intensity=a.intensity),h.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class fg{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,dt))}return Promise.all(i)}}class pg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(s)}}class gg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class vg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,dt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class xg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class yg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Qe(o[0],o[1],o[2]),Promise.all(s)}}class _g{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Mg{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Qe(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,dt)),Promise.all(s)}}class wg{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class bg{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(a=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Sg{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(a=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ag{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const a=i.byteOffset||0,h=i.byteLength||0,c=i.count,l=i.byteStride,d=new Uint8Array(o,a,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,l,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(c*l);return r.decodeGltfBuffer(new Uint8Array(f),c,l,d,i.mode,i.filter),f})})}else return null}}class Eg{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==rn.TRIANGLES&&h.mode!==rn.TRIANGLE_STRIP&&h.mode!==rn.TRIANGLE_FAN&&h.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],a={};for(const h in r)o.push(this.parser.getDependency("accessor",r[h]).then(c=>(a[h]=c,a[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const c=h.pop(),l=c.isGroup?c.children:[c],d=h[0].count,f=[];for(const g of l){const v=new st,m=new K,p=new Mn,y=new K(1,1,1),_=new Pm(g.geometry,g.material,d);for(let x=0;x<d;x++)a.TRANSLATION&&m.fromBufferAttribute(a.TRANSLATION,x),a.ROTATION&&p.fromBufferAttribute(a.ROTATION,x),a.SCALE&&y.fromBufferAttribute(a.SCALE,x),_.setMatrixAt(x,v.compose(m,p,y));for(const x in a)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,a[x]);xt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return c.isGroup?(c.clear(),c.add(...f),c):f[0]}))}}const Jl="glTF",rs=12,rl={JSON:1313821514,BIN:5130562};class Tg{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rs,s=new DataView(e,rs);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===rl.JSON){const h=new Uint8Array(e,rs+r,o);this.content=n.decode(h)}else if(a===rl.BIN){const h=rs+r;this.body=e.slice(h,h+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},h={};for(const c in r){const l=to[c]||c.toLowerCase();o[l]=r[c]}for(const c in e.attributes){const l=to[c]||c.toLowerCase();if(r[c]!==void 0){const d=n.accessors[e.attributes[c]],f=zi[d.componentType];h[l]=f.name,a[l]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(l){i.decodeDracoFile(c,function(d){for(const f in d.attributes){const g=d.attributes[f],v=a[f];v!==void 0&&(g.normalized=v)}l(d)},o,h)})})}}class Rg{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Lg{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Ql extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,h=o*3,c=i-t,l=(n-t)/c,d=l*l,f=d*l,g=e*h,v=g-h,m=-2*f+3*d,p=f-d,y=1-m,_=p-d+l;for(let x=0;x!==o;x++){const M=r[v+x+o],L=r[v+x+a]*c,O=r[g+x+o],I=r[g+x]*c;s[x]=y*M+_*L+m*O+p*I}return s}}const Pg=new Mn;class Ig extends Ql{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Pg.fromArray(s).normalize().toArray(s),s}}const rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ol={9728:Pt,9729:jt,9984:jr,9985:yl,9986:Ys,9987:oi},al={33071:on,33648:Js,10497:Hi},Or={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},to={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dg={CUBICSPLINE:void 0,LINEAR:Wi,STEP:fs},zr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ng(u){return u.DefaultMaterial===void 0&&(u.DefaultMaterial=new In({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),u.DefaultMaterial}function os(u,e,t){for(const n in t.extensions)u[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(u,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(u.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bg(u,e,t){let n=!1,i=!1,s=!1;for(let h=0,c=e.length;h<c;h++){const l=e[h];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(i=!0),l.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(u);const r=[],o=[],a=[];for(let h=0,c=e.length;h<c;h++){const l=e[h];if(n){const d=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):u.attributes.position;r.push(d)}if(i){const d=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):u.attributes.normal;o.push(d)}if(s){const d=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):u.attributes.color;a.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(h){const c=h[0],l=h[1],d=h[2];return n&&(u.morphAttributes.position=c),i&&(u.morphAttributes.normal=l),s&&(u.morphAttributes.color=d),u.morphTargetsRelative=!0,u})}function Fg(u,e){if(u.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)u.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(u.morphTargetInfluences.length===t.length){u.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)u.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ug(u){const e=u.extensions&&u.extensions[ot.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ll(e.attributes):t=u.indices+":"+ll(u.attributes)+":"+u.mode,t}function ll(u){let e="";const t=Object.keys(u).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+u[t[n]]+";";return e}function no(u){switch(u){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Og(u){return u.search(/\.jpe?g($|\?)/i)>0||u.search(/^data\:image\/jpeg/)===0?"image/jpeg":u.search(/\.webp($|\?)/i)>0||u.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zg=new st;class Vg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ug,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Xm(this.options.manager):this.textureLoader=new Qm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $l(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};os(s,o,i),Hn(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[h,c]of r.children.entries())s(c,o.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(eo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Or[i.type],o=zi[i.componentType],a=i.normalized===!0,h=new o(i.count*r);return Promise.resolve(new qt(h,r,a))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],a=Or[i.type],h=zi[i.componentType],c=h.BYTES_PER_ELEMENT,l=c*a,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==l){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(y);_||(v=new h(o,p*f,i.count*f/c),_=new Am(v,f/c),t.cache.add(y,_)),m=new uo(_,a,d%f/c,g)}else o===null?v=new h(i.count*a):v=new h(o,d,i.count*a),m=new qt(v,a,g);if(i.sparse!==void 0){const p=Or.SCALAR,y=zi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new y(r[1],_,i.sparse.count*p),L=new h(r[2],x,i.sparse.count*a);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized));for(let O=0,I=M.length;O<I;O++){const w=M[O];if(m.setX(w,L[O*a]),a>=2&&m.setY(w,L[O*a+1]),a>=3&&m.setZ(w,L[O*a+2]),a>=4&&m.setW(w,L[O*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const h=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=r.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const d=(s.samplers||{})[r.sampler]||{};return c.magFilter=ol[d.magFilter]||jt,c.minFilter=ol[d.minFilter]||oi,c.wrapS=al[d.wrapS]||Hi,c.wrapT=al[d.wrapT]||Hi,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const r=i.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",h=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(l){h=!0;const d=new Blob([l],{type:r.mimeType});return a=o.createObjectURL(d),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(a).then(function(l){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Ft(v);m.needsUpdate=!0,d(m)}),t.load(eo.resolveURL(l,s.path),g,void 0,f)})}).then(function(l){return h===!0&&o.revokeObjectURL(a),l.userData.mimeType=r.mimeType||Og(r.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),l});return this.sourceCache[e]=c,c}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(r);r=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new ql,yn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new po,yn.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(o,a)),n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),s&&(a.vertexColors=!0),r&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}e.material=n}getMaterialType(){return In}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},a=s.extensions||{},h=[];if(a[ot.KHR_MATERIALS_UNLIT]){const l=i[ot.KHR_MATERIALS_UNLIT];r=l.getMaterialType(),h.push(l.extendParams(o,s,t))}else{const l=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}l.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",l.baseColorTexture,dt)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=fn);const c=s.alphaMode||zr.OPAQUE;if(c===zr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===zr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Wn&&(h.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){const l=s.normalTexture.scale;o.normalScale.set(l,l)}return s.occlusionTexture!==void 0&&r!==Wn&&(h.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Wn&&(o.emissive=new Qe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Wn&&h.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,dt)),Promise.all(h).then(function(){const l=new r(o);return s.name&&(l.name=s.name),Hn(l,s),t.associations.set(l,{materials:e}),s.extensions&&os(i,l,s),l})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return cl(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const h=e[o],c=Ug(h),l=i[c];if(l)r.push(l.promise);else{let d;h.extensions&&h.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=cl(new ln,h,t),i[c]={primitive:h,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,h=r.length;a<h;a++){const c=r[a].material===void 0?Ng(this.cache):this.getDependency("material",r[a].material);o.push(c)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const h=a.slice(0,a.length-1),c=a[a.length-1],l=[];for(let f=0,g=c.length;f<g;f++){const v=c[f],m=r[f];let p;const y=h[f];if(m.mode===rn.TRIANGLES||m.mode===rn.TRIANGLE_STRIP||m.mode===rn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Tm(v,y):new At(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===rn.TRIANGLE_STRIP?p.geometry=sl(p.geometry,Ml):m.mode===rn.TRIANGLE_FAN&&(p.geometry=sl(p.geometry,Yr));else if(m.mode===rn.LINES)p=new Wl(v,y);else if(m.mode===rn.LINE_STRIP)p=new mo(v,y);else if(m.mode===rn.LINE_LOOP)p=new Im(v,y);else if(m.mode===rn.POINTS)p=new Dm(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fg(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Hn(p,s),m.extensions&&os(i,p,m),t.assignFinalMaterial(p),l.push(p)}for(let f=0,g=l.length;f<g;f++)t.associations.set(l[f],{meshes:e,primitives:f});if(l.length===1)return l[0];const d=new ii;t.associations.set(d,{meshes:e});for(let f=0,g=l.length;f<g;f++)d.add(l[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(_h.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],a=[];for(let h=0,c=r.length;h<c;h++){const l=r[h];if(l){o.push(l);const d=new st;s!==null&&d.fromArray(s.array,h*16),a.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new fo(o,a)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],r=[],o=[],a=[],h=[];for(let c=0,l=n.channels.length;c<l;c++){const d=n.channels[c],f=n.samplers[d.sampler],g=d.target,v=g.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;g.node!==void 0&&(s.push(this.getDependency("node",v)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),a.push(f),h.push(g))}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(h)]).then(function(c){const l=c[0],d=c[1],f=c[2],g=c[3],v=c[4],m=[];for(let p=0,y=l.length;p<y;p++){const _=l[p],x=d[p],M=f[p],L=g[p],O=v[p];if(_===void 0)continue;_.updateMatrix();let I;switch(kn[O.path]){case kn.weights:I=gs;break;case kn.rotation:I=ui;break;case kn.position:case kn.scale:default:I=vs;break}const w=_.name?_.name:_.uuid,b=L.interpolation!==void 0?Dg[L.interpolation]:Wi,N=[];kn[O.path]===kn.weights?_.traverse(function(P){P.morphTargetInfluences&&N.push(P.name?P.name:P.uuid)}):N.push(w);let U=M.array;if(M.normalized){const P=no(U.constructor),k=new Float32Array(U.length);for(let X=0,ie=U.length;X<ie;X++)k[X]=U[X]*P;U=k}for(let P=0,k=N.length;P<k;P++){const X=new I(N[P]+"."+kn[O.path],x.array,U,b);L.interpolation==="CUBICSPLINE"&&(X.createInterpolant=function(H){const B=this instanceof ui?Ig:Ql;return new B(this.times,this.values,this.getValueSize()/3,H)},X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(X)}}return new zm(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let a=0,h=i.weights.length;a<h;a++)o.morphTargetInfluences[a]=i.weights[a]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let h=0,c=o.length;h<c;h++)r.push(n.getDependency("node",o[h]));const a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),a]).then(function(h){const c=h[0],l=h[1],d=h[2];d!==null&&c.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zg)});for(let f=0,g=l.length;f<g;f++)c.add(l[f]);return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],a=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return a&&o.push(a),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let c;if(s.isBone===!0?c=new Gl:h.length>1?c=new ii:h.length===1?c=h[0]:c=new xt,c!==h[0])for(let l=0,d=h.length;l<d;l++)c.add(h[l]);if(s.name&&(c.userData.name=s.name,c.name=r),Hn(c,s),s.extensions&&os(n,c,s),s.matrix!==void 0){const l=new st;l.fromArray(s.matrix),c.applyMatrix4(l)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return i.associations.has(c)||i.associations.set(c,{}),i.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ii;n.name&&(s.name=i.createUniqueName(n.name)),Hn(s,n),n.extensions&&os(t,s,n);const r=n.nodes||[],o=[];for(let a=0,h=r.length;a<h;a++)o.push(i.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let c=0,l=a.length;c<l;c++)s.add(a[c]);const h=c=>{const l=new Map;for(const[d,f]of i.associations)(d instanceof yn||d instanceof Ft)&&l.set(d,f);return c.traverse(d=>{const f=i.associations.get(d);f!=null&&l.set(d,f)}),l};return i.associations=h(s),s})}}function kg(u,e,t){const n=e.attributes,i=new Nn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,h=o.max;if(a!==void 0&&h!==void 0){if(i.set(new K(a[0],a[1],a[2]),new K(h[0],h[1],h[2])),o.normalized){const c=no(zi[o.componentType]);i.min.multiplyScalar(c),i.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new K,a=new K;for(let h=0,c=s.length;h<c;h++){const l=s[h];if(l.POSITION!==void 0){const d=t.json.accessors[l.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=no(zi[d.componentType]);a.multiplyScalar(v)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}u.boundingBox=i;const r=new Bn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,u.boundingSphere=r}function cl(u,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(a){u.setAttribute(o,a)})}for(const r in n){const o=to[r]||r.toLowerCase();o in u.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!u.index){const r=t.getDependency("accessor",e.indices).then(function(o){u.setIndex(o)});i.push(r)}return Hn(u,e),kg(u,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Bg(u,e.targets,t):u})}const wt={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function ec(u){const e=await fetch(u);if(e.ok)return e.json();throw new Error(e.statusText)}async function Hg(u){if(!u)throw new Error("No basePath supplied");return await ec(`${u}/profilesList.json`)}async function Gg(u,e,t=null,n=!0){if(!u)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await Hg(e);let s;if(u.profiles.some(a=>{const h=i[a];return h&&(s={profileId:a,profilePath:`${e}/${h.path}`,deprecated:!!h.deprecated}),!!s}),!s){if(!t)throw new Error("No matching profile name found");const a=i[t];if(!a)throw new Error(`No matching profile name found and default profile "${t}" missing.`);s={profileId:t,profilePath:`${e}/${a.path}`,deprecated:!!a.deprecated}}const r=await ec(s.profilePath);let o;if(n){let a;if(u.handedness==="any"?a=r.layouts[Object.keys(r.layouts)[0]]:a=r.layouts[u.handedness],!a)throw new Error(`No matching handedness, ${u.handedness}, in profile ${s.profileId}`);a.assetPath&&(o=s.profilePath.replace("profile.json",a.assetPath))}return{profile:r,assetPath:o}}const Wg={xAxis:0,yAxis:0,button:0,state:wt.ComponentState.DEFAULT};function qg(u=0,e=0){let t=u,n=e;if(Math.sqrt(u*u+e*e)>1){const r=Math.atan2(e,u);t=Math.cos(r),n=Math.sin(r)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class Xg{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===wt.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(Wg)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:s,normalizedYAxis:r}=qg(e,t);switch(this.componentProperty){case wt.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?s:.5;break;case wt.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?r:.5;break;case wt.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case wt.ComponentProperty.STATE:this.valueNodeProperty===wt.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class jg{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new Xg(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:wt.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=wt.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=wt.ComponentState.PRESSED:(t.touched||this.values.button>wt.ButtonTouchThreshold)&&(this.values.state=wt.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===wt.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>wt.AxisTouchThreshold&&(this.values.state=wt.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===wt.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>wt.AxisTouchThreshold&&(this.values.state=wt.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Yg{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const s=this.layoutDescription.components[i];this.components[i]=new jg(i,s)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const $g="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",Kg="generic-trigger";class Zg extends xt{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:s,maxNode:r,value:o,valueNodeProperty:a}=n;i&&(a===wt.VisualResponseProperty.VISIBILITY?i.visible=o:a===wt.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(s.quaternion,r.quaternion,o),i.position.lerpVectors(s.position,r.position,o)))})}))}}function Jg(u,e){Object.values(u.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:s}=t;if(n===wt.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const r=new sr(.001),o=new Wn({color:255}),a=new At(r,o);t.touchPointNode.add(a)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(s).forEach(r=>{const{valueNodeName:o,minNodeName:a,maxNodeName:h,valueNodeProperty:c}=r;if(c===wt.VisualResponseProperty.TRANSFORM){if(r.minNode=e.getObjectByName(a),r.maxNode=e.getObjectByName(h),!r.minNode){console.warn(`Could not find ${a} in the model`);return}if(!r.maxNode){console.warn(`Could not find ${h} in the model`);return}}r.valueNode=e.getObjectByName(o),r.valueNode||console.warn(`Could not find ${o} in the model`)})})}function hl(u,e){Jg(u.motionController,e),u.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=u.envMap,t.material.needsUpdate=!0)}),u.add(e)}class Qg{constructor(e=null){this.gltfLoader=e,this.path=$g,this._assetCache={},this.gltfLoader||(this.gltfLoader=new Zl)}createControllerModel(e){const t=new Zg;let n=null;return e.addEventListener("connected",i=>{const s=i.data;s.targetRayMode!=="tracked-pointer"||!s.gamepad||Gg(s,this.path,Kg).then(({profile:r,assetPath:o})=>{t.motionController=new Yg(s,r,o);const a=this._assetCache[t.motionController.assetUrl];if(a)n=a.scene.clone(),hl(t,n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,h=>{this._assetCache[t.motionController.assetUrl]=h,n=h.scene.clone(),hl(t,n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(r=>{console.warn(r)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}function js(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var tc={exports:{}};(function(u,e){(function(t){u.exports=t()})(function(){return function t(n,i,s){function r(h,c){if(!i[h]){if(!n[h]){var l=typeof js=="function"&&js;if(!c&&l)return l(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var g=n[h][1][f];return r(g||f)},d,d.exports,t,n,i,s)}return i[h].exports}for(var o=typeof js=="function"&&js,a=0;a<s.length;a++)r(s[a]);return r}({1:[function(t,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,i){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,i){var s=t("../math/Vec3");t("../utils/Utils"),n.exports=r;function r(h){h=h||{},this.lowerBound=new s,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new s,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new s;r.prototype.setFromPoints=function(h,c,l,d){var f=this.lowerBound,g=this.upperBound,v=l;f.copy(h[0]),v&&v.vmult(f,f),g.copy(f);for(var m=1;m<h.length;m++){var p=h[m];v&&(v.vmult(p,o),p=o),p.x>g.x&&(g.x=p.x),p.x<f.x&&(f.x=p.x),p.y>g.y&&(g.y=p.y),p.y<f.y&&(f.y=p.y),p.z>g.z&&(g.z=p.z),p.z<f.z&&(f.z=p.z)}return c&&(c.vadd(f,f),c.vadd(g,g)),d&&(f.x-=d,f.y-=d,f.z-=d,g.x+=d,g.y+=d,g.z+=d),this},r.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(h){var c=h.lowerBound.x;this.lowerBound.x>c&&(this.lowerBound.x=c);var l=h.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var c=h.lowerBound.y;this.lowerBound.y>c&&(this.lowerBound.y=c);var l=h.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var c=h.lowerBound.z;this.lowerBound.z>c&&(this.lowerBound.z=c);var l=h.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},r.prototype.overlaps=function(h){var c=this.lowerBound,l=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=l.x&&l.x<=f.x||c.x<=f.x&&f.x<=l.x)&&(d.y<=l.y&&l.y<=f.y||c.y<=f.y&&f.y<=l.y)&&(d.z<=l.z&&l.z<=f.z||c.z<=f.z&&f.z<=l.z)},r.prototype.contains=function(h){var c=this.lowerBound,l=this.upperBound,d=h.lowerBound,f=h.upperBound;return c.x<=d.x&&l.x>=f.x&&c.y<=d.y&&l.y>=f.y&&c.z<=d.z&&l.z>=f.z},r.prototype.getCorners=function(h,c,l,d,f,g,v,m){var p=this.lowerBound,y=this.upperBound;h.copy(p),c.set(y.x,p.y,p.z),l.set(y.x,y.y,p.z),d.set(p.x,y.y,y.z),f.set(y.x,p.y,p.z),g.set(p.x,y.y,p.z),v.set(p.x,p.y,y.z),m.copy(y)};var a=[new s,new s,new s,new s,new s,new s,new s,new s];r.prototype.toLocalFrame=function(h,c){var l=a,d=l[0],f=l[1],g=l[2],v=l[3],m=l[4],p=l[5],y=l[6],_=l[7];this.getCorners(d,f,g,v,m,p,y,_);for(var x=0;x!==8;x++){var M=l[x];h.pointToLocal(M,M)}return c.setFromPoints(l)},r.prototype.toWorldFrame=function(h,c){var l=a,d=l[0],f=l[1],g=l[2],v=l[3],m=l[4],p=l[5],y=l[6],_=l[7];this.getCorners(d,f,g,v,m,p,y,_);for(var x=0;x!==8;x++){var M=l[x];h.pointToWorld(M,M)}return c.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,i){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(r,o){if(r=r.index,o=o.index,o>r){var a=o;o=r,r=a}return this.matrix[(r*(r+1)>>1)+o-1]},s.prototype.set=function(r,o,a){if(r=r.index,o=o.index,o>r){var h=o;o=r,r=h}this.matrix[(r*(r+1)>>1)+o-1]=a?1:0},s.prototype.reset=function(){for(var r=0,o=this.matrix.length;r!==o;r++)this.matrix[r]=0},s.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(t,n,i){var s=t("../objects/Body"),r=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=a;function a(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}a.prototype.collisionPairs=function(v,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=s.STATIC|s.KINEMATIC;a.prototype.needBroadphaseCollision=function(v,m){return!(!(v.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&v.collisionFilterMask)||(v.type&h||v.sleepState===s.SLEEPING)&&(m.type&h||m.sleepState===s.SLEEPING))},a.prototype.intersectionTest=function(v,m,p,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(v,m,p,y):this.doBoundingSphereBroadphase(v,m,p,y)};var c=new r;new r,new o,new r,a.prototype.doBoundingSphereBroadphase=function(v,m,p,y){var _=c;m.position.vsub(v.position,_);var x=Math.pow(v.boundingRadius+m.boundingRadius,2),M=_.norm2();M<x&&(p.push(v),y.push(m))},a.prototype.doBoundingBoxBroadphase=function(v,m,p,y){v.aabbNeedsUpdate&&v.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),v.aabb.overlaps(m.aabb)&&(p.push(v),y.push(m))};var l={keys:[]},d=[],f=[];a.prototype.makePairsUnique=function(v,m){for(var p=l,y=d,_=f,x=v.length,M=0;M!==x;M++)y[M]=v[M],_[M]=m[M];v.length=0,m.length=0;for(var M=0;M!==x;M++){var L=y[M].id,O=_[M].id,I=L<O?L+","+O:O+","+L;p[I]=M,p.keys.push(I)}for(var M=0;M!==p.keys.length;M++){var I=p.keys.pop(),w=p[I];v.push(y[w]),m.push(_[w]),delete p[I]}},a.prototype.setWorld=function(v){};var g=new r;a.boundingSphereCheck=function(v,m){var p=g;return v.position.vsub(m.position,p),Math.pow(v.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},a.prototype.aabbQuery=function(v,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,i){n.exports=a;var s=t("./Broadphase"),r=t("../math/Vec3"),o=t("../shapes/Shape");function a(c,l,d,f,g){s.apply(this),this.nx=d||10,this.ny=f||10,this.nz=g||10,this.aabbMin=c||new r(100,100,100),this.aabbMax=l||new r(-100,-100,-100);var v=this.nx*this.ny*this.nz;if(v<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=v,this.binLengths.length=v;for(var m=0;m<v;m++)this.bins[m]=[],this.binLengths[m]=0}a.prototype=new s,a.prototype.constructor=a;var h=new r;new r,a.prototype.collisionPairs=function(c,l,d){var f=c.numObjects(),g=c.bodies,F=this.aabbMax,G=this.aabbMin,v=this.nx,m=this.ny,p=this.nz,y=m*p,_=p,x=1,M=F.x,L=F.y,O=F.z,I=G.x,w=G.y,b=G.z,N=v/(M-I),U=m/(L-w),P=p/(O-b),k=(M-I)/v,X=(L-w)/m,ie=(O-b)/p,H=Math.sqrt(k*k+X*X+ie*ie)*.5,B=o.types,ee=B.SPHERE,$=B.PLANE;B.BOX,B.COMPOUND,B.CONVEXPOLYHEDRON;for(var V=this.bins,q=this.binLengths,E=this.bins.length,T=0;T!==E;T++)q[T]=0;var C=Math.ceil,G=Math.min,F=Math.max;function te(re,Re,Be,Oe,Pe,Ve,We){var Ye=(re-I)*N|0,at=(Re-w)*U|0,Z=(Be-b)*P|0,ue=C((Oe-I)*N),we=C((Pe-w)*U),Ce=C((Ve-b)*P);Ye<0?Ye=0:Ye>=v&&(Ye=v-1),at<0?at=0:at>=m&&(at=m-1),Z<0?Z=0:Z>=p&&(Z=p-1),ue<0?ue=0:ue>=v&&(ue=v-1),we<0?we=0:we>=m&&(we=m-1),Ce<0?Ce=0:Ce>=p&&(Ce=p-1),Ye*=y,at*=_,Z*=x,ue*=y,we*=_,Ce*=x;for(var ke=Ye;ke<=ue;ke+=y)for(var lt=at;lt<=we;lt+=_)for(var ut=Z;ut<=Ce;ut+=x){var yt=ke+lt+ut;V[yt][q[yt]++]=We}}for(var T=0;T!==f;T++){var Y=g[T],J=Y.shape;switch(J.type){case ee:var se=Y.position.x,Ee=Y.position.y,pe=Y.position.z,ye=J.radius;te(se-ye,Ee-ye,pe-ye,se+ye,Ee+ye,pe+ye,Y);break;case $:J.worldNormalNeedsUpdate&&J.computeWorldNormal(Y.quaternion);var he=J.worldNormal,ve=I+k*.5-Y.position.x,Ge=w+X*.5-Y.position.y,Ue=b+ie*.5-Y.position.z,He=h;He.set(ve,Ge,Ue);for(var Ae=0,je=0;Ae!==v;Ae++,je+=y,He.y=Ge,He.x+=k)for(var D=0,A=0;D!==m;D++,A+=_,He.z=Ue,He.y+=X)for(var ne=0,de=0;ne!==p;ne++,de+=x,He.z+=ie)if(He.dot(he)<H){var xe=je+A+de;V[xe][q[xe]++]=Y}break;default:Y.aabbNeedsUpdate&&Y.computeAABB(),te(Y.aabb.lowerBound.x,Y.aabb.lowerBound.y,Y.aabb.lowerBound.z,Y.aabb.upperBound.x,Y.aabb.upperBound.y,Y.aabb.upperBound.z,Y);break}}for(var T=0;T!==E;T++){var _e=q[T];if(_e>1)for(var W=V[T],Ae=0;Ae!==_e;Ae++)for(var Y=W[Ae],D=0;D!==Ae;D++){var me=W[D];this.needBroadphaseCollision(Y,me)&&this.intersectionTest(Y,me,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,i){n.exports=o;var s=t("./Broadphase"),r=t("./AABB");function o(){s.apply(this)}o.prototype=new s,o.prototype.constructor=o,o.prototype.collisionPairs=function(a,h,c){var l=a.bodies,d=l.length,f,g,v,m;for(f=0;f!==d;f++)for(g=0;g!==f;g++)v=l[f],m=l[g],this.needBroadphaseCollision(v,m)&&this.intersectionTest(v,m,h,c)},new r,o.prototype.aabbQuery=function(a,h,c){c=c||[];for(var l=0;l<a.bodies.length;l++){var d=a.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&c.push(d)}return c}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,i){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(r,o){if(r=r.id,o=o.id,o>r){var a=o;o=r,r=a}return r+"-"+o in this.matrix},s.prototype.set=function(r,o,a){if(r=r.id,o=o.id,o>r){var h=o;o=r,r=h}a?this.matrix[r+"-"+o]=!0:delete this.matrix[r+"-"+o]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(r){}},{}],9:[function(t,n,i){n.exports=l;var s=t("../math/Vec3"),r=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var a=t("../collision/RaycastResult"),h=t("../shapes/Shape"),c=t("../collision/AABB");function l(E,T){this.from=E?E.clone():new s,this.to=T?T.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new a,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new c,f=[];l.prototype.intersectWorld=function(E,T){return this.mode=T.mode||l.ANY,this.result=T.result||new a,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,E.broadphase.aabbQuery(E,d,f),this.intersectBodies(f),this.hasHit};var g=new s,v=new s;l.pointInTriangle=m;function m(E,T,C,G){G.vsub(T,$),C.vsub(T,g),E.vsub(T,v);var F=$.dot($),te=$.dot(g),Y=$.dot(v),J=g.dot(g),se=g.dot(v),Ee,pe;return(Ee=J*Y-te*se)>=0&&(pe=F*se-te*Y)>=0&&Ee+pe<F*J-te*te}var p=new s,y=new r;l.prototype.intersectBody=function(E,T){T&&(this.result=T,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!E.collisionResponse)&&!(!(this.collisionFilterGroup&E.collisionFilterMask)||!(E.collisionFilterGroup&this.collisionFilterMask)))for(var G=p,F=y,te=0,Y=E.shapes.length;te<Y;te++){var J=E.shapes[te];if(!(C&&!J.collisionResponse)&&(E.quaternion.mult(E.shapeOrientations[te],F),E.quaternion.vmult(E.shapeOffsets[te],G),G.vadd(E.position,G),this.intersectShape(J,F,G,E),this.result._shouldStop))break}},l.prototype.intersectBodies=function(E,T){T&&(this.result=T,this._updateDirection());for(var C=0,G=E.length;!this.result._shouldStop&&C<G;C++)this.intersectBody(E[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(E,T,C,G){var F=this.from,te=q(F,this._direction,C);if(!(te>E.boundingSphereRadius)){var Y=this[E.type];Y&&Y.call(this,E,T,C,G)}},new s,new s;var _=new s,x=new s,M=new s,L=new s;new s,new a,l.prototype.intersectBox=function(E,T,C,G){return this.intersectConvex(E.convexPolyhedronRepresentation,T,C,G)},l.prototype[h.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(E,T,C,G){var F=this.from,te=this.to,Y=this._direction,J=new s(0,0,1);T.vmult(J,J);var se=new s;F.vsub(C,se);var Ee=se.dot(J);te.vsub(C,se);var pe=se.dot(J);if(!(Ee*pe>0)&&!(F.distanceTo(te)<Ee)){var ye=J.dot(Y);if(!(Math.abs(ye)<this.precision)){var he=new s,ve=new s,Ge=new s;F.vsub(C,he);var Ue=-J.dot(he)/ye;Y.scale(Ue,ve),F.vadd(ve,Ge),this.reportIntersection(J,Ge,E,G,-1)}}},l.prototype[h.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(E){var T=this.to,C=this.from;E.lowerBound.x=Math.min(T.x,C.x),E.lowerBound.y=Math.min(T.y,C.y),E.lowerBound.z=Math.min(T.z,C.z),E.upperBound.x=Math.max(T.x,C.x),E.upperBound.y=Math.max(T.y,C.y),E.upperBound.z=Math.max(T.z,C.z)};var O={faceList:[0]};l.prototype.intersectHeightfield=function(E,T,C,G){E.data,E.elementSize;var F=new s,te=new l(this.from,this.to);o.pointToLocalFrame(C,T,te.from,te.from),o.pointToLocalFrame(C,T,te.to,te.to);var Y=[],J=null,se=null,Ee=null,pe=null,ye=E.getIndexOfPosition(te.from.x,te.from.y,Y,!1);if(ye&&(J=Y[0],se=Y[1],Ee=Y[0],pe=Y[1]),ye=E.getIndexOfPosition(te.to.x,te.to.y,Y,!1),ye&&((J===null||Y[0]<J)&&(J=Y[0]),(Ee===null||Y[0]>Ee)&&(Ee=Y[0]),(se===null||Y[1]<se)&&(se=Y[1]),(pe===null||Y[1]>pe)&&(pe=Y[1])),J!==null){var he=[];E.getRectMinMax(J,se,Ee,pe,he),he[0],he[1];for(var ve=J;ve<=Ee;ve++)for(var Ge=se;Ge<=pe;Ge++){if(this.result._shouldStop||(E.getConvexTrianglePillar(ve,Ge,!1),o.pointToWorldFrame(C,T,E.pillarOffset,F),this.intersectConvex(E.pillarConvex,T,F,G,O),this.result._shouldStop))return;E.getConvexTrianglePillar(ve,Ge,!0),o.pointToWorldFrame(C,T,E.pillarOffset,F),this.intersectConvex(E.pillarConvex,T,F,G,O)}}},l.prototype[h.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var I=new s,w=new s;l.prototype.intersectSphere=function(E,T,C,G){var F=this.from,te=this.to,Y=E.radius,J=Math.pow(te.x-F.x,2)+Math.pow(te.y-F.y,2)+Math.pow(te.z-F.z,2),se=2*((te.x-F.x)*(F.x-C.x)+(te.y-F.y)*(F.y-C.y)+(te.z-F.z)*(F.z-C.z)),Ee=Math.pow(F.x-C.x,2)+Math.pow(F.y-C.y,2)+Math.pow(F.z-C.z,2)-Math.pow(Y,2),pe=Math.pow(se,2)-4*J*Ee,ye=I,he=w;if(!(pe<0))if(pe===0)F.lerp(te,pe,ye),ye.vsub(C,he),he.normalize(),this.reportIntersection(he,ye,E,G,-1);else{var ve=(-se-Math.sqrt(pe))/(2*J),Ge=(-se+Math.sqrt(pe))/(2*J);if(ve>=0&&ve<=1&&(F.lerp(te,ve,ye),ye.vsub(C,he),he.normalize(),this.reportIntersection(he,ye,E,G,-1)),this.result._shouldStop)return;Ge>=0&&Ge<=1&&(F.lerp(te,Ge,ye),ye.vsub(C,he),he.normalize(),this.reportIntersection(he,ye,E,G,-1))}},l.prototype[h.types.SPHERE]=l.prototype.intersectSphere;var b=new s;new s,new s;var N=new s;l.prototype.intersectConvex=function(T,C,G,F,te){for(var Y=b,J=N,se=te&&te.faceList||null,Ee=T.faces,pe=T.vertices,ye=T.faceNormals,he=this._direction,ve=this.from,Ge=this.to,Ue=ve.distanceTo(Ge),He=se?se.length:Ee.length,Ae=this.result,je=0;!Ae._shouldStop&&je<He;je++){var D=se?se[je]:je,A=Ee[D],ne=ye[D],de=C,xe=G;J.copy(pe[A[0]]),de.vmult(J,J),J.vadd(xe,J),J.vsub(ve,J),de.vmult(ne,Y);var _e=he.dot(Y);if(!(Math.abs(_e)<this.precision)){var W=Y.dot(J)/_e;if(!(W<0)){he.mult(W,_),_.vadd(ve,_),x.copy(pe[A[0]]),de.vmult(x,x),xe.vadd(x,x);for(var me=1;!Ae._shouldStop&&me<A.length-1;me++){M.copy(pe[A[me]]),L.copy(pe[A[me+1]]),de.vmult(M,M),de.vmult(L,L),xe.vadd(M,M),xe.vadd(L,L);var re=_.distanceTo(ve);!(m(_,x,M,L)||m(_,M,x,L))||re>Ue||this.reportIntersection(Y,_,T,F,D)}}}}},l.prototype[h.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var U=new s,P=new s,k=new s,X=new s,ie=new s,H=new s;new c;var B=[],ee=new o;l.prototype.intersectTrimesh=function(T,C,G,F,te){var Y=U,J=B,se=ee,Ee=N,pe=P,ye=k,he=X,ve=H,Ge=ie;te&&te.faceList;var Ue=T.indices;T.vertices,T.faceNormals;var He=this.from,Ae=this.to,je=this._direction;se.position.copy(G),se.quaternion.copy(C),o.vectorToLocalFrame(G,C,je,pe),o.pointToLocalFrame(G,C,He,ye),o.pointToLocalFrame(G,C,Ae,he);var D=ye.distanceSquared(he);T.tree.rayQuery(this,se,J);for(var A=0,ne=J.length;!this.result._shouldStop&&A!==ne;A++){var de=J[A];T.getNormal(de,Y),T.getVertex(Ue[de*3],x),x.vsub(ye,Ee);var xe=pe.dot(Y),_e=Y.dot(Ee)/xe;if(!(_e<0)){pe.scale(_e,_),_.vadd(ye,_),T.getVertex(Ue[de*3+1],M),T.getVertex(Ue[de*3+2],L);var W=_.distanceSquared(ye);!(m(_,M,x,L)||m(_,x,M,L))||W>D||(o.vectorToWorldFrame(C,Y,Ge),o.pointToWorldFrame(G,C,_,ve),this.reportIntersection(Ge,ve,T,F,de))}}J.length=0},l.prototype[h.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(E,T,C,G,F){var te=this.from,Y=this.to,J=te.distanceTo(T),se=this.result;if(!(this.skipBackfaces&&E.dot(this._direction)>0))switch(se.hitFaceIndex=typeof F<"u"?F:-1,this.mode){case l.ALL:this.hasHit=!0,se.set(te,Y,E,T,C,G,J),se.hasHit=!0,this.callback(se);break;case l.CLOSEST:(J<se.distance||!se.hasHit)&&(this.hasHit=!0,se.hasHit=!0,se.set(te,Y,E,T,C,G,J));break;case l.ANY:this.hasHit=!0,se.hasHit=!0,se.set(te,Y,E,T,C,G,J),se._shouldStop=!0;break}};var $=new s,V=new s;function q(E,T,C){C.vsub(E,$);var G=$.dot(T);T.mult(G,V),V.vadd(E,V);var F=C.distanceTo(V);return F}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,i){var s=t("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(o,a,h,c,l,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(a),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(c),this.shape=l,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,i){t("../shapes/Shape");var s=t("../collision/Broadphase");n.exports=r;function r(o){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var a=this.axisList;this._addBodyHandler=function(h){a.push(h.body)},this._removeBodyHandler=function(h){var c=a.indexOf(h.body);c!==-1&&a.splice(c,1)},o&&this.setWorld(o)}r.prototype=new s,r.prototype.setWorld=function(o){this.axisList.length=0;for(var a=0;a<o.bodies.length;a++)this.axisList.push(o.bodies[a]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},r.insertionSortX=function(o){for(var a=1,h=o.length;a<h;a++){for(var c=o[a],l=a-1;l>=0&&!(o[l].aabb.lowerBound.x<=c.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=c}return o},r.insertionSortY=function(o){for(var a=1,h=o.length;a<h;a++){for(var c=o[a],l=a-1;l>=0&&!(o[l].aabb.lowerBound.y<=c.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=c}return o},r.insertionSortZ=function(o){for(var a=1,h=o.length;a<h;a++){for(var c=o[a],l=a-1;l>=0&&!(o[l].aabb.lowerBound.z<=c.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=c}return o},r.prototype.collisionPairs=function(o,a,h){var c=this.axisList,l=c.length,d=this.axisIndex,f,g;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var v=c[f];for(g=f+1;g<l;g++){var m=c[g];if(this.needBroadphaseCollision(v,m)){if(!r.checkBounds(v,m,d))break;this.intersectionTest(v,m,a,h)}}}},r.prototype.sortList=function(){for(var o=this.axisList,a=this.axisIndex,h=o.length,c=0;c!==h;c++){var l=o[c];l.aabbNeedsUpdate&&l.computeAABB()}a===0?r.insertionSortX(o):a===1?r.insertionSortY(o):a===2&&r.insertionSortZ(o)},r.checkBounds=function(o,a,h){var c,l;h===0?(c=o.position.x,l=a.position.x):h===1?(c=o.position.y,l=a.position.y):h===2&&(c=o.position.z,l=a.position.z);var d=o.boundingRadius,f=a.boundingRadius,g=c+d,v=l-f;return v<g},r.prototype.autoDetectAxis=function(){for(var o=0,a=0,h=0,c=0,l=0,d=0,f=this.axisList,g=f.length,v=1/g,m=0;m!==g;m++){var p=f[m],y=p.position.x;o+=y,a+=y*y;var _=p.position.y;h+=_,c+=_*_;var x=p.position.z;l+=x,d+=x*x}var M=a-o*o*v,L=c-h*h*v,O=d-l*l*v;M>L?M>O?this.axisIndex=0:this.axisIndex=2:L>O?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(o,a,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var c=this.axisIndex,l="x";c===1&&(l="y"),c===2&&(l="z");var d=this.axisList;a.lowerBound[l],a.upperBound[l];for(var f=0;f<d.length;f++){var g=d[f];g.aabbNeedsUpdate&&g.computeAABB(),g.aabb.overlaps(a)&&h.push(g)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,i){n.exports=h,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var a=t("../math/Vec3");function h(c,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,g=d.pivotA?d.pivotA.clone():new a,v=d.pivotB?d.pivotB.clone():new a;this.axisA=d.axisA?d.axisA.clone():new a,this.axisB=d.axisB?d.axisB.clone():new a,s.call(this,c,g,l,v,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new r(c,l,d),p=this.twistEquation=new o(c,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}h.prototype=new s,h.constructor=h,new a,new a,h.prototype.update=function(){var c=this.bodyA,l=this.bodyB,d=this.coneEquation,f=this.twistEquation;s.prototype.update.call(this),c.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),c.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,i){n.exports=r;var s=t("../utils/Utils");function r(o,a,h){h=s.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=a,this.id=r.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),a&&a.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var o=this.equations,a=0;a<o.length;a++)o[a].enabled=!0},r.prototype.disable=function(){for(var o=this.equations,a=0;a<o.length;a++)o[a].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,i){n.exports=o;var s=t("./Constraint"),r=t("../equations/ContactEquation");function o(a,h,c,l){s.call(this,a,h),typeof c>"u"&&(c=a.position.distanceTo(h.position)),typeof l>"u"&&(l=1e6),this.distance=c;var d=this.distanceEquation=new r(a,h);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new s,o.prototype.update=function(){var a=this.bodyA,h=this.bodyB,c=this.distanceEquation,l=this.distance*.5,d=c.ni;h.position.vsub(a.position,d),d.normalize(),d.mult(l,c.ri),d.mult(-l,c.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,i){n.exports=h,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var a=t("../math/Vec3");function h(d,f,g){g=g||{};var v=typeof g.maxForce<"u"?g.maxForce:1e6,m=g.pivotA?g.pivotA.clone():new a,p=g.pivotB?g.pivotB.clone():new a;s.call(this,d,m,f,p,v);var y=this.axisA=g.axisA?g.axisA.clone():new a(1,0,0);y.normalize();var _=this.axisB=g.axisB?g.axisB.clone():new a(1,0,0);_.normalize();var x=this.rotationalEquation1=new r(d,f,g),M=this.rotationalEquation2=new r(d,f,g),L=this.motorEquation=new o(d,f,v);L.enabled=!1,this.equations.push(x,M,L)}h.prototype=new s,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var c=new a,l=new a;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,g=this.motorEquation,v=this.rotationalEquation1,m=this.rotationalEquation2,p=c,y=l,_=this.axisA,x=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(_,p),f.quaternion.vmult(x,y),p.tangents(v.axisA,m.axisA),v.axisB.copy(y),m.axisB.copy(y),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,g.axisA),f.quaternion.vmult(this.axisB,g.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,i){n.exports=a,t("./Constraint");var s=t("./PointToPointConstraint"),r=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function a(h,c,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,f=new o,g=new o,v=new o;h.position.vadd(c.position,v),v.scale(.5,v),c.pointToLocalFrame(v,g),h.pointToLocalFrame(v,f),s.call(this,h,f,c,g,d);var m=this.rotationalEquation1=new r(h,c,l),p=this.rotationalEquation2=new r(h,c,l),y=this.rotationalEquation3=new r(h,c,l);this.equations.push(m,p,y)}a.prototype=new s,a.constructor=a,new o,new o,a.prototype.update=function(){var h=this.bodyA,c=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;s.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,l.axisA),c.vectorToWorldFrame(o.UNIT_Y,l.axisB),h.vectorToWorldFrame(o.UNIT_Y,d.axisA),c.vectorToWorldFrame(o.UNIT_Z,d.axisB),h.vectorToWorldFrame(o.UNIT_Z,f.axisA),c.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,i){n.exports=a;var s=t("./Constraint"),r=t("../equations/ContactEquation"),o=t("../math/Vec3");function a(h,c,l,d,f){s.call(this,h,l),f=typeof f<"u"?f:1e6,this.pivotA=c?c.clone():new o,this.pivotB=d?d.clone():new o;var g=this.equationX=new r(h,l),v=this.equationY=new r(h,l),m=this.equationZ=new r(h,l);this.equations.push(g,v,m),g.minForce=v.minForce=m.minForce=-f,g.maxForce=v.maxForce=m.maxForce=f,g.ni.set(1,0,0),v.ni.set(0,1,0),m.ni.set(0,0,1)}a.prototype=new s,a.prototype.update=function(){var h=this.bodyA,c=this.bodyB,l=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,l.ri),c.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,i){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function o(c,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,c,l,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new r,o.prototype.constructor=o;var a=new s,h=new s;o.prototype.computeB=function(c){var l=this.a,d=this.b,f=this.axisA,g=this.axisB,v=a,m=h,p=this.jacobianElementA,y=this.jacobianElementB;f.cross(g,v),g.cross(f,m),p.rotational.copy(m),y.rotational.copy(v);var _=Math.cos(this.angle)-f.dot(g),x=this.computeGW(),M=this.computeGiMf(),L=-_*l-x*d-c*M;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,i){n.exports=o;var s=t("./Equation"),r=t("../math/Vec3");t("../math/Mat3");function o(m,p,y){y=typeof y<"u"?y:1e6,s.call(this,m,p,0,y),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}o.prototype=new s,o.prototype.constructor=o;var a=new r,h=new r,c=new r;o.prototype.computeB=function(m){var p=this.a,y=this.b,_=this.bi,x=this.bj,M=this.ri,L=this.rj,O=a,I=h,w=_.velocity,b=_.angularVelocity;_.force,_.torque;var N=x.velocity,U=x.angularVelocity;x.force,x.torque;var P=c,k=this.jacobianElementA,X=this.jacobianElementB,ie=this.ni;M.cross(ie,O),L.cross(ie,I),ie.negate(k.spatial),O.negate(k.rotational),X.spatial.copy(ie),X.rotational.copy(I),P.copy(x.position),P.vadd(L,P),P.vsub(_.position,P),P.vsub(M,P);var H=ie.dot(P),B=this.restitution+1,ee=B*N.dot(ie)-B*w.dot(ie)+U.dot(I)-b.dot(O),$=this.computeGiMf(),V=-H*p-ee*y-m*$;return V};var l=new r,d=new r,f=new r,g=new r,v=new r;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=d,y=f,_=g,x=v;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(y,m),this.bj.getVelocityAtWorldPoint(_,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,i){n.exports=o;var s=t("../math/JacobianElement"),r=t("../math/Vec3");function o(v,m,p,y){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof y>"u"?1e6:y,this.bi=v,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(v,m,p){var y=m,_=v,x=p;this.a=4/(x*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(x*x*_*(1+4*y))},o.prototype.computeB=function(v,m,p){var y=this.computeGW(),_=this.computeGq(),x=this.computeGiMf();return-_*v-y*m-x*p},o.prototype.computeGq=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,_=p.position,x=y.position;return v.spatial.dot(_)+m.spatial.dot(x)};var a=new r;o.prototype.computeGW=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,_=p.velocity,x=y.velocity,M=p.angularVelocity||a,L=y.angularVelocity||a;return v.multiplyVectors(_,M)+m.multiplyVectors(x,L)},o.prototype.computeGWlambda=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,_=p.vlambda,x=y.vlambda,M=p.wlambda||a,L=y.wlambda||a;return v.multiplyVectors(_,M)+m.multiplyVectors(x,L)};var h=new r,c=new r,l=new r,d=new r;o.prototype.computeGiMf=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,_=p.force,x=p.torque,M=y.force,L=y.torque,O=p.invMassSolve,I=y.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,l):l.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(L,d):d.set(0,0,0),_.mult(O,h),M.mult(I,c),v.multiplyVectors(h,l)+m.multiplyVectors(c,d)};var f=new r;o.prototype.computeGiMGt=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,y=this.bj,_=p.invMassSolve,x=y.invMassSolve,M=p.invInertiaWorldSolve,L=y.invInertiaWorldSolve,O=_+x;return M&&(M.vmult(v.rotational,f),O+=f.dot(v.rotational)),L&&(L.vmult(m.rotational,f),O+=f.dot(m.rotational)),O};var g=new r;new r,new r,new r,new r,new r,o.prototype.addToWlambda=function(v){var m=this.jacobianElementA,p=this.jacobianElementB,y=this.bi,_=this.bj,x=g;m.spatial.mult(y.invMassSolve*v,x),y.vlambda.vadd(x,y.vlambda),p.spatial.mult(_.invMassSolve*v,x),_.vlambda.vadd(x,_.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(v,x),y.wlambda.vadd(x,y.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(v,x),_.wlambda.vadd(x,_.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,i){n.exports=o;var s=t("./Equation"),r=t("../math/Vec3");t("../math/Mat3");function o(c,l,d){s.call(this,c,l,-d,d),this.ri=new r,this.rj=new r,this.t=new r}o.prototype=new s,o.prototype.constructor=o;var a=new r,h=new r;o.prototype.computeB=function(c){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,g=a,v=h,m=this.t;d.cross(m,g),f.cross(m,v);var p=this.jacobianElementA,y=this.jacobianElementB;m.negate(p.spatial),g.negate(p.rotational),y.spatial.copy(m),y.rotational.copy(v);var _=this.computeGW(),x=this.computeGiMf(),M=-_*l-c*x;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,i){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function o(c,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,c,l,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new r,o.prototype.constructor=o;var a=new s,h=new s;o.prototype.computeB=function(c){var l=this.a,d=this.b,f=this.axisA,g=this.axisB,v=a,m=h,p=this.jacobianElementA,y=this.jacobianElementB;f.cross(g,v),g.cross(f,m),p.rotational.copy(m),y.rotational.copy(v);var _=Math.cos(this.maxAngle)-f.dot(g),x=this.computeGW(),M=this.computeGiMf(),L=-_*l-x*d-c*M;return L}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,i){n.exports=o;var s=t("../math/Vec3");t("../math/Mat3");var r=t("./Equation");function o(a,h,c){c=typeof c<"u"?c:1e6,r.call(this,a,h,-c,c),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeB=function(a){this.a;var h=this.b;this.bi,this.bj;var c=this.axisA,l=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(c),l.negate(f.rotational);var g=this.computeGW()-this.targetVelocity,v=this.computeGiMf(),m=-g*h-a*v;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,i){var s=t("../utils/Utils");n.exports=r;function r(o,a,h){h=s.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[o,a],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,i){n.exports=s;function s(r){var o="";r=r||{},typeof r=="string"?(o=r,r={}):typeof r=="object"&&(o=""),this.name=o,this.id=s.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}s.idCounter=0},{}],26:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(){this.spatial=new s,this.rotational=new s}r.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(o,a){return o.dot(this.spatial)+a.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},r.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},r.prototype.setTrace=function(o){var a=this.elements;a[0]=o.x,a[4]=o.y,a[8]=o.z},r.prototype.getTrace=function(a){var a=a||new s,h=this.elements;a.x=h[0],a.y=h[4],a.z=h[8]},r.prototype.vmult=function(o,a){a=a||new s;var h=this.elements,c=o.x,l=o.y,d=o.z;return a.x=h[0]*c+h[1]*l+h[2]*d,a.y=h[3]*c+h[4]*l+h[5]*d,a.z=h[6]*c+h[7]*l+h[8]*d,a},r.prototype.smult=function(o){for(var a=0;a<this.elements.length;a++)this.elements[a]*=o},r.prototype.mmult=function(o,a){for(var h=a||new r,c=0;c<3;c++)for(var l=0;l<3;l++){for(var d=0,f=0;f<3;f++)d+=o.elements[c+f*3]*this.elements[f+l*3];h.elements[c+l*3]=d}return h},r.prototype.scale=function(o,a){a=a||new r;for(var h=this.elements,c=a.elements,l=0;l!==3;l++)c[3*l+0]=o.x*h[3*l+0],c[3*l+1]=o.y*h[3*l+1],c[3*l+2]=o.z*h[3*l+2];return a},r.prototype.solve=function(o,a){a=a||new s;for(var h=3,c=4,l=[],d=0;d<h*c;d++)l.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)l[d+c*f]=this.elements[d+3*f];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var g=3,v=g,m,p=4,y;do{if(d=v-g,l[d+c*d]===0){for(f=d+1;f<v;f++)if(l[d+c*f]!==0){m=p;do y=p-m,l[y+c*d]+=l[y+c*f];while(--m);break}}if(l[d+c*d]!==0)for(f=d+1;f<v;f++){var _=l[d+c*f]/l[d+c*d];m=p;do y=p-m,l[y+c*f]=y<=d?0:l[y+c*f]-l[y+c*d]*_;while(--m)}}while(--g);if(a.z=l[2*c+3]/l[2*c+2],a.y=(l[1*c+3]-l[1*c+2]*a.z)/l[1*c+1],a.x=(l[0*c+3]-l[0*c+2]*a.z-l[0*c+1]*a.y)/l[0*c+0],isNaN(a.x)||isNaN(a.y)||isNaN(a.z)||a.x===1/0||a.y===1/0||a.z===1/0)throw"Could not solve equation! Got x=["+a.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return a},r.prototype.e=function(o,a,h){if(h===void 0)return this.elements[a+3*o];this.elements[a+3*o]=h},r.prototype.copy=function(o){for(var a=0;a<o.elements.length;a++)this.elements[a]=o.elements[a];return this},r.prototype.toString=function(){for(var o="",a=",",h=0;h<9;h++)o+=this.elements[h]+a;return o},r.prototype.reverse=function(o){o=o||new r;for(var a=3,h=6,c=[],l=0;l<a*h;l++)c.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)c[l+h*d]=this.elements[l+3*d];c[3+6*0]=1,c[3+6*1]=0,c[3+6*2]=0,c[4+6*0]=0,c[4+6*1]=1,c[4+6*2]=0,c[5+6*0]=0,c[5+6*1]=0,c[5+6*2]=1;var f=3,g=f,v,m=h,p;do{if(l=g-f,c[l+h*l]===0){for(d=l+1;d<g;d++)if(c[l+h*d]!==0){v=m;do p=m-v,c[p+h*l]+=c[p+h*d];while(--v);break}}if(c[l+h*l]!==0)for(d=l+1;d<g;d++){var y=c[l+h*d]/c[l+h*l];v=m;do p=m-v,c[p+h*d]=p<=l?0:c[p+h*d]-c[p+h*l]*y;while(--v)}}while(--f);l=2;do{d=l-1;do{var y=c[l+h*d]/c[l+h*l];v=h;do p=h-v,c[p+h*d]=c[p+h*d]-c[p+h*l]*y;while(--v)}while(d--)}while(--l);l=2;do{var y=1/c[l+h*l];v=h;do p=h-v,c[p+h*l]=c[p+h*l]*y;while(--v)}while(l--);l=2;do{d=2;do{if(p=c[a+d+h*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,p)}while(d--)}while(l--);return o},r.prototype.setRotationFromQuaternion=function(o){var a=o.x,h=o.y,c=o.z,l=o.w,d=a+a,f=h+h,g=c+c,v=a*d,m=a*f,p=a*g,y=h*f,_=h*g,x=c*g,M=l*d,L=l*f,O=l*g,I=this.elements;return I[3*0+0]=1-(y+x),I[3*0+1]=m-O,I[3*0+2]=p+L,I[3*1+0]=m+O,I[3*1+1]=1-(v+x),I[3*1+2]=_-M,I[3*2+0]=p-L,I[3*2+1]=_+M,I[3*2+2]=1-(v+y),this},r.prototype.transpose=function(o){o=o||new r;for(var a=o.elements,h=this.elements,c=0;c!==3;c++)for(var l=0;l!==3;l++)a[3*c+l]=h[3*l+c];return o}},{"./Vec3":30}],28:[function(t,n,i){n.exports=r;var s=t("./Vec3");function r(d,f,g,v){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=g!==void 0?g:0,this.w=v!==void 0?v:1}r.prototype.set=function(d,f,g,v){this.x=d,this.y=f,this.z=g,this.w=v},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(d,f){var g=Math.sin(f*.5);this.x=d.x*g,this.y=d.y*g,this.z=d.z*g,this.w=Math.cos(f*.5)},r.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var f=2*Math.acos(this.w),g=Math.sqrt(1-this.w*this.w);return g<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/g,d.y=this.y/g,d.z=this.z/g),[d,f]};var o=new s,a=new s;r.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var g=o,v=a;d.tangents(g,v),this.setFromAxisAngle(g,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new s,c=new s,l=new s;r.prototype.mult=function(d,f){f=f||new r;var g=this.w,v=h,m=c,p=l;return v.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=g*d.w-v.dot(m),v.cross(m,p),f.x=g*m.x+d.w*v.x+p.x,f.y=g*m.y+d.w*v.y+p.y,f.z=g*m.z+d.w*v.z+p.z,f},r.prototype.inverse=function(d){var f=this.x,g=this.y,v=this.z,m=this.w;d=d||new r,this.conjugate(d);var p=1/(f*f+g*g+v*v+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},r.prototype.conjugate=function(d){return d=d||new r,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},r.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.vmult=function(d,f){f=f||new s;var g=d.x,v=d.y,m=d.z,p=this.x,y=this.y,_=this.z,x=this.w,M=x*g+y*m-_*v,L=x*v+_*g-p*m,O=x*m+p*v-y*g,I=-p*g-y*v-_*m;return f.x=M*x+I*-p+L*-_-O*-y,f.y=L*x+I*-y+O*-p-M*-_,f.z=O*x+I*-_+M*-y-L*-p,f},r.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},r.prototype.toEuler=function(d,f){f=f||"YZX";var g,v,m,p=this.x,y=this.y,_=this.z,x=this.w;switch(f){case"YZX":var M=p*y+_*x;if(M>.499&&(g=2*Math.atan2(p,x),v=Math.PI/2,m=0),M<-.499&&(g=-2*Math.atan2(p,x),v=-Math.PI/2,m=0),isNaN(g)){var L=p*p,O=y*y,I=_*_;g=Math.atan2(2*y*x-2*p*_,1-2*O-2*I),v=Math.asin(2*M),m=Math.atan2(2*p*x-2*y*_,1-2*L-2*I)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=g,d.z=v,d.x=m},r.prototype.setFromEuler=function(d,f,g,v){v=v||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),y=Math.cos(g/2),_=Math.sin(d/2),x=Math.sin(f/2),M=Math.sin(g/2);return v==="XYZ"?(this.x=_*p*y+m*x*M,this.y=m*x*y-_*p*M,this.z=m*p*M+_*x*y,this.w=m*p*y-_*x*M):v==="YXZ"?(this.x=_*p*y+m*x*M,this.y=m*x*y-_*p*M,this.z=m*p*M-_*x*y,this.w=m*p*y+_*x*M):v==="ZXY"?(this.x=_*p*y-m*x*M,this.y=m*x*y+_*p*M,this.z=m*p*M+_*x*y,this.w=m*p*y-_*x*M):v==="ZYX"?(this.x=_*p*y-m*x*M,this.y=m*x*y+_*p*M,this.z=m*p*M-_*x*y,this.w=m*p*y+_*x*M):v==="YZX"?(this.x=_*p*y+m*x*M,this.y=m*x*y+_*p*M,this.z=m*p*M-_*x*y,this.w=m*p*y-_*x*M):v==="XZY"&&(this.x=_*p*y-m*x*M,this.y=m*x*y-_*p*M,this.z=m*p*M+_*x*y,this.w=m*p*y+_*x*M),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,i){var s=t("./Vec3"),r=t("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new s,h.position&&this.position.copy(h.position),this.quaternion=new r,h.quaternion&&this.quaternion.copy(h.quaternion)}var a=new r;o.pointToLocalFrame=function(h,c,l,f){var f=f||new s;return l.vsub(h,f),c.conjugate(a),a.vmult(f,f),f},o.prototype.pointToLocal=function(h,c){return o.pointToLocalFrame(this.position,this.quaternion,h,c)},o.pointToWorldFrame=function(h,c,l,f){var f=f||new s;return c.vmult(l,f),f.vadd(h,f),f},o.prototype.pointToWorld=function(h,c){return o.pointToWorldFrame(this.position,this.quaternion,h,c)},o.prototype.vectorToWorldFrame=function(h,l){var l=l||new s;return this.quaternion.vmult(h,l),l},o.vectorToWorldFrame=function(h,c,l){return h.vmult(c,l),l},o.vectorToLocalFrame=function(h,c,l,f){var f=f||new s;return c.w*=-1,c.vmult(l,f),c.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,i){n.exports=r;var s=t("./Mat3");function r(c,l,d){this.x=c||0,this.y=l||0,this.z=d||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(c,l){var d=c.x,f=c.y,g=c.z,v=this.x,m=this.y,p=this.z;return l=l||new r,l.x=m*g-p*f,l.y=p*d-v*g,l.z=v*f-m*d,l},r.prototype.set=function(c,l,d){return this.x=c,this.y=l,this.z=d,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(c,l){if(l)l.x=c.x+this.x,l.y=c.y+this.y,l.z=c.z+this.z;else return new r(this.x+c.x,this.y+c.y,this.z+c.z)},r.prototype.vsub=function(c,l){if(l)l.x=this.x-c.x,l.y=this.y-c.y,l.z=this.z-c.z;else return new r(this.x-c.x,this.y-c.y,this.z-c.z)},r.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var c=this.x,l=this.y,d=this.z,f=Math.sqrt(c*c+l*l+d*d);if(f>0){var g=1/f;this.x*=g,this.y*=g,this.z*=g}else this.x=0,this.y=0,this.z=0;return f},r.prototype.unit=function(c){c=c||new r;var l=this.x,d=this.y,f=this.z,g=Math.sqrt(l*l+d*d+f*f);return g>0?(g=1/g,c.x=l*g,c.y=d*g,c.z=f*g):(c.x=1,c.y=0,c.z=0),c},r.prototype.norm=function(){var c=this.x,l=this.y,d=this.z;return Math.sqrt(c*c+l*l+d*d)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(c){var l=this.x,d=this.y,f=this.z,g=c.x,v=c.y,m=c.z;return Math.sqrt((g-l)*(g-l)+(v-d)*(v-d)+(m-f)*(m-f))},r.prototype.distanceSquared=function(c){var l=this.x,d=this.y,f=this.z,g=c.x,v=c.y,m=c.z;return(g-l)*(g-l)+(v-d)*(v-d)+(m-f)*(m-f)},r.prototype.mult=function(c,l){l=l||new r;var d=this.x,f=this.y,g=this.z;return l.x=c*d,l.y=c*f,l.z=c*g,l},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(c){return this.x*c.x+this.y*c.y+this.z*c.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(c){return c=c||new r,c.x=-this.x,c.y=-this.y,c.z=-this.z,c};var o=new r,a=new r;r.prototype.tangents=function(c,l){var d=this.norm();if(d>0){var f=o,g=1/d;f.set(this.x*g,this.y*g,this.z*g);var v=a;Math.abs(f.x)<.9?(v.set(1,0,0),f.cross(v,c)):(v.set(0,1,0),f.cross(v,c)),f.cross(c,l)}else c.set(1,0,0),l.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},r.prototype.lerp=function(c,l,d){var f=this.x,g=this.y,v=this.z;d.x=f+(c.x-f)*l,d.y=g+(c.y-g)*l,d.z=v+(c.z-v)*l},r.prototype.almostEquals=function(c,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-c.x)>l||Math.abs(this.y-c.y)>l||Math.abs(this.z-c.z)>l)},r.prototype.almostZero=function(c){return c===void 0&&(c=1e-6),!(Math.abs(this.x)>c||Math.abs(this.y)>c||Math.abs(this.z)>c)};var h=new r;r.prototype.isAntiparallelTo=function(c,l){return this.negate(h),h.almostEquals(c,l)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,i){n.exports=l;var s=t("../utils/EventTarget");t("../shapes/Shape");var r=t("../math/Vec3"),o=t("../math/Mat3"),a=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),c=t("../shapes/Box");function l(N){N=N||{},s.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof N.collisionFilterGroup=="number"?N.collisionFilterGroup:1,this.collisionFilterMask=typeof N.collisionFilterMask=="number"?N.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,N.position&&this.position.copy(N.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,N.velocity&&this.velocity.copy(N.velocity),this.initVelocity=new r,this.force=new r;var U=typeof N.mass=="number"?N.mass:0;this.mass=U,this.invMass=U>0?1/U:0,this.material=N.material||null,this.linearDamping=typeof N.linearDamping=="number"?N.linearDamping:.01,this.type=U<=0?l.STATIC:l.DYNAMIC,typeof N.type==typeof l.STATIC&&(this.type=N.type),this.allowSleep=typeof N.allowSleep<"u"?N.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof N.sleepSpeedLimit<"u"?N.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof N.sleepTimeLimit<"u"?N.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new a,N.quaternion&&this.quaternion.copy(N.quaternion),this.initQuaternion=new a,this.angularVelocity=new r,N.angularVelocity&&this.angularVelocity.copy(N.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new a,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof N.fixedRotation<"u"?N.fixedRotation:!1,this.angularDamping=typeof N.angularDamping<"u"?N.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new r,N.shape&&this.addShape(N.shape),this.updateMassProperties()}l.prototype=new s,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var N=this.sleepState;this.sleepState=0,N===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(N){if(this.allowSleep){var U=this.sleepState,P=this.velocity.norm2()+this.angularVelocity.norm2(),k=Math.pow(this.sleepSpeedLimit,2);U===l.AWAKE&&P<k?(this.sleepState=l.SLEEPY,this.timeLastSleepy=N,this.dispatchEvent(l.sleepyEvent)):U===l.SLEEPY&&P>k?this.wakeUp():U===l.SLEEPY&&N-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(N,P){var P=P||new r;return N.vsub(this.position,P),this.quaternion.conjugate().vmult(P,P),P},l.prototype.vectorToLocalFrame=function(N,P){var P=P||new r;return this.quaternion.conjugate().vmult(N,P),P},l.prototype.pointToWorldFrame=function(N,P){var P=P||new r;return this.quaternion.vmult(N,P),P.vadd(this.position,P),P},l.prototype.vectorToWorldFrame=function(N,P){var P=P||new r;return this.quaternion.vmult(N,P),P};var d=new r,f=new a;l.prototype.addShape=function(N,U,P){var k=new r,X=new a;return U&&k.copy(U),P&&X.copy(P),this.shapes.push(N),this.shapeOffsets.push(k),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var N=this.shapes,U=this.shapeOffsets,P=N.length,k=0,X=0;X!==P;X++){var ie=N[X];ie.updateBoundingSphereRadius();var H=U[X].norm(),B=ie.boundingSphereRadius;H+B>k&&(k=H+B)}this.boundingRadius=k};var g=new h;l.prototype.computeAABB=function(){for(var N=this.shapes,U=this.shapeOffsets,P=this.shapeOrientations,k=N.length,X=d,ie=f,H=this.quaternion,B=this.aabb,ee=g,$=0;$!==k;$++){var V=N[$];P[$].mult(H,ie),ie.vmult(U[$],X),X.vadd(this.position,X),V.calculateWorldAABB(X,ie,ee.lowerBound,ee.upperBound),$===0?B.copy(ee):B.extend(ee)}this.aabbNeedsUpdate=!1};var v=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(N){var U=this.invInertia;if(!(U.x===U.y&&U.y===U.z&&!N)){var P=v,k=m;P.setRotationFromQuaternion(this.quaternion),P.transpose(k),P.scale(U,P),P.mmult(k,this.invInertiaWorld)}};var p=new r,y=new r;l.prototype.applyForce=function(N,U){if(this.type===l.DYNAMIC){var P=p;U.vsub(this.position,P);var k=y;P.cross(N,k),this.force.vadd(N,this.force),this.torque.vadd(k,this.torque)}};var _=new r,x=new r;l.prototype.applyLocalForce=function(N,U){if(this.type===l.DYNAMIC){var P=_,k=x;this.vectorToWorldFrame(N,P),this.pointToWorldFrame(U,k),this.applyForce(P,k)}};var M=new r,L=new r,O=new r;l.prototype.applyImpulse=function(N,U){if(this.type===l.DYNAMIC){var P=M;U.vsub(this.position,P);var k=L;k.copy(N),k.mult(this.invMass,k),this.velocity.vadd(k,this.velocity);var X=O;P.cross(N,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var I=new r,w=new r;l.prototype.applyLocalImpulse=function(N,U){if(this.type===l.DYNAMIC){var P=I,k=w;this.vectorToWorldFrame(N,P),this.pointToWorldFrame(U,k),this.applyImpulse(P,k)}};var b=new r;l.prototype.updateMassProperties=function(){var N=b;this.invMass=this.mass>0?1/this.mass:0;var U=this.inertia,P=this.fixedRotation;this.computeAABB(),N.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),c.calculateInertia(N,this.mass,U),this.invInertia.set(U.x>0&&!P?1/U.x:0,U.y>0&&!P?1/U.y:0,U.z>0&&!P?1/U.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(N,U){var P=new r;return N.vsub(this.position,P),this.angularVelocity.cross(P,U),this.velocity.vadd(U,U),U}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,i){t("./Body");var s=t("../math/Vec3"),r=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),a=t("../objects/WheelInfo");n.exports=h;function h(H){this.chassisBody=H.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof H.indexRightAxis<"u"?H.indexRightAxis:1,this.indexForwardAxis=typeof H.indexForwardAxis<"u"?H.indexForwardAxis:0,this.indexUpAxis=typeof H.indexUpAxis<"u"?H.indexUpAxis:2}new s,new s,new s;var c=new s,l=new s,d=new s;new o,h.prototype.addWheel=function(H){H=H||{};var B=new a(H),ee=this.wheelInfos.length;return this.wheelInfos.push(B),ee},h.prototype.setSteeringValue=function(H,B){var ee=this.wheelInfos[B];ee.steering=H},new s,h.prototype.applyEngineForce=function(H,B){this.wheelInfos[B].engineForce=H},h.prototype.setBrake=function(H,B){this.wheelInfos[B].brake=H},h.prototype.addToWorld=function(H){this.constraints,H.add(this.chassisBody);var B=this;this.preStepCallback=function(){B.updateVehicle(H.dt)},H.addEventListener("preStep",this.preStepCallback),this.world=H},h.prototype.getVehicleAxisWorld=function(H,B){B.set(H===0?1:0,H===1?1:0,H===2?1:0),this.chassisBody.vectorToWorldFrame(B,B)},h.prototype.updateVehicle=function(H){for(var B=this.wheelInfos,ee=B.length,$=this.chassisBody,V=0;V<ee;V++)this.updateWheelTransform(V);this.currentVehicleSpeedKmHour=3.6*$.velocity.norm();var q=new s;this.getVehicleAxisWorld(this.indexForwardAxis,q),q.dot($.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var V=0;V<ee;V++)this.castRay(B[V]);this.updateSuspension(H);for(var E=new s,T=new s,V=0;V<ee;V++){var C=B[V],G=C.suspensionForce;G>C.maxSuspensionForce&&(G=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(G*H,E),C.raycastResult.hitPointWorld.vsub($.position,T),$.applyImpulse(E,C.raycastResult.hitPointWorld)}this.updateFriction(H);var F=new s,te=new s,Y=new s;for(V=0;V<ee;V++){var C=B[V];$.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,Y);var J=1;switch(this.indexUpAxis){case 1:J=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var se=te.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(se,F),te.vsub(F,te);var Ee=te.dot(Y);C.deltaRotation=J*Ee*H/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*H),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},h.prototype.updateSuspension=function(H){for(var B=this.chassisBody,ee=B.mass,$=this.wheelInfos,V=$.length,q=0;q<V;q++){var E=$[q];if(E.isInContact){var T,C=E.suspensionRestLength,G=E.suspensionLength,F=C-G;T=E.suspensionStiffness*F*E.clippedInvContactDotSuspension;var te=E.suspensionRelativeVelocity,Y;te<0?Y=E.dampingCompression:Y=E.dampingRelaxation,T-=Y*te,E.suspensionForce=T*ee,E.suspensionForce<0&&(E.suspensionForce=0)}else E.suspensionForce=0}},h.prototype.removeFromWorld=function(H){this.constraints,H.remove(this.chassisBody),H.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new s,g=new s;h.prototype.castRay=function(H){var B=f,ee=g;this.updateWheelTransformWorld(H);var $=this.chassisBody,V=-1,q=H.suspensionRestLength+H.radius;H.directionWorld.scale(q,B);var E=H.chassisConnectionPointWorld;E.vadd(B,ee);var T=H.raycastResult;T.reset();var C=$.collisionResponse;$.collisionResponse=!1,this.world.rayTest(E,ee,T),$.collisionResponse=C;var G=T.body;if(H.raycastResult.groundObject=0,G){V=T.distance,H.raycastResult.hitNormalWorld=T.hitNormalWorld,H.isInContact=!0;var F=T.distance;H.suspensionLength=F-H.radius;var te=H.suspensionRestLength-H.maxSuspensionTravel,Y=H.suspensionRestLength+H.maxSuspensionTravel;H.suspensionLength<te&&(H.suspensionLength=te),H.suspensionLength>Y&&(H.suspensionLength=Y,H.raycastResult.reset());var J=H.raycastResult.hitNormalWorld.dot(H.directionWorld),se=new s;$.getVelocityAtWorldPoint(H.raycastResult.hitPointWorld,se);var Ee=H.raycastResult.hitNormalWorld.dot(se);if(J>=-.1)H.suspensionRelativeVelocity=0,H.clippedInvContactDotSuspension=1/.1;else{var pe=-1/J;H.suspensionRelativeVelocity=Ee*pe,H.clippedInvContactDotSuspension=pe}}else H.suspensionLength=H.suspensionRestLength+0*H.maxSuspensionTravel,H.suspensionRelativeVelocity=0,H.directionWorld.scale(-1,H.raycastResult.hitNormalWorld),H.clippedInvContactDotSuspension=1;return V},h.prototype.updateWheelTransformWorld=function(H){H.isInContact=!1;var B=this.chassisBody;B.pointToWorldFrame(H.chassisConnectionPointLocal,H.chassisConnectionPointWorld),B.vectorToWorldFrame(H.directionLocal,H.directionWorld),B.vectorToWorldFrame(H.axleLocal,H.axleWorld)},h.prototype.updateWheelTransform=function(H){var B=c,ee=l,$=d,V=this.wheelInfos[H];this.updateWheelTransformWorld(V),V.directionLocal.scale(-1,B),ee.copy(V.axleLocal),B.cross(ee,$),$.normalize(),ee.normalize();var q=V.steering,E=new r;E.setFromAxisAngle(B,q);var T=new r;T.setFromAxisAngle(ee,V.rotation);var C=V.worldTransform.quaternion;this.chassisBody.quaternion.mult(E,C),C.mult(T,C),C.normalize();var G=V.worldTransform.position;G.copy(V.directionWorld),G.scale(V.suspensionLength,G),G.vadd(V.chassisConnectionPointWorld,G)};var v=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];h.prototype.getWheelTransformWorld=function(H){return this.wheelInfos[H].worldTransform};var m=new s,p=[],y=[],_=1;h.prototype.updateFriction=function(H){for(var B=m,ee=this.wheelInfos,$=ee.length,V=this.chassisBody,q=y,E=p,T=0;T<$;T++){var C=ee[T],G=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,q[T]||(q[T]=new s),E[T]||(E[T]=new s)}for(var T=0;T<$;T++){var C=ee[T],G=C.raycastResult.body;if(G){var F=E[T],te=this.getWheelTransformWorld(T);te.vectorToWorldFrame(v[this.indexRightAxis],F);var Y=C.raycastResult.hitNormalWorld,J=F.dot(Y);Y.scale(J,B),F.vsub(B,F),F.normalize(),Y.cross(F,q[T]),q[T].normalize(),C.sideImpulse=ie(V,C.raycastResult.hitPointWorld,G,C.raycastResult.hitPointWorld,F),C.sideImpulse*=_}}var se=1,Ee=.5;this.sliding=!1;for(var T=0;T<$;T++){var C=ee[T],G=C.raycastResult.body,pe=0;if(C.slipInfo=1,G){var ye=0,he=C.brake?C.brake:ye;pe=O(V,G,C.raycastResult.hitPointWorld,q[T],he),pe+=C.engineForce*H;var ve=he/pe;C.slipInfo*=ve}if(C.forwardImpulse=0,C.skidInfo=1,G){C.skidInfo=1;var Ge=C.suspensionForce*H*C.frictionSlip,Ue=Ge,He=Ge*Ue;C.forwardImpulse=pe;var Ae=C.forwardImpulse*Ee,je=C.sideImpulse*se,D=Ae*Ae+je*je;if(C.sliding=!1,D>He){this.sliding=!0,C.sliding=!0;var ve=Ge/Math.sqrt(D);C.skidInfo*=ve}}}if(this.sliding)for(var T=0;T<$;T++){var C=ee[T];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var T=0;T<$;T++){var C=ee[T],A=new s;if(A.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var ne=new s;q[T].scale(C.forwardImpulse,ne),V.applyImpulse(ne,A)}if(C.sideImpulse!==0){var G=C.raycastResult.body,de=new s;de.copy(C.raycastResult.hitPointWorld);var xe=new s;E[T].scale(C.sideImpulse,xe),V.pointToLocalFrame(A,A),A["xyz"[this.indexUpAxis]]*=C.rollInfluence,V.pointToWorldFrame(A,A),V.applyImpulse(xe,A),xe.scale(-1,xe),G.applyImpulse(xe,de)}}};var x=new s,M=new s,L=new s;function O(H,B,ee,$,V){var q=0,E=ee,T=x,C=M,G=L;H.getVelocityAtWorldPoint(E,T),B.getVelocityAtWorldPoint(E,C),T.vsub(C,G);var F=$.dot(G),te=U(H,ee,$),Y=U(B,ee,$),J=1,se=J/(te+Y);return q=-F*se,V<q&&(q=V),q<-V&&(q=-V),q}var I=new s,w=new s,b=new s,N=new s;function U(H,B,ee){var $=I,V=w,q=b,E=N;return B.vsub(H.position,$),$.cross(ee,V),H.invInertiaWorld.vmult(V,E),E.cross($,q),H.invMass+ee.dot(q)}var P=new s,k=new s,X=new s;function ie(H,B,ee,$,V,J){var E=V.norm2();if(E>1.1)return 0;var T=P,C=k,G=X;H.getVelocityAtWorldPoint(B,T),ee.getVelocityAtWorldPoint($,C),T.vsub(C,G);var F=V.dot(G),te=.2,Y=1/(H.invMass+ee.invMass),J=-te*F*Y;return J}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,i){var s=t("./Body"),r=t("../shapes/Sphere"),o=t("../shapes/Box"),a=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=c;function c(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new a(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var g=new o(new a(5,2,.5));this.chassisBody=new s(1,g)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}c.prototype.addWheel=function(f){f=f||{};var g=f.body;g||(g=new s(1,new r(1.2))),this.wheelBodies.push(g),this.wheelForces.push(0),new a;var v=typeof f.position<"u"?f.position.clone():new a,m=new a;this.chassisBody.pointToWorldFrame(v,m),g.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new a(0,1,0);this.wheelAxes.push(p);var y=new h(this.chassisBody,g,{pivotA:v,axisA:p,pivotB:a.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},c.prototype.setSteeringValue=function(f,g){var v=this.wheelAxes[g],m=Math.cos(f),p=Math.sin(f),y=v.x,_=v.y;this.constraints[g].axisA.set(m*y-p*_,p*y+m*_,0)},c.prototype.setMotorSpeed=function(f,g){var v=this.constraints[g];v.enableMotor(),v.motorTargetVelocity=f},c.prototype.disableMotor=function(f){var g=this.constraints[f];g.disableMotor()};var l=new a;c.prototype.setWheelForce=function(f,g){this.wheelForces[g]=f},c.prototype.applyWheelForce=function(f,g){var v=this.wheelAxes[g],m=this.wheelBodies[g],p=m.torque;v.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},c.prototype.addToWorld=function(f){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)f.add(v[m]);for(var m=0;m<g.length;m++)f.addConstraint(g[m]);f.addEventListener("preStep",this._update.bind(this))},c.prototype._update=function(){for(var f=this.wheelForces,g=0;g<f.length;g++)this.applyWheelForce(f[g],g)},c.prototype.removeFromWorld=function(f){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)f.remove(v[m]);for(var m=0;m<g.length;m++)f.removeConstraint(g[m])};var d=new a;c.prototype.getWheelSpeed=function(f){var g=this.wheelAxes[f],v=this.wheelBodies[f],m=v.angularVelocity;return this.chassisBody.vectorToWorldFrame(g,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,i){n.exports=r,t("../shapes/Shape");var s=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(g){this.particles.push(g),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(g){var v=this.particles.indexOf(g);v!==-1&&(this.particles.splice(v,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new s;r.prototype.getNeighbors=function(g,v){for(var m=this.particles.length,p=g.id,y=this.smoothingRadius*this.smoothingRadius,_=o,x=0;x!==m;x++){var M=this.particles[x];M.position.vsub(g.position,_),p!==M.id&&_.norm2()<y&&v.push(M)}};var a=new s,h=new s,c=new s,l=new s,d=new s,f=new s;r.prototype.update=function(){for(var g=this.particles.length,v=a,m=this.speedOfSound,p=this.eps,y=0;y!==g;y++){var _=this.particles[y],x=this.neighbors[y];x.length=0,this.getNeighbors(_,x),x.push(this.particles[y]);for(var M=x.length,L=0,O=0;O!==M;O++){_.position.vsub(x[O].position,v);var I=v.norm(),w=this.w(I);L+=x[O].mass*w}this.densities[y]=L,this.pressures[y]=m*m*(this.densities[y]-this.density)}for(var b=h,N=c,U=l,P=d,k=f,y=0;y!==g;y++){var X=this.particles[y];b.set(0,0,0),N.set(0,0,0);for(var ie,H,x=this.neighbors[y],M=x.length,O=0;O!==M;O++){var B=x[O];X.position.vsub(B.position,P);var ee=P.norm();ie=-B.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+p)+this.pressures[O]/(this.densities[O]*this.densities[O]+p)),this.gradw(P,U),U.mult(ie,U),b.vadd(U,b),B.velocity.vsub(X.velocity,k),k.mult(1/(1e-4+this.densities[y]*this.densities[O])*this.viscosity*B.mass,k),H=this.nablaw(ee),k.mult(H,k),N.vadd(k,N)}N.mult(X.mass,N),b.mult(X.mass,b),X.force.vadd(N,X.force),X.force.vadd(b,X.force)}},r.prototype.w=function(g){var v=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(v,9))*Math.pow(v*v-g*g,3)},r.prototype.gradw=function(g,v){var m=g.norm(),p=this.smoothingRadius;g.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),v)},r.prototype.nablaw=function(g){var v=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(v,9))*(v*v-g*g)*(7*g*g-3*v*v);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,i){var s=t("../math/Vec3");n.exports=r;function r(y,_,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=y,this.bodyB=_,this.localAnchorA=new s,this.localAnchorB=new s,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}r.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},r.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},r.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},r.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var o=new s,a=new s,h=new s,c=new s,l=new s,d=new s,f=new s,g=new s,v=new s,m=new s,p=new s;r.prototype.applyForce=function(){var y=this.stiffness,_=this.damping,x=this.restLength,M=this.bodyA,L=this.bodyB,O=o,I=a,w=h,b=c,N=p,U=l,P=d,k=f,X=g,ie=v,H=m;this.getWorldAnchorA(U),this.getWorldAnchorB(P),U.vsub(M.position,k),P.vsub(L.position,X),P.vsub(U,O);var B=O.norm();I.copy(O),I.normalize(),L.velocity.vsub(M.velocity,w),L.angularVelocity.cross(X,N),w.vadd(N,w),M.angularVelocity.cross(k,N),w.vsub(N,w),I.mult(-y*(B-x)-_*w.dot(I),b),M.force.vsub(b,M.force),L.force.vadd(b,L.force),k.cross(b,ie),X.cross(b,H),M.torque.vsub(ie,M.torque),L.torque.vadd(H,L.torque)}},{"../math/Vec3":30}],36:[function(t,n,i){var s=t("../math/Vec3"),r=t("../math/Transform"),o=t("../collision/RaycastResult"),a=t("../utils/Utils");n.exports=h;function h(d){d=a.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new r,this.isInContact=!1}var l=new s,c=new s,l=new s;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var g=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,c),d.getVelocityAtWorldPoint(c,l);var v=f.hitNormalWorld.dot(l);if(g>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/g;this.suspensionRelativeVelocity=v*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3"),o=t("./ConvexPolyhedron");function a(l){s.call(this),this.type=s.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a,a.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,g=r,v=[new g(-l,-d,-f),new g(l,-d,-f),new g(l,d,-f),new g(-l,d,-f),new g(-l,-d,f),new g(l,-d,f),new g(l,d,f),new g(-l,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new g(0,0,1),new g(0,1,0),new g(1,0,0);var p=new o(v,m);this.convexPolyhedronRepresentation=p,p.material=this.material},a.prototype.calculateLocalInertia=function(l,d){return d=d||new r,a.calculateInertia(this.halfExtents,l,d),d},a.calculateInertia=function(l,d,f){var g=l;f.x=1/12*d*(2*g.y*2*g.y+2*g.z*2*g.z),f.y=1/12*d*(2*g.x*2*g.x+2*g.z*2*g.z),f.z=1/12*d*(2*g.y*2*g.y+2*g.x*2*g.x)},a.prototype.getSideNormals=function(l,d){var f=l,g=this.halfExtents;if(f[0].set(g.x,0,0),f[1].set(0,g.y,0),f[2].set(0,0,g.z),f[3].set(-g.x,0,0),f[4].set(0,-g.y,0),f[5].set(0,0,-g.z),d!==void 0)for(var v=0;v!==f.length;v++)d.vmult(f[v],f[v]);return f},a.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new r;new r,a.prototype.forEachWorldCorner=function(l,d,f){for(var g=this.halfExtents,v=[[g.x,g.y,g.z],[-g.x,g.y,g.z],[-g.x,-g.y,g.z],[-g.x,-g.y,-g.z],[g.x,-g.y,-g.z],[g.x,g.y,-g.z],[-g.x,g.y,-g.z],[g.x,-g.y,g.z]],m=0;m<v.length;m++)h.set(v[m][0],v[m][1],v[m][2]),d.vmult(h,h),l.vadd(h,h),f(h.x,h.y,h.z)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.calculateWorldAABB=function(l,d,f,g){var v=this.halfExtents;c[0].set(v.x,v.y,v.z),c[1].set(-v.x,v.y,v.z),c[2].set(-v.x,-v.y,v.z),c[3].set(-v.x,-v.y,-v.z),c[4].set(v.x,-v.y,-v.z),c[5].set(v.x,v.y,-v.z),c[6].set(-v.x,v.y,-v.z),c[7].set(v.x,-v.y,v.z);var m=c[0];d.vmult(m,m),l.vadd(m,m),g.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=c[p];d.vmult(m,m),l.vadd(m,m);var y=m.x,_=m.y,x=m.z;y>g.x&&(g.x=y),_>g.y&&(g.y=_),x>g.z&&(g.z=x),y<f.x&&(f.x=y),_<f.y&&(f.y=_),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function a(V,q,E){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=V||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=q||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=E?E.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a;var h=new r;a.prototype.computeEdges=function(){var V=this.faces,q=this.vertices;q.length;var E=this.uniqueEdges;E.length=0;for(var T=h,C=0;C!==V.length;C++)for(var G=V[C],F=G.length,te=0;te!==F;te++){var Y=(te+1)%F;q[G[te]].vsub(q[G[Y]],T),T.normalize();for(var J=!1,se=0;se!==E.length;se++)if(E[se].almostEquals(T)||E[se].almostEquals(T)){J=!0;break}J||E.push(T.clone())}},a.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var V=0;V<this.faces.length;V++){for(var q=0;q<this.faces[V].length;q++)if(!this.vertices[this.faces[V][q]])throw new Error("Vertex "+this.faces[V][q]+" not found!");var E=this.faceNormals[V]||new r;this.getFaceNormal(V,E),E.negate(E),this.faceNormals[V]=E;var T=this.vertices[this.faces[V][0]];if(E.dot(T)<0){console.error(".faceNormals["+V+"] = Vec3("+E.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var q=0;q<this.faces[V].length;q++)console.warn(".vertices["+this.faces[V][q]+"] = Vec3("+this.vertices[this.faces[V][q]].toString()+")")}}};var c=new r,l=new r;a.computeNormal=function(V,q,E,T){q.vsub(V,l),E.vsub(q,c),c.cross(l,T),T.isZero()||T.normalize()},a.prototype.getFaceNormal=function(V,q){var E=this.faces[V],T=this.vertices[E[0]],C=this.vertices[E[1]],G=this.vertices[E[2]];return a.computeNormal(T,C,G,q)};var d=new r;a.prototype.clipAgainstHull=function(V,q,E,T,C,G,F,te,Y){for(var J=d,se=-1,Ee=-Number.MAX_VALUE,pe=0;pe<E.faces.length;pe++){J.copy(E.faceNormals[pe]),C.vmult(J,J);var ye=J.dot(G);ye>Ee&&(Ee=ye,se=pe)}for(var he=[],ve=E.faces[se],Ge=ve.length,Ue=0;Ue<Ge;Ue++){var He=E.vertices[ve[Ue]],Ae=new r;Ae.copy(He),C.vmult(Ae,Ae),T.vadd(Ae,Ae),he.push(Ae)}se>=0&&this.clipFaceAgainstHull(G,V,q,he,F,te,Y)};var f=new r,g=new r,v=new r,m=new r,p=new r,y=new r;a.prototype.findSeparatingAxis=function(V,q,E,T,C,G,F,te){var Y=f,J=g,se=v,Ee=m,pe=p,ye=y,he=Number.MAX_VALUE,ve=this;if(ve.uniqueAxes)for(var Ue=0;Ue!==ve.uniqueAxes.length;Ue++){E.vmult(ve.uniqueAxes[Ue],Y);var Ae=ve.testSepAxis(Y,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(Y))}else for(var Ge=F?F.length:ve.faces.length,Ue=0;Ue<Ge;Ue++){var He=F?F[Ue]:Ue;Y.copy(ve.faceNormals[He]),E.vmult(Y,Y);var Ae=ve.testSepAxis(Y,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(Y))}if(V.uniqueAxes)for(var Ue=0;Ue!==V.uniqueAxes.length;Ue++){C.vmult(V.uniqueAxes[Ue],J);var Ae=ve.testSepAxis(J,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(J))}else for(var je=te?te.length:V.faces.length,Ue=0;Ue<je;Ue++){var He=te?te[Ue]:Ue;J.copy(V.faceNormals[He]),C.vmult(J,J);var Ae=ve.testSepAxis(J,V,q,E,T,C);if(Ae===!1)return!1;Ae<he&&(he=Ae,G.copy(J))}for(var D=0;D!==ve.uniqueEdges.length;D++){E.vmult(ve.uniqueEdges[D],Ee);for(var A=0;A!==V.uniqueEdges.length;A++)if(C.vmult(V.uniqueEdges[A],pe),Ee.cross(pe,ye),!ye.almostZero()){ye.normalize();var ne=ve.testSepAxis(ye,V,q,E,T,C);if(ne===!1)return!1;ne<he&&(he=ne,G.copy(ye))}}return T.vsub(q,se),se.dot(G)>0&&G.negate(G),!0};var _=[],x=[];a.prototype.testSepAxis=function(V,q,E,T,C,G){var F=this;a.project(F,V,E,T,_),a.project(q,V,C,G,x);var te=_[0],Y=_[1],J=x[0],se=x[1],Ee=te-se,pe=J-Y,ye=Ee<pe?Ee:pe;return ye};var M=new r,L=new r;a.prototype.calculateLocalInertia=function(V,q){this.computeLocalAABB(M,L);var E=L.x-M.x,T=L.y-M.y,C=L.z-M.z;q.x=1/12*V*(2*T*2*T+2*C*2*C),q.y=1/12*V*(2*E*2*E+2*C*2*C),q.z=1/12*V*(2*T*2*T+2*E*2*E)},a.prototype.getPlaneConstantOfFace=function(V){var q=this.faces[V],E=this.faceNormals[V],T=this.vertices[q[0]],C=-E.dot(T);return C};var O=new r,I=new r,w=new r,b=new r,N=new r,U=new r,P=new r,k=new r;a.prototype.clipFaceAgainstHull=function(V,q,E,T,C,G,F){for(var te=O,Y=I,J=w,se=b,Ee=N,pe=U,ye=P,he=k,ve=this,Ge=[],Ue=T,He=Ge,Ae=-1,je=Number.MAX_VALUE,D=0;D<ve.faces.length;D++){te.copy(ve.faceNormals[D]),E.vmult(te,te);var A=te.dot(V);A<je&&(je=A,Ae=D)}if(!(Ae<0)){var ne=ve.faces[Ae];ne.connectedFaces=[];for(var de=0;de<ve.faces.length;de++)for(var xe=0;xe<ve.faces[de].length;xe++)ne.indexOf(ve.faces[de][xe])!==-1&&de!==Ae&&ne.connectedFaces.indexOf(de)===-1&&ne.connectedFaces.push(de);Ue.length;for(var _e=ne.length,W=0;W<_e;W++){var me=ve.vertices[ne[W]],re=ve.vertices[ne[(W+1)%_e]];me.vsub(re,Y),J.copy(Y),E.vmult(J,J),q.vadd(J,J),se.copy(this.faceNormals[Ae]),E.vmult(se,se),q.vadd(se,se),J.cross(se,Ee),Ee.negate(Ee),pe.copy(me),E.vmult(pe,pe),q.vadd(pe,pe),-pe.dot(Ee);var Oe;{var Re=ne.connectedFaces[W];ye.copy(this.faceNormals[Re]);var Be=this.getPlaneConstantOfFace(Re);he.copy(ye),E.vmult(he,he);var Oe=Be-he.dot(q)}for(this.clipFaceAgainstPlane(Ue,He,he,Oe);Ue.length;)Ue.shift();for(;He.length;)Ue.push(He.shift())}ye.copy(this.faceNormals[Ae]);var Be=this.getPlaneConstantOfFace(Ae);he.copy(ye),E.vmult(he,he);for(var Oe=Be-he.dot(q),de=0;de<Ue.length;de++){var Pe=he.dot(Ue[de])+Oe;if(Pe<=C&&(console.log("clamped: depth="+Pe+" to minDist="+(C+"")),Pe=C),Pe<=G){var Ve=Ue[de];if(Pe<=0){var We={point:Ve,normal:he,depth:Pe};F.push(We)}}}}},a.prototype.clipFaceAgainstPlane=function(V,q,E,T){var C,G,F=V.length;if(F<2)return q;var te=V[V.length-1],Y=V[0];C=E.dot(te)+T;for(var J=0;J<F;J++){if(Y=V[J],G=E.dot(Y)+T,C<0)if(G<0){var se=new r;se.copy(Y),q.push(se)}else{var se=new r;te.lerp(Y,C/(C-G),se),q.push(se)}else if(G<0){var se=new r;te.lerp(Y,C/(C-G),se),q.push(se),q.push(Y)}te=Y,C=G}return q},a.prototype.computeWorldVertices=function(V,q){for(var E=this.vertices.length;this.worldVertices.length<E;)this.worldVertices.push(new r);for(var T=this.vertices,C=this.worldVertices,G=0;G!==E;G++)q.vmult(T[G],C[G]),V.vadd(C[G],C[G]);this.worldVerticesNeedsUpdate=!1},new r,a.prototype.computeLocalAABB=function(V,q){var E=this.vertices.length,T=this.vertices;V.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),q.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<E;C++){var G=T[C];G.x<V.x?V.x=G.x:G.x>q.x&&(q.x=G.x),G.y<V.y?V.y=G.y:G.y>q.y&&(q.y=G.y),G.z<V.z?V.z=G.z:G.z>q.z&&(q.z=G.z)}},a.prototype.computeWorldFaceNormals=function(V){for(var q=this.faceNormals.length;this.worldFaceNormals.length<q;)this.worldFaceNormals.push(new r);for(var E=this.faceNormals,T=this.worldFaceNormals,C=0;C!==q;C++)V.vmult(E[C],T[C]);this.worldFaceNormalsNeedsUpdate=!1},a.prototype.updateBoundingSphereRadius=function(){for(var V=0,q=this.vertices,E=0,T=q.length;E!==T;E++){var C=q[E].norm2();C>V&&(V=C)}this.boundingSphereRadius=Math.sqrt(V)};var X=new r;a.prototype.calculateWorldAABB=function(V,q,E,T){for(var C=this.vertices.length,G=this.vertices,F,te,Y,J,se,Ee,pe=0;pe<C;pe++){X.copy(G[pe]),q.vmult(X,X),V.vadd(X,X);var ye=X;ye.x<F||F===void 0?F=ye.x:(ye.x>J||J===void 0)&&(J=ye.x),ye.y<te||te===void 0?te=ye.y:(ye.y>se||se===void 0)&&(se=ye.y),ye.z<Y||Y===void 0?Y=ye.z:(ye.z>Ee||Ee===void 0)&&(Ee=ye.z)}E.set(F,te,Y),T.set(J,se,Ee)},a.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},a.prototype.getAveragePointLocal=function(V){V=V||new r;for(var q=this.vertices.length,E=this.vertices,T=0;T<q;T++)V.vadd(E[T],V);return V.mult(1/q,V),V},a.prototype.transformAllPoints=function(V,q){var E=this.vertices.length,T=this.vertices;if(q){for(var C=0;C<E;C++){var G=T[C];q.vmult(G,G)}for(var C=0;C<this.faceNormals.length;C++){var G=this.faceNormals[C];q.vmult(G,G)}}if(V)for(var C=0;C<E;C++){var G=T[C];G.vadd(V,G)}};var ie=new r,H=new r,B=new r;a.prototype.pointIsInside=function(V){var q=this.vertices.length,E=this.vertices,T=this.faces,C=this.faceNormals,G=null,F=this.faces.length,te=ie;this.getAveragePointLocal(te);for(var Y=0;Y<F;Y++){this.faces[Y].length;var q=C[Y],J=E[T[Y][0]],se=H;V.vsub(J,se);var Ee=q.dot(se),pe=B;te.vsub(J,pe);var ye=q.dot(pe);if(Ee<0&&ye>0||Ee>0&&ye<0)return!1}return G?1:-1},new r;var ee=new r,$=new r;a.project=function(V,q,E,T,C){var G=V.vertices.length,F=ee,te=0,Y=0,J=$,se=V.vertices;J.setZero(),o.vectorToLocalFrame(E,T,q,F),o.pointToLocalFrame(E,T,J,J);var Ee=J.dot(F);Y=te=se[0].dot(F);for(var pe=1;pe<G;pe++){var ye=se[pe].dot(F);ye>te&&(te=ye),ye<Y&&(Y=ye)}if(Y-=Ee,te-=Ee,Y>te){var he=Y;Y=te,te=he}C[0]=te,C[1]=Y}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,i){n.exports=a;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function a(h,c,l,d){var f=d,g=[],v=[],m=[],p=[],y=[],_=Math.cos,x=Math.sin;g.push(new r(c*_(0),c*x(0),-l*.5)),p.push(0),g.push(new r(h*_(0),h*x(0),l*.5)),y.push(1);for(var M=0;M<f;M++){var L=2*Math.PI/f*(M+1),O=2*Math.PI/f*(M+.5);M<f-1?(g.push(new r(c*_(L),c*x(L),-l*.5)),p.push(2*M+2),g.push(new r(h*_(L),h*x(L),l*.5)),y.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(f%2===1||M<f/2)&&v.push(new r(_(O),x(O),0))}m.push(y),v.push(new r(0,0,1));for(var I=[],M=0;M<p.length;M++)I.push(p[p.length-M-1]);m.push(I),this.type=s.types.CONVEXPOLYHEDRON,o.call(this,g,m,v)}a.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,i){var s=t("./Shape"),r=t("./ConvexPolyhedron"),o=t("../math/Vec3"),a=t("../utils/Utils");n.exports=h;function h(c,l){l=a.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=c,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new r,this.pillarOffset=new o,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new s,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var c=this.data,l=c[0][0],d=0;d!==c.length;d++)for(var f=0;f!==c[d].length;f++){var g=c[d][f];g<l&&(l=g)}this.minValue=l},h.prototype.updateMaxValue=function(){for(var c=this.data,l=c[0][0],d=0;d!==c.length;d++)for(var f=0;f!==c[d].length;f++){var g=c[d][f];g>l&&(l=g)}this.maxValue=l},h.prototype.setHeightValueAtIndex=function(c,l,d){var f=this.data;f[c][l]=d,this.clearCachedConvexTrianglePillar(c,l,!1),c>0&&(this.clearCachedConvexTrianglePillar(c-1,l,!0),this.clearCachedConvexTrianglePillar(c-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(c,l-1,!0),this.clearCachedConvexTrianglePillar(c,l-1,!1)),l>0&&c>0&&this.clearCachedConvexTrianglePillar(c-1,l-1,!0)},h.prototype.getRectMinMax=function(c,l,d,f,g){g=g||[];for(var v=this.data,m=this.minValue,p=c;p<=d;p++)for(var y=l;y<=f;y++){var _=v[p][y];_>m&&(m=_)}g[0]=this.minValue,g[1]=m},h.prototype.getIndexOfPosition=function(c,l,d,f){var g=this.elementSize,v=this.data,m=Math.floor(c/g),p=Math.floor(l/g);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=v.length-1&&(m=v.length-1),p>=v[0].length-1&&(p=v[0].length-1)),!(m<0||p<0||m>=v.length-1||p>=v[0].length-1)},h.prototype.getHeightAt=function(c,l,d){var f=[];this.getIndexOfPosition(c,l,f,d);var g=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,g),(g[0]+g[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(c,l,d){return c+"_"+l+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(c,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]},h.prototype.setCachedConvexTrianglePillar=function(c,l,d,f,g){this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]={convex:f,offset:g}},h.prototype.clearCachedConvexTrianglePillar=function(c,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]},h.prototype.getConvexTrianglePillar=function(c,l,d){var f=this.pillarConvex,g=this.pillarOffset;if(this.cacheEnabled){var v=this.getCachedConvexTrianglePillar(c,l,d);if(v){this.pillarConvex=v.convex,this.pillarOffset=v.offset;return}f=new r,g=new o,this.pillarConvex=f,this.pillarOffset=g}var v=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var y=0;y<6;y++)f.vertices[y]||(f.vertices[y]=new o);p.length=5;for(var y=0;y<5;y++)p[y]||(p[y]=[]);var _=f.vertices,x=(Math.min(v[c][l],v[c+1][l],v[c][l+1],v[c+1][l+1])-this.minValue)/2+this.minValue;d?(g.set((c+.75)*m,(l+.75)*m,x),_[0].set(.25*m,.25*m,v[c+1][l+1]-x),_[1].set(-.75*m,.25*m,v[c][l+1]-x),_[2].set(.25*m,-.75*m,v[c+1][l]-x),_[3].set(.25*m,.25*m,-x-1),_[4].set(-.75*m,.25*m,-x-1),_[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(g.set((c+.25)*m,(l+.25)*m,x),_[0].set(-.25*m,-.25*m,v[c][l]-x),_[1].set(.75*m,-.25*m,v[c+1][l]-x),_[2].set(-.25*m,.75*m,v[c][l+1]-x),_[3].set(-.25*m,-.25*m,-x-1),_[4].set(.75*m,-.25*m,-x-1),_[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(c,l,d,f,g)},h.prototype.calculateLocalInertia=function(c,l){return l=l||new o,l.set(0,0,0),l},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(c,l,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var c=this.data,l=this.elementSize;this.boundingSphereRadius=new o(c.length*l,c[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,i){n.exports=o;var s=t("./Shape"),r=t("../math/Vec3");function o(){s.call(this),this.type=s.types.PARTICLE}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(a,h){return h=h||new r,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(a,h,c,l){c.copy(a),l.copy(a)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,i){n.exports=o;var s=t("./Shape"),r=t("../math/Vec3");function o(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var c=this.worldNormal;c.set(0,0,1),h.vmult(c,c),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,c){return c=c||new r,c},o.prototype.volume=function(){return Number.MAX_VALUE};var a=new r;o.prototype.calculateWorldAABB=function(h,c,l,d){a.set(0,0,1),c.vmult(a,a);var f=Number.MAX_VALUE;l.set(-f,-f,-f),d.set(f,f,f),a.x===1&&(d.x=h.x),a.y===1&&(d.y=h.y),a.z===1&&(d.z=h.z),a.x===-1&&(l.x=h.x),a.y===-1&&(l.y=h.y),a.z===-1&&(l.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,i){n.exports=s;var s=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(r,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,i){n.exports=o;var s=t("./Shape"),r=t("../math/Vec3");function o(a){if(s.call(this),this.radius=a!==void 0?Number(a):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(a,h){h=h||new r;var c=2*a*this.radius*this.radius/5;return h.x=c,h.y=c,h.z=c,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(a,h,c,l){for(var d=this.radius,f=["x","y","z"],g=0;g<f.length;g++){var v=f[g];c[v]=a[v]-d,l[v]=a[v]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,i){n.exports=c;var s=t("./Shape"),r=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),a=t("../collision/AABB"),h=t("../utils/Octree");function c(I,w){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(I),this.indices=new Int16Array(w),this.normals=new Float32Array(w.length),this.aabb=new a,this.edges=null,this.scale=new r(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}c.prototype=new s,c.prototype.constructor=c;var l=new r;c.prototype.updateTree=function(){var I=this.tree;I.reset(),I.aabb.copy(this.aabb);var w=this.scale;I.aabb.lowerBound.x*=1/w.x,I.aabb.lowerBound.y*=1/w.y,I.aabb.lowerBound.z*=1/w.z,I.aabb.upperBound.x*=1/w.x,I.aabb.upperBound.y*=1/w.y,I.aabb.upperBound.z*=1/w.z;for(var b=new a,N=new r,U=new r,P=new r,k=[N,U,P],X=0;X<this.indices.length/3;X++){var ie=X*3;this._getUnscaledVertex(this.indices[ie],N),this._getUnscaledVertex(this.indices[ie+1],U),this._getUnscaledVertex(this.indices[ie+2],P),b.setFromPoints(k),I.insert(b,X)}I.removeEmptyNodes()};var d=new a;c.prototype.getTrianglesInAABB=function(I,w){d.copy(I);var b=this.scale,N=b.x,U=b.y,P=b.z,k=d.lowerBound,X=d.upperBound;return k.x/=N,k.y/=U,k.z/=P,X.x/=N,X.y/=U,X.z/=P,this.tree.aabbQuery(d,w)},c.prototype.setScale=function(I){var w=this.scale.x===this.scale.y===this.scale.z,b=I.x===I.y===I.z;w&&b||this.updateNormals(),this.scale.copy(I),this.updateAABB(),this.updateBoundingSphereRadius()},c.prototype.updateNormals=function(){for(var I=l,w=this.normals,b=0;b<this.indices.length/3;b++){var N=b*3,U=this.indices[N],P=this.indices[N+1],k=this.indices[N+2];this.getVertex(U,p),this.getVertex(P,y),this.getVertex(k,_),c.computeNormal(y,p,_,I),w[N]=I.x,w[N+1]=I.y,w[N+2]=I.z}},c.prototype.updateEdges=function(){for(var I={},w=function(ie,H){var B=U<P?U+"_"+P:P+"_"+U;I[B]=!0},b=0;b<this.indices.length/3;b++){var N=b*3,U=this.indices[N],P=this.indices[N+1];this.indices[N+2],w(),w(),w()}var k=Object.keys(I);this.edges=new Int16Array(k.length*2);for(var b=0;b<k.length;b++){var X=k[b].split("_");this.edges[2*b]=parseInt(X[0],10),this.edges[2*b+1]=parseInt(X[1],10)}},c.prototype.getEdgeVertex=function(I,w,b){var N=this.edges[I*2+(w?1:0)];this.getVertex(N,b)};var f=new r,g=new r;c.prototype.getEdgeVector=function(I,w){var b=f,N=g;this.getEdgeVertex(I,0,b),this.getEdgeVertex(I,1,N),N.vsub(b,w)};var v=new r,m=new r;c.computeNormal=function(I,w,b,N){w.vsub(I,m),b.vsub(w,v),v.cross(m,N),N.isZero()||N.normalize()};var p=new r,y=new r,_=new r;c.prototype.getVertex=function(I,w){var b=this.scale;return this._getUnscaledVertex(I,w),w.x*=b.x,w.y*=b.y,w.z*=b.z,w},c.prototype._getUnscaledVertex=function(I,w){var b=I*3,N=this.vertices;return w.set(N[b],N[b+1],N[b+2])},c.prototype.getWorldVertex=function(I,w,b,N){return this.getVertex(I,N),o.pointToWorldFrame(w,b,N,N),N},c.prototype.getTriangleVertices=function(I,w,b,N){var U=I*3;this.getVertex(this.indices[U],w),this.getVertex(this.indices[U+1],b),this.getVertex(this.indices[U+2],N)},c.prototype.getNormal=function(I,w){var b=I*3;return w.set(this.normals[b],this.normals[b+1],this.normals[b+2])};var x=new a;c.prototype.calculateLocalInertia=function(I,w){this.computeLocalAABB(x);var b=x.upperBound.x-x.lowerBound.x,N=x.upperBound.y-x.lowerBound.y,U=x.upperBound.z-x.lowerBound.z;return w.set(1/12*I*(2*N*2*N+2*U*2*U),1/12*I*(2*b*2*b+2*U*2*U),1/12*I*(2*N*2*N+2*b*2*b))};var M=new r;c.prototype.computeLocalAABB=function(I){var w=I.lowerBound,b=I.upperBound,N=this.vertices.length;this.vertices;var U=M;this.getVertex(0,U),w.copy(U),b.copy(U);for(var P=0;P!==N;P++)this.getVertex(P,U),U.x<w.x?w.x=U.x:U.x>b.x&&(b.x=U.x),U.y<w.y?w.y=U.y:U.y>b.y&&(b.y=U.y),U.z<w.z?w.z=U.z:U.z>b.z&&(b.z=U.z)},c.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},c.prototype.updateBoundingSphereRadius=function(){for(var I=0,w=this.vertices,b=new r,N=0,U=w.length/3;N!==U;N++){this.getVertex(N,b);var P=b.norm2();P>I&&(I=P)}this.boundingSphereRadius=Math.sqrt(I)},new r;var L=new o,O=new a;c.prototype.calculateWorldAABB=function(I,w,b,N){var U=L,P=O;U.position=I,U.quaternion=w,this.aabb.toWorldFrame(U,P),b.copy(P.lowerBound),N.copy(P.upperBound)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.createTorus=function(I,w,b,N,U){I=I||1,w=w||.5,b=b||8,N=N||6,U=U||Math.PI*2;for(var P=[],k=[],X=0;X<=b;X++)for(var ie=0;ie<=N;ie++){var H=ie/N*U,B=X/b*Math.PI*2,ee=(I+w*Math.cos(B))*Math.cos(H),$=(I+w*Math.cos(B))*Math.sin(H),V=w*Math.sin(B);P.push(ee,$,V)}for(var X=1;X<=b;X++)for(var ie=1;ie<=N;ie++){var q=(N+1)*X+ie-1,E=(N+1)*(X-1)+ie-1,T=(N+1)*(X-1)+ie,C=(N+1)*X+ie;k.push(q,E,C),k.push(E,T,C)}return new c(P,k)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,i){n.exports=r,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver");function r(){s.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new s;var o=[],a=[],h=[];r.prototype.solve=function(c,l){var d=0,f=this.iterations,g=this.tolerance*this.tolerance,v=this.equations,m=v.length,p=l.bodies,y=p.length,_=c,x,M,L,O,I,w;if(m!==0)for(var b=0;b!==y;b++)p[b].updateSolveMassProperties();var N=a,U=h,P=o;N.length=m,U.length=m,P.length=m;for(var b=0;b!==m;b++){var k=v[b];P[b]=0,U[b]=k.computeB(_),N[b]=1/k.computeC()}if(m!==0){for(var b=0;b!==y;b++){var X=p[b],ie=X.vlambda,H=X.wlambda;ie.set(0,0,0),H&&H.set(0,0,0)}for(d=0;d!==f;d++){O=0;for(var B=0;B!==m;B++){var k=v[B];x=U[B],M=N[B],w=P[B],I=k.computeGWlambda(),L=M*(x-I-k.eps*w),w+L<k.minForce?L=k.minForce-w:w+L>k.maxForce&&(L=k.maxForce-w),P[B]+=L,O+=L>0?L:-L,k.addToWlambda(L)}if(O*O<g)break}for(var b=0;b!==y;b++){var X=p[b],ee=X.velocity,$=X.angularVelocity;ee.vadd(X.vlambda,ee),$&&$.vadd(X.wlambda,$)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,i){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(r,o){return 0},s.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},s.prototype.removeEquation=function(r){var o=this.equations,a=o.indexOf(r);a!==-1&&o.splice(a,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,i){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var s=t("./Solver"),r=t("../objects/Body");function o(p){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new s;var a=[],h=[],c={bodies:[]},l=r.STATIC;function d(p){for(var y=p.length,_=0;_!==y;_++){var x=p[_];if(!x.visited&&!(x.body.type&l))return x}return!1}var f=[];function g(p,y,_,x){for(f.push(p),p.visited=!0,y(p,_,x);f.length;)for(var M=f.pop(),L;L=d(M.children);)L.visited=!0,y(L,_,x),f.push(L)}function v(p,y,_){y.push(p.body);for(var x=p.eqs.length,M=0;M!==x;M++){var L=p.eqs[M];_.indexOf(L)===-1&&_.push(L)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,y){for(var _=a,x=this.nodePool,M=y.bodies,L=this.equations,O=L.length,I=M.length,w=this.subsolver;x.length<I;)x.push(this.createNode());_.length=I;for(var b=0;b<I;b++)_[b]=x[b];for(var b=0;b!==I;b++){var N=_[b];N.body=M[b],N.children.length=0,N.eqs.length=0,N.visited=!1}for(var U=0;U!==O;U++){var P=L[U],b=M.indexOf(P.bi),k=M.indexOf(P.bj),X=_[b],ie=_[k];X.children.push(ie),X.eqs.push(P),ie.children.push(X),ie.eqs.push(P)}var H,B=0,ee=h;w.tolerance=this.tolerance,w.iterations=this.iterations;for(var $=c;H=d(_);){ee.length=0,$.bodies.length=0,g(H,v,$.bodies,ee);var V=ee.length;ee=ee.sort(m);for(var b=0;b!==V;b++)w.addEquation(ee[b]);w.solve(p,$),w.removeAllEquations(),B++}return B};function m(p,y){return y.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,i){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(r,o){this._listeners===void 0&&(this._listeners={});var a=this._listeners;return a[r]===void 0&&(a[r]=[]),a[r].indexOf(o)===-1&&a[r].push(o),this},hasEventListener:function(r,o){if(this._listeners===void 0)return!1;var a=this._listeners;return a[r]!==void 0&&a[r].indexOf(o)!==-1},removeEventListener:function(r,o){if(this._listeners===void 0)return this;var a=this._listeners;if(a[r]===void 0)return this;var h=a[r].indexOf(o);return h!==-1&&a[r].splice(h,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var o=this._listeners,a=o[r.type];if(a!==void 0){r.target=this;for(var h=0,c=a.length;h<c;h++)a[h].call(this,r)}return this}}},{}],50:[function(t,n,i){var s=t("../collision/AABB"),r=t("../math/Vec3");n.exports=a;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new s,this.data=[],this.children=[]}function a(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}a.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,f){var g=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var v=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;v.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(v[p].insert(l,d,f+1))return!0;m&&(v.length=0)}return g.push(d),!0};var h=new r;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,f=l.upperBound,g=this.children;g.push(new o({aabb:new s({lowerBound:new r(0,0,0)})}),new o({aabb:new s({lowerBound:new r(1,0,0)})}),new o({aabb:new s({lowerBound:new r(1,1,0)})}),new o({aabb:new s({lowerBound:new r(1,1,1)})}),new o({aabb:new s({lowerBound:new r(0,1,1)})}),new o({aabb:new s({lowerBound:new r(0,0,1)})}),new o({aabb:new s({lowerBound:new r(1,0,1)})}),new o({aabb:new s({lowerBound:new r(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var v=this.root||this,m=0;m!==8;m++){var p=g[m];p.root=v;var y=p.aabb.lowerBound;y.x*=h.x,y.y*=h.y,y.z*=h.z,y.vadd(d,y),y.vadd(h,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var f=[this];f.length;){var g=f.pop();g.aabb.overlaps(l)&&Array.prototype.push.apply(d,g.data),Array.prototype.push.apply(f,g.children)}return d};var c=new s;o.prototype.rayQuery=function(l,d,f){return l.getAABB(c),c.toLocalFrame(d,c),this.aabbQuery(c,f),f},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,i){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var r=arguments.length,o=0;o!==r;o++)this.objects.push(arguments[o])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,i){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(r,o){if(r>o){var a=o;o=r,r=a}return this.data[r+"-"+o]},s.prototype.set=function(r,o,a){if(r>o){var h=o;o=r,r=h}var c=r+"-"+o;this.get(r,o)||this.data.keys.push(c),this.data[c]=a},s.prototype.reset=function(){for(var r=this.data,o=r.keys;o.length>0;){var a=o.pop();delete r[a]}}},{}],53:[function(t,n,i){function s(){}n.exports=s,s.defaults=function(r,o){r=r||{};for(var a in o)a in r||(r[a]=o[a]);return r}},{}],54:[function(t,n,i){n.exports=o;var s=t("../math/Vec3"),r=t("./Pool");function o(){r.call(this),this.type=s}o.prototype=new r,o.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,i){n.exports=g;var s=t("../collision/AABB"),r=t("../shapes/Shape"),o=t("../collision/Ray"),a=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var c=t("../math/Quaternion");t("../solver/Solver");var l=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function g(oe){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=oe,this.currentContactMaterial=null,this.enableFrictionReduction=!1}g.prototype.createContactEquation=function(oe,fe,Me,be,qe,De){var Te;this.contactPointPool.length?(Te=this.contactPointPool.pop(),Te.bi=oe,Te.bj=fe):Te=new d(oe,fe),Te.enabled=oe.collisionResponse&&fe.collisionResponse&&Me.collisionResponse&&be.collisionResponse;var S=this.currentContactMaterial;Te.restitution=S.restitution,Te.setSpookParams(S.contactEquationStiffness,S.contactEquationRelaxation,this.world.dt);var R=Me.material||oe.material,j=be.material||fe.material;return R&&j&&R.restitution>=0&&j.restitution>=0&&(Te.restitution=R.restitution*j.restitution),Te.si=qe||Me,Te.sj=De||be,Te},g.prototype.createFrictionEquationsFromContact=function(oe,fe){var Me=oe.bi,be=oe.bj,qe=oe.si,De=oe.sj,Te=this.world,S=this.currentContactMaterial,R=S.friction,j=qe.material||Me.material,z=De.material||be.material;if(j&&z&&j.friction>=0&&z.friction>=0&&(R=j.friction*z.friction),R>0){var Q=R*Te.gravity.length(),le=Me.invMass+be.invMass;le>0&&(le=1/le);var ae=this.frictionEquationPool,ge=ae.length?ae.pop():new f(Me,be,Q*le),Se=ae.length?ae.pop():new f(Me,be,Q*le);return ge.bi=Se.bi=Me,ge.bj=Se.bj=be,ge.minForce=Se.minForce=-Q*le,ge.maxForce=Se.maxForce=Q*le,ge.ri.copy(oe.ri),ge.rj.copy(oe.rj),Se.ri.copy(oe.ri),Se.rj.copy(oe.rj),oe.ni.tangents(ge.t,Se.t),ge.setSpookParams(S.frictionEquationStiffness,S.frictionEquationRelaxation,Te.dt),Se.setSpookParams(S.frictionEquationStiffness,S.frictionEquationRelaxation,Te.dt),ge.enabled=Se.enabled=oe.enabled,fe.push(ge,Se),!0}return!1};var v=new a,m=new a,p=new a;g.prototype.createFrictionFromAverage=function(oe){var fe=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(fe,this.frictionResult)||oe===1)){var Me=this.frictionResult[this.frictionResult.length-2],be=this.frictionResult[this.frictionResult.length-1];v.setZero(),m.setZero(),p.setZero();var qe=fe.bi;fe.bj;for(var De=0;De!==oe;De++)fe=this.result[this.result.length-1-De],fe.bodyA!==qe?(v.vadd(fe.ni,v),m.vadd(fe.ri,m),p.vadd(fe.rj,p)):(v.vsub(fe.ni,v),m.vadd(fe.rj,m),p.vadd(fe.ri,p));var Te=1/oe;m.scale(Te,Me.ri),p.scale(Te,Me.rj),be.ri.copy(Me.ri),be.rj.copy(Me.rj),v.normalize(),v.tangents(Me.t,be.t)}};var y=new a,_=new a,x=new c,M=new c;g.prototype.getContacts=function(oe,fe,Me,be,qe,De,Te){this.contactPointPool=qe,this.frictionEquationPool=Te,this.result=be,this.frictionResult=De;for(var S=x,R=M,j=y,z=_,Q=0,le=oe.length;Q!==le;Q++){var ae=oe[Q],ge=fe[Q],Se=null;ae.material&&ge.material&&(Se=Me.getContactMaterial(ae.material,ge.material)||null);for(var Le=0;Le<ae.shapes.length;Le++){ae.quaternion.mult(ae.shapeOrientations[Le],S),ae.quaternion.vmult(ae.shapeOffsets[Le],j),j.vadd(ae.position,j);for(var ce=ae.shapes[Le],Ie=0;Ie<ge.shapes.length;Ie++){ge.quaternion.mult(ge.shapeOrientations[Ie],R),ge.quaternion.vmult(ge.shapeOffsets[Ie],z),z.vadd(ge.position,z);var ze=ge.shapes[Ie];if(!(j.distanceTo(z)>ce.boundingSphereRadius+ze.boundingSphereRadius)){var it=null;ce.material&&ze.material&&(it=Me.getContactMaterial(ce.material,ze.material)||null),this.currentContactMaterial=it||Se||Me.defaultContactMaterial;var Xe=this[ce.type|ze.type];Xe&&(ce.type<ze.type?Xe.call(this,ce,ze,j,z,S,R,ae,ge,ce,ze):Xe.call(this,ze,ce,z,j,R,S,ge,ae,ce,ze))}}}}},g.prototype[r.types.BOX|r.types.BOX]=g.prototype.boxBox=function(oe,fe,Me,be,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,fe.convexPolyhedronRepresentation.material=fe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,fe.convexPolyhedronRepresentation.collisionResponse=fe.collisionResponse,this.convexConvex(oe.convexPolyhedronRepresentation,fe.convexPolyhedronRepresentation,Me,be,qe,De,Te,S,oe,fe)},g.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=g.prototype.boxConvex=function(oe,fe,Me,be,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexConvex(oe.convexPolyhedronRepresentation,fe,Me,be,qe,De,Te,S,oe,fe)},g.prototype[r.types.BOX|r.types.PARTICLE]=g.prototype.boxParticle=function(oe,fe,Me,be,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexParticle(oe.convexPolyhedronRepresentation,fe,Me,be,qe,De,Te,S,oe,fe)},g.prototype[r.types.SPHERE]=g.prototype.sphereSphere=function(oe,fe,Me,be,qe,De,Te,S){var R=this.createContactEquation(Te,S,oe,fe);be.vsub(Me,R.ni),R.ni.normalize(),R.ri.copy(R.ni),R.rj.copy(R.ni),R.ri.mult(oe.radius,R.ri),R.rj.mult(-fe.radius,R.rj),R.ri.vadd(Me,R.ri),R.ri.vsub(Te.position,R.ri),R.rj.vadd(be,R.rj),R.rj.vsub(S.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)};var L=new a,O=new a,I=new a;g.prototype[r.types.PLANE|r.types.TRIMESH]=g.prototype.planeTrimesh=function(oe,fe,Me,be,qe,De,Te,S){var R=new a,j=L;j.set(0,0,1),qe.vmult(j,j);for(var z=0;z<fe.vertices.length/3;z++){fe.getVertex(z,R);var Q=new a;Q.copy(R),h.pointToWorldFrame(be,De,Q,R);var le=O;R.vsub(Me,le);var ae=j.dot(le);if(ae<=0){var ge=this.createContactEquation(Te,S,oe,fe);ge.ni.copy(j);var Se=I;j.scale(le.dot(j),Se),R.vsub(Se,Se),ge.ri.copy(Se),ge.ri.vsub(Te.position,ge.ri),ge.rj.copy(R),ge.rj.vsub(S.position,ge.rj),this.result.push(ge),this.createFrictionEquationsFromContact(ge,this.frictionResult)}}};var w=new a,b=new a;new a;var N=new a,U=new a,P=new a,k=new a,X=new a,ie=new a,H=new a,B=new a,ee=new a,$=new a,V=new a,q=new s,E=[];g.prototype[r.types.SPHERE|r.types.TRIMESH]=g.prototype.sphereTrimesh=function(oe,fe,Me,be,qe,De,Te,S){var R=P,j=k,z=X,Q=ie,le=H,ae=B,ge=q,Se=U,Le=b,ce=E;h.pointToLocalFrame(be,De,Me,le);var Ie=oe.radius;ge.lowerBound.set(le.x-Ie,le.y-Ie,le.z-Ie),ge.upperBound.set(le.x+Ie,le.y+Ie,le.z+Ie),fe.getTrianglesInAABB(ge,ce);for(var ze=N,it=oe.radius*oe.radius,Xe=0;Xe<ce.length;Xe++)for(var Ze=0;Ze<3;Ze++)if(fe.getVertex(fe.indices[ce[Xe]*3+Ze],ze),ze.vsub(le,Le),Le.norm2()<=it){Se.copy(ze),h.pointToWorldFrame(be,De,Se,ze),ze.vsub(Me,Le);var Fe=this.createContactEquation(Te,S,oe,fe);Fe.ni.copy(Le),Fe.ni.normalize(),Fe.ri.copy(Fe.ni),Fe.ri.scale(oe.radius,Fe.ri),Fe.ri.vadd(Me,Fe.ri),Fe.ri.vsub(Te.position,Fe.ri),Fe.rj.copy(ze),Fe.rj.vsub(S.position,Fe.rj),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}for(var Xe=0;Xe<ce.length;Xe++)for(var Ze=0;Ze<3;Ze++){fe.getVertex(fe.indices[ce[Xe]*3+Ze],R),fe.getVertex(fe.indices[ce[Xe]*3+(Ze+1)%3],j),j.vsub(R,z),le.vsub(j,ae);var $e=ae.dot(z);le.vsub(R,ae);var Ut=ae.dot(z);if(Ut>0&&$e<0){le.vsub(R,ae),Q.copy(z),Q.normalize(),Ut=ae.dot(Q),Q.scale(Ut,ae),ae.vadd(R,ae);var ct=ae.distanceTo(le);if(ct<oe.radius){var Fe=this.createContactEquation(Te,S,oe,fe);ae.vsub(le,Fe.ni),Fe.ni.normalize(),Fe.ni.scale(oe.radius,Fe.ri),h.pointToWorldFrame(be,De,ae,ae),ae.vsub(S.position,Fe.rj),h.vectorToWorldFrame(De,Fe.ni,Fe.ni),h.vectorToWorldFrame(De,Fe.ri,Fe.ri),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}}}for(var It=ee,Dt=$,ht=V,Zt=w,Xe=0,tt=ce.length;Xe!==tt;Xe++){fe.getTriangleVertices(ce[Xe],It,Dt,ht),fe.getNormal(ce[Xe],Zt),le.vsub(It,ae);var ct=ae.dot(Zt);if(Zt.scale(ct,ae),le.vsub(ae,ae),ct=ae.distanceTo(le),o.pointInTriangle(ae,It,Dt,ht)&&ct<oe.radius){var Fe=this.createContactEquation(Te,S,oe,fe);ae.vsub(le,Fe.ni),Fe.ni.normalize(),Fe.ni.scale(oe.radius,Fe.ri),h.pointToWorldFrame(be,De,ae,ae),ae.vsub(S.position,Fe.rj),h.vectorToWorldFrame(De,Fe.ni,Fe.ni),h.vectorToWorldFrame(De,Fe.ri,Fe.ri),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}}ce.length=0};var T=new a,C=new a;g.prototype[r.types.SPHERE|r.types.PLANE]=g.prototype.spherePlane=function(oe,fe,Me,be,qe,De,Te,S){var R=this.createContactEquation(Te,S,oe,fe);if(R.ni.set(0,0,1),De.vmult(R.ni,R.ni),R.ni.negate(R.ni),R.ni.normalize(),R.ni.mult(oe.radius,R.ri),Me.vsub(be,T),R.ni.mult(R.ni.dot(T),C),T.vsub(C,R.rj),-T.dot(R.ni)<=oe.radius){var j=R.ri,z=R.rj;j.vadd(Me,j),j.vsub(Te.position,j),z.vadd(be,z),z.vsub(S.position,z),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}};var G=new a,F=new a,te=new a;function Y(oe,fe,Me){for(var be=null,qe=oe.length,De=0;De!==qe;De++){var Te=oe[De],S=G;oe[(De+1)%qe].vsub(Te,S);var R=F;S.cross(fe,R);var j=te;Me.vsub(Te,j);var z=R.dot(j);if(be===null||z>0&&be===!0||z<=0&&be===!1){be===null&&(be=z>0);continue}else return!1}return!0}var J=new a,se=new a,Ee=new a,pe=new a,ye=[new a,new a,new a,new a,new a,new a],he=new a,ve=new a,Ge=new a,Ue=new a;g.prototype[r.types.SPHERE|r.types.BOX]=g.prototype.sphereBox=function(oe,fe,Me,be,qe,De,Te,S){var R=this.v3pool,j=ye;Me.vsub(be,J),fe.getSideNormals(j,De);for(var z=oe.radius,Q=!1,le=ve,ae=Ge,ge=Ue,Se=null,Le=0,ce=0,Ie=0,ze=null,it=0,Xe=j.length;it!==Xe&&Q===!1;it++){var Ze=se;Ze.copy(j[it]);var Fe=Ze.norm();Ze.normalize();var $e=J.dot(Ze);if($e<Fe+z&&$e>0){var Ut=Ee,ct=pe;Ut.copy(j[(it+1)%3]),ct.copy(j[(it+2)%3]);var It=Ut.norm(),Dt=ct.norm();Ut.normalize(),ct.normalize();var ht=J.dot(Ut),Zt=J.dot(ct);if(ht<It&&ht>-It&&Zt<Dt&&Zt>-Dt){var Rt=Math.abs($e-Fe-z);(ze===null||Rt<ze)&&(ze=Rt,ce=ht,Ie=Zt,Se=Fe,le.copy(Ze),ae.copy(Ut),ge.copy(ct),Le++)}}}if(Le){Q=!0;var Ke=this.createContactEquation(Te,S,oe,fe);le.mult(-z,Ke.ri),Ke.ni.copy(le),Ke.ni.negate(Ke.ni),le.mult(Se,le),ae.mult(ce,ae),le.vadd(ae,le),ge.mult(Ie,ge),le.vadd(ge,Ke.rj),Ke.ri.vadd(Me,Ke.ri),Ke.ri.vsub(Te.position,Ke.ri),Ke.rj.vadd(be,Ke.rj),Ke.rj.vsub(S.position,Ke.rj),this.result.push(Ke),this.createFrictionEquationsFromContact(Ke,this.frictionResult)}for(var tt=R.get(),Nt=he,Ct=0;Ct!==2&&!Q;Ct++)for(var ft=0;ft!==2&&!Q;ft++)for(var bt=0;bt!==2&&!Q;bt++)if(tt.set(0,0,0),Ct?tt.vadd(j[0],tt):tt.vsub(j[0],tt),ft?tt.vadd(j[1],tt):tt.vsub(j[1],tt),bt?tt.vadd(j[2],tt):tt.vsub(j[2],tt),be.vadd(tt,Nt),Nt.vsub(Me,Nt),Nt.norm2()<z*z){Q=!0;var Ke=this.createContactEquation(Te,S,oe,fe);Ke.ri.copy(Nt),Ke.ri.normalize(),Ke.ni.copy(Ke.ri),Ke.ri.mult(z,Ke.ri),Ke.rj.copy(tt),Ke.ri.vadd(Me,Ke.ri),Ke.ri.vsub(Te.position,Ke.ri),Ke.rj.vadd(be,Ke.rj),Ke.rj.vsub(S.position,Ke.rj),this.result.push(Ke),this.createFrictionEquationsFromContact(Ke,this.frictionResult)}R.release(tt),tt=null;for(var Xt=R.get(),nn=R.get(),Ke=R.get(),Jt=R.get(),Rt=R.get(),Yn=j.length,Ct=0;Ct!==Yn&&!Q;Ct++)for(var ft=0;ft!==Yn&&!Q;ft++)if(Ct%3!==ft%3){j[ft].cross(j[Ct],Xt),Xt.normalize(),j[Ct].vadd(j[ft],nn),Ke.copy(Me),Ke.vsub(nn,Ke),Ke.vsub(be,Ke);var $n=Ke.dot(Xt);Xt.mult($n,Jt);for(var bt=0;bt===Ct%3||bt===ft%3;)bt++;Rt.copy(Me),Rt.vsub(Jt,Rt),Rt.vsub(nn,Rt),Rt.vsub(be,Rt);var ac=Math.abs($n),lc=Rt.norm();if(ac<j[bt].norm()&&lc<z){Q=!0;var vt=this.createContactEquation(Te,S,oe,fe);nn.vadd(Jt,vt.rj),vt.rj.copy(vt.rj),Rt.negate(vt.ni),vt.ni.normalize(),vt.ri.copy(vt.rj),vt.ri.vadd(be,vt.ri),vt.ri.vsub(Me,vt.ri),vt.ri.normalize(),vt.ri.mult(z,vt.ri),vt.ri.vadd(Me,vt.ri),vt.ri.vsub(Te.position,vt.ri),vt.rj.vadd(be,vt.rj),vt.rj.vsub(S.position,vt.rj),this.result.push(vt),this.createFrictionEquationsFromContact(vt,this.frictionResult)}}R.release(Xt,nn,Ke,Jt,Rt)};var He=new a,Ae=new a,je=new a,D=new a,A=new a,ne=new a,de=new a,xe=new a,_e=new a,W=new a;g.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=g.prototype.sphereConvex=function(oe,fe,Me,be,qe,De,Te,S){var R=this.v3pool;Me.vsub(be,He);for(var j=fe.faceNormals,z=fe.faces,Q=fe.vertices,le=oe.radius,ae=0;ae!==Q.length;ae++){var ge=Q[ae],Se=A;De.vmult(ge,Se),be.vadd(Se,Se);var Le=D;if(Se.vsub(Me,Le),Le.norm2()<le*le){Ie=!0;var ce=this.createContactEquation(Te,S,oe,fe);ce.ri.copy(Le),ce.ri.normalize(),ce.ni.copy(ce.ri),ce.ri.mult(le,ce.ri),Se.vsub(be,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Te.position,ce.ri),ce.rj.vadd(be,ce.rj),ce.rj.vsub(S.position,ce.rj),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);return}}for(var Ie=!1,ae=0,ze=z.length;ae!==ze&&Ie===!1;ae++){var it=j[ae],Xe=z[ae],Ze=ne;De.vmult(it,Ze);var Fe=de;De.vmult(Q[Xe[0]],Fe),Fe.vadd(be,Fe);var $e=xe;Ze.mult(-le,$e),Me.vadd($e,$e);var Ut=_e;$e.vsub(Fe,Ut);var ct=Ut.dot(Ze),It=W;if(Me.vsub(Fe,It),ct<0&&It.dot(Ze)>0){for(var Dt=[],ht=0,Zt=Xe.length;ht!==Zt;ht++){var tt=R.get();De.vmult(Q[Xe[ht]],tt),be.vadd(tt,tt),Dt.push(tt)}if(Y(Dt,Ze,Me)){Ie=!0;var ce=this.createContactEquation(Te,S,oe,fe);Ze.mult(-le,ce.ri),Ze.negate(ce.ni);var Nt=R.get();Ze.mult(-ct,Nt);var Ct=R.get();Ze.mult(-le,Ct),Me.vsub(be,ce.rj),ce.rj.vadd(Ct,ce.rj),ce.rj.vadd(Nt,ce.rj),ce.rj.vadd(be,ce.rj),ce.rj.vsub(S.position,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Te.position,ce.ri),R.release(Nt),R.release(Ct),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(var ht=0,ft=Dt.length;ht!==ft;ht++)R.release(Dt[ht]);return}else for(var ht=0;ht!==Xe.length;ht++){var bt=R.get(),Xt=R.get();De.vmult(Q[Xe[(ht+1)%Xe.length]],bt),De.vmult(Q[Xe[(ht+2)%Xe.length]],Xt),be.vadd(bt,bt),be.vadd(Xt,Xt);var nn=Ae;Xt.vsub(bt,nn);var Ke=je;nn.unit(Ke);var Jt=R.get(),Rt=R.get();Me.vsub(bt,Rt);var Yn=Rt.dot(Ke);Ke.mult(Yn,Jt),Jt.vadd(bt,Jt);var $n=R.get();if(Jt.vsub(Me,$n),Yn>0&&Yn*Yn<nn.norm2()&&$n.norm2()<le*le){var ce=this.createContactEquation(Te,S,oe,fe);Jt.vsub(be,ce.rj),Jt.vsub(Me,ce.ni),ce.ni.normalize(),ce.ni.mult(le,ce.ri),ce.rj.vadd(be,ce.rj),ce.rj.vsub(S.position,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Te.position,ce.ri),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(var ht=0,ft=Dt.length;ht!==ft;ht++)R.release(Dt[ht]);R.release(bt),R.release(Xt),R.release(Jt),R.release($n),R.release(Rt);return}R.release(bt),R.release(Xt),R.release(Jt),R.release($n),R.release(Rt)}for(var ht=0,ft=Dt.length;ht!==ft;ht++)R.release(Dt[ht])}}},new a,new a,g.prototype[r.types.PLANE|r.types.BOX]=g.prototype.planeBox=function(oe,fe,Me,be,qe,De,Te,S){fe.convexPolyhedronRepresentation.material=fe.material,fe.convexPolyhedronRepresentation.collisionResponse=fe.collisionResponse,this.planeConvex(oe,fe.convexPolyhedronRepresentation,Me,be,qe,De,Te,S)};var me=new a,re=new a,Re=new a,Be=new a;g.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=g.prototype.planeConvex=function(oe,fe,Me,be,qe,De,Te,S){var R=me,j=re;j.set(0,0,1),qe.vmult(j,j);for(var z=0,Q=Re,le=0;le!==fe.vertices.length;le++){R.copy(fe.vertices[le]),De.vmult(R,R),be.vadd(R,R),R.vsub(Me,Q);var ae=j.dot(Q);if(ae<=0){var ge=this.createContactEquation(Te,S,oe,fe),Se=Be;j.mult(j.dot(Q),Se),R.vsub(Se,Se),Se.vsub(Me,ge.ri),ge.ni.copy(j),R.vsub(be,ge.rj),ge.ri.vadd(Me,ge.ri),ge.ri.vsub(Te.position,ge.ri),ge.rj.vadd(be,ge.rj),ge.rj.vsub(S.position,ge.rj),this.result.push(ge),z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ge,this.frictionResult)}}this.enableFrictionReduction&&z&&this.createFrictionFromAverage(z)};var Oe=new a,Pe=new a;g.prototype[r.types.CONVEXPOLYHEDRON]=g.prototype.convexConvex=function(oe,fe,Me,be,qe,De,Te,S,R,j,z,Q){var le=Oe;if(!(Me.distanceTo(be)>oe.boundingSphereRadius+fe.boundingSphereRadius)&&oe.findSeparatingAxis(fe,Me,qe,be,De,le,z,Q)){var ae=[],ge=Pe;oe.clipAgainstHull(Me,qe,fe,be,De,le,-100,100,ae);for(var Se=0,Le=0;Le!==ae.length;Le++){var ce=this.createContactEquation(Te,S,oe,fe,R,j),Ie=ce.ri,ze=ce.rj;le.negate(ce.ni),ae[Le].normal.negate(ge),ge.mult(ae[Le].depth,ge),ae[Le].point.vadd(ge,Ie),ze.copy(ae[Le].point),Ie.vsub(Me,Ie),ze.vsub(be,ze),Ie.vadd(Me,Ie),Ie.vsub(Te.position,Ie),ze.vadd(be,ze),ze.vsub(S.position,ze),this.result.push(ce),Se++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ce,this.frictionResult)}this.enableFrictionReduction&&Se&&this.createFrictionFromAverage(Se)}};var Ve=new a,We=new a,Ye=new a;g.prototype[r.types.PLANE|r.types.PARTICLE]=g.prototype.planeParticle=function(oe,fe,Me,be,qe,De,Te,S){var R=Ve;R.set(0,0,1),Te.quaternion.vmult(R,R);var j=We;be.vsub(Te.position,j);var z=R.dot(j);if(z<=0){var Q=this.createContactEquation(S,Te,fe,oe);Q.ni.copy(R),Q.ni.negate(Q.ni),Q.ri.set(0,0,0);var le=Ye;R.mult(R.dot(be),le),be.vsub(le,le),Q.rj.copy(le),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}};var at=new a;g.prototype[r.types.PARTICLE|r.types.SPHERE]=g.prototype.sphereParticle=function(oe,fe,Me,be,qe,De,Te,S){var R=at;R.set(0,0,1),be.vsub(Me,R);var j=R.norm2();if(j<=oe.radius*oe.radius){var z=this.createContactEquation(S,Te,fe,oe);R.normalize(),z.rj.copy(R),z.rj.mult(oe.radius,z.rj),z.ni.copy(R),z.ni.negate(z.ni),z.ri.set(0,0,0),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}};var Z=new c,ue=new a;new a;var we=new a,Ce=new a,ke=new a;g.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=g.prototype.convexParticle=function(oe,fe,Me,be,qe,De,Te,S){var R=-1,j=we,z=ke,Q=null,le=ue;if(le.copy(be),le.vsub(Me,le),qe.conjugate(Z),Z.vmult(le,le),oe.pointIsInside(le)){oe.worldVerticesNeedsUpdate&&oe.computeWorldVertices(Me,qe),oe.worldFaceNormalsNeedsUpdate&&oe.computeWorldFaceNormals(qe);for(var ae=0,ge=oe.faces.length;ae!==ge;ae++){var Se=[oe.worldVertices[oe.faces[ae][0]]],Le=oe.worldFaceNormals[ae];be.vsub(Se[0],Ce);var ce=-Le.dot(Ce);(Q===null||Math.abs(ce)<Math.abs(Q))&&(Q=ce,R=ae,j.copy(Le))}if(R!==-1){var Ie=this.createContactEquation(S,Te,fe,oe);j.mult(Q,z),z.vadd(be,z),z.vsub(Me,z),Ie.rj.copy(z),j.negate(Ie.ni),Ie.ri.set(0,0,0);var ze=Ie.ri,it=Ie.rj;ze.vadd(be,ze),ze.vsub(S.position,ze),it.vadd(Me,it),it.vsub(Te.position,it),this.result.push(Ie),this.createFrictionEquationsFromContact(Ie,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},g.prototype[r.types.BOX|r.types.HEIGHTFIELD]=g.prototype.boxHeightfield=function(oe,fe,Me,be,qe,De,Te,S){oe.convexPolyhedronRepresentation.material=oe.material,oe.convexPolyhedronRepresentation.collisionResponse=oe.collisionResponse,this.convexHeightfield(oe.convexPolyhedronRepresentation,fe,Me,be,qe,De,Te,S)};var lt=new a,ut=new a,yt=[0];g.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=g.prototype.convexHeightfield=function(oe,fe,Me,be,qe,De,Te,S){var R=fe.data,j=fe.elementSize,z=oe.boundingSphereRadius,Q=ut,le=yt,ae=lt;h.pointToLocalFrame(be,De,Me,ae);var ge=Math.floor((ae.x-z)/j)-1,Se=Math.ceil((ae.x+z)/j)+1,Le=Math.floor((ae.y-z)/j)-1,ce=Math.ceil((ae.y+z)/j)+1;if(!(Se<0||ce<0||ge>R.length||Le>R[0].length)){ge<0&&(ge=0),Se<0&&(Se=0),Le<0&&(Le=0),ce<0&&(ce=0),ge>=R.length&&(ge=R.length-1),Se>=R.length&&(Se=R.length-1),ce>=R[0].length&&(ce=R[0].length-1),Le>=R[0].length&&(Le=R[0].length-1);var Ie=[];fe.getRectMinMax(ge,Le,Se,ce,Ie);var ze=Ie[0],it=Ie[1];if(!(ae.z-z>it||ae.z+z<ze))for(var Xe=ge;Xe<Se;Xe++)for(var Ze=Le;Ze<ce;Ze++)fe.getConvexTrianglePillar(Xe,Ze,!1),h.pointToWorldFrame(be,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.convexConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S,null,null,le,null),fe.getConvexTrianglePillar(Xe,Ze,!0),h.pointToWorldFrame(be,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.convexConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S,null,null,le,null)}};var Vt=new a,et=new a;g.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=g.prototype.sphereHeightfield=function(oe,fe,Me,be,qe,De,Te,S){var R=fe.data,j=oe.radius,z=fe.elementSize,Q=et,le=Vt;h.pointToLocalFrame(be,De,Me,le);var ae=Math.floor((le.x-j)/z)-1,ge=Math.ceil((le.x+j)/z)+1,Se=Math.floor((le.y-j)/z)-1,Le=Math.ceil((le.y+j)/z)+1;if(!(ge<0||Le<0||ae>R.length||Le>R[0].length)){ae<0&&(ae=0),ge<0&&(ge=0),Se<0&&(Se=0),Le<0&&(Le=0),ae>=R.length&&(ae=R.length-1),ge>=R.length&&(ge=R.length-1),Le>=R[0].length&&(Le=R[0].length-1),Se>=R[0].length&&(Se=R[0].length-1);var ce=[];fe.getRectMinMax(ae,Se,ge,Le,ce);var Ie=ce[0],ze=ce[1];if(!(le.z-j>ze||le.z+j<Ie))for(var it=this.result,Xe=ae;Xe<ge;Xe++)for(var Ze=Se;Ze<Le;Ze++){var Fe=it.length;fe.getConvexTrianglePillar(Xe,Ze,!1),h.pointToWorldFrame(be,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.sphereConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S),fe.getConvexTrianglePillar(Xe,Ze,!0),h.pointToWorldFrame(be,De,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+oe.boundingSphereRadius&&this.sphereConvex(oe,fe.pillarConvex,Me,Q,qe,De,Te,S);var $e=it.length-Fe;if($e>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,i){n.exports=x;var s=t("../shapes/Shape"),r=t("../math/Vec3"),o=t("../math/Quaternion"),a=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),c=t("../utils/EventTarget"),l=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),g=t("../objects/Body"),v=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),y=t("../collision/Ray"),_=t("../collision/NaiveBroadphase");function x(){c.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new _,this.bodies=[],this.solver=new a,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new v,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new c,new p;var M=new y;if(x.prototype.getContactMaterial=function(B,ee){return this.contactMaterialTable.get(B.id,ee.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var B=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=B,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(B){this.bodies.indexOf(B)===-1&&(B.index=this.bodies.length,this.bodies.push(B),B.world=this,B.initPosition.copy(B.position),B.initVelocity.copy(B.velocity),B.timeLastSleepy=this.time,B instanceof g&&(B.initAngularVelocity.copy(B.angularVelocity),B.initQuaternion.copy(B.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=B,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(B){this.constraints.push(B)},x.prototype.removeConstraint=function(B){var ee=this.constraints.indexOf(B);ee!==-1&&this.constraints.splice(ee,1)},x.prototype.rayTest=function(B,ee,$){$ instanceof m?this.raycastClosest(B,ee,{skipBackfaces:!0},$):this.raycastAll(B,ee,{skipBackfaces:!0},$)},x.prototype.raycastAll=function(B,ee,$,V){return $.mode=y.ALL,$.from=B,$.to=ee,$.callback=V,M.intersectWorld(this,$)},x.prototype.raycastAny=function(B,ee,$,V){return $.mode=y.ANY,$.from=B,$.to=ee,$.result=V,M.intersectWorld(this,$)},x.prototype.raycastClosest=function(B,ee,$,V){return $.mode=y.CLOSEST,$.from=B,$.to=ee,$.result=V,M.intersectWorld(this,$)},x.prototype.remove=function(B){B.world=null;var ee=this.bodies.length-1,$=this.bodies,V=$.indexOf(B);if(V!==-1){$.splice(V,1);for(var q=0;q!==$.length;q++)$[q].index=q;this.collisionMatrix.setNumObjects(ee),this.removeBodyEvent.body=B,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(B){this.materials.push(B)},x.prototype.addContactMaterial=function(B){this.contactmaterials.push(B),this.contactMaterialTable.set(B.materials[0].id,B.materials[1].id,B)},typeof performance>"u"&&(performance={}),!performance.now){var L=Date.now();performance.timing&&performance.timing.navigationStart&&(L=performance.timing.navigationStart),performance.now=function(){return Date.now()-L}}var O=new r;x.prototype.step=function(B,ee,$){if($=$||10,ee=ee||0,ee===0)this.internalStep(B),this.time+=B;else{var V=Math.floor((this.time+ee)/B)-Math.floor(this.time/B);V=Math.min(V,$);for(var q=performance.now(),E=0;E!==V&&(this.internalStep(B),!(performance.now()-q>B*1e3));E++);this.time+=ee;for(var T=this.time%B,C=T/B,G=O,F=this.bodies,te=0;te!==F.length;te++){var Y=F[te];Y.type!==g.STATIC&&Y.sleepState!==g.SLEEPING?(Y.position.vsub(Y.previousPosition,G),G.scale(C,G),Y.position.vadd(G,Y.interpolatedPosition)):(Y.interpolatedPosition.copy(Y.position),Y.interpolatedQuaternion.copy(Y.quaternion))}}};var I={type:"postStep"},w={type:"preStep"},b={type:"collide",body:null,contact:null},N=[],U=[],P=[],k=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new o;var X=new o,ie=new o,H=new r;x.prototype.internalStep=function(B){this.dt=B;var ee=this.contacts,$=P,V=k,q=this.numObjects(),E=this.bodies,T=this.solver,C=this.gravity,G=this.doProfiling,F=this.profile,te=g.DYNAMIC,Y,J=this.constraints,se=U;C.norm();var Ee=C.x,pe=C.y,ye=C.z,he=0;for(G&&(Y=performance.now()),he=0;he!==q;he++){var ve=E[he];if(ve.type&te){var Ge=ve.force,Ue=ve.mass;Ge.x+=Ue*Ee,Ge.y+=Ue*pe,Ge.z+=Ue*ye}}for(var he=0,He=this.subsystems.length;he!==He;he++)this.subsystems[he].update();G&&(Y=performance.now()),$.length=0,V.length=0,this.broadphase.collisionPairs(this,$,V),G&&(F.broadphase=performance.now()-Y);var Oe=J.length;for(he=0;he!==Oe;he++){var Ae=J[he];if(!Ae.collideConnected)for(var je=$.length-1;je>=0;je-=1)(Ae.bodyA===$[je]&&Ae.bodyB===V[je]||Ae.bodyB===$[je]&&Ae.bodyA===V[je])&&($.splice(je,1),V.splice(je,1))}this.collisionMatrixTick(),G&&(Y=performance.now());var D=N,A=ee.length;for(he=0;he!==A;he++)D.push(ee[he]);ee.length=0;var ne=this.frictionEquations.length;for(he=0;he!==ne;he++)se.push(this.frictionEquations[he]);this.frictionEquations.length=0,this.narrowphase.getContacts($,V,this,ee,D,this.frictionEquations,se),G&&(F.narrowphase=performance.now()-Y),G&&(Y=performance.now());for(var he=0;he<this.frictionEquations.length;he++)T.addEquation(this.frictionEquations[he]);for(var de=ee.length,xe=0;xe!==de;xe++){var Ae=ee[xe],ve=Ae.bi,_e=Ae.bj;Ae.si,Ae.sj;var W;if(ve.material&&_e.material?W=this.getContactMaterial(ve.material,_e.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,ve.material&&_e.material&&(ve.material.friction>=0&&_e.material.friction>=0&&ve.material.friction*_e.material.friction,ve.material.restitution>=0&&_e.material.restitution>=0&&(Ae.restitution=ve.material.restitution*_e.material.restitution)),T.addEquation(Ae),ve.allowSleep&&ve.type===g.DYNAMIC&&ve.sleepState===g.SLEEPING&&_e.sleepState===g.AWAKE&&_e.type!==g.STATIC){var me=_e.velocity.norm2()+_e.angularVelocity.norm2(),re=Math.pow(_e.sleepSpeedLimit,2);me>=re*2&&(ve._wakeUpAfterNarrowphase=!0)}if(_e.allowSleep&&_e.type===g.DYNAMIC&&_e.sleepState===g.SLEEPING&&ve.sleepState===g.AWAKE&&ve.type!==g.STATIC){var Re=ve.velocity.norm2()+ve.angularVelocity.norm2(),Be=Math.pow(ve.sleepSpeedLimit,2);Re>=Be*2&&(_e._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ve,_e,!0),this.collisionMatrixPrevious.get(ve,_e)||(b.body=_e,b.contact=Ae,ve.dispatchEvent(b),b.body=ve,_e.dispatchEvent(b))}for(G&&(F.makeContactConstraints=performance.now()-Y,Y=performance.now()),he=0;he!==q;he++){var ve=E[he];ve._wakeUpAfterNarrowphase&&(ve.wakeUp(),ve._wakeUpAfterNarrowphase=!1)}var Oe=J.length;for(he=0;he!==Oe;he++){var Ae=J[he];Ae.update();for(var je=0,Pe=Ae.equations.length;je!==Pe;je++){var Ve=Ae.equations[je];T.addEquation(Ve)}}T.solve(B,this),G&&(F.solve=performance.now()-Y),T.removeAllEquations();var We=Math.pow;for(he=0;he!==q;he++){var ve=E[he];if(ve.type&te){var Ye=We(1-ve.linearDamping,B),at=ve.velocity;at.mult(Ye,at);var Z=ve.angularVelocity;if(Z){var ue=We(1-ve.angularDamping,B);Z.mult(ue,Z)}}}for(this.dispatchEvent(w),he=0;he!==q;he++){var ve=E[he];ve.preStep&&ve.preStep.call(ve)}G&&(Y=performance.now());var we=X,Ce=ie,ke=this.stepnumber,lt=g.DYNAMIC|g.KINEMATIC,ut=ke%(this.quatNormalizeSkip+1)===0,yt=this.quatNormalizeFast,Vt=B*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,he=0;he!==q;he++){var et=E[he],oe=et.force,fe=et.torque;if(et.type&lt&&et.sleepState!==g.SLEEPING){var Me=et.velocity,be=et.angularVelocity,qe=et.position,De=et.quaternion,Te=et.invMass,S=et.invInertiaWorld;Me.x+=oe.x*Te*B,Me.y+=oe.y*Te*B,Me.z+=oe.z*Te*B,et.angularVelocity&&(S.vmult(fe,H),H.mult(B,H),H.vadd(be,be)),qe.x+=Me.x*B,qe.y+=Me.y*B,qe.z+=Me.z*B,et.angularVelocity&&(we.set(be.x,be.y,be.z,0),we.mult(De,Ce),De.x+=Vt*Ce.x,De.y+=Vt*Ce.y,De.z+=Vt*Ce.z,De.w+=Vt*Ce.w,ut&&(yt?De.normalizeFast():De.normalize())),et.aabb&&(et.aabbNeedsUpdate=!0),et.updateInertiaWorld&&et.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(F.integrate=performance.now()-Y),this.time+=B,this.stepnumber+=1,this.dispatchEvent(I),he=0;he!==q;he++){var ve=E[he],R=ve.postStep;R&&R.call(ve)}if(this.allowSleep)for(he=0;he!==q;he++)E[he].sleepTick(this.time)},x.prototype.clearForces=function(){for(var B=this.bodies,ee=B.length,$=0;$!==ee;$++){var V=B[$];V.force,V.torque,V.force.set(0,0,0),V.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(tc);var Mt=tc.exports;class ev{constructor(e){_t(this,"physicsBody");_t(this,"visualObject");_t(this,"isCurrentlyHeld");_t(this,"holdingParent");_t(this,"frameCounter",0);_t(this,"recordedDeltaTimes");_t(this,"recordedPositions");_t(this,"frameRecordingAmount",15);_t(this,"throwVelocityMultiplier",-3);const t=new Mt.Sphere(.07);this.physicsBody=new Mt.Body({mass:4,position:e}),this.physicsBody.addShape(t),this.visualObject=new At(new sr(.07),new In({color:5591040})),this.isCurrentlyHeld=!1,this.recordedDeltaTimes=new Array(this.frameRecordingAmount),this.recordedPositions=new Array(this.frameRecordingAmount),this.recordedDeltaTimes.fill(0),this.recordedPositions.fill(void 0)}update(e){if(this.isCurrentlyHeld){let t=new K;this.holdingParent.getWorldPosition(t),this.physicsBody.position.copy(t),this.recordedDeltaTimes[this.frameCounter]=e;let n=new K().copy(this.visualObject.position);this.recordedPositions[this.frameCounter]=n,this.frameCounter=(this.frameCounter+1)%this.frameRecordingAmount}this.visualObject.position.copy(this.physicsBody.position),this.visualObject.quaternion.copy(this.physicsBody.quaternion)}distanceTo(e){return this.visualObject.position.distanceTo(e)}pickUp(e){this.isCurrentlyHeld=!0,this.holdingParent=e,this.physicsBody.type=Mt.Body.KINEMATIC}release(){this.isCurrentlyHeld=!1,this.holdingParent=void 0,this.physicsBody.type=Mt.Body.DYNAMIC;let e=0,t=new K(0,0,0);const n=this.frameRecordingAmount-this.frameCounter;for(let i=1;i<this.frameRecordingAmount;i++){let s=(i+n)%this.frameCounter;if(this.recordedPositions[s]==null||this.recordedPositions[s-1]==null)continue;let r=new K;r.subVectors(this.recordedPositions[s-1],this.recordedPositions[s]),r.divideScalar(this.recordedDeltaTimes[s]),t.add(r),e++}e>0&&t.divideScalar(e),this.physicsBody.velocity.copy(t.multiplyScalar(this.throwVelocityMultiplier)),this.frameCounter=0,this.recordedDeltaTimes.fill(0),this.recordedPositions.fill(void 0)}}class tv{constructor(e,t){_t(this,"jointObject");_t(this,"jointEndObject");_t(this,"length");this.length=e,this.jointObject=t,this.jointObject.children[0].material=new In({color:13619151,metalness:.5,roughness:.5,side:fn}),this.jointEndObject=new At,this.jointEndObject.visible=!1,this.jointEndObject.position.setZ(e),this.jointObject.add(this.jointEndObject)}setPosition(e,t,n){this.jointObject.position.set(e,t,n)}setEndPosition(e,t,n){const i=new K(e,t,n);let s=new K;s.subVectors(this.getPosition(),this.getEndPosition());let r=new K;r.addVectors(i,s),this.setPosition(r.x,r.y,r.z)}getPosition(){return this.jointObject.position}getEndPosition(){let e=new K;return this.jointEndObject.getWorldPosition(e),e}lookAt(e){this.jointObject.lookAt(e)}}class nv{constructor(){_t(this,"armR");_t(this,"armL");_t(this,"jointsR",[]);_t(this,"jointsL",[]);_t(this,"jointLengths",[.9,.85,0]);_t(this,"rootROffset",new K(.12,-.15,.05));_t(this,"rootLOffset",new K(-.12,-.15,.05));_t(this,"rootR",new K(0,0,0));_t(this,"rootL",new K(0,0,0));_t(this,"interactableHoldObject")}async initialize(e,t){const n=new Zl;this.armL=await this.loadObject("armL.glb",n),this.armR=await this.loadObject("armR.glb",n),this.createJoints(this.armR,this.jointsR,e),this.createJoints(this.armL,this.jointsL,e),this.createHoldPoint(),this.resizeArm(t.scale),this.offsetShoulders(t.shoulderOffset)}update(e){this.updateJoints(this.jointsR,this.rootR,e[0]),this.updateJoints(this.jointsL,this.rootL,e[1])}createHoldPoint(){const e=this.jointsR[this.jointsR.length-1].jointObject;this.interactableHoldObject=new At,e.add(this.interactableHoldObject),this.interactableHoldObject.position.set(-.3,0,-.3)}getInteractableHoldPoint(){let e=new K;return this.interactableHoldObject.getWorldPosition(e),e}async loadObject(e,t){return new Promise(n=>{t.load(e,i=>{n(i.scene)})})}createJoints(e,t,n){for(let i=0;i<3;i++){let s=new tv(this.jointLengths[i],e.children[0]);t.push(s),n.add(s.jointObject)}}updateRootPositions(e,t){let n;t.xr.isPresenting?n=t.xr.getCamera().cameras[0].position:n=e.position,this.rootR.addVectors(n,this.rootROffset),this.rootL.addVectors(n,this.rootLOffset)}getWristPositionR(){return this.jointsR[this.jointsR.length-1].jointObject.position}getWristObjectR(){return this.jointsR[this.jointsR.length-1].jointObject}updateJoints(e,t,n){const i=n.position,s=n.rotation;e[e.length-1].setPosition(n.position.x,i.y,i.z),e[e.length-1].jointObject.rotation.set(s.x,s.y,s.z);for(let o=e.length-2;o>=0;o--){e[o].lookAt(e[o+1].getPosition());const a=e[o+1].getPosition();e[o].setEndPosition(a.x,a.y,a.z)}let r=new K;r.subVectors(e[0].getPosition(),t);for(let o=0;o<e.length;o++){let a=new K;a.subVectors(e[o].getPosition(),r),e[o].setPosition(a.x,a.y,a.z)}}offsetShoulders(e){e=parseFloat(e),this.rootLOffset.x=-e,this.rootROffset.x=e}resizeArm(e){e=parseFloat(e);for(let t=0;t<3;t++)this.jointsR[t].jointObject.scale.set(e,e,e),this.jointsL[t].jointObject.scale.set(e,e,e)}}var us=function(){var u=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),n(++u%e.children.length)},!1);function t(c){return e.appendChild(c.dom),c}function n(c){for(var l=0;l<e.children.length;l++)e.children[l].style.display=l===c?"block":"none";u=c}var i=(performance||Date).now(),s=i,r=0,o=t(new us.Panel("FPS","#0ff","#002")),a=t(new us.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new us.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var c=(performance||Date).now();if(a.update(c-i,200),c>=s+1e3&&(o.update(r*1e3/(c-s),100),s=c,r=0,h)){var l=performance.memory;h.update(l.usedJSHeapSize/1048576,l.jsHeapSizeLimit/1048576)}return c},update:function(){i=this.end()},domElement:e,setMode:n}};us.Panel=function(u,e,t){var n=1/0,i=0,s=Math.round,r=s(window.devicePixelRatio||1),o=80*r,a=48*r,h=3*r,c=2*r,l=3*r,d=15*r,f=74*r,g=30*r,v=document.createElement("canvas");v.width=o,v.height=a,v.style.cssText="width:80px;height:48px";var m=v.getContext("2d");return m.font="bold "+9*r+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,a),m.fillStyle=e,m.fillText(u,h,c),m.fillRect(l,d,f,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(l,d,f,g),{dom:v,update:function(p,y){n=Math.min(n,p),i=Math.max(i,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=e,m.fillText(s(p)+" "+u+" ("+s(n)+"-"+s(i)+")",h,c),m.drawImage(v,l+r,d,f-r,g,l,d,f-r,g),m.fillRect(l+f-r,d,r,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(l+f-r,d,r,s((1-p/y)*g))}}};const iv=us;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class _n{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),_n.nextNameID=_n.nextNameID||0,this.$name.id=`lil-gui-name-${++_n.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class sv extends _n{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function io(u){let e,t;return(e=u.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=u.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=u.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const rv={isPrimitive:!0,match:u=>typeof u=="string",fromHexString:io,toHexString:io},xs={isPrimitive:!0,match:u=>typeof u=="number",fromHexString:u=>parseInt(u.substring(1),16),toHexString:u=>"#"+u.toString(16).padStart(6,0)},ov={isPrimitive:!1,match:u=>Array.isArray(u),fromHexString(u,e,t=1){const n=xs.fromHexString(u);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([u,e,t],n=1){n=255/n;const i=u*n<<16^e*n<<8^t*n<<0;return xs.toHexString(i)}},av={isPrimitive:!1,match:u=>Object(u)===u,fromHexString(u,e,t=1){const n=xs.fromHexString(u);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:u,g:e,b:t},n=1){n=255/n;const i=u*n<<16^e*n<<8^t*n<<0;return xs.toHexString(i)}},lv=[rv,xs,ov,av];function cv(u){return lv.find(e=>e.match(u))}class hv extends _n{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=cv(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=io(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Vr extends _n{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class uv extends _n{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let r=!1,o,a,h,c,l;const d=5,f=y=>{o=y.clientX,a=h=y.clientY,r=!0,c=this.getValue(),l=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=y=>{if(r){const _=y.clientX-o,x=y.clientY-a;Math.abs(x)>d?(y.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&v()}if(!r){const _=y.clientY-h;l-=_*this._step*this._arrowKeyMultiplier(y),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}h=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,y,_,x,M)=>(p-y)/(_-y)*(M-x)+x,t=p=>{const y=this.$slider.getBoundingClientRect();let _=e(p,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,o,a;const h=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),r=!1},c=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,a=p.touches[0].clientY,r=!0):h(p),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d))},l=p=>{if(r){const y=p.touches[0].clientX-o,_=p.touches[0].clientY-a;Math.abs(y)>Math.abs(_)?h(p):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let v;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class dv extends _n{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class fv extends _n{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const pv=`.lil-gui {
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
}`;function mv(u){const e=document.createElement("style");e.innerHTML=u;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ul=!1;class yo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:r=!1,injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),a&&this.domElement.classList.add("allow-touch-styles"),!ul&&o&&(mv(pv),ul=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=r}add(e,t,n,i,s){if(Object(n)===n)return new dv(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new uv(this,e,t,n,i,s);case"boolean":return new sv(this,e,t);case"string":return new fv(this,e,t);case"function":return new Vr(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new hv(this,e,t,n)}addFolder(e){const t=new yo({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Vr||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Vr)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const gv=yo,nc=new iv,mn=new Mt.World,vv=.2;let ys=[],Ks,Zs;const dl=10;let Yt,qn,Gt,ic,sc,fl=0;const ri=new nv,so={scale:.3,shoulderOffset:.75};let Qs=[];const kr=new K(0,1.65,-4),Hr=.25,xv=.2,Gr=7;yv();async function yv(){Mv(),wv(),bv(),Sv(),await ri.initialize(Yt,so),Gt.setAnimationLoop(_v)}function _v(u){ri.updateRootPositions(qn,Gt),ri.update(sc),u*=.001;let e=u-fl;fl=u,ic.enabled=!Gt.xr.isPresenting,nc.update(),Ks=Cv(ri.getInteractableHoldPoint()),Rv(e),Gt.render(Yt,qn)}function Mv(){Yt=new Sm,qn=new Wt(75,window.innerWidth/window.innerHeight,.01,1e3),qn.position.z=3,qn.position.y=1.5,Gt=new Hl({antialias:!0}),Gt.xr.enabled=!0,Gt.setPixelRatio(window.devicePixelRatio),Gt.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",Pv),Gt.outputEncoding=dt,document.body.appendChild(Gt.domElement),document.body.appendChild(Yi.createButton(Gt)),sc=Lv();const u=new Jm(6316128,2);Yt.add(u);const e=new Kl(4210752,2,50);e.position.setZ(3),Yt.add(e);const t=new cg(10,10);Yt.add(t),ic=new hg(qn,Gt.domElement),document.body.appendChild(nc.dom)}function wv(){mn.gravity.set(0,-9.81,0),mn.broadphase=new Mt.NaiveBroadphase,mn.solver.iterations=10}function bv(){let u=new Mt.Plane,e=new Mt.Body({mass:0,position:new Mt.Vec3(0,0,0)});e.addShape(u),e.quaternion.setFromAxisAngle(new Mt.Vec3(1,0,0),-Math.PI/2),mn.addBody(e);let t=new In({color:2236962}),n=new nr(10,10),i=new At(n,t);Yt.add(i),i.position.copy(e.position),i.quaternion.copy(e.quaternion);let s=new Mt.Body({mass:0,position:new Mt.Vec3(0,0,-1)}),r=new Mt.Box(new Mt.Vec3(2,.7,.7));s.addShape(r),mn.add(s);let o=new At(new jn(4,1.4,1.4),new In({color:3355443}));o.position.copy(s.position),Yt.add(o);let a=new Mt.Body({mass:0,position:new Mt.Vec3(0,1.5,-4)}),h=new Mt.Box(new Mt.Vec3(2,.05,.2));a.addShape(h),mn.add(a);let c=new At(new jn(4,.1,.4),new In({color:7829367}));c.position.copy(a.position),Yt.add(c),oc(),rc()}function Sv(){const u=new gv;u.add(so,"scale",.1,.5,.05).onChange(e=>ri.resizeArm(e)),u.add(so,"shoulderOffset",.3,1,.25).onChange(e=>ri.offsetShoulders(e))}function Av(){ys.forEach(u=>{mn.remove(u.physicsBody),Yt.remove(u.visualObject)}),ys=[],rc(),Qs.forEach(u=>{mn.remove(u.physicsBody),Yt.remove(u.visualObject)}),Qs=[],oc()}function Ev(u){switch(u){case 0:Av();break;case 1:if(Ks==null)return;Ks.pickUp(ri.interactableHoldObject),Zs=Ks;break}}function Tv(u){if(u==1){if(Zs==null)return;Zs.release(),Zs=void 0}}function Cv(u){let e,t=vv;return ys.forEach(n=>{let i=n.distanceTo(u);i<t&&(e=n,t=i)}),e}function rc(){const e=new K(-.5*dl*.25,1.4,-.5);for(let t=0;t<dl;t++){const n=new ev(new Mt.Vec3(e.x+.25*t,e.y,e.z));ys.push(n),mn.add(n.physicsBody),Yt.add(n.visualObject)}}function oc(){let u=Gr,e=Gr*Hr*.5;for(let t=0;t<Gr;t++){for(let n=0;n<u;n++){let i=Hr*.5*t+Hr*n,s=new Mt.Body({mass:1,position:new Mt.Vec3(i+kr.x-e,xv*t+kr.y,kr.z)}),r=new Mt.Box(new Mt.Vec3(.1,.1,.1));s.addShape(r),mn.add(s);let o=new At(new jn(.2,.2,.2),new In({color:3355443}));o.position.copy(s.position),o.quaternion.copy(s.quaternion),Qs.push({physicsBody:s,visualObject:o}),Yt.add(o)}u--}}function Rv(u){mn.step(u),ys.forEach(e=>{e.update(u)}),Qs.forEach(e=>{e.visualObject.position.copy(e.physicsBody.position),e.visualObject.quaternion.copy(e.physicsBody.quaternion)})}function Lv(){const u=new Qg,e=[];for(let t=0;t<2;t++){const n=Gt.xr.getController(t);n.userData.selectPressed=!1,n.userData.selectPressedPrev=!1,Yt.add(n),e.unshift(n),n.addEventListener("selectstart",()=>Ev(t)),n.addEventListener("selectend",()=>Tv(t));const i=Gt.xr.getControllerGrip(t);i.add(u.createControllerModel(i))}return e}function Pv(){const u=window.innerWidth,e=window.innerHeight,t=u/e;Gt.setSize(u,e),qn.aspect=t,qn.updateProjectionMatrix()}
