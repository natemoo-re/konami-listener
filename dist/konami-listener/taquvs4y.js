/*! Built with http://stenciljs.com (es5) */

window['konami-listener'].loadStyles("konami-listener",":host{display:none;position:absolute;top:0;left:0;bottom:0;right:0}:host(.active){display:block}\n:host(.hydrated){visibility:inherit !important}");
window["konami-listener"].loadComponents("taquvs4y",function(t,n,e,i){"use strict";var o=function(){function t(){this.keys=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],this.accepted=new Set(this.keys).slice(),this.input=[]}return t.prototype.handleKey=function(t){var n=t.key;this.accepted.includes(n)&&(this.keys[this.input.length]===n?this.onMatch(n):this.reset())},t.prototype.onMatch=function(t){this.input.push(t),10===this.input.length&&this.onFullMatch()},t.prototype.onFullMatch=function(){this.matched.emit(),this.el.classList.add("active"),this.reset()},t.prototype.reset=function(){this.input.length&&(this.input=[])},t.prototype.render=function(){return n("div",null,n("slot",null))},t}();t["konami-listener"]=o},["konami-listener",[["el",7,0,1],["input",5,0,1]],{},[["matched"]]]);;