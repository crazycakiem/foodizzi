(function($){
 "use strict"; // Start of use strict


 /* ---------------------------------------------
 Scripts initialization
 --------------------------------------------- */

 $(window).load(function(){

  // Page loader

  $("body").imagesLoaded(function(){
   $(".page-loader div").fadeOut();
   $(".page-loader").delay(200).fadeOut("slow");
  });


  initWorkFilter();
  init_scroll_navigate();

  $(window).trigger("scroll");
  $(window).trigger("resize");

  // Hash menu forwarding
  if ((window.location.hash) && ($(window.location.hash).length)){
   var hash_offset = $(window.location.hash).offset().top;
   $("html, body").animate({
    scrollTop: hash_offset
   });
  }

 });


 $(document).ready(function(){

  $(window).trigger("resize");
  init_classic_menu();
  init_fullscreen_menu();
  initPageSliders();
  init_wow();
 });

 $(window).resize(function(){

  init_classic_menu_resize();
  init_side_panel_resize()
  js_height_init();
  split_height_init();

 });


 /* --------------------------------------------
 Platform detect
 --------------------------------------------- */
 var mobileTest;
 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  mobileTest = true;
  $("html").addClass("mobile");
 }
 else {
  mobileTest = false;
  $("html").addClass("no-mobile");
 }

 var mozillaTest;
 if (/mozilla/.test(navigator.userAgent)) {
  mozillaTest = true;
 }
 else {
  mozillaTest = false;
 }
 var safariTest;
 if (/safari/.test(navigator.userAgent)) {
  safariTest = true;
 }
 else {
  safariTest = false;
 }

 // Detect touch devices
 if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch";
 }


 /* ---------------------------------------------
 Sections helpers
 --------------------------------------------- */

 // Sections backgrounds

 var pageSection = $(".home-section, .page-section, .small-section, .split-section");
 pageSection.each(function(indx){

  if ($(this).attr("data-background")){
   $(this).css("background-image", "url(" + $(this).data("background") + ")");
  }
 });

 // Function for block height 100%
 function height_line(height_object, height_donor){
  height_object.height(height_donor.height());
  height_object.css({
   "line-height": height_donor.height() + "px"
  });
 }

 // Function equal height
 !function(a){
  a.fn.equalHeights = function(){
   var b = 0, c = a(this);
   return c.each(function(){
    var c = a(this).innerHeight();
    c > b && (b = c)
   }), c.css("height", b)
  }, a("[data-equal]").each(function(){
   var b = a(this), c = b.data("equal");
   b.find(c).equalHeights()
  })
 }(jQuery);


 /* ---------------------------------------------
 Nav panel classic
 --------------------------------------------- */

 var mobile_nav = $(".mobile-nav");
 var desktop_nav = $(".desktop-nav");
 var top_mobi_nav = $(".nav-show-on-mobile");
 var search_mobi_nav = $(".popup-search-nav");

 function init_classic_menu_resize(){

  // Mobile menu max height
  $(".mobile-on .desktop-nav > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px");

  // Mobile menu style toggle
  if ($(window).width() <= 1024) {
   $(".main-nav").addClass("mobile-on");
   desktop_nav.hide();
   top_mobi_nav.hide();
  }
  else
  if ($(window).width() > 1024) {
   $(".main-nav").removeClass("mobile-on");
   top_mobi_nav.show();
   desktop_nav.show();
  }
 }

 function init_classic_menu(){


  // Navbar sticky

  $(".js-stick").sticky({
   topSpacing: 0
  });


  height_line($(".inner-nav > ul > li > a"), $(".main-nav"));
  height_line(mobile_nav, $(".main-nav"));

  // mobile_nav.css({
  //     "width": $(".main-nav").height() + "px"
  // });

  // Transpaner menu

  if ($(".main-nav").hasClass("transparent")){
   $(".main-nav").addClass("js-transparent");
  }

  $(window).scroll(function(){

   if ($(window).scrollTop() > 10) {
    $(".js-transparent").removeClass("transparent");
    $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height");
    desktop_nav.hide();
   }
   else {
    $(".js-transparent").addClass("transparent");
    $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height");
    desktop_nav.show();
   }


  });

  // Mobile menu toggle

  // mobile_nav.click(function(){
  $(".mobile-nav .fa.fa-bars").click(function(){

   if (top_mobi_nav.hasClass("js-opened")) {
    top_mobi_nav.hide();
    top_mobi_nav.removeClass("js-opened");
    $(this).removeClass("active");
   }
   else {
    top_mobi_nav.show();
    top_mobi_nav.addClass("js-opened");
    $(this).addClass("active");

    if ($(".main-nav").hasClass("not-top")){
     $(window).scrollTo(".main-nav", "slow");
    }

   }

  });
  $(".nav-show-on-mobile .close-popup").click(function(){
   top_mobi_nav.hide();
   top_mobi_nav.removeClass("js-opened");
   $(this).removeClass("active");
  });

  // mobile_nav.click(function(){
  $(".mobile-nav .fa.open-search").click(function(){

   if (search_mobi_nav.hasClass("js-opened")) {
    search_mobi_nav.hide();
    search_mobi_nav.removeClass("js-opened");
    $(this).removeClass("active");

   }
   else {
    search_mobi_nav.show();
    $('body').addClass("hide-scroll");
    search_mobi_nav.addClass("js-opened");
    $(this).addClass("active");

    // Fix for responsive menu
    if ($(".main-nav").hasClass("not-top")){
     $(window).scrollTo(".main-nav", "slow");
    }

   }

  });
  $(".popup-search-nav .close-popup").click(function(){

   if (search_mobi_nav.hasClass("js-opened")) {
    search_mobi_nav.hide();
    search_mobi_nav.removeClass("js-opened");
    $(this).removeClass("active");
    $('body').removeClass("hide-scroll");
   }
   else {
    search_mobi_nav.show();
    search_mobi_nav.addClass("js-opened");
    $(this).addClass("active");


    // Fix for responsive menu
    if ($(".main-nav").hasClass("not-top")){
     $(window).scrollTo(".main-nav", "slow");
    }

   }

  });

  desktop_nav.find("a:not(.mn-has-sub)").click(function(){
   if (mobile_nav.hasClass("active")) {
    desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
    mobile_nav.removeClass("active");
   }
  });


  // Sub menu

  var mnHasSub = $(".mn-has-sub");
  var mnThisLi;

  $(".mobile-on .mn-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down");

  mnHasSub.click(function(){

   if ($(".main-nav").hasClass("mobile-on")) {
    mnThisLi = $(this).parent("li:first");
    if (mnThisLi.hasClass("js-opened")) {
     mnThisLi.find(".mn-sub:first").slideUp(function(){
      mnThisLi.removeClass("js-opened");
      mnThisLi.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
     });
    }
    else {
     $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
     mnThisLi.addClass("js-opened");
     mnThisLi.find(".mn-sub:first").slideDown();
    }

    return false;
   }
   else {

   }

  });

  mnThisLi = mnHasSub.parent("li");
  mnThisLi.hover(function(){

   if (!($(".main-nav").hasClass("mobile-on"))) {

    $(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
   }

  }, function(){

   if (!($(".main-nav").hasClass("mobile-on"))) {

    $(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast");
   }

  });

 }



 /* -------------------------------------------
 Parallax
 --------------------------------------------- */

 function init_parallax(){

  // Parallax
  if (($(window).width() >= 1024) && (mobileTest == false)) {
   $(".parallax-1").parallax("50%", 0.1);
   $(".parallax-2").parallax("50%", 0.2);
   $(".parallax-3").parallax("50%", 0.3);
   $(".parallax-4").parallax("50%", 0.4);
   $(".parallax-5").parallax("50%", 0.5);
   $(".parallax-6").parallax("50%", 0.6);
   $(".parallax-7").parallax("50%", 0.7);
   $(".parallax-8").parallax("50%", 0.5);
   $(".parallax-9").parallax("50%", 0.5);
   $(".parallax-10").parallax("50%", 0.5);
   $(".parallax-11").parallax("50%", 0.05);
  }

 }
})(jQuery); // End of use strict


/* ---------------------------------------------
Sliders
--------------------------------------------- */
function initPageSliders(){
 (function($){
  "use strict";

  // Item carousel
  $(".item-carousel").owlCarousel({
   autoPlay: true,
   stopOnHover: true,
   items: 4,
   itemsDesktop: [1199, 4],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 1],
   navigation: true,
   pagination: false,
   navigationText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
  });

  function syncPosition(el){
   var current = this.currentItem;
   $(".fullwidth-slideshow-pager").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
   if ($(".fullwidth-slideshow-pager").data("owlCarousel") !== undefined) {
    center(current)
   }
  }

  $(".fullwidth-slideshow-pager").on("click", ".owl-item", function(e){
   e.preventDefault();
   var number = $(this).data("owlItem");
   sync1.trigger("owl.goTo", number);
  });

  function center(number){
   var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
   var num = number;
   var found = false;
   for (var i in sync2visible) {
    if (num === sync2visible[i]) {
     var found = true;
    }
   }
   if (found === false) {
    if (num > sync2visible[sync2visible.length - 1]) {
     sync2.trigger("owl.goTo", num - sync2visible.length + 2)
    }
    else {
     if (num - 1 === -1) {
      num = 0;
     }
     sync2.trigger("owl.goTo", num);
    }
   }
   else
   if (num === sync2visible[sync2visible.length - 1]) {
    sync2.trigger("owl.goTo", sync2visible[1])
   }
   else
   if (num === sync2visible[0]) {
    sync2.trigger("owl.goTo", num - 1)
   }
  }

  var owl = $(".fullwidth-slideshow").data("owlCarousel");

  $(document.documentElement).keyup(function(event){
   // handle cursor keys
   if (event.keyCode == 37) {
    owl.prev();
   }
   else
   if (event.keyCode == 39) {
    owl.next();
   }
  });

  if ($(".owl-carousel").length) {
   var owl = $(".owl-carousel").data('owlCarousel');
   owl.reinit();
  }

 })(jQuery);
};


/* ---------------------------------------------
Fullscreen menu
--------------------------------------------- */

var fm_menu_wrap = $("#fullscreen-menu");
var fm_menu_button = $(".fm-button");

function init_fullscreen_menu(){

 fm_menu_button.click(function(){

  if ($(this).hasClass("animation-process")){
   return false;
  }
  else{
   if ($(this).hasClass("active")) {
    $(this).removeClass("active").css("z-index", "2001").addClass("animation-process");;

    fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function(){
     fm_menu_wrap.fadeOut(function(){
      fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
      fm_menu_button.css("z-index", "1030").removeClass("animation-process");

     });
    });

    if ($(".owl-carousel").lenth) {
     $(".owl-carousel").data("owlCarousel").play();
    }

   }
   else {
    if ($(".owl-carousel").lenth) {
     $(".owl-carousel").data("owlCarousel").stop();
    }
    $(this).addClass("active").css("z-index", "2001").addClass("animation-process");

    fm_menu_wrap.fadeIn(function(){
     fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
     fm_menu_button.removeClass("animation-process");
    });
   }

   return false;
  }

 });

 $("#fullscreen-menu").find("a:not(.fm-has-sub)").click(function(){

  if (fm_menu_button.hasClass("animation-process")){
   return false;
  }
  else {
   fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");

   fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function(){
    fm_menu_wrap.fadeOut(function(){
     fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
     fm_menu_button.css("z-index", "1030").removeClass("animation-process");

    });
   });

   if ($(".owl-carousel").lenth) {
    $(".owl-carousel").data("owlCarousel").play();
   }
  }
 });

 // Sub menu

 var fmHasSub = $(".fm-has-sub");
 var fmThisLi;

 fmHasSub.click(function(){

  fmThisLi = $(this).parent("li:first");
  if (fmThisLi.hasClass("js-opened")) {
   fmThisLi.find(".fm-sub:first").slideUp(function(){
    fmThisLi.removeClass("js-opened");
    fmThisLi.find(".fm-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
   });
  }
  else {
   $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
   fmThisLi.addClass("js-opened");
   fmThisLi.find(".fm-sub:first").slideDown();
  }

  return false;

 });

}


/* ---------------------------------------------
Side panel
--------------------------------------------- */

var side_panel = $(".side-panel");
var sp_button = $(".sp-button");
var sp_close_button = $(".sp-close-button");
var sp_overlay = $(".sp-overlay");

function sp_panel_close(){
 side_panel.animate({
  opacity: 0,
  left: -270
 }, 500, "easeOutExpo");
 sp_overlay.fadeOut();


 if ($(".owl-carousel").lenth) {
  $(".owl-carousel").data("owlCarousel").play();
 }
}

function init_side_panel_resize(){
 (function($){
  "use strict";

  if ($(window).width() >= 1199){
   side_panel.css({
    opacity: 1,
    left: 0
   });
   $(".side-panel-is-left").css("margin-left", "270px");
   sp_button.css("display", "none");
   sp_close_button.css("display", "none");
  } else {
   side_panel.css({
    opacity: 0,
    left: -270
   });
   $(".side-panel-is-left").css("margin-left", "0");
   sp_button.css("display", "block");
   sp_close_button.css("display", "block");
  }

 })(jQuery);
}


/* ---------------------------------------------
Height 100%
--------------------------------------------- */
function js_height_init(){
 (function($){
  $(".js-height-full").height($(window).height());
  $(".js-height-parent").each(function(){
   $(this).height($(this).parent().first().height());
  });
 })(jQuery);
}
/* ---------------------------------------------
WOW animations
--------------------------------------------- */

function init_wow(){
 (function($){

  var wow = new WOW({
   boxClass: 'wow',
   animateClass: 'animated',
   offset: 90,
   mobile: false,
   live: true
  });

  if ($("body").hasClass("appear-animate")){
   wow.init();
  }

 })(jQuery);
}
/* ---------------------------------------------
Split section
--------------------------------------------- */

function split_height_init(){
 (function($){

  $(".ssh-table, .split-section-content").css("height", "auto");

  if ($(window).width() > 992) {
   $(".split-section").each(function(){
    var split_section_height = $(this).find(".split-section-content").innerHeight();
    $(this).find(".ssh-table").height(split_section_height);
   });
  }

 })(jQuery);
}
