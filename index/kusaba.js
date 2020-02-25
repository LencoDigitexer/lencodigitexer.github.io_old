/* global $, alert, window, document, localStorage, location: true */
/* global ku_boardspath, ku_cgipath, path, captcha_message */
/* global style_cookie, style_cookie_txt, style_cookie_site */
/* exported togglePassword, toggleMod, toggleOptions, toggleblotter */
/* exported quote, togglethread, expandthread, quickreply, checkcaptcha */
/* exported addtowatchedthreads, removefromwatchedthreads, resizeMaster */
/* exported hidewatchedthreads, showwatchedthreads, set_inputs, expandimg */

var formatByUser = 'All formatting is performed by the user.';
var formatByAA = '[aa] and [/aa] will surround your message.';

if( !String.prototype.includes ){
   String.prototype.includes = function(search, start){
      'use strict';
      if( typeof start !== 'number' ) start = 0;

      if( start + search.length > this.length ) return false;
      return this.indexOf(search, start) !== -1;
   };
}

/* jshint ignore:start */

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

/*!
 * Draggabilly PACKAGED v2.2.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */

!function(i,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("jquery")):i.jQueryBridget=e(i,i.jQuery)}(window,function(t,i){"use strict";var c=Array.prototype.slice,e=t.console,p=void 0===e?function(){}:function(t){e.error(t)};function n(d,o,u){(u=u||i||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){u.isPlainObject(t)&&(this.options=u.extend(!0,this.options,t))}),u.fn[d]=function(t){if("string"==typeof t){var i=c.call(arguments,1);return s=i,a="$()."+d+'("'+(r=t)+'")',(e=this).each(function(t,i){var e=u.data(i,d);if(e){var n=e[r];if(n&&"_"!=r.charAt(0)){var o=n.apply(e,s);h=void 0===h?o:h}else p(a+" is not a valid method")}else p(d+" not initialized. Cannot call methods, i.e. "+a)}),void 0!==h?h:e}var e,r,s,h,a,n;return n=t,this.each(function(t,i){var e=u.data(i,d);e?(e.option(n),e._init()):(e=new o(i,n),u.data(i,d,e))}),this},r(u))}function r(t){!t||t&&t.bridget||(t.bridget=n)}return r(i||t.jQuery),n}),function(t,i){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,function(){"use strict";function m(t){var i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}var _,x=!1;function P(t){if(function(){if(!x){x=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(t);var e=E(t);P.isBoxSizeOuter=_=200==m(e.width),i.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=E(t);if("none"==i.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0;i<b;i++)t[y[i]]=0;return t}();var e={};e.width=t.offsetWidth,e.height=t.offsetHeight;for(var n=e.isBorderBox="border-box"==i.boxSizing,o=0;o<b;o++){var r=y[o],s=i[r],h=parseFloat(s);e[r]=isNaN(h)?0:h}var a=e.paddingLeft+e.paddingRight,d=e.paddingTop+e.paddingBottom,u=e.marginLeft+e.marginRight,c=e.marginTop+e.marginBottom,p=e.borderLeftWidth+e.borderRightWidth,f=e.borderTopWidth+e.borderBottomWidth,g=n&&_,l=m(i.width);!1!==l&&(e.width=l+(g?0:a+p));var v=m(i.height);return!1!==v&&(e.height=v+(g?0:d+f)),e.innerWidth=e.width-(a+p),e.innerHeight=e.height-(d+f),e.outerWidth=e.width+u,e.outerHeight=e.height+c,e}}return P}),function(t,i){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",i):"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}("undefined"!=typeof window?window:this,function(){function t(){}var i=t.prototype;return i.on=function(t,i){if(t&&i){var e=this._events=this._events||{},n=e[t]=e[t]||[];return-1==n.indexOf(i)&&n.push(i),this}},i.once=function(t,i){if(t&&i){this.on(t,i);var e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this}},i.off=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=e.indexOf(i);return-1!=n&&e.splice(n,1),this}},i.emitEvent=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){e=e.slice(0),i=i||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<e.length;o++){var r=e[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,i)}return this}},i.allOff=function(){delete this._events,delete this._onceEvents},t}),function(i,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("ev-emitter")):i.Unipointer=e(i,i.EvEmitter)}(window,function(o,t){function i(){}var e=i.prototype=Object.create(t.prototype);e.bindStartEvent=function(t){this._bindStartEvent(t,!0)},e.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},e._bindStartEvent=function(t,i){var e=(i=void 0===i||i)?"addEventListener":"removeEventListener",n="mousedown";o.PointerEvent?n="pointerdown":"ontouchstart"in o&&(n="touchstart"),t[e](n,this)},e.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},e.getTouch=function(t){for(var i=0;i<t.length;i++){var e=t[i];if(e.identifier==this.pointerIdentifier)return e}},e.onmousedown=function(t){var i=t.button;i&&0!==i&&1!==i||this._pointerDown(t,t)},e.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},e.onpointerdown=function(t){this._pointerDown(t,t)},e._pointerDown=function(t,i){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i))},e.pointerDown=function(t,i){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return e._bindPostStartEvents=function(t){if(t){var i=n[t.type];i.forEach(function(t){o.addEventListener(t,this)},this),this._boundPointerEvents=i}},e._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){o.removeEventListener(t,this)},this),delete this._boundPointerEvents)},e.onmousemove=function(t){this._pointerMove(t,t)},e.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},e.ontouchmove=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerMove(t,i)},e._pointerMove=function(t,i){this.pointerMove(t,i)},e.pointerMove=function(t,i){this.emitEvent("pointerMove",[t,i])},e.onmouseup=function(t){this._pointerUp(t,t)},e.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},e.ontouchend=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerUp(t,i)},e._pointerUp=function(t,i){this._pointerDone(),this.pointerUp(t,i)},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i])},e._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},e._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},e.pointerDone=function(){},e.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},e.ontouchcancel=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerCancel(t,i)},e._pointerCancel=function(t,i){this._pointerDone(),this.pointerCancel(t,i)},e.pointerCancel=function(t,i){this.emitEvent("pointerCancel",[t,i])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}),function(i,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("unipointer")):i.Unidragger=e(i,i.Unipointer)}(window,function(r,t){function i(){}var e=i.prototype=Object.create(t.prototype);e.bindHandles=function(){this._bindHandles(!0)},e.unbindHandles=function(){this._bindHandles(!1)},e._bindHandles=function(t){for(var i=(t=void 0===t||t)?"addEventListener":"removeEventListener",e=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var o=this.handles[n];this._bindStartEvent(o,t),o[i]("click",this),r.PointerEvent&&(o.style.touchAction=e)}},e._touchActionValue="none",e.pointerDown=function(t,i){this.okayPointerDown(t)&&(this.pointerDownPointer=i,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},s={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return e.okayPointerDown=function(t){var i=o[t.target.nodeName],e=s[t.target.type],n=!i||e;return n||this._pointerReset(),n},e.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},e.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.emitEvent("pointerMove",[t,i,e]),this._dragMove(t,i,e)},e._dragPointerMove=function(t,i){var e={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(e)&&this._dragStart(t,i),e},e.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i]),this._dragPointerUp(t,i)},e._dragPointerUp=function(t,i){this.isDragging?this._dragEnd(t,i):this._staticClick(t,i)},e._dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,i)},e.dragStart=function(t,i){this.emitEvent("dragStart",[t,i])},e._dragMove=function(t,i,e){this.isDragging&&this.dragMove(t,i,e)},e.dragMove=function(t,i,e){t.preventDefault(),this.emitEvent("dragMove",[t,i,e])},e._dragEnd=function(t,i){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,i)},e.dragEnd=function(t,i){this.emitEvent("dragEnd",[t,i])},e.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},e._staticClick=function(t,i){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,i),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},e.staticClick=function(t,i){this.emitEvent("staticClick",[t,i])},i.getPointerPoint=t.getPointerPoint,i}),function(e,n){"function"==typeof define&&define.amd?define(["get-size/get-size","unidragger/unidragger"],function(t,i){return n(e,t,i)}):"object"==typeof module&&module.exports?module.exports=n(e,require("get-size"),require("unidragger")):e.Draggabilly=n(e,e.getSize,e.Unidragger)}(window,function(r,a,t){function e(t,i){for(var e in i)t[e]=i[e];return t}var n=r.jQuery;function i(t,i){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options=e({},this.constructor.defaults),this.option(i),this._create()}var o=i.prototype=Object.create(t.prototype);i.defaults={},o.option=function(t){e(this.options,t)};var s={relative:!0,absolute:!0,fixed:!0};function d(t,i,e){return e=e||"round",i?Math[e](t/i)*i:t}return o._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=e({},this.position);var t=getComputedStyle(this.element);s[t.position]||(this.element.style.position="relative"),this.on("pointerDown",this.onPointerDown),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},o.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},o.dispatchEvent=function(t,i,e){var n=[i].concat(e);this.emitEvent(t,n),this.dispatchJQueryEvent(t,i,e)},o.dispatchJQueryEvent=function(t,i,e){var n=r.jQuery;if(n&&this.$element){var o=n.Event(i);o.type=t,this.$element.trigger(o,e)}},o._getPosition=function(){var t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},o._getPositionCoord=function(t,i){if(-1!=t.indexOf("%")){var e=a(this.element.parentNode);return e?parseFloat(t)/100*e[i]:0}return parseInt(t,10)},o._addTransformPosition=function(t){var i=t.transform;if(0===i.indexOf("matrix")){var e=i.split(","),n=0===i.indexOf("matrix3d")?12:4,o=parseInt(e[n],10),r=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=r}},o.onPointerDown=function(t,i){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[i])},o.dragStart=function(t,i){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[i]),this.animate())},o.measureContainment=function(){var t=this.getContainer();if(t){var i=a(this.element),e=a(t),n=this.element.getBoundingClientRect(),o=t.getBoundingClientRect(),r=e.borderLeftWidth+e.borderRightWidth,s=e.borderTopWidth+e.borderBottomWidth,h=this.relativeStartPosition={x:n.left-(o.left+e.borderLeftWidth),y:n.top-(o.top+e.borderTopWidth)};this.containSize={width:e.width-r-h.x-i.width,height:e.height-s-h.y-i.height}}},o.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},o.onPointerMove=function(t,i,e){this.dispatchJQueryEvent("pointerMove",t,[i,e])},o.dragMove=function(t,i,e){if(this.isEnabled){var n=e.x,o=e.y,r=this.options.grid,s=r&&r[0],h=r&&r[1];n=d(n,s),o=d(o,h),n=this.containDrag("x",n,s),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[i,e])}},o.containDrag=function(t,i,e){if(!this.options.containment)return i;var n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],e,"ceil"),r=this.containSize[n];return r=d(r,e,"floor"),Math.max(o,Math.min(r,i))},o.onPointerUp=function(t,i){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[i])},o.dragEnd=function(t,i){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[i]))},o.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame(function(){t.animate()})}},o.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},o.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},o.staticClick=function(t,i){this.dispatchEvent("staticClick",t,[i])},o.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},o.enable=function(){this.isEnabled=!0},o.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},o.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},o._init=function(){},n&&n.bridget&&n.bridget("draggabilly",i),i});

/*!
 * resizable 1.0.1
 * https://github.com/tannernetwork/resizable
 *
 * Copyright 2015-2017 Tanner (http://tanner.zone)
 * Released under the MIT license
 */
!function(a){a.fn.resizable=function(b){var c=a.extend({direction:["top","right","bottom","left"]},b),d=null;return this.each(function(){var b=this,e=a(this),f=!1,g={},h={top:!1,right:!1,bottom:!1,left:!1},i={};if(e.addClass("resizable"),c.direction instanceof Array)for(var j=c.direction.length-1;j>=0;j--)switch(c.direction[j]){case"top":case"t":h.top=!0;break;case"right":case"r":h.right=!0;break;case"bottom":case"b":h.bottom=!0;break;case"left":case"l":h.left=!0}else if("string"==typeof c.direction)switch(c.direction){case"vertical":case"v":h.top=!0,h.bottom=!0;break;case"horizontal":case"h":h.right=!0,h.left=!0;break;case"top":case"t":h.top=!0;break;case"right":case"r":h.right=!0;break;case"bottom":case"b":h.bottom=!0;break;case"left":case"l":h.left=!0}h.top&&(i.top=a("<div />").addClass("resizable-handle resizable-t").appendTo(e)),h.right&&(i.right=a("<div />").addClass("resizable-handle resizable-r").appendTo(e)),h.bottom&&(i.bottom=a("<div />").addClass("resizable-handle resizable-b").appendTo(e)),h.left&&(i.left=a("<div />").addClass("resizable-handle resizable-l").appendTo(e)),a(this).children(".resizable-l, .resizable-r, .resizable-t, .resizable-b").mousedown(function(h){d=b;var i;switch(!0){case a(this).hasClass("resizable-l"):i="l";break;case a(this).hasClass("resizable-r"):i="r";break;case a(this).hasClass("resizable-t"):i="t";break;case a(this).hasClass("resizable-b"):i="b"}f=!0,g={x:h.clientX,y:h.clientY,height:e.height(),width:e.width(),direction:i},a("html").addClass("resizable-resizing resizable-resizing-"+g.direction),d==b&&"function"==typeof c.start&&c.start.apply(b)}),a(window).mousemove(function(a){if(f){var h=a.clientX-g.x,i=a.clientY-g.y;switch(g.direction){case"r":e.width(g.width+h);break;case"l":e.width(g.width-h);break;case"b":e.height(g.height+i);break;case"t":e.height(g.height-i)}d==b&&"function"==typeof c.resize&&c.resize.apply(b)}}).mouseup(function(e){f=!1,a("html").removeClass("resizable-resizing resizable-resizing-"+g.direction),d==b&&"function"==typeof c.stop&&c.stop.apply(b),_current=null})})}}(jQuery);

// ( resizable 1.0.1 ends here )

/* jshint ignore:end */

function fromJSON(possibleJSON){
   var result;
   try {
      result = JSON.parse(possibleJSON);
   } catch( err ){
      return null;
   }
   return result;
}

function getCookie(name){
   var keyValue = document.cookie.match([
      '(?:^|;)\\s*',
      encodeURIComponent(name).replace(/%20/g, '+').replace(
         /[|\\{}()[\]^$+*?.]/g,
         '\\$&'
      ),
      '\\s*=\\s*([^;]*)(?:;|$)'
   ].join(''));
   if( keyValue === null ) return '';
   return decodeURIComponent(keyValue[1].replace(/\+/g, '%20'));
}

function set_cookie(name, value, days){
   var date;
   var expires = '';
   if( days ){
      date = new Date();
      date.setTime(days * 24 * 60 * 60 * 1000 + date.getTime());
      expires = '; expires=' + date.toGMTString();
   }
   document.cookie = [
      encodeURIComponent(name).replace(/%20/g, '+'), '=',
      encodeURIComponent(value).replace(/%20/g, '+'),
      expires, '; path=/'
   ].join('');
}

function insert(text){
   var msg = $('textarea[name=message]');
   if( msg.length < 1 ) return;
   var $postform = msg.closest('.postform');

   msg = msg[0];
   var start = msg.selectionStart;
   var end = msg.selectionEnd;
   msg.value = msg.value.substr(0, start) + text + msg.value.substr(end);
   msg.setSelectionRange(start + text.length, start + text.length);

   if( $postform.length < 1 ){
      msg.focus();
   } else $.scrollTo($postform, 750, {
      offset: {
         top: - $('.topmenu').height() -3
      },
      onAfter: function(){
         msg.focus();
      }
   });
}

function quote(replyNum, formID) {
   var msg = $('#' + formID + ' textarea[name=message]');
   if( msg.length < 1 ) return;
   var text = '>>' + replyNum;

   msg = msg[0];
   var start = msg.selectionStart;
   var end = msg.selectionEnd;
   msg.value = msg.value.substr(0, start) + text + msg.value.substr(end);
   msg.setSelectionRange(start + text.length, start + text.length);
   msg.focus();
}

function highlight(post){
   $('.highlight').removeClass('highlight');
   var $reply = $('#reply' + post);
   if( $reply.length < 1 ) return;
   var $post = $('#' + post);
   if( $post.length < 1 ) return;
   $reply.addClass('highlight');

   // a trick from https://github.com/flesler/jquery.localScroll is performed
   // see also http://www.catb.org/jargon/html/R/rain-dance.html
   $post.removeAttr('id name');
   setTimeout(function(){
      var $dummy = $('<a>').attr('id', post).attr('name', post).css({
         position: 'absolute',
         top: $(window).scrollTop(),
         left: $(window).scrollLeft()
      });
      $('body').prepend($dummy);
      location = '#' + post;
      setTimeout(function(){
         $dummy.remove();
         setTimeout(function(){
            $post.attr('id', post).attr('name', post);
            $.scrollTo($reply, 1000, {
               offset: {
                  top: - $('.topmenu').height() -3
               }
            });
         }, 1);
      }, 1);
   }, 1);
}

function highlightByHash(){ // hint: https://habr.com/post/138314/
   var matches = /^(i?)([0-9]+)$/.exec( location.hash.slice(1) );
   if( matches === null ) return;

   var message;
   var insertion;

   if( matches[1] === 'i' ){
      message = '' + $('textarea[name=message]').val(); //might be 'undefined'
      insertion = '>>' + matches[2];
      if(! message.includes(insertion) ) insert(insertion);
   } else highlight(matches[2]);
}

function handleNumLinks(){
   $('body').on('click', 'a.numlink', function(){
      var numReplyThread = +$('#postform [name=replythread]').val();
      if( !numReplyThread ) return true; // follow the hyperlink

      if( !this.hash ) return true; // empty hash → hyperlink is not anchored

      var hashDigits = this.hash.slice(1); //see https://habr.com/post/138314/
      if(! /^i\d+$/.test(hashDigits) ) return true; // anchor is not digital
      hashDigits = this.hash.slice(2); // definitely digital, number of a post

      insert('>>' + hashDigits);
      return false; // do not follow the hyperlink
   });
}

function get_password(name){
   var pass = getCookie(name);
   if( pass ) return pass;

   var chr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   pass = '';

   while( pass.length < 8 ) pass += chr[
      Math.floor(Math.random() * chr.length)
   ];
   set_cookie(name, pass, 365);
   return(pass);
}

function postpreview(divid, board, parentid, message){
   var $target = $('#' + divid);
   if( $target.length < 1 ) return;

   $.ajax({
      method: 'GET',
      url: ku_boardspath + '/expand.php',
      cache: false,
      data: {
         preview: true,
         board: board,
         parentid: parentid,
         message: message
      },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         $target.html('Something went wrong (' + textStatus + ')...');
      },
      success: function(textHTML){
         textHTML = textHTML || 'Something went wrong (blank response)...';
         $target.html(textHTML);
      }
   });
}

function togglePassword(){
   var $passwordbox = $('#passwordbox');
   if( $passwordbox.find('.postblock').length ){
      $passwordbox.html('<td></td><td></td>');
      return false;
   }

   $passwordbox.html([
      '<td class="postblock">Mod</td>',
      '<td>',
      '<input type="text" name="modpassword" size="28" maxlength="75">&nbsp;',
      '<abbr title="Distplay staff status (Mod/Admin)">D</abbr>:&nbsp;',
      '<input type="checkbox" name="displaystaffstatus" checked>&nbsp;',
      '<abbr title="Lock">L</abbr>:&nbsp;',
      '<input type="checkbox" name="lockonpost">&nbsp;&nbsp;',
      '<abbr title="Sticky">S</abbr>:&nbsp;',
      '<input type="checkbox" name="stickyonpost">&nbsp;&nbsp;',
      '<abbr title="Raw HTML">RH</abbr>:&nbsp;',
      '<input type="checkbox" name="rawhtml">&nbsp;&nbsp;',
      '<abbr title="Name">N</abbr>:&nbsp;',
      '<input type="checkbox" name="usestaffname">',
      '</td>'
   ].join(''));
   return false;
}

function toggleMod(){
   var $modbox = $('#modbox');
   if( $modbox.find('input').length ){
      $modbox.html('<td></td>');
      return false;
   }

   $modbox.html([
      '<td align="right">[ ',
      '<input name="deleteall" onclick="return confirm(',
      '\'Are you sure you want to delete this post or thread?\'',
      ');" type="submit" value="D"> &amp; ',
      '<input name="banquickuser" type="submit" value="B">',
      ' ]</td>'
   ].join(''));
   return false;
}

function toggleOptions(threadid, formid, board){
   var $opt = $('#opt' + threadid);
   if( $opt.length < 1 ) return;

   if( $opt.find('td.label').length ){
      $opt.html('').hide();
      return;
   }

   $opt.html([
      '<td class="label"><label for="formatting">Formatting:</label></td>',
      '<td colspan="3">',
      '<select name="formatting" data-threadid="', threadid, '">',
      '<option value="" class="toggleFormatByUser">Normal</option>',
      '<option value="aa" class="toggleFormatByAA"',
      ( getCookie('kuformatting') === 'aa') ? ' selected' : '',
      '>Text Art</option>',
      '</select>',
      '<input type="checkbox" name="rememberformatting">',
      '<label for="rememberformatting">Remember</label>',
      '<span id="formattinginfo', threadid, '">',
      ( getCookie('kuformatting') === 'aa') ? formatByAA : formatByUser,
      '</span></td>',
      '<td><input type="button" class="submit toggleOptionsPreview" ',
      'value="Preview" data-formid="', formid, '" data-threadid="', threadid,
      '" data-board="', board, '"></td>'
   ].join('')).show();
}

function toggleOptionsScripts(){
   $('body').on('click', '.toggleFormatByUser', function(){
      var $this = $(this);
      var threadID = $this.closest('select').data('threadid');
      $('#formattinginfo' + threadID).html(formatByUser);
      return true;
   }).on('click', '.toggleFormatByAA', function(){
      var $this = $(this);
      var threadID = $this.closest('select').data('threadid');
      $('#formattinginfo' + threadID).html(formatByAA);
      return true;
   }).on('click', '.toggleOptionsPreview', function(){
      var $this = $(this);
      var board = $this.data('board');
      var formID = $this.data('formid');
      var threadID = $this.data('threadid');
      postpreview(
         'preview' + threadID,
         board,
         threadID,
         $('form#' + formID + ' textarea[name=message]').val()
      );
      return false;
   });
}

function set_preferred_stylesheet(){
   $('link[rel~=stylesheet][title]:not([rel~=alternate])').each(function(){
      this.disabled = true; // TODO: kill when https://crbug.com/843887 dies
      this.disabled = false;
   });
   $('link[rel~=stylesheet][title][rel~=alternate]').each(function(){
      this.disabled = true;
   });
}

function set_stylesheet(styletitle, txt, site){
   if( txt ){
      localStorage.setItem('kustyle_txt', styletitle);
   } else if( site ){
      localStorage.setItem('kustyle_site', styletitle);
   } else localStorage.setItem('kustyle', styletitle);

   var found = false;
   $('link[rel~=stylesheet][title]').each(function(){
      this.disabled = true; // TODO: kill when https://crbug.com/843887 dies
      this.disabled = $(this).attr('title') !== styletitle;
      found = found || !this.disabled;
   });
   if( !found ) set_preferred_stylesheet();
}

function get_active_stylesheet(){
   return $('link[rel~=stylesheet][title]').filter(function(){
      return !this.disabled;
   }).attr('title') || null;
}

function get_preferred_stylesheet(){
  return $(
     'link[rel~=stylesheet][title]:not([rel~=alternate])'
  ).attr('title') || null;
}

function togglethread(threadid){
  var arrHidden = fromJSON(localStorage.getItem('hiddenthreads') || '[]');
  if( !Array.isArray(arrHidden) ) arrHidden = [];

  if( $.inArray(threadid, arrHidden) > -1 ){ // has been hidden
     $('#unhidethread' + threadid).hide();
     $('#thread' + threadid).show();
     arrHidden = arrHidden.filter(function(nextID){
        return nextID !== threadid;
     });
  } else { // has not been hidden
     $('#unhidethread' + threadid).show();
     $('#thread' + threadid).hide();
     arrHidden.push(threadid);
  }
  localStorage.setItem('hiddenthreads', JSON.stringify(arrHidden));
  return false;
}

function toggleblotter(save){
   var $blotter = $('.blotterentry');
   if( $blotter.is(':visible') ){
      $blotter.hide();
      if( save ) set_cookie('ku_showblotter', '0', 365);
   } else {
      $blotter.show();
      if( save ) set_cookie('ku_showblotter', '1', 365);
   }
}

function quickreply(threadid){
   if( !threadid ){
      $('#posttypeindicator').html('new thread');
   } else $('#posttypeindicator').html(
      'reply to ' + threadid +
      ' [<a href="#" onclick="return quickreply(0);" title="Cancel">' +
      'x</a>]'
   );

   var $postform = $('#postform');
   $postform.find('[name=replythread]').val(threadid);

   if( $postform.length ) $.scrollTo($postform, 750, {
      offset: {
         top: - $('.topmenu').height() -3
      }
   });
   return false;
}

function getwatchedthreads(){
   var $watchbox = $('#watchedthreadlist');
   if( $watchbox.length < 1 ) return false;

   var board = $('#postform [name=board]').val();
   if( !board ){
      $watchbox.html('Error: cannot get board ID.');
      return false;
   }

   localStorage.setItem('showwatchedthreads', '1');
   $watchbox.html('Loading watched threads...');

   $.ajax({
      method: 'GET',
      url: ku_boardspath + '/threadwatch.php',
      cache: false,
      data: {
         board: board,
         threadid: '0'
      },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         $watchbox.html('Something went wrong (' + textStatus + ')...');
      },
      success: function(textHTML){
         textHTML = textHTML || 'Something went wrong (blank response)...';
         $watchbox.html(textHTML);
      }
   });

   return false;
}

function addtowatchedthreads(threadid, board){
   $.ajax({
      method: 'GET',
      url: ku_boardspath + '/threadwatch.php',
      cache: false,
      data: {
         do: 'addthread',
         board: board,
         threadid: threadid
      },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         alert('Something went wrong (' + textStatus + ')...');
      },
      success: function(){
         alert('The thread is added to your watch list.');
         getwatchedthreads();
      }
   });
}

function removefromwatchedthreads(threadid, board){
   $.ajax({
      method: 'GET',
      url: ku_boardspath + '/threadwatch.php',
      cache: false,
      data: {
         do: 'removethread',
         board: board,
         threadid: threadid
      },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         alert('Something went wrong (' + textStatus + ')...');
      },
      success: function(){
         alert('The thread is removed from your watch list.');
         getwatchedthreads();
      }
   });
}

function hidewatchedthreads(){
   localStorage.removeItem('showwatchedthreads');
   var $watched = $('#watchedthreads');
   if( $watched.length < 1 ) return; // omae wa mou shindeiru

   $watched.css('opacity', '0');
   setTimeout(function(){
      $watched.remove();
   }, 500);
   return;
}

function resizeWatchedThreads(){
   var $watched = $('#watchedthreads');
   if( $watched.length < 1 ) return;

   $watched.resizable({
      direction: ['right', 'bottom', 'left'],
      stop: function(){
         var width = $watched[0].offsetWidth;
         var height = $watched[0].offsetHeight;
         if( width === 0 || height === 0 ) return; // kludge

         localStorage.setItem('watchedthreadswidth', width);
         localStorage.setItem('watchedthreadsheight', height);
      }
   });
}

function dragWatchedThreads(){
   var $watched = $('#watchedthreads');
   if( $watched.length < 1 ) return;

   $watched.draggabilly({
      handle: '#watchedthreadsdraghandle'
   }).on('dragStart', function(){
      $watched.css('opacity', '0.7');
   }).on('dragEnd', function(){
      $watched.css('opacity', '1');
      localStorage.setItem('watchedthreadstop', $watched.css('top'));
      localStorage.setItem('watchedthreadsleft', $watched.css('left'));
   });
}

function generateWatchedThreadsElement(){
   var $watched = $('#watchedthreads');
   if( $watched.length ) return false; // already exists

   var $topmenu = $('.topmenu');
   if( $topmenu.length < 1 ){ // incomplete or unexpected DOM
      location.reload(true);
      return false;
   }

   $topmenu.after([
      '<div id="watchedthreads" class="watchedthreads">',
         '<div class="postblock" id="watchedthreadsdraghandle">',
         'Избранные нити</div>',
         '<span id="watchedthreadlist"></span>',
         '<div id="watchedthreadsbuttons">',
            '<a href="#" onclick="hidewatchedthreads(); return false;" ',
            'title="Скрыть блок «избранных нитей»">',
            '<img src="/css/icons/blank.gif" border="0" ',
            'class="hidewatchedthreads" alt="hide"></a>',
            '&nbsp;',
            '<a href="#" onclick="return getwatchedthreads();" ',
            'title="Обновить избранные нити">',
            '<img src="/css/icons/blank.gif" border="0" ',
            'class="refreshwatchedthreads" alt="refresh"></a>',
         '</div>',
      '</div>'
   ].join(''));

   $watched = $('#watchedthreads');
   $watched.css({
      top: localStorage.getItem('watchedthreadstop') || '185px',
      left: localStorage.getItem('watchedthreadsleft') || '25px',
      width: Math.max(
         250, localStorage.getItem('watchedthreadswidth')
      ) + 'px',
      height: Math.max(
         75, localStorage.getItem('watchedthreadsheight')
      ) + 'px'
   });
   if( parseInt($watched.css('top'), 10) < $('.topmenu').height() ){
      $watched.css('top', parseInt($('.topmenu').height(), 10) + 5 + 'px');
      localStorage.setItem('watchedthreadstop', $watched.css('top'));
   }

   resizeWatchedThreads();
   dragWatchedThreads();

   return getwatchedthreads();
}

function showwatchedthreads(){
   localStorage.setItem('showwatchedthreads', '1');
   var $watchbox = $('#watchedthreadlist');
   if( $watchbox.length < 1 ) return generateWatchedThreadsElement();

   return false; // already exists
}

function checkcaptcha(formid){
   var $captcha = $('#' + formid + ' [name=captcha]');
   if( $captcha.length < 1 ) return true;

   if( $captcha.val() === '' ){
      alert('Please enter the captcha image text.');
      $captcha.filter(':visible').focus(); // do not focus hidden
      return false;
   }

   return true;
}

function expandThis(linkEl, mode){
   if( !linkEl ) return false;
   var $link = $(linkEl);

   var $img;
   var $player;
   var fullSrc = $link.data('fullSrc');
   var fullSrcExt = fullSrc.split('.').pop().toLowerCase();
   var imageExtensions = ['jpg', 'gif', 'png'];
   var gen3Extensions = ['jpg', 'png'];
   var videoExtensions = ['mp4', 'ogv', 'webm'];
   var audioExtensions = ['mp3', 'flac', 'ogg', 'opus'];

   if( $.inArray(fullSrcExt, imageExtensions) > -1 ){
      // thumbnail transformation:
      $img = $link.find('img');
      if( $img.length !== 1 ) return false; // There can be only one.™

      if( $img[0].src.includes('/thumb/') ){
         // thumb → full, unless triggered by “Remove all expanded” mode:
         if( mode === 'removeAll' ) return false;

         if(
            $.inArray(fullSrcExt, gen3Extensions) > -1 // using gen3 expander
         ){
            $img.attr({
               width: $link.data('fullWidth'),
               height: $link.data('fullHeight'),
               src: fullSrc
            }).after(
               $('<img>').addClass('thumb gen3foreground').attr({
                  width: $link.data('fullWidth'),
                  height: $link.data('fullHeight'),
                  src: fullSrc,
                  alt: ''
               })
            );
            $link.imagesLoaded().always(function(){
               $img.remove();
               $link.find('.gen3foreground').removeClass('gen3foreground');
            });
         } else $img.replaceWith( // not using gen3 expander
            $('<img>').addClass('thumb').attr({
               width: $link.data('fullWidth'),
               height: $link.data('fullHeight'),
               src: fullSrc,
               alt: ''
            })
         );
         // full → thumb, unless triggered by “Expand all images” mode:
      } else if( mode !== 'all' ) $img.replaceWith(
         $('<img>').addClass('thumb').attr({
            width: $link.data('thumbWidth'),
            height: $link.data('thumbHeight'),
            src: $link.data('thumbSrc'),
            alt: ''
         })
      );
   } else if( $.inArray(fullSrcExt, videoExtensions) > -1 ){
      if( mode ) return false; // ignore “Expand all images” / “Remove” modes

      // video player:
      if( $link.data('videoMode') === 'on' ){
         // video player → thumb:
         $link.data('videoMode', 'off').data('videoPlayer').remove();
         $link.html( $link.data('thumbHTML') );
      } else {
         // thumb → video player:
         $link.data('videoMode', 'on');

         $player = $('<video autoplay controls loop muted></video>').attr({
            poster: $link.data('thumbSrc'),
            src: fullSrc
         }).addClass('videoplayer410');
         $link.after($player).data({
            videoPlayer: $player,
            thumbHTML: $link.html()
         }).html('<div class="hidevideo">[Свернуть видео]</div>');
      }
   } else if( $.inArray(fullSrcExt, audioExtensions) > -1 ){
      if( mode ) return false; // ignore “Expand all images” / “Remove” modes

      // audio player:
      if( $link.data('audioMode') === 'on' ){
         // audio player → thumb:
         $link.data('audioMode', 'off').data('audioPlayer').remove();
         $link.html( $link.data('thumbHTML') );
      } else {
         // thumb → audio player:
         $link.data('audioMode', 'on');

         $player = $('<audio autoplay controls loop></audio>').attr(
            'src', fullSrc
         ).addClass('audioplayer410');
         $link.after($player).data({
            audioPlayer: $player,
            thumbHTML: $link.html()
         }).html('<div class="hideaudio">[Свернуть звук]</div>');
      }
   } else return !mode; // `false` in “Expand all images” / “Remove” modes;
   // otherwise follow a link instead of expanding a file with such extension

   return false; // expanded or ignored thumbnail
}

function expandimg(thumbID){
   // kludge for cached pages
   // that precede https://bitbucket.org/Therapont/fbe-410/pull-requests/14
   var $span = $('#thumb' + thumbID);
   if( $span.length === 0 ) return;
   expandThis($span.parent()[0]);
}

function resizeThumbnails(){
   $('body').on('click', 'a.imglink', function(evt, mode){
      return expandThis(this, mode);
   }).on('click', 'a.expandAllImg', function(){
      var $this = $(this);
      if( $('span.removeExpandedImg').length < 1 ){
         $this.after([
            '<span class="removeExpandedImg" style="opacity: 0;">',
            '&nbsp;| <a class="removeExpandedImg" href="#">',
            $this.data('remove'),
            '</a></span>'
         ].join(''));
         setTimeout(function(){
            $('span.removeExpandedImg').css('opacity', '1');
         }, 1);
      }
      $('a.imglink').trigger('click', 'all');
      return false;
   }).on('click', 'a.removeExpandedImg', function(){
      var $span = $(this).closest('span.removeExpandedImg');
      $('a.imglink').trigger('click', 'removeAll');
      $span.css('opacity', '0');
      setTimeout(function(){
         $span.remove();
      }, 500);
      return false;
   });
}

function expandthread(threadid, board){
   var $replies = $('#replies' + threadid + board);
   if( $replies.length < 1 ) return false;

   var $omitted = $replies.find('.omittedposts');
   $omitted.html('Expanding thread...');

   $.ajax({
      method: 'GET',
      url: ku_boardspath + '/expand.php',
      cache: false,
      data: {
         board: board,
         threadid: threadid
      },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         $omitted.html('Something went wrong (' + textStatus + ')...');
      },
      success: function(textHTML){
         textHTML = textHTML || 'Something went wrong (blank response)...';
         $replies.html(textHTML);
      }
   });
   return false;
}

function set_delpass(id){
   if(
      $('#' + id + ' [name=postpassword]').length &&
      !$('#' + id + ' [name=postpassword]').val()
   ) $('#' + id + ' [name=postpassword]').val( get_password('postpassword') );
}

function set_inputs(id){
   if(
      $('#' + id + ' [name=name]').length &&
      !$('#' + id + ' [name=name]').val()
   ) $('#' + id + ' [name=name]').val( getCookie('name') );

   if(
      $('#' + id + ' [name=em]').length &&
      !$('#' + id + ' [name=em]').val()
   ) $('#' + id + ' [name=em]').val( getCookie('email') );

   set_delpass(id);
}

function textExpandAJAX(){
   $('body').on('click', 'a.abbrlink', function(){
      var $this = $(this);
      var hrefArr = ( $this.attr('href') || '').split('/');
      if( hrefArr.length !== 4 ) return true;

      var threadID = hrefArr.pop().split('.').shift();
      if(! /^\d+$/.test(threadID) ) return true;

      hrefArr.pop();
      var boardID = hrefArr.pop();

      var $bq = $this.closest('blockquote');
      if( $bq.length !== 1 ) return true;

      var matches = /^post(\d+)$/.exec( $bq[0].id || '' );
      if( matches === null ) return true;
      var postID = matches[1];

      $.ajax({
         method: 'GET',
         url: ku_boardspath + '/read.php',
         cache: false,
         data: {
            b: boardID,
            t: threadID,
            p: postID,
            single: true
         },
         dataType: 'text',
         error: function(jqXHR, textStatus){
            console.log('textExpandAJAX went wrong (' + textStatus + ')...');
            location = $this[0].href;
         },
         success: function(textHTML){
            var trimHTML = $.trim(textHTML);
            if( !trimHTML ){
               console.log('textExpandAJAX went wrong (blank response)...');
               location = $this[0].href;
               return;
            }
            var $bqRead = $(trimHTML).find('blockquote#post' + postID);
            if( $bqRead.length < 1 ){
               console.log('textExpandAJAX went wrong (weird response)...');
               location = $this[0].href;
               return;
            }
            $bq.html( $bqRead.html() );
         }
      });

      return false;
   });
}

function addRefLinkPreview(ev){
   var $a = $(this);
   var arrInfo = $a.attr('class').split('|');
   if( arrInfo[0] !== 'ref' || arrInfo.length < 4 ) return true;

   var winW = Math.floor( $(window).width() );
   var winH = Math.floor( $(window).height() );
   var previewCSS = {};
   // body { position: static; }
   // and thus the following coordinates are relative to I. C. B.
   // see https://www.w3.org/TR/CSS2/visudet.html for details
   if( ev.clientX < winW / 2 ){
      previewCSS.left = ev.pageX + 50 + 'px';
   } else {
      previewCSS.right = winW - ev.pageX + 50 + 'px';
   }
   if( ev.clientY < winH / 2 ){
      previewCSS.top = ev.pageY + 'px';
   } else {
      previewCSS.bottom = winH - ev.pageY + 'px';
   }

   var $preview = $('<div>').attr({
      'id': 'preview-' + arrInfo[1] + '-' + arrInfo[3],
      'class': 'reflinkpreview'
   }).css(previewCSS);
   $('body').append($preview);

   $.ajax({
      method: 'GET',
      url: ku_boardspath + '/read.php',
      cache: false,
      data: {
         b: arrInfo[1], // board
         t: arrInfo[2], // thread
         p: arrInfo[3], // post
         single: true
      },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         $preview.html('Something went wrong (' + textStatus + ')...');
      },
      success: function(textHTML){
         textHTML = textHTML || 'Something went wrong (blank response)...';
         $preview.html(textHTML);
      }
   });
}

function delRefLinkPreview(){
   var arrInfo = $(this).attr('class').split('|');
   if( arrInfo[0] !== 'ref' || arrInfo.length < 4 ) return true;

   $('#preview-' + arrInfo[1] + '-' + arrInfo[3]).remove();
}

function gentleScrollLocalLink(){
   if( !this.hash ) return true; // empty hash → hyperlink is not anchored
   if( !this.href ) return true; // empty href → weird → abort
   if(
      this.href.replace(/#.*/, '') !== // ( link's URL without hash )
      location.href.replace(/#.*/, '') // ( page's URL without hash )
   ) return true; // not a local hyperlink

   var hashDigits = this.hash.slice(1); // see https://habr.com/post/138314/
   if(! /^\d+$/.test(hashDigits) ) return true; // anchor is not digital

   $(this).trigger('mouseleave');
   setTimeout(function(){
      highlight(hashDigits); // postnumber
   }, 1);
   return false;
}

function addPreviewEvents(){
   $('body').on('mouseenter', 'a[class^=ref]', addRefLinkPreview
   ).on('mouseleave', 'a[class^=ref]', delRefLinkPreview
   ).on('click', 'a', gentleScrollLocalLink);
}

function keyProcessor(e){
   if( !e.altKey ) return true;

   var page, relativepost, newrelativepost;
   var docloc = document.location.toString();
   var docloc_trimmed, docloc_valid;
   if(
      (docloc.indexOf('catalog.html') === -1 && docloc.indexOf('/res/') === -1
      ) || (docloc.indexOf('catalog.html') === -1 && e.keyCode === 80) // 'p'
   ){
      // ignore Alt or Shift
      if( e.keyCode === 18 || e.keyCode === 16 ) return true;

      if(
         docloc.indexOf('.html') === -1 ||
         docloc.indexOf('board.html') !== -1
      ){
         page = 0;
         docloc_trimmed = docloc.substr(0, docloc.lastIndexOf('/') + 1);
      } else {
         page = docloc.substr(docloc.lastIndexOf('/') + 1);
         page = +page.substr(0, page.indexOf('.html'));
         docloc_trimmed = docloc.substr(0, docloc.lastIndexOf('/') + 1);
      }
      if( page === 0 ){
         docloc_valid = docloc_trimmed;
      } else docloc_valid  = docloc_trimmed + page + '.html';

      if( e.keyCode === 222 || e.keyCode === 221 ){ // "'" / "]"
         var match = /#s([0-9])/.exec(docloc);
         if( match ){
            relativepost = +match[1];
         } else relativepost = -1;

         if( e.keyCode === 222 ){ // "'"
            if( relativepost === -1 || relativepost === 9 ){
               newrelativepost = 0;
            } else newrelativepost = relativepost + 1;
         } else if (e.keyCode === 221) { // "]"
            if( relativepost === -1 || relativepost === 0 ){
               newrelativepost = 9;
            } else newrelativepost = relativepost - 1;
         }

         document.location.href = docloc_valid + '#s' + newrelativepost;
      } else if( e.keyCode === 59 || e.keyCode === 219 ){
         if( e.keyCode === 59 ){
            page = page + 1;
         } else if( e.keyCode === 219 ){ // "["
            if( page >= 1 ) page = page - 1;
         }

         if( page === 0 ){
            document.location.href = docloc_trimmed;
         } else {
            document.location.href = docloc_trimmed + page + '.html';
         }
      } else if( e.keyCode === 80 ){ // 'p'
         document.location.href = docloc_valid + '#postbox';
      }
   }
}

function setStylesheetFromLocalStorage(){
   var savedTitle, title;
   if( style_cookie ){
      savedTitle = localStorage.getItem(style_cookie);
      title = savedTitle ? savedTitle : get_preferred_stylesheet();
      set_stylesheet(title);
   } else if( style_cookie_txt ){
      savedTitle = localStorage.getItem(style_cookie_txt);
      title = savedTitle ? savedTitle : get_preferred_stylesheet();
      set_stylesheet(title, true);
   } else if( style_cookie_site ){
      savedTitle = localStorage.getItem(style_cookie_site);
      title = savedTitle ? savedTitle : get_preferred_stylesheet();
      set_stylesheet(title, false, true);
   }

   $('.adminbar select').val( get_active_stylesheet() );
}

function hideHiddenThreads(){
  var arrHidden = fromJSON(localStorage.getItem('hiddenthreads') || '[]');
  if( !Array.isArray(arrHidden) ) arrHidden = [];

  arrHidden.forEach(function(threadID){
     $('#unhidethread' + threadID).show();
     $('#thread' + threadID).hide();
  });
}

function flowerPowerTextareaResizer(){
   var $textarea = $('textarea[name=message]');
   var $handle = $('#resizer');
   var prevent = function(e){
      e.preventDefault();
   };

   var performDrag = function(e){
      $textarea.width(e.pageX - e.data.offsetX);
      $textarea.height(e.pageY - e.data.offsetY);
      e.preventDefault();
   };
   
   var startDrag, stopDrag;

   startDrag = function(e){
      $handle.off('mousedown');

      $(document).on('dragstart', prevent
      ).on('selectstart', prevent
      ).on('mousemove',
         {
            offsetX: e.pageX - $textarea.width(),
            offsetY: e.pageY - $textarea.height()
         },
         performDrag
      ).on('mouseup', stopDrag);
   };

   stopDrag = function(){
      $(document).off('dragstart', prevent
      ).off('selectstart', prevent
      ).off('mouseup', stopDrag
      ).off('mousemove', performDrag);

      $handle.on('mousedown', startDrag);
   };

   $handle.on('mousedown', startDrag);
}

function request_faptcha(){
   var board = $('#postform [name=board]').val();
   if( typeof board === 'undefined' ) return false;

   var $faptchaInput = $('#faptcha_input');
   if( $faptchaInput.length < 1 ) return false;

   $faptchaInput[0].disabled = false;
   $faptchaInput.val('');

   $.ajax({
      method: 'GET',
      url: path + '/api_adaptive.php',
      cache: false,
      data: { board: board },
      dataType: 'text',
      error: function(jqXHR, textStatus){
         console.log('Faptcha request failure: ' + textStatus);
      },
      success: function(text){
         if( +text === 1 ){
            $faptchaInput.val(captcha_message);
            $faptchaInput[0].disabled = true;
         }
      }
   });

   return false;
}

function faptchaRefresh(){
   $('body').on('click', '.faplink', function(){
      var board = $('#postform [name=board]').val();
      if( typeof board === 'undefined' ) return false;

      $('#faptchaimage')[0].src = ku_cgipath + '/faptcha.php?board=' +
         board + '&' + Math.random();
      return false;
   });
}

function handleSpoilers(){
   $('body').on('mouseenter', 'span.spoiler', function(){
      $(this).css('color', 'white');
   }).on('mouseleave', 'span.spoiler', function(){
      $(this).css('color', 'black');
   });
}

var resizeMaster = {
   // there was an inline script that started with `request_faptcha(`
   // and expected resizeMaster.setResizer to be a function;
   // that script is now deleted but remains on server-cached pages
   setResizer: function(){}
};

$(function(){
   setStylesheetFromLocalStorage();
   hideHiddenThreads();
   request_faptcha();
   faptchaRefresh();
   $('body').on('click', 'a.fapcheck', request_faptcha);
   textExpandAJAX();
   handleNumLinks();
   handleSpoilers();
   addPreviewEvents();
   toggleOptionsScripts();
   resizeThumbnails();
   highlightByHash(); // only absolute-positioned changes below this point:
   if(
      localStorage.getItem('showwatchedthreads')
   ) generateWatchedThreadsElement();
   flowerPowerTextareaResizer();

   document.onkeydown = keyProcessor;

   $(window).on('unload', function(){
      if( style_cookie ){
         localStorage.setItem(style_cookie, get_active_stylesheet());
      } else if( style_cookie_txt ){
         localStorage.setItem(style_cookie_txt, get_active_stylesheet());
      } else if( style_cookie_site ) {
         //do nothing
      }
   });
});
