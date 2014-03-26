/*
jquery.animate-enhanced plugin v1.08
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
---
Copyright (c) 2013 Ben Barnett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
---
Extends jQuery.animate() to automatically use CSS3 transformations where applicable.
Tested with jQuery 1.3.2+

Supports -moz-transition, -webkit-transition, -o-transition, transition

Targetted properties (for now):
  - left
  - top
  - opacity
  - width
  - height

Usage (exactly the same as it would be normally):

  jQuery(element).animate({left: 200},  500, function() {
    // callback
  });
*/

(function(e,t,n){function S(e){return e.match(/\D+$/)}function x(t,n,r,i){if(r=="d")return;if(!M(t))return;var s=u.exec(n),o=t.css(r)==="auto"?0:t.css(r),a=typeof o=="string"?O(o):o,f=typeof n=="string"?O(n):n,l=i===true?0:a,c=t.is(":hidden"),h=t.translation();if(r=="left")l=parseInt(a,10)+h.x;if(r=="right")l=parseInt(a,10)+h.x;if(r=="top")l=parseInt(a,10)+h.y;if(r=="bottom")l=parseInt(a,10)+h.y;if(!s&&n=="show"){l=1;if(c){elem=t[0];if(elem.style){display=elem.style.display;if(!e._data(elem,"olddisplay")&&display==="none"){display=elem.style.display=""}if(display===""&&e.css(elem,"display")==="none"){e._data(elem,"olddisplay",A(elem.tagName))}if(display===""||display==="none"){elem.style.display=e._data(elem,"olddisplay")||""}}t.css("opacity",0)}}else if(!s&&n=="hide"){l=0}if(s){var p=parseFloat(s[2]);if(s[1])p=(s[1]==="-="?-1:1)*p+parseInt(l,10);if(s[3]&&s[3]!="px")p=p+s[3];return p}else{return l}}function T(e,t,n){return n===true||E===true&&n!==false&&w?"translate3d("+e+"px, "+t+"px, 0)":"translate("+e+"px,"+t+"px)"}function N(t,n,r,s,o,u,a,l){var h=t.data(c),p=h&&!L(h)?h:e.extend(true,{},f),d=o,v=e.inArray(n,i)>-1;if(v){var m=p.meta,g=O(t.css(n))||0,y=n+"_o";d=o-g;m[n]=d;m[y]=t.css(n)=="auto"?0+d:g+d||0;p.meta=m;if(a&&d===0){d=0-m[y];m[n]=d;m[y]=0}}return t.data(c,C(t,p,n,r,s,d,u,a,l))}function C(e,t,n,r,i,o,u,a,f){var l=false,c=u===true&&a===true;t=t||{};if(!t.original){t.original={};l=true}t.properties=t.properties||{};t.secondary=t.secondary||{};var h=t.meta,p=t.original,d=t.properties,v=t.secondary;for(var m=s.length-1;m>=0;m--){var g=s[m]+"transition-property",y=s[m]+"transition-duration",b=s[m]+"transition-timing-function";n=c?s[m]+"transform":n;if(l){p[g]=e.css(g)||"";p[y]=e.css(y)||"";p[b]=e.css(b)||""}v[n]=c?T(h.left,h.top,f):o;d[g]=(d[g]?d[g]+",":"")+n;d[y]=(d[y]?d[y]+",":"")+r+"ms";d[b]=(d[b]?d[b]+",":"")+i}return t}function k(e){for(var t in e){if((t=="width"||t=="height")&&(e[t]=="show"||e[t]=="hide"||e[t]=="toggle")){return true}}return false}function L(e){for(var t in e){return false}return true}function A(e){e=e.toUpperCase();var t={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return typeof t[e]=="string"?t[e]:"block"}function O(e){return parseFloat(e.replace(S(e),""))}function M(e){var t=true;e.each(function(e,n){t=t&&n.ownerDocument;return t});return t}function _(t,n,i){if(!M(i)){return false}var s=e.inArray(t,r)>-1;if((t=="width"||t=="height"||t=="opacity")&&parseFloat(n)===parseFloat(i.css(t)))s=false;return s}var r=["top","right","bottom","left","opacity","height","width"],i=["top","right","bottom","left"],s=["-webkit-","-moz-","-o-",""],o=["avoidTransforms","useTranslate3d","leaveTransforms"],u=/^([+-]=)?([\d+-.]+)(.*)$/,a=/([A-Z])/g,f={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},l="px",c="jQe",h="cubic-bezier(",p=")",d=null,v=false;var m=document.body||document.documentElement,g=m.style,y="webkitTransitionEnd oTransitionEnd transitionend",b=g.WebkitTransition!==undefined||g.MozTransition!==undefined||g.OTransition!==undefined||g.transition!==undefined,w="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,E=w;if(e.expr&&e.expr.filters){d=e.expr.filters.animated;e.expr.filters.animated=function(t){return e(t).data("events")&&e(t).data("events")[y]?true:d.call(this,t)}}e.extend({toggle3DByDefault:function(){return E=!E},toggleDisabledByDefault:function(){return v=!v},setDisabledByDefault:function(e){return v=e}});e.fn.translation=function(){if(!this[0]){return null}var e=this[0],t=window.getComputedStyle(e,null),n={x:0,y:0};if(t){for(var r=s.length-1;r>=0;r--){var i=t.getPropertyValue(s[r]+"transform");if(i&&/matrix/i.test(i)){var o=i.replace(/^matrix\(/i,"").split(/, |\)$/g);n={x:parseInt(o[4],10),y:parseInt(o[5],10)};break}}}return n};e.fn.animate=function(n,r,u,a){n=n||{};var f=!(typeof n["bottom"]!=="undefined"||typeof n["right"]!=="undefined"),d=e.speed(r,u,a),m=0,g=function(){m--;if(m===0){if(typeof d.complete==="function"){d.complete.apply(this,arguments)}}},w=typeof n["avoidCSSTransitions"]!=="undefined"?n["avoidCSSTransitions"]:v;if(w===true||!b||L(n)||k(n)||d.duration<=0||d.step){return t.apply(this,arguments)}return this[d.queue===true?"queue":"each"](function(){var r=e(this),u=e.extend({},d),a=function(t){var o=r.data(c)||{original:{}},u={};if(t.eventPhase!=2)return;if(n.leaveTransforms!==true){for(var a=s.length-1;a>=0;a--){u[s[a]+"transform"]=""}if(f&&typeof o.meta!=="undefined"){for(var h=0,p;p=i[h];++h){u[p]=o.meta[p+"_o"]+l;e(this).css(p,u[p])}}}r.unbind(y).css(o.original).css(u).data(c,null);if(n.opacity==="hide"){elem=r[0];if(elem.style){display=e.css(elem,"display");if(display!=="none"&&!e._data(elem,"olddisplay")){e._data(elem,"olddisplay",display)}elem.style.display="none"}r.css("opacity","")}g.call(this)},v={bounce:h+"0.0, 0.35, .5, 1.3"+p,linear:"linear",swing:"ease-in-out",easeInQuad:h+"0.550, 0.085, 0.680, 0.530"+p,easeInCubic:h+"0.550, 0.055, 0.675, 0.190"+p,easeInQuart:h+"0.895, 0.030, 0.685, 0.220"+p,easeInQuint:h+"0.755, 0.050, 0.855, 0.060"+p,easeInSine:h+"0.470, 0.000, 0.745, 0.715"+p,easeInExpo:h+"0.950, 0.050, 0.795, 0.035"+p,easeInCirc:h+"0.600, 0.040, 0.980, 0.335"+p,easeInBack:h+"0.600, -0.280, 0.735, 0.045"+p,easeOutQuad:h+"0.250, 0.460, 0.450, 0.940"+p,easeOutCubic:h+"0.215, 0.610, 0.355, 1.000"+p,easeOutQuart:h+"0.165, 0.840, 0.440, 1.000"+p,easeOutQuint:h+"0.230, 1.000, 0.320, 1.000"+p,easeOutSine:h+"0.390, 0.575, 0.565, 1.000"+p,easeOutExpo:h+"0.190, 1.000, 0.220, 1.000"+p,easeOutCirc:h+"0.075, 0.820, 0.165, 1.000"+p,easeOutBack:h+"0.175, 0.885, 0.320, 1.275"+p,easeInOutQuad:h+"0.455, 0.030, 0.515, 0.955"+p,easeInOutCubic:h+"0.645, 0.045, 0.355, 1.000"+p,easeInOutQuart:h+"0.770, 0.000, 0.175, 1.000"+p,easeInOutQuint:h+"0.860, 0.000, 0.070, 1.000"+p,easeInOutSine:h+"0.445, 0.050, 0.550, 0.950"+p,easeInOutExpo:h+"1.000, 0.000, 0.000, 1.000"+p,easeInOutCirc:h+"0.785, 0.135, 0.150, 0.860"+p,easeInOutBack:h+"0.680, -0.550, 0.265, 1.550"+p},b={},w=v[u.easing||"swing"]?v[u.easing||"swing"]:u.easing||"swing";for(var E in n){if(e.inArray(E,o)===-1){var S=e.inArray(E,i)>-1,T=x(r,n[E],E,S&&n.avoidTransforms!==true);if(_(E,T,r)){N(r,E,u.duration,w,T,S&&n.avoidTransforms!==true,f,n.useTranslate3d)}else{b[E]=n[E]}}}r.unbind(y);var C=r.data(c);if(C&&!L(C)&&!L(C.secondary)){m++;r.css(C.properties);var k=C.secondary;setTimeout(function(){r.bind(y,a).css(k)})}else{u.queue=false}if(!L(b)){m++;t.apply(r,[b,{duration:u.duration,easing:e.easing[u.easing]?u.easing:e.easing.swing?"swing":"linear",complete:g,queue:u.queue}])}return true})};e.fn.animate.defaults={};e.fn.stop=function(t,r,i){if(!b)return n.apply(this,[t,r]);if(t)this.queue([]);this.each(function(){var o=e(this),u=o.data(c);if(u&&!L(u)){var f,h={};if(r){h=u.secondary;if(!i&&typeof u.meta["left_o"]!==undefined||typeof u.meta["top_o"]!==undefined){h["left"]=typeof u.meta["left_o"]!==undefined?u.meta["left_o"]:"auto";h["top"]=typeof u.meta["top_o"]!==undefined?u.meta["top_o"]:"auto";for(f=s.length-1;f>=0;f--){h[s[f]+"transform"]=""}}}else if(!L(u.secondary)){var p=window.getComputedStyle(o[0],null);if(p){for(var d in u.secondary){if(u.secondary.hasOwnProperty(d)){d=d.replace(a,"-$1").toLowerCase();h[d]=p.getPropertyValue(d);if(!i&&/matrix/i.test(h[d])){var v=h[d].replace(/^matrix\(/i,"").split(/, |\)$/g);h["left"]=parseFloat(v[4])+parseFloat(o.css("left"))+l||"auto";h["top"]=parseFloat(v[5])+parseFloat(o.css("top"))+l||"auto";for(f=s.length-1;f>=0;f--){h[s[f]+"transform"]=""}}}}}}o.unbind(y);o.css(u.original).css(h).data(c,null)}else{n.apply(o,[t,r])}});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop)