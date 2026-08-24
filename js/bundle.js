
/* =======================================================
   UniversityJano.com - Production Self-Contained Bundle
   Includes React 18 + ReactDOM + Complete Application
   Zero External Dependencies • 100% Offline & ISP Safe
   ======================================================= */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(c,x){"object"===typeof exports&&"undefined"!==typeof module?x(exports):"function"===typeof define&&define.amd?define(["exports"],x):(c=c||self,x(c.React={}))})(this,function(c){function x(a){if(null===a||"object"!==typeof a)return null;a=V&&a[V]||a["@@iterator"];return"function"===typeof a?a:null}function w(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Y(){}function K(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Z(a,b,
e){var m,d={},c=null,h=null;if(null!=b)for(m in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(c=""+b.key),b)aa.call(b,m)&&!ba.hasOwnProperty(m)&&(d[m]=b[m]);var l=arguments.length-2;if(1===l)d.children=e;else if(1<l){for(var f=Array(l),k=0;k<l;k++)f[k]=arguments[k+2];d.children=f}if(a&&a.defaultProps)for(m in l=a.defaultProps,l)void 0===d[m]&&(d[m]=l[m]);return{$$typeof:y,type:a,key:c,ref:h,props:d,_owner:L.current}}function na(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function oa(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?oa(""+a.key):b.toString(36)}function B(a,b,e,m,d){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var h=!1;if(null===a)h=!0;else switch(c){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case y:case pa:h=!0}}if(h)return h=a,d=d(h),a=""===m?"."+
N(h,0):m,ca(d)?(e="",null!=a&&(e=a.replace(da,"$&/")+"/"),B(d,b,e,"",function(a){return a})):null!=d&&(M(d)&&(d=na(d,e+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(da,"$&/")+"/")+a)),b.push(d)),1;h=0;m=""===m?".":m+":";if(ca(a))for(var l=0;l<a.length;l++){c=a[l];var f=m+N(c,l);h+=B(c,b,e,f,d)}else if(f=x(a),"function"===typeof f)for(a=f.call(a),l=0;!(c=a.next()).done;)c=c.value,f=m+N(c,l++),h+=B(c,b,e,f,d);else if("object"===c)throw b=String(a),Error("Objects are not valid as a React child (found: "+
("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function C(a,b,e){if(null==a)return a;var c=[],d=0;B(a,c,"","",function(a){return b.call(e,a,d++)});return c}function qa(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=
0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function O(a,b){var e=a.length;a.push(b);a:for(;0<e;){var c=e-1>>>1,d=a[c];if(0<D(d,b))a[c]=b,a[e]=d,e=c;else break a}}function p(a){return 0===a.length?null:a[0]}function E(a){if(0===a.length)return null;var b=a[0],e=a.pop();if(e!==b){a[0]=e;a:for(var c=0,d=a.length,k=d>>>1;c<k;){var h=2*(c+1)-1,l=a[h],f=h+1,g=a[f];if(0>D(l,e))f<d&&0>D(g,l)?(a[c]=g,a[f]=e,c=f):(a[c]=l,a[h]=e,c=h);else if(f<d&&0>D(g,e))a[c]=g,a[f]=e,c=f;else break a}}return b}
function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function P(a){for(var b=p(r);null!==b;){if(null===b.callback)E(r);else if(b.startTime<=a)E(r),b.sortIndex=b.expirationTime,O(q,b);else break;b=p(r)}}function Q(a){z=!1;P(a);if(!u)if(null!==p(q))u=!0,R(S);else{var b=p(r);null!==b&&T(Q,b.startTime-a)}}function S(a,b){u=!1;z&&(z=!1,ea(A),A=-1);F=!0;var c=k;try{P(b);for(n=p(q);null!==n&&(!(n.expirationTime>b)||a&&!fa());){var m=n.callback;if("function"===typeof m){n.callback=null;
k=n.priorityLevel;var d=m(n.expirationTime<=b);b=v();"function"===typeof d?n.callback=d:n===p(q)&&E(q);P(b)}else E(q);n=p(q)}if(null!==n)var g=!0;else{var h=p(r);null!==h&&T(Q,h.startTime-b);g=!1}return g}finally{n=null,k=c,F=!1}}function fa(){return v()-ha<ia?!1:!0}function R(a){G=a;H||(H=!0,I())}function T(a,b){A=ja(function(){a(v())},b)}var y=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),
ua=Symbol.for("react.provider"),va=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),ya=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),V=Symbol.iterator,X={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,m){},enqueueSetState:function(a,b,c,m){}},ka=Object.assign,W={};w.prototype.isReactComponent={};w.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};Y.prototype=w.prototype;var t=K.prototype=new Y;t.constructor=K;ka(t,w.prototype);t.isPureReactComponent=!0;var ca=Array.isArray,aa=Object.prototype.hasOwnProperty,L={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0},da=/\/+/g,g={current:null},J={transition:null};if("object"===typeof performance&&"function"===typeof performance.now){var Aa=performance;
var v=function(){return Aa.now()}}else{var la=Date,Ba=la.now();v=function(){return la.now()-Ba}}var q=[],r=[],Ca=1,n=null,k=3,F=!1,u=!1,z=!1,ja="function"===typeof setTimeout?setTimeout:null,ea="function"===typeof clearTimeout?clearTimeout:null,ma="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,A=-1,ia=5,ha=
-1,U=function(){if(null!==G){var a=v();ha=a;var b=!0;try{b=G(!0,a)}finally{b?I():(H=!1,G=null)}}else H=!1};if("function"===typeof ma)var I=function(){ma(U)};else if("undefined"!==typeof MessageChannel){t=new MessageChannel;var Da=t.port2;t.port1.onmessage=U;I=function(){Da.postMessage(null)}}else I=function(){ja(U,0)};t={ReactCurrentDispatcher:g,ReactCurrentOwner:L,ReactCurrentBatchConfig:J,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,
unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=k;k=a;try{return b()}finally{k=c}},unstable_next:function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}},unstable_scheduleCallback:function(a,b,c){var e=v();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?e+c:e):c=e;switch(a){case 1:var d=-1;break;case 2:d=250;break;case 5:d=
1073741823;break;case 4:d=1E4;break;default:d=5E3}d=c+d;a={id:Ca++,callback:b,priorityLevel:a,startTime:c,expirationTime:d,sortIndex:-1};c>e?(a.sortIndex=c,O(r,a),null===p(q)&&a===p(r)&&(z?(ea(A),A=-1):z=!0,T(Q,c-e))):(a.sortIndex=d,O(q,a),u||F||(u=!0,R(S)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=k;return function(){var c=k;k=b;try{return a.apply(this,arguments)}finally{k=c}}},unstable_getCurrentPriorityLevel:function(){return k},unstable_shouldYield:fa,
unstable_requestPaint:function(){},unstable_continueExecution:function(){u||F||(u=!0,R(S))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return p(q)},get unstable_now(){return v},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ia=0<a?Math.floor(1E3/a):5},unstable_Profiling:null}};c.Children={map:C,forEach:function(a,b,c){C(a,function(){b.apply(this,
arguments)},c)},count:function(a){var b=0;C(a,function(){b++});return b},toArray:function(a){return C(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};c.Component=w;c.Fragment=ra;c.Profiler=ta;c.PureComponent=K;c.StrictMode=sa;c.Suspense=xa;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t;c.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+
a+".");var e=ka({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=L.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(f in b)aa.call(b,f)&&!ba.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==l?l[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){l=Array(f);for(var g=0;g<f;g++)l[g]=arguments[g+2];e.children=l}return{$$typeof:y,type:a.type,key:d,ref:k,props:e,_owner:h}};c.createContext=function(a){a={$$typeof:va,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:ua,_context:a};return a.Consumer=a};c.createElement=Z;c.createFactory=function(a){var b=Z.bind(null,a);b.type=a;return b};c.createRef=function(){return{current:null}};c.forwardRef=function(a){return{$$typeof:wa,render:a}};c.isValidElement=M;c.lazy=function(a){return{$$typeof:za,_payload:{_status:-1,_result:a},_init:qa}};c.memo=function(a,b){return{$$typeof:ya,type:a,
compare:void 0===b?null:b}};c.startTransition=function(a,b){b=J.transition;J.transition={};try{a()}finally{J.transition=b}};c.unstable_act=function(a){throw Error("act(...) is not supported in production builds of React.");};c.useCallback=function(a,b){return g.current.useCallback(a,b)};c.useContext=function(a){return g.current.useContext(a)};c.useDebugValue=function(a,b){};c.useDeferredValue=function(a){return g.current.useDeferredValue(a)};c.useEffect=function(a,b){return g.current.useEffect(a,
b)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(a,b,c){return g.current.useImperativeHandle(a,b,c)};c.useInsertionEffect=function(a,b){return g.current.useInsertionEffect(a,b)};c.useLayoutEffect=function(a,b){return g.current.useLayoutEffect(a,b)};c.useMemo=function(a,b){return g.current.useMemo(a,b)};c.useReducer=function(a,b,c){return g.current.useReducer(a,b,c)};c.useRef=function(a){return g.current.useRef(a)};c.useState=function(a){return g.current.useState(a)};
c.useSyncExternalStore=function(a,b,c){return g.current.useSyncExternalStore(a,b,c)};c.useTransition=function(){return g.current.useTransition()};c.version="18.2.0"});
})();

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(Q,mb){"object"===typeof exports&&"undefined"!==typeof module?mb(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],mb):(Q=Q||self,mb(Q.ReactDOM={},Q.React))})(this,function(Q,mb){function n(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function nb(a,b){Ab(a,b);Ab(a+"Capture",b)}function Ab(a,b){$b[a]=b;for(a=0;a<b.length;a++)cg.add(b[a])}function cj(a){if(Zd.call(dg,a))return!0;if(Zd.call(eg,a))return!1;if(dj.test(a))return dg[a]=!0;eg[a]=!0;return!1}function ej(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function fj(a,b,c,d){if(null===
b||"undefined"===typeof b||ej(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function Y(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}function $d(a,b,c,d){var e=R.hasOwnProperty(b)?R[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==
b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])fj(b,c,e,d)&&(c=null),d||null===e?cj(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}function ac(a){if(null===a||"object"!==typeof a)return null;a=fg&&a[fg]||a["@@iterator"];return"function"===typeof a?a:null}function bc(a,b,
c){if(void 0===ae)try{throw Error();}catch(d){ae=(b=d.stack.trim().match(/\n( *(at )?)/))&&b[1]||""}return"\n"+ae+a}function be(a,b){if(!a||ce)return"";ce=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(m){var d=m}Reflect.construct(a,[],b)}else{try{b.call()}catch(m){d=m}a.call(b.prototype)}else{try{throw Error();
}catch(m){d=m}a()}}catch(m){if(m&&d&&"string"===typeof m.stack){for(var e=m.stack.split("\n"),f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{ce=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?bc(a):
""}function gj(a){switch(a.tag){case 5:return bc(a.type);case 16:return bc("Lazy");case 13:return bc("Suspense");case 19:return bc("SuspenseList");case 0:case 2:case 15:return a=be(a.type,!1),a;case 11:return a=be(a.type.render,!1),a;case 1:return a=be(a.type,!0),a;default:return""}}function de(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Bb:return"Fragment";case Cb:return"Portal";case ee:return"Profiler";case fe:return"StrictMode";
case ge:return"Suspense";case he:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case gg:return(a.displayName||"Context")+".Consumer";case hg:return(a._context.displayName||"Context")+".Provider";case ie:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case je:return b=a.displayName||null,null!==b?b:de(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return de(a(b))}catch(c){}}return null}function hj(a){var b=a.type;
switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(b);case 8:return b===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";
case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Ua(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}function ig(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===
b)}function ij(a){var b=ig(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Pc(a){a._valueTracker||(a._valueTracker=ij(a))}function jg(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ig(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Qc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ke(a,b){var c=b.checked;return E({},b,{defaultChecked:void 0,defaultValue:void 0,
value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function kg(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function lg(a,b){b=b.checked;null!=b&&$d(a,"checked",b,!1)}function le(a,b){lg(a,b);var c=Ua(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=
c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?me(a,b.type,c):b.hasOwnProperty("defaultValue")&&me(a,b.type,Ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function mg(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;
c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function me(a,b,c){if("number"!==b||Qc(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Db(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=
!0)}else{c=""+Ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(n(91));return E({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ng(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(n(92));if(cc(c)){if(1<c.length)throw Error(n(93));
c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Ua(c)}}function og(a,b){var c=Ua(b.value),d=Ua(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function pg(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function qg(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function oe(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?qg(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function rg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||dc.hasOwnProperty(a)&&dc[a]?(""+b).trim():b+"px"}function sg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function pe(a,b){if(b){if(jj[a]&&
(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(n(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(n(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(n(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(n(62));}}function qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function re(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tg(a){if(a=ec(a)){if("function"!==typeof se)throw Error(n(280));var b=a.stateNode;b&&(b=Rc(b),se(a.stateNode,a.type,b))}}function ug(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function vg(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;tg(a);if(b)for(a=0;a<b.length;a++)tg(b[a])}}function wg(a,b,c){if(te)return a(b,c);te=!0;try{return xg(a,b,c)}finally{if(te=
!1,null!==Eb||null!==Fb)yg(),vg()}}function fc(a,b){var c=a.stateNode;if(null===c)return null;var d=Rc(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;
if(c&&"function"!==typeof c)throw Error(n(231,b,typeof c));return c}function kj(a,b,c,d,e,f,g,h,k){gc=!1;Sc=null;lj.apply(mj,arguments)}function nj(a,b,c,d,e,f,g,h,k){kj.apply(this,arguments);if(gc){if(gc){var m=Sc;gc=!1;Sc=null}else throw Error(n(198));Tc||(Tc=!0,ue=m)}}function ob(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function zg(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,
null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Ag(a){if(ob(a)!==a)throw Error(n(188));}function oj(a){var b=a.alternate;if(!b){b=ob(a);if(null===b)throw Error(n(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Ag(e),a;if(f===d)return Ag(e),b;f=f.sibling}throw Error(n(188));}if(c.return!==d.return)c=e,d=f;
else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(n(189));}}if(c.alternate!==d)throw Error(n(190));}if(3!==c.tag)throw Error(n(188));return c.stateNode.current===c?a:b}function Bg(a){a=oj(a);return null!==a?Cg(a):null}function Cg(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Cg(a);if(null!==b)return b;a=a.sibling}return null}
function pj(a,b){if(Ca&&"function"===typeof Ca.onCommitFiberRoot)try{Ca.onCommitFiberRoot(Uc,a,void 0,128===(a.current.flags&128))}catch(c){}}function qj(a){a>>>=0;return 0===a?32:31-(rj(a)/sj|0)|0}function hc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&
4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Vc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=hc(h):(f&=g,0!==f&&(d=hc(f)))}else g=c&~e,0!==g?d=hc(g):0!==f&&(d=hc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&
(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-ta(b),e=1<<c,d|=a[c],b&=~e;return d}function tj(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uj(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-ta(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=tj(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function ve(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Dg(){var a=Wc;Wc<<=1;0===(Wc&4194240)&&(Wc=64);return a}function we(a){for(var b=[],c=0;31>c;c++)b.push(a);
return b}function ic(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-ta(b);a[b]=c}function vj(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-ta(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function xe(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-ta(c),e=1<<d;e&b|a[d]&
b&&(a[d]|=b);c&=~e}}function Eg(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}function Fg(a,b){switch(a){case "focusin":case "focusout":Va=null;break;case "dragenter":case "dragleave":Wa=null;break;case "mouseover":case "mouseout":Xa=null;break;case "pointerover":case "pointerout":jc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":kc.delete(b.pointerId)}}function lc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,
nativeEvent:f,targetContainers:[e]},null!==b&&(b=ec(b),null!==b&&Gg(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}function wj(a,b,c,d,e){switch(b){case "focusin":return Va=lc(Va,a,b,c,d,e),!0;case "dragenter":return Wa=lc(Wa,a,b,c,d,e),!0;case "mouseover":return Xa=lc(Xa,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;jc.set(f,lc(jc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,kc.set(f,lc(kc.get(f)||null,a,b,
c,d,e)),!0}return!1}function Hg(a){var b=pb(a.target);if(null!==b){var c=ob(b);if(null!==c)if(b=c.tag,13===b){if(b=zg(c),null!==b){a.blockedOn=b;xj(a.priority,function(){yj(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=ye(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;
var d=new c.constructor(c.type,c);ze=d;c.target.dispatchEvent(d);ze=null}else return b=ec(c),null!==b&&Gg(b),a.blockedOn=c,!1;b.shift()}return!0}function Ig(a,b,c){Xc(a)&&c.delete(b)}function zj(){Ae=!1;null!==Va&&Xc(Va)&&(Va=null);null!==Wa&&Xc(Wa)&&(Wa=null);null!==Xa&&Xc(Xa)&&(Xa=null);jc.forEach(Ig);kc.forEach(Ig)}function mc(a,b){a.blockedOn===b&&(a.blockedOn=null,Ae||(Ae=!0,Jg(Kg,zj)))}function nc(a){if(0<Yc.length){mc(Yc[0],a);for(var b=1;b<Yc.length;b++){var c=Yc[b];c.blockedOn===a&&(c.blockedOn=
null)}}null!==Va&&mc(Va,a);null!==Wa&&mc(Wa,a);null!==Xa&&mc(Xa,a);b=function(b){return mc(b,a)};jc.forEach(b);kc.forEach(b);for(b=0;b<Ya.length;b++)c=Ya[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Ya.length&&(b=Ya[0],null===b.blockedOn);)Hg(b),null===b.blockedOn&&Ya.shift()}function Aj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=1,Be(a,b,c,d)}finally{z=e,Gb.transition=f}}function Bj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=4,Be(a,b,c,d)}finally{z=e,Gb.transition=
f}}function Be(a,b,c,d){if(Zc){var e=ye(a,b,c,d);if(null===e)Ce(a,b,d,$c,c),Fg(a,d);else if(wj(e,a,b,c,d))d.stopPropagation();else if(Fg(a,d),b&4&&-1<Cj.indexOf(a)){for(;null!==e;){var f=ec(e);null!==f&&Dj(f);f=ye(a,b,c,d);null===f&&Ce(a,b,d,$c,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Ce(a,b,d,null,c)}}function ye(a,b,c,d){$c=null;a=re(d);a=pb(a);if(null!==a)if(b=ob(a),null===b)a=null;else if(c=b.tag,13===c){a=zg(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===
b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);$c=a;return null}function Lg(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;
case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;case "message":switch(Ej()){case De:return 1;case Mg:return 4;case ad:case Fj:return 16;case Ng:return 536870912;default:return 16}default:return 16}}function Og(){if(bd)return bd;
var a,b=Ee,c=b.length,d,e="value"in Za?Za.value:Za.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return bd=e.slice(a,1<d?1-d:void 0)}function cd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function dd(){return!0}function Pg(){return!1}function ka(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;
for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?dd:Pg;this.isPropagationStopped=Pg;return this}E(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=dd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():
"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=dd)},persist:function(){},isPersistent:dd});return b}function Gj(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Hj[a])?!!b[a]:!1}function Fe(a){return Gj}function Qg(a,b){switch(a){case "keyup":return-1!==Ij.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function Rg(a){a=a.detail;return"object"===typeof a&&
"data"in a?a.data:null}function Jj(a,b){switch(a){case "compositionend":return Rg(b);case "keypress":if(32!==b.which)return null;Sg=!0;return Tg;case "textInput":return a=b.data,a===Tg&&Sg?null:a;default:return null}}function Kj(a,b){if(Hb)return"compositionend"===a||!Ge&&Qg(a,b)?(a=Og(),bd=Ee=Za=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return Ug&&"ko"!==b.locale?null:b.data;default:return null}}function Vg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lj[a.type]:"textarea"===b?!0:!1}function Mj(a){if(!Ia)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Wg(a,b,c,d){ug(d);b=ed(b,"onChange");0<b.length&&(c=new He("onChange","change",null,c,d),a.push({event:c,listeners:b}))}function Nj(a){Xg(a,
0)}function fd(a){var b=Ib(a);if(jg(b))return a}function Oj(a,b){if("change"===a)return b}function Yg(){oc&&(oc.detachEvent("onpropertychange",Zg),pc=oc=null)}function Zg(a){if("value"===a.propertyName&&fd(pc)){var b=[];Wg(b,pc,a,re(a));wg(Nj,b)}}function Pj(a,b,c){"focusin"===a?(Yg(),oc=b,pc=c,oc.attachEvent("onpropertychange",Zg)):"focusout"===a&&Yg()}function Qj(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return fd(pc)}function Rj(a,b){if("click"===a)return fd(b)}function Sj(a,b){if("input"===
a||"change"===a)return fd(b)}function Tj(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function qc(a,b){if(ua(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!Zd.call(b,e)||!ua(a[e],b[e]))return!1}return!0}function $g(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ah(a,b){var c=$g(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;
if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=$g(c)}}function bh(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?bh(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function ch(){for(var a=window,b=Qc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;
b=Qc(a.document)}return b}function Ie(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Uj(a){var b=ch(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&bh(c.ownerDocument.documentElement,c)){if(null!==d&&Ie(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);
else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=ah(c,f);var g=ah(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),
a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function dh(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Je||null==Jb||Jb!==Qc(d)||(d=Jb,"selectionStart"in d&&Ie(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d=
{anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),rc&&qc(rc,d)||(rc=d,d=ed(Ke,"onSelect"),0<d.length&&(b=new He("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Jb)))}function gd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function hd(a){if(Le[a])return Le[a];if(!Kb[a])return a;var b=Kb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in eh)return Le[a]=b[c];return a}function $a(a,
b){fh.set(a,b);nb(b,[a])}function gh(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;nj(d,b,void 0,a);a.currentTarget=null}function Xg(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,m=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;gh(e,h,m);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;m=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;
gh(e,h,m);f=k}}}if(Tc)throw a=ue,Tc=!1,ue=null,a;}function B(a,b){var c=b[Me];void 0===c&&(c=b[Me]=new Set);var d=a+"__bubble";c.has(d)||(hh(b,a,2,!1),c.add(d))}function Ne(a,b,c){var d=0;b&&(d|=4);hh(c,a,d,b)}function sc(a){if(!a[id]){a[id]=!0;cg.forEach(function(b){"selectionchange"!==b&&(Vj.has(b)||Ne(b,!1,a),Ne(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[id]||(b[id]=!0,Ne("selectionchange",!1,b))}}function hh(a,b,c,d,e){switch(Lg(b)){case 1:e=Aj;break;case 4:e=Bj;break;default:e=
Be}c=e.bind(null,b,c,a);e=void 0;!Oe||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}function Ce(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;
if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=pb(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}wg(function(){var d=f,e=re(c),g=[];a:{var h=fh.get(a);if(void 0!==h){var k=He,n=a;switch(a){case "keypress":if(0===cd(c))break a;case "keydown":case "keyup":k=Wj;break;case "focusin":n="focus";k=Pe;break;case "focusout":n="blur";k=Pe;break;case "beforeblur":case "afterblur":k=Pe;break;
case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=ih;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=Xj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Yj;break;case jh:case kh:case lh:k=Zj;break;case mh:k=ak;break;case "scroll":k=bk;break;case "wheel":k=ck;break;case "copy":case "cut":case "paste":k=
dk;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=nh}var l=0!==(b&4),p=!l&&"scroll"===a,A=l?null!==h?h+"Capture":null:h;l=[];for(var v=d,q;null!==v;){q=v;var M=q.stateNode;5===q.tag&&null!==M&&(q=M,null!==A&&(M=fc(v,A),null!=M&&l.push(tc(v,M,q))));if(p)break;v=v.return}0<l.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:l}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===
a;k="mouseout"===a||"pointerout"===a;if(h&&c!==ze&&(n=c.relatedTarget||c.fromElement)&&(pb(n)||n[Ja]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?pb(n):null,null!==n&&(p=ob(n),n!==p||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){l=ih;M="onMouseLeave";A="onMouseEnter";v="mouse";if("pointerout"===a||"pointerover"===a)l=nh,M="onPointerLeave",A="onPointerEnter",v="pointer";p=null==k?h:Ib(k);q=null==
n?h:Ib(n);h=new l(M,v+"leave",k,c,e);h.target=p;h.relatedTarget=q;M=null;pb(e)===d&&(l=new l(A,v+"enter",n,c,e),l.target=q,l.relatedTarget=p,M=l);p=M;if(k&&n)b:{l=k;A=n;v=0;for(q=l;q;q=Lb(q))v++;q=0;for(M=A;M;M=Lb(M))q++;for(;0<v-q;)l=Lb(l),v--;for(;0<q-v;)A=Lb(A),q--;for(;v--;){if(l===A||null!==A&&l===A.alternate)break b;l=Lb(l);A=Lb(A)}l=null}else l=null;null!==k&&oh(g,h,k,l,!1);null!==n&&null!==p&&oh(g,p,n,l,!0)}}}a:{h=d?Ib(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===
k&&"file"===h.type)var ma=Oj;else if(Vg(h))if(ph)ma=Sj;else{ma=Qj;var va=Pj}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(ma=Rj);if(ma&&(ma=ma(a,d))){Wg(g,ma,c,e);break a}va&&va(a,h,d);"focusout"===a&&(va=h._wrapperState)&&va.controlled&&"number"===h.type&&me(h,"number",h.value)}va=d?Ib(d):window;switch(a){case "focusin":if(Vg(va)||"true"===va.contentEditable)Jb=va,Ke=d,rc=null;break;case "focusout":rc=Ke=Jb=null;break;case "mousedown":Je=!0;break;case "contextmenu":case "mouseup":case "dragend":Je=
!1;dh(g,c,e);break;case "selectionchange":if(ek)break;case "keydown":case "keyup":dh(g,c,e)}var ab;if(Ge)b:{switch(a){case "compositionstart":var da="onCompositionStart";break b;case "compositionend":da="onCompositionEnd";break b;case "compositionupdate":da="onCompositionUpdate";break b}da=void 0}else Hb?Qg(a,c)&&(da="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(da="onCompositionStart");da&&(Ug&&"ko"!==c.locale&&(Hb||"onCompositionStart"!==da?"onCompositionEnd"===da&&Hb&&(ab=Og()):(Za=e,Ee=
"value"in Za?Za.value:Za.textContent,Hb=!0)),va=ed(d,da),0<va.length&&(da=new qh(da,a,null,c,e),g.push({event:da,listeners:va}),ab?da.data=ab:(ab=Rg(c),null!==ab&&(da.data=ab))));if(ab=fk?Jj(a,c):Kj(a,c))d=ed(d,"onBeforeInput"),0<d.length&&(e=new gk("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=ab)}Xg(g,b)})}function tc(a,b,c){return{instance:a,listener:b,currentTarget:c}}function ed(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==
f&&(e=f,f=fc(a,c),null!=f&&d.unshift(tc(a,f,e)),f=fc(a,b),null!=f&&d.push(tc(a,f,e)));a=a.return}return d}function Lb(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}function oh(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,m=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==m&&(h=m,e?(k=fc(c,f),null!=k&&g.unshift(tc(c,k,h))):e||(k=fc(c,f),null!=k&&g.push(tc(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function rh(a){return("string"===
typeof a?a:""+a).replace(hk,"\n").replace(ik,"")}function jd(a,b,c,d){b=rh(b);if(rh(a)!==b&&c)throw Error(n(425));}function kd(){}function Qe(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function jk(a){setTimeout(function(){throw a;})}function Re(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=
e.data,"/$"===c){if(0===d){a.removeChild(e);nc(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);nc(b)}function Ka(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}function sh(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}function pb(a){var b=a[Da];
if(b)return b;for(var c=a.parentNode;c;){if(b=c[Ja]||c[Da]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sh(a);null!==a;){if(c=a[Da])return c;a=sh(a)}return b}a=c;c=a.parentNode}return null}function ec(a){a=a[Da]||a[Ja];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Ib(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(n(33));}function Rc(a){return a[uc]||null}function bb(a){return{current:a}}function w(a,b){0>Mb||(a.current=Se[Mb],Se[Mb]=null,Mb--)}
function y(a,b,c){Mb++;Se[Mb]=a.current;a.current=b}function Nb(a,b){var c=a.type.contextTypes;if(!c)return cb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function ea(a){a=a.childContextTypes;return null!==a&&void 0!==a}function th(a,b,c){if(J.current!==cb)throw Error(n(168));
y(J,b);y(S,c)}function uh(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(n(108,hj(a)||"Unknown",e));return E({},c,d)}function ld(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||cb;qb=J.current;y(J,a);y(S,S.current);return!0}function vh(a,b,c){var d=a.stateNode;if(!d)throw Error(n(169));c?(a=uh(a,b,qb),d.__reactInternalMemoizedMergedChildContext=a,w(S),w(J),y(J,a)):w(S);
y(S,c)}function wh(a){null===La?La=[a]:La.push(a)}function kk(a){md=!0;wh(a)}function db(){if(!Te&&null!==La){Te=!0;var a=0,b=z;try{var c=La;for(z=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}La=null;md=!1}catch(e){throw null!==La&&(La=La.slice(a+1)),xh(De,db),e;}finally{z=b,Te=!1}}return null}function rb(a,b){Ob[Pb++]=nd;Ob[Pb++]=od;od=a;nd=b}function yh(a,b,c){na[oa++]=Ma;na[oa++]=Na;na[oa++]=sb;sb=a;var d=Ma;a=Na;var e=32-ta(d)-1;d&=~(1<<e);c+=1;var f=32-ta(b)+e;if(30<f){var g=e-e%5;
f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Ma=1<<32-ta(b)+e|c<<e|d;Na=f+a}else Ma=1<<f|c<<e|d,Na=a}function Ue(a){null!==a.return&&(rb(a,1),yh(a,1,0))}function Ve(a){for(;a===od;)od=Ob[--Pb],Ob[Pb]=null,nd=Ob[--Pb],Ob[Pb]=null;for(;a===sb;)sb=na[--oa],na[oa]=null,Na=na[--oa],na[oa]=null,Ma=na[--oa],na[oa]=null}function zh(a,b){var c=pa(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function Ah(a,b){switch(a.tag){case 5:var c=
a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,la=a,fa=Ka(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,la=a,fa=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==sb?{id:Ma,overflow:Na}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=pa(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,la=a,fa=null,!0):!1;default:return!1}}function We(a){return 0!==
(a.mode&1)&&0===(a.flags&128)}function Xe(a){if(D){var b=fa;if(b){var c=b;if(!Ah(a,b)){if(We(a))throw Error(n(418));b=Ka(c.nextSibling);var d=la;b&&Ah(a,b)?zh(d,c):(a.flags=a.flags&-4097|2,D=!1,la=a)}}else{if(We(a))throw Error(n(418));a.flags=a.flags&-4097|2;D=!1;la=a}}}function Bh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;la=a}function pd(a){if(a!==la)return!1;if(!D)return Bh(a),D=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Qe(a.type,
a.memoizedProps));if(b&&(b=fa)){if(We(a)){for(a=fa;a;)a=Ka(a.nextSibling);throw Error(n(418));}for(;b;)zh(a,b),b=Ka(b.nextSibling)}Bh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){fa=Ka(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}fa=null}}else fa=la?Ka(a.stateNode.nextSibling):null;return!0}function Qb(){fa=la=null;D=!1}function Ye(a){null===
wa?wa=[a]:wa.push(a)}function xa(a,b){if(a&&a.defaultProps){b=E({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Ze(){$e=Rb=qd=null}function af(a,b){b=rd.current;w(rd);a._currentValue=b}function bf(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Sb(a,b){qd=a;$e=Rb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&
(0!==(a.lanes&b)&&(ha=!0),a.firstContext=null)}function qa(a){var b=a._currentValue;if($e!==a)if(a={context:a,memoizedValue:b,next:null},null===Rb){if(null===qd)throw Error(n(308));Rb=a;qd.dependencies={lanes:0,firstContext:a}}else Rb=Rb.next=a;return b}function cf(a){null===tb?tb=[a]:tb.push(a)}function Ch(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,cf(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Oa(a,d)}function Oa(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==
a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}function df(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Pa(a,b){return{eventTime:a,lane:b,
tag:0,payload:null,callback:null,next:null}}function eb(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(p&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return lk(a,c)}e=d.interleaved;null===e?(b.next=b,cf(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Oa(a,c)}function sd(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Eh(a,b){var c=a.updateQueue,d=a.alternate;
if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}function td(a,b,c,d){var e=
a.updateQueue;fb=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,m=k.next;k.next=null;null===g?f=m:g.next=m;g=k;var n=a.alternate;null!==n&&(n=n.updateQueue,h=n.lastBaseUpdate,h!==g&&(null===h?n.firstBaseUpdate=m:h.next=m,n.lastBaseUpdate=k))}if(null!==f){var l=e.baseState;g=0;n=m=k=null;h=f;do{var r=h.lane,p=h.eventTime;if((d&r)===r){null!==n&&(n=n.next={eventTime:p,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var x=
a,F=h;r=b;p=c;switch(F.tag){case 1:x=F.payload;if("function"===typeof x){l=x.call(p,l,r);break a}l=x;break a;case 3:x.flags=x.flags&-65537|128;case 0:x=F.payload;r="function"===typeof x?x.call(p,l,r):x;if(null===r||void 0===r)break a;l=E({},l,r);break a;case 2:fb=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else p={eventTime:p,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===n?(m=n=p,k=l):n=n.next=p,g|=r;h=h.next;if(null===h)if(h=
e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===n&&(k=l);e.baseState=k;e.firstBaseUpdate=m;e.lastBaseUpdate=n;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);ra|=g;a.lanes=g;a.memoizedState=l}}function Fh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(n(191,
e));e.call(d)}}}function ef(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:E({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}function Gh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qc(c,d)||!qc(e,f):!0}function Hh(a,b,c){var d=!1,e=cb;var f=b.contextType;"object"===typeof f&&null!==f?f=qa(f):(e=ea(b)?qb:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==
d)?Nb(a,e):cb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=ud;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Ih(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&ud.enqueueReplaceState(b,
b.state,null)}function ff(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Jh;df(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=qa(f):(f=ea(b)?qb:J.current,e.context=Nb(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(ef(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&ud.enqueueReplaceState(e,e.state,null),td(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function vc(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(n(309));var d=c.stateNode}if(!d)throw Error(n(147,a));var e=
d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===Jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(n(284));if(!c._owner)throw Error(n(290,a));}return a}function vd(a,b){a=Object.prototype.toString.call(b);throw Error(n(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Kh(a){var b=a._init;return b(a._payload)}function Lh(a){function b(b,
c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=gb(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&null===b.alternate&&
(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=gf(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===Bb)return l(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ta&&Kh(f)===b.type))return d=e(b,c.props),d.ref=vc(a,b,c),d.return=a,d;d=wd(c.type,c.key,c.props,null,a.mode,d);d.ref=vc(a,b,c);d.return=a;return d}function m(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==
c.containerInfo||b.stateNode.implementation!==c.implementation)return b=hf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=ub(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function u(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=gf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case xd:return c=wd(b.type,b.key,b.props,null,a.mode,c),c.ref=vc(a,null,b),c.return=
a,c;case Cb:return b=hf(b,a.mode,c),b.return=a,b;case Ta:var d=b._init;return u(a,d(b._payload),c)}if(cc(b)||ac(b))return b=ub(b,a.mode,c,null),b.return=a,b;vd(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case xd:return c.key===e?k(a,b,c,d):null;case Cb:return c.key===e?m(a,b,c,d):null;case Ta:return e=c._init,r(a,b,e(c._payload),d)}if(cc(c)||
ac(c))return null!==e?null:l(a,b,c,d,null);vd(a,c)}return null}function p(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case xd:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case Cb:return a=a.get(null===d.key?c:d.key)||null,m(b,a,d,e);case Ta:var f=d._init;return p(a,b,c,f(d._payload),e)}if(cc(d)||ac(d))return a=a.get(c)||null,l(b,a,d,e,null);vd(b,d)}return null}function x(e,g,h,k){for(var n=
null,m=null,l=g,q=g=0,v=null;null!==l&&q<h.length;q++){l.index>q?(v=l,l=null):v=l.sibling;var A=r(e,l,h[q],k);if(null===A){null===l&&(l=v);break}a&&l&&null===A.alternate&&b(e,l);g=f(A,g,q);null===m?n=A:m.sibling=A;m=A;l=v}if(q===h.length)return c(e,l),D&&rb(e,q),n;if(null===l){for(;q<h.length;q++)l=u(e,h[q],k),null!==l&&(g=f(l,g,q),null===m?n=l:m.sibling=l,m=l);D&&rb(e,q);return n}for(l=d(e,l);q<h.length;q++)v=p(l,e,q,h[q],k),null!==v&&(a&&null!==v.alternate&&l.delete(null===v.key?q:v.key),g=f(v,
g,q),null===m?n=v:m.sibling=v,m=v);a&&l.forEach(function(a){return b(e,a)});D&&rb(e,q);return n}function F(e,g,h,k){var m=ac(h);if("function"!==typeof m)throw Error(n(150));h=m.call(h);if(null==h)throw Error(n(151));for(var l=m=null,q=g,v=g=0,A=null,t=h.next();null!==q&&!t.done;v++,t=h.next()){q.index>v?(A=q,q=null):A=q.sibling;var x=r(e,q,t.value,k);if(null===x){null===q&&(q=A);break}a&&q&&null===x.alternate&&b(e,q);g=f(x,g,v);null===l?m=x:l.sibling=x;l=x;q=A}if(t.done)return c(e,q),D&&rb(e,v),m;
if(null===q){for(;!t.done;v++,t=h.next())t=u(e,t.value,k),null!==t&&(g=f(t,g,v),null===l?m=t:l.sibling=t,l=t);D&&rb(e,v);return m}for(q=d(e,q);!t.done;v++,t=h.next())t=p(q,e,v,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?v:t.key),g=f(t,g,v),null===l?m=t:l.sibling=t,l=t);a&&q.forEach(function(a){return b(e,a)});D&&rb(e,v);return m}function w(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Bb&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case xd:a:{for(var k=
f.key,m=d;null!==m;){if(m.key===k){k=f.type;if(k===Bb){if(7===m.tag){c(a,m.sibling);d=e(m,f.props.children);d.return=a;a=d;break a}}else if(m.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ta&&Kh(k)===m.type){c(a,m.sibling);d=e(m,f.props);d.ref=vc(a,m,f);d.return=a;a=d;break a}c(a,m);break}else b(a,m);m=m.sibling}f.type===Bb?(d=ub(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=wd(f.type,f.key,f.props,null,a.mode,h),h.ref=vc(a,d,f),h.return=a,a=h)}return g(a);case Cb:a:{for(m=f.key;null!==
d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=hf(f,a.mode,h);d.return=a;a=d}return g(a);case Ta:return m=f._init,w(a,d,m(f._payload),h)}if(cc(f))return x(a,d,f,h);if(ac(f))return F(a,d,f,h);vd(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=gf(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return w}function vb(a){if(a===wc)throw Error(n(174));return a}function jf(a,b){y(xc,b);y(yc,a);y(Ea,wc);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:oe(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=oe(b,a)}w(Ea);y(Ea,b)}function Tb(a){w(Ea);w(yc);w(xc)}function Mh(a){vb(xc.current);var b=vb(Ea.current);var c=oe(b,a.type);b!==c&&(y(yc,a),y(Ea,c))}function kf(a){yc.current===a&&
(w(Ea),w(yc))}function yd(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function lf(){for(var a=0;a<mf.length;a++)mf[a]._workInProgressVersionPrimary=
null;mf.length=0}function V(){throw Error(n(321));}function nf(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!ua(a[c],b[c]))return!1;return!0}function of(a,b,c,d,e,f){wb=f;C=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;zd.current=null===a||null===a.memoizedState?mk:nk;a=c(d,e);if(zc){f=0;do{zc=!1;Ac=0;if(25<=f)throw Error(n(301));f+=1;N=K=null;b.updateQueue=null;zd.current=ok;a=c(d,e)}while(zc)}zd.current=Ad;b=null!==K&&null!==K.next;wb=0;N=K=C=null;Bd=!1;if(b)throw Error(n(300));
return a}function pf(){var a=0!==Ac;Ac=0;return a}function Fa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===N?C.memoizedState=N=a:N=N.next=a;return N}function sa(){if(null===K){var a=C.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===N?C.memoizedState:N.next;if(null!==b)N=b,K=a;else{if(null===a)throw Error(n(310));K=a;a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===N?C.memoizedState=
N=a:N=N.next=a}return N}function Bc(a,b){return"function"===typeof b?b(a):b}function qf(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,m=f;do{var l=m.lane;if((wb&l)===l)null!==k&&(k=k.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),d=m.hasEagerState?
m.eagerState:a(d,m.action);else{var u={lane:l,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};null===k?(h=k=u,g=d):k=k.next=u;C.lanes|=l;ra|=l}m=m.next}while(null!==m&&m!==f);null===k?g=d:k.next=h;ua(d,b.memoizedState)||(ha=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,C.lanes|=f,ra|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}function rf(a,b,c){b=sa();
c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);ua(f,b.memoizedState)||(ha=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Nh(a,b,c){}function Oh(a,b,c){c=C;var d=sa(),e=b(),f=!ua(d.memoizedState,e);f&&(d.memoizedState=e,ha=!0);d=d.queue;sf(Ph.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==N&&
N.memoizedState.tag&1){c.flags|=2048;Cc(9,Qh.bind(null,c,d,e,b),void 0,null);if(null===O)throw Error(n(349));0!==(wb&30)||Rh(c,b,e)}return e}function Rh(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}function Qh(a,b,c,d){b.value=c;b.getSnapshot=d;Sh(b)&&Th(a)}function Ph(a,b,c){return c(function(){Sh(b)&&Th(a)})}function Sh(a){var b=a.getSnapshot;a=a.value;try{var c=
b();return!ua(a,c)}catch(d){return!0}}function Th(a){var b=Oa(a,1);null!==b&&ya(b,a,1,-1)}function Uh(a){var b=Fa();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:a};b.queue=a;a=a.dispatch=pk.bind(null,C,a);return[b.memoizedState,a]}function Cc(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.lastEffect=a.next=
a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Vh(a){return sa().memoizedState}function Cd(a,b,c,d){var e=Fa();C.flags|=a;e.memoizedState=Cc(1|b,c,void 0,void 0===d?null:d)}function Dd(a,b,c,d){var e=sa();d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&nf(d,g.deps)){e.memoizedState=Cc(b,c,f,d);return}}C.flags|=a;e.memoizedState=Cc(1|b,c,f,d)}function Wh(a,b){return Cd(8390656,8,a,b)}function sf(a,
b){return Dd(2048,8,a,b)}function Xh(a,b){return Dd(4,2,a,b)}function Yh(a,b){return Dd(4,4,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dd(4,4,Zh.bind(null,b,a),c)}function tf(a,b){}function ai(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nf(b,d[1]))return d[0];c.memoizedState=[a,
b];return a}function bi(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nf(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ci(a,b,c){if(0===(wb&21))return a.baseState&&(a.baseState=!1,ha=!0),a.memoizedState=c;ua(c,b)||(c=Dg(),C.lanes|=c,ra|=c,a.baseState=!0);return b}function qk(a,b,c){c=z;z=0!==c&&4>c?c:4;a(!0);var d=uf.transition;uf.transition={};try{a(!1),b()}finally{z=c,uf.transition=d}}function di(){return sa().memoizedState}function rk(a,b,
c){var d=hb(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ei(a))fi(b,c);else if(c=Ch(a,b,c,d),null!==c){var e=Z();ya(c,a,d,e);gi(c,b,d)}}function pk(a,b,c){var d=hb(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ei(a))fi(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(ua(h,g)){var k=b.interleaved;null===k?(e.next=e,cf(b)):
(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(m){}finally{}c=Ch(a,b,e,d);null!==c&&(e=Z(),ya(c,a,d,e),gi(c,b,d))}}function ei(a){var b=a.alternate;return a===C||null!==b&&b===C}function fi(a,b){zc=Bd=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function gi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Ub(a,b){try{var c="",d=b;do c+=gj(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+
"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function vf(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function wf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function hi(a,b,c){c=Pa(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ed||(Ed=!0,xf=d);wf(a,b)};return c}function ii(a,b,c){c=Pa(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};
c.callback=function(){wf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){wf(a,b);"function"!==typeof d&&(null===ib?ib=new Set([this]):ib.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ji(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new sk;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=tk.bind(null,a,b,c),b.then(a,a))}function ki(a){do{var b;
if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}function li(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Pa(-1,1),b.tag=2,eb(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function aa(a,b,c,d){b.child=null===a?mi(b,null,c,d):Vb(b,a.child,c,d)}function ni(a,b,c,d,e){c=c.render;var f=b.ref;Sb(b,e);d=of(a,b,c,d,f,
e);c=pf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&c&&Ue(b);b.flags|=1;aa(a,b,d,e);return b.child}function oi(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!yf(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,pi(a,b,f,d,e);a=wd(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:qc;if(c(g,d)&&a.ref===
b.ref)return Qa(a,b,e)}b.flags|=1;a=gb(f,d);a.ref=b.ref;a.return=b;return b.child=a}function pi(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(qc(f,d)&&a.ref===b.ref)if(ha=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(ha=!0);else return b.lanes=a.lanes,Qa(a,b,e)}return zf(a,b,c,d,e)}function qi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},y(Ga,ba),ba|=c;
else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,y(Ga,ba),ba|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;y(Ga,ba);ba|=d}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,y(Ga,ba),ba|=d;aa(a,b,e,c);return b.child}function ri(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function zf(a,
b,c,d,e){var f=ea(c)?qb:J.current;f=Nb(b,f);Sb(b,e);c=of(a,b,c,d,f,e);d=pf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&d&&Ue(b);b.flags|=1;aa(a,b,c,e);return b.child}function si(a,b,c,d,e){if(ea(c)){var f=!0;ld(b)}else f=!1;Sb(b,e);if(null===b.stateNode)Fd(a,b),Hh(b,c,d),ff(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,m=c.contextType;"object"===typeof m&&null!==m?m=qa(m):(m=ea(c)?qb:J.current,m=Nb(b,
m));var l=c.getDerivedStateFromProps,n="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate;n||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==m)&&Ih(b,g,d,m);fb=!1;var r=b.memoizedState;g.state=r;td(b,d,g,e);k=b.memoizedState;h!==d||r!==k||S.current||fb?("function"===typeof l&&(ef(b,c,l,d),k=b.memoizedState),(h=fb||Gh(b,c,h,d,r,k,m))?(n||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||
("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=m,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Dh(a,b);h=b.memoizedProps;m=b.type===b.elementType?h:xa(b.type,h);g.props=
m;n=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=qa(k):(k=ea(c)?qb:J.current,k=Nb(b,k));var p=c.getDerivedStateFromProps;(l="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==n||r!==k)&&Ih(b,g,d,k);fb=!1;r=b.memoizedState;g.state=r;td(b,d,g,e);var x=b.memoizedState;h!==n||r!==x||S.current||fb?("function"===typeof p&&(ef(b,c,p,d),x=b.memoizedState),
(m=fb||Gh(b,c,m,d,r,x,k)||!1)?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=
4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return Af(a,b,c,d,f,e)}function Af(a,b,c,d,e,f){ri(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&vh(b,c,!1),
Qa(a,b,f);d=b.stateNode;uk.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Vb(b,a.child,null,f),b.child=Vb(b,null,h,f)):aa(a,b,h,f);b.memoizedState=d.state;e&&vh(b,c,!0);return b.child}function ti(a){var b=a.stateNode;b.pendingContext?th(a,b.pendingContext,b.pendingContext!==b.context):b.context&&th(a,b.context,!1);jf(a,b.containerInfo)}function ui(a,b,c,d,e){Qb();Ye(e);b.flags|=256;aa(a,b,c,d);return b.child}function Bf(a){return{baseLanes:a,
cachePool:null,transitions:null}}function vi(a,b,c){var d=b.pendingProps,e=G.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(G,e&1);if(null===a){Xe(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==
f?(f.childLanes=0,f.pendingProps=g):f=Gd(g,d,0,null),a=ub(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=Bf(c),b.memoizedState=Cf,a):Df(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return vk(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=gb(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=gb(h,f):(f=
ub(f,g,c,null),f.flags|=2);f.return=b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?Bf(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=Cf;return d}f=a.child;a=f.sibling;d=gb(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function Df(a,b,c){b=Gd({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function Hd(a,b,c,d){null!==d&&Ye(d);Vb(b,a.child,null,c);a=Df(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}function vk(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=vf(Error(n(422))),Hd(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=Gd({mode:"visible",children:d.children},e,0,null);f=ub(f,e,g,null);f.flags|=2;d.return=
b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Vb(b,a.child,null,g);b.child.memoizedState=Bf(g);b.memoizedState=Cf;return f}if(0===(b.mode&1))return Hd(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(n(419));d=vf(f,d,void 0);return Hd(a,b,g,d)}h=0!==(g&a.childLanes);if(ha||h){d=O;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=
32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;0!==e&&e!==f.retryLane&&(f.retryLane=e,Oa(a,e),ya(d,a,e,-1))}Ef();d=vf(Error(n(421)));return Hd(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=wk.bind(null,a),e._reactRetry=b,null;a=f.treeContext;fa=Ka(e.nextSibling);la=b;D=!0;wa=null;null!==a&&(na[oa++]=Ma,na[oa++]=Na,na[oa++]=sb,Ma=a.id,Na=a.overflow,sb=b);b=Df(b,d.children);b.flags|=4096;return b}function wi(a,b,c){a.lanes|=b;var d=a.alternate;
null!==d&&(d.lanes|=b);bf(a.return,b,c)}function Ff(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}function xi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;aa(a,b,d.children,c);d=G.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&
wi(a,c,b);else if(19===a.tag)wi(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(G,d);if(0===(b.mode&1))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===yd(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ff(b,!1,e,c,f);break;case "backwards":c=
null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===yd(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ff(b,!0,c,null,f);break;case "together":Ff(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fd(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Qa(a,b,c){null!==a&&(b.dependencies=a.dependencies);ra|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(n(153));if(null!==
b.child){a=b.child;c=gb(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=gb(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}function xk(a,b,c){switch(b.tag){case 3:ti(b);Qb();break;case 5:Mh(b);break;case 1:ea(b.type)&&ld(b);break;case 4:jf(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;y(rd,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(G,G.current&
1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return vi(a,b,c);y(G,G.current&1);a=Qa(a,b,c);return null!==a?a.sibling:null}y(G,G.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return xi(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(G,G.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,qi(a,b,c)}return Qa(a,b,c)}function Dc(a,b){if(!D)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==
b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function W(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,
d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}function yk(a,b,c){var d=b.pendingProps;Ve(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(b),null;case 1:return ea(b.type)&&(w(S),w(J)),W(b),null;case 3:d=b.stateNode;Tb();w(S);w(J);lf();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)pd(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&
256)||(b.flags|=1024,null!==wa&&(Gf(wa),wa=null));yi(a,b);W(b);return null;case 5:kf(b);var e=vb(xc.current);c=b.type;if(null!==a&&null!=b.stateNode)zk(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(n(166));W(b);return null}a=vb(Ea.current);if(pd(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Da]=b;d[uc]=f;a=0!==(b.mode&1);switch(c){case "dialog":B("cancel",d);B("close",d);break;case "iframe":case "object":case "embed":B("load",d);break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],d);break;case "source":B("error",d);break;case "img":case "image":case "link":B("error",d);B("load",d);break;case "details":B("toggle",d);break;case "input":kg(d,f);B("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};B("invalid",d);break;case "textarea":ng(d,f),B("invalid",d)}pe(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&
jd(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&jd(d.textContent,h,a),e=["children",""+h]):$b.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&B("scroll",d)}switch(c){case "input":Pc(d);mg(d,f,!0);break;case "textarea":Pc(d);pg(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=kd)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===
a&&(a=qg(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Da]=b;a[uc]=d;Ak(a,b,!1,!1);b.stateNode=a;a:{g=qe(c,d);switch(c){case "dialog":B("cancel",a);B("close",a);e=d;break;case "iframe":case "object":case "embed":B("load",a);e=d;break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],a);e=d;break;case "source":B("error",a);e=d;break;case "img":case "image":case "link":B("error",a);B("load",a);e=d;break;case "details":B("toggle",a);e=d;break;case "input":kg(a,d);e=ke(a,d);B("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=E({},d,{value:void 0});B("invalid",a);break;case "textarea":ng(a,d);e=ne(a,d);B("invalid",a);break;default:e=d}pe(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=
h[f];"style"===f?sg(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&zi(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&Fc(a,k):"number"===typeof k&&Fc(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&($b.hasOwnProperty(f)?null!=k&&"onScroll"===f&&B("scroll",a):null!=k&&$d(a,f,k,g))}switch(c){case "input":Pc(a);mg(a,d,!1);break;case "textarea":Pc(a);pg(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Ua(d.value));
break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?Db(a,!!d.multiple,f,!1):null!=d.defaultValue&&Db(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=kd)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}W(b);return null;case 6:if(a&&null!=b.stateNode)Bk(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===
b.stateNode)throw Error(n(166));c=vb(xc.current);vb(Ea.current);if(pd(b)){d=b.stateNode;c=b.memoizedProps;d[Da]=b;if(f=d.nodeValue!==c)if(a=la,null!==a)switch(a.tag){case 3:jd(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&jd(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Da]=b,b.stateNode=d}W(b);return null;case 13:w(G);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(D&&
null!==fa&&0!==(b.mode&1)&&0===(b.flags&128)){for(f=fa;f;)f=Ka(f.nextSibling);Qb();b.flags|=98560;f=!1}else if(f=pd(b),null!==d&&null!==d.dehydrated){if(null===a){if(!f)throw Error(n(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(n(317));f[Da]=b}else Qb(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;W(b);f=!1}else null!==wa&&(Gf(wa),wa=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&
d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(G.current&1)?0===L&&(L=3):Ef()));null!==b.updateQueue&&(b.flags|=4);W(b);return null;case 4:return Tb(),yi(a,b),null===a&&sc(b.stateNode.containerInfo),W(b),null;case 10:return af(b.type._context),W(b),null;case 17:return ea(b.type)&&(w(S),w(J)),W(b),null;case 19:w(G);f=b.memoizedState;if(null===f)return W(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dc(f,!1);else{if(0!==L||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=
yd(a);if(null!==g){b.flags|=128;Dc(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,
f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;y(G,G.current&1|2);return b.child}a=a.sibling}null!==f.tail&&P()>Hf&&(b.flags|=128,d=!0,Dc(f,!1),b.lanes=4194304)}else{if(!d)if(a=yd(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dc(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!D)return W(b),null}else 2*P()-f.renderingStartTime>Hf&&1073741824!==c&&(b.flags|=
128,d=!0,Dc(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=P(),b.sibling=null,c=G.current,y(G,d?c&1|2:c&1),b;W(b);return null;case 22:case 23:return ba=Ga.current,w(Ga),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(ba&1073741824)&&(W(b),b.subtreeFlags&6&&(b.flags|=8192)):W(b),null;case 24:return null;
case 25:return null}throw Error(n(156,b.tag));}function Ck(a,b,c){Ve(b);switch(b.tag){case 1:return ea(b.type)&&(w(S),w(J)),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Tb(),w(S),w(J),lf(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return kf(b),null;case 13:w(G);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(n(340));Qb()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return w(G),null;case 4:return Tb(),
null;case 10:return af(b.type._context),null;case 22:case 23:return ba=Ga.current,w(Ga),null;case 24:return null;default:return null}}function Wb(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){H(a,b,d)}else c.current=null}function If(a,b,c){try{c()}catch(d){H(a,b,d)}}function Dk(a,b){Jf=Zc;a=ch();if(Ie(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();
if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(M){c=null;break a}var g=0,h=-1,k=-1,m=0,t=0,u=a,r=null;b:for(;;){for(var p;;){u!==c||0!==e&&3!==u.nodeType||(h=g+e);u!==f||0!==d&&3!==u.nodeType||(k=g+d);3===u.nodeType&&(g+=u.nodeValue.length);if(null===(p=u.firstChild))break;r=u;u=p}for(;;){if(u===a)break b;r===c&&++m===e&&(h=g);r===f&&++t===d&&(k=g);if(null!==(p=u.nextSibling))break;u=r;r=u.parentNode}u=p}c=-1===h||-1===k?null:
{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Kf={focusedElem:a,selectionRange:c};Zc=!1;for(l=b;null!==l;)if(b=l,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,l=a;else for(;null!==l;){b=l;try{var x=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==x){var w=x.memoizedProps,z=x.memoizedState,A=b.stateNode,v=A.getSnapshotBeforeUpdate(b.elementType===b.type?w:xa(b.type,w),z);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var q=
b.stateNode.containerInfo;1===q.nodeType?q.textContent="":9===q.nodeType&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163));}}catch(M){H(b,b.return,M)}a=b.sibling;if(null!==a){a.return=b.return;l=a;break}l=b.return}x=Ai;Ai=!1;return x}function Gc(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&If(b,c,f)}e=e.next}while(e!==d)}}
function Id(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Lf(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}function Bi(a){var b=a.alternate;null!==b&&(a.alternate=null,Bi(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Da],delete b[uc],delete b[Me],delete b[Ek],
delete b[Fk]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Ci(a){return 5===a.tag||3===a.tag||4===a.tag}function Di(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Ci(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&
2))return a.stateNode}}function Mf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=kd));else if(4!==d&&(a=a.child,null!==a))for(Mf(a,b,c),a=a.sibling;null!==a;)Mf(a,b,c),a=a.sibling}function Nf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);
else if(4!==d&&(a=a.child,null!==a))for(Nf(a,b,c),a=a.sibling;null!==a;)Nf(a,b,c),a=a.sibling}function jb(a,b,c){for(c=c.child;null!==c;)Ei(a,b,c),c=c.sibling}function Ei(a,b,c){if(Ca&&"function"===typeof Ca.onCommitFiberUnmount)try{Ca.onCommitFiberUnmount(Uc,c)}catch(h){}switch(c.tag){case 5:X||Wb(c,b);case 6:var d=T,e=za;T=null;jb(a,b,c);T=d;za=e;null!==T&&(za?(a=T,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):T.removeChild(c.stateNode));break;case 18:null!==T&&(za?
(a=T,c=c.stateNode,8===a.nodeType?Re(a.parentNode,c):1===a.nodeType&&Re(a,c),nc(a)):Re(T,c.stateNode));break;case 4:d=T;e=za;T=c.stateNode.containerInfo;za=!0;jb(a,b,c);T=d;za=e;break;case 0:case 11:case 14:case 15:if(!X&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?If(c,b,g):0!==(f&4)&&If(c,b,g));e=e.next}while(e!==d)}jb(a,b,c);break;case 1:if(!X&&(Wb(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=
c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){H(c,b,h)}jb(a,b,c);break;case 21:jb(a,b,c);break;case 22:c.mode&1?(X=(d=X)||null!==c.memoizedState,jb(a,b,c),X=d):jb(a,b,c);break;default:jb(a,b,c)}}function Fi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Gk);b.forEach(function(b){var d=Hk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Aa(a,b,c){c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=
c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:T=h.stateNode;za=!1;break a;case 3:T=h.stateNode.containerInfo;za=!0;break a;case 4:T=h.stateNode.containerInfo;za=!0;break a}h=h.return}if(null===T)throw Error(n(160));Ei(f,g,e);T=null;za=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(m){H(e,b,m)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)Gi(b,a),b=b.sibling}function Gi(a,b,c){var d=a.alternate;c=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Aa(b,a);
Ha(a);if(c&4){try{Gc(3,a,a.return),Id(3,a)}catch(F){H(a,a.return,F)}try{Gc(5,a,a.return)}catch(F){H(a,a.return,F)}}break;case 1:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);break;case 5:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);if(a.flags&32){var e=a.stateNode;try{Fc(e,"")}catch(F){H(a,a.return,F)}}if(c&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==d?d.memoizedProps:f,h=a.type,k=a.updateQueue;a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&lg(e,f);
qe(h,g);var m=qe(h,f);for(g=0;g<k.length;g+=2){var t=k[g],u=k[g+1];"style"===t?sg(e,u):"dangerouslySetInnerHTML"===t?zi(e,u):"children"===t?Fc(e,u):$d(e,t,u,m)}switch(h){case "input":le(e,f);break;case "textarea":og(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var p=f.value;null!=p?Db(e,!!f.multiple,p,!1):r!==!!f.multiple&&(null!=f.defaultValue?Db(e,!!f.multiple,f.defaultValue,!0):Db(e,!!f.multiple,f.multiple?[]:"",!1))}e[uc]=f}catch(F){H(a,a.return,
F)}}break;case 6:Aa(b,a);Ha(a);if(c&4){if(null===a.stateNode)throw Error(n(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(F){H(a,a.return,F)}}break;case 3:Aa(b,a);Ha(a);if(c&4&&null!==d&&d.memoizedState.isDehydrated)try{nc(b.containerInfo)}catch(F){H(a,a.return,F)}break;case 4:Aa(b,a);Ha(a);break;case 13:Aa(b,a);Ha(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||null!==e.alternate&&null!==e.alternate.memoizedState||(Of=P()));c&4&&Fi(a);break;case 22:t=
null!==d&&null!==d.memoizedState;a.mode&1?(X=(m=X)||t,Aa(b,a),X=m):Aa(b,a);Ha(a);if(c&8192){m=null!==a.memoizedState;if((a.stateNode.isHidden=m)&&!t&&0!==(a.mode&1))for(l=a,t=a.child;null!==t;){for(u=l=t;null!==l;){r=l;p=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Gc(4,r,r.return);break;case 1:Wb(r,r.return);var x=r.stateNode;if("function"===typeof x.componentWillUnmount){c=r;b=r.return;try{d=c,x.props=d.memoizedProps,x.state=d.memoizedState,x.componentWillUnmount()}catch(F){H(c,b,F)}}break;
case 5:Wb(r,r.return);break;case 22:if(null!==r.memoizedState){Hi(u);continue}}null!==p?(p.return=r,l=p):Hi(u)}t=t.sibling}a:for(t=null,u=a;;){if(5===u.tag){if(null===t){t=u;try{e=u.stateNode,m?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=u.stateNode,k=u.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=rg("display",g))}catch(F){H(a,a.return,F)}}}else if(6===u.tag){if(null===t)try{u.stateNode.nodeValue=
m?"":u.memoizedProps}catch(F){H(a,a.return,F)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===a)&&null!==u.child){u.child.return=u;u=u.child;continue}if(u===a)break a;for(;null===u.sibling;){if(null===u.return||u.return===a)break a;t===u&&(t=null);u=u.return}t===u&&(t=null);u.sibling.return=u.return;u=u.sibling}}break;case 19:Aa(b,a);Ha(a);c&4&&Fi(a);break;case 21:break;default:Aa(b,a),Ha(a)}}function Ha(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Ci(c)){var d=c;
break a}c=c.return}throw Error(n(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(Fc(e,""),d.flags&=-33);var f=Di(a);Nf(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Di(a);Mf(a,h,g);break;default:throw Error(n(161));}}catch(k){H(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function Ik(a,b,c){l=a;Ii(a,b,c)}function Ii(a,b,c){for(var d=0!==(a.mode&1);null!==l;){var e=l,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jd;if(!g){var h=e.alternate,k=null!==h&&null!==
h.memoizedState||X;h=Jd;var m=X;Jd=g;if((X=k)&&!m)for(l=e;null!==l;)g=l,k=g.child,22===g.tag&&null!==g.memoizedState?Ji(e):null!==k?(k.return=g,l=k):Ji(e);for(;null!==f;)l=f,Ii(f,b,c),f=f.sibling;l=e;Jd=h;X=m}Ki(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,l=f):Ki(a,b,c)}}function Ki(a,b,c){for(;null!==l;){b=l;if(0!==(b.flags&8772)){c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:X||Id(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!X)if(null===c)d.componentDidMount();
else{var e=b.elementType===b.type?c.memoizedProps:xa(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&Fh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode}Fh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&
c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var m=b.alternate;if(null!==m){var t=m.memoizedState;if(null!==t){var p=t.dehydrated;null!==p&&nc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163));}X||b.flags&512&&Lf(b)}catch(r){H(b,b.return,r)}}if(b===a){l=null;break}c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Hi(a){for(;null!==l;){var b=l;if(b===
a){l=null;break}var c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Ji(a){for(;null!==l;){var b=l;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Id(4,b)}catch(k){H(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){H(b,e,k)}}var f=b.return;try{Lf(b)}catch(k){H(b,f,k)}break;case 5:var g=b.return;try{Lf(b)}catch(k){H(b,g,k)}}}catch(k){H(b,b.return,k)}if(b===a){l=null;break}var h=b.sibling;
if(null!==h){h.return=b.return;l=h;break}l=b.return}}function Hc(){Hf=P()+500}function Z(){return 0!==(p&6)?P():-1!==Kd?Kd:Kd=P()}function hb(a){if(0===(a.mode&1))return 1;if(0!==(p&2)&&0!==U)return U&-U;if(null!==Jk.transition)return 0===Ld&&(Ld=Dg()),Ld;a=z;if(0!==a)return a;a=window.event;a=void 0===a?16:Lg(a.type);return a}function ya(a,b,c,d){if(50<Ic)throw Ic=0,Pf=null,Error(n(185));ic(a,c,d);if(0===(p&2)||a!==O)a===O&&(0===(p&2)&&(Md|=c),4===L&&kb(a,U)),ia(a,d),1===c&&0===p&&0===(b.mode&1)&&
(Hc(),md&&db())}function ia(a,b){var c=a.callbackNode;uj(a,b);var d=Vc(a,a===O?U:0);if(0===d)null!==c&&Li(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Li(c);if(1===b)0===a.tag?kk(Mi.bind(null,a)):wh(Mi.bind(null,a)),Kk(function(){0===(p&6)&&db()}),c=null;else{switch(Eg(d)){case 1:c=De;break;case 4:c=Mg;break;case 16:c=ad;break;case 536870912:c=Ng;break;default:c=ad}c=Ni(c,Oi.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}function Oi(a,b){Kd=-1;
Ld=0;if(0!==(p&6))throw Error(n(327));var c=a.callbackNode;if(Xb()&&a.callbackNode!==c)return null;var d=Vc(a,a===O?U:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Nd(a,d);else{b=d;var e=p;p|=2;var f=Pi();if(O!==a||U!==b)Ra=null,Hc(),xb(a,b);do try{Lk();break}catch(h){Qi(a,h)}while(1);Ze();Od.current=f;p=e;null!==I?b=0:(O=null,U=0,b=L)}if(0!==b){2===b&&(e=ve(a),0!==e&&(d=e,b=Qf(a,e)));if(1===b)throw c=Jc,xb(a,0),kb(a,d),ia(a,P()),c;if(6===b)kb(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Mk(e)&&(b=Nd(a,d),2===b&&(f=ve(a),0!==f&&(d=f,b=Qf(a,f))),1===b))throw c=Jc,xb(a,0),kb(a,d),ia(a,P()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(n(345));case 2:yb(a,ja,Ra);break;case 3:kb(a,d);if((d&130023424)===d&&(b=Of+500-P(),10<b)){if(0!==Vc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){Z();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Rf(yb.bind(null,a,ja,Ra),b);break}yb(a,ja,Ra);break;case 4:kb(a,d);if((d&4194240)===d)break;b=a.eventTimes;
for(e=-1;0<d;){var g=31-ta(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=P()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Nk(d/1960))-d;if(10<d){a.timeoutHandle=Rf(yb.bind(null,a,ja,Ra),d);break}yb(a,ja,Ra);break;case 5:yb(a,ja,Ra);break;default:throw Error(n(329));}}}ia(a,P());return a.callbackNode===c?Oi.bind(null,a):null}function Qf(a,b){var c=Kc;a.current.memoizedState.isDehydrated&&(xb(a,b).flags|=256);a=Nd(a,b);2!==a&&(b=ja,ja=c,null!==b&&Gf(b));return a}function Gf(a){null===
ja?ja=a:ja.push.apply(ja,a)}function Mk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!ua(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}function kb(a,b){b&=~Sf;b&=~Md;a.suspendedLanes|=b;a.pingedLanes&=
~b;for(a=a.expirationTimes;0<b;){var c=31-ta(b),d=1<<c;a[c]=-1;b&=~d}}function Mi(a){if(0!==(p&6))throw Error(n(327));Xb();var b=Vc(a,0);if(0===(b&1))return ia(a,P()),null;var c=Nd(a,b);if(0!==a.tag&&2===c){var d=ve(a);0!==d&&(b=d,c=Qf(a,d))}if(1===c)throw c=Jc,xb(a,0),kb(a,b),ia(a,P()),c;if(6===c)throw Error(n(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;yb(a,ja,Ra);ia(a,P());return null}function Tf(a,b){var c=p;p|=1;try{return a(b)}finally{p=c,0===p&&(Hc(),md&&db())}}function zb(a){null!==
lb&&0===lb.tag&&0===(p&6)&&Xb();var b=p;p|=1;var c=ca.transition,d=z;try{if(ca.transition=null,z=1,a)return a()}finally{z=d,ca.transition=c,p=b,0===(p&6)&&db()}}function xb(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Ok(c));if(null!==I)for(c=I.return;null!==c;){var d=c;Ve(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(w(S),w(J));break;case 3:Tb();w(S);w(J);lf();break;case 5:kf(d);break;case 4:Tb();break;case 13:w(G);break;
case 19:w(G);break;case 10:af(d.type._context);break;case 22:case 23:ba=Ga.current,w(Ga)}c=c.return}O=a;I=a=gb(a.current,null);U=ba=b;L=0;Jc=null;Sf=Md=ra=0;ja=Kc=null;if(null!==tb){for(b=0;b<tb.length;b++)if(c=tb[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}tb=null}return a}function Qi(a,b){do{var c=I;try{Ze();zd.current=Ad;if(Bd){for(var d=C.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Bd=
!1}wb=0;N=K=C=null;zc=!1;Ac=0;Uf.current=null;if(null===c||null===c.return){L=1;Jc=b;I=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var m=k,l=h,p=l.tag;if(0===(l.mode&1)&&(0===p||11===p||15===p)){var r=l.alternate;r?(l.updateQueue=r.updateQueue,l.memoizedState=r.memoizedState,l.lanes=r.lanes):(l.updateQueue=null,l.memoizedState=null)}var w=ki(g);if(null!==w){w.flags&=-257;li(w,g,h,f,b);w.mode&1&&ji(f,m,b);b=w;k=m;var x=b.updateQueue;
if(null===x){var z=new Set;z.add(k);b.updateQueue=z}else x.add(k);break a}else{if(0===(b&1)){ji(f,m,b);Ef();break a}k=Error(n(426))}}else if(D&&h.mode&1){var y=ki(g);if(null!==y){0===(y.flags&65536)&&(y.flags|=256);li(y,g,h,f,b);Ye(Ub(k,h));break a}}f=k=Ub(k,h);4!==L&&(L=2);null===Kc?Kc=[f]:Kc.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;b&=-b;f.lanes|=b;var A=hi(f,k,b);Eh(f,A);break a;case 1:h=k;var v=f.type,q=f.stateNode;if(0===(f.flags&128)&&("function"===typeof v.getDerivedStateFromError||
null!==q&&"function"===typeof q.componentDidCatch&&(null===ib||!ib.has(q)))){f.flags|=65536;b&=-b;f.lanes|=b;var B=ii(f,h,b);Eh(f,B);break a}}f=f.return}while(null!==f)}Ri(c)}catch(ma){b=ma;I===c&&null!==c&&(I=c=c.return);continue}break}while(1)}function Pi(){var a=Od.current;Od.current=Ad;return null===a?Ad:a}function Ef(){if(0===L||3===L||2===L)L=4;null===O||0===(ra&268435455)&&0===(Md&268435455)||kb(O,U)}function Nd(a,b){var c=p;p|=2;var d=Pi();if(O!==a||U!==b)Ra=null,xb(a,b);do try{Pk();break}catch(e){Qi(a,
e)}while(1);Ze();p=c;Od.current=d;if(null!==I)throw Error(n(261));O=null;U=0;return L}function Pk(){for(;null!==I;)Si(I)}function Lk(){for(;null!==I&&!Qk();)Si(I)}function Si(a){var b=Rk(a.alternate,a,ba);a.memoizedProps=a.pendingProps;null===b?Ri(a):I=b;Uf.current=null}function Ri(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=yk(c,b,ba),null!==c){I=c;return}}else{c=Ck(c,b);if(null!==c){c.flags&=32767;I=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;
else{L=6;I=null;return}}b=b.sibling;if(null!==b){I=b;return}I=b=a}while(null!==b);0===L&&(L=5)}function yb(a,b,c){var d=z,e=ca.transition;try{ca.transition=null,z=1,Sk(a,b,c,d)}finally{ca.transition=e,z=d}return null}function Sk(a,b,c,d){do Xb();while(null!==lb);if(0!==(p&6))throw Error(n(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(n(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;
vj(a,f);a===O&&(I=O=null,U=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||Pd||(Pd=!0,Ni(ad,function(){Xb();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ca.transition;ca.transition=null;var g=z;z=1;var h=p;p|=4;Uf.current=null;Dk(a,c);Gi(c,a);Uj(Kf);Zc=!!Jf;Kf=Jf=null;a.current=c;Ik(c,a,e);Tk();p=h;z=g;ca.transition=f}else a.current=c;Pd&&(Pd=!1,lb=a,Qd=e);f=a.pendingLanes;0===f&&(ib=null);pj(c.stateNode,d);ia(a,P());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=
b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Ed)throw Ed=!1,a=xf,xf=null,a;0!==(Qd&1)&&0!==a.tag&&Xb();f=a.pendingLanes;0!==(f&1)?a===Pf?Ic++:(Ic=0,Pf=a):Ic=0;db();return null}function Xb(){if(null!==lb){var a=Eg(Qd),b=ca.transition,c=z;try{ca.transition=null;z=16>a?16:a;if(null===lb)var d=!1;else{a=lb;lb=null;Qd=0;if(0!==(p&6))throw Error(n(331));var e=p;p|=4;for(l=a.current;null!==l;){var f=l,g=f.child;if(0!==(l.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var m=
h[k];for(l=m;null!==l;){var t=l;switch(t.tag){case 0:case 11:case 15:Gc(8,t,f)}var u=t.child;if(null!==u)u.return=t,l=u;else for(;null!==l;){t=l;var r=t.sibling,w=t.return;Bi(t);if(t===m){l=null;break}if(null!==r){r.return=w;l=r;break}l=w}}}var x=f.alternate;if(null!==x){var y=x.child;if(null!==y){x.child=null;do{var C=y.sibling;y.sibling=null;y=C}while(null!==y)}}l=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,l=g;else b:for(;null!==l;){f=l;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Gc(9,
f,f.return)}var A=f.sibling;if(null!==A){A.return=f.return;l=A;break b}l=f.return}}var v=a.current;for(l=v;null!==l;){g=l;var q=g.child;if(0!==(g.subtreeFlags&2064)&&null!==q)q.return=g,l=q;else b:for(g=v;null!==l;){h=l;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Id(9,h)}}catch(ma){H(h,h.return,ma)}if(h===g){l=null;break b}var B=h.sibling;if(null!==B){B.return=h.return;l=B;break b}l=h.return}}p=e;db();if(Ca&&"function"===typeof Ca.onPostCommitFiberRoot)try{Ca.onPostCommitFiberRoot(Uc,
a)}catch(ma){}d=!0}return d}finally{z=c,ca.transition=b}}return!1}function Ti(a,b,c){b=Ub(c,b);b=hi(a,b,1);a=eb(a,b,1);b=Z();null!==a&&(ic(a,1,b),ia(a,b))}function H(a,b,c){if(3===a.tag)Ti(a,a,c);else for(;null!==b;){if(3===b.tag){Ti(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ib||!ib.has(d))){a=Ub(c,a);a=ii(b,a,1);b=eb(b,a,1);a=Z();null!==b&&(ic(b,1,a),ia(b,a));break}}b=b.return}}function tk(a,
b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Z();a.pingedLanes|=a.suspendedLanes&c;O===a&&(U&c)===c&&(4===L||3===L&&(U&130023424)===U&&500>P()-Of?xb(a,0):Sf|=c);ia(a,b)}function Ui(a,b){0===b&&(0===(a.mode&1)?b=1:(b=Rd,Rd<<=1,0===(Rd&130023424)&&(Rd=4194304)));var c=Z();a=Oa(a,b);null!==a&&(ic(a,b,c),ia(a,c))}function wk(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Ui(a,c)}function Hk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);
break;case 19:d=a.stateNode;break;default:throw Error(n(314));}null!==d&&d.delete(b);Ui(a,c)}function Ni(a,b){return xh(a,b)}function Uk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function yf(a){a=
a.prototype;return!(!a||!a.isReactComponent)}function Vk(a){if("function"===typeof a)return yf(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ie)return 11;if(a===je)return 14}return 2}function gb(a,b){var c=a.alternate;null===c?(c=pa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=
a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function wd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)yf(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Bb:return ub(c.children,e,f,b);case fe:g=8;e|=8;break;case ee:return a=pa(12,c,b,e|2),a.elementType=ee,a.lanes=f,a;case ge:return a=
pa(13,c,b,e),a.elementType=ge,a.lanes=f,a;case he:return a=pa(19,c,b,e),a.elementType=he,a.lanes=f,a;case Vi:return Gd(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case hg:g=10;break a;case gg:g=9;break a;case ie:g=11;break a;case je:g=14;break a;case Ta:g=16;d=null;break a}throw Error(n(130,null==a?a:typeof a,""));}b=pa(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function ub(a,b,c,d){a=pa(7,a,d,b);a.lanes=c;return a}function Gd(a,b,c,d){a=pa(22,a,d,b);a.elementType=
Vi;a.lanes=c;a.stateNode={isHidden:!1};return a}function gf(a,b,c){a=pa(6,a,null,b);a.lanes=c;return a}function hf(a,b,c){b=pa(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Wk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=
0;this.eventTimes=we(0);this.expirationTimes=we(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=we(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=null}function Vf(a,b,c,d,e,f,g,h,k,m){a=new Wk(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=pa(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,
pendingSuspenseBoundaries:null};df(f);return a}function Xk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Cb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Wi(a){if(!a)return cb;a=a._reactInternals;a:{if(ob(a)!==a||1!==a.tag)throw Error(n(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(ea(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(n(171));
}if(1===a.tag){var c=a.type;if(ea(c))return uh(a,c,b)}return b}function Xi(a,b,c,d,e,f,g,h,k,m){a=Vf(c,d,!0,a,e,f,g,h,k);a.context=Wi(null);c=a.current;d=Z();e=hb(c);f=Pa(d,e);f.callback=void 0!==b&&null!==b?b:null;eb(c,f,e);a.current.lanes=e;ic(a,e,d);ia(a,d);return a}function Sd(a,b,c,d){var e=b.current,f=Z(),g=hb(e);c=Wi(c);null===b.context?b.context=c:b.pendingContext=c;b=Pa(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=eb(e,b,g);null!==a&&(ya(a,e,g,f),sd(a,e,g));return g}
function Td(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Yi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Wf(a,b){Yi(a,b);(a=a.alternate)&&Yi(a,b)}function Yk(a){a=Bg(a);return null===a?null:a.stateNode}function Zk(a){return null}function Xf(a){this._internalRoot=a}function Ud(a){this._internalRoot=a}function Yf(a){return!(!a||1!==a.nodeType&&9!==
a.nodeType&&11!==a.nodeType)}function Vd(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Zi(){}function $k(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=Td(g);f.call(a)}}var g=Xi(b,d,a,0,null,!1,!1,"",Zi);a._reactRootContainer=g;a[Ja]=g.current;sc(8===a.nodeType?a.parentNode:a);zb();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=Td(k);
h.call(a)}}var k=Vf(a,0,!1,null,null,!1,!1,"",Zi);a._reactRootContainer=k;a[Ja]=k.current;sc(8===a.nodeType?a.parentNode:a);zb(function(){Sd(b,k,c,d)});return k}function Wd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=Td(g);h.call(a)}}Sd(b,g,a,e)}else g=$k(c,b,a,e,d);return Td(g)}var cg=new Set,$b={},Ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Zd=Object.prototype.hasOwnProperty,
dj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eg={},dg={},R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){R[a]=
new Y(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];R[b]=new Y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){R[a]=new Y(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){R[a]=new Y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){R[a]=
new Y(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){R[a]=new Y(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){R[a]=new Y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){R[a]=new Y(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){R[a]=new Y(a,5,!1,a.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g,$f=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!1,!1)});R.xlinkHref=new Y("xlinkHref",
1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!0,!0)});var Sa=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xd=Symbol.for("react.element"),Cb=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),
he=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Vi=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var fg=Symbol.iterator,E=Object.assign,ae,ce=!1,cc=Array.isArray,Xd,zi=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,
c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Xd=Xd||document.createElement("div");Xd.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Xd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Fc=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},dc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,
borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,
strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(dc).forEach(function(a){al.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dc[b]=dc[a]})});var jj=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ze=null,se=null,Eb=null,Fb=null,xg=function(a,b){return a(b)},yg=function(){},te=!1,Oe=!1;if(Ia)try{var Lc={};Object.defineProperty(Lc,
"passive",{get:function(){Oe=!0}});window.addEventListener("test",Lc,Lc);window.removeEventListener("test",Lc,Lc)}catch(a){Oe=!1}var lj=function(a,b,c,d,e,f,g,h,k){var m=Array.prototype.slice.call(arguments,3);try{b.apply(c,m)}catch(t){this.onError(t)}},gc=!1,Sc=null,Tc=!1,ue=null,mj={onError:function(a){gc=!0;Sc=a}},Ba=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Jg=Ba.unstable_scheduleCallback,Kg=Ba.unstable_NormalPriority,xh=Jg,Li=Ba.unstable_cancelCallback,Qk=Ba.unstable_shouldYield,
Tk=Ba.unstable_requestPaint,P=Ba.unstable_now,Ej=Ba.unstable_getCurrentPriorityLevel,De=Ba.unstable_ImmediatePriority,Mg=Ba.unstable_UserBlockingPriority,ad=Kg,Fj=Ba.unstable_LowPriority,Ng=Ba.unstable_IdlePriority,Uc=null,Ca=null,ta=Math.clz32?Math.clz32:qj,rj=Math.log,sj=Math.LN2,Wc=64,Rd=4194304,z=0,Ae=!1,Yc=[],Va=null,Wa=null,Xa=null,jc=new Map,kc=new Map,Ya=[],Cj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),
Gb=Sa.ReactCurrentBatchConfig,Zc=!0,$c=null,Za=null,Ee=null,bd=null,Yb={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},He=ka(Yb),Mc=E({},Yb,{view:0,detail:0}),bk=ka(Mc),ag,bg,Nc,Yd=E({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fe,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:
a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==Nc&&(Nc&&"mousemove"===a.type?(ag=a.screenX-Nc.screenX,bg=a.screenY-Nc.screenY):bg=ag=0,Nc=a);return ag},movementY:function(a){return"movementY"in a?a.movementY:bg}}),ih=ka(Yd),bl=E({},Yd,{dataTransfer:0}),Xj=ka(bl),cl=E({},Mc,{relatedTarget:0}),Pe=ka(cl),dl=E({},Yb,{animationName:0,elapsedTime:0,pseudoElement:0}),Zj=ka(dl),el=E({},Yb,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),
dk=ka(el),fl=E({},Yb,{data:0}),qh=ka(fl),gk=qh,gl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",
112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},il=E({},Mc,{key:function(a){if(a.key){var b=gl[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=cd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?hl[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,
metaKey:0,repeat:0,locale:0,getModifierState:Fe,charCode:function(a){return"keypress"===a.type?cd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?cd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Wj=ka(il),jl=E({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=ka(jl),kl=E({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,
ctrlKey:0,shiftKey:0,getModifierState:Fe}),Yj=ka(kl),ll=E({},Yb,{propertyName:0,elapsedTime:0,pseudoElement:0}),ak=ka(ll),ml=E({},Yd,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),ck=ka(ml),Ij=[9,13,27,32],Ge=Ia&&"CompositionEvent"in window,Oc=null;Ia&&"documentMode"in document&&(Oc=document.documentMode);var fk=Ia&&"TextEvent"in
window&&!Oc,Ug=Ia&&(!Ge||Oc&&8<Oc&&11>=Oc),Tg=String.fromCharCode(32),Sg=!1,Hb=!1,Lj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},oc=null,pc=null,ph=!1;Ia&&(ph=Mj("input")&&(!document.documentMode||9<document.documentMode));var ua="function"===typeof Object.is?Object.is:Tj,ek=Ia&&"documentMode"in document&&11>=document.documentMode,Jb=null,Ke=null,rc=null,Je=!1,Kb={animationend:gd("Animation","AnimationEnd"),
animationiteration:gd("Animation","AnimationIteration"),animationstart:gd("Animation","AnimationStart"),transitionend:gd("Transition","TransitionEnd")},Le={},eh={};Ia&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Kb.animationend.animation,delete Kb.animationiteration.animation,delete Kb.animationstart.animation),"TransitionEvent"in window||delete Kb.transitionend.transition);var jh=hd("animationend"),kh=hd("animationiteration"),lh=hd("animationstart"),mh=hd("transitionend"),
fh=new Map,$i="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
(function(){for(var a=0;a<$i.length;a++){var b=$i[a],c=b.toLowerCase();b=b[0].toUpperCase()+b.slice(1);$a(c,"on"+b)}$a(jh,"onAnimationEnd");$a(kh,"onAnimationIteration");$a(lh,"onAnimationStart");$a("dblclick","onDoubleClick");$a("focusin","onFocus");$a("focusout","onBlur");$a(mh,"onTransitionEnd")})();Ab("onMouseEnter",["mouseout","mouseover"]);Ab("onMouseLeave",["mouseout","mouseover"]);Ab("onPointerEnter",["pointerout","pointerover"]);Ab("onPointerLeave",["pointerout","pointerover"]);nb("onChange",
"change click focusin focusout input keydown keyup selectionchange".split(" "));nb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nb("onBeforeInput",["compositionend","keypress","textInput","paste"]);nb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ec)),id="_reactListening"+Math.random().toString(36).slice(2),hk=/\r\n?/g,ik=/\u0000|\uFFFD/g,Jf=null,Kf=null,Rf="function"===typeof setTimeout?setTimeout:void 0,Ok="function"===typeof clearTimeout?
clearTimeout:void 0,aj="function"===typeof Promise?Promise:void 0,Kk="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof aj?function(a){return aj.resolve(null).then(a).catch(jk)}:Rf,Zb=Math.random().toString(36).slice(2),Da="__reactFiber$"+Zb,uc="__reactProps$"+Zb,Ja="__reactContainer$"+Zb,Me="__reactEvents$"+Zb,Ek="__reactListeners$"+Zb,Fk="__reactHandles$"+Zb,Se=[],Mb=-1,cb={},J=bb(cb),S=bb(!1),qb=cb,La=null,md=!1,Te=!1,Ob=[],Pb=0,od=null,nd=0,na=[],oa=0,sb=null,Ma=1,Na="",la=
null,fa=null,D=!1,wa=null,Jk=Sa.ReactCurrentBatchConfig,rd=bb(null),qd=null,Rb=null,$e=null,tb=null,lk=Oa,fb=!1,Jh=(new mb.Component).refs,ud={isMounted:function(a){return(a=a._reactInternals)?ob(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=eb(a,f,e);null!==b&&(ya(b,a,e,d),sd(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==
c&&(f.callback=c);b=eb(a,f,e);null!==b&&(ya(b,a,e,d),sd(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Z(),d=hb(a),e=Pa(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=eb(a,e,d);null!==b&&(ya(b,a,d,c),sd(b,a,d))}},Vb=Lh(!0),mi=Lh(!1),wc={},Ea=bb(wc),yc=bb(wc),xc=bb(wc),G=bb(0),mf=[],zd=Sa.ReactCurrentDispatcher,uf=Sa.ReactCurrentBatchConfig,wb=0,C=null,K=null,N=null,Bd=!1,zc=!1,Ac=0,nl=0,Ad={readContext:qa,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useInsertionEffect:V,
useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useMutableSource:V,useSyncExternalStore:V,useId:V,unstable_isNewReconciler:!1},mk={readContext:qa,useCallback:function(a,b){Fa().memoizedState=[a,void 0===b?null:b];return a},useContext:qa,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Cd(4194308,4,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Cd(4194308,4,a,b)},useInsertionEffect:function(a,
b){return Cd(4,2,a,b)},useMemo:function(a,b){var c=Fa();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Fa();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=rk.bind(null,C,a);return[d.memoizedState,a]},useRef:function(a){var b=Fa();a={current:a};return b.memoizedState=a},useState:Uh,useDebugValue:tf,useDeferredValue:function(a){return Fa().memoizedState=
a},useTransition:function(){var a=Uh(!1),b=a[0];a=qk.bind(null,a[1]);Fa().memoizedState=a;return[b,a]},useMutableSource:function(a,b,c){},useSyncExternalStore:function(a,b,c){var d=C,e=Fa();if(D){if(void 0===c)throw Error(n(407));c=c()}else{c=b();if(null===O)throw Error(n(349));0!==(wb&30)||Rh(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;Wh(Ph.bind(null,d,f,a),[a]);d.flags|=2048;Cc(9,Qh.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Fa(),b=O.identifierPrefix;
if(D){var c=Na;var d=Ma;c=(d&~(1<<32-ta(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Ac++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=nl++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},nk={readContext:qa,useCallback:ai,useContext:qa,useEffect:sf,useImperativeHandle:$h,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:bi,useReducer:qf,useRef:Vh,useState:function(a){return qf(Bc)},useDebugValue:tf,useDeferredValue:function(a){var b=sa();return ci(b,K.memoizedState,a)},
useTransition:function(){var a=qf(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:di,unstable_isNewReconciler:!1},ok={readContext:qa,useCallback:ai,useContext:qa,useEffect:sf,useImperativeHandle:$h,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:bi,useReducer:rf,useRef:Vh,useState:function(a){return rf(Bc)},useDebugValue:tf,useDeferredValue:function(a){var b=sa();return null===K?b.memoizedState=a:ci(b,K.memoizedState,a)},useTransition:function(){var a=rf(Bc)[0],
b=sa().memoizedState;return[a,b]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:di,unstable_isNewReconciler:!1},sk="function"===typeof WeakMap?WeakMap:Map,uk=Sa.ReactCurrentOwner,ha=!1,Cf={dehydrated:null,treeContext:null,retryLane:0};var Ak=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=
c.return;c=c.sibling}};var yi=function(a,b){};var zk=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){a=b.stateNode;vb(Ea.current);e=null;switch(c){case "input":f=ke(a,f);d=ke(a,d);e=[];break;case "select":f=E({},f,{value:void 0});d=E({},d,{value:void 0});e=[];break;case "textarea":f=ne(a,f);d=ne(a,d);e=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(a.onclick=kd)}pe(c,d);var g;c=null;for(m in f)if(!d.hasOwnProperty(m)&&f.hasOwnProperty(m)&&null!=f[m])if("style"===
m){var h=f[m];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==m&&"children"!==m&&"suppressContentEditableWarning"!==m&&"suppressHydrationWarning"!==m&&"autoFocus"!==m&&($b.hasOwnProperty(m)?e||(e=[]):(e=e||[]).push(m,null));for(m in d){var k=d[m];h=null!=f?f[m]:void 0;if(d.hasOwnProperty(m)&&k!==h&&(null!=k||null!=h))if("style"===m)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(e||(e=[]),e.push(m,c)),c=k;else"dangerouslySetInnerHTML"===m?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(e=e||[]).push(m,k)):"children"===m?"string"!==typeof k&&"number"!==typeof k||(e=e||[]).push(m,""+k):"suppressContentEditableWarning"!==m&&"suppressHydrationWarning"!==m&&($b.hasOwnProperty(m)?(null!=k&&"onScroll"===m&&B("scroll",a),e||h===k||(e=[])):(e=e||[]).push(m,k))}c&&(e=e||[]).push("style",c);var m=e;if(b.updateQueue=m)b.flags|=4}};var Bk=function(a,
b,c,d){c!==d&&(b.flags|=4)};var Jd=!1,X=!1,Gk="function"===typeof WeakSet?WeakSet:Set,l=null,Ai=!1,T=null,za=!1,Nk=Math.ceil,Od=Sa.ReactCurrentDispatcher,Uf=Sa.ReactCurrentOwner,ca=Sa.ReactCurrentBatchConfig,p=0,O=null,I=null,U=0,ba=0,Ga=bb(0),L=0,Jc=null,ra=0,Md=0,Sf=0,Kc=null,ja=null,Of=0,Hf=Infinity,Ra=null,Ed=!1,xf=null,ib=null,Pd=!1,lb=null,Qd=0,Ic=0,Pf=null,Kd=-1,Ld=0;var Rk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||S.current)ha=!0;else{if(0===(a.lanes&c)&&0===(b.flags&
128))return ha=!1,xk(a,b,c);ha=0!==(a.flags&131072)?!0:!1}else ha=!1,D&&0!==(b.flags&1048576)&&yh(b,nd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;Fd(a,b);a=b.pendingProps;var e=Nb(b,J.current);Sb(b,c);e=of(null,b,d,a,e,c);var f=pf();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=null,ea(d)?(f=!0,ld(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,df(b),e.updater=ud,b.stateNode=
e,e._reactInternals=b,ff(b,d,a,c),b=Af(null,b,d,!0,f,c)):(b.tag=0,D&&f&&Ue(b),aa(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{Fd(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Vk(d);a=xa(d,a);switch(e){case 0:b=zf(null,b,d,a,c);break a;case 1:b=si(null,b,d,a,c);break a;case 11:b=ni(null,b,d,a,c);break a;case 14:b=oi(null,b,d,xa(d.type,a),c);break a}throw Error(n(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),zf(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),si(a,b,d,e,c);case 3:a:{ti(b);if(null===a)throw Error(n(387));d=b.pendingProps;f=b.memoizedState;e=f.element;Dh(a,b);td(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ub(Error(n(423)),b);b=ui(a,b,d,c,e);break a}else if(d!==e){e=
Ub(Error(n(424)),b);b=ui(a,b,d,c,e);break a}else for(fa=Ka(b.stateNode.containerInfo.firstChild),la=b,D=!0,wa=null,c=mi(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Qb();if(d===e){b=Qa(a,b,c);break a}aa(a,b,d,c)}b=b.child}return b;case 5:return Mh(b),null===a&&Xe(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Qe(d,e)?g=null:null!==f&&Qe(d,f)&&(b.flags|=32),ri(a,b),aa(a,b,g,c),b.child;case 6:return null===a&&Xe(b),null;case 13:return vi(a,b,c);case 4:return jf(b,
b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Vb(b,null,d,c):aa(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),ni(a,b,d,e,c);case 7:return aa(a,b,b.pendingProps,c),b.child;case 8:return aa(a,b,b.pendingProps.children,c),b.child;case 12:return aa(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;y(rd,d._currentValue);d._currentValue=g;if(null!==f)if(ua(f.value,g)){if(f.children===
e.children&&!S.current){b=Qa(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=Pa(-1,c&-c);k.tag=2;var m=f.updateQueue;if(null!==m){m=m.shared;var l=m.pending;null===l?k.next=k:(k.next=l.next,l.next=k);m.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bf(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===
f.tag){g=f.return;if(null===g)throw Error(n(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bf(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}aa(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Sb(b,c),e=qa(e),d=d(e),b.flags|=1,aa(a,b,d,c),b.child;case 14:return d=b.type,e=xa(d,b.pendingProps),e=xa(d.type,e),oi(a,b,d,e,c);case 15:return pi(a,
b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),Fd(a,b),b.tag=1,ea(d)?(a=!0,ld(b)):a=!1,Sb(b,c),Hh(b,d,e),ff(b,d,e,c),Af(null,b,d,!0,a,c);case 19:return xi(a,b,c);case 22:return qi(a,b,c)}throw Error(n(156,b.tag));};var pa=function(a,b,c,d){return new Uk(a,b,c,d)},bj="function"===typeof reportError?reportError:function(a){console.error(a)};Ud.prototype.render=Xf.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(n(409));
Sd(a,b,null,null)};Ud.prototype.unmount=Xf.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;zb(function(){Sd(null,a,null,null)});b[Ja]=null}};Ud.prototype.unstable_scheduleHydration=function(a){if(a){var b=ol();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Ya.length&&0!==b&&b<Ya[c].priority;c++);Ya.splice(c,0,a);0===c&&Hg(a)}};var Dj=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=
hc(b.pendingLanes);0!==c&&(xe(b,c|1),ia(b,P()),0===(p&6)&&(Hc(),db()))}break;case 13:zb(function(){var b=Oa(a,1);if(null!==b){var c=Z();ya(b,a,1,c)}}),Wf(a,1)}};var Gg=function(a){if(13===a.tag){var b=Oa(a,134217728);if(null!==b){var c=Z();ya(b,a,134217728,c)}Wf(a,134217728)}};var yj=function(a){if(13===a.tag){var b=hb(a),c=Oa(a,b);if(null!==c){var d=Z();ya(c,a,b,d)}Wf(a,b)}};var ol=function(){return z};var xj=function(a,b){var c=z;try{return z=a,b()}finally{z=c}};se=function(a,b,c){switch(b){case "input":le(a,
c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Rc(d);if(!e)throw Error(n(90));jg(d);le(d,e)}}}break;case "textarea":og(a,c);break;case "select":b=c.value,null!=b&&Db(a,!!c.multiple,b,!1)}};(function(a,b,c){xg=a;yg=c})(Tf,function(a,b,c,d,e){var f=z,g=ca.transition;try{return ca.transition=null,z=1,a(b,c,d,e)}finally{z=f,ca.transition=
g,0===p&&Hc()}},zb);var pl={usingClientEntryPoint:!1,Events:[ec,Ib,Rc,ug,vg,Tf]};(function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sa.ReactCurrentDispatcher,findHostInstanceByFiber:Yk,
findFiberByHostInstance:a.findFiberByHostInstance||Zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Uc=b.inject(a),Ca=b}catch(c){}a=b.checkDCE?!0:!1}}return a})({findFiberByHostInstance:pb,bundleType:0,version:"18.2.0-next-9e3b772b8-20220608",
rendererPackageName:"react-dom"});Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pl;Q.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yf(b))throw Error(n(200));return Xk(a,b,null,c)};Q.createRoot=function(a,b){if(!Yf(a))throw Error(n(299));var c=!1,d="",e=bj;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Vf(a,1,!1,null,null,
c,!1,d,e);a[Ja]=b.current;sc(8===a.nodeType?a.parentNode:a);return new Xf(b)};Q.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(n(188));a=Object.keys(a).join(",");throw Error(n(268,a));}a=Bg(b);a=null===a?null:a.stateNode;return a};Q.flushSync=function(a){return zb(a)};Q.hydrate=function(a,b,c){if(!Vd(b))throw Error(n(200));return Wd(null,a,b,!0,c)};Q.hydrateRoot=function(a,b,c){if(!Yf(a))throw Error(n(405));
var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=bj;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Xi(b,null,a,1,null!=c?c:null,e,!1,f,g);a[Ja]=b.current;sc(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new Ud(b)};Q.render=
function(a,b,c){if(!Vd(b))throw Error(n(200));return Wd(null,a,b,!1,c)};Q.unmountComponentAtNode=function(a){if(!Vd(a))throw Error(n(40));return a._reactRootContainer?(zb(function(){Wd(null,null,a,!1,function(){a._reactRootContainer=null;a[Ja]=null})}),!0):!1};Q.unstable_batchedUpdates=Tf;Q.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Vd(c))throw Error(n(200));if(null==a||void 0===a._reactInternals)throw Error(n(38));return Wd(a,b,c,!1,d)};Q.version="18.2.0-next-9e3b772b8-20220608"});
})();

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
window.UNIVERSITIES_DATA = [{
  id: "manipal-online",
  name: "Online Manipal (Manipal University Jaipur)",
  shortName: "Manipal Online",
  slug: "online-manipal",
  badge: "Most Popular for MBA & Tech",
  featured: true,
  tagline: "Legacy of 70+ years of Academic Excellence now 100% Online",
  city: "Jaipur",
  state: "Rajasthan",
  foundedYear: 2011,
  parentGroup: "Manipal Education Group (MAHE)",
  universityType: "Private Deemed-to-be University",
  logoText: "MANIPAL",
  logoColor: "#EE4326",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.28 CGPA",
    nirfRank: "Ranked among Top 100",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Top Ranked"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 3840,
    studentEnrolled: "45,000+",
    highestCtc: "18.0 LPA",
    avgCtc: "7.5 LPA",
    placementPercentage: "92%",
    hiringPartnersCount: "500+"
  },
  topRecruiters: ["Amazon", "Deloitte", "Microsoft", "Accenture", "KPMG", "Google", "Infosys", "EY", "Capgemini", "Tata Consultancy Services"],
  examMode: "100% Online Proctored (Take from Home)",
  learningPedagogy: "Live Weekend Masterclasses + 24/7 Recorded HD Lectures on Coursera & LMS",
  emiAvailable: true,
  minMonthlyEmi: 3750,
  scholarships: "Up to 30% for Defense, Merit, & Divyangjan",
  brochureUrl: "#",
  popularCourses: [{
    id: "mu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Master of Business Administration)",
    duration: "2 Years (4 Semesters)",
    eligibility: "10+2+3 (Graduation with min 50% marks, 45% for reserved category)",
    totalFee: 175000,
    perSemFee: 43750,
    monthlyEmi: 4375,
    specializations: ["FinTech & BFSI", "Data Science & Analytics", "Digital Marketing", "Finance Management", "Marketing Management", "Human Resource Management", "Operations Management", "International Business", "Information Technology", "Supply Chain Management"],
    highestCtc: "18 LPA",
    avgCtc: "8.2 LPA",
    keyHighlights: ["Free access to 10,000+ Coursera courses", "Dedicated placement drive with top MNCs", "Harvard Business Publishing simulation & case studies", "100% Online Proctored Semester Exams"]
  }, {
    id: "mu-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / B.Sc (IT/CS) / Graduation with Mathematics with 50% marks",
    totalFee: 158000,
    perSemFee: 39500,
    monthlyEmi: 3950,
    specializations: ["Cloud Computing", "Full Stack Development", "Data Science & Machine Learning", "Cybersecurity", "Artificial Intelligence"],
    highestCtc: "16 LPA",
    avgCtc: "7.8 LPA",
    keyHighlights: ["Industry capstone projects in AWS & Python", "Hands-on browser coding labs", "Google Cloud & Microsoft cert preparation"]
  }, {
    id: "mu-online-bba",
    degree: "BBA",
    level: "Undergraduate",
    name: "Online BBA (Bachelor of Business Administration)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 from a recognized board with min 45% marks",
    totalFee: 135000,
    perSemFee: 22500,
    monthlyEmi: 2250,
    specializations: ["Digital Marketing", "Finance & Banking", "Marketing", "Human Resources"],
    highestCtc: "9 LPA",
    avgCtc: "4.5 LPA",
    keyHighlights: ["Foundational business case studies", "Internship opportunities via virtual job fair"]
  }, {
    id: "mu-online-bca",
    degree: "BCA",
    level: "Undergraduate",
    name: "Online BCA (Bachelor of Computer Applications)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 in any stream with min 45% marks",
    totalFee: 135000,
    perSemFee: 22500,
    monthlyEmi: 2250,
    specializations: ["Data Analytics", "Cloud Architecture", "Web & Mobile App Development"],
    highestCtc: "10 LPA",
    avgCtc: "5.0 LPA",
    keyHighlights: ["Practical coding from Semester 1", "GitHub portfolio creation support"]
  }],
  pros: ["Prestigious Manipal legacy and globally accepted degree", "Coursera enterprise license bundled", "Robust career assistance with 500+ top recruiters"],
  cons: ["Slightly higher fee than state open universities"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.9,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "amity-online",
  name: "Amity University Online",
  shortName: "Amity Online",
  slug: "amity-online",
  badge: "India's 1st UGC-Approved Online University",
  featured: true,
  tagline: "Global Exposure with QS Ranked Online Degree Programs",
  city: "Noida",
  state: "Uttar Pradesh",
  foundedYear: 2005,
  parentGroup: "Amity Education Group",
  universityType: "Private University",
  logoText: "AMITY",
  logoColor: "#FFA000",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.27 CGPA",
    nirfRank: "Ranked Top 35 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Ranked #1 Online MBA in India"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 4210,
    studentEnrolled: "60,000+",
    highestCtc: "18.5 LPA",
    avgCtc: "7.2 LPA",
    placementPercentage: "91%",
    hiringPartnersCount: "450+"
  },
  topRecruiters: ["Deloitte", "HCL", "IBM", "American Express", "TCS", "Accenture", "Genpact", "Wipro", "Reliance Jio", "Flipkart"],
  examMode: "100% Online Remote Proctored Exams",
  learningPedagogy: "Amigo LMS Platform with Live Masterclasses & 1-on-1 Mentorship",
  emiAvailable: true,
  minMonthlyEmi: 3300,
  scholarships: "Up to 25% Merit & Sports Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "amity-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Global & Dual Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation in any stream with min 40% marks",
    totalFee: 179000,
    perSemFee: 44750,
    monthlyEmi: 4475,
    specializations: ["Data Analytics", "Digital Marketing", "International Business", "Finance & Accounting", "HR Management", "IT"],
    highestCtc: "18.5 LPA",
    avgCtc: "7.9 LPA",
    keyHighlights: ["QS World ranked #1 Online MBA in India", "Dual Specialization options without extra charge"]
  }, {
    id: "amity-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / Bachelor Degree in CS with min 50% marks",
    totalFee: 160000,
    perSemFee: 40000,
    monthlyEmi: 4000,
    specializations: ["Cloud Computing", "Machine Learning & AI", "AR & VR Technologies"],
    highestCtc: "15 LPA",
    avgCtc: "7.1 LPA",
    keyHighlights: ["Industry projects with IBM and AWS", "Live masterclasses by international professors"]
  }, {
    id: "amity-online-bba",
    degree: "BBA",
    level: "Undergraduate",
    name: "Online BBA (Bachelor of Business Administration)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 from recognized board",
    totalFee: 150000,
    perSemFee: 25000,
    monthlyEmi: 2500,
    specializations: ["Digital Marketing", "International Finance", "HR"],
    highestCtc: "8.5 LPA",
    avgCtc: "4.2 LPA",
    keyHighlights: ["Global curriculum exposure", "Internship prep & corporate grooming"]
  }],
  pros: ["Top-tier brand recognition worldwide", "Ranked #1 Online MBA by QS in India", "Massive alumni base"],
  cons: ["Strict semester exam schedule"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.8,
    placementSupport: 4.6,
    valueForMoney: 4.7
  }
}, {
  id: "chandigarh-university-online",
  name: "Chandigarh University Online (CU Online)",
  shortName: "Chandigarh University",
  slug: "chandigarh-university-online",
  badge: "Highest NAAC A+ Score & Best ROI",
  featured: true,
  tagline: "India's Youngest University with NAAC A+ & QS World Ranking",
  city: "Mohali / Chandigarh",
  state: "Punjab",
  foundedYear: 2012,
  parentGroup: "Chandigarh University",
  universityType: "Private State University",
  logoText: "CU ONLINE",
  logoColor: "#C62828",
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.28 CGPA",
    nirfRank: "NIRF Rank #27 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Top Ranked #1 Private University in India"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3450,
    studentEnrolled: "50,000+",
    highestCtc: "17.0 LPA",
    avgCtc: "6.8 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "400+"
  },
  topRecruiters: ["Microsoft", "Google", "Amazon", "IBM", "Dell", "Capgemini", "Wipro", "Cognizant", "Mindtree", "Tech Mahindra"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Blackboard Ultra LMS with Live Doubt Sessions & Video Lectures",
  emiAvailable: true,
  minMonthlyEmi: 2800,
  scholarships: "Up to 30% CUCET / Merit Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "cu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks (45% for SC/ST)",
    totalFee: 150000,
    perSemFee: 37500,
    monthlyEmi: 3750,
    specializations: ["International Business", "Finance", "Marketing", "HR", "IT", "Banking", "Entrepreneurship"],
    highestCtc: "17 LPA",
    avgCtc: "7.5 LPA",
    keyHighlights: ["Affordable tuition fee with top-tier NAAC A+ accreditation", "Live weekend interactive lectures"]
  }, {
    id: "cu-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA/B.Sc CS/IT or Bachelor's with Mathematics with 50% marks",
    totalFee: 130000,
    perSemFee: 32500,
    monthlyEmi: 3250,
    specializations: ["Cloud Computing", "AI & Machine Learning", "Full Stack Development"],
    highestCtc: "15 LPA",
    avgCtc: "6.9 LPA",
    keyHighlights: ["Coding labs on cloud", "Capstone project evaluated by tech leads"]
  }],
  pros: ["Incredible value for money — low fees with NAAC A+ accreditation", "Ranked #1 Private University in India by QS Asia"],
  cons: ["High number of applicants per batch"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.8,
    valueForMoney: 4.9
  }
}, {
  id: "jain-university-online",
  name: "Jain (Deemed-to-be-University) Online",
  shortName: "Jain Online",
  slug: "jain-university-online",
  badge: "NAAC A++ Graded & Tech Hub Silicon Valley Vibe",
  featured: true,
  tagline: "Bangalore's Premier NAAC A++ University with 70+ Electives",
  city: "Bangalore",
  state: "Karnataka",
  foundedYear: 1990,
  parentGroup: "JGI Group",
  universityType: "Deemed-to-be University",
  logoText: "JAIN ONLINE",
  logoColor: "#1565C0",
  heroImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.71 CGPA (Highest Category)",
    nirfRank: "NIRF Top 68 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS World Ranked University"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 3120,
    studentEnrolled: "38,000+",
    highestCtc: "21.5 LPA",
    avgCtc: "8.0 LPA",
    placementPercentage: "93%",
    hiringPartnersCount: "500+"
  },
  topRecruiters: ["Google", "Amazon", "Infosys", "KPMG", "PwC", "Schneider Electric", "Johnson Controls", "Honeywell", "Flipkart", "PhonePe"],
  examMode: "100% Online AI-Proctored Exams",
  learningPedagogy: "LEARN LMS with Live Masterclasses & LinkedIn Learning Access",
  emiAvailable: true,
  minMonthlyEmi: 3500,
  scholarships: "Early Bird & Corporate Sponsorship Waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "jain-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Global Electives & Certifications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation with min 50% marks (45% for reserved)",
    totalFee: 160000,
    perSemFee: 40000,
    monthlyEmi: 4000,
    specializations: ["FinTech", "Business Analytics", "Digital Marketing", "Banking & Finance", "IT", "HR"],
    highestCtc: "21.5 LPA",
    avgCtc: "8.6 LPA",
    keyHighlights: ["Highest NAAC A++ (3.71 CGPA) Accreditation", "Bangalore startup and MNC ecosystem networking"]
  }, {
    id: "jain-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (with Specializations in Cloud, AI, & Cyber)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA/B.Sc IT/CS or Bachelor's with Maths with min 50% marks",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Full Stack Development"],
    highestCtc: "18 LPA",
    avgCtc: "8.1 LPA",
    keyHighlights: ["Curriculum co-designed with top tech architects", "Live code reviews and hackathons"]
  }],
  pros: ["Top-tier NAAC A++ (3.71 CGPA) rating", "Deep ties to Bangalore IT/Startup hiring corridor"],
  cons: ["Demands dedicated weekly time for projects"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.9,
    placementSupport: 4.8,
    valueForMoney: 4.8
  }
}, {
  id: "nmims-online",
  name: "NMIMS Centre for Distance & Online Education (CDOE)",
  shortName: "NMIMS Online",
  slug: "nmims-online",
  badge: "India's #1 Management Brand",
  featured: true,
  tagline: "SVKM's NMIMS Legacy — Gold Standard for Corporate Management Degrees",
  city: "Mumbai",
  state: "Maharashtra",
  foundedYear: 1981,
  parentGroup: "SVKM's NMIMS",
  universityType: "Deemed-to-be University (Category 1 Autonomy)",
  logoText: "NMIMS CDOE",
  logoColor: "#990000",
  heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.59 CGPA",
    nirfRank: "NIRF Top 21 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked Top B-School"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 4900,
    studentEnrolled: "85,000+",
    highestCtc: "22.0 LPA",
    avgCtc: "9.2 LPA",
    placementPercentage: "94%",
    hiringPartnersCount: "600+"
  },
  topRecruiters: ["Morgan Stanley", "J.P. Morgan", "Deloitte", "HDFC Bank", "ICICI Bank", "Amazon", "KPMG", "Accenture", "Kotak Mahindra", "Tata Motors"],
  examMode: "100% Online Computer-Based Exam (At Home / Exam Centers)",
  learningPedagogy: "NMIMS Student Portal & Mobile App with Case Studies from Harvard & Ivey",
  emiAvailable: true,
  minMonthlyEmi: 4200,
  scholarships: "Special Concessions for Armed Forces & Divyang",
  brochureUrl: "#",
  popularCourses: [{
    id: "nmims-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (General & Specialized)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline with min 50% marks",
    totalFee: 196000,
    perSemFee: 49000,
    monthlyEmi: 4900,
    specializations: ["Business Analytics", "Banking & Finance", "Marketing Management", "HR", "Operations", "IT"],
    highestCtc: "22 LPA",
    avgCtc: "9.2 LPA",
    keyHighlights: ["Unmatched brand equity in corporate India", "Dedicated Career Services"]
  }],
  pros: ["Top-tier reputation: The most recognized management brand in India", "Exceptional corporate hiring network"],
  cons: ["Premium fee structure"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.9,
    placementSupport: 4.9,
    valueForMoney: 4.8
  }
}, {
  id: "symbiosis-online",
  name: "Symbiosis Online (SSODL / SCDL)",
  shortName: "Symbiosis Online",
  slug: "symbiosis-online",
  badge: "Pioneer in Distance & Online Education",
  featured: true,
  tagline: "World Class Management Degrees from Pune's Premier Brand",
  city: "Pune",
  state: "Maharashtra",
  foundedYear: 2001,
  parentGroup: "Symbiosis International University",
  universityType: "Deemed University",
  logoText: "SYMBIOSIS",
  logoColor: "#B71C1C",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.58 CGPA",
    nirfRank: "NIRF Top 32 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked Premier Institution"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3900,
    studentEnrolled: "65,000+",
    highestCtc: "16.5 LPA",
    avgCtc: "7.4 LPA",
    placementPercentage: "89%",
    hiringPartnersCount: "420+"
  },
  topRecruiters: ["Cognizant", "Infosys", "Wipro", "Bosch", "Tata Motors", "Barclays", "Vodafone", "Capgemini", "Aditya Birla"],
  examMode: "100% Online Computer-Based Exam (On-Demand Examination)",
  learningPedagogy: "Symbiosis Interactive E-Learning Portal with Virtual Classrooms & E-Books",
  emiAvailable: true,
  minMonthlyEmi: 2900,
  scholarships: "Special Fee Discounts for Armed Forces & Police Personnel",
  brochureUrl: "#",
  popularCourses: [{
    id: "symbiosis-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA / PGDBA",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["HR", "Finance", "Marketing", "Operations", "International Business", "Banking"],
    highestCtc: "16.5 LPA",
    avgCtc: "7.8 LPA",
    keyHighlights: ["Symbiosis brand recognition across corporate giants", "On-Demand Exam slot booking flexibility"]
  }],
  pros: ["Famous Symbiosis brand trust", "Flexible on-demand exam slots"],
  cons: ["LMS UI is classical"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.6,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "dy-patil-online",
  name: "Dr. D.Y. Patil Vidyapeeth Centre for Online Learning (DPU COL)",
  shortName: "D.Y. Patil Online",
  slug: "dy-patil-online",
  badge: "NAAC A++ with NIRF Top 46 Ranking",
  featured: true,
  tagline: "Pune's Prestigious Deemed University with Global Digital Learning Ecosystem",
  city: "Pune",
  state: "Maharashtra",
  foundedYear: 1984,
  parentGroup: "Dr. D.Y. Patil Pratishthan",
  universityType: "Deemed-to-be University",
  logoText: "DPU ONLINE",
  logoColor: "#0D47A1",
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.64 CGPA",
    nirfRank: "NIRF Rank #46 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked University"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 2890,
    studentEnrolled: "32,000+",
    highestCtc: "16.0 LPA",
    avgCtc: "7.0 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "380+"
  },
  topRecruiters: ["Amazon", "Cognizant", "Tech Mahindra", "Bajaj Finserv", "Cipla", "HCL", "Reliance", "Zensar", "L&T Infotech"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "DPU Learn LMS with Mobile App & Recorded Lectures",
  emiAvailable: true,
  minMonthlyEmi: 3100,
  scholarships: "Up to 15% Early Enrollment Fee Waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "dpu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in any discipline with min 50% marks",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["Hospital & Healthcare Management", "FinTech", "Digital Marketing", "Finance", "HR", "Marketing"],
    highestCtc: "16 LPA",
    avgCtc: "7.6 LPA",
    keyHighlights: ["Top rated in Hospital & Healthcare Management", "Dual Specialization option included"]
  }],
  pros: ["NAAC A++ accreditation with high CGPA (3.64)", "Market leader in Healthcare MBA"],
  cons: ["Fewer technical degree offerings"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "upes-online",
  name: "UPES Online (University of Petroleum & Energy Studies)",
  shortName: "UPES Online",
  slug: "upes-online",
  badge: "Leader in Oil & Gas, Power, Supply Chain & Tech MBA",
  featured: true,
  tagline: "Industry-First Domain Focused Online Degrees from Dehradun",
  city: "Dehradun",
  state: "Uttarakhand",
  foundedYear: 2003,
  parentGroup: "UPES",
  universityType: "Private University",
  logoText: "UPES ON",
  logoColor: "#E65100",
  heroImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A",
    naacScore: "3.10 CGPA",
    nirfRank: "NIRF Rank #52 University in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS 5-Star Rating for Employability"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 2450,
    studentEnrolled: "25,000+",
    highestCtc: "19.0 LPA",
    avgCtc: "8.2 LPA",
    placementPercentage: "91%",
    hiringPartnersCount: "350+"
  },
  topRecruiters: ["Shell", "Schlumberger", "Reliance Industries", "ONGC", "L&T", "Adani Power", "Tata Power", "Deloitte", "Amazon"],
  examMode: "100% Online Proctored Semester Exams",
  learningPedagogy: "UPES ON Campus Cloud LMS with Industry Masterclasses",
  emiAvailable: true,
  minMonthlyEmi: 3600,
  scholarships: "Special Corporate & Women in STEM fee waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "upes-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Energy, Oil & Gas, Logistics, & Tech)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation in any discipline with min 50% marks",
    totalFee: 165000,
    perSemFee: 41250,
    monthlyEmi: 4125,
    specializations: ["Oil & Gas Management", "Power Management", "Logistics & Supply Chain", "Digital Business"],
    highestCtc: "19 LPA",
    avgCtc: "8.8 LPA",
    keyHighlights: ["Niche specialization in Energy, Power & Oil/Gas", "QS 5-star rating"]
  }],
  pros: ["Top domain leadership in Energy & Supply Chain", "QS 5-star rating for employability"],
  cons: ["Technical curriculum is dense"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.8,
    valueForMoney: 4.7
  }
}, {
  id: "lpu-online",
  name: "Lovely Professional University Online (LPU Online)",
  shortName: "LPU Online",
  slug: "lpu-online",
  badge: "Budget-Friendly with Huge Placement Drive",
  featured: true,
  tagline: "Ranked among World's Top Universities with Highly Affordable Fees",
  city: "Jalandhar",
  state: "Punjab",
  foundedYear: 2005,
  parentGroup: "Lovely Professional University",
  universityType: "Private University",
  logoText: "LPU ONLINE",
  logoColor: "#D81B60",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.68 CGPA",
    nirfRank: "NIRF Rank #38 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "THE World University Ranked"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3650,
    studentEnrolled: "55,000+",
    highestCtc: "16.0 LPA",
    avgCtc: "6.5 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "500+"
  },
  topRecruiters: ["Cognizant", "Capgemini", "Amazon", "Wipro", "TCS", "Tech Mahindra", "DXC Technology", "Bosch", "HDFC Bank"],
  examMode: "100% Online AI-Proctored Exams",
  learningPedagogy: "LPU e-Connect Learning Portal with Live Classes & Mobile App",
  emiAvailable: true,
  minMonthlyEmi: 2200,
  scholarships: "Up to 25% LPUNEST and Merit Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "lpu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Multiple Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's Degree with min 50% marks",
    totalFee: 120000,
    perSemFee: 30000,
    monthlyEmi: 3000,
    specializations: ["Data Science", "Digital Marketing", "Finance", "Marketing", "HR", "Operations", "IT"],
    highestCtc: "16 LPA",
    avgCtc: "7.0 LPA",
    keyHighlights: ["Super affordable fee (₹30,000/sem) with NAAC A++ accreditation"]
  }, {
    id: "lpu-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (with AI & Data Science)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / B.Sc CS with 50% marks",
    totalFee: 112000,
    perSemFee: 28000,
    monthlyEmi: 2800,
    specializations: ["AI & Data Science", "Web Development"],
    highestCtc: "14 LPA",
    avgCtc: "6.8 LPA",
    keyHighlights: ["Hands-on coding labs on LPU e-Connect"]
  }],
  pros: ["Super affordable fee structure", "NAAC A++ accreditation"],
  cons: ["Large batch size"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.8,
    placementSupport: 4.7,
    valueForMoney: 5.0
  }
}, {
  id: "uttaranchal-university-online",
  name: "Uttaranchal University Online",
  shortName: "Uttaranchal Online",
  slug: "uttaranchal-university-online",
  badge: "NAAC A+ with Lowest Cost Online MBA & MCA",
  featured: false,
  tagline: "UGC-DEB Approved Degree Programs with Best ROI for Students",
  city: "Dehradun",
  state: "Uttarakhand",
  foundedYear: 2013,
  parentGroup: "Uttaranchal University",
  universityType: "Private University",
  logoText: "UTTARANCHAL",
  logoColor: "#00695C",
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.30 CGPA",
    nirfRank: "Ranked among Top 100",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized Quality Education"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 1850,
    studentEnrolled: "20,000+",
    highestCtc: "14.0 LPA",
    avgCtc: "6.0 LPA",
    placementPercentage: "88%",
    hiringPartnersCount: "250+"
  },
  topRecruiters: ["TCS", "Wipro", "Tech Mahindra", "Infosys", "Bajaj Auto", "HDFC Life", "ICICI Bank"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Learning Management Portal with Live & Recorded Lectures",
  emiAvailable: true,
  minMonthlyEmi: 2100,
  scholarships: "Up to 20% Domicile & Merit Discounts",
  brochureUrl: "#",
  popularCourses: [{
    id: "uu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's Degree with min 50% marks",
    totalFee: 104000,
    perSemFee: 26000,
    monthlyEmi: 2600,
    specializations: ["Marketing", "Finance", "HR", "IT", "International Business", "Digital Marketing"],
    highestCtc: "14 LPA",
    avgCtc: "6.5 LPA",
    keyHighlights: ["Extremely economical fee at only ₹26,000 per semester"]
  }],
  pros: ["Lowest fee for NAAC A+ accredited MBA in India", "Direct admissions"],
  cons: ["Fewer international hiring drives"],
  studentReviewsRatingBreakdown: {
    faculty: 4.6,
    lms: 4.6,
    placementSupport: 4.5,
    valueForMoney: 4.9
  }
}, {
  id: "srm-online",
  name: "SRM Institute of Science and Technology Online",
  shortName: "SRM Online",
  slug: "srm-online",
  badge: "Top Engineering & Tech University with NAAC A++",
  featured: false,
  tagline: "South India's Renowned Deemed University with High Industry Acceptance",
  city: "Chennai",
  state: "Tamil Nadu",
  foundedYear: 1985,
  parentGroup: "SRM Group",
  universityType: "Deemed-to-be University",
  logoText: "SRM ONLINE",
  logoColor: "#1A237E",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.55 CGPA",
    nirfRank: "NIRF Rank #18 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked University"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 2150,
    studentEnrolled: "28,000+",
    highestCtc: "18.0 LPA",
    avgCtc: "7.4 LPA",
    placementPercentage: "92%",
    hiringPartnersCount: "400+"
  },
  topRecruiters: ["Amazon", "Cisco", "Siemens", "TCS", "Cognizant", "Infosys", "EY", "Ford", "Standard Chartered"],
  examMode: "100% Online Remote-Proctored Exams",
  learningPedagogy: "SRM e-Campus LMS with Live Expert Webinars",
  emiAvailable: true,
  minMonthlyEmi: 3200,
  scholarships: "Merit & South India Regional Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "srm-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Tech & Management Electives)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 150000,
    perSemFee: 37500,
    monthlyEmi: 3750,
    specializations: ["Business Analytics", "Digital Marketing", "Finance", "HR", "Marketing", "Operations"],
    highestCtc: "18 LPA",
    avgCtc: "7.8 LPA",
    keyHighlights: ["NIRF #18 institution in India with NAAC A++ score"]
  }],
  pros: ["Top NIRF #18 rank with stellar engineering reputation", "NAAC A++ accreditation"],
  cons: ["Semester exam slots require prompt booking"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.7,
    placementSupport: 4.8,
    valueForMoney: 4.7
  }
}, {
  id: "bits-pilani-wilp",
  name: "BITS Pilani WILP (Work Integrated Learning Programmes)",
  shortName: "BITS Pilani WILP",
  slug: "bits-pilani-wilp",
  badge: "India's #1 Technical Institution for Working Professionals",
  featured: true,
  tagline: "Premier Institute of Eminence Degrees for Employed Engineers & Techies",
  city: "Pilani",
  state: "Rajasthan",
  foundedYear: 1964,
  parentGroup: "Birla Institute of Technology and Science",
  universityType: "Deemed University / Institute of Eminence (IoE)",
  logoText: "BITS PILANI",
  logoColor: "#004D40",
  heroImage: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved by UGC for Working Professionals",
    naacGrade: "A",
    naacScore: "3.45 CGPA",
    nirfRank: "NIRF Top 20 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Top Ranked Institute of Eminence"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 3800,
    studentEnrolled: "40,000+",
    highestCtc: "35.0 LPA",
    avgCtc: "16.5 LPA",
    placementPercentage: "96%",
    hiringPartnersCount: "600+"
  },
  topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Qualcomm", "Intel", "NVIDIA", "Cisco", "Oracle", "Goldman Sachs"],
  examMode: "Online Remote Proctored Exams + Digital Labs",
  learningPedagogy: "Live Weekend Lectures with BITS Pilani Professors & Remote Virtual Cloud Labs",
  emiAvailable: true,
  minMonthlyEmi: 5500,
  scholarships: "Corporate Sponsorships & Employee Tuition Assistance",
  brochureUrl: "#",
  popularCourses: [{
    id: "bits-wilp-mtech-ai",
    degree: "M.Tech",
    level: "Postgraduate",
    name: "M.Tech in Artificial Intelligence & Machine Learning",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Tech/BE/MCA/M.Sc with min 60% marks + Minimum 1 year of relevant work experience",
    totalFee: 268000,
    perSemFee: 67000,
    monthlyEmi: 6700,
    specializations: ["Deep Learning & NLP", "Computer Vision", "Reinforcement Learning"],
    highestCtc: "35 LPA",
    avgCtc: "18.5 LPA",
    keyHighlights: ["Prestige of BITS Pilani Institute of Eminence degree", "Advanced remote GPU cloud clusters"]
  }],
  pros: ["Top-tier BITS Pilani pedigree and gold standard curriculum", "Massive salary jump for engineers"],
  cons: ["Mandatory minimum work experience required"],
  studentReviewsRatingBreakdown: {
    faculty: 5.0,
    lms: 4.9,
    placementSupport: 4.8,
    valueForMoney: 4.9
  }
}, {
  id: "ignou-online",
  name: "IGNOU (Indira Gandhi National Open University)",
  shortName: "IGNOU",
  slug: "ignou-online",
  badge: "World's Largest Central Open University & Lowest Fee",
  featured: false,
  tagline: "India's Pioneer Central University with Government Recognized Open Degrees",
  city: "New Delhi",
  state: "Delhi",
  foundedYear: 1985,
  parentGroup: "Government of India Central University",
  universityType: "Central University",
  logoText: "IGNOU",
  logoColor: "#0D47A1",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Central University Act Approved",
    naacGrade: "A++",
    naacScore: "3.56 CGPA",
    nirfRank: "India's Premier Open University",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized Worldwide"
  },
  metrics: {
    rating: 4.5,
    reviewCount: 6500,
    studentEnrolled: "3,000,000+",
    highestCtc: "10.0 LPA",
    avgCtc: "4.5 LPA",
    placementPercentage: "75%",
    hiringPartnersCount: "150+"
  },
  topRecruiters: ["State Bank of India", "Govt Sector Departments", "TCS", "Wipro", "Tech Mahindra", "Amazon"],
  examMode: "Pen & Paper Term-End Exam at Designated Study Centers Across India",
  learningPedagogy: "e-GyanKosh Digital Repository + Printed Books + Swayam Prabha TV Lectures",
  emiAvailable: false,
  minMonthlyEmi: 0,
  scholarships: "SC/ST Free Fee Exemption as per Govt of India Norms",
  brochureUrl: "#",
  popularCourses: [{
    id: "ignou-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Master of Business Administration (Online & ODL)",
    duration: "2 Years (Max 4 Years)",
    eligibility: "Bachelor's degree with min 50% marks (45% for reserved category)",
    totalFee: 62000,
    perSemFee: 15500,
    monthlyEmi: 0,
    specializations: ["HR", "Financial Management", "Marketing", "Operations", "Services Management"],
    highestCtc: "10 LPA",
    avgCtc: "5.0 LPA",
    keyHighlights: ["100% valid for all Government Jobs, UPSC, SSC, Banking", "Lowest fee structure in India"]
  }],
  pros: ["100% accepted across all Govt exams", "Lowest tuition fee in India", "SC/ST fee exemption"],
  cons: ["Physical pen-and-paper exams at study centers"],
  studentReviewsRatingBreakdown: {
    faculty: 4.4,
    lms: 4.2,
    placementSupport: 3.9,
    valueForMoney: 5.0
  }
}, {
  id: "amrita-online",
  name: "Amrita Vishwa Vidyapeetham Ahead Online",
  shortName: "Amrita Ahead",
  slug: "amrita-online",
  badge: "NIRF Rank #7 in India with NAAC A++ (3.7 CGPA)",
  featured: true,
  tagline: "Top 10 Indian University with Globally Acclaimed Academic Standards",
  city: "Coimbatore",
  state: "Tamil Nadu",
  foundedYear: 2003,
  parentGroup: "Mata Amritanandamayi Math",
  universityType: "Deemed-to-be University",
  logoText: "AMRITA",
  logoColor: "#880E4F",
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.70 CGPA (Category 1 Autonomy)",
    nirfRank: "NIRF Rank #7 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Top Ranked Indian University"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 2980,
    studentEnrolled: "30,000+",
    highestCtc: "20.0 LPA",
    avgCtc: "8.5 LPA",
    placementPercentage: "94%",
    hiringPartnersCount: "450+"
  },
  topRecruiters: ["Amazon", "Microsoft", "Cisco", "Bosch", "Accenture", "TCS", "Cognizant", "Deloitte", "Oracle"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Amrita AHEAD LMS with Live Lectures by Distinguished Global Faculty",
  emiAvailable: true,
  minMonthlyEmi: 3800,
  scholarships: "Chancellor's Merit Scholarship up to 25%",
  brochureUrl: "#",
  popularCourses: [{
    id: "amrita-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Global Immersion & Tech Electives)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 170000,
    perSemFee: 42500,
    monthlyEmi: 4250,
    specializations: ["General Management", "Finance", "Marketing", "HR", "Operations", "AI for Business"],
    highestCtc: "20 LPA",
    avgCtc: "8.8 LPA",
    keyHighlights: ["NIRF #7 rank in India", "Harvard case study methodology"]
  }],
  pros: ["Top 7 NIRF Ranking in India with NAAC A++ (3.7 CGPA)", "Unrivalled academic reputation"],
  cons: ["Rigorous evaluation standards"],
  studentReviewsRatingBreakdown: {
    faculty: 5.0,
    lms: 4.9,
    placementSupport: 4.8,
    valueForMoney: 4.9
  }
}, {
  id: "shiv-nadar-online",
  name: "Shiv Nadar University Online (SNU Online)",
  shortName: "Shiv Nadar Online",
  slug: "shiv-nadar-online",
  badge: "Institute of Eminence & Premier Data Science MBA",
  featured: false,
  tagline: "World Class Multidisciplinary Research University with Cutting Edge Curriculum",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  foundedYear: 2011,
  parentGroup: "Shiv Nadar Foundation",
  universityType: "Private Deemed University",
  logoText: "SNU ONLINE",
  logoColor: "#1B5E20",
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A",
    naacScore: "3.41 CGPA",
    nirfRank: "NIRF Top 60 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked Institution"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 1420,
    studentEnrolled: "12,000+",
    highestCtc: "24.0 LPA",
    avgCtc: "10.5 LPA",
    placementPercentage: "94%",
    hiringPartnersCount: "300+"
  },
  topRecruiters: ["HCL Technologies", "Dell", "Amazon", "Microsoft", "Goldman Sachs", "McKinsey", "Bain & Company"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "State of the Art Digital LMS with Live Capstones & Executive Mentorship",
  emiAvailable: true,
  minMonthlyEmi: 4800,
  scholarships: "Merit Based Fee Waivers",
  brochureUrl: "#",
  popularCourses: [{
    id: "snu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (Executive & Digital Leadership)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 210000,
    perSemFee: 52500,
    monthlyEmi: 5250,
    specializations: ["Data Analytics", "Digital Leadership", "Finance"],
    highestCtc: "24 LPA",
    avgCtc: "10.5 LPA",
    keyHighlights: ["High faculty calibre", "Curriculum aligned with global business trends"]
  }],
  pros: ["Exceptional executive network and placement packages", "Modern data-driven pedagogy"],
  cons: ["Higher tuition fees"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.8,
    placementSupport: 4.8,
    valueForMoney: 4.6
  }
}, {
  id: "gla-university-online",
  name: "GLA University Online (Mathura)",
  shortName: "GLA Online",
  slug: "gla-university-online",
  badge: "NAAC A+ with High Corporate Hiring",
  featured: false,
  tagline: "Empowering Next-Gen Professionals with Industry Ready Online Degrees",
  city: "Mathura",
  state: "Uttar Pradesh",
  foundedYear: 1991,
  parentGroup: "GLA Group",
  universityType: "Private University",
  logoText: "GLA ONLINE",
  logoColor: "#0277BD",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.46 CGPA",
    nirfRank: "Ranked Top 100 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized Quality Provider"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 1950,
    studentEnrolled: "18,000+",
    highestCtc: "15.0 LPA",
    avgCtc: "6.2 LPA",
    placementPercentage: "89%",
    hiringPartnersCount: "350+"
  },
  topRecruiters: ["TCS", "Infosys", "Capgemini", "Accenture", "Wipro", "Cognizant", "Torrecid"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "GLA Portal with Live Classes & Interactive Doubt Sessions",
  emiAvailable: true,
  minMonthlyEmi: 2600,
  scholarships: "Merit & Female Candidate Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "gla-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Industry Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 120000,
    perSemFee: 30000,
    monthlyEmi: 3000,
    specializations: ["Marketing", "Finance", "HR", "Supply Chain", "IT"],
    highestCtc: "15 LPA",
    avgCtc: "6.5 LPA",
    keyHighlights: ["Affordable fee structure", "Extensive alumni network in IT and FMCG"]
  }],
  pros: ["High NAAC A+ score (3.46 CGPA)", "Great return on investment"],
  cons: ["Less international brand visibility"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.6,
    placementSupport: 4.6,
    valueForMoney: 4.8
  }
}, {
  id: "vignan-university-online",
  name: "Vignan's Foundation for Science, Technology & Research Online",
  shortName: "Vignan Online",
  slug: "vignan-university-online",
  badge: "NAAC A+ with Focus on AI, FinTech & Analytics",
  featured: false,
  tagline: "Andhra Pradesh's Premier Tech & Management Deemed-to-be University",
  city: "Guntur",
  state: "Andhra Pradesh",
  foundedYear: 2008,
  parentGroup: "Vignan Group",
  universityType: "Deemed-to-be University",
  logoText: "VIGNAN",
  logoColor: "#C2185B",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.49 CGPA",
    nirfRank: "NIRF Top 75 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized South Indian University"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 1680,
    studentEnrolled: "15,000+",
    highestCtc: "14.5 LPA",
    avgCtc: "6.0 LPA",
    placementPercentage: "90%",
    hiringPartnersCount: "300+"
  },
  topRecruiters: ["Cognizant", "TCS", "HCL", "Amazon", "Wipro", "Tech Mahindra", "Mindtree"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Vignan e-LMS with Recorded & Live Lectures + Weekend Mentorship",
  emiAvailable: true,
  minMonthlyEmi: 2700,
  scholarships: "Merit & Early Bird Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "vignan-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Dual Electives)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 130000,
    perSemFee: 32500,
    monthlyEmi: 3250,
    specializations: ["FinTech", "Business Analytics", "Digital Marketing", "HR", "Operations"],
    highestCtc: "14.5 LPA",
    avgCtc: "6.4 LPA",
    keyHighlights: ["Dual Elective options included in tuition fee"]
  }],
  pros: ["NAAC A+ with 3.49 CGPA", "Strong IT corporate placements in Hyderabad & Bangalore"],
  cons: ["Brand awareness mostly concentrated in South India"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.6,
    placementSupport: 4.7,
    valueForMoney: 4.8
  }
}, {
  id: "sharda-university-online",
  name: "Sharda University Online (Greater Noida)",
  shortName: "Sharda Online",
  slug: "sharda-university-online",
  badge: "NAAC A+ with Global Diversity",
  featured: false,
  tagline: "The World is Here, Where are You? Now 100% Online",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  foundedYear: 2009,
  parentGroup: "Sharda Group of Institutions",
  universityType: "Private University",
  logoText: "SHARDA",
  logoColor: "#D32F2F",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.28 CGPA",
    nirfRank: "NIRF Top 85 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Ranked University"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 2100,
    studentEnrolled: "22,000+",
    highestCtc: "15.0 LPA",
    avgCtc: "6.5 LPA",
    placementPercentage: "89%",
    hiringPartnersCount: "350+"
  },
  topRecruiters: ["Amazon", "Wipro", "Cognizant", "TCS", "Tech Mahindra", "Birlasoft", "Genpact"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Sharda e-Learning Portal with Live Webinars & Interactive Quizzes",
  emiAvailable: true,
  minMonthlyEmi: 2800,
  scholarships: "Merit & Sibling Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "sharda-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Global Electives)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 140000,
    perSemFee: 35000,
    monthlyEmi: 3500,
    specializations: ["Marketing", "International Business", "Finance", "HR", "Digital Marketing"],
    highestCtc: "15 LPA",
    avgCtc: "6.8 LPA",
    keyHighlights: ["Delhi-NCR corporate hiring drive access"]
  }],
  pros: ["Reputed brand in Delhi NCR", "NAAC A+ accreditation"],
  cons: ["Fewer niche technical specializations"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.7,
    placementSupport: 4.6,
    valueForMoney: 4.7
  }
}, {
  id: "mizoram-university-online",
  name: "Mizoram University Online (A Central University)",
  shortName: "Mizoram Central University",
  slug: "mizoram-university-online",
  badge: "UGC Central University with NAAC A+ & Low Fees",
  featured: false,
  tagline: "Government Central University Degrees with High Govt & UPSC Acceptance",
  city: "Aizawl",
  state: "Mizoram",
  foundedYear: 2001,
  parentGroup: "Ministry of Education, Govt of India",
  universityType: "Central University",
  logoText: "MIZORAM CENTRAL",
  logoColor: "#00796B",
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved Central University",
    naacGrade: "A+",
    naacScore: "3.36 CGPA",
    nirfRank: "NIRF Top 80 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Central University of India"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 1650,
    studentEnrolled: "16,000+",
    highestCtc: "12.0 LPA",
    avgCtc: "5.5 LPA",
    placementPercentage: "85%",
    hiringPartnersCount: "200+"
  },
  topRecruiters: ["TCS", "State Bank of India", "HDFC Bank", "ICICI Bank", "Tech Mahindra", "Wipro"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "MZU Online Learning Portal with e-Content and Video Lectures",
  emiAvailable: true,
  minMonthlyEmi: 1800,
  scholarships: "Central Govt & Regional Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "mzu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Multiple Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation with min 50% marks",
    totalFee: 98000,
    perSemFee: 24500,
    monthlyEmi: 2450,
    specializations: ["Marketing", "Finance", "HR", "Operations", "Information Technology", "Logistics & Supply Chain"],
    highestCtc: "12 LPA",
    avgCtc: "5.8 LPA",
    keyHighlights: ["Government Central University degree with 100% validity for Govt exams", "Super affordable"]
  }],
  pros: ["Central University prestige and full acceptance for Govt jobs & UPSC", "Affordable fee under ₹1 Lakh for 2 years"],
  cons: ["Slower administrative response time"],
  studentReviewsRatingBreakdown: {
    faculty: 4.6,
    lms: 4.5,
    placementSupport: 4.4,
    valueForMoney: 5.0
  }
}, {
  id: "kurukshetra-university-online",
  name: "Kurukshetra University Online (KUK Online)",
  shortName: "Kurukshetra University",
  slug: "kurukshetra-university-online",
  badge: "State University with NAAC A++ (3.56 CGPA)",
  featured: false,
  tagline: "Premier State University of Haryana with 65+ Years of Academic Heritage",
  city: "Kurukshetra",
  state: "Haryana",
  foundedYear: 1956,
  parentGroup: "Govt of Haryana State University",
  universityType: "State University",
  logoText: "KUK ONLINE",
  logoColor: "#C62828",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved State University",
    naacGrade: "A++",
    naacScore: "3.56 CGPA",
    nirfRank: "NIRF Top 80 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "State Government University"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 2400,
    studentEnrolled: "35,000+",
    highestCtc: "12.5 LPA",
    avgCtc: "5.8 LPA",
    placementPercentage: "86%",
    hiringPartnersCount: "250+"
  },
  topRecruiters: ["TCS", "Infosys", "Tech Mahindra", "Govt Sector Organizations", "HDFC Bank"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "KUK e-Learning Portal with Live Webinars and e-Books",
  emiAvailable: true,
  minMonthlyEmi: 1900,
  scholarships: "State Government Scholarships for SC/ST/OBC",
  brochureUrl: "#",
  popularCourses: [{
    id: "kuk-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 108000,
    perSemFee: 27000,
    monthlyEmi: 2700,
    specializations: ["Marketing", "Finance", "HR", "International Business", "IT"],
    highestCtc: "12.5 LPA",
    avgCtc: "6.0 LPA",
    keyHighlights: ["State Govt NAAC A++ university degree with high trust"]
  }],
  pros: ["State government university with NAAC A++ (3.56 CGPA)", "Affordable fee structure"],
  cons: ["Simple portal interface"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.5,
    placementSupport: 4.5,
    valueForMoney: 4.9
  }
}, {
  id: "andhra-university-online",
  name: "Andhra University Online (School of Distance Education)",
  shortName: "Andhra University",
  slug: "andhra-university-online",
  badge: "Pioneer State University with NAAC A++ (3.74 CGPA)",
  featured: false,
  tagline: "One of India's Oldest and Most Respected State Universities (Est. 1926)",
  city: "Visakhapatnam",
  state: "Andhra Pradesh",
  foundedYear: 1926,
  parentGroup: "Govt of Andhra Pradesh State University",
  universityType: "State University",
  logoText: "ANDHRA UNI",
  logoColor: "#1565C0",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved State University",
    naacGrade: "A++",
    naacScore: "3.74 CGPA (Highest Category)",
    nirfRank: "NIRF Top 43 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "State Government University"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3100,
    studentEnrolled: "40,000+",
    highestCtc: "14.0 LPA",
    avgCtc: "6.2 LPA",
    placementPercentage: "88%",
    hiringPartnersCount: "280+"
  },
  topRecruiters: ["TCS", "Wipro", "Infosys", "Tech Mahindra", "Public Sector PSUs", "State Banks"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "Andhra University Online LMS Portal with Video Lectures and Study Material",
  emiAvailable: true,
  minMonthlyEmi: 1700,
  scholarships: "State SC/ST/BC Welfare Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "au-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Core Management Electives)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 85000,
    perSemFee: 21250,
    monthlyEmi: 2125,
    specializations: ["Marketing", "Finance", "HR", "Operations"],
    highestCtc: "14 LPA",
    avgCtc: "6.4 LPA",
    keyHighlights: ["100-Year academic legacy with NAAC A++ (3.74 CGPA)", "Lowest state university fee"]
  }],
  pros: ["Highest NAAC A++ (3.74 CGPA) among state universities in India", "Extremely low fee"],
  cons: ["Basic digital LMS layout"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.4,
    placementSupport: 4.5,
    valueForMoney: 5.0
  }
}, {
  id: "amu-online",
  name: "Aligarh Muslim University Centre for Distance and Online Education",
  shortName: "AMU Online",
  slug: "amu-online",
  badge: "Premier Central University with NAAC A+ (3.35 CGPA)",
  featured: false,
  tagline: "Historic Central Institution of National Importance Offering Online Degrees",
  city: "Aligarh",
  state: "Uttar Pradesh",
  foundedYear: 1920,
  parentGroup: "Government of India Central University",
  universityType: "Central University",
  logoText: "AMU ONLINE",
  logoColor: "#1B5E20",
  heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Central University Act Approved",
    naacGrade: "A+",
    naacScore: "3.35 CGPA",
    nirfRank: "NIRF Rank #19 Overall in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Top Ranked Central University"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3200,
    studentEnrolled: "35,000+",
    highestCtc: "14.5 LPA",
    avgCtc: "6.5 LPA",
    placementPercentage: "89%",
    hiringPartnersCount: "300+"
  },
  topRecruiters: ["TCS", "Wipro", "Infosys", "Amazon", "Govt Sector", "HCL", "Reliance"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "AMU CDOE Learning Portal with Live Lectures and E-Resources",
  emiAvailable: true,
  minMonthlyEmi: 1800,
  scholarships: "Government of India Central Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "amu-online-bba",
    degree: "BBA",
    level: "Undergraduate",
    name: "Online BBA (Bachelor of Business Administration)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with min 50% marks",
    totalFee: 78000,
    perSemFee: 13000,
    monthlyEmi: 1300,
    specializations: ["General Management", "Marketing", "Finance"],
    highestCtc: "8.5 LPA",
    avgCtc: "4.5 LPA",
    keyHighlights: ["Central University NIRF #19 degree", "Highly prestigious alumni circle"]
  }, {
    id: "amu-online-mcom",
    degree: "M.Com",
    level: "Postgraduate",
    name: "Online M.Com (Master of Commerce)",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Com / BBA with 50% marks",
    totalFee: 72000,
    perSemFee: 18000,
    monthlyEmi: 1800,
    specializations: ["Finance & Trade", "Taxation"],
    highestCtc: "9.0 LPA",
    avgCtc: "5.0 LPA",
    keyHighlights: ["Valid for all NET/SET & Assistant Professor eligibility"]
  }],
  pros: ["Top NIRF #19 Central University brand with global alumni network", "Extremely nominal fees"],
  cons: ["Limited PG technical programs currently"],
  studentReviewsRatingBreakdown: {
    faculty: 4.8,
    lms: 4.6,
    placementSupport: 4.6,
    valueForMoney: 5.0
  }
}, {
  id: "bvdu-online",
  name: "Bharati Vidyapeeth Deemed University Online (BVDU)",
  shortName: "Bharati Vidyapeeth Online",
  slug: "bvdu-online",
  badge: "NAAC A+ with Category 1 Autonomy in Pune",
  featured: false,
  tagline: "Pune's Renowned Multi-Disciplinary Deemed University",
  city: "Pune",
  state: "Maharashtra",
  foundedYear: 1964,
  parentGroup: "Bharati Vidyapeeth",
  universityType: "Deemed-to-be University",
  logoText: "BVDU",
  logoColor: "#0D47A1",
  heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A+",
    naacScore: "3.53 CGPA",
    nirfRank: "NIRF Top 90 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "Recognized Deemed University"
  },
  metrics: {
    rating: 4.7,
    reviewCount: 2150,
    studentEnrolled: "25,000+",
    highestCtc: "15.0 LPA",
    avgCtc: "6.8 LPA",
    placementPercentage: "89%",
    hiringPartnersCount: "320+"
  },
  topRecruiters: ["Cognizant", "TCS", "Tech Mahindra", "Tata Motors", "Infosys", "HCL", "Amazon"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "BVDU e-Learning Portal with Live Masterclasses & Recorded Lectures",
  emiAvailable: true,
  minMonthlyEmi: 2500,
  scholarships: "Merit Discounts",
  brochureUrl: "#",
  popularCourses: [{
    id: "bvdu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Multiple Specializations)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 120000,
    perSemFee: 30000,
    monthlyEmi: 3000,
    specializations: ["Marketing", "Finance", "HR", "IT", "Operations", "International Business"],
    highestCtc: "15 LPA",
    avgCtc: "6.8 LPA",
    keyHighlights: ["Pune's proven educational legacy with NAAC A+ (3.53 CGPA)"]
  }, {
    id: "bvdu-online-bba",
    degree: "BBA",
    level: "Undergraduate",
    name: "Online BBA (Bachelor of Business Administration)",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with min 45% marks",
    totalFee: 90000,
    perSemFee: 15000,
    monthlyEmi: 1500,
    specializations: ["Marketing", "Finance", "HR"],
    highestCtc: "7.5 LPA",
    avgCtc: "4.0 LPA",
    keyHighlights: ["Affordable undergraduate business degree"]
  }],
  pros: ["NAAC A+ with 3.53 CGPA", "Strong Pune corporate connections"],
  cons: ["Standard LMS features"],
  studentReviewsRatingBreakdown: {
    faculty: 4.7,
    lms: 4.6,
    placementSupport: 4.6,
    valueForMoney: 4.8
  }
}, {
  id: "gndu-online",
  name: "Guru Nanak Dev University Online (GNDU Amritsar)",
  shortName: "GNDU Online",
  slug: "gndu-online",
  badge: "State University with NAAC A++ (3.85 CGPA - Highest in North India)",
  featured: false,
  tagline: "University with Potential for Excellence & Prestigious NAAC A++ (3.85 CGPA)",
  city: "Amritsar",
  state: "Punjab",
  foundedYear: 1969,
  parentGroup: "Govt of Punjab State University",
  universityType: "State University",
  logoText: "GNDU",
  logoColor: "#B71C1C",
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved State University",
    naacGrade: "A++",
    naacScore: "3.85 CGPA (Category 1 Autonomy - Highest in India)",
    nirfRank: "NIRF Top 48 in India",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "State Government Premier University"
  },
  metrics: {
    rating: 4.9,
    reviewCount: 2600,
    studentEnrolled: "30,000+",
    highestCtc: "16.0 LPA",
    avgCtc: "7.0 LPA",
    placementPercentage: "91%",
    hiringPartnersCount: "350+"
  },
  topRecruiters: ["TCS", "Infosys", "Capgemini", "Wipro", "Tech Mahindra", "State Banks", "Amazon"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "GNDU Online LMS Portal with Recorded Lectures and Live Doubt Clearing",
  emiAvailable: true,
  minMonthlyEmi: 2100,
  scholarships: "State Government Welfare Scholarships",
  brochureUrl: "#",
  popularCourses: [{
    id: "gndu-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Dual Specialization)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 110000,
    perSemFee: 27500,
    monthlyEmi: 2750,
    specializations: ["Marketing", "Finance", "HR", "International Business", "IT"],
    highestCtc: "16 LPA",
    avgCtc: "7.2 LPA",
    keyHighlights: ["Record NAAC A++ (3.85 CGPA) score", "Extremely prestigious state degree"]
  }, {
    id: "gndu-online-mca",
    degree: "MCA",
    level: "Postgraduate",
    name: "Online MCA (Master of Computer Applications)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / Bachelor's in CS / Maths",
    totalFee: 98000,
    perSemFee: 24500,
    monthlyEmi: 2450,
    specializations: ["Software Systems", "Cloud & Web Apps"],
    highestCtc: "14 LPA",
    avgCtc: "6.5 LPA",
    keyHighlights: ["Affordable and high prestige computer degree"]
  }],
  pros: ["Record NAAC A++ (3.85 CGPA) score — highest among online state universities in India", "Low tuition fee"],
  cons: ["Limited batch intakes per year"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.6,
    placementSupport: 4.7,
    valueForMoney: 5.0
  }
}, {
  id: "ifhe-online",
  name: "ICFAI Foundation for Higher Education Online (IFHE Hyderabad)",
  shortName: "ICFAI Online",
  slug: "ifhe-online",
  badge: "Pioneer in Finance & Management Education with NAAC A++",
  featured: false,
  tagline: "India's Premier Management Pedagogy Now Available 100% Online",
  city: "Hyderabad",
  state: "Telangana",
  foundedYear: 1984,
  parentGroup: "ICFAI Group",
  universityType: "Deemed-to-be University",
  logoText: "ICFAI",
  logoColor: "#1B5E20",
  heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  accreditations: {
    ugcDeb: true,
    ugcDebYear: "Approved for 2026-27",
    naacGrade: "A++",
    naacScore: "3.59 CGPA",
    nirfRank: "NIRF Top 40 in Management",
    aicteApproved: true,
    wesRecognized: true,
    aiuMember: true,
    qsRank: "QS Asia Ranked Management Institute"
  },
  metrics: {
    rating: 4.8,
    reviewCount: 3100,
    studentEnrolled: "45,000+",
    highestCtc: "18.0 LPA",
    avgCtc: "8.0 LPA",
    placementPercentage: "92%",
    hiringPartnersCount: "450+"
  },
  topRecruiters: ["Deloitte", "HDFC Bank", "ICICI Securities", "Morgan Stanley", "KPMG", "PwC", "Amazon", "Genpact"],
  examMode: "100% Online Web-Proctored Exams",
  learningPedagogy: "ICFAI Case Study Method + Live Masterclasses by Industry Leaders",
  emiAvailable: true,
  minMonthlyEmi: 4200,
  scholarships: "Merit & Corporate Concessions",
  brochureUrl: "#",
  popularCourses: [{
    id: "icfai-online-mba",
    degree: "MBA",
    level: "Postgraduate",
    name: "Online MBA (with Dual Electives & Case Studies)",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree with min 50% marks",
    totalFee: 200000,
    perSemFee: 50000,
    monthlyEmi: 5000,
    specializations: ["Investment Banking", "FinTech", "Strategic Finance", "Marketing", "HR", "Operations"],
    highestCtc: "18 LPA",
    avgCtc: "8.5 LPA",
    keyHighlights: ["ICFAI's world-renowned case study pedagogy", "Unmatched finance domain expertise"]
  }],
  pros: ["Gold standard in Finance & Banking curriculum", "NAAC A++ accreditation"],
  cons: ["Premium fee structure"],
  studentReviewsRatingBreakdown: {
    faculty: 4.9,
    lms: 4.8,
    placementSupport: 4.8,
    valueForMoney: 4.7
  }
}];
window.COURSES_DATA = [{
  degree: "MBA",
  fullName: "Master of Business Administration",
  level: "Postgraduate",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹7.5 - 12.0 LPA",
  highestSalaryObserved: "₹24 LPA",
  salaryHikePercentage: "70% - 130%",
  icon: "briefcase",
  description: "India's #1 in-demand postgraduate online degree for working professionals seeking managerial, leadership, and CXO trajectory.",
  eligibility: "Graduation in any discipline with min 45-50% marks",
  specializations: [{
    name: "FinTech & Banking",
    demand: "Very High",
    avgCtc: "9.5 LPA",
    hiringRoles: ["Financial Analyst", "FinTech Product Manager", "Risk Consultant"]
  }, {
    name: "Data Science & Business Analytics",
    demand: "Ultra High",
    avgCtc: "11.0 LPA",
    hiringRoles: ["Business Intelligence Lead", "Data Analytics Manager", "Strategy Consultant"]
  }, {
    name: "Digital Marketing & E-Commerce",
    demand: "High",
    avgCtc: "8.5 LPA",
    hiringRoles: ["Growth Marketer", "Digital Brand Manager", "Performance Marketer"]
  }, {
    name: "Finance Management",
    demand: "High",
    avgCtc: "8.8 LPA",
    hiringRoles: ["Corporate Finance Manager", "Investment Associate", "Credit Analyst"]
  }, {
    name: "Human Resource Management (HR)",
    demand: "Medium-High",
    avgCtc: "7.2 LPA",
    hiringRoles: ["HR Business Partner", "Talent Acquisition Lead", "People Ops Manager"]
  }, {
    name: "Operations & Supply Chain",
    demand: "High",
    avgCtc: "9.0 LPA",
    hiringRoles: ["Supply Chain Director", "Logistics Planner", "Plant Operations Lead"]
  }, {
    name: "Healthcare & Hospital Management",
    demand: "High",
    avgCtc: "8.0 LPA",
    hiringRoles: ["Hospital Administrator", "Healthcare Consultant", "Operations Head"]
  }, {
    name: "Information Technology (IT)",
    demand: "Very High",
    avgCtc: "10.5 LPA",
    hiringRoles: ["IT Project Manager", "Scrum Master", "Enterprise Solutions Architect"]
  }]
}, {
  degree: "MCA",
  fullName: "Master of Computer Applications",
  level: "Postgraduate",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹7.0 - 11.5 LPA",
  highestSalaryObserved: "₹18 LPA",
  salaryHikePercentage: "80% - 150%",
  icon: "code",
  description: "Accelerate your tech career with modern software architecture, cloud platforms, full-stack development, and artificial intelligence.",
  eligibility: "BCA / B.Sc CS/IT or Bachelor's with Mathematics with min 50% marks",
  specializations: [{
    name: "Artificial Intelligence & Machine Learning",
    demand: "Ultra High",
    avgCtc: "12.0 LPA",
    hiringRoles: ["AI Engineer", "ML Ops Engineer", "NLP Scientist"]
  }, {
    name: "Cloud Computing & DevOps",
    demand: "Very High",
    avgCtc: "10.8 LPA",
    hiringRoles: ["Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer"]
  }, {
    name: "Full Stack Development",
    demand: "High",
    avgCtc: "9.2 LPA",
    hiringRoles: ["Lead Frontend/Backend Developer", "Tech Lead", "Software Architect"]
  }, {
    name: "Cybersecurity & Information Defense",
    demand: "Very High",
    avgCtc: "10.0 LPA",
    hiringRoles: ["Security Analyst", "Ethical Hacker", "SOC Specialist"]
  }, {
    name: "Data Engineering",
    demand: "High",
    avgCtc: "10.5 LPA",
    hiringRoles: ["Big Data Engineer", "Data Pipeline Architect", "ETL Specialist"]
  }]
}, {
  degree: "BBA",
  fullName: "Bachelor of Business Administration",
  level: "Undergraduate",
  typicalDuration: "3 Years",
  avgStartingSalary: "₹4.0 - 6.5 LPA",
  highestSalaryObserved: "₹10 LPA",
  salaryHikePercentage: "Direct Corporate Entry",
  icon: "award",
  description: "Build robust foundational business, finance, management, and leadership acumen right after 10+2.",
  eligibility: "10+2 in any stream from recognized board with min 45-50% marks",
  specializations: [{
    name: "Digital Marketing & Social Media",
    demand: "High",
    avgCtc: "4.8 LPA",
    hiringRoles: ["Digital Executive", "SEO Strategist", "Social Media Associate"]
  }, {
    name: "Banking & Financial Services",
    demand: "Medium-High",
    avgCtc: "5.0 LPA",
    hiringRoles: ["Relationship Manager", "Branch Associate", "Credit Officer"]
  }, {
    name: "Sales & Marketing",
    demand: "High",
    avgCtc: "4.5 LPA",
    hiringRoles: ["Business Development Executive", "Territory Sales Officer", "Account Specialist"]
  }, {
    name: "Human Resource Management",
    demand: "Medium",
    avgCtc: "4.0 LPA",
    hiringRoles: ["HR Coordinator", "Recruitment Executive"]
  }]
}, {
  degree: "BCA",
  fullName: "Bachelor of Computer Applications",
  level: "Undergraduate",
  typicalDuration: "3 Years",
  avgStartingSalary: "₹4.5 - 7.5 LPA",
  highestSalaryObserved: "₹12 LPA",
  salaryHikePercentage: "Direct IT Industry Entry",
  icon: "terminal",
  description: "Launch an in-demand software engineering or web development career from home with top accredited universities.",
  eligibility: "10+2 in any stream (Maths / Computer preferred) with min 45-50% marks",
  specializations: [{
    name: "Data Analytics & Python",
    demand: "High",
    avgCtc: "5.8 LPA",
    hiringRoles: ["Junior Data Analyst", "BI Associate", "SQL Developer"]
  }, {
    name: "Cloud & Web Applications",
    demand: "High",
    avgCtc: "5.5 LPA",
    hiringRoles: ["Junior Web Developer", "React Developer", "QA Automation Tester"]
  }, {
    name: "Cybersecurity & Networks",
    demand: "Medium-High",
    avgCtc: "5.2 LPA",
    hiringRoles: ["Junior Security Analyst", "Network Administrator"]
  }]
}, {
  degree: "M.Sc",
  fullName: "Master of Science (Data Science / AI / IT)",
  level: "Postgraduate",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹9.0 - 15.0 LPA",
  highestSalaryObserved: "₹24 LPA",
  salaryHikePercentage: "90% - 160%",
  icon: "database",
  description: "Specialized analytical degrees designed for quantitative graduates and techies aiming for high-impact AI/Data roles.",
  eligibility: "Bachelor's degree with Mathematics, Statistics, CS, or Engineering",
  specializations: [{
    name: "Data Science & Big Data",
    demand: "Ultra High",
    avgCtc: "12.5 LPA",
    hiringRoles: ["Data Scientist", "Predictive Modeler", "Analytics Consultant"]
  }, {
    name: "Applied Machine Learning & AI",
    demand: "Ultra High",
    avgCtc: "13.2 LPA",
    hiringRoles: ["Deep Learning Engineer", "Computer Vision Specialist"]
  }]
}, {
  degree: "B.Com",
  fullName: "Bachelor of Commerce (Honours / General)",
  level: "Undergraduate",
  typicalDuration: "3 Years",
  avgStartingSalary: "₹3.8 - 6.0 LPA",
  highestSalaryObserved: "₹8 LPA",
  salaryHikePercentage: "Corporate Finance Entry",
  icon: "calculator",
  description: "Comprehensive financial accounting, taxation, auditing, and corporate law foundation with ACCA integrations.",
  eligibility: "10+2 from recognized board",
  specializations: [{
    name: "International Finance & ACCA",
    demand: "High",
    avgCtc: "5.5 LPA",
    hiringRoles: ["Audit Associate", "Tax Analyst", "Junior Financial Planner"]
  }, {
    name: "Corporate Accounting & GST",
    demand: "Medium",
    avgCtc: "4.2 LPA",
    hiringRoles: ["Accountant", "Accounts Executive", "Compliance Officer"]
  }]
}, {
  degree: "M.Tech",
  fullName: "Master of Technology (Executive / WILP)",
  level: "Postgraduate (Executive)",
  typicalDuration: "2 Years",
  avgStartingSalary: "₹15.0 - 25.0 LPA",
  highestSalaryObserved: "₹38 LPA",
  salaryHikePercentage: "80% - 150%",
  icon: "cpu",
  description: "Elite technical master's for working engineers from institutes like BITS Pilani to advance to Principal Engineer or Tech Director.",
  eligibility: "B.Tech/BE with min 60% marks and 1+ year industry experience",
  specializations: [{
    name: "Software Systems & Cloud Architecture",
    demand: "Ultra High",
    avgCtc: "18.5 LPA",
    hiringRoles: ["Principal Software Engineer", "Chief Architect"]
  }, {
    name: "Artificial Intelligence & Robotics",
    demand: "Ultra High",
    avgCtc: "20.0 LPA",
    hiringRoles: ["AI Research Scientist", "Robotics Lead"]
  }]
}];
window.REVIEWS_DATA = [{
  id: "rev-1",
  studentName: "Rahul Sharma",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (FinTech)",
  university: "Online Manipal (Manipal University Jaipur)",
  universityId: "manipal-online",
  batch: "2024-2026",
  previousRole: "Junior Associate at HDFC Bank (₹4.2 LPA)",
  currentRole: "FinTech Product Consultant at Deloitte (₹11.5 LPA)",
  salaryHike: "173% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "Best decision of my career — 100% online exams & got placed at Deloitte!",
  comment: "I was hesitant between taking a 2-year career break for a regular MBA vs an online degree. UniversityJano's counselor guided me towards Online Manipal. The Coursera access and Harvard case studies were brilliant. The dedicated placement cell arranged mock interviews, and within 3 months of completion, I bagged an 11.5 LPA package at Deloitte without quitting my job!",
  date: "14 July 2026"
}, {
  id: "rev-2",
  studentName: "Priya Venkatesh",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  course: "Online MCA (Cloud & AI)",
  university: "Jain (Deemed-to-be-University) Online",
  universityId: "jain-university-online",
  batch: "2023-2025",
  previousRole: "Support Engineer (₹3.5 LPA)",
  currentRole: "Cloud DevOps Specialist at Schneider Electric (₹9.8 LPA)",
  salaryHike: "180% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "NAAC A++ degree opened doors to top tech companies in Bangalore",
  comment: "The hands-on cloud labs and live coding sessions were outstanding. Because Jain University has NAAC A++ (3.71 CGPA), MNC recruiters treated my degree with the exact same weight as a regular on-campus MCA. The 0% EMI option made payment effortless at ₹3,500/month.",
  date: "28 June 2026"
}, {
  id: "rev-3",
  studentName: "Ankit Verma",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (Business Analytics)",
  university: "NMIMS Centre for Distance & Online Education",
  universityId: "nmims-online",
  batch: "2024-2026",
  previousRole: "Operations Lead (₹6.0 LPA)",
  currentRole: "Senior Analytics Manager at Morgan Stanley (₹15.2 LPA)",
  salaryHike: "153% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "NMIMS brand value in the corporate world is unbeatable",
  comment: "NMIMS is the gold standard in India for management. The live lectures and portal interface are ultra smooth. The degree helped me transition from traditional operations to high-paying strategic analytics at Morgan Stanley.",
  date: "02 August 2026"
}, {
  id: "rev-4",
  studentName: "Sneha Mukherjee",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (Digital Marketing)",
  university: "Amity University Online",
  universityId: "amity-online",
  batch: "2023-2025",
  previousRole: "Content Creator (₹3.2 LPA)",
  currentRole: "Performance Marketing Lead at Nykaa (₹8.6 LPA)",
  salaryHike: "168% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "QS Asia #1 Online MBA lives up to the reputation",
  comment: "The global masterclasses with international faculty gave me practical insights into omnichannel e-commerce. The Amigo LMS app made it easy to study during my daily commute.",
  date: "19 July 2026"
}, {
  id: "rev-5",
  studentName: "Karan Johri",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  course: "Online MBA (Dual Specialization - Marketing & HR)",
  university: "Chandigarh University Online (CU Online)",
  universityId: "chandigarh-university-online",
  batch: "2024-2026",
  previousRole: "Executive Assistant (₹2.8 LPA)",
  currentRole: "Assistant Manager - HR & Strategy (₹7.2 LPA)",
  salaryHike: "157% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "Highest ROI university in India — Top NAAC A+ degree at lowest fee!",
  comment: "At just ₹37,500 per semester, CU Online is a steal. The quality of lectures, professors, and case studies matches universities charging 3x more. Highly recommend comparing universities on UniversityJano before paying any agent!",
  date: "25 July 2026"
}, {
  id: "rev-6",
  studentName: "Deepak Choudhary",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  course: "M.Tech in Artificial Intelligence & ML (WILP)",
  university: "BITS Pilani WILP",
  universityId: "bits-pilani-wilp",
  batch: "2023-2025",
  previousRole: "Senior Software Engineer (₹14 LPA)",
  currentRole: "Staff AI Engineer at Qualcomm (₹31 LPA)",
  salaryHike: "121% Jump",
  rating: 5,
  verifiedStudent: true,
  reviewTitle: "The gold standard for working software engineers",
  comment: "The depth of math, deep neural network architecture, and distributed GPU labs at BITS Pilani are world-class. It gave me the technical authority to crack Tier-1 US tech company interviews.",
  date: "10 August 2026"
}];
window.ACCREDITATIONS_DATA = {
  ugcDebNotice: {
    title: "UGC (University Grants Commission) & DEB (Distance Education Bureau) Online Degree Equivalence",
    officialGazetteQuote: "Degrees/Diplomas/Certificates awarded for programmes conducted through Open and Distance Learning mode and Online mode by Higher Educational Institutions recognized by the UGC shall be treated as equivalent to corresponding awards of Degree/Diploma offered in Conventional (Regular/On-Campus) mode.",
    source: "UGC Notification F.No. 1-9/2018 (DEB-I) & Public Notice on Equivalence of Degrees",
    validityPoints: [{
      title: "100% Valid for All Government Jobs & Competitive Exams",
      description: "UGC-DEB approved online degrees are fully recognized for Union Public Service Commission (UPSC Civil Services), SSC CGL, State PSCs, RBI, SBI, IBPS Banking, Railways, and Defense exams.",
      icon: "shield-check"
    }, {
      title: "Accepted by Top Global & Indian MNCs",
      description: "Leading corporate recruiters including Google, Amazon, Microsoft, Deloitte, TCS, and HDFC treat UGC-approved online degrees with equal weight during campus drives and lateral hiring.",
      icon: "building"
    }, {
      title: "Valid for Overseas Higher Education & Immigration (WES Approved)",
      description: "NAAC A+ / A++ accredited online universities in India receive Canadian & US WES (World Education Services) ECA credentials and are accepted for PR/visa applications and master's/PhD abroad.",
      icon: "globe"
    }, {
      title: "100% Online Proctored Semester Exams",
      description: "Take all exams comfortably from home with 360-degree AI proctoring and webcam monitoring without travelling to any physical test center.",
      icon: "monitor"
    }]
  },
  accreditationTypes: [{
    code: "UGC-DEB",
    fullName: "University Grants Commission - Distance Education Bureau",
    importance: "Mandatory (Legal License to award online degrees)",
    badgeColor: "#1E40AF",
    description: "Statutory body governing all higher education in India. Without UGC-DEB authorization, an online degree is considered legally invalid."
  }, {
    code: "NAAC A++ / A+",
    fullName: "National Assessment and Accreditation Council",
    importance: "Quality Benchmark (A++ is CGPA 3.51 - 4.00)",
    badgeColor: "#059669",
    description: "Autonomous body grading university teaching standards, research, infrastructure, and learning resources."
  }, {
    code: "AICTE",
    fullName: "All India Council for Technical Education",
    importance: "Required for MBA, MCA & Engineering Degrees",
    badgeColor: "#D97706",
    description: "Statutory council responsible for quality assurance in technical and management programs."
  }, {
    code: "NIRF",
    fullName: "National Institutional Ranking Framework (Govt of India)",
    importance: "Official Ministry of Education Ranking",
    badgeColor: "#7C3AED",
    description: "Annual ranking framework established by the Ministry of Education, Govt. of India."
  }, {
    code: "WES & AIU",
    fullName: "World Education Services & Association of Indian Universities",
    importance: "Global & Overseas Degree Equivalence",
    badgeColor: "#0891B2",
    description: "Ensures international evaluation for Canadian PR, US H-1B, and foreign university admissions."
  }],
  frequentlyAskedQuestions: [{
    q: "Is an online MBA or MCA degree equal to a regular on-campus degree in India?",
    a: "Yes! According to the UGC Gazette Notification F.No. 1-9/2018 (DEB-I), online degrees awarded by UGC-DEB entitled universities are 100% equivalent to conventional on-campus degrees in curriculum value, employment rights, and government eligibility."
  }, {
    q: "Will 'Online' be written on my degree certificate?",
    a: "As per UGC regulations, the degree certificate mentions the program name (e.g., 'Master of Business Administration') along with the delivery mode 'Online' as mandated by UGC guidelines, which confirms legal UGC compliance."
  }, {
    q: "Can I apply for UPSC, SSC, Banking, or State PSC government jobs with an online degree?",
    a: "Absolutely! All government recruitment notifications require a Bachelor's or Master's degree from a recognized university. Since all universities on UniversityJano.com are UGC-DEB approved, you are 100% eligible to appear in UPSC, SSC, Bank PO, and State exams."
  }, {
    q: "How do semester exams work in online degrees?",
    a: "Most top universities (Manipal, Amity, Jain, Chandigarh, NMIMS, DPU, UPES, LPU) conduct 100% online remote-proctored exams where you give the exam on your laptop with a webcam and microphone from home. A few universities like IGNOU conduct pen-paper exams at local study centers."
  }, {
    q: "How does 0% Interest EMI work for tuition fees?",
    a: "UniversityJano partners with educational NBFCs (like Propelld, Eduvanz, GrayQuest) to offer zero-cost monthly EMI options where the semester or full fee is divided equally into 6, 12, or 24 monthly installments without any interest charges."
  }, {
    q: "Why should I use UniversityJano.com instead of consulting unverified agents?",
    a: "UniversityJano offers 100% unbiased, free, and direct comparison of all UGC-DEB approved universities with transparent fees, real NAAC scores, genuine placement stats, and direct university admission support with zero agent brokerage or hidden markups."
  }]
};
window.helpers = {
  formatINR: function formatINR(amount) {
    if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
    if (amount === 0) return 'Free / Nil';
    return '₹' + amount.toLocaleString('en-IN');
  },
  formatLPA: function formatLPA(val) {
    if (!val) return 'N/A';
    if (typeof val === 'string' && val.includes('LPA')) return val;
    return val + ' LPA';
  },
  formatShortNumber: function formatShortNumber(num) {
    if (!num) return '0';
    if (num >= 10000000) return (num / 10000000).toFixed(1) + ' Cr+';
    if (num >= 100000) return (num / 100000).toFixed(1) + ' Lakh+';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'k+';
    return num.toString();
  },
  calculateEMI: function calculateEMI(principal) {
    var months = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    if (!principal || principal <= 0 || !months) return 0;
    return Math.round(principal / months);
  },
  calculateCareerROI: function calculateCareerROI(currentSalaryLPA, targetDegree) {
    var experienceYears = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var current = parseFloat(currentSalaryLPA) || 4.0;
    var multiplier = 1.6;
    var avgDegreeFee = 160000;
    switch (targetDegree) {
      case 'MBA':
        multiplier = 1.95;
        avgDegreeFee = 175000;
        break;
      case 'MCA':
        multiplier = 1.85;
        avgDegreeFee = 145000;
        break;
      case 'M.Sc':
        multiplier = 1.90;
        avgDegreeFee = 180000;
        break;
      case 'BBA':
        multiplier = 1.40;
        avgDegreeFee = 120000;
        break;
      case 'BCA':
        multiplier = 1.45;
        avgDegreeFee = 120000;
        break;
      case 'M.Tech':
        multiplier = 2.10;
        avgDegreeFee = 260000;
        break;
      default:
        multiplier = 1.70;
        avgDegreeFee = 150000;
    }
    var estimatedNewSalary = Math.round(current * multiplier * 10) / 10;
    var salaryGainAnnual = (estimatedNewSalary - current) * 100000;
    var monthlyGain = salaryGainAnnual / 12;
    var paybackMonths = monthlyGain > 0 ? Math.max(1, Math.round(avgDegreeFee / monthlyGain)) : 12;
    var fiveYearGain = Math.round((estimatedNewSalary - current) * 5 * 10) / 10;
    return {
      currentSalary: current,
      estimatedNewSalary: estimatedNewSalary,
      salaryGainAnnual: salaryGainAnnual,
      percentageHike: Math.round((estimatedNewSalary - current) / current * 100),
      paybackMonths: paybackMonths,
      fiveYearGainLakhs: fiveYearGain,
      avgDegreeFee: avgDegreeFee
    };
  },
  calculateCollegeMatchScore: function calculateCollegeMatchScore(university, preferences) {
    var score = 70;
    var budgetMax = preferences.budget ? parseInt(preferences.budget) : 250000;
    var targetDegree = preferences.degree || 'MBA';
    var course = university.popularCourses.find(function (c) {
      return c.degree === targetDegree;
    });
    if (course) {
      score += 15;
      if (course.totalFee <= budgetMax) {
        score += 10;
      } else if (course.totalFee <= budgetMax * 1.25) {
        score += 5;
      }
      if (preferences.specialization && course.specializations) {
        var specMatch = course.specializations.some(function (s) {
          return s.toLowerCase().includes(preferences.specialization.toLowerCase()) || preferences.specialization.toLowerCase().includes(s.toLowerCase());
        });
        if (specMatch) score += 5;
      }
    }
    if (university.accreditations.naacGrade === 'A++') score += 5;else if (university.accreditations.naacGrade === 'A+') score += 3;
    if (preferences.examMode === 'online' && university.examMode.includes('100% Online')) {
      score += 5;
    }
    return Math.min(99, Math.max(72, score));
  },
  getComparisonDifferences: function getComparisonDifferences(universitiesList) {
    var degreeFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MBA';
    if (!universitiesList || universitiesList.length < 2) return [];
    var rows = [{
      key: 'ugcDeb',
      label: 'UGC-DEB Government Approval',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: u.accreditations.ugcDeb ? '100% Entitled & Approved' : 'Under Process',
          badge: u.accreditations.ugcDeb ? 'badge-success' : 'badge-warning',
          highlight: false
        };
      })
    }, {
      key: 'naacGrade',
      label: 'NAAC Grade & Score',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: "".concat(u.accreditations.naacGrade, " (").concat(u.accreditations.naacScore, ")"),
          badge: u.accreditations.naacGrade === 'A++' ? 'badge-purple' : 'badge-blue',
          highlight: true
        };
      })
    }, {
      key: 'nirfRank',
      label: 'NIRF Ranking',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: u.accreditations.nirfRank || 'Participated',
          highlight: false
        };
      })
    }, {
      key: 'totalFee',
      label: "Total Fee (".concat(degreeFilter, ")"),
      category: 'Fees & Budget',
      values: universitiesList.map(function (u) {
        var c = u.popularCourses.find(function (item) {
          return item.degree === degreeFilter;
        }) || u.popularCourses[0];
        return {
          val: c ? window.helpers.formatINR(c.totalFee) : '₹1,50,000 Approx',
          subtext: c ? "".concat(window.helpers.formatINR(c.perSemFee), " / Semester") : '',
          highlight: true
        };
      })
    }, {
      key: 'monthlyEmi',
      label: '0% Monthly EMI (24 Mo)',
      category: 'Fees & Budget',
      values: universitiesList.map(function (u) {
        var c = u.popularCourses.find(function (item) {
          return item.degree === degreeFilter;
        }) || u.popularCourses[0];
        return {
          val: c ? "".concat(window.helpers.formatINR(c.monthlyEmi || Math.round(c.totalFee / 24)), "/mo") : '₹3,500/mo',
          badge: u.emiAvailable ? 'badge-success' : 'badge-danger',
          highlight: true
        };
      })
    }, {
      key: 'highestCtc',
      label: 'Highest Placement CTC',
      category: 'Placements',
      values: universitiesList.map(function (u) {
        return {
          val: u.metrics.highestCtc,
          highlight: true
        };
      })
    }, {
      key: 'avgCtc',
      label: 'Average Placement CTC',
      category: 'Placements',
      values: universitiesList.map(function (u) {
        return {
          val: u.metrics.avgCtc,
          highlight: true
        };
      })
    }, {
      key: 'examMode',
      label: 'Semester Exam Mode',
      category: 'Examinations',
      values: universitiesList.map(function (u) {
        return {
          val: u.examMode,
          badge: u.examMode.includes('100% Online') ? 'badge-success' : 'badge-warning',
          highlight: true
        };
      })
    }, {
      key: 'wesRecognized',
      label: 'WES & Global Acceptance',
      category: 'Accreditation',
      values: universitiesList.map(function (u) {
        return {
          val: u.accreditations.wesRecognized ? 'Accepted Worldwide (USA/Canada)' : 'National Valid',
          highlight: false
        };
      })
    }, {
      key: 'topRecruiters',
      label: 'Top Hiring Partners',
      category: 'Placements',
      values: universitiesList.map(function (u) {
        return {
          val: u.topRecruiters.slice(0, 4).join(', ') + ' & more',
          highlight: false
        };
      })
    }];
    return rows;
  }
};
window.leadStore = {
  STORAGE_KEY: 'uj_captured_leads_v1',
  getLeads: function getLeads() {
    try {
      var data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error reading leads from storage', e);
    }
    var initialLeads = [{
      id: "lead_1723701234001",
      name: "Vikram Malhotra",
      phone: "+91 98765 43210",
      email: "vikram.malhotra@gmail.com",
      city: "Pune",
      state: "Maharashtra",
      course: "Online MBA",
      specialization: "FinTech",
      budget: "₹1,50,000 - ₹2,00,000",
      interestedUniversities: ["Online Manipal", "NMIMS Online"],
      source: "AI 2-Min Wizard",
      status: "New Lead",
      priority: "High",
      createdAt: "2026-08-15T09:30:00Z"
    }, {
      id: "lead_1723701234002",
      name: "Pooja Deshmukh",
      phone: "+91 98234 56789",
      email: "pooja.d@yahoo.com",
      city: "Mumbai",
      state: "Maharashtra",
      course: "Online MCA",
      specialization: "Cloud Computing",
      budget: "Under ₹1,50,000",
      interestedUniversities: ["Jain Online", "Chandigarh University"],
      source: "Prospectus Download",
      status: "Contacted",
      priority: "Urgent",
      createdAt: "2026-08-15T08:15:00Z"
    }, {
      id: "lead_1723701234003",
      name: "Amitabh Sen",
      phone: "+91 97112 34567",
      email: "amitabh.sen@outlook.com",
      city: "Kolkata",
      state: "West Bengal",
      course: "Online MBA",
      specialization: "Digital Marketing",
      budget: "₹1,00,000 - ₹1,50,000",
      interestedUniversities: ["Amity Online"],
      source: "1-on-1 Free Counselling Modal",
      status: "Counselled",
      priority: "Medium",
      createdAt: "2026-08-14T17:45:00Z"
    }];
    this.saveLeads(initialLeads);
    return initialLeads;
  },
  saveLeads: function saveLeads(leads) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error('Error saving leads', e);
    }
  },
  addLead: function addLead(leadData) {
    var leads = this.getLeads();
    var newLead = {
      id: 'lead_' + Date.now(),
      name: leadData.name || 'Anonymous Student',
      phone: leadData.phone || '',
      email: leadData.email || '',
      city: leadData.city || 'India',
      state: leadData.state || '',
      course: leadData.course || 'Online MBA',
      specialization: leadData.specialization || 'General',
      budget: leadData.budget || 'Flexible',
      interestedUniversities: leadData.interestedUniversities || [],
      source: leadData.source || 'Direct Website Enquire',
      notes: leadData.notes || '',
      status: 'New Lead',
      priority: 'High',
      createdAt: new Date().toISOString()
    };
    leads.unshift(newLead);
    this.saveLeads(leads);
    fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLead)
    })["catch"](function (err) {
      console.log('Local server offline or mock mode', err);
    });
    return newLead;
  },
  updateLeadStatus: function updateLeadStatus(leadId, newStatus) {
    var leads = this.getLeads();
    var lead = leads.find(function (l) {
      return l.id === leadId;
    });
    if (lead) {
      lead.status = newStatus;
      this.saveLeads(leads);
    }
    return leads;
  },
  exportToCSV: function exportToCSV() {
    var leads = this.getLeads();
    if (!leads.length) {
      alert('No leads available to export.');
      return;
    }
    var headers = ["Lead ID", "Date", "Name", "Phone", "Email", "City", "Course", "Specialization", "Budget", "Universities", "Source", "Status", "Priority"];
    var csvRows = [];
    csvRows.push(headers.join(','));
    leads.forEach(function (l) {
      var row = ["\"".concat(l.id, "\""), "\"".concat(new Date(l.createdAt).toLocaleDateString('en-IN'), "\""), "\"".concat((l.name || '').replace(/"/g, '""'), "\""), "\"".concat((l.phone || '').replace(/"/g, '""'), "\""), "\"".concat((l.email || '').replace(/"/g, '""'), "\""), "\"".concat((l.city || '').replace(/"/g, '""'), "\""), "\"".concat((l.course || '').replace(/"/g, '""'), "\""), "\"".concat((l.specialization || '').replace(/"/g, '""'), "\""), "\"".concat((l.budget || '').replace(/"/g, '""'), "\""), "\"".concat((Array.isArray(l.interestedUniversities) ? l.interestedUniversities.join('; ') : l.interestedUniversities || '').replace(/"/g, '""'), "\""), "\"".concat((l.source || '').replace(/"/g, '""'), "\""), "\"".concat((l.status || '').replace(/"/g, '""'), "\""), "\"".concat((l.priority || '').replace(/"/g, '""'), "\"")];
      csvRows.push(row.join(','));
    });
    var csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "UniversityJano_Leads_".concat(new Date().toISOString().slice(0, 10), ".csv"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
window.Header = function (_ref) {
  var onOpenWizard = _ref.onOpenWizard,
    onOpenCounselling = _ref.onOpenCounselling,
    onOpenAdminCRM = _ref.onOpenAdminCRM,
    compareList = _ref.compareList,
    onOpenCompare = _ref.onOpenCompare,
    activePage = _ref.activePage,
    onNavigate = _ref.onNavigate;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isMobileOpen = _React$useState2[0],
    setIsMobileOpen = _React$useState2[1];
  var handleNavClick = function handleNavClick(page) {
    setIsMobileOpen(false);
    onNavigate(page);
  };
  return React.createElement("header", null, React.createElement("div", {
    className: "top-notice-bar"
  }, React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      flexWrap: 'wrap',
      gap: '0.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("span", {
    className: "notice-pill"
  }, "\uD83D\uDD25 2026 Admissions Open"), React.createElement("span", null, "UGC-DEB Approved Online Universities \u2022 Zero Cost 0% EMI Available")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: '#fed7aa'
    }
  }, "\uD83D\uDCDE Helpline: ", React.createElement("a", {
    href: "tel:18008905266",
    style: {
      color: '#fff',
      fontWeight: '700',
      textDecoration: 'none'
    }
  }, "1800-890-5266")), React.createElement("button", {
    onClick: onOpenAdminCRM,
    className: "btn btn-sm",
    style: {
      padding: '0.2rem 0.6rem',
      fontSize: '0.75rem',
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.3)'
    },
    title: "Admin CRM for Website Owner"
  }, "\uD83D\uDCCA Leads CRM (", window.leadStore ? window.leadStore.getLeads().length : 0, ")")))), React.createElement("nav", {
    className: "header-nav"
  }, React.createElement("div", {
    className: "container header-container"
  }, React.createElement("div", {
    className: "brand-logo-wrap",
    onClick: function onClick() {
      return handleNavClick('home');
    }
  }, React.createElement("img", {
    src: "images/logo.png",
    alt: "UniversityJano.com - Explore Compare Choose",
    className: "brand-logo-img"
  })), React.createElement("ul", {
    className: "header-menu"
  }, React.createElement("li", null, React.createElement("span", {
    className: "nav-link ".concat(activePage === 'home' ? 'active' : ''),
    onClick: function onClick() {
      return handleNavClick('home');
    }
  }, "\uD83C\uDFE0 Home")), React.createElement("li", null, React.createElement("a", {
    href: "/universities/index.html",
    className: "nav-link ".concat(activePage === 'universities' ? 'active' : ''),
    style: {
      textDecoration: 'none'
    }
  }, "\uD83C\uDFEB All Universities")), React.createElement("li", null, React.createElement("a", {
    href: "/compare.html",
    className: "nav-link ".concat(activePage === 'compare' ? 'active' : ''),
    style: {
      textDecoration: 'none'
    }
  }, "\u2696\uFE0F Compare Colleges ", compareList && compareList.length > 0 && React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginLeft: '4px'
    }
  }, compareList.length))), React.createElement("li", null, React.createElement("a", {
    href: "/roi-calculator.html",
    className: "nav-link ".concat(activePage === 'roi-calculator' ? 'active' : ''),
    style: {
      textDecoration: 'none'
    }
  }, "\uD83D\uDCC8 Salary & ROI")), React.createElement("li", null, React.createElement("a", {
    href: "/emi-calculator.html",
    className: "nav-link ".concat(activePage === 'emi-calculator' ? 'active' : ''),
    style: {
      textDecoration: 'none'
    }
  }, "\uD83D\uDCB3 0% EMI Planner")), React.createElement("li", null, React.createElement("a", {
    href: "/ugc-verifier.html",
    className: "nav-link ".concat(activePage === 'ugc-verifier' ? 'active' : ''),
    style: {
      textDecoration: 'none'
    }
  }, "\uD83D\uDEE1\uFE0F UGC Approvals")), React.createElement("li", null, React.createElement("a", {
    href: "/blog/",
    className: "nav-link",
    style: {
      textDecoration: 'none'
    }
  }, "\u270D\uFE0F Blog"))), React.createElement("div", {
    className: "header-actions"
  }, React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: onOpenWizard
  }, "\u26A1 2-Min Match"), React.createElement("a", {
    href: "https://wa.me/919599128500?text=Hi%2C%20I%20want%20free%20counselling%20for%20Online%20Degrees",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-sm",
    style: {
      background: '#25D366',
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.35rem',
      fontWeight: '700'
    }
  }, React.createElement("span", null, "\uD83D\uDCAC"), " WhatsApp"), React.createElement("button", {
    className: "mobile-menu-toggle ".concat(isMobileOpen ? 'is-active' : ''),
    onClick: function onClick() {
      return setIsMobileOpen(!isMobileOpen);
    },
    "aria-label": "Toggle Menu"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null))))), React.createElement("div", {
    className: "mobile-nav-overlay ".concat(isMobileOpen ? 'is-open' : ''),
    onClick: function onClick() {
      return setIsMobileOpen(false);
    }
  }), React.createElement("div", {
    className: "mobile-nav-drawer ".concat(isMobileOpen ? 'is-open' : '')
  }, React.createElement("div", {
    className: "mobile-drawer-header"
  }, React.createElement("img", {
    src: "images/logo.png",
    alt: "UniversityJano Logo",
    style: {
      height: '38px',
      width: 'auto'
    }
  }), React.createElement("button", {
    className: "mobile-drawer-close",
    onClick: function onClick() {
      return setIsMobileOpen(false);
    }
  }, "\u2715")), React.createElement("div", {
    className: "mobile-drawer-body"
  }, React.createElement("div", {
    className: "mobile-drawer-section-title"
  }, "Navigation Menu"), React.createElement("ul", {
    className: "mobile-drawer-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "/",
    className: "mobile-drawer-link",
    onClick: function onClick() {
      return setIsMobileOpen(false);
    }
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83C\uDFE0"), " Home")), React.createElement("li", null, React.createElement("a", {
    href: "/universities/index.html",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83C\uDFEB"), " All 25+ Online Universities", React.createElement("span", {
    className: "mobile-drawer-badge"
  }, "Directory"))), React.createElement("li", null, React.createElement("a", {
    href: "/compare.html",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\u2696\uFE0F"), " Compare Colleges", React.createElement("span", {
    className: "mobile-drawer-badge",
    style: {
      background: '#1a56db'
    }
  }, "4-Way"))), React.createElement("li", null, React.createElement("a", {
    href: "/roi-calculator.html",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83D\uDCC8"), " Salary Jump & ROI Calculator")), React.createElement("li", null, React.createElement("a", {
    href: "/emi-calculator.html",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83D\uDCB3"), " 0% Interest EMI Budget Planner")), React.createElement("li", null, React.createElement("a", {
    href: "/ugc-verifier.html",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83D\uDEE1\uFE0F"), " UGC-DEB Government Approvals")), React.createElement("li", null, React.createElement("a", {
    href: "/blog/",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\u270D\uFE0F"), " Career & Degree Blogs"))), React.createElement("div", {
    className: "mobile-drawer-section-title",
    style: {
      marginTop: '1.25rem'
    }
  }, "Popular Online Degrees"), React.createElement("ul", {
    className: "mobile-drawer-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "/universities/index.html?degree=MBA",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83C\uDF93"), " Online MBA Programs")), React.createElement("li", null, React.createElement("a", {
    href: "/universities/index.html?degree=MCA",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83D\uDCBB"), " Online MCA Programs")), React.createElement("li", null, React.createElement("a", {
    href: "/universities/index.html?degree=BBA",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\uD83D\uDCCA"), " Online BBA Programs")), React.createElement("li", null, React.createElement("a", {
    href: "/universities/index.html?degree=BCA",
    className: "mobile-drawer-link"
  }, React.createElement("span", {
    className: "link-icon"
  }, "\u26A1"), " Online BCA Programs")))), React.createElement("div", {
    className: "mobile-drawer-footer"
  }, React.createElement("a", {
    href: "https://wa.me/919599128500?text=Hi%2C%20I%20want%20free%20counselling%20for%20Online%20Degrees",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-block",
    style: {
      background: '#25D366',
      borderColor: '#25D366',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontWeight: '700'
    }
  }, React.createElement("span", null, "\uD83D\uDCAC"), " WhatsApp Direct (Instant)"), React.createElement("a", {
    href: "tel:18008905266",
    className: "btn btn-secondary btn-block",
    style: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontWeight: '700'
    }
  }, React.createElement("span", null, "\uD83D\uDCDE"), " Call Helpline (1800-890-5266)"))), React.createElement("div", {
    className: "mobile-bottom-dock"
  }, React.createElement("a", {
    href: "/",
    className: "dock-item ".concat(activePage === 'home' ? 'is-active' : '')
  }, React.createElement("span", {
    className: "dock-icon"
  }, "\uD83C\uDFE0"), React.createElement("span", {
    className: "dock-label"
  }, "Home")), React.createElement("a", {
    href: "/universities/index.html",
    className: "dock-item"
  }, React.createElement("span", {
    className: "dock-icon"
  }, "\uD83C\uDFEB"), React.createElement("span", {
    className: "dock-label"
  }, "Colleges")), React.createElement("a", {
    href: "/compare.html",
    className: "dock-item"
  }, React.createElement("span", {
    className: "dock-icon"
  }, "\u2696\uFE0F"), React.createElement("span", {
    className: "dock-label"
  }, "Compare"), compareList && compareList.length > 0 && React.createElement("span", {
    className: "dock-badge"
  }, compareList.length)), React.createElement("a", {
    href: "/roi-calculator.html",
    className: "dock-item"
  }, React.createElement("span", {
    className: "dock-icon"
  }, "\uD83D\uDCC8"), React.createElement("span", {
    className: "dock-label"
  }, "ROI / EMI")), React.createElement("a", {
    href: "https://wa.me/919599128500?text=Hi%2C%20I%20want%20free%20counselling%20for%20Online%20Degrees",
    target: "_blank",
    rel: "noopener",
    className: "dock-item",
    style: {
      color: '#25D366'
    }
  }, React.createElement("span", {
    className: "dock-icon"
  }, "\uD83D\uDCAC"), React.createElement("span", {
    className: "dock-label"
  }, "WhatsApp"))));
};
window.HeroSection = function (_ref2) {
  var searchQuery = _ref2.searchQuery,
    onSearchChange = _ref2.onSearchChange,
    selectedDegree = _ref2.selectedDegree,
    onSelectDegree = _ref2.onSelectDegree,
    onOpenWizard = _ref2.onOpenWizard,
    onOpenCounselling = _ref2.onOpenCounselling;
  var degrees = ['All', 'MBA', 'MCA', 'BBA', 'BCA', 'M.Sc', 'B.Com', 'M.Tech'];
  return React.createElement("section", {
    className: "hero-wrapper"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement("div", {
    className: "hero-badge-tag"
  }, React.createElement("span", null, "\uD83C\uDDEE\uD83C\uDDF3 India's #1 AI-Powered Online Degree Portal")), React.createElement("h1", {
    className: "hero-title"
  }, "Sahi University Jano, ", React.createElement("br", null), React.createElement("span", {
    className: "text-gradient-orange"
  }, "Sahi Career Chuno!")), React.createElement("p", {
    className: "hero-desc"
  }, "Compare 25+ UGC-DEB approved top Indian online universities. Discover authentic fees, NAAC grades, 0% EMI plans, and placement records. 100% unbiased & free guidance."), React.createElement("div", {
    className: "hero-search-box"
  }, React.createElement("div", {
    className: "search-input-wrap"
  }, React.createElement("span", {
    style: {
      fontSize: '1.25rem'
    }
  }, "\uD83D\uDD0D"), React.createElement("input", {
    type: "text",
    placeholder: "Search by University (e.g. Manipal, NMIMS) or Degree (e.g. Online MBA)...",
    value: searchQuery,
    onChange: function onChange(e) {
      return onSearchChange(e.target.value);
    }
  })), React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      var el = document.getElementById('universities-section');
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, "Search Universities")), React.createElement("div", {
    className: "hero-degree-pills"
  }, React.createElement("span", null, "Popular Degrees:"), degrees.map(function (deg) {
    return React.createElement("button", {
      key: deg,
      className: "degree-pill-btn ".concat(selectedDegree === deg ? 'active' : ''),
      onClick: function onClick() {
        return onSelectDegree(deg);
      }
    }, deg === 'All' ? '⚡ All Degrees' : "Online ".concat(deg));
  }))), React.createElement("div", null, React.createElement("div", {
    className: "hero-interactive-card"
  }, React.createElement("div", {
    className: "hero-card-header"
  }, React.createElement("div", null, React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginBottom: '0.4rem'
    }
  }, "\u26A1 100% Free AI Tool"), React.createElement("h3", {
    className: "hero-card-title"
  }, "Confused Which Online University to Choose?"))), React.createElement("p", {
    style: {
      color: '#e2e8f0',
      fontSize: '0.925rem',
      marginBottom: '1rem'
    }
  }, "Don't waste weeks talking to unverified agents. Answer 4 quick questions and get an instant AI-matched shortlist with exact fees & placement data."), React.createElement("div", {
    className: "hero-trust-chips"
  }, React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDEE1\uFE0F"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "100% UGC-DEB"), React.createElement("span", null, "Govt. Entitled"))), React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDCB3"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "Zero-Cost EMI"), React.createElement("span", null, "Start @ \u20B92,200/mo"))), React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDCCA"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "Side-by-Side"), React.createElement("span", null, "Compare 4 Colleges"))), React.createElement("div", {
    className: "trust-chip"
  }, React.createElement("div", {
    className: "chip-icon"
  }, "\uD83D\uDCBC"), React.createElement("div", {
    className: "chip-text"
  }, React.createElement("strong", null, "Placement Cell"), React.createElement("span", null, "Top MNC Drives")))), React.createElement("button", {
    className: "btn btn-primary btn-lg btn-block",
    onClick: onOpenWizard,
    style: {
      fontWeight: '700'
    }
  }, "\u2728 Suggest Me A College in 2 Mins \u2192"), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '0.85rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.775rem',
      color: '#cbd5e1'
    }
  }, "\uD83D\uDD12 50,000+ Indian students already guided \u2022 Zero spam guarantee")))))));
};
window.UniversityCard = function (_ref3) {
  var university = _ref3.university,
    selectedDegree = _ref3.selectedDegree,
    onViewDetails = _ref3.onViewDetails,
    onOpenLeadModal = _ref3.onOpenLeadModal,
    onToggleCompare = _ref3.onToggleCompare,
    isComparing = _ref3.isComparing;
  var currentCourse = university.popularCourses.find(function (c) {
    return selectedDegree === 'All' ? true : c.degree === selectedDegree;
  }) || university.popularCourses[0];
  return React.createElement("div", {
    className: "uni-card"
  }, university.badge && React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: '1.5rem',
      background: university.featured ? 'linear-gradient(135deg, #ff7a00, #ff9100)' : 'var(--navy-800)',
      color: '#ffffff',
      padding: '0.2rem 0.75rem',
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '700',
      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
      zIndex: 2
    }
  }, "\u2B50 ", university.badge), React.createElement("div", {
    className: "uni-card-body"
  }, React.createElement("div", {
    className: "uni-logo-col"
  }, React.createElement("div", {
    className: "uni-logo-box",
    style: {
      borderColor: university.logoColor,
      color: university.logoColor
    },
    onClick: function onClick() {
      return onViewDetails(university);
    },
    role: "button",
    tabIndex: 0
  }, university.logoText), React.createElement("div", {
    className: "uni-rating-tag"
  }, React.createElement("span", null, "\u2605 ", university.metrics.rating), React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: '400',
      fontSize: '0.75rem'
    }
  }, "(", university.metrics.reviewCount, ")")), React.createElement("div", {
    style: {
      marginTop: '0.5rem'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.7rem'
    }
  }, "\u2713 UGC-DEB Verified"))), React.createElement("div", {
    className: "uni-info-col"
  }, React.createElement("h3", {
    onClick: function onClick() {
      return onViewDetails(university);
    }
  }, university.name), React.createElement("div", {
    className: "uni-meta-location"
  }, React.createElement("span", null, "\uD83D\uDCCD ", university.city, ", ", university.state), React.createElement("span", null, "\u2022"), React.createElement("span", null, "Est. ", university.foundedYear), React.createElement("span", null, "\u2022"), React.createElement("span", {
    style: {
      color: 'var(--blue-600)',
      fontWeight: '600'
    }
  }, university.universityType)), React.createElement("div", {
    className: "uni-accreditations-row"
  }, React.createElement("span", {
    className: "badge badge-purple"
  }, "\uD83C\uDFC6 NAAC ", university.accreditations.naacGrade, " (", university.accreditations.naacScore, ")"), React.createElement("span", {
    className: "badge badge-blue"
  }, "\uD83D\uDCDC ", university.accreditations.nirfRank), university.accreditations.wesRecognized && React.createElement("span", {
    className: "badge badge-orange"
  }, "\uD83C\uDF10 WES (USA/Canada)"), university.accreditations.aicteApproved && React.createElement("span", {
    className: "badge badge-success"
  }, "\u2699\uFE0F AICTE Approved")), React.createElement("ul", {
    className: "uni-perks-list"
  }, React.createElement("li", null, React.createElement("span", null, "\uD83D\uDCBB"), " ", university.examMode.includes('100% Online') ? '100% Online Exam from Home' : 'Center Exam'), React.createElement("li", null, React.createElement("span", null, "\u26A1"), " ", currentCourse.specializations ? "".concat(currentCourse.specializations.length, "+ Specializations") : 'Industry Curriculum'), React.createElement("li", null, React.createElement("span", null, "\uD83E\uDD1D"), " ", university.metrics.hiringPartnersCount, " Hiring Partners"))), React.createElement("div", {
    className: "uni-stats-col"
  }, React.createElement("div", {
    className: "stat-metric-block"
  }, React.createElement("div", {
    className: "metric-label"
  }, "Course: Online ", currentCourse.degree), React.createElement("div", {
    className: "metric-value price"
  }, window.helpers.formatINR(currentCourse.totalFee)), React.createElement("div", {
    className: "metric-sub"
  }, window.helpers.formatINR(currentCourse.perSemFee), " / Semester")), React.createElement("div", {
    className: "stat-metric-block"
  }, React.createElement("div", {
    className: "metric-label"
  }, "Placement Record"), React.createElement("div", {
    className: "metric-value"
  }, "\u20B9", university.metrics.highestCtc, " ", React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      fontWeight: '500',
      color: 'var(--text-muted)'
    }
  }, "Highest")), React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Avg: \u20B9", university.metrics.avgCtc))), React.createElement("div", {
    className: "uni-actions-col"
  }, React.createElement("button", {
    className: "btn btn-primary btn-block",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Apply to ".concat(university.shortName),
        university: university.name,
        course: "Online ".concat(currentCourse.degree),
        source: 'University Card - Apply Button'
      });
    }
  }, "Apply for Admission"), React.createElement("button", {
    className: "btn btn-secondary btn-block btn-sm",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Download ".concat(university.shortName, " Prospectus & Syllabus"),
        university: university.name,
        course: "Online ".concat(currentCourse.degree),
        type: 'prospectus',
        source: 'University Card - Download Brochure'
      });
    }
  }, "\uD83D\uDCE5 Download Prospectus"), React.createElement("button", {
    className: "btn btn-sm",
    style: {
      background: 'transparent',
      color: 'var(--orange-600)',
      border: 'none',
      padding: '0.25rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onViewDetails(university);
    }
  }, "Explore Full University Page \u2192"), React.createElement("label", {
    className: "compare-checkbox-label"
  }, React.createElement("input", {
    type: "checkbox",
    checked: isComparing,
    onChange: function onChange() {
      return onToggleCompare(university);
    }
  }), React.createElement("span", null, isComparing ? '✓ Comparing' : '+ Add to Compare')))));
};
window.FilterSidebar = function (_ref4) {
  var selectedDegree = _ref4.selectedDegree,
    onSelectDegree = _ref4.onSelectDegree,
    selectedNaac = _ref4.selectedNaac,
    onSelectNaac = _ref4.onSelectNaac,
    maxBudget = _ref4.maxBudget,
    onBudgetChange = _ref4.onBudgetChange,
    onlyOnlineExam = _ref4.onlyOnlineExam,
    onToggleOnlineExam = _ref4.onToggleOnlineExam,
    onlyEmi = _ref4.onlyEmi,
    onToggleEmi = _ref4.onToggleEmi,
    onResetFilters = _ref4.onResetFilters;
  var degrees = [{
    id: 'All',
    label: 'All Degrees'
  }, {
    id: 'MBA',
    label: 'Online MBA'
  }, {
    id: 'MCA',
    label: 'Online MCA'
  }, {
    id: 'BBA',
    label: 'Online BBA'
  }, {
    id: 'BCA',
    label: 'Online BCA'
  }, {
    id: 'M.Sc',
    label: 'Online M.Sc (Data Science)'
  }, {
    id: 'B.Com',
    label: 'Online B.Com'
  }, {
    id: 'M.Tech',
    label: 'M.Tech (Working Execs)'
  }];
  var naacGrades = ['All', 'A++', 'A+'];
  return React.createElement("aside", {
    className: "filter-card"
  }, React.createElement("div", {
    className: "filter-header"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.1rem'
    }
  }, "\u2699\uFE0F"), React.createElement("h4", {
    style: {
      margin: 0
    }
  }, "Filter Colleges")), React.createElement("button", {
    onClick: onResetFilters,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--primary-600)',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  }, "Reset All")), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "Degree Program")), React.createElement("div", {
    className: "filter-options"
  }, degrees.map(function (d) {
    return React.createElement("label", {
      key: d.id,
      className: "filter-label"
    }, React.createElement("input", {
      type: "radio",
      name: "degreeRadio",
      checked: selectedDegree === d.id,
      onChange: function onChange() {
        return onSelectDegree(d.id);
      }
    }), React.createElement("span", null, d.label));
  }))), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "Maximum Total Fee"), React.createElement("span", {
    style: {
      color: 'var(--primary-600)'
    }
  }, window.helpers.formatINR(maxBudget))), React.createElement("div", {
    className: "slider-container"
  }, React.createElement("input", {
    type: "range",
    min: "40000",
    max: "300000",
    step: "10000",
    value: maxBudget,
    onChange: function onChange(e) {
      return onBudgetChange(Number(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B940,000"), React.createElement("span", null, "\u20B93.0 Lakhs")))), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "NAAC Grade")), React.createElement("div", {
    className: "filter-options"
  }, naacGrades.map(function (grade) {
    return React.createElement("label", {
      key: grade,
      className: "filter-label"
    }, React.createElement("input", {
      type: "radio",
      name: "naacRadio",
      checked: selectedNaac === grade,
      onChange: function onChange() {
        return onSelectNaac(grade);
      }
    }), React.createElement("span", null, grade === 'All' ? 'All Accredited' : "NAAC ".concat(grade, " Rated Only")));
  }))), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("div", {
    className: "filter-title"
  }, React.createElement("span", null, "Preferences & Features")), React.createElement("div", {
    className: "filter-options"
  }, React.createElement("label", {
    className: "filter-label"
  }, React.createElement("input", {
    type: "checkbox",
    checked: onlyOnlineExam,
    onChange: function onChange(e) {
      return onToggleOnlineExam(e.target.checked);
    }
  }), React.createElement("span", null, "\uD83C\uDFE0 100% Online Exam (At Home)")), React.createElement("label", {
    className: "filter-label"
  }, React.createElement("input", {
    type: "checkbox",
    checked: onlyEmi,
    onChange: function onChange(e) {
      return onToggleEmi(e.target.checked);
    }
  }), React.createElement("span", null, "\uD83D\uDCB3 0% Interest Monthly EMI")))), React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: 'var(--primary-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--primary-200)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.25rem'
    }
  }, "\uD83D\uDC68\u200D\uD83C\uDFEB"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      color: 'var(--primary-900)'
    }
  }, "Need Expert Recommendation?"), React.createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      margin: '0.35rem 0 0.75rem 0'
    }
  }, "Talk to our senior admission counselors for free."), React.createElement("button", {
    className: "btn btn-primary btn-sm btn-block",
    onClick: function onClick() {
      return window.open('https://wa.me/919876543210?text=Hi%20UniversityJano,%20I%20need%20help%20choosing%20an%20online%20degree', '_blank');
    }
  }, "\uD83D\uDCAC WhatsApp Counselor")));
};
window.CompareModal = function (_ref5) {
  var compareList = _ref5.compareList,
    onClose = _ref5.onClose,
    onRemoveUniversity = _ref5.onRemoveUniversity,
    onOpenLeadModal = _ref5.onOpenLeadModal,
    _ref5$selectedDegree = _ref5.selectedDegree,
    selectedDegree = _ref5$selectedDegree === void 0 ? 'MBA' : _ref5$selectedDegree;
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    highlightDiff = _React$useState4[0],
    setHighlightDiff = _React$useState4[1];
  var _React$useState5 = React.useState(selectedDegree === 'All' ? 'MBA' : selectedDegree),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    activeDegree = _React$useState6[0],
    setActiveDegree = _React$useState6[1];
  if (!compareList || compareList.length === 0) {
    return null;
  }
  var comparisonRows = window.helpers.getComparisonDifferences(compareList, activeDegree);
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-xl",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("span", {
    className: "badge badge-purple"
  }, "\u2696\uFE0F Side-by-Side Comparison"), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Comparing ", compareList.length, " of 4 Universities")), React.createElement("h3", {
    style: {
      marginTop: '0.35rem'
    }
  }, "Detailed University Comparison Matrix")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked: highlightDiff,
    onChange: function onChange(e) {
      return setHighlightDiff(e.target.checked);
    },
    style: {
      width: '16px',
      height: '16px',
      accentColor: 'var(--primary-600)'
    }
  }), React.createElement("span", null, "Highlight Differences")), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715"))), React.createElement("div", {
    className: "modal-body",
    style: {
      padding: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: 'var(--text-muted)'
    }
  }, "Comparing Course:"), ['MBA', 'MCA', 'BBA', 'BCA', 'M.Sc'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      className: "btn btn-sm ".concat(activeDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setActiveDegree(deg);
      }
    }, "Online ", deg);
  })), React.createElement("div", {
    className: "comparison-table-wrapper"
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      minWidth: '180px',
      width: '20%'
    }
  }, "Key Parameters"), compareList.map(function (uni) {
    return React.createElement("th", {
      key: uni.id,
      style: {
        minWidth: '220px',
        textAlign: 'center',
        verticalAlign: 'top',
        position: 'relative'
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return onRemoveUniversity(uni.id);
      },
      style: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: '#fee2e2',
        color: '#ef4444',
        border: 'none',
        borderRadius: '50%',
        width: '22px',
        height: '22px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '11px'
      },
      title: "Remove from comparison"
    }, "\u2715"), React.createElement("div", {
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '10px',
        background: '#f8fafc',
        border: "2px solid ".concat(uni.logoColor),
        color: uni.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.75rem',
        margin: '0 auto 0.5rem auto'
      }
    }, uni.logoText), React.createElement("div", {
      style: {
        fontWeight: '700',
        fontSize: '0.95rem',
        color: 'var(--primary-900)'
      }
    }, uni.shortName), React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem'
      }
    }, "\uD83D\uDCCD ", uni.city, ", ", uni.state), React.createElement("button", {
      className: "btn btn-primary btn-sm btn-block",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Apply to ".concat(uni.shortName),
          university: uni.name,
          course: "Online ".concat(activeDegree),
          source: 'Comparison Matrix CTA'
        });
      }
    }, "Enquire / Apply"));
  }))), React.createElement("tbody", null, comparisonRows.map(function (row, idx) {
    var isHighlighted = highlightDiff && row.highlight;
    return React.createElement("tr", {
      key: idx,
      className: isHighlighted ? 'diff-highlight' : ''
    }, React.createElement("td", {
      style: {
        fontWeight: '600',
        color: 'var(--primary-900)'
      }
    }, React.createElement("div", null, row.label), React.createElement("span", {
      style: {
        fontSize: '0.7rem',
        color: 'var(--text-subtle)',
        textTransform: 'uppercase'
      }
    }, row.category)), row.values.map(function (valObj, vIdx) {
      return React.createElement("td", {
        key: vIdx,
        style: {
          textAlign: 'center',
          verticalAlign: 'middle'
        }
      }, valObj.badge ? React.createElement("span", {
        className: "badge ".concat(valObj.badge)
      }, valObj.val) : React.createElement("div", {
        style: {
          fontWeight: '600',
          color: 'var(--text-main)'
        }
      }, valObj.val), valObj.subtext && React.createElement("div", {
        style: {
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '2px'
        }
      }, valObj.subtext));
    }));
  })))), React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      padding: '1.25rem',
      backgroundColor: 'var(--primary-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--primary-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("strong", {
    style: {
      color: 'var(--primary-900)'
    }
  }, "Still undecided between these options?"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.85rem'
    }
  }, "Schedule a 10-minute free profile evaluation with our senior academic advisor.")), React.createElement("button", {
    className: "btn btn-accent btn-sm",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: 'Get Free Comparative Evaluation from Senior Counselor',
        course: "Online ".concat(activeDegree),
        notes: "Comparing: ".concat(compareList.map(function (u) {
          return u.shortName;
        }).join(' vs ')),
        source: 'Comparison Matrix Bottom CTA'
      });
    }
  }, "Get Free Comparative Call")))));
};
window.AIWizardModal = function (_ref6) {
  var onClose = _ref6.onClose,
    onCompleteShortlist = _ref6.onCompleteShortlist,
    onOpenLeadModal = _ref6.onOpenLeadModal;
  var _React$useState7 = React.useState(1),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    step = _React$useState8[0],
    setStep = _React$useState8[1];
  var _React$useState9 = React.useState({
      qualification: 'Graduation Completed',
      degree: 'MBA',
      specialization: 'FinTech & Analytics',
      budget: 180000,
      learningMode: '100% Online with Live Weekend Classes',
      emiNeeded: 'Yes, need 0% EMI',
      name: '',
      phone: '',
      email: '',
      city: ''
    }),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    preferences = _React$useState10[0],
    setPreferences = _React$useState10[1];
  var _React$useState11 = React.useState([]),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    matchedResults = _React$useState12[0],
    setMatchedResults = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    submitting = _React$useState14[0],
    setSubmitting = _React$useState14[1];
  var qualifications = ['10+2 / Intermediate', 'Graduation Completed (BA/B.Sc/B.Com/BBA)', 'Engineering / B.Tech / BCA Graduate', 'Working Professional (2+ Yrs Experience)'];
  var degreesList = [{
    id: 'MBA',
    name: 'Online MBA',
    icon: '💼'
  }, {
    id: 'MCA',
    name: 'Online MCA',
    icon: '💻'
  }, {
    id: 'BBA',
    name: 'Online BBA',
    icon: '📈'
  }, {
    id: 'BCA',
    name: 'Online BCA',
    icon: '⚡'
  }, {
    id: 'M.Sc',
    name: 'Online M.Sc (Data Science)',
    icon: '📊'
  }, {
    id: 'M.Tech',
    name: 'M.Tech for Working Execs',
    icon: '⚙️'
  }];
  var handleNext = function handleNext() {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmitAndRecommend();
    }
  };
  var handleSubmitAndRecommend = function handleSubmitAndRecommend() {
    if (!preferences.phone || preferences.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number to generate your AI match report.');
      return;
    }
    setSubmitting(true);
    window.leadStore.addLead({
      name: preferences.name || 'AI Quiz Student',
      phone: preferences.phone,
      email: preferences.email,
      city: preferences.city || 'India',
      course: "Online ".concat(preferences.degree),
      specialization: preferences.specialization,
      budget: "\u20B9".concat(preferences.budget.toLocaleString('en-IN')),
      source: 'AI 2-Min Wizard Funnel'
    });
    var allUnis = window.UNIVERSITIES_DATA || [];
    var scored = allUnis.map(function (u) {
      var matchScore = window.helpers.calculateCollegeMatchScore(u, preferences);
      var course = u.popularCourses.find(function (c) {
        return c.degree === preferences.degree;
      }) || u.popularCourses[0];
      return _objectSpread(_objectSpread({}, u), {}, {
        matchScore: matchScore,
        matchedCourse: course
      });
    });
    scored.sort(function (a, b) {
      return b.matchScore - a.matchScore;
    });
    setTimeout(function () {
      setMatchedResults(scored.slice(0, 3));
      setSubmitting(false);
      setStep(5);
    }, 600);
  };
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-lg",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("span", {
    className: "badge badge-amber"
  }, "\u26A1 AI Matchmaker"), React.createElement("h3", {
    style: {
      margin: 0
    }
  }, step <= 4 ? 'Suggest Me A College in 2 Mins' : '🎯 Your Personalized AI University Shortlist')), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715")), React.createElement("div", {
    className: "modal-body"
  }, step <= 4 && React.createElement("div", null, React.createElement("div", {
    className: "wizard-progress-bar"
  }, [1, 2, 3, 4].map(function (s) {
    return React.createElement("div", {
      key: s,
      className: "wizard-step-node ".concat(step === s ? 'active' : step > s ? 'completed' : '')
    }, step > s ? '✓' : s);
  })), step === 1 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "1. What is your current highest qualification?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "This helps our AI check your eligibility across NAAC A++ universities."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }
  }, qualifications.map(function (q) {
    return React.createElement("div", {
      key: q,
      className: "wizard-option-card ".concat(preferences.qualification === q ? 'selected' : ''),
      onClick: function onClick() {
        return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
          qualification: q
        }));
      }
    }, React.createElement("span", {
      style: {
        fontSize: '1.25rem'
      }
    }, "\uD83C\uDF93"), React.createElement("strong", {
      style: {
        fontSize: '0.95rem'
      }
    }, q));
  }))), step === 2 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "2. Which online degree are you planning to pursue?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "Select your target program to compare curriculum & specializations."), React.createElement("div", {
    className: "wizard-options-grid"
  }, degreesList.map(function (d) {
    return React.createElement("div", {
      key: d.id,
      className: "wizard-option-card ".concat(preferences.degree === d.id ? 'selected' : ''),
      onClick: function onClick() {
        return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
          degree: d.id
        }));
      }
    }, React.createElement("span", {
      style: {
        fontSize: '1.5rem'
      }
    }, d.icon), React.createElement("div", null, React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '1rem'
      }
    }, d.name), React.createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "UGC-DEB Entitled")));
  }))), step === 3 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "3. What is your total budget for the degree?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "All listed universities offer monthly zero-interest EMI financing."), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--primary-50)',
      borderRadius: 'var(--radius-lg)',
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontWeight: '600'
    }
  }, "Your Budget Cap:"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.25rem'
    }
  }, window.helpers.formatINR(preferences.budget))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "300000",
    step: "10000",
    value: preferences.budget,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        budget: Number(e.target.value)
      }));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B950,000"), React.createElement("span", null, "\u20B93.0 Lakhs"))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem'
    }
  }, React.createElement("div", {
    className: "wizard-option-card ".concat(preferences.emiNeeded.includes('Yes') ? 'selected' : ''),
    onClick: function onClick() {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        emiNeeded: 'Yes, need 0% EMI'
      }));
    },
    style: {
      flex: 1
    }
  }, React.createElement("span", null, "\uD83D\uDCB3"), React.createElement("div", null, React.createElement("strong", null, "Need 0% EMI"), React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Pay \u20B92,500 - \u20B94,500/mo"))), React.createElement("div", {
    className: "wizard-option-card ".concat(preferences.emiNeeded.includes('Full') ? 'selected' : ''),
    onClick: function onClick() {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        emiNeeded: 'Full payment per semester'
      }));
    },
    style: {
      flex: 1
    }
  }, React.createElement("span", null, "\uD83D\uDCB5"), React.createElement("div", null, React.createElement("strong", null, "Pay Per Semester"), React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Standard semester fees"))))), step === 4 && React.createElement("div", null, React.createElement("h4", {
    style: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "4. Where should we send your AI Shortlist & Fee Report?"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      marginBottom: '1.25rem'
    }
  }, "Receive instant PDF prospectus and personalized scholarships on WhatsApp."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Full Name *"), React.createElement("input", {
    type: "text",
    placeholder: "e.g. Rahul Sharma",
    className: "btn-secondary",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.name,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        name: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "WhatsApp / Mobile Number *"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      padding: '0.75rem',
      background: '#e2e8f0',
      borderRadius: '8px',
      fontWeight: '600'
    }
  }, "+91"), React.createElement("input", {
    type: "tel",
    placeholder: "98765 43210",
    style: {
      flex: 1,
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.phone,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        phone: e.target.value
      }));
    }
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Email Address"), React.createElement("input", {
    type: "email",
    placeholder: "rahul@example.com",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.email,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        email: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "City"), React.createElement("input", {
    type: "text",
    placeholder: "e.g. Pune / Delhi / Bangalore",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: preferences.city,
    onChange: function onChange(e) {
      return setPreferences(_objectSpread(_objectSpread({}, preferences), {}, {
        city: e.target.value
      }));
    }
  }))))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
      paddingTop: '1.25rem',
      borderTop: '1px solid var(--border-light)'
    }
  }, step > 1 ? React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: function onClick() {
      return setStep(step - 1);
    }
  }, "\u2190 Back") : React.createElement("div", null), React.createElement("button", {
    className: "btn btn-amber",
    onClick: handleNext,
    disabled: submitting
  }, submitting ? '🤖 Computing Matches...' : step === 4 ? '✨ Generate My College Matches →' : 'Continue Next →'))), step === 5 && React.createElement("div", null, React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '2rem'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.85rem',
      padding: '0.35rem 0.85rem'
    }
  }, "\uD83C\uDF89 Match Report Ready"), React.createElement("h3", {
    style: {
      marginTop: '0.5rem'
    }
  }, "Top 3 Recommended Universities for Online ", preferences.degree), React.createElement("p", {
    style: {
      fontSize: '0.9rem'
    }
  }, "Matched based on your budget of ", window.helpers.formatINR(preferences.budget), ", qualification, and NAAC ratings.")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }, matchedResults.map(function (uni, idx) {
    return React.createElement("div", {
      key: uni.id,
      style: {
        border: idx === 0 ? '2px solid var(--accent-emerald)' : '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        background: idx === 0 ? 'linear-gradient(to right, #f0fdf4, #ffffff)' : '#ffffff',
        position: 'relative'
      }
    }, idx === 0 && React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-12px',
        left: '1.5rem',
        background: 'var(--accent-emerald)',
        color: '#ffffff',
        padding: '0.2rem 0.75rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.75rem',
        fontWeight: '700'
      }
    }, "\uD83D\uDC51 #1 Best Overall Match"), React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, React.createElement("div", {
      style: {
        width: '56px',
        height: '56px',
        borderRadius: '12px',
        background: '#ffffff',
        border: "2px solid ".concat(uni.logoColor),
        color: uni.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.85rem'
      }
    }, uni.logoText), React.createElement("div", null, React.createElement("h4", {
      style: {
        margin: 0,
        fontSize: '1.15rem'
      }
    }, uni.name), React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem',
        marginTop: '0.25rem'
      }
    }, React.createElement("span", {
      className: "badge badge-purple"
    }, "NAAC ", uni.accreditations.naacGrade), React.createElement("span", {
      className: "badge badge-blue"
    }, "Highest CTC \u20B9", uni.metrics.highestCtc)))), React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, React.createElement("div", {
      style: {
        fontSize: '1.5rem',
        fontWeight: '800',
        color: 'var(--accent-emerald)'
      }
    }, uni.matchScore, "% Match"), React.createElement("span", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, "Total: ", window.helpers.formatINR(uni.matchedCourse.totalFee)))), React.createElement("div", {
      style: {
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px dashed var(--border-light)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }
    }, React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }
    }, "\u2713 ", uni.pros[0]), React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem'
      }
    }, React.createElement("button", {
      className: "btn btn-secondary btn-sm",
      onClick: function onClick() {
        onClose();
        onOpenLeadModal({
          title: "Download ".concat(uni.shortName, " Prospectus"),
          university: uni.name,
          course: "Online ".concat(preferences.degree),
          type: 'prospectus',
          source: 'AI Wizard Results'
        });
      }
    }, "\uD83D\uDCE5 Prospectus"), React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: function onClick() {
        onClose();
        onOpenLeadModal({
          title: "Confirm Admission at ".concat(uni.shortName),
          university: uni.name,
          course: "Online ".concat(preferences.degree),
          source: 'AI Wizard Match Top CTA'
        });
      }
    }, "Apply Now \u2192"))));
  })), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '2rem'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, "Explore All Universities in Directory"))))));
};
window.ROICalculator = function (_ref7) {
  var onOpenCounselling = _ref7.onOpenCounselling;
  var _React$useState15 = React.useState(4.5),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    currentSalary = _React$useState16[0],
    setCurrentSalary = _React$useState16[1];
  var _React$useState17 = React.useState('MBA'),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    targetDegree = _React$useState18[0],
    setTargetDegree = _React$useState18[1];
  var _React$useState19 = React.useState(2),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    yearsExp = _React$useState20[0],
    setYearsExp = _React$useState20[1];
  var roi = window.helpers.calculateCareerROI(currentSalary, targetDegree, yearsExp);
  return React.createElement("section", {
    id: "roi-calc-section",
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-surface)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83D\uDCC8 Smart Career Analytics"), React.createElement("h2", {
    className: "section-title"
  }, "Online Degree ROI & Salary Growth Calculator"), React.createElement("p", {
    className: "section-subtitle"
  }, "Calculate your expected salary jump, course fee payback period in months, and 5-year career earnings before enrolling.")), React.createElement("div", {
    className: "calc-card-container"
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-900)'
    }
  }, "1. Target Online Degree:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem'
    }
  }, ['MBA', 'MCA', 'M.Sc', 'BBA', 'BCA', 'M.Tech'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      type: "button",
      className: "btn btn-sm ".concat(targetDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTargetDegree(deg);
      }
    }, deg);
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--primary-900)'
    }
  }, "2. Current Annual CTC (LPA):"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.15rem'
    }
  }, "\u20B9", currentSalary.toFixed(1), " LPA")), React.createElement("input", {
    type: "range",
    min: "2.0",
    max: "20.0",
    step: "0.5",
    value: currentSalary,
    onChange: function onChange(e) {
      return setCurrentSalary(parseFloat(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B92.0 LPA"), React.createElement("span", null, "\u20B920.0 LPA"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--primary-900)'
    }
  }, "3. Current Work Experience:"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.15rem'
    }
  }, yearsExp, " ", yearsExp === 1 ? 'Year' : 'Years')), React.createElement("input", {
    type: "range",
    min: "0",
    max: "10",
    step: "1",
    value: yearsExp,
    onChange: function onChange(e) {
      return setYearsExp(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "0 Yrs (Fresher)"), React.createElement("span", null, "10+ Yrs"))), React.createElement("div", {
    style: {
      padding: '0.85rem 1rem',
      background: 'var(--primary-50)',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.825rem',
      color: 'var(--text-muted)'
    }
  }, "\uD83D\uDCA1 ", React.createElement("em", null, "Analytics based on placement reports from 25+ UGC-DEB approved universities in India over 2024-2026."))), React.createElement("div", {
    className: "calc-result-box"
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#93c5fd',
      fontWeight: '600'
    }
  }, "Estimated Post-Degree CTC"), React.createElement("div", {
    className: "calc-result-number"
  }, "\u20B9", roi.estimatedNewSalary.toFixed(1), " LPA"), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(52, 211, 153, 0.2)',
      color: '#34d399',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.875rem'
    }
  }, "\uD83D\uDE80 +", roi.percentageHike, "% Expected Salary Hike"), React.createElement("div", {
    className: "calc-stats-breakdown"
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Payback Period"), React.createElement("strong", null, "~", roi.paybackMonths, " Months")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "5-Year Extra Earnings"), React.createElement("strong", null, "+\u20B9", roi.fiveYearGainLakhs.toFixed(1), " Lakhs")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Approx Course Fee"), React.createElement("strong", null, window.helpers.formatINR(roi.avgDegreeFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Study Flexibility"), React.createElement("strong", null, "100% Online"))), React.createElement("button", {
    className: "btn btn-amber btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: "Career Roadmap for Online ".concat(targetDegree),
        course: "Online ".concat(targetDegree),
        notes: "Current CTC: \u20B9".concat(currentSalary, " LPA -> Target: \u20B9").concat(roi.estimatedNewSalary, " LPA"),
        source: 'ROI Calculator Results CTA'
      });
    }
  }, "Get Personalized Career Transition Plan \u2192"))))));
};
window.EMICalculator = function (_ref8) {
  var onOpenCounselling = _ref8.onOpenCounselling;
  var _React$useState21 = React.useState(160000),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    courseFee = _React$useState22[0],
    setCourseFee = _React$useState22[1];
  var _React$useState23 = React.useState(24),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    tenure = _React$useState24[0],
    setTenure = _React$useState24[1];
  var _React$useState25 = React.useState(10),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    scholarshipPercent = _React$useState26[0],
    setScholarshipPercent = _React$useState26[1];
  var discountAmount = courseFee * scholarshipPercent / 100;
  var netPayable = courseFee - discountAmount;
  var monthlyEmi = Math.round(netPayable / tenure);
  return React.createElement("section", {
    id: "emi-calc-section",
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-main)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag amber"
  }, "\uD83D\uDCB3 Zero Financial Stress"), React.createElement("h2", {
    className: "section-title"
  }, "0% Interest Monthly EMI & Budget Planner"), React.createElement("p", {
    className: "section-subtitle"
  }, "Study now and pay comfortably in equal zero-cost monthly installments without any credit card or security deposits.")), React.createElement("div", {
    className: "calc-card-container"
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--primary-900)'
    }
  }, "1. University Course Fee (Total):"), React.createElement("strong", {
    style: {
      color: 'var(--primary-600)',
      fontSize: '1.15rem'
    }
  }, window.helpers.formatINR(courseFee))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "350000",
    step: "10000",
    value: courseFee,
    onChange: function onChange(e) {
      return setCourseFee(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B950,000"), React.createElement("span", null, "\u20B93.5 Lakhs"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-900)'
    }
  }, "2. Select 0% EMI Tenure:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '0.5rem'
    }
  }, [6, 12, 24, 36].map(function (m) {
    return React.createElement("button", {
      key: m,
      type: "button",
      className: "btn btn-sm ".concat(tenure === m ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTenure(m);
      }
    }, m, " Months");
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-900)'
    }
  }, "3. Early Bird / Merit Scholarship Discount:"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, [0, 10, 15, 25].map(function (p) {
    return React.createElement("button", {
      key: p,
      type: "button",
      className: "btn btn-sm ".concat(scholarshipPercent === p ? 'btn-accent' : 'btn-secondary'),
      onClick: function onClick() {
        return setScholarshipPercent(p);
      },
      style: {
        flex: 1
      }
    }, p === 0 ? 'No Coupon' : "".concat(p, "% Off"));
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      fontSize: '0.8rem',
      color: '#065f46'
    }
  }, React.createElement("span", null, "\u2713"), React.createElement("span", null, "Pre-approved NBFC partners: ", React.createElement("strong", null, "Propelld, Eduvanz, GrayQuest"), " (Zero Processing Fees)."))), React.createElement("div", {
    className: "calc-result-box",
    style: {
      background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#a7f3d0',
      fontWeight: '600'
    }
  }, "Your Monthly 0% EMI"), React.createElement("div", {
    className: "calc-result-number",
    style: {
      color: '#ffffff'
    }
  }, "\u20B9", monthlyEmi.toLocaleString('en-IN'), React.createElement("span", {
    style: {
      fontSize: '1.1rem',
      fontWeight: '500'
    }
  }, "/month")), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.85rem'
    }
  }, "\uD83C\uDF89 Zero Hidden Charges \u2022 0% Interest Rate"), React.createElement("div", {
    className: "calc-stats-breakdown",
    style: {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    }
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Original Fee"), React.createElement("strong", null, window.helpers.formatINR(courseFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Scholarship Saved"), React.createElement("strong", {
    style: {
      color: '#fef08a'
    }
  }, "- ", window.helpers.formatINR(discountAmount))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Net Payable"), React.createElement("strong", null, window.helpers.formatINR(netPayable))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#a7f3d0'
    }
  }, "Tenure"), React.createElement("strong", null, tenure, " Months"))), React.createElement("button", {
    className: "btn btn-amber btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Check 0% EMI & Scholarship Eligibility',
        notes: "Requested EMI: \u20B9".concat(monthlyEmi, "/mo for ").concat(tenure, " months on ").concat(window.helpers.formatINR(courseFee), " fee"),
        source: 'EMI Planner Tool CTA'
      });
    }
  }, "Apply for 0% EMI Approval \u2192"))))));
};
window.UGCVerifier = function (_ref9) {
  var onOpenCounselling = _ref9.onOpenCounselling;
  var _React$useState27 = React.useState('validity'),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    activeTab = _React$useState28[0],
    setActiveTab = _React$useState28[1];
  var data = window.ACCREDITATIONS_DATA;
  return React.createElement("section", {
    id: "ugc-section",
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-surface)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag"
  }, "\uD83D\uDEE1\uFE0F 100% Genuine & Legitimate"), React.createElement("h2", {
    className: "section-title"
  }, "UGC-DEB Government Approval & Degree Validity Inspector"), React.createElement("p", {
    className: "section-subtitle"
  }, "Understand how online degrees are recognized by the Government of India, UPSC, Corporate MNCs, and Global WES Evaluation.")), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0a1128 0%, #1e3a8a 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      marginBottom: '3rem',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.85rem'
    }
  }, "\uD83D\uDCDC Official Gazette of India Mandate"), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: '#93c5fd'
    }
  }, data.ugcDebNotice.source)), React.createElement("blockquote", {
    style: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      lineHeight: '1.6',
      color: '#f8fafc',
      borderLeft: '4px solid #34d399',
      paddingLeft: '1.5rem',
      margin: '1.5rem 0'
    }
  }, "\"", data.ugcDebNotice.officialGazetteQuote, "\""), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      color: '#93c5fd'
    }
  }, "\u2696\uFE0F ", React.createElement("strong", null, "Legal Summary:"), " Online degrees awarded by UGC-DEB recognized universities carry 100% identical legal validity as on-campus degrees."), React.createElement("button", {
    className: "btn btn-accent btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Verify University UGC-DEB Letter with Expert',
        source: 'UGC Gazette Header CTA'
      });
    }
  }, "Verify University Approval Letter"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem'
    }
  }, data.ugcDebNotice.validityPoints.map(function (pt, idx) {
    return React.createElement("div", {
      key: idx,
      style: {
        background: 'var(--bg-surface-alt)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        border: '1px solid var(--border-light)'
      }
    }, React.createElement("div", {
      style: {
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        background: 'var(--primary-100)',
        color: 'var(--primary-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        marginBottom: '1rem'
      }
    }, idx === 0 ? '🏛️' : idx === 1 ? '🏢' : idx === 2 ? '🌐' : '💻'), React.createElement("h4", {
      style: {
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: 'var(--primary-900)'
      }
    }, pt.title), React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: '1.5'
      }
    }, pt.description));
  })), React.createElement("div", {
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("h3", {
    style: {
      textAlign: 'center',
      marginBottom: '1.75rem'
    }
  }, "Accreditation Pillars to Check Before Enrolling"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.25rem'
    }
  }, data.accreditationTypes.map(function (acc) {
    return React.createElement("div", {
      key: acc.code,
      style: {
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("span", {
      className: "badge",
      style: {
        backgroundColor: acc.badgeColor,
        color: '#ffffff',
        marginBottom: '0.5rem'
      }
    }, acc.code), React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '0.95rem',
        color: 'var(--primary-900)',
        margin: '0.35rem 0'
      }
    }, acc.fullName), React.createElement("p", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, acc.description));
  }))), React.createElement("div", {
    style: {
      maxWidth: '840px',
      margin: '0 auto'
    }
  }, React.createElement("h3", {
    style: {
      textAlign: 'center',
      marginBottom: '1.5rem'
    }
  }, "Frequently Asked Questions on Online Degrees"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, data.frequentlyAskedQuestions.map(function (faq, fIdx) {
    return React.createElement("div", {
      key: fIdx,
      style: {
        background: 'var(--bg-main)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem'
      }
    }, React.createElement("h4", {
      style: {
        fontSize: '1rem',
        color: 'var(--primary-900)',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }
    }, React.createElement("span", null, "\u2753"), " ", faq.q), React.createElement("p", {
      style: {
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        margin: 0,
        paddingLeft: '1.5rem'
      }
    }, faq.a));
  })))));
};
window.LeadCaptureModal = function (_ref10) {
  var _ref10$initialData = _ref10.initialData,
    initialData = _ref10$initialData === void 0 ? {} : _ref10$initialData,
    onClose = _ref10.onClose,
    onSuccess = _ref10.onSuccess;
  var _React$useState29 = React.useState({
      name: '',
      phone: '',
      email: '',
      city: '',
      course: initialData.course || 'Online MBA',
      university: initialData.university || 'All UGC-DEB Universities',
      notes: initialData.notes || '',
      source: initialData.source || 'General Enquire'
    }),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    formData = _React$useState30[0],
    setFormData = _React$useState30[1];
  var _React$useState31 = React.useState(false),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    submitted = _React$useState32[0],
    setSubmitted = _React$useState32[1];
  var _React$useState33 = React.useState(false),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    loading = _React$useState34[0],
    setLoading = _React$useState34[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    var newLead = window.leadStore.addLead({
      name: formData.name || 'Enquiry Student',
      phone: formData.phone,
      email: formData.email,
      city: formData.city || 'India',
      course: formData.course,
      interestedUniversities: formData.university ? [formData.university] : [],
      source: formData.source,
      notes: formData.notes
    });
    setTimeout(function () {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess(newLead);
    }, 500);
  };
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-md",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", null, React.createElement("span", {
    className: "badge badge-success",
    style: {
      marginBottom: '0.25rem'
    }
  }, "\u2713 100% Free & Unbiased"), React.createElement("h3", {
    style: {
      margin: 0
    }
  }, initialData.title || 'Book 1-on-1 Free Expert Counselling')), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715")), React.createElement("div", {
    className: "modal-body"
  }, !submitted ? React.createElement("form", {
    onSubmit: handleSubmit
  }, React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, initialData.type === 'prospectus' ? 'Fill your details to get the official fee structure, brochure, and syllabus PDF directly on WhatsApp & Email.' : 'Talk to an expert counselor to compare UGC approvals, fee waivers, EMI options, and admission procedures.'), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Full Name *"), React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. Vikram Malhotra",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.name,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        name: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "WhatsApp / Mobile Number *"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      padding: '0.75rem',
      background: '#e2e8f0',
      borderRadius: '8px',
      fontWeight: '600'
    }
  }, "+91"), React.createElement("input", {
    type: "tel",
    required: true,
    placeholder: "98765 43210",
    style: {
      flex: 1,
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.phone,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        phone: e.target.value
      }));
    }
  }))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    }
  }, React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Email Address"), React.createElement("input", {
    type: "email",
    placeholder: "vikram@example.com",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.email,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        email: e.target.value
      }));
    }
  })), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "City / State"), React.createElement("input", {
    type: "text",
    placeholder: "e.g. Pune, Maharashtra",
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: formData.city,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        city: e.target.value
      }));
    }
  }))), React.createElement("div", null, React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '0.35rem'
    }
  }, "Interested Degree Course"), React.createElement("select", {
    style: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)',
      background: '#fff'
    },
    value: formData.course,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        course: e.target.value
      }));
    }
  }, React.createElement("option", {
    value: "Online MBA"
  }, "Online MBA (Master of Business Administration)"), React.createElement("option", {
    value: "Online MCA"
  }, "Online MCA (Master of Computer Applications)"), React.createElement("option", {
    value: "Online BBA"
  }, "Online BBA (Bachelor of Business Administration)"), React.createElement("option", {
    value: "Online BCA"
  }, "Online BCA (Bachelor of Computer Applications)"), React.createElement("option", {
    value: "Online M.Sc"
  }, "Online M.Sc (Data Science / AI)"), React.createElement("option", {
    value: "Online B.Com"
  }, "Online B.Com (Honours / General)"), React.createElement("option", {
    value: "Executive MBA / M.Tech"
  }, "Executive MBA / M.Tech (WILP)")))), React.createElement("div", {
    style: {
      marginTop: '1.75rem'
    }
  }, React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block btn-lg",
    disabled: loading
  }, loading ? 'Submitting...' : initialData.type === 'prospectus' ? '📥 Download Brochure Now' : '⚡ Request Free Callback & Roadmap')), React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '1rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-subtle)'
    }
  }, "\uD83D\uDD12 100% Confidential \u2022 Zero Agent Brokerage \u2022 UniversityJano.com Official"))) : React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '1.5rem 0'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '3rem',
      marginBottom: '0.75rem'
    }
  }, "\uD83C\uDF89"), React.createElement("h3", {
    style: {
      color: 'var(--accent-emerald)',
      marginBottom: '0.5rem'
    }
  }, "Request Submitted Successfully!"), React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, "Thank you, ", React.createElement("strong", null, formData.name || 'Student'), "! Our senior online education counselor is reviewing your profile and will connect with you via WhatsApp / Call within ", React.createElement("strong", null, "15 minutes"), " with the official prospectus and fee waivers."), React.createElement("div", {
    style: {
      padding: '1rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      marginBottom: '1.5rem',
      fontSize: '0.85rem',
      color: '#065f46'
    }
  }, "\uD83D\uDCF1 ", React.createElement("strong", null, "WhatsApp Confirmation:"), " A copy of the syllabus & scholarship voucher has been queued for ", React.createElement("strong", null, "+91 ", formData.phone), "."), React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, "Close & Continue Browsing")))));
};
window.LeadDashboardModal = function (_ref11) {
  var onClose = _ref11.onClose;
  var _React$useState35 = React.useState([]),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    leads = _React$useState36[0],
    setLeads = _React$useState36[1];
  var _React$useState37 = React.useState(''),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    searchTerm = _React$useState38[0],
    setSearchTerm = _React$useState38[1];
  var _React$useState39 = React.useState('All'),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    filterStatus = _React$useState40[0],
    setFilterStatus = _React$useState40[1];
  React.useEffect(function () {
    setLeads(window.leadStore.getLeads());
  }, []);
  var handleStatusChange = function handleStatusChange(leadId, newStatus) {
    var updated = window.leadStore.updateLeadStatus(leadId, newStatus);
    setLeads(_toConsumableArray(updated));
  };
  var handleExportCSV = function handleExportCSV() {
    window.leadStore.exportToCSV();
  };
  var filteredLeads = leads.filter(function (l) {
    var matchesSearch = !searchTerm || l.name && l.name.toLowerCase().includes(searchTerm.toLowerCase()) || l.phone && l.phone.includes(searchTerm) || l.course && l.course.toLowerCase().includes(searchTerm.toLowerCase()) || l.city && l.city.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesStatus = filterStatus === 'All' || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  return React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal-dialog modal-xl",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    className: "badge badge-purple"
  }, "\uD83D\uDC51 UniversityJano Admin"), React.createElement("span", {
    className: "badge badge-success"
  }, "Lead Generation CRM")), React.createElement("h3", {
    style: {
      margin: '0.35rem 0 0 0'
    }
  }, "Captured Student Leads (", leads.length, " Total)")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("button", {
    className: "btn btn-accent btn-sm",
    onClick: handleExportCSV
  }, "\uD83D\uDCE5 Export to CSV (Excel)"), React.createElement("button", {
    className: "modal-close-btn",
    onClick: onClose
  }, "\u2715"))), React.createElement("div", {
    className: "modal-body",
    style: {
      padding: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.25rem',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flex: 1,
      minWidth: '240px'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1rem'
    }
  }, "\uD83D\uDD0D"), React.createElement("input", {
    type: "text",
    placeholder: "Search leads by name, mobile, course, or city...",
    style: {
      width: '100%',
      padding: '0.5rem 0.85rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)'
    },
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  })), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: '600'
    }
  }, "Status:"), React.createElement("select", {
    style: {
      padding: '0.5rem 0.85rem',
      borderRadius: '8px',
      border: '1px solid var(--border-light)',
      background: '#fff'
    },
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    }
  }, React.createElement("option", {
    value: "All"
  }, "All Statuses"), React.createElement("option", {
    value: "New Lead"
  }, "New Lead"), React.createElement("option", {
    value: "Contacted"
  }, "Contacted"), React.createElement("option", {
    value: "Counselled"
  }, "Counselled"), React.createElement("option", {
    value: "Admitted"
  }, "Admitted (Enrolled)")))), React.createElement("div", {
    className: "comparison-table-wrapper",
    style: {
      maxHeight: '500px',
      overflowY: 'auto'
    }
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Student Info"), React.createElement("th", null, "Contact"), React.createElement("th", null, "Target Course"), React.createElement("th", null, "Source / Lead Magnet"), React.createElement("th", null, "Date & Time"), React.createElement("th", null, "CRM Status"))), React.createElement("tbody", null, filteredLeads.length > 0 ? filteredLeads.map(function (lead) {
    return React.createElement("tr", {
      key: lead.id
    }, React.createElement("td", null, React.createElement("strong", null, lead.name), React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "\uD83D\uDCCD ", lead.city || 'India')), React.createElement("td", null, React.createElement("div", {
      style: {
        fontWeight: '600',
        color: 'var(--primary-600)'
      }
    }, "\uD83D\uDCF1 ", lead.phone), lead.email && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "\u2709\uFE0F ", lead.email)), React.createElement("td", null, React.createElement("span", {
      className: "badge badge-blue"
    }, lead.course), lead.specialization && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '2px'
      }
    }, lead.specialization), lead.budget && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--accent-emerald)',
        fontWeight: '600'
      }
    }, "Budget: ", lead.budget)), React.createElement("td", null, React.createElement("span", {
      className: "badge badge-amber"
    }, lead.source), lead.interestedUniversities && lead.interestedUniversities.length > 0 && React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '2px'
      }
    }, Array.isArray(lead.interestedUniversities) ? lead.interestedUniversities.join(', ') : lead.interestedUniversities)), React.createElement("td", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }
    }, new Date(lead.createdAt).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })), React.createElement("td", null, React.createElement("select", {
      style: {
        padding: '0.35rem 0.6rem',
        borderRadius: '6px',
        border: '1px solid var(--border-light)',
        fontSize: '0.8rem',
        fontWeight: '600',
        background: lead.status === 'New Lead' ? '#fef3c7' : lead.status === 'Admitted' ? '#dcfce7' : '#f1f5f9',
        color: lead.status === 'New Lead' ? '#b45309' : lead.status === 'Admitted' ? '#15803d' : '#334155'
      },
      value: lead.status,
      onChange: function onChange(e) {
        return handleStatusChange(lead.id, e.target.value);
      }
    }, React.createElement("option", {
      value: "New Lead"
    }, "New Lead"), React.createElement("option", {
      value: "Contacted"
    }, "Contacted"), React.createElement("option", {
      value: "Counselled"
    }, "Counselled"), React.createElement("option", {
      value: "Admitted"
    }, "Admitted"))));
  }) : React.createElement("tr", null, React.createElement("td", {
    colSpan: "6",
    style: {
      textAlign: 'center',
      padding: '2rem',
      color: 'var(--text-muted)'
    }
  }, "No matching leads found."))))))));
};
window.TestimonialsSection = function (_ref12) {
  var onOpenCounselling = _ref12.onOpenCounselling;
  var reviews = window.REVIEWS_DATA || [];
  return React.createElement("section", {
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-surface-alt)'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83C\uDF1F Real Career Impact"), React.createElement("h2", {
    className: "section-title"
  }, "50,000+ Students Transformed Their Careers"), React.createElement("p", {
    className: "section-subtitle"
  }, "Read real, verified experiences from working professionals who accelerated their careers with UGC-approved online degrees.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '1.75rem',
      marginBottom: '3rem'
    }
  }, reviews.map(function (rev) {
    return React.createElement("div", {
      key: rev.id,
      style: {
        background: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }
    }, React.createElement("img", {
      src: rev.avatar,
      alt: rev.studentName,
      style: {
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), React.createElement("div", null, React.createElement("strong", {
      style: {
        fontSize: '1.05rem',
        display: 'block',
        color: 'var(--primary-900)'
      }
    }, rev.studentName), React.createElement("span", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--primary-600)',
        fontWeight: '600'
      }
    }, rev.course), React.createElement("div", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, rev.university))), React.createElement("div", {
      style: {
        background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
        border: '1px solid #a7f3d0',
        borderRadius: 'var(--radius-md)',
        padding: '0.75rem 1rem',
        marginBottom: '1rem'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: '#065f46',
        fontWeight: '600',
        textTransform: 'uppercase'
      }
    }, "Career Transition"), React.createElement("span", {
      style: {
        fontSize: '0.85rem',
        fontWeight: '800',
        color: '#059669'
      }
    }, "\uD83D\uDE80 ", rev.salaryHike)), React.createElement("div", {
      style: {
        fontSize: '0.8rem',
        color: '#1f2937',
        marginTop: '0.35rem'
      }
    }, React.createElement("div", {
      style: {
        textDecoration: 'line-through',
        color: '#6b7280'
      }
    }, "Before: ", rev.previousRole), React.createElement("div", {
      style: {
        fontWeight: '700',
        color: '#065f46'
      }
    }, "After: ", rev.currentRole))), React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: '1.6',
        fontStyle: 'italic'
      }
    }, "\"", rev.comment, "\"")), React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1.25rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.75rem',
        color: 'var(--text-subtle)'
      }
    }, React.createElement("span", {
      style: {
        color: 'var(--accent-emerald)',
        fontWeight: '600'
      }
    }, "\u2713 Verified Alumni"), React.createElement("span", null, rev.date)));
  })), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0a1128 0%, #1e40af 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      textAlign: 'center'
    }
  }, React.createElement("h3", {
    style: {
      color: '#ffffff',
      fontSize: '1.85rem',
      marginBottom: '0.5rem'
    }
  }, "Ready to Write Your Career Transformation Story?"), React.createElement("p", {
    style: {
      color: '#93c5fd',
      maxWidth: '650px',
      margin: '0 auto 1.5rem auto'
    }
  }, "Book a free 1-on-1 counseling session with India's top online education counselors. No fees, no obligations."), React.createElement("button", {
    className: "btn btn-amber btn-lg",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Get Free Career Consultation & University Shortlist',
        source: 'Testimonials Bottom CTA'
      });
    }
  }, "\uD83C\uDFAF Book Free Counselling Now \u2192"))));
};
window.FloatingWidgets = function (_ref13) {
  var onOpenCounselling = _ref13.onOpenCounselling,
    onOpenWizard = _ref13.onOpenWizard;
  var _React$useState41 = React.useState(false),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    showExitModal = _React$useState42[0],
    setShowExitModal = _React$useState42[1];
  var _React$useState43 = React.useState(false),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    hasTriggeredExit = _React$useState44[0],
    setHasTriggeredExit = _React$useState44[1];
  React.useEffect(function () {
    var handleMouseLeave = function handleMouseLeave(e) {
      if (e.clientY <= 0 && !hasTriggeredExit) {
        setShowExitModal(true);
        setHasTriggeredExit(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return function () {
      return document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggeredExit]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "floating-whatsapp-btn",
    onClick: function onClick() {
      return window.open('https://wa.me/919876543210?text=Hi%20UniversityJano,%20I%20need%20help%20choosing%20an%20online%20degree%20program', '_blank');
    },
    title: "Chat with Senior Counselor on WhatsApp"
  }, React.createElement("span", {
    style: {
      fontSize: '1.75rem'
    }
  }, "\uD83D\uDCAC")), React.createElement("div", {
    className: "mobile-sticky-bar"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Confused about college?"), React.createElement("strong", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--primary-900)'
    }
  }, "100% Free Expert Advice")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, React.createElement("button", {
    className: "btn btn-amber btn-sm",
    onClick: onOpenWizard
  }, "\u26A1 AI Quiz"), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Speak to Senior Admission Counselor',
        source: 'Mobile Sticky Bottom Bar'
      });
    }
  }, "Free Call"))), showExitModal && React.createElement("div", {
    className: "modal-overlay",
    onClick: function onClick() {
      return setShowExitModal(false);
    }
  }, React.createElement("div", {
    className: "modal-dialog modal-md",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("div", {
    className: "modal-header",
    style: {
      background: 'linear-gradient(135deg, #d97706, #f59e0b)',
      color: '#ffffff'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\uD83C\uDF81"), React.createElement("h3", {
    style: {
      margin: 0,
      color: '#ffffff'
    }
  }, "Wait! Don't Leave Without Your \u20B910,000 Waiver!")), React.createElement("button", {
    className: "modal-close-btn",
    onClick: function onClick() {
      return setShowExitModal(false);
    },
    style: {
      background: 'rgba(255,255,255,0.2)',
      color: '#ffffff'
    }
  }, "\u2715")), React.createElement("div", {
    className: "modal-body",
    style: {
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'var(--text-main)',
      marginBottom: '1.25rem'
    }
  }, "Unlock an ", React.createElement("strong", null, "Exclusive Early-Bird Fee Concession of \u20B910,000"), " on top UGC-DEB approved online universities before admissions close this week!"), React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '2px dashed #f59e0b',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: '#b45309',
      fontWeight: '600',
      textTransform: 'uppercase'
    }
  }, "Your Scholarship Voucher Code:"), React.createElement("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#b45309',
      letterSpacing: '0.1em',
      marginTop: '0.25rem'
    }
  }, "UJANO-2026-EARLY")), React.createElement("button", {
    className: "btn btn-amber btn-lg btn-block",
    onClick: function onClick() {
      setShowExitModal(false);
      onOpenCounselling({
        title: 'Claim ₹10,000 Early Bird Scholarship Voucher',
        notes: 'Claimed Voucher: UJANO-2026-EARLY',
        source: 'Exit Intent Scholarship Modal'
      });
    }
  }, "\uD83C\uDF89 Claim My \u20B910,000 Scholarship Coupon Now \u2192"), React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-subtle)',
      fontSize: '0.8rem',
      marginTop: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setShowExitModal(false);
    }
  }, "No thanks, I will pay full admission fee")))));
};
window.Footer = function (_ref14) {
  var onNavigate = _ref14.onNavigate,
    onOpenWizard = _ref14.onOpenWizard,
    onOpenCounselling = _ref14.onOpenCounselling;
  return React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "ugc-disclaimer-box"
  }, React.createElement("strong", {
    style: {
      color: '#ffffff',
      display: 'block',
      marginBottom: '0.35rem'
    }
  }, "\u2696\uFE0F Regulatory Compliance & Disclaimer (UGC-DEB):"), "UniversityJano.com is an independent educational technology discovery and comparison portal. All university names, logos, and trademarks displayed belong to their respective statutory institutions and universities. UniversityJano assists students with unbiased information, counseling, fee structures, and transparent comparison as per University Grants Commission (Open and Distance Learning Programmes and Online Programmes) Regulations. Degrees offered are awarded directly by the respective UGC-DEB recognized universities."), React.createElement("div", {
    className: "footer-grid"
  }, React.createElement("div", {
    className: "footer-col"
  }, React.createElement("div", {
    style: {
      background: '#ffffff',
      padding: '0.4rem 0.85rem',
      borderRadius: '10px',
      display: 'inline-block',
      marginBottom: '1.25rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onNavigate('home');
    }
  }, React.createElement("img", {
    src: "images/logo.png",
    alt: "UniversityJano.com Logo",
    style: {
      height: '44px',
      width: 'auto',
      display: 'block'
    }
  })), React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: '#94a3b8',
      lineHeight: '1.6',
      marginBottom: '1.25rem'
    }
  }, "India's #1 AI-powered online degree and college discovery platform. Sahi University Jano, Sahi Career Chuno!"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      fontSize: '0.85rem'
    }
  }, React.createElement("span", null, "\uD83D\uDCDE Student Helpline: ", React.createElement("strong", null, "1800-890-5266")), React.createElement("span", null, "\u2709\uFE0F Admissions: ", React.createElement("strong", null, "help@universityjano.com")), React.createElement("span", null, "\uD83D\uDCCD Head Office: Knowledge Park, New Delhi & Tech Corridor, Bangalore"))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Online Postgraduate Degrees"), React.createElement("ul", {
    className: "footer-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online MBA in FinTech")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online MBA in Business Analytics")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online MCA in Cloud & AI")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online M.Sc in Data Science")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Executive MBA for Working Professionals")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online M.Com & Corporate Finance")))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Online Undergraduate Degrees"), React.createElement("ul", {
    className: "footer-links"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online BBA (Digital Marketing)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online BCA (Software Engineering)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online B.Com (Honours)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Online B.A. (Journalism & Mass Comm)")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "0% EMI Student Loan Plans")), React.createElement("li", null, React.createElement("a", {
    href: "#universities-section"
  }, "Scholarship Waiver Program")))), React.createElement("div", {
    className: "footer-col"
  }, React.createElement("h4", null, "Free Student Engagement Tools"), React.createElement("ul", {
    className: "footer-links"
  }, React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: onOpenWizard
  }, "\u26A1 2-Minute AI College Finder")), React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onNavigate('roi-calc');
    }
  }, "\uD83D\uDCC8 Salary & ROI Jump Calculator")), React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onNavigate('emi-calc');
    }
  }, "\uD83D\uDCB3 0% Monthly EMI Budget Planner")), React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onNavigate('ugc');
    }
  }, "\uD83D\uDEE1\uFE0F UGC-DEB Degree Validity Inspector")), React.createElement("li", null, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Book Free 1-on-1 Counselling'
      });
    }
  }, "\uD83C\uDFAF 1-on-1 Free Expert Counselling"))))), React.createElement("div", {
    className: "footer-bottom"
  }, React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " UniversityJano.com \u2014 All Rights Reserved. Sahi University Jano, Sahi Career Chuno."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.5rem'
    }
  }, React.createElement("a", {
    href: "#privacy",
    style: {
      color: '#64748b'
    }
  }, "Privacy Policy"), React.createElement("a", {
    href: "#terms",
    style: {
      color: '#64748b'
    }
  }, "Terms of Service"), React.createElement("a", {
    href: "#ugc-disclaimer",
    style: {
      color: '#64748b'
    }
  }, "UGC-DEB Compliance")))));
};
window.AllUniversitiesPage = function (_ref15) {
  var universities = _ref15.universities,
    searchQuery = _ref15.searchQuery,
    onSearchChange = _ref15.onSearchChange,
    selectedDegree = _ref15.selectedDegree,
    onSelectDegree = _ref15.onSelectDegree,
    selectedNaac = _ref15.selectedNaac,
    onSelectNaac = _ref15.onSelectNaac,
    maxBudget = _ref15.maxBudget,
    onBudgetChange = _ref15.onBudgetChange,
    onlyOnlineExam = _ref15.onlyOnlineExam,
    onToggleOnlineExam = _ref15.onToggleOnlineExam,
    onlyEmi = _ref15.onlyEmi,
    onToggleEmi = _ref15.onToggleEmi,
    onResetFilters = _ref15.onResetFilters,
    sortBy = _ref15.sortBy,
    onSortChange = _ref15.onSortChange,
    onOpenUniversityPage = _ref15.onOpenUniversityPage,
    _onOpenLeadModal = _ref15.onOpenLeadModal,
    onToggleCompare = _ref15.onToggleCompare,
    compareList = _ref15.compareList;
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "All UGC-DEB Approved Online Universities")), React.createElement("h1", {
    style: {
      fontSize: '2.4rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Directory of All UGC-DEB Approved Online Universities in India"), React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-muted)',
      maxWidth: '850px'
    }
  }, "Compare official accreditations (UGC-DEB, NAAC A++, NIRF), transparent course fees, 0% EMI options, placement records, and examination formats across all recognized Indian universities offering online degrees.")), React.createElement("div", {
    className: "catalog-layout"
  }, React.createElement(window.FilterSidebar, {
    selectedDegree: selectedDegree,
    onSelectDegree: onSelectDegree,
    selectedNaac: selectedNaac,
    onSelectNaac: onSelectNaac,
    maxBudget: maxBudget,
    onBudgetChange: onBudgetChange,
    onlyOnlineExam: onlyOnlineExam,
    onToggleOnlineExam: onToggleOnlineExam,
    onlyEmi: onlyEmi,
    onToggleEmi: onToggleEmi,
    onResetFilters: onResetFilters
  }), React.createElement("div", null, React.createElement("div", {
    className: "catalog-content-header"
  }, React.createElement("div", {
    className: "results-count"
  }, "Showing ", React.createElement("strong", null, universities.length), " UGC-DEB Approved Universities", selectedDegree !== 'All' && React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " for Online ", selectedDegree)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Sort by:"), React.createElement("select", {
    className: "sort-select",
    value: sortBy,
    onChange: function onChange(e) {
      return onSortChange(e.target.value);
    }
  }, React.createElement("option", {
    value: "featured"
  }, "Featured & Popular"), React.createElement("option", {
    value: "rating"
  }, "Highest Student Rating"), React.createElement("option", {
    value: "highestCtc"
  }, "Highest Placement CTC"), React.createElement("option", {
    value: "feeLowToHigh"
  }, "Fee: Low to High")))), universities.length > 0 ? React.createElement("div", {
    className: "university-grid"
  }, universities.map(function (uni) {
    return React.createElement(window.UniversityCard, {
      key: uni.id,
      university: uni,
      selectedDegree: selectedDegree,
      onViewDetails: function onViewDetails(u) {
        return onOpenUniversityPage(u);
      },
      onOpenLeadModal: function onOpenLeadModal(data) {
        return _onOpenLeadModal(data);
      },
      onToggleCompare: onToggleCompare,
      isComparing: !!compareList.find(function (item) {
        return item.id === uni.id;
      })
    });
  })) : React.createElement("div", {
    style: {
      padding: '3rem',
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      border: '1px dashed var(--border-light)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '2.5rem'
    }
  }, "\uD83D\uDD0D"), React.createElement("h3", {
    style: {
      marginTop: '0.5rem'
    }
  }, "No universities matched your selected filters"), React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: '1.25rem'
    }
  }, "Try expanding your budget slider or clearing specific filters."), React.createElement("button", {
    className: "btn btn-primary",
    onClick: onResetFilters
  }, "Reset Filters"))))));
};
window.UniversityDetailPage = function (_ref16) {
  var university = _ref16.university,
    onBack = _ref16.onBack,
    onOpenLeadModal = _ref16.onOpenLeadModal,
    onToggleCompare = _ref16.onToggleCompare,
    isComparing = _ref16.isComparing,
    onSelectUniversity = _ref16.onSelectUniversity;
  var _React$useState45 = React.useState('courses'),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    activeTab = _React$useState46[0],
    setActiveTab = _React$useState46[1];
  var allUniversities = window.UNIVERSITIES_DATA || [];
  var similarUniversities = allUniversities.filter(function (u) {
    return u.id !== university.id;
  }).slice(0, 3);
  if (!university) return null;
  return React.createElement("div", {
    className: "uni-detail-page"
  }, React.createElement("div", {
    className: "uni-hero-banner",
    style: {
      backgroundImage: "url(".concat(university.heroImage, ")")
    }
  }, React.createElement("div", {
    className: "container",
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    className: "uni-hero-content"
  }, React.createElement("div", {
    className: "uni-hero-left"
  }, React.createElement("div", {
    className: "uni-hero-avatar",
    style: {
      color: university.logoColor,
      borderColor: university.logoColor
    }
  }, university.logoText), React.createElement("div", {
    className: "uni-hero-text"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '0.4rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    className: "badge badge-success"
  }, "\u2713 UGC-DEB Approved"), React.createElement("span", {
    className: "badge badge-purple"
  }, "NAAC ", university.accreditations.naacGrade, " (", university.accreditations.naacScore, ")"), React.createElement("span", {
    className: "badge badge-blue"
  }, university.accreditations.nirfRank), university.accreditations.wesRecognized && React.createElement("span", {
    className: "badge badge-orange"
  }, "WES Recognized")), React.createElement("h1", null, university.name), React.createElement("p", null, "\uD83D\uDCCD ", university.city, ", ", university.state, " \u2022 Est. ", university.foundedYear, " \u2022 ", university.universityType))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: function onClick() {
      return onToggleCompare(university);
    }
  }, isComparing ? '✓ In Comparison List' : '+ Add to Compare'), React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Apply to ".concat(university.shortName),
        university: university.name,
        source: 'University Page Hero CTA'
      });
    }
  }, "\u26A1 Apply for Admission"))))), React.createElement("div", {
    className: "uni-page-nav-bar"
  }, React.createElement("div", {
    className: "container uni-page-nav-inner"
  }, React.createElement("button", {
    className: "btn btn-sm",
    style: {
      marginRight: '1rem',
      background: 'var(--bg-surface-alt)',
      border: '1px solid var(--border-light)'
    },
    onClick: onBack
  }, "\u2190 Back to Directory"), [{
    id: 'courses',
    label: "\uD83C\uDF93 Courses & Fees (".concat(university.popularCourses.length, ")")
  }, {
    id: 'about',
    label: '🏛️ About University'
  }, {
    id: 'placements',
    label: '💼 Placements & Recruiters'
  }, {
    id: 'approvals',
    label: '📜 Accreditations'
  }, {
    id: 'pedagogy',
    label: '💻 LMS & Exams'
  }, {
    id: 'reviews',
    label: "\u2B50 Student Reviews (".concat(university.metrics.rating, "/5)")
  }, {
    id: 'similar',
    label: '⚖️ Similar Universities'
  }].map(function (tab) {
    return React.createElement("button", {
      key: tab.id,
      className: "uni-nav-btn ".concat(activeTab === tab.id ? 'active' : ''),
      onClick: function onClick() {
        setActiveTab(tab.id);
        var el = document.getElementById("uni-sec-".concat(tab.id));
        if (el) el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, tab.label);
  }))), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "uni-detail-layout"
  }, React.createElement("div", {
    className: "uni-detail-main"
  }, React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-about"
  }, React.createElement("h2", null, "\uD83C\uDFDB\uFE0F About ", university.name), React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: '1.7',
      color: 'var(--text-main)',
      marginBottom: '1.5rem'
    }
  }, university.tagline, ". ", university.name, " is one of India's premier higher education institutions, fully entitled by the University Grants Commission (UGC) and Distance Education Bureau (DEB) to offer online degree programs with 100% online examinations and worldwide recognition."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-subtle)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "NAAC Grade"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--navy-900)'
    }
  }, university.accreditations.naacGrade), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, university.accreditations.naacScore)), React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--orange-600)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "Highest Package"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--orange-600)'
    }
  }, "\u20B9", university.metrics.highestCtc), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Placement Drive")), React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--accent-emerald-bg)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--accent-emerald)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "Average CTC"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--accent-emerald)'
    }
  }, "\u20B9", university.metrics.avgCtc), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Across Programs")), React.createElement("div", {
    style: {
      padding: '1rem',
      background: 'var(--blue-50)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--blue-600)',
      textTransform: 'uppercase',
      fontWeight: '600'
    }
  }, "Learners"), React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '1.25rem',
      color: 'var(--blue-600)'
    }
  }, university.metrics.studentEnrolled), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Active Network")))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-courses"
  }, React.createElement("h2", null, "\uD83C\uDF93 Online Courses Offered & Complete Fee Structure"), React.createElement("p", {
    style: {
      fontSize: '0.925rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, "All fee plans include study material, LMS access, online examinations, and dedicated placement assistance with 0% interest monthly EMI."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }
  }, university.popularCourses.map(function (course) {
    return React.createElement("div", {
      key: course.id,
      style: {
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        background: '#ffffff',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '0.4rem'
      }
    }, React.createElement("span", {
      className: "badge badge-blue"
    }, course.level), React.createElement("span", {
      className: "badge badge-orange"
    }, course.duration), React.createElement("span", {
      className: "badge badge-success"
    }, "Proctored Online Exam")), React.createElement("h3", {
      style: {
        fontSize: '1.35rem',
        color: 'var(--navy-900)'
      }
    }, course.name), React.createElement("p", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginTop: '0.35rem'
      }
    }, React.createElement("strong", null, "Eligibility Criteria:"), " ", course.eligibility)), React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, React.createElement("div", {
      style: {
        fontSize: '1.5rem',
        fontWeight: '800',
        color: 'var(--orange-500)'
      }
    }, window.helpers.formatINR(course.totalFee)), React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }
    }, window.helpers.formatINR(course.perSemFee), " / Semester"), course.monthlyEmi > 0 && React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--accent-emerald)',
        fontWeight: '700',
        marginTop: '2px'
      }
    }, "0% EMI @ \u20B9", course.monthlyEmi.toLocaleString('en-IN'), "/month"))), course.specializations && React.createElement("div", {
      style: {
        marginTop: '1.25rem',
        paddingTop: '1rem',
        borderTop: '1px dashed var(--border-light)'
      }
    }, React.createElement("strong", {
      style: {
        fontSize: '0.85rem',
        display: 'block',
        marginBottom: '0.5rem',
        color: 'var(--navy-900)'
      }
    }, "Available Specializations (", course.specializations.length, "):"), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem'
      }
    }, course.specializations.map(function (spec) {
      return React.createElement("span", {
        key: spec,
        style: {
          padding: '0.25rem 0.65rem',
          background: 'var(--bg-surface-alt)',
          borderRadius: '4px',
          fontSize: '0.8rem',
          color: 'var(--text-main)',
          border: '1px solid var(--border-light)'
        }
      }, "\u2022 ", spec);
    }))), course.keyHighlights && React.createElement("div", {
      style: {
        marginTop: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.5rem',
        fontSize: '0.825rem',
        color: 'var(--text-muted)'
      }
    }, course.keyHighlights.map(function (h, i) {
      return React.createElement("span", {
        key: i
      }, "\u2713 ", h);
    })), React.createElement("div", {
      style: {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.75rem',
        flexWrap: 'wrap'
      }
    }, React.createElement("button", {
      className: "btn btn-secondary btn-sm",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Download ".concat(course.name, " Syllabus & Fees"),
          university: university.name,
          course: course.name,
          type: 'prospectus',
          source: 'University Page - Syllabus Button'
        });
      }
    }, "\uD83D\uDCE5 Download Syllabus PDF"), React.createElement("button", {
      className: "btn btn-primary btn-sm",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Enroll in ".concat(course.name, " at ").concat(university.shortName),
          university: university.name,
          course: course.name,
          source: 'University Page - Enroll Course Button'
        });
      }
    }, "Apply for Admission \u2192")));
  }))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-placements"
  }, React.createElement("h2", null, "\uD83D\uDCBC Placement Assistance & Top Hiring Partners"), React.createElement("p", {
    style: {
      fontSize: '0.925rem',
      color: 'var(--text-muted)',
      marginBottom: '1.5rem'
    }
  }, "Students of ", university.name, " participate in virtual job fairs and receive 1-on-1 interview preparation support."), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: '1.75rem'
    }
  }, university.topRecruiters.map(function (rec) {
    return React.createElement("span", {
      key: rec,
      style: {
        padding: '0.6rem 1.2rem',
        background: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        fontWeight: '700',
        fontSize: '0.925rem',
        color: 'var(--navy-900)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, "\uD83C\uDFE2 ", rec);
  })), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)'
    }
  }, React.createElement("h4", {
    style: {
      marginBottom: '0.75rem'
    }
  }, "\uD83C\uDFAF Dedicated Career Support Features:"), React.createElement("ul", {
    style: {
      paddingLeft: '1.25rem',
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem'
    }
  }, React.createElement("li", null, "Resume Building & LinkedIn profile optimization workshops with industry HR leads"), React.createElement("li", null, "Access to Job Portal with 500+ active job openings updated weekly"), React.createElement("li", null, "Mock technical interviews and communication grooming sessions"), React.createElement("li", null, "Exclusive virtual placement drives with leading MNCs and Fortune 500 companies")))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-approvals"
  }, React.createElement("h2", null, "\uD83D\uDCDC Accreditations & Legal Government Approvals"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.25rem',
      marginTop: '1.25rem'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      marginBottom: '0.5rem'
    }
  }, "UGC-DEB"), React.createElement("strong", null, university.accreditations.ugcDebYear), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "100% entitled for online degrees equivalent to regular on-campus degrees.")), React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-purple",
    style: {
      marginBottom: '0.5rem'
    }
  }, "NAAC Grade"), React.createElement("strong", null, "Grade ", university.accreditations.naacGrade, " (", university.accreditations.naacScore, ")"), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "National Assessment & Accreditation Council premier certification.")), React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-blue",
    style: {
      marginBottom: '0.5rem'
    }
  }, "NIRF Rank"), React.createElement("strong", null, university.accreditations.nirfRank), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "Ranked by the Ministry of Education, Government of India.")), university.accreditations.wesRecognized && React.createElement("div", {
    style: {
      padding: '1.25rem',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-md)',
      background: '#ffffff'
    }
  }, React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginBottom: '0.5rem'
    }
  }, "WES (USA/Canada)"), React.createElement("strong", null, "Global Recognition"), React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: '0.35rem'
    }
  }, "Valid for Canadian PR and international higher education.")))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-pedagogy"
  }, React.createElement("h2", null, "\uD83D\uDCBB Learning Management System & Exam Mode"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginTop: '1rem'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--orange-100)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--orange-600)',
      marginBottom: '0.5rem'
    }
  }, "\uD83C\uDFE0 100% Online Examination"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }
  }, university.examMode), React.createElement("ul", {
    style: {
      paddingLeft: '1.25rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginTop: '0.5rem'
    }
  }, React.createElement("li", null, "Take exams comfortably from home on your laptop"), React.createElement("li", null, "AI & Human webcam proctoring for integrity"), React.createElement("li", null, "Flexible slot selection on weekends"))), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--blue-50)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--blue-100)'
    }
  }, React.createElement("h4", {
    style: {
      color: 'var(--blue-600)',
      marginBottom: '0.5rem'
    }
  }, "\uD83D\uDCF1 Mobile LMS & Masterclasses"), React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }
  }, university.learningPedagogy), React.createElement("ul", {
    style: {
      paddingLeft: '1.25rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginTop: '0.5rem'
    }
  }, React.createElement("li", null, "24/7 access to recorded HD video lectures"), React.createElement("li", null, "Downloadable e-books & study notes"), React.createElement("li", null, "Live weekend doubt solving sessions"))))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-reviews"
  }, React.createElement("h2", null, "\u2B50 Student Reviews & Verified Ratings"), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '1.5rem',
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-md)'
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: '2.75rem',
      color: 'var(--orange-500)',
      margin: 0
    }
  }, "\u2605 ", university.metrics.rating), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Based on ", university.metrics.reviewCount, " Verified Reviews")), React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Faculty Quality:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.faculty, " / 5.0")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "LMS Portal:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.lms, " / 5.0")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Placement Cell:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.placementSupport, " / 5.0")), React.createElement("div", null, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }
  }, "Value for Money:"), React.createElement("strong", null, " ", university.studentReviewsRatingBreakdown.valueForMoney, " / 5.0"))))), React.createElement("div", {
    className: "uni-detail-section-card",
    id: "uni-sec-similar"
  }, React.createElement("h2", null, "\u2696\uFE0F Compare with Alternative Online Universities"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '1.25rem',
      marginTop: '1.25rem'
    }
  }, similarUniversities.map(function (alt) {
    return React.createElement("div", {
      key: alt.id,
      style: {
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '0.75rem'
      }
    }, React.createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: '#f8fafc',
        border: "1px solid ".concat(alt.logoColor),
        color: alt.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.75rem'
      }
    }, alt.logoText), React.createElement("div", null, React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '0.95rem',
        color: 'var(--navy-900)'
      }
    }, alt.shortName), React.createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, "NAAC ", alt.accreditations.naacGrade))), React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem'
      }
    }, "Starting Fee: ", React.createElement("strong", null, window.helpers.formatINR(alt.popularCourses[0].totalFee)))), React.createElement("button", {
      className: "btn btn-secondary btn-sm btn-block",
      onClick: function onClick() {
        return onSelectUniversity(alt);
      }
    }, "View ", alt.shortName, " \u2192"));
  })))), React.createElement("div", {
    className: "uni-sticky-sidebar"
  }, React.createElement("div", {
    className: "sidebar-lead-card"
  }, React.createElement("span", {
    className: "badge badge-orange",
    style: {
      marginBottom: '0.5rem'
    }
  }, "\u26A1 Free Expert Consultation"), React.createElement("h3", {
    style: {
      fontSize: '1.3rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Talk to ", university.shortName, " Advisor"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '1.25rem'
    }
  }, "Get answers regarding eligibility, batch start dates, scholarship fee waivers, and EMI approvals."), React.createElement("button", {
    className: "btn btn-primary btn-block btn-lg",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Apply to ".concat(university.shortName),
        university: university.name,
        source: 'University Page Sticky Sidebar'
      });
    }
  }, "Apply for Admission \u2192"), React.createElement("button", {
    className: "btn btn-secondary btn-block",
    style: {
      marginTop: '0.75rem'
    },
    onClick: function onClick() {
      return onOpenLeadModal({
        title: "Download ".concat(university.shortName, " Official Prospectus"),
        university: university.name,
        type: 'prospectus',
        source: 'University Page Sticky Prospectus'
      });
    }
  }, "\uD83D\uDCE5 Download Prospectus PDF"), React.createElement("div", {
    style: {
      marginTop: '1.25rem',
      paddingTop: '1.25rem',
      borderTop: '1px solid var(--border-light)',
      textAlign: 'center'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-subtle)'
    }
  }, "\uD83D\uDCDE Helpline: ", React.createElement("strong", null, "1800-890-5266"), " (Toll-Free)")))))));
};
window.ComparePage = function (_ref17) {
  var compareList = _ref17.compareList,
    onAddUniversity = _ref17.onAddUniversity,
    onRemoveUniversity = _ref17.onRemoveUniversity,
    onOpenLeadModal = _ref17.onOpenLeadModal,
    onOpenUniversityPage = _ref17.onOpenUniversityPage;
  var allUniversities = window.UNIVERSITIES_DATA || [];
  var _React$useState47 = React.useState('MBA'),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    selectedDegree = _React$useState48[0],
    setSelectedDegree = _React$useState48[1];
  var _React$useState49 = React.useState(false),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    highlightDiff = _React$useState50[0],
    setHighlightDiff = _React$useState50[1];
  React.useEffect(function () {
    if (compareList.length < 2) {
      var top3 = allUniversities.slice(0, 3);
      top3.forEach(function (u) {
        if (!compareList.find(function (item) {
          return item.id === u.id;
        })) {
          onAddUniversity(u);
        }
      });
    }
  }, []);
  var comparisonRows = window.helpers.getComparisonDifferences(compareList, selectedDegree);
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "Side-by-Side University Comparison")), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '1.5rem',
      marginBottom: '2rem'
    }
  }, React.createElement("div", null, React.createElement("h1", {
    style: {
      fontSize: '2.4rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Compare Top Indian Online Universities Side-by-Side"), React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '1rem',
      maxWidth: '800px'
    }
  }, "Select up to 4 UGC-DEB approved universities to compare genuine semester fees, NAAC grades, 0% EMI monthly installments, average placement CTC, and online proctored exam features.")), React.createElement("div", {
    style: {
      background: '#ffffff',
      padding: '0.75rem 1.25rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-xs)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: '700',
      cursor: 'pointer',
      color: 'var(--navy-900)'
    }
  }, React.createElement("input", {
    type: "checkbox",
    checked: highlightDiff,
    onChange: function onChange(e) {
      return setHighlightDiff(e.target.checked);
    },
    style: {
      width: '18px',
      height: '18px',
      accentColor: 'var(--orange-500)'
    }
  }), React.createElement("span", null, "Highlight Differences Only")))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "Comparing Course:"), ['MBA', 'MCA', 'BBA', 'BCA', 'M.Sc'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      className: "btn btn-sm ".concat(selectedDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setSelectedDegree(deg);
      }
    }, "Online ", deg);
  })), React.createElement("div", {
    style: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      padding: '2rem',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)',
      marginBottom: '2.5rem'
    }
  }, React.createElement("div", {
    className: "comparison-table-wrapper"
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      minWidth: '180px',
      width: '20%'
    }
  }, "Comparison Parameters"), compareList.map(function (uni) {
    return React.createElement("th", {
      key: uni.id,
      style: {
        minWidth: '220px',
        textAlign: 'center',
        verticalAlign: 'top',
        position: 'relative'
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return onRemoveUniversity(uni.id);
      },
      style: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: '#fee2e2',
        color: '#ef4444',
        border: 'none',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '12px'
      },
      title: "Remove from comparison"
    }, "\u2715"), React.createElement("div", {
      style: {
        width: '54px',
        height: '54px',
        borderRadius: '12px',
        background: '#f8fafc',
        border: "2px solid ".concat(uni.logoColor),
        color: uni.logoColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '0.85rem',
        margin: '0 auto 0.5rem auto',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onOpenUniversityPage(uni);
      }
    }, uni.logoText), React.createElement("div", {
      style: {
        fontWeight: '800',
        fontSize: '1.05rem',
        color: 'var(--navy-900)',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onOpenUniversityPage(uni);
      }
    }, uni.shortName), React.createElement("div", {
      style: {
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        marginBottom: '0.85rem'
      }
    }, "\uD83D\uDCCD ", uni.city, ", ", uni.state), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem'
      }
    }, React.createElement("button", {
      className: "btn btn-primary btn-sm btn-block",
      onClick: function onClick() {
        return onOpenLeadModal({
          title: "Apply to ".concat(uni.shortName),
          university: uni.name,
          course: "Online ".concat(selectedDegree),
          source: 'Comparison Page CTA'
        });
      }
    }, "Apply for Admission"), React.createElement("button", {
      className: "btn btn-secondary btn-sm btn-block",
      onClick: function onClick() {
        return onOpenUniversityPage(uni);
      }
    }, "Full Profile \u2192")));
  }), compareList.length < 4 && React.createElement("th", {
    style: {
      minWidth: '200px',
      textAlign: 'center',
      verticalAlign: 'middle',
      background: 'var(--bg-surface-alt)',
      border: '2px dashed var(--border-light)'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.5rem 0.5rem'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '2rem'
    }
  }, "\u2795"), React.createElement("h4", {
    style: {
      fontSize: '1rem',
      marginTop: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "Add Another College"), React.createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      margin: '0.25rem 0 0.75rem 0'
    }
  }, "Select from remaining universities"), React.createElement("select", {
    style: {
      width: '100%',
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid var(--border-light)',
      fontSize: '0.85rem'
    },
    onChange: function onChange(e) {
      var found = allUniversities.find(function (u) {
        return u.id === e.target.value;
      });
      if (found) onAddUniversity(found);
      e.target.value = '';
    },
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "+ Choose University..."), allUniversities.filter(function (u) {
    return !compareList.find(function (c) {
      return c.id === u.id;
    });
  }).map(function (u) {
    return React.createElement("option", {
      key: u.id,
      value: u.id
    }, u.shortName);
  })))))), React.createElement("tbody", null, comparisonRows.map(function (row, idx) {
    var isHighlighted = highlightDiff && row.highlight;
    return React.createElement("tr", {
      key: idx,
      className: isHighlighted ? 'diff-highlight' : ''
    }, React.createElement("td", {
      style: {
        fontWeight: '700',
        color: 'var(--navy-900)'
      }
    }, React.createElement("div", null, row.label), React.createElement("span", {
      style: {
        fontSize: '0.7rem',
        color: 'var(--text-subtle)',
        textTransform: 'uppercase'
      }
    }, row.category)), row.values.map(function (valObj, vIdx) {
      return React.createElement("td", {
        key: vIdx,
        style: {
          textAlign: 'center',
          verticalAlign: 'middle'
        }
      }, valObj.badge ? React.createElement("span", {
        className: "badge ".concat(valObj.badge)
      }, valObj.val) : React.createElement("div", {
        style: {
          fontWeight: '600',
          color: 'var(--text-main)'
        }
      }, valObj.val), valObj.subtext && React.createElement("div", {
        style: {
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '2px'
        }
      }, valObj.subtext));
    }), compareList.length < 4 && React.createElement("td", {
      style: {
        background: 'var(--bg-surface-alt)'
      }
    }));
  }))))), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem'
    }
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      color: '#ffffff',
      fontSize: '1.6rem',
      marginBottom: '0.35rem'
    }
  }, "Still Confused Which College Suits Your Profile Best?"), React.createElement("p", {
    style: {
      color: '#fed7aa',
      margin: 0,
      fontSize: '0.95rem'
    }
  }, "Speak with a senior academic counselor for a 100% unbiased comparative review.")), React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: function onClick() {
      return onOpenLeadModal({
        title: 'Get Free Comparative Evaluation Call',
        notes: "Comparing: ".concat(compareList.map(function (u) {
          return u.shortName;
        }).join(' vs ')),
        source: 'Compare Page Bottom CTA'
      });
    }
  }, "\uD83C\uDFAF Request Free Comparative Call \u2192"))));
};
window.ROICalculatorPage = function (_ref18) {
  var onOpenCounselling = _ref18.onOpenCounselling;
  var _React$useState51 = React.useState(5.0),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    currentSalary = _React$useState52[0],
    setCurrentSalary = _React$useState52[1];
  var _React$useState53 = React.useState('MBA'),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    targetDegree = _React$useState54[0],
    setTargetDegree = _React$useState54[1];
  var _React$useState55 = React.useState(2),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    yearsExp = _React$useState56[0],
    setYearsExp = _React$useState56[1];
  var _React$useState57 = React.useState('FinTech & Analytics'),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    targetDomain = _React$useState58[0],
    setTargetDomain = _React$useState58[1];
  var roi = window.helpers.calculateCareerROI(currentSalary, targetDegree, yearsExp);
  var domainSalaryTrends = [{
    domain: "FinTech & Banking Analytics",
    startingAvg: "₹9.5 LPA",
    jump: "+140%",
    hiring: ["Deloitte", "HDFC", "Morgan Stanley", "KPMG"]
  }, {
    domain: "AI & Machine Learning / Data Science",
    startingAvg: "₹12.0 LPA",
    jump: "+180%",
    hiring: ["Google", "Microsoft", "Amazon", "Schneider"]
  }, {
    domain: "Cloud Computing & DevOps Architecture",
    startingAvg: "₹11.0 LPA",
    jump: "+160%",
    hiring: ["AWS", "IBM", "TCS", "Accenture"]
  }, {
    domain: "Digital Marketing & Performance Growth",
    startingAvg: "₹8.5 LPA",
    jump: "+130%",
    hiring: ["Nykaa", "Flipkart", "Reliance Jio"]
  }, {
    domain: "Supply Chain & Operations Leadership",
    startingAvg: "₹9.0 LPA",
    jump: "+120%",
    hiring: ["Shell", "Tata Motors", "Adani", "Amazon"]
  }, {
    domain: "Healthcare & Hospital Administration",
    startingAvg: "₹8.0 LPA",
    jump: "+110%",
    hiring: ["Cipla", "Max Healthcare", "Apollo Hospitals"]
  }];
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "Course ROI & Salary Growth Calculator")), React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: '2.5rem'
    }
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83D\uDCC8 Official Career Analytics"), React.createElement("h1", {
    style: {
      fontSize: '2.5rem',
      color: 'var(--navy-900)',
      marginBottom: '0.75rem'
    }
  }, "Online Degree ROI & Career Jump Calculator"), React.createElement("p", {
    className: "section-subtitle"
  }, "Evaluate your expected salary increment, course fee payback period in months, and 5-year career wealth gain before investing in an online degree.")), React.createElement("div", {
    className: "calc-card-container",
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "1. Target Online Degree Program:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem'
    }
  }, ['MBA', 'MCA', 'M.Sc', 'BBA', 'BCA', 'M.Tech'].map(function (deg) {
    return React.createElement("button", {
      key: deg,
      type: "button",
      className: "btn btn-sm ".concat(targetDegree === deg ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTargetDegree(deg);
      }
    }, deg);
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "2. Your Current Annual CTC (in LPA):"), React.createElement("strong", {
    style: {
      color: 'var(--orange-600)',
      fontSize: '1.2rem'
    }
  }, "\u20B9", currentSalary.toFixed(1), " LPA")), React.createElement("input", {
    type: "range",
    min: "2.0",
    max: "20.0",
    step: "0.5",
    value: currentSalary,
    onChange: function onChange(e) {
      return setCurrentSalary(parseFloat(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B92.0 LPA"), React.createElement("span", null, "\u20B920.0 LPA"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "3. Total Professional Experience:"), React.createElement("strong", {
    style: {
      color: 'var(--orange-600)',
      fontSize: '1.2rem'
    }
  }, yearsExp, " ", yearsExp === 1 ? 'Year' : 'Years')), React.createElement("input", {
    type: "range",
    min: "0",
    max: "10",
    step: "1",
    value: yearsExp,
    onChange: function onChange(e) {
      return setYearsExp(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "0 Yrs (Fresher)"), React.createElement("span", null, "10+ Yrs"))), React.createElement("div", {
    style: {
      padding: '0.85rem 1rem',
      background: 'var(--orange-50)',
      borderRadius: 'var(--radius-md)',
      fontSize: '0.825rem',
      color: 'var(--text-muted)',
      border: '1px solid var(--orange-100)'
    }
  }, "\uD83D\uDCA1 ", React.createElement("em", null, "Projections calibrated against verified placement reports of 45,000+ online alumni in India (2024-2026)."))), React.createElement("div", {
    className: "calc-result-box"
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#fed7aa',
      fontWeight: '600'
    }
  }, "Projected Post-Degree CTC"), React.createElement("div", {
    className: "calc-result-number"
  }, "\u20B9", roi.estimatedNewSalary.toFixed(1), " LPA"), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.875rem'
    }
  }, "\uD83D\uDE80 +", roi.percentageHike, "% Expected Salary Hike"), React.createElement("div", {
    className: "calc-stats-breakdown"
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Payback Period"), React.createElement("strong", null, "~", roi.paybackMonths, " Months")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "5-Year Extra Wealth"), React.createElement("strong", null, "+\u20B9", roi.fiveYearGainLakhs.toFixed(1), " Lakhs")), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Approx Course Fee"), React.createElement("strong", null, window.helpers.formatINR(roi.avgDegreeFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", null, "Zero Work Break"), React.createElement("strong", null, "100% Online"))), React.createElement("button", {
    className: "btn btn-primary btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: "Get Personalized Career Roadmap for Online ".concat(targetDegree),
        course: "Online ".concat(targetDegree),
        notes: "Current CTC: \u20B9".concat(currentSalary, " LPA -> Projected CTC: \u20B9").concat(roi.estimatedNewSalary, " LPA"),
        source: 'Dedicated ROI Page CTA'
      });
    }
  }, "Get Personalized Career Transition Plan \u2192")))), React.createElement("div", {
    style: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: '1.6rem',
      color: 'var(--navy-900)',
      marginBottom: '0.5rem'
    }
  }, "Highest-Paying Online Specializations & Industry Hiring Demand (2026)"), React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: '1.5rem',
      fontSize: '0.925rem'
    }
  }, "Average starting salary packages offered during corporate placement drives for UGC-approved online degrees."), React.createElement("div", {
    className: "comparison-table-wrapper"
  }, React.createElement("table", {
    className: "comparison-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Domain / Specialization"), React.createElement("th", null, "Average CTC (Post Online Degree)"), React.createElement("th", null, "Average Salary Jump"), React.createElement("th", null, "Top Hiring Companies"), React.createElement("th", null, "Action"))), React.createElement("tbody", null, domainSalaryTrends.map(function (d, idx) {
    return React.createElement("tr", {
      key: idx
    }, React.createElement("td", null, React.createElement("strong", {
      style: {
        color: 'var(--navy-900)'
      }
    }, d.domain)), React.createElement("td", null, React.createElement("span", {
      className: "badge badge-orange",
      style: {
        fontSize: '0.85rem'
      }
    }, d.startingAvg)), React.createElement("td", null, React.createElement("strong", {
      style: {
        color: 'var(--accent-emerald)'
      }
    }, d.jump)), React.createElement("td", null, React.createElement("div", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }
    }, d.hiring.join(', '))), React.createElement("td", null, React.createElement("button", {
      className: "btn btn-secondary btn-sm",
      onClick: function onClick() {
        return onOpenCounselling({
          title: "Explore Colleges for ".concat(d.domain),
          specialization: d.domain,
          source: 'ROI Specialization Table CTA'
        });
      }
    }, "Explore Colleges \u2192")));
  })))))));
};
window.EMICalculatorPage = function (_ref19) {
  var onOpenCounselling = _ref19.onOpenCounselling;
  var _React$useState59 = React.useState(160000),
    _React$useState60 = _slicedToArray(_React$useState59, 2),
    courseFee = _React$useState60[0],
    setCourseFee = _React$useState60[1];
  var _React$useState61 = React.useState(24),
    _React$useState62 = _slicedToArray(_React$useState61, 2),
    tenure = _React$useState62[0],
    setTenure = _React$useState62[1];
  var _React$useState63 = React.useState(10),
    _React$useState64 = _slicedToArray(_React$useState63, 2),
    scholarshipPercent = _React$useState64[0],
    setScholarshipPercent = _React$useState64[1];
  var discountAmount = courseFee * scholarshipPercent / 100;
  var netPayable = courseFee - discountAmount;
  var monthlyEmi = Math.round(netPayable / tenure);
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "0% Interest EMI & Budget Planner")), React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: '2.5rem'
    }
  }, React.createElement("span", {
    className: "section-tag"
  }, "\uD83D\uDCB3 Zero Financial Burden"), React.createElement("h1", {
    style: {
      fontSize: '2.5rem',
      color: 'var(--navy-900)',
      marginBottom: '0.75rem'
    }
  }, "0% Interest Monthly EMI & Fee Budget Planner"), React.createElement("p", {
    className: "section-subtitle"
  }, "Pursue your degree from top accredited universities without taking heavy loans. Calculate zero-cost monthly installments and check instant scholarship eligibility.")), React.createElement("div", {
    className: "calc-card-container",
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("div", {
    className: "calc-grid"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.35rem'
    }
  }, React.createElement("label", {
    style: {
      fontWeight: '700',
      color: 'var(--navy-900)'
    }
  }, "1. University Course Fee (Total):"), React.createElement("strong", {
    style: {
      color: 'var(--orange-600)',
      fontSize: '1.2rem'
    }
  }, window.helpers.formatINR(courseFee))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "350000",
    step: "10000",
    value: courseFee,
    onChange: function onChange(e) {
      return setCourseFee(parseInt(e.target.value));
    },
    className: "slider-input"
  }), React.createElement("div", {
    className: "slider-val-display"
  }, React.createElement("span", null, "\u20B950,000"), React.createElement("span", null, "\u20B93.5 Lakhs"))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "2. Select 0% Interest EMI Tenure:"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '0.5rem'
    }
  }, [6, 12, 24, 36].map(function (m) {
    return React.createElement("button", {
      key: m,
      type: "button",
      className: "btn btn-sm ".concat(tenure === m ? 'btn-primary' : 'btn-secondary'),
      onClick: function onClick() {
        return setTenure(m);
      }
    }, m, " Months");
  }))), React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, React.createElement("label", {
    style: {
      display: 'block',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--navy-900)'
    }
  }, "3. Early Bird / Merit Scholarship Discount:"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem'
    }
  }, [0, 10, 15, 25].map(function (p) {
    return React.createElement("button", {
      key: p,
      type: "button",
      className: "btn btn-sm ".concat(scholarshipPercent === p ? 'btn-accent' : 'btn-secondary'),
      onClick: function onClick() {
        return setScholarshipPercent(p);
      },
      style: {
        flex: 1
      }
    }, p === 0 ? 'No Coupon' : "".concat(p, "% Off"));
  }))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.85rem',
      background: '#ecfdf5',
      borderRadius: '8px',
      border: '1px solid #a7f3d0',
      fontSize: '0.825rem',
      color: '#065f46'
    }
  }, React.createElement("span", null, "\u2713"), React.createElement("span", null, "Pre-approved NBFC partners: ", React.createElement("strong", null, "Propelld, Eduvanz, GrayQuest"), " (Zero Credit Card Required)."))), React.createElement("div", {
    className: "calc-result-box",
    style: {
      background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#fed7aa',
      fontWeight: '600'
    }
  }, "Your Monthly 0% EMI"), React.createElement("div", {
    className: "calc-result-number",
    style: {
      color: '#ffffff'
    }
  }, "\u20B9", monthlyEmi.toLocaleString('en-IN'), React.createElement("span", {
    style: {
      fontSize: '1.1rem',
      fontWeight: '500'
    }
  }, "/mo")), React.createElement("div", {
    style: {
      display: 'inline-block',
      padding: '0.25rem 0.85rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: 'var(--radius-full)',
      fontWeight: '700',
      fontSize: '0.85rem'
    }
  }, "\uD83C\uDF89 Zero Hidden Charges \u2022 0% Interest Rate"), React.createElement("div", {
    className: "calc-stats-breakdown",
    style: {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    }
  }, React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Original Fee"), React.createElement("strong", null, window.helpers.formatINR(courseFee))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Scholarship Saved"), React.createElement("strong", {
    style: {
      color: '#fef08a'
    }
  }, "- ", window.helpers.formatINR(discountAmount))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Net Payable"), React.createElement("strong", null, window.helpers.formatINR(netPayable))), React.createElement("div", {
    className: "calc-stat-sub"
  }, React.createElement("label", {
    style: {
      color: '#fed7aa'
    }
  }, "Tenure"), React.createElement("strong", null, tenure, " Months"))), React.createElement("button", {
    className: "btn btn-primary btn-block",
    style: {
      marginTop: '1.5rem',
      fontWeight: '700'
    },
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Apply for Instant 0% EMI Approval',
        notes: "Requested EMI: \u20B9".concat(monthlyEmi, "/mo for ").concat(tenure, " months on ").concat(window.helpers.formatINR(courseFee), " fee"),
        source: 'Dedicated EMI Calculator Page CTA'
      });
    }
  }, "Apply for 0% EMI Approval \u2192")))), React.createElement("div", {
    style: {
      background: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: '1.6rem',
      color: 'var(--navy-900)',
      textAlign: 'center',
      marginBottom: '2rem'
    }
  }, "How 0% Interest Education EMI Works at UniversityJano.com"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    }
  }, "\uD83D\uDCDD"), React.createElement("h4", {
    style: {
      color: 'var(--navy-900)',
      marginBottom: '0.35rem'
    }
  }, "1. Choose University & Plan"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Select your desired online degree and choose an installment tenure from 6 to 36 months.")), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    }
  }, "\u26A1"), React.createElement("h4", {
    style: {
      color: 'var(--navy-900)',
      marginBottom: '0.35rem'
    }
  }, "2. Instant 10-Min Approval"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Basic Aadhaar/PAN KYC verification without credit cards or collateral security.")), React.createElement("div", {
    style: {
      padding: '1.5rem',
      background: 'var(--bg-surface-alt)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    }
  }, "\uD83C\uDF93"), React.createElement("h4", {
    style: {
      color: 'var(--navy-900)',
      marginBottom: '0.35rem'
    }
  }, "3. Start Studying Today"), React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }
  }, "Get immediate access to university LMS and lectures while paying comfortable zero-interest EMIs."))))));
};
window.UGCVerifierPage = function (_ref20) {
  var onOpenCounselling = _ref20.onOpenCounselling;
  var data = window.ACCREDITATIONS_DATA;
  return React.createElement("div", {
    style: {
      backgroundColor: 'var(--bg-main)',
      minHeight: '100vh',
      padding: '2.5rem 0 4.5rem 0'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      marginBottom: '0.75rem'
    }
  }, React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return window.location.hash = '#/';
    }
  }, "Home"), React.createElement("span", null, "/"), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700'
    }
  }, "UGC-DEB Government Approvals & Legal Validity")), React.createElement("div", {
    className: "section-header",
    style: {
      marginBottom: '2.5rem'
    }
  }, React.createElement("span", {
    className: "section-tag green"
  }, "\uD83D\uDEE1\uFE0F 100% Genuine & Legitimate"), React.createElement("h1", {
    style: {
      fontSize: '2.5rem',
      color: 'var(--navy-900)',
      marginBottom: '0.75rem'
    }
  }, "UGC-DEB Government Approval & Degree Validity Inspector"), React.createElement("p", {
    className: "section-subtitle"
  }, "Understand how online degrees are officially recognized by the Government of India, UPSC, Corporate MNCs, and Global WES Evaluation.")), React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, #0b1b3d 0%, #1a56db 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '2.5rem',
      color: '#ffffff',
      marginBottom: '3rem',
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    }
  }, React.createElement("span", {
    className: "badge badge-success",
    style: {
      fontSize: '0.85rem'
    }
  }, "\uD83D\uDCDC Official Gazette of India Mandate"), React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: '#fed7aa'
    }
  }, data.ugcDebNotice.source)), React.createElement("blockquote", {
    style: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      lineHeight: '1.6',
      color: '#f8fafc',
      borderLeft: '4px solid var(--orange-500)',
      paddingLeft: '1.5rem',
      margin: '1.5rem 0'
    }
  }, "\"", data.ugcDebNotice.officialGazetteQuote, "\""), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '1.5rem'
    }
  }, React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      color: '#e2e8f0'
    }
  }, "\u2696\uFE0F ", React.createElement("strong", null, "Legal Summary:"), " Online degrees awarded by UGC-DEB recognized universities carry 100% identical legal validity as on-campus degrees."), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: function onClick() {
      return onOpenCounselling({
        title: 'Verify University UGC-DEB Entitlement Letter',
        source: 'UGC Page Gazette Header CTA'
      });
    }
  }, "Verify University Approval Letter"))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3.5rem'
    }
  }, data.ugcDebNotice.validityPoints.map(function (pt, idx) {
    return React.createElement("div", {
      key: idx,
      style: {
        background: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("div", {
      style: {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'var(--orange-50)',
        color: 'var(--orange-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        marginBottom: '1rem'
      }
    }, idx === 0 ? '🏛️' : idx === 1 ? '🏢' : idx === 2 ? '🌐' : '💻'), React.createElement("h3", {
      style: {
        fontSize: '1.15rem',
        marginBottom: '0.5rem',
        color: 'var(--navy-900)'
      }
    }, pt.title), React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        lineHeight: '1.6'
      }
    }, pt.description));
  })), React.createElement("div", {
    style: {
      marginBottom: '3.5rem'
    }
  }, React.createElement("h2", {
    style: {
      textAlign: 'center',
      marginBottom: '1.75rem',
      color: 'var(--navy-900)'
    }
  }, "Key Regulatory Pillars to Verify Before Enrolling"), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '1.25rem'
    }
  }, data.accreditationTypes.map(function (acc) {
    return React.createElement("div", {
      key: acc.code,
      style: {
        background: '#ffffff',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement("span", {
      className: "badge",
      style: {
        backgroundColor: acc.badgeColor,
        color: '#ffffff',
        marginBottom: '0.5rem'
      }
    }, acc.code), React.createElement("strong", {
      style: {
        display: 'block',
        fontSize: '1rem',
        color: 'var(--navy-900)',
        margin: '0.35rem 0'
      }
    }, acc.fullName), React.createElement("p", {
      style: {
        fontSize: '0.825rem',
        color: 'var(--text-muted)'
      }
    }, acc.description));
  }))), React.createElement("div", {
    style: {
      maxWidth: '880px',
      margin: '0 auto',
      background: '#ffffff',
      padding: '2.5rem',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-light)'
    }
  }, React.createElement("h2", {
    style: {
      textAlign: 'center',
      marginBottom: '1.75rem',
      color: 'var(--navy-900)'
    }
  }, "Frequently Asked Questions on Online Degrees"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, data.frequentlyAskedQuestions.map(function (faq, fIdx) {
    return React.createElement("div", {
      key: fIdx,
      style: {
        background: 'var(--bg-surface-alt)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem'
      }
    }, React.createElement("h4", {
      style: {
        fontSize: '1rem',
        color: 'var(--navy-900)',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }
    }, React.createElement("span", null, "\u2753"), " ", faq.q), React.createElement("p", {
      style: {
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        margin: 0,
        paddingLeft: '1.5rem',
        lineHeight: '1.6'
      }
    }, faq.a));
  })))));
};
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo;
function App() {
  var _useState = useState('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activePage = _useState2[0],
    setActivePage = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    viewingUniversity = _useState4[0],
    setViewingUniversity = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var _useState7 = useState('All'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDegree = _useState8[0],
    setSelectedDegree = _useState8[1];
  var _useState9 = useState('All'),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedNaac = _useState10[0],
    setSelectedNaac = _useState10[1];
  var _useState11 = useState(300000),
    _useState12 = _slicedToArray(_useState11, 2),
    maxBudget = _useState12[0],
    setMaxBudget = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    onlyOnlineExam = _useState14[0],
    setOnlyOnlineExam = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    onlyEmi = _useState16[0],
    setOnlyEmi = _useState16[1];
  var _useState17 = useState('featured'),
    _useState18 = _slicedToArray(_useState17, 2),
    sortBy = _useState18[0],
    setSortBy = _useState18[1];
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    compareList = _useState20[0],
    setCompareList = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showCompareModal = _useState22[0],
    setShowCompareModal = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showWizardModal = _useState24[0],
    setShowWizardModal = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    leadModalData = _useState26[0],
    setLeadModalData = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showAdminCRM = _useState28[0],
    setShowAdminCRM = _useState28[1];
  var universities = window.UNIVERSITIES_DATA || [];
  useEffect(function () {
    var handleHashChange = function handleHashChange() {
      var hash = window.location.hash || '#/';
      if (hash.startsWith('#/university/')) {
        var slug = hash.replace('#/university/', '');
        var found = universities.find(function (u) {
          return u.slug === slug || u.id === slug;
        });
        if (found) {
          setViewingUniversity(found);
          setActivePage('university');
        } else {
          setActivePage('universities');
        }
      } else if (hash === '#/universities') {
        setViewingUniversity(null);
        setActivePage('universities');
      } else if (hash === '#/compare') {
        setViewingUniversity(null);
        setActivePage('compare');
      } else if (hash === '#/roi-calculator') {
        setViewingUniversity(null);
        setActivePage('roi-calculator');
      } else if (hash === '#/emi-calculator') {
        setViewingUniversity(null);
        setActivePage('emi-calculator');
      } else if (hash === '#/ugc-verifier') {
        setViewingUniversity(null);
        setActivePage('ugc-verifier');
      } else {
        setViewingUniversity(null);
        setActivePage('home');
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return function () {
      return window.removeEventListener('hashchange', handleHashChange);
    };
  }, [universities]);
  var navigateTo = function navigateTo(pageName) {
    var uni = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (pageName === 'university' && uni) {
      setViewingUniversity(uni);
      window.location.hash = "#/university/".concat(uni.slug);
    } else if (pageName === 'universities') {
      window.location.hash = "#/universities";
    } else if (pageName === 'compare') {
      window.location.hash = "#/compare";
    } else if (pageName === 'roi-calculator') {
      window.location.hash = "#/roi-calculator";
    } else if (pageName === 'emi-calculator') {
      window.location.hash = "#/emi-calculator";
    } else if (pageName === 'ugc-verifier') {
      window.location.hash = "#/ugc-verifier";
    } else {
      window.location.hash = "#/";
    }
  };
  var filteredUniversities = useMemo(function () {
    return universities.filter(function (uni) {
      if (searchQuery.trim()) {
        var q = searchQuery.toLowerCase();
        var matchesName = uni.name.toLowerCase().includes(q) || uni.shortName.toLowerCase().includes(q);
        var matchesLocation = uni.city.toLowerCase().includes(q) || uni.state.toLowerCase().includes(q);
        var matchesCourse = uni.popularCourses.some(function (c) {
          return c.name.toLowerCase().includes(q) || c.degree.toLowerCase().includes(q) || c.specializations && c.specializations.some(function (s) {
            return s.toLowerCase().includes(q);
          });
        });
        if (!matchesName && !matchesLocation && !matchesCourse) return false;
      }
      if (selectedDegree !== 'All') {
        var hasDegree = uni.popularCourses.some(function (c) {
          return c.degree === selectedDegree;
        });
        if (!hasDegree) return false;
      }
      if (selectedNaac !== 'All') {
        if (!uni.accreditations.naacGrade.includes(selectedNaac)) return false;
      }
      var relevantCourse = uni.popularCourses.find(function (c) {
        return selectedDegree === 'All' ? true : c.degree === selectedDegree;
      }) || uni.popularCourses[0];
      if (relevantCourse && relevantCourse.totalFee > maxBudget) {
        return false;
      }
      if (onlyOnlineExam && !uni.examMode.includes('100% Online')) {
        return false;
      }
      if (onlyEmi && !uni.emiAvailable) {
        return false;
      }
      return true;
    }).sort(function (a, b) {
      if (sortBy === 'rating') return b.metrics.rating - a.metrics.rating;
      if (sortBy === 'highestCtc') return parseFloat(b.metrics.highestCtc) - parseFloat(a.metrics.highestCtc);
      if (sortBy === 'feeLowToHigh') {
        var aFee = a.popularCourses[0] ? a.popularCourses[0].totalFee : 0;
        var bFee = b.popularCourses[0] ? b.popularCourses[0].totalFee : 0;
        return aFee - bFee;
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [universities, searchQuery, selectedDegree, selectedNaac, maxBudget, onlyOnlineExam, onlyEmi, sortBy]);
  var handleToggleCompare = function handleToggleCompare(university) {
    var exists = compareList.find(function (u) {
      return u.id === university.id;
    });
    if (exists) {
      setCompareList(compareList.filter(function (u) {
        return u.id !== university.id;
      }));
    } else {
      if (compareList.length >= 4) {
        alert('You can compare up to 4 universities at a time. Please remove one first.');
        return;
      }
      setCompareList([].concat(_toConsumableArray(compareList), [university]));
    }
  };
  var handleAddCompare = function handleAddCompare(university) {
    if (!compareList.find(function (u) {
      return u.id === university.id;
    }) && compareList.length < 4) {
      setCompareList([].concat(_toConsumableArray(compareList), [university]));
    }
  };
  var handleRemoveCompare = function handleRemoveCompare(uniId) {
    setCompareList(compareList.filter(function (u) {
      return u.id !== uniId;
    }));
  };
  var handleResetFilters = function handleResetFilters() {
    setSelectedDegree('All');
    setSelectedNaac('All');
    setMaxBudget(300000);
    setOnlyOnlineExam(false);
    setOnlyEmi(false);
    setSearchQuery('');
  };
  return React.createElement("div", {
    className: "app-root"
  }, React.createElement(window.Header, {
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data || {
        title: 'Book 1-on-1 Free Expert Counselling'
      });
    },
    onOpenAdminCRM: function onOpenAdminCRM() {
      return setShowAdminCRM(true);
    },
    compareList: compareList,
    onOpenCompare: function onOpenCompare() {
      return navigateTo('compare');
    },
    activePage: activePage,
    onNavigate: navigateTo
  }), activePage === 'university' && viewingUniversity && React.createElement(window.UniversityDetailPage, {
    university: viewingUniversity,
    onBack: function onBack() {
      return navigateTo('universities');
    },
    onOpenLeadModal: function onOpenLeadModal(data) {
      return setLeadModalData(data);
    },
    onToggleCompare: handleToggleCompare,
    isComparing: !!compareList.find(function (item) {
      return item.id === viewingUniversity.id;
    }),
    onSelectUniversity: function onSelectUniversity(u) {
      return navigateTo('university', u);
    }
  }), activePage === 'universities' && React.createElement(window.AllUniversitiesPage, {
    universities: filteredUniversities,
    searchQuery: searchQuery,
    onSearchChange: setSearchQuery,
    selectedDegree: selectedDegree,
    onSelectDegree: setSelectedDegree,
    selectedNaac: selectedNaac,
    onSelectNaac: setSelectedNaac,
    maxBudget: maxBudget,
    onBudgetChange: setMaxBudget,
    onlyOnlineExam: onlyOnlineExam,
    onToggleOnlineExam: setOnlyOnlineExam,
    onlyEmi: onlyEmi,
    onToggleEmi: setOnlyEmi,
    onResetFilters: handleResetFilters,
    sortBy: sortBy,
    onSortChange: setSortBy,
    onOpenUniversityPage: function onOpenUniversityPage(u) {
      return navigateTo('university', u);
    },
    onOpenLeadModal: function onOpenLeadModal(data) {
      return setLeadModalData(data);
    },
    onToggleCompare: handleToggleCompare,
    compareList: compareList
  }), activePage === 'compare' && React.createElement(window.ComparePage, {
    compareList: compareList,
    onAddUniversity: handleAddCompare,
    onRemoveUniversity: handleRemoveCompare,
    onOpenLeadModal: function onOpenLeadModal(data) {
      return setLeadModalData(data);
    },
    onOpenUniversityPage: function onOpenUniversityPage(u) {
      return navigateTo('university', u);
    }
  }), activePage === 'roi-calculator' && React.createElement(window.ROICalculatorPage, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'emi-calculator' && React.createElement(window.EMICalculatorPage, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'ugc-verifier' && React.createElement(window.UGCVerifierPage, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), activePage === 'home' && React.createElement(React.Fragment, null, React.createElement(window.HeroSection, {
    searchQuery: searchQuery,
    onSearchChange: setSearchQuery,
    selectedDegree: selectedDegree,
    onSelectDegree: function onSelectDegree(deg) {
      setSelectedDegree(deg);
      navigateTo('universities');
    },
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement("section", {
    className: "stats-bar-section"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "stats-grid"
  }, React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "25+"), React.createElement("p", null, "UGC-DEB Approved Universities")), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "50,000+"), React.createElement("p", null, "Students Counseled & Enrolled")), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "\u20B935 LPA"), React.createElement("p", null, "Highest Placement CTC")), React.createElement("div", {
    className: "stat-item"
  }, React.createElement("h3", null, "100% Free"), React.createElement("p", null, "Zero Agent Brokerage"))))), React.createElement("section", {
    className: "section-padding",
    style: {
      backgroundColor: 'var(--bg-main)',
      paddingBottom: '2rem'
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "tools-showcase-grid"
  }, React.createElement("div", {
    className: "tool-feature-card",
    onClick: function onClick() {
      return setShowWizardModal(true);
    },
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "tool-icon-wrap",
    style: {
      background: '#fff7ed',
      color: '#ff7a00'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\u26A1")), React.createElement("h3", null, "AI College Finder Wizard"), React.createElement("p", null, "Confused between 20+ universities? Answer 4 quick questions and get an instant AI match score.")), React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontWeight: '700',
      fontSize: '0.9rem'
    }
  }, "Launch 2-Min Wizard \u2192")), React.createElement("div", {
    className: "tool-feature-card",
    onClick: function onClick() {
      return navigateTo('roi-calculator');
    },
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "tool-icon-wrap",
    style: {
      background: '#ecfdf5',
      color: '#059669'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\uD83D\uDCC8")), React.createElement("h3", null, "Course ROI & Salary Jump"), React.createElement("p", null, "Calculate your estimated post-degree salary hike, payback period, and 5-year career returns.")), React.createElement("span", {
    style: {
      color: '#059669',
      fontWeight: '700',
      fontSize: '0.9rem'
    }
  }, "Go to ROI Calculator Page \u2192")), React.createElement("div", {
    className: "tool-feature-card",
    onClick: function onClick() {
      return navigateTo('emi-calculator');
    },
    style: {
      cursor: 'pointer'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "tool-icon-wrap",
    style: {
      background: '#eff6ff',
      color: '#1a56db'
    }
  }, React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\uD83D\uDCB3")), React.createElement("h3", null, "0% Monthly EMI Planner"), React.createElement("p", null, "Calculate zero-cost monthly installments and check instant scholarship eligibility.")), React.createElement("span", {
    style: {
      color: '#1a56db',
      fontWeight: '700',
      fontSize: '0.9rem'
    }
  }, "Go to EMI Planner Page \u2192"))))), React.createElement("section", {
    id: "universities-section",
    className: "section-padding"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section-header"
  }, React.createElement("span", {
    className: "section-tag"
  }, "\uD83C\uDFEB Top Online Universities"), React.createElement("h2", {
    className: "section-title"
  }, "Explore Top UGC-DEB Approved Online Universities"), React.createElement("p", {
    className: "section-subtitle"
  }, "Authentic NAAC grades, verified fee breakdowns, 0% EMI options, and real placement records.")), React.createElement("div", {
    className: "catalog-layout"
  }, React.createElement(window.FilterSidebar, {
    selectedDegree: selectedDegree,
    onSelectDegree: setSelectedDegree,
    selectedNaac: selectedNaac,
    onSelectNaac: setSelectedNaac,
    maxBudget: maxBudget,
    onBudgetChange: setMaxBudget,
    onlyOnlineExam: onlyOnlineExam,
    onToggleOnlineExam: setOnlyOnlineExam,
    onlyEmi: onlyEmi,
    onToggleEmi: setOnlyEmi,
    onResetFilters: handleResetFilters
  }), React.createElement("div", null, React.createElement("div", {
    className: "catalog-content-header"
  }, React.createElement("div", {
    className: "results-count"
  }, "Showing ", React.createElement("strong", null, filteredUniversities.length), " Universities", selectedDegree !== 'All' && React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " for Online ", selectedDegree)), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: function onClick() {
      return navigateTo('universities');
    }
  }, "View All Universities Page \u2192"))), React.createElement("div", {
    className: "university-grid"
  }, filteredUniversities.slice(0, 6).map(function (uni) {
    return React.createElement(window.UniversityCard, {
      key: uni.id,
      university: uni,
      selectedDegree: selectedDegree,
      onViewDetails: function onViewDetails(u) {
        return navigateTo('university', u);
      },
      onOpenLeadModal: function onOpenLeadModal(data) {
        return setLeadModalData(data);
      },
      onToggleCompare: handleToggleCompare,
      isComparing: !!compareList.find(function (item) {
        return item.id === uni.id;
      })
    });
  })), filteredUniversities.length > 6 && React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '2.5rem'
    }
  }, React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: function onClick() {
      return navigateTo('universities');
    }
  }, "\u26A1 View All ", filteredUniversities.length, " Universities on Dedicated Page \u2192")))))), React.createElement(window.ROICalculator, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement(window.EMICalculator, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement(window.UGCVerifier, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  }), React.createElement(window.TestimonialsSection, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    }
  })), React.createElement(window.Footer, {
    onNavigate: navigateTo,
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    },
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data || {
        title: 'Book 1-on-1 Free Expert Counselling'
      });
    }
  }), React.createElement("div", {
    className: "compare-floating-tray ".concat(compareList.length > 0 ? 'active' : '')
  }, React.createElement("div", {
    className: "compare-tray-thumbnails"
  }, compareList.map(function (u) {
    return React.createElement("div", {
      key: u.id,
      className: "compare-thumb",
      title: u.name
    }, u.shortName.slice(0, 3).toUpperCase(), React.createElement("div", {
      className: "compare-thumb-remove",
      onClick: function onClick(e) {
        e.stopPropagation();
        handleRemoveCompare(u.id);
      }
    }, "\u2715"));
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      fontWeight: '700'
    }
  }, compareList.length, " / 4 Selected"), React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: '#cbd5e1'
    }
  }, compareList.length < 2 ? 'Add 1 more to compare' : 'Ready to compare side-by-side')), React.createElement("button", {
    className: "btn btn-primary btn-sm",
    disabled: compareList.length < 2,
    onClick: function onClick() {
      return navigateTo('compare');
    }
  }, "Compare Now (", compareList.length, ") \u2192")), React.createElement(window.FloatingWidgets, {
    onOpenCounselling: function onOpenCounselling(data) {
      return setLeadModalData(data);
    },
    onOpenWizard: function onOpenWizard() {
      return setShowWizardModal(true);
    }
  }), showWizardModal && React.createElement(window.AIWizardModal, {
    onClose: function onClose() {
      return setShowWizardModal(false);
    },
    onOpenLeadModal: function onOpenLeadModal(data) {
      setShowWizardModal(false);
      setLeadModalData(data);
    }
  }), leadModalData && React.createElement(window.LeadCaptureModal, {
    initialData: leadModalData,
    onClose: function onClose() {
      return setLeadModalData(null);
    },
    onSuccess: function onSuccess() {}
  }), showAdminCRM && React.createElement(window.LeadDashboardModal, {
    onClose: function onClose() {
      return setShowAdminCRM(false);
    }
  }));
}
function initApp() {
  var rootEl = document.getElementById('root');
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(React.createElement(App, null));
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
