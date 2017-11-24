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
 });
 $(document).ready(function(){
  $(window).trigger("resize");
  init_classic_menu();
  initPageSliders();
  init_wow();
 });
 $(window).resize(function(){
  init_classic_menu_resize();
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
  // Fullwidth slider
  $(".fullwidth-slider").owlCarousel({
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
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
