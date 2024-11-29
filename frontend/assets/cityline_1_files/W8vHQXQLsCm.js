;/*FB_PKG_DELIM*/

__d("CastingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);c=a.createContext(null);e=a.createContext(null);f=a.createContext(null);g.CastingStateContext=b;g.CastingExperienceStateContext=c;g.SetCastingControllerContext=e;g.CastingControllerContext=f}),98);
__d("CometContextualMessage.react",["fbt","ix","CometRow.react","CometRowItem.react","FDSIcon.react","FDSTextPairing.react","FbtResultBase","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react"),m={root:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",overflowX:"x6ikm8r",overflowY:"x10wlt62",paddingTop:"x1iorvi4",paddingEnd:"x150jy0e",paddingBottom:"x1l90r2v",paddingStart:"x1e558r4",$$css:!0}},n={highlight:{backgroundColor:"xwnonoy",$$css:!0},"highlight-bg":{backgroundColor:"xfmpgtx",$$css:!0},primary:{backgroundColor:"x1jx94hy",$$css:!0},secondary:{backgroundColor:"xlhe6ec",$$css:!0}};b=l.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);var e=a.addOnPrimary,f=a.addOnSecondary,g=a.body,k=a.headline,o=a.headlineLineLimit,p=a.icon,q=a.level;q=q===void 0?3:q;var r=a.meta,s=a.testid;s=a.type;s=s===void 0?"primary":s;var t=a.onClose!=null?a.onClose:null;a=a.headlineAriaLabel!=null?a.headlineAriaLabel:typeof k==="string"||k instanceof c("FbtResultBase")?k:null;return l.jsxs("div",{className:(j||(j=c("stylex")))(m.root,n[s]),"data-testid":void 0,ref:b,children:[l.jsxs(c("CometRow.react"),{verticalAlign:"center",children:[p!=null?l.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:l.jsx("div",{className:"x1rdy4ex",children:p})}):null,l.jsx(c("CometRowItem.react"),{expanding:!0,children:l.jsx(c("FDSTextPairing.react"),{body:g,bodyColor:s==="highlight"?"white":"secondary",headline:k,headlineColor:s==="highlight"?"white":"primary",headlineLineLimit:(b=o)!=null?b:2,isSemanticHeading:!0,level:q})}),t!=null?l.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:l.jsx("div",{className:"xcud41i x9otpla",children:l.jsx(c("FDSIcon.react"),{"aria-label":a!=null?h._("__JHASH__jdA38No1bHZ__JHASH__",[h._param("card name",a)]):h._("__JHASH__PfdWOKkgwGk__JHASH__"),color:s==="highlight"?"white":"secondary",icon:d("fbicon")._(i("478232"),16),onPress:t,size:16,testid:void 0})})}):null]}),e,f,r!=null&&l.jsx(c("CometRow.react"),{paddingTop:12,children:l.jsx(c("CometRowItem.react"),{children:l.jsx(c("FDSTextPairing.react"),{level:q,meta:r})})})]})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),226);
__d("CometFeedARIAProperties.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(Object.freeze({}));g["default"]=b}),98);
__d("CometFeedAdsProductContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({adId:null,minGapRule:null,minGapType:null});g["default"]=b}),98);
__d("CometFeedStoryFeedLocationContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("CometHero.react",["hero-tracing-placeholder"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("hero-tracing-placeholder").HeroComponent}),98);
__d("CometLexicalPlaceholder.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={placeholder:{color:"xi81zsa",overflowX:"x6ikm8r",overflowY:"x10wlt62",pointerEvents:"x47corl",position:"x10l6tqk",start:"x17qophe",textOverflow:"xlyipyv",top:"x13vifvy",userSelect:"x87ps6o",whiteSpace:"xuxw1ft",width:"xh8yej3",$$css:!0}};function a(a){var b=a.children;a=a.xstyle;return j.jsx("div",{children:b,className:(h||(h=c("stylex")))(k.placeholder,a)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometScrollAnchorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometScrollableAreaImpl.react",["BaseScrollableArea.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);var d=a.horizontal;d=d===void 0?!0:d;var e=a.id,f=a.vertical;f=f===void 0?!0:f;a=babelHelpers.objectWithoutPropertiesLoose(a,["horizontal","id","vertical"]);return i.jsx(c("BaseScrollableArea.react"),babelHelpers["extends"]({},a,{horizontal:d,id:e,ref:b,vertical:f}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("CometScrollableArea.react",["CometScrollableAreaImpl.react"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("CometScrollableAreaImpl.react")}),98);
__d("CometUFIReactionsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7346782002075872"}),null);
__d("CometUserActivity",["BaseEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=5e3,i=500,j=-5,k=Date.now(),l=k,m=!1,n=Date.now(),o=document.hasFocus?document.hasFocus():!0,p=0,q=Date.now(),r=-1,s=-1,t=!1,u=!1,v=new(c("BaseEventEmitter"))();function b(a){var b=w(function(c,d){b.unsubscribe(),a(d)});return b}function w(a){var b=v.addListener("user_activity",function(b){return a("user_activity",b)});return{unsubscribe:function(){return b.remove()}}}function d(a){return new Date().getTime()-k<(a!=null?a:h)}function e(){return o}function f(){return m}function x(){o=!0,m=!1}function y(){return n}function z(){return k}function A(a){p=a}function B(){return q}function C(){return t}function D(){return u}function E(){return l}function F(){k=Date.now(),l=k,m=!1,n=Date.now(),o=document.hasFocus?document.hasFocus():!0,p=0,q=Date.now(),r=-1,s=-1,t=!1,u=!1}function G(a){a.unsubscribe()}function H(a){J(a,i)}function I(a){J(a,0)}function J(b,c){c===void 0&&(c=0);var d=a.MouseEvent,e=a.KeyboardEvent;if(d&&b instanceof d){if(/^mouse(enter|leave|move|out|over)$/.test(b.type)&&b.pageX==r&&b.pageY==s)return;r=b.pageX;s=b.pageY}else e&&b instanceof e&&(u=!0);(b.type==="click"||b.type==="dblclick"||b.type==="contextmenu")&&(t=!0);k=Date.now();d=k-l;d>=c?(l=k,o||(q=k),d>=(p||h)&&(m=!0,n=k),v.emit("user_activity",{event:b,idleness:d,last_inform:l})):d<j&&(l=k)}function K(a){o=!0,n=Date.now(),I(a)}function L(){o=!1,m=!0,q=Date.now()}window.addEventListener("scroll",H,{capture:!0,passive:!0});window.addEventListener("focus",K,{capture:!1,passive:!0});window.addEventListener("blur",L,{capture:!1,passive:!0});(function(){var a=document.documentElement;if(a==null)return;["keydown","mouseover","mousemove","click"].forEach(function(b){a.addEventListener(b,H,{capture:!0,passive:!0})})})();g.EVENT_INTERVAL_MS=i;g.subscribeOnce=b;g.subscribe=w;g.isActive=d;g.isOnTab=e;g.hasBeenInactive=f;g.resetActiveStatus=x;g.getLastInActiveEnds=y;g.getLastActive=z;g.setIdleTime=A;g.getLastLeaveTime=B;g.hasClicked=C;g.hasInteractedWithKeyboard=D;g.getLastInformTime=E;g.reset=F;g.unsubscribe=G}),98);
__d("SubscriptionsHandler",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a){return a.remove||a.reset||a.unsubscribe||a.cancel||a.dispose}function j(a){i(a).call(a)}a=function(){function a(){this.$1=[]}var b=a.prototype;b.addSubscriptions=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.every(i)||h(0,3659);this.$1!=null?this.$1=this.$1.concat(b):b.forEach(j)};b.engage=function(){this.$1==null&&(this.$1=[])};b.release=function(){this.$1!=null&&(this.$1.forEach(j),this.$1=null)};b.releaseOne=function(a){var b=this.$1;if(b==null)return;var c=b.indexOf(a);c!==-1&&(j(a),b.splice(c,1),b.length===0&&(this.$1=null))};return a}();g["default"]=a}),98);
__d("UFI2UserActivityIdleTimeout",[],(function(a,b,c,d,e,f){"use strict";a=3e4;f["default"]=a}),66);
__d("UserActivity",["cr:1634616"],(function(a,b,c,d,e,f){e.exports=b("cr:1634616")}),null);
__d("CometUserActivityMonitor",["ErrorGuard","ExecutionEnvironment","SubscriptionsHandler","UFI2UserActivityIdleTimeout","UserActivity","Visibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=[],k=!1,l=(h||(h=c("ExecutionEnvironment"))).canUseDOM&&c("UserActivity").isOnTab()&&c("UserActivity").isActive(c("UFI2UserActivityIdleTimeout"))?"ACTIVE":"INACTIVE",m=[],n;function o(a){k=!0;m.push.apply(m,j);var b=function(){var b=m.shift();(i||(i=c("ErrorGuard"))).applyWithGuard(function(){return b(a)},null,[],{name:"CometUserActivityMonitor"})};while(m.length)b();k=!1}function p(a){var b=l;l=a;b!==a&&o(a)}function a(){return l}d=function(){n==null&&(n=new(c("SubscriptionsHandler"))(),n.addSubscriptions(c("UserActivity").subscribe(function(a,b){a=b.event;if(/^mouse(enter|leave|move|over|out)$/.test(a.type)&&c("UserActivity").isOnTab()===!1)return;p("ACTIVE")}),function(){var a=function(){p("INACTIVE")};window.addEventListener("blur",a,{passive:!0});return{remove:function(){return window.removeEventListener(a,{passive:!0})}}}(),c("Visibility").addListener(c("Visibility").HIDDEN,function(){p("INACTIVE")})))};function b(a){j.push(a);k&&m.push(a);var b=!1;return{remove:function(){if(b)return;var c=j.indexOf(a);c!==-1&&j.splice(c,1);if(k){c=m.indexOf(a);c!==-1&&m.splice(c,1)}b=!0}}}(h||(h=c("ExecutionEnvironment"))).canUseDOM&&d();g.getActivityState=a;g.init=d;g.subscribe=b}),98);
__d("CometVPVDUserActivityMonitor",["CometUserActivityMonitor"],(function(a,b,c,d,e,f,g){"use strict";a={isUserActive:function(){return d("CometUserActivityMonitor").getActivityState()==="ACTIVE"},subscribe:function(a){var b=d("CometUserActivityMonitor").subscribe(function(b){b=b==="ACTIVE";a&&a(b)});return function(){b&&b.remove()}}};g["default"]=a}),98);
__d("TrustedTypesNoOpPolicy_DO_NOT_USE",["TrustedTypes","TrustedTypesUtils"],(function(a,b,c,d,e,f,g){"use strict";a={createScriptURL:d("TrustedTypesUtils").noop,createHTML:d("TrustedTypesUtils").noop,createScript:d("TrustedTypesUtils").noop};b=c("TrustedTypes").createPolicy("noop-do-not-use",a);e=b;g["default"]=e}),98);
__d("TrustedTypesLinkTagHTMLPolicy",["TrustedTypes","err"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){if(a==="<link />")return a;throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")}};b=c("TrustedTypes").createPolicy("link-tag-html",a);d=b;g["default"]=d}),98);
__d("getMarkupWrap",["invariant","ExecutionEnvironment","TrustedTypesLinkTagHTMLPolicy"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k={};b=[1,'<select multiple="true">',"</select>"];d=[1,"<table>","</table>"];e=[3,"<table><tbody><tr>","</tr></tbody></table>"];var l=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],m={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:b,option:b,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:e,th:e};f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(a){m[a]=l,k[a]=!0});function a(a){a=a;!j&&h(0,144);Object.prototype.hasOwnProperty.call(m,a)||(a="*");Object.prototype.hasOwnProperty.call(k,a)||(a==="*"?j.innerHTML=c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />"):j.innerHTML="<"+a+"></"+a+">",k[a]=!j.firstChild);return k[a]?m[a]:null}g["default"]=a}),98);
__d("createNodesFromMarkup",["invariant","ExecutionEnvironment","TrustedTypesNoOpPolicy_DO_NOT_USE","getMarkupWrap"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k=/^\s*<(\w+)/;function l(a){a=a.match(k);return a&&a[1].toLowerCase()}function a(a,b){var d=j;!j&&h(0,5001);var e=l(a);e=e&&c("getMarkupWrap")(e);if(e){d.innerHTML=e[1]+a+e[2];e=e[0];while(e--)d=d.lastChild}else d.innerHTML=c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);e=d.getElementsByTagName("script");e.length&&(b||h(0,5002),Array.from(e).forEach(b));a=Array.from(d.childNodes);while(d.lastChild)d.removeChild(d.lastChild);return a}g["default"]=a}),98);
__d("evalGlobal",[],(function(a,b,c,d,e,f){function a(a){if(typeof a!=="string")throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");if(!a)return;var b=document.createElement("script");try{b.appendChild(document.createTextNode(a))}catch(c){b.text=a}a=document.getElementsByTagName("head")[0]||document.documentElement;a.appendChild(b);a.removeChild(b)}f["default"]=a}),66);
__d("HTML",["invariant","Bootloader","FBLogger","createNodesFromMarkup","emptyFunction","evalGlobal"],(function(a,b,c,d,e,f,g){var h=/(<(\w+)[^>]*?)\/>/g,i={abbr:!0,area:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0};a=function(){"use strict";function a(c){c&&typeof c.__html==="string"&&(c=c.__html);if(!(this instanceof a))return c instanceof a?c:new a(c);if(c){var d=typeof c;d==="string"||g(0,277,d)}this._markup=c||"";this._defer=!1;this._nodes=null;this._inlineJS=b("emptyFunction");this._rootNode=null;this._hasInlineJs=!1}var c=a.prototype;c.toString=function(){return this._markup};c.getContent=function(){return this._markup};c.getNodes=function(){this._fillCache();return this._nodes};c.getRootNode=function(){this._rootNode&&g(0,278);var a=this.getNodes();if(a.length===1)this._rootNode=a[0];else{var b=document.createDocumentFragment();for(var c=0;c<a.length;c++)b.appendChild(a[c]);this._rootNode=b}return this._rootNode};c.getAction=function(){var a=this;this._fillCache();var b=function(){a._inlineJS()};return this._defer?function(){setTimeout(b,0)}:b};c._fillCache=function(){if(this._nodes!==null)return;if(!this._markup){this._nodes=[];return}var a=this._markup.replace(h,function(a,b,c){return i[c.toLowerCase()]?a:b+"></"+c+">"}),c=null;a=b("createNodesFromMarkup")(a,function(a){b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s",Boolean(a.src),a.type==null||a.type===""?"<unknown>":a.type),a.type!=="application/ld+json"&&a.type!=="application/json"&&(c=c||[],c.push(a.src?b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"),a.src):b("evalGlobal").bind(null,a.innerHTML)),a.parentNode.removeChild(a))});c&&(this._hasInlineJs=!0,this._inlineJS=function(){for(var a=0;a<c.length;a++)c[a]()});this._nodes=a};c.setDeferred=function(a){this._defer=!!a;return this};c.hasInlineJs=function(){return this._hasInlineJs};a.isHTML=function(b){return!!b&&(b instanceof a||b.__html!==void 0)};a.replaceJSONWrapper=function(b){return b&&b.__html!==void 0?new a(b.__html):b};return a}();e.exports=a}),null);
__d("MLCKeyBindingUtil",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=c("UserAgent").isPlatform("Mac OS X");b=String.fromCodePoint(h?8984:8963);function a(a){return a!==null&&(h?a.metaKey:a.ctrlKey)}g.COMMAND_UNICODE=b;g.hasCommandModifier=a}),98);
__d("VirtualizationContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("compactArray",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];for(var c=0;c<a.length;++c){var d=a[c];d!=null&&b.push(d)}return b}f["default"]=a}),66);
__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f,g){d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);g===void 0&&(g=!1);var h,i=!0;function j(){for(var k=arguments.length,l=new Array(k),m=0;m<k;m++)l[m]=arguments[m];var n;if(g){n=c("TimeSlice").guard(function(){i=!0,h=null},"debounceCore");if(!i){f(h);h=e(n,b);return}i=!1;a.apply(d,l)}else j.reset(),n=c("TimeSlice").guard(function(){h=null,a.apply(d,l)},"debounceCore");n.__SMmeta=a.__SMmeta;h=e(n,b)}j.reset=function(){f(h),h=null,i=!0};j.isPending=function(){return h!=null};return j}g["default"]=a}),98);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f){b===void 0&&(b=100);var g=function(a,b,d){return c("setTimeout")(a,b,d,!e)};return c("debounceCore")(a,b,d,g,c("clearTimeout"),f)}g["default"]=a}),98);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}f["default"]=a}),66);
__d("goURIOnWindow",["ConstUriUtils","FBLogger","err"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e=typeof b==="string"?d("ConstUriUtils").getUri(b):d("ConstUriUtils").isConstUri(b);if(e){if(a==null)return!1;a.location=e.toString();return!0}else{a="Invalid URI "+b.toString()+" provided to goURIOnWindow";c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(a);return!1}}g["default"]=a}),98);
__d("intlSummarizeNumber",["FbtNumberType","IntlCompactDecimalNumberFormatConfig","IntlVariations","intlNumUtils"],(function(a,b,c,d,e,f,g){var h=3,i=14,j={ROUND:"ROUND",TRUNCATE:"TRUNCATE"},k={SHORT:"SHORT",LONG:"LONG"};function a(a,b,d,e){d===void 0&&(d=k.SHORT);e===void 0&&(e=j.ROUND);d=c("IntlCompactDecimalNumberFormatConfig")[d===k.SHORT?"short_patterns":"long_patterns"];var f=a===0?0:Math.floor(Math.log10(Math.abs(a)));f>i&&(f=i);var g=l(a,f,b,e,d),m=g[0],n=g[1];g=g[2];if(g&&e===j.ROUND){f+=1;g=l(a,f,b,e,d);m=g[0];n=g[1];g[2]}e=c("FbtNumberType").getVariation(m)||c("IntlVariations").NUMBER_OTHER;g=f.toString();g=d==null?void 0:(d=d[g])==null?void 0:d[e.toString()];if(!g||f<h||g.positive_prefix_pattern===""&&g.positive_suffix_pattern===""){d=b===void 0?0:b;return c("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}return g&&g.min_integer_digits===0&&m===1?g.positive_prefix_pattern+g.positive_suffix_pattern:(g&&g.positive_prefix_pattern||"")+c("intlNumUtils").formatNumberWithThousandDelimiters(m,n)+(g&&g.positive_suffix_pattern||"")}function l(a,b,d,e,f){var g=b.toString();g=f==null?void 0:(f=f[g])==null?void 0:f[c("IntlVariations").NUMBER_OTHER.toString()];f=g&&g.min_integer_digits||b+1;var h=b-f+1;h=Math.abs(a)/Math.pow(10,h);var k=d!=null;d=k?d:g&&g.min_fraction_digits;d==null&&(d=b>2?1:0);g=e===j.TRUNCATE?c("intlNumUtils").truncateLongNumber(h.toString(),d):h.toFixed(d);e=parseFloat(g)*(a<0?-1:1);return[e,e%1===0&&!k?0:d,g.length>f+(d>0?d+1:0)+(h>=0?0:1)&&b<i]}g["default"]=a}),98);
__d("isIntersectionObserverEntryVPVDVisible",["intersectionObserverEntryIsIntersecting"],(function(a,b,c,d,e,f,g){"use strict";var h=200,i={height:0};function a(a,b){b===void 0&&(b=h);var d=c("intersectionObserverEntryIsIntersecting")(a);if(d===!1)return!1;d=a.boundingClientRect;var e=a.intersectionRect,f=a.rootBounds;d=d||i;e=e||i;f=f||i;return e.height>=b||e.height>=f.height/2||e.height===d.height||a.intersectionRatio>.95}g["default"]=a}),98);
__d("isIntersectionObserverEntryVPVDVisiblePct",["intersectionObserverEntryIsIntersecting"],(function(a,b,c,d,e,f,g){"use strict";var h=.5,i={height:0};function a(a,b){b===void 0&&(b=h);var d=c("intersectionObserverEntryIsIntersecting")(a);if(d===!1)return!1;d=a.intersectionRect;var e=a.rootBounds,f=a.boundingClientRect;if(f==null||f.height===0)return!1;d=d||i;e=e||i;return d.height/f.height>=b||d.height>=e.height/2||a.intersectionRatio>.95}g["default"]=a}),98);
__d("scrollTo",["debounce","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,d=a.onScrollComplete,e=a.onScrollStart,f=babelHelpers.objectWithoutPropertiesLoose(a,["onScrollComplete","onScrollStart"]);b=(b=a.top)!=null?b:window.pageYOffset;a=(a=a.left)!=null?a:window.pageXOffset;e&&e();if(window.pageYOffset===b&&window.pageXOffset===a){d&&d();return{dispose:c("emptyFunction")}}e=!1;try{var g=document.documentElement;if(g==null){d&&d();return{dispose:c("emptyFunction")}}g="scrollBehavior"in g.style;g?window.scrollTo(f):e=!0}catch(a){e=!0}if(e){window.scrollTo(a,b);d&&d();return{dispose:c("emptyFunction")}}var h,i=!1;d!=null&&(h=c("debounce")(function(){i=!0,window.removeEventListener("scroll",h),d&&d()},200),window.addEventListener("scroll",h,{passive:!0}),window.dispatchEvent(new Event("scroll")));return{dispose:function(){if(i)return;h&&h.reset();window.removeEventListener("scroll",h);window.scrollTo(window.pageYOffset,window.pageXOffset)}}}g["default"]=a}),98);
__d("scrollIntoView",["debounce","emptyFunction","recoverableViolation","scrollTo"],(function(a,b,c,d,e,f,g){"use strict";var h={center:"center",top:"start",bottom:"end",closest:"nearest"};function a(a,b){b===void 0&&(b=Object.freeze({}));var d=b,e=d.behavior;e=e===void 0?"auto":e;var f=d.onScrollComplete,g=f===void 0?c("emptyFunction"):f;f=d.onScrollStart;f=f===void 0?c("emptyFunction"):f;var j=d.force;j=j===void 0?!1:j;d=d.localScroll;d=d===void 0?!1:d;var k=a.getBoundingClientRect();d=d&&a instanceof HTMLElement?i(a):document.documentElement;if(d==null){c("recoverableViolation")("There is no scrolling element accessible on document, something is seriously wrong and I couldn't imagine the situation you have found yourself in","comet_ui");return{dispose:c("emptyFunction")}}var l=d.clientHeight,m=k.top<=l&&k.bottom>=0;f();if(!j&&m){g!=null&&g();return{dispose:c("emptyFunction")}}j=(f=b.verticalAlign)!=null?f:"closest";try{m="scrollBehavior"in d.style;if(m){a.scrollIntoView({behavior:e,block:j!=null?h[j]:void 0});var n,o=!1;g!=null&&(n=c("debounce")(function(){o=!0,window.removeEventListener("scroll",n,{capture:!0}),g()},200),window.addEventListener("scroll",n,{passive:!0,capture:!0}),window.dispatchEvent(new Event("scroll")));return{dispose:function(){if(o)return;n&&n.reset();window.removeEventListener("scroll",n,{capture:!0});window.scrollTo(window.pageYOffset,window.pageXOffset)}}}}catch(a){}j==="closest"&&(k.top>=l?j="bottom":j="top");var p;switch(j){case"top":p=window.pageYOffset+k.top;break;case"bottom":p=window.pageYOffset+k.bottom-l;break;case"center":p=window.pageYOffset+k.bottom-l+(l-k.height)/2;break}return c("scrollTo")({behavior:e,top:p,onScrollComplete:g})}function i(a){if(a==null||!(a.parentElement instanceof HTMLElement))return document.documentElement;if(a.scrollHeight>a.clientHeight)return a;else return i(a.parentElement)}g["default"]=a}),98);
__d("unfinishedCommentTracking",[],(function(a,b,c,d,e,f){"use strict";var g={base:new Map(),dialog:new Map()},h=!1;function i(){return g[h?"dialog":"base"]}function a(){return Boolean(Array.from(i()).find(function(a){a[0];a=a[1];return Boolean(Array.from(a).find(function(a){return a()===!0}))}))}function b(a,b){if(h){var c=g.base.get(a);if(c!=null&&c.size>0)return}c=(c=i().get(a))!=null?c:new Set();c.add(b);i().set(a,c)}function c(a,b){var c=i().get(a);c!=null&&(c["delete"](b),c.size===0&&i()["delete"](a))}function j(a){h=a,h||(g.dialog.forEach(function(a){return a.clear()}),g.dialog.clear())}function d(){j(!1),[g.base,g.dialog].forEach(function(a){a.clear()})}e={addCheck:b,hasAnyUnfinishedComments:a,removeCheck:c,reset:d,setDialogActive:j};f["default"]=e}),66);
__d("useCometPassiveWindowSize",["ExecutionEnvironment","react","removeFromArray"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=i||d("react");var j=b.useEffect,k=b.useRef,l=b.useState;function m(){if((h||(h=c("ExecutionEnvironment"))).canUseDOM)try{return{innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}}catch(a){return{innerHeight:0,innerWidth:0,outerHeight:0,outerWidth:0}}return{innerHeight:0,innerWidth:0,outerHeight:0,outerWidth:0}}function a(){var a=k([]),b=l(function(){return{getCurrent:function(){return m()},subscribe:function(b){a.current.push(b);return{remove:function(){c("removeFromArray")(a.current,b)}}}}}),d=b[0];b[1];j(function(){var b=function(){var b=Array.from(a.current);b.forEach(function(a){return a()})};window.addEventListener("resize",b);return function(){window.removeEventListener("resize",b)}},[]);return d}g["default"]=a}),98);
__d("useCometScrollAnchor",["BaseDOMContainer.react","BaseViewportMarginsContext","CometScrollAnchorContext","ExecutionEnvironment","HiddenSubtreePassiveContext","react","recoverableViolation","scrollTo"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;d=e.createContext;var k=e.useContext,l=e.useEffect,m=e.useMemo,n=e.useRef,o=e.useState,p=16,q=d(null);function a(a,b,d){d=(d=d)!=null?d:{};var e=d.arbitraryMargin,f=e===void 0?p:e;e=d.verticalAlign;var g=e===void 0?"top":e,h=babelHelpers.objectWithoutPropertiesLoose(d,["arbitraryMargin","verticalAlign"]),i=n(null),j=k(c("CometScrollAnchorContext")),r=m(function(){return b!==null&&a===(j==null?void 0:j.key)&&b===(j==null?void 0:j.value)},[a,j==null?void 0:j.key,j==null?void 0:j.value,b]),s=k(c("HiddenSubtreePassiveContext"));e=o(!s.getCurrentState().hiddenOrBackgrounded);var t=e[0],u=e[1],v=k(c("BaseViewportMarginsContext")),w=n(null),x=k(q),y=function(){var a=i.current;if(a!=null){var b=document.documentElement;if(b==null){c("recoverableViolation")("There is no documentElement accessible on document","comet_ui");return}b=b.clientHeight;a=a.getBoundingClientRect();var d=0;switch(g){case"top":d=a.top-f-v.top;break;case"center":d=a.top-v.top-(b-v.top-v.bottom)/2+a.height/2;break;case"bottom":d=a.bottom-b+f+v.bottom;break}a=window.pageYOffset+d;b=document.body;d=(d=x)!=null?d:b;if((j==null?void 0:j.disableScrollFixer)!==!0&&b!=null&&d!=null&&b.scrollHeight<a+window.innerHeight){var e=w.current=document.createElement("div");e.className="x1n2onr6 x1i1rx1s x8knxv4";e.style.marginTop="-"+(b.scrollHeight-a)+"px";e.style.height=window.innerHeight+"px";d.appendChild(e)}c("scrollTo")(babelHelpers["extends"]({},h,{top:a}))}},z=n(y);l(function(){z.current=y});l(function(){if(r)if(t){z.current();return function(){var a=w.current;a!=null&&a.parentNode!=null&&(a.parentNode.removeChild(a),w.current=null)}}else{var a=s.subscribeToChanges(function(a){a=a.hiddenOrBackgrounded;return u(!a)});return function(){return a.remove()}}},[s,r,t]);return i}function b(a){a=a.children;var b=m(function(){return(h||(h=c("ExecutionEnvironment"))).canUseDOM?document.createElement("div"):null},[]);return j.jsxs(j.Fragment,{children:[j.jsx(q.Provider,{value:b,children:a}),j.jsx(c("BaseDOMContainer.react"),{node:b})]})}b.displayName=b.name+" [from "+f.id+"]";g.CometScrollAnchorMountingPointContext=q;g.useCometScrollAnchor=a;g.CometScrollFixerRoot=b}),98);
__d("useNoopDebuggingInfoComponent",[],(function(a,b,c,d,e,f){"use strict";var g=function(){};function a(){return[null,g]}f["default"]=a}),66);
__d("usePageletMetadata",["CometHeroInteractionContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useLayoutEffect;function a(a,b){var d=i(c("CometHeroInteractionContext").Context);j(function(){d.logMetadata(a,b,d.pageletStack);return function(){d.logMetadata(a,null,d.pageletStack)}},[d,a,b])}g["default"]=a}),98);
__d("usePageletMatchMetadata",["RelayFBModuleResource","usePageletMetadata"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b=b!=null?d("RelayFBModuleResource").getModuleId(b):null;c("usePageletMetadata")("ddd_"+a,b)}g["default"]=a}),98);
__d("vpvdConstants",[],(function(a,b,c,d,e,f){"use strict";a=250;b=200;f.DEFAULT_MIN_VISIBLE_TIME_MS=a;f.DEFAULT_MIN_VISIBLE_PX=b}),66);
__d("useVPVDImpression",["CometVPVDUserActivityMonitor","cr:921407","isIntersectionObserverEntryVPVDVisible","isIntersectionObserverEntryVPVDVisiblePct","react","useVisibilityObserver","vpvdConstants"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var e=a.isLite,f=a.minVisiblePct,g=a.minVisiblePx;g=g===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_PX:g;var h=a.minVisibleTimeMs,j=h===void 0?d("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS:h,k=a.onVPVDEnd;h=a.onVPVDStart;a=b("cr:921407")();var l=a[0];a=a[1];var m=i(function(a){if(a.visibleDuration<j)return;k(a)},[j,k]),n=e===!0?1:g;g=i(function(a){return f!=null?c("isIntersectionObserverEntryVPVDVisiblePct")(a,f):c("isIntersectionObserverEntryVPVDVisible")(a,n)},[n,f]);e=e===!0?null:{thresholdOverride:"EXPENSIVE"};g=babelHelpers["extends"]({activityMonitorOverride:c("CometVPVDUserActivityMonitor"),isEntryInViewport:g},e);e=c("useVisibilityObserver")({onHidden:m,onVisibilityDurationUpdated:a,onVisible:h,options:g});return[e,l]}g["default"]=a}),98);