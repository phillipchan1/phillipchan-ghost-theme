(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{24:function(e,a,t){e.exports=t(25)},25:function(e,a,t){"use strict";t.r(a);var i=t(0),d=t.n(i),o=t(3);t(5);d()(document).ready((function(){var e=d()(".js-featured-slider"),a=d()(".js-featured-slide");if(e.length>0){var t={delay:5e3},i=!1,n=!1;"undefined"!=typeof disableFeaturedSliderAutoplay&&disableFeaturedSliderAutoplay&&(t=!1),a.length>1&&(i={el:".swiper-pagination",type:"bullets",clickable:!0},n=!0);var l=new o.a(".js-featured-slider",{autoHeight:!0,autoplay:t,effect:"fade",fadeEffect:{crossFade:!0},grabCursor:n,longSwipesRatio:.1,pagination:i,on:{init:function(){var a=this;e.addClass("loaded"),setTimeout((function(){a.slideTo(0,0)}),100)}}});"undefined"!=typeof disableFeaturedSliderAutoplay&&disableFeaturedSliderAutoplay||e.hover((function(){l.autoplay.stop()}),(function(){l.autoplay.start()}))}}))}},[[24,0,1]]]);