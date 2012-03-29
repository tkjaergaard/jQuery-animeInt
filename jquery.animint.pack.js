/*
 *  Project: animInt
 *  Description: A small plugin that animates one number to another.
 *  Author: Thomas Kjærgaard
 *  License: DBAD license
 */
;(function(e,c,a,g){var d="animInt",f={end:0,speed:1000,fps:null};function b(i,h){this.elm=i;this.options=e.extend({},f,h);this._defaults=f;this._name=d;this.init()}b.prototype.init=function(){this.start=parseInt(e(this.elm).text(),10);this.dir=(this.start>this.options.end?"down":"up");this.dif=(this.options.fps?this.options.fps:Math.abs((this.start)-(this.options.end)));this.doShuffle()};b.prototype.doShuffle=function(){var h=this;if(h.dir=="down"){if(h.start>h.options.end){e(h.elm).text(--h.start);h.t=setTimeout(function(){h.doShuffle()},h.options.speed/h.dif)}}else{if(h.dir=="up"){if(h.start<h.options.end){e(h.elm).text(++h.start);h.t=setTimeout(function(){h.doShuffle()},h.options.speed/h.dif)}}}};e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))}})}})(jQuery,window,document);