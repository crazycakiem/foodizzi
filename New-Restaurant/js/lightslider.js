var $jscomp={scope:{},findInternal:function(e,i,t){e instanceof String&&(e=String(e));for(var n=e.length,l=0;n>l;l++){var o=e[l];if(i.call(t,o,l,e))return{i:l,v:o}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,i,t){if(t.get||t.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[i]=t.value)},$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(e,i,t,n){if(i){for(t=$jscomp.global,e=e.split("."),n=0;n<e.length-1;n++){var l=e[n];l in t||(t[l]={}),t=t[l]}e=e[e.length-1],n=t[e],i=i(n),i!=n&&null!=i&&$jscomp.defineProperty(t,e,{configurable:!0,writable:!0,value:i})}},$jscomp.polyfill("Array.prototype.find",function(e){return e?e:function(e,i){return $jscomp.findInternal(this,e,i).v}},"es6-impl","es3"),function(e,i){var t={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,i){},onAfterSlide:function(e,i){},onBeforeNextSlide:function(e,i){},onBeforePrevSlide:function(e,i){}};e.fn.lightSlider=function(i){if(0===this.length)return this;if(1<this.length)return this.each(function(){e(this).lightSlider(i)}),this;var n={},l=e.extend(!0,{},t,i),o={},a=this;n.$el=this,"fade"===l.mode&&(l.vertical=!1);var s=a.children(),r=e(window).width(),d=null,c=0,u=0,f=!1,h=0,g="",v=0,p=!0===l.vertical?"height":"width",m=!0===l.vertical?"margin-bottom":"margin-right",S=0,b=0,C=0,M=0,T=null,w="ontouchstart"in document.documentElement,y={chbreakpoint:function(){if(r=e(window).width(),l.responsive.length){var i;if(!1===l.autoWidth&&(i=l.item),r<l.responsive[0].breakpoint)for(var t=0;t<l.responsive.length;t++)r<l.responsive[t].breakpoint&&(d=l.responsive[t]);if("undefined"!=typeof d&&null!==d)for(var n in d.settings)d.settings.hasOwnProperty(n)&&(("undefined"==typeof o[n]||null===o[n])&&(o[n]=l[n]),l[n]=d.settings[n]);if(!e.isEmptyObject(o)&&r>l.responsive[0].breakpoint)for(var a in o)o.hasOwnProperty(a)&&(l[a]=o[a]);!1===l.autoWidth&&S>0&&C>0&&i!==l.item&&(v=Math.round(S/((C+l.slideMargin)*l.slideMove)))}},calSW:function(){!1===l.autoWidth&&(C=(h-(l.item*l.slideMargin-l.slideMargin))/l.item)},calWidth:function(e){if(e=!0===e?g.find(".lslide").length:s.length,!1===l.autoWidth)u=e*(C+l.slideMargin);else for(var i=u=0;e>i;i++)u+=parseInt(s.eq(i).width())+l.slideMargin;return u}},n={doCss:function(){var e;if(e=l.useCSS)e:{e="transition MozTransition WebkitTransition OTransition msTransition KhtmlTransition".split(" ");for(var i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style){e=!0;break e}e=void 0}return e?!0:!1},keyPress:function(){l.keyPress&&e(document).on("keyup.lightslider",function(i){e(":focus").is("input, textarea")||(i.preventDefault?i.preventDefault():i.returnValue=!1,37===i.keyCode?a.goToPrevSlide():39===i.keyCode&&a.goToNextSlide())})},controls:function(){l.controls&&(a.after('<div class="lSAction"><a class="lSPrev">'+l.prevHtml+'</a><a class="lSNext">'+l.nextHtml+"</a></div>"),l.autoWidth?y.calWidth(!1)<h&&g.find(".lSAction").hide():c<=l.item&&g.find(".lSAction").hide(),g.find(".lSAction a").on("click",function(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,"lSPrev"===e(this).attr("class")?a.goToPrevSlide():a.goToNextSlide(),!1}))},initialStyle:function(){var e=this;"fade"===l.mode&&(l.autoWidth=!1,l.slideEndAnimation=!1),l.auto&&(l.slideEndAnimation=!1),l.autoWidth&&(l.slideMove=1,l.item=1),l.loop&&(l.slideMove=1,l.freeMove=!1),l.onBeforeStart.call(this,a),y.chbreakpoint(),a.addClass("lightSlider").wrap('<div class="lSSlideOuter '+l.addClass+'"><div class="lSSlideWrapper"></div></div>'),g=a.parent(".lSSlideWrapper"),!0===l.rtl&&g.parent().addClass("lSrtl"),l.vertical?(g.parent().addClass("vertical"),h=l.verticalHeight,g.css("height",h+"px")):h=a.outerWidth(),s.addClass("lslide"),!0===l.loop&&"slide"===l.mode&&(y.calSW(),y.clone=function(){if(y.calWidth(!0)>h){for(var i=0,t=0,n=0;n<s.length&&(i+=parseInt(a.find(".lslide").eq(n).width())+l.slideMargin,t++,!(i>=h+l.slideMargin));n++);if(i=!0===l.autoWidth?t:l.item,i<a.find(".clone.left").length)for(t=0;t<a.find(".clone.left").length-i;t++)s.eq(t).remove();if(i<a.find(".clone.right").length)for(t=s.length-1;t>s.length-1-a.find(".clone.right").length;t--)v--,s.eq(t).remove();for(t=a.find(".clone.right").length;i>t;t++)a.find(".lslide").eq(t).clone().removeClass("lslide").addClass("clone right").appendTo(a),v++;for(t=a.find(".lslide").length-a.find(".clone.left").length;t>a.find(".lslide").length-i;t--)a.find(".lslide").eq(t-1).clone().removeClass("lslide").addClass("clone left").prependTo(a);s=a.children()}else s.hasClass("clone")&&(a.find(".clone").remove(),e.move(a,0))},y.clone()),y.sSW=function(){c=s.length,!0===l.rtl&&!1===l.vertical&&(m="margin-left"),!1===l.autoWidth&&s.css(p,C+"px"),s.css(m,l.slideMargin+"px"),u=y.calWidth(!1),a.css(p,u+"px"),!0===l.loop&&"slide"===l.mode&&!1===f&&(v=a.find(".clone.left").length)},y.calL=function(){s=a.children(),c=s.length},this.doCss()&&g.addClass("usingCss"),y.calL(),"slide"===l.mode?(y.calSW(),y.sSW(),!0===l.loop&&(S=e.slideValue(),this.move(a,S)),!1===l.vertical&&this.setHeight(a,!1)):(this.setHeight(a,!0),a.addClass("lSFade"),this.doCss()||(s.fadeOut(0),s.eq(v).fadeIn(0))),!0===l.loop&&"slide"===l.mode?s.eq(v).addClass("active"):s.first().addClass("active")},pager:function(){var e=this;if(y.createPager=function(){M=(h-(l.thumbItem*l.thumbMargin-l.thumbMargin))/l.thumbItem;for(var i=g.find(".lslide"),t=g.find(".lslide").length,n=0,o="",s=0,n=0;t>n;n++){"slide"===l.mode&&(s=l.autoWidth?s+(parseInt(i.eq(n).width())+l.slideMargin)*l.slideMove:n*(C+l.slideMargin)*l.slideMove);var r=i.eq(n*l.slideMove).attr("data-thumb"),o=!0===l.gallery?o+('<li style="width:100%;'+p+":"+M+"px;"+m+":"+l.thumbMargin+'px"><a href="#"><img src="'+r+'" /></a></li>'):o+('<li><a href="#">'+(n+1)+"</a></li>");if("slide"===l.mode&&s>=u-h-l.slideMargin){n+=1,i=2,l.autoWidth&&(o+='<li><a href="#">'+(n+1)+"</a></li>",i=1),i>n?(o=null,g.parent().addClass("noPager")):g.parent().removeClass("noPager");break}}var d=g.parent();d.find(".lSPager").html(o),!0===l.gallery&&(!0===l.vertical&&d.find(".lSPager").css("width",l.vThumbWidth+"px"),b=n*(l.thumbMargin+M)+.5,d.find(".lSPager").css({property:b+"px","transition-duration":l.speed+"ms"}),!0===l.vertical&&g.parent().css("padding-right",l.vThumbWidth+l.galleryMargin+"px"),d.find(".lSPager").css(p,b+"px"));var c=d.find(".lSPager").find("li");c.first().addClass("active"),c.on("click",function(){return v=!0===l.loop&&"slide"===l.mode?v+(c.index(this)-d.find(".lSPager").find("li.active").index()):c.index(this),a.mode(!1),!0===l.gallery&&e.slideThumb(),!1})},l.pager){var i="lSpg";l.gallery&&(i="lSGallery"),g.after('<ul class="lSPager '+i+'"></ul>'),i=l.vertical?"margin-left":"margin-top",g.parent().find(".lSPager").css(i,l.galleryMargin+"px"),y.createPager()}setTimeout(function(){y.init()},0)},setHeight:function(e,i){var t=null,n=this,t=l.loop?e.children(".lslide ").first():e.children().first(),o=function(){var n=t.outerHeight(),l=0,o=n;i&&(n=0,l=100*o/h),e.css({height:n+"px","padding-bottom":l+"%"})};o(),t.find("img").length?t.find("img")[0].complete?(o(),T||n.auto()):t.find("img").on("load",function(){setTimeout(function(){o(),T||n.auto()},100)}):T||n.auto()},active:function(e,i){this.doCss()&&"fade"===l.mode&&g.addClass("on");var t=0;if(v*l.slideMove<c){e.removeClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||e.fadeOut(l.speed);var t=!0===i?v:v*l.slideMove,n;!0===i&&(n=e.length,t+1>=n&&(t=n-1)),!0===l.loop&&"slide"===l.mode&&(t=!0===i?v-a.find(".clone.left").length:v*l.slideMove,!0===i&&(n=e.length,t+1===n?t=n-1:t+1>n&&(t=0))),this.doCss()||"fade"!==l.mode||!1!==i||e.eq(t).fadeIn(l.speed),e.eq(t).addClass("active")}else e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||(e.fadeOut(l.speed),e.eq(t).fadeIn(l.speed))},move:function(e,i){!0===l.rtl&&(i=-i),this.doCss()?e.css(!0===l.vertical?{transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}:{transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):!0===l.vertical?e.css("position","relative").animate({top:-i+"px"},l.speed,l.easing):e.css("position","relative").animate({left:-i+"px"},l.speed,l.easing);var t=g.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(s,!1);var e=g.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;y.calSlide=function(){u>h&&(S=e.slideValue(),e.active(s,!1),S>u-h-l.slideMargin?S=u-h-l.slideMargin:0>S&&(S=0),e.move(a,S),!0===l.loop&&"slide"===l.mode&&(v>=c-a.find(".clone.left").length/l.slideMove&&e.resetSlide(a.find(".clone.left").length),0===v&&e.resetSlide(g.find(".lslide").length)))},y.calSlide()},resetSlide:function(e){var i=this;g.find(".lSAction a").addClass("disabled"),setTimeout(function(){v=e,g.css("transition-duration","0ms"),S=i.slideValue(),i.active(s,!1),n.move(a,S),setTimeout(function(){g.css("transition-duration",l.speed+"ms"),g.find(".lSAction a").removeClass("disabled")},50)},l.speed+100)},slideValue:function(){var e;if(!1===l.autoWidth)e=v*(C+l.slideMargin)*l.slideMove;else for(var i=e=0;v>i;i++)e+=parseInt(s.eq(i).width())+l.slideMargin;return e},slideThumb:function(){var e;switch(l.currentPagerPosition){case"left":e=0;break;case"middle":e=h/2-M/2;break;case"right":e=h-M}var i=v-a.find(".clone.left").length,t=g.parent().find(".lSPager");"slide"===l.mode&&!0===l.loop&&(i>=t.children().length?i=0:0>i&&(i=t.children().length)),e=i*(M+l.thumbMargin)-e,e+h>b&&(e=b-h-l.thumbMargin),0>e&&(e=0),this.move(t,e)},auto:function(){l.auto&&(clearInterval(T),T=setInterval(function(){a.goToNextSlide()},l.pause))},pauseOnHover:function(){var i=this;l.auto&&l.pauseOnHover&&(g.on("mouseenter",function(){e(this).addClass("ls-hover"),a.pause(),l.auto=!0}),g.on("mouseleave",function(){e(this).removeClass("ls-hover"),g.find(".lightSlider").hasClass("lsGrabbing")||i.auto()}))},touchMove:function(e,i){if(g.css("transition-duration","0ms"),"slide"===l.mode){var t=S-(e-i);if(t>=u-h-l.slideMargin)if(!1===l.freeMove)t=u-h-l.slideMargin;else var n=u-h-l.slideMargin,t=n+(t-n)/5;else 0>t&&(t=!1===l.freeMove?0:t/5);this.move(a,t)}},touchEnd:function(e){if(g.css("transition-duration",l.speed+"ms"),"slide"===l.mode){var i=!1,t=!0;S-=e,S>u-h-l.slideMargin?(S=u-h-l.slideMargin,!1===l.autoWidth&&(i=!0)):0>S&&(S=0);var n=function(e){var t=0;if(i||e&&(t=1),l.autoWidth)for(var n=e=0;n<s.length&&(e+=parseInt(s.eq(n).width())+l.slideMargin,v=n+t,!(e>=S));n++);else e=S/((C+l.slideMargin)*l.slideMove),v=parseInt(e)+t,S>=u-h-l.slideMargin&&0!==e%1&&v++};e>=l.swipeThreshold?(n(!1),t=!1):e<=-l.swipeThreshold&&(n(!0),t=!1),a.mode(t),this.slideThumb()}else e>=l.swipeThreshold?a.goToPrevSlide():e<=-l.swipeThreshold&&a.goToNextSlide()},enableDrag:function(){var i=this;if(!w){var t=0,n=0,o=!1;g.find(".lightSlider").addClass("lsGrab"),g.on("mousedown",function(i){return h>u&&0!==u?!1:void("lSPrev"!==e(i.target).attr("class")&&"lSNext"!==e(i.target).attr("class")&&(t=!0===l.vertical?i.pageY:i.pageX,o=!0,i.preventDefault?i.preventDefault():i.returnValue=!1,g.scrollLeft+=1,--g.scrollLeft,g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(T)))}),e(window).on("mousemove",function(e){o&&(n=!0===l.vertical?e.pageY:e.pageX,i.touchMove(n,t))}),e(window).on("mouseup",function(a){o&&(g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),o=!1,n=!0===l.vertical?a.pageY:a.pageX,a=n-t,Math.abs(a)>=l.swipeThreshold&&e(window).on("click.ls",function(i){i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopImmediatePropagation(),i.stopPropagation(),e(window).off("click.ls")}),i.touchEnd(a))})}},enableTouch:function(){var e=this;if(w){var i,t,n={};g.on("touchstart",function(e){n=e.originalEvent.targetTouches[0],i=e.originalEvent.targetTouches[0].pageX,t=e.originalEvent.targetTouches[0].pageY,clearInterval(T)}),g.on("touchmove",function(o){if(h>u&&0!==u)return!1;n=o.originalEvent.targetTouches[0];var a=Math.abs(n.pageX-i),s=Math.abs(n.pageY-t);!0===l.vertical?(3*s>a&&o.preventDefault(),e.touchMove(n.pageY,t)):(3*a>s&&o.preventDefault(),e.touchMove(n.pageX,i))}),g.on("touchend",function(){return h>u&&0!==u?!1:void e.touchEnd(!0===l.vertical?n.pageY-t:n.pageX-i)})}},build:function(){var i=this;i.initialStyle(),this.doCss()&&(!0===l.enableTouch&&i.enableTouch(),!0===l.enableDrag&&i.enableDrag()),e(window).on("focus",function(){i.auto()}),e(window).on("blur",function(){clearInterval(T)}),i.pager(),i.pauseOnHover(),i.controls(),i.keyPress()}};return n.build(),y.init=function(){y.chbreakpoint(),!0===l.vertical?(h=1<l.item?l.verticalHeight:s.outerHeight(),g.css("height",h+"px")):h=g.outerWidth(),!0===l.loop&&"slide"===l.mode&&y.clone(),y.calL(),"slide"===l.mode&&a.removeClass("lSSlide"),"slide"===l.mode&&(y.calSW(),y.sSW()),setTimeout(function(){"slide"===l.mode&&a.addClass("lSSlide")},1e3),l.pager&&y.createPager(),!0===l.adaptiveHeight&&!1===l.vertical&&a.css("height",s.eq(v).outerHeight(!0)),!1===l.adaptiveHeight&&("slide"===l.mode?!1===l.vertical?n.setHeight(a,!1):n.auto():n.setHeight(a,!0)),!0===l.gallery&&n.slideThumb(),"slide"===l.mode&&n.slide(),!1===l.autoWidth?s.length<=l.item?g.find(".lSAction").hide():g.find(".lSAction").show():y.calWidth(!1)<h&&0!==u?g.find(".lSAction").hide():g.find(".lSAction").show()},a.goToPrevSlide=function(){v>0?(l.onBeforePrevSlide.call(this,a,v),v--,a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.loop?(l.onBeforePrevSlide.call(this,a,v),"fade"===l.mode&&(v=parseInt((c-1)/l.slideMove)),a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.slideEndAnimation&&(a.addClass("leftEnd"),setTimeout(function(){a.removeClass("leftEnd")},400))},a.goToNextSlide=function(){var e=!0;"slide"===l.mode&&(e=n.slideValue()<u-h-l.slideMargin),v*l.slideMove<c-l.slideMove&&e?(l.onBeforeNextSlide.call(this,a,v),v++,a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.loop?(l.onBeforeNextSlide.call(this,a,v),v=0,a.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.slideEndAnimation&&(a.addClass("rightEnd"),setTimeout(function(){a.removeClass("rightEnd")},400))},a.mode=function(e){!0===l.adaptiveHeight&&!1===l.vertical&&a.css("height",s.eq(v).outerHeight(!0)),!1===f&&("slide"===l.mode?n.doCss()&&(a.addClass("lSSlide"),""!==l.speed&&g.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&g.css("transition-timing-function",l.cssEasing)):n.doCss()&&(""!==l.speed&&a.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&a.css("transition-timing-function",l.cssEasing))),e||l.onBeforeSlide.call(this,a,v),"slide"===l.mode?n.slide():n.fade(),g.hasClass("ls-hover")||n.auto(),setTimeout(function(){e||l.onAfterSlide.call(this,a,v)},l.speed),f=!0},a.play=function(){a.goToNextSlide(),l.auto=!0,n.auto()},a.pause=function(){l.auto=!1,clearInterval(T)},a.refresh=function(){y.init()},a.getCurrentSlideCount=function(){var e=v;if(l.loop)var e=g.find(".lslide").length,i=a.find(".clone.left").length,e=i-1>=v?e+(v-i):v>=e+i?v-e-i:v-i;return e+1},a.getTotalSlideCount=function(){return g.find(".lslide").length},a.goToSlide=function(e){v=l.loop?e+a.find(".clone.left").length-1:e,a.mode(!1),!0===l.gallery&&n.slideThumb()},a.destroy=function(){a.lightSlider&&(a.goToPrevSlide=function(){},a.goToNextSlide=function(){},a.mode=function(){},a.play=function(){},a.pause=function(){},a.refresh=function(){},a.getCurrentSlideCount=function(){},a.getTotalSlideCount=function(){},a.goToSlide=function(){},a.lightSlider=null,y={init:function(){}},a.parent().parent().find(".lSAction, .lSPager").remove(),a.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),a.children().removeAttr("style"),s.removeClass("lslide active"),a.find(".clone").remove(),T=s=null,f=!1,v=0)},setTimeout(function(){l.onSliderLoad.call(this,a)},10),e(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,y.init()},200)}),this}}(jQuery);