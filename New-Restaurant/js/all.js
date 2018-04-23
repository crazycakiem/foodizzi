(function(d) {
 d(window).load(function() {
  initWorkFilter();
  q();
  d(window).trigger("scroll");
  d(window).trigger("resize");
  if ((window.location.hash) && (d(window.location.hash).length)) {
   var u = d(window.location.hash).offset().top;
   d("html, body").animate({
    scrollTop: u
   })
  }
 });
 d(document).ready(function() {
  d(window).trigger("resize");
  e();
  init_fullscreen_menu();
  init_side_panel();
  init_lightbox();
  o();
  h();
  g();
  r();
  initPageSliders();
  init_map();
  init_wow();
  init_masonry();
 });
 d(window).resize(function() {
  f();
  init_side_panel_resize();
  js_height_init();
  split_height_init()
 });
 var c;
 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  c = true;
  d("html").addClass("mobile")
 } else {
  c = false;
  d("html").addClass("no-mobile")
 }
 var n;
 if (/mozilla/.test(navigator.userAgent)) {
  n = true
 } else {
  n = false
 }
 var b;
 if (/safari/.test(navigator.userAgent)) {
  b = true
 } else {
  b = false
 }
 if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch"
 }
 var j = d(".home-section, .page-section, .small-section, .split-section");
 j.each(function(u) {
  if (d(this).attr("data-background")) {
   d(this).css("background-image", "url(" + d(this).data("background") + ")")
  }
 });

 function t(u, v) {
  u.height(v.height());
  u.css({
   "line-height": v.height() + "px"
  })
 }! function(u) {
  u.fn.equalHeights = function() {
   var v = 0,
    w = u(this);
   return w.each(function() {
    var x = u(this).innerHeight();
    x > v && (v = x)
   }), w.css("height", v)
  }, u("[data-equal]").each(function() {
   var v = u(this),
    w = v.data("equal");
   v.find(w).equalHeights()
  })
 }(jQuery);
 var m = d(".progress-bar");
 m.each(function(u) {
  d(this).css("width", d(this).attr("aria-valuenow") + "%")
 });
 var p = d(".mobile-nav");
 var l = d(".desktop-nav");
 var a = d(".nav-show-on-mobile");
 var k = d(".popup-search-nav");

 function f() {
  d(".mobile-on .desktop-nav > ul").css("max-height", d(window).height() - d(".main-nav").height() - 20 + "px");
  if (d(window).width() <= 1024) {
   d(".main-nav").addClass("mobile-on");
   l.hide();
   a.hide()
  } else {
   if (d(window).width() > 1024) {
    d(".main-nav").removeClass("mobile-on");
    a.show();
    l.show()
   }
  }
 }

 function e() {
  d(".js-stick").sticky({
   topSpacing: 0
  });
  t(d(".inner-nav > ul > li > a"), d(".main-nav"));
  t(p, d(".main-nav"));
  if (d(".main-nav").hasClass("transparent")) {
   d(".main-nav").addClass("js-transparent")
  }
  d(window).scroll(function() {
   if (d(window).scrollTop() > 10) {
    d(".js-transparent").removeClass("transparent");
    d(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass("small-height");
    l.hide()
   } else {
    d(".js-transparent").addClass("transparent");
    d(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass("small-height");
    l.show()
   }
  });
  d(".mobile-nav .fa.fa-bars").click(function() {
   if (a.hasClass("js-opened")) {
    a.hide();
    a.removeClass("js-opened");
    d(this).removeClass("active")
   } else {
    a.show();
    a.addClass("js-opened");
    d(this).addClass("active");
    if (d(".main-nav").hasClass("not-top")) {
     d(window).scrollTo(".main-nav", "slow")
    }
   }
  });
  d(".nav-show-on-mobile .close-popup").click(function() {
   a.hide();
   a.removeClass("js-opened");
   d(this).removeClass("active")
  });
  d(".mobile-nav .fa.open-search").click(function() {
   if (k.hasClass("js-opened")) {
    k.hide();
    k.removeClass("js-opened");
    d(this).removeClass("active")
   } else {
    k.show();
    d("body").addClass("hide-scroll");
    k.addClass("js-opened");
    d(this).addClass("active");
    if (d(".main-nav").hasClass("not-top")) {
     d(window).scrollTo(".main-nav", "slow")
    }
   }
  });
  d(".popup-search-nav .close-popup").click(function() {
   if (k.hasClass("js-opened")) {
    k.hide();
    k.removeClass("js-opened");
    d(this).removeClass("active");
    d("body").removeClass("hide-scroll")
   } else {
    k.show();
    k.addClass("js-opened");
    d(this).addClass("active");
    if (d(".main-nav").hasClass("not-top")) {
     d(window).scrollTo(".main-nav", "slow")
    }
   }
  });
  l.find("a:not(.mn-has-sub)").click(function() {
   if (p.hasClass("active")) {
    l.slideUp("slow", "easeOutExpo").removeClass("js-opened");
    p.removeClass("active")
   }
  });
  var v = d(".mn-has-sub");
  var u;
  d(".mobile-on .mn-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down");
  v.click(function() {
   if (d(".main-nav").hasClass("mobile-on")) {
    u = d(this).parent("li:first");
    if (u.hasClass("js-opened")) {
     u.find(".mn-sub:first").slideUp(function() {
      u.removeClass("js-opened");
      u.find(".mn-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
     })
    } else {
     d(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
     u.addClass("js-opened");
     u.find(".mn-sub:first").slideDown()
    }
    return false
   } else {}
  });
  u = v.parent("li");
  u.hover(function() {
   if (!(d(".main-nav").hasClass("mobile-on"))) {
    d(this).find(".mn-sub:first").stop(true, true).fadeIn("fast")
   }
  }, function() {
   if (!(d(".main-nav").hasClass("mobile-on"))) {
    d(this).find(".mn-sub:first").stop(true, true).delay(100).fadeOut("fast")
   }
  })
 }

 function q() {
  d(".local-scroll").localScroll({
   target: "body",
   duration: 1500,
   offset: 0,
   easing: "easeInOutExpo"
  });
  var v = d(".home-section, .split-section, .page-section");
  var u = d(".scroll-nav li a");
  d(window).scroll(function() {
   v.filter(":in-viewport:first").each(function() {
    var x = d(this);
    var w = d('.scroll-nav li a[href="#' + x.attr("id") + '"]');
    u.removeClass("active");
    w.addClass("active")
   })
  })
 }

 /* ---------------------------------------------
  Masonry
  --------------------------------------------- */

 function init_masonry() {
  (function($) {

   $(".masonry").imagesLoaded(function() {
    $(".masonry").masonry();
   });

  })(jQuery);
 }

 /* ---------------------------------------------
  Lightboxes
  --------------------------------------------- */

 function init_lightbox() {

  // Works Item Lightbox
  $(".work-lightbox-link").magnificPopup({
   gallery: {
    enabled: true
   },
   mainClass: "mfp-fade"
  });

  // Works Item Lightbox
  $(".lightbox-gallery-1").magnificPopup({
   gallery: {
    enabled: true
   }
  });

  // Other Custom Lightbox
  $(".lightbox-gallery-2").magnificPopup({
   gallery: {
    enabled: true
   }
  });
  $(".lightbox-gallery-3").magnificPopup({
   gallery: {
    enabled: true
   }
  });
  $(".lightbox").magnificPopup();

 }

 function o() {
  if ((d(window).width() >= 1024) && (c == false)) {
   d(".parallax-1").parallax("50%", 0.1);
   d(".parallax-2").parallax("50%", 0.2);
   d(".parallax-3").parallax("50%", 0.3);
   d(".parallax-4").parallax("50%", 0.4);
   d(".parallax-5").parallax("50%", 0.5);
   d(".parallax-6").parallax("50%", 0.6);
   d(".parallax-7").parallax("50%", 0.7);
   d(".parallax-8").parallax("50%", 0.5);
   d(".parallax-9").parallax("50%", 0.5);
   d(".parallax-10").parallax("50%", 0.5);
   d(".parallax-11").parallax("50%", 0.05)
  }
 }

 function h() {
  var w;
  d(".tpl-minimal-tabs li.it-mn > a").click(function() {
   d("li.it-mn").removeClass("active");
   d(this).addClass("active")
  });
  var u = d(".accordion > dd").hide();
  u.first().slideDown("easeOutExpo");
  d(".accordion > dt > a").first().addClass("active");
  d(".accordion > dt > a").click(function() {
   var x = d(this).parent().next("dd");
   d(".accordion > dt > a").removeClass("active");
   d(this).addClass("active");
   u.not(x).slideUp("easeInExpo");
   d(this).parent().next().slideDown("easeOutExpo");
   return false
  });
  var v = d(".toggle > dd").hide();
  d(".toggle > dt > a").click(function() {
   if (d(this).hasClass("active")) {
    d(this).parent().next().slideUp("easeOutExpo");
    d(this).removeClass("active")
   } else {
    var x = d(this).parent().next("dd");
    d(this).addClass("active");
    d(this).parent().next().slideDown("easeOutExpo")
   }
   return false
  })
 }

 function g() {
  d(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
   placement: "bottom"
  });
  d(".tooltip-top, .tooltip-top a").tooltip({
   placement: "top"
  })
 }

 function s() {
  d(".count-number").appear(function() {
   var u = d(this);
   u.countTo({
    from: 0,
    to: u.html(),
    speed: 1300,
    refreshInterval: 60,
   })
  })
 }

 function r() {
  d(".team-item").click(function() {
   if (d("html").hasClass("mobile")) {
    d(this).toggleClass("js-active")
   }
  })
 }
})(jQuery);

function initPageSliders() {
 (function(e) {
  e(".fullwidth-slider").owlCarousel({
   slideSpeed: 350,
   autoPlay: 5000,
   singleItem: true,
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".fullwidth-slider-edeal").owlCarousel({
   slideSpeed: 350,
   autoPlay: 3000,
   singleItem: true,
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".fullwidth-slider-fade").owlCarousel({
   transitionStyle: "fadeUp",
   slideSpeed: 350,
   singleItem: true,
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".fullwidth-gallery").owlCarousel({
   transitionStyle: "fade",
   autoPlay: 5000,
   slideSpeed: 700,
   singleItem: true,
   autoHeight: true,
   navigation: false,
   pagination: false
  });
  e(".item-carousel").owlCarousel({
   autoPlay: 2500,
   items: 3,
   itemsDesktop: [1199, 3],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 1],
   navigation: false,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".item-carouselhst2").owlCarousel({
   autoPlay: 3500,
   items: 3,
   itemsDesktop: [1199, 3],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 1],
   navigation: true,
   pagination: false,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".menu-item-carousel").owlCarousel({
   autoPlay: false,
   items: 4,
   itemsDesktop: [1199, 3],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 1],
   navigation: true,
   pagination: false,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".sm-menu-item-carousel").owlCarousel({
   autoPlay: false,
   items: 4,
   itemsDesktop: [1199, 3],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 1],
   navigation: true,
   pagination: false,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".small-item-carousel").owlCarousel({
   autoPlay: 2500,
   stopOnHover: true,
   items: 7,
   itemsDesktop: [1199, 4],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 2],
   pagination: false,
   navigation: false,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".small-item-carousel2").owlCarousel({
   autoPlay: 2500,
   stopOnHover: true,
   items: 5,
   itemsDesktop: [1199, 4],
   itemsTabletSmall: [768, 3],
   itemsMobile: [480, 2],
   pagination: false,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".single-carousel").owlCarousel({
   singleItem: true,
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".content-slider").owlCarousel({
   slideSpeed: 350,
   singleItem: true,
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".photo-slider").owlCarousel({
   slideSpeed: 350,
   items: 4,
   itemsDesktop: [1199, 4],
   itemsTabletSmall: [768, 2],
   itemsMobile: [480, 1],
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".work-full-slider").owlCarousel({
   slideSpeed: 350,
   singleItem: true,
   autoHeight: true,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".blog-posts-carousel").owlCarousel({
   autoPlay: 5000,
   stopOnHover: true,
   items: 3,
   itemsDesktop: [1199, 3],
   itemsTabletSmall: [768, 2],
   itemsMobile: [480, 1],
   pagination: false,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".blog-posts-carousel-alt").owlCarousel({
   autoPlay: 3500,
   stopOnHover: true,
   slideSpeed: 350,
   singleItem: true,
   autoHeight: true,
   pagination: false,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  e(".image-carousel").owlCarousel({
   autoPlay: 5000,
   stopOnHover: true,
   items: 4,
   itemsDesktop: [1199, 3],
   itemsTabletSmall: [768, 2],
   itemsMobile: [480, 1],
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });
  var c = e(".fullwidth-slideshow");
  var b = e(".fullwidth-slideshow-pager");
  e(".fullwidth-slideshow").owlCarousel({
   autoPlay: 5000,
   stopOnHover: true,
   transitionStyle: "fade",
   slideSpeed: 350,
   singleItem: true,
   autoHeight: true,
   pagination: false,
   navigation: true,
   navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   afterAction: f,
   responsiveRefreshRate: 200
  });
  e(".fullwidth-slideshow-pager").owlCarousel({
   autoPlay: 5000,
   stopOnHover: true,
   items: 8,
   itemsDesktop: [1199, 8],
   itemsDesktopSmall: [979, 7],
   itemsTablet: [768, 6],
   itemsMobile: [480, 4],
   autoHeight: true,
   pagination: false,
   navigation: false,
   responsiveRefreshRate: 100,
   afterInit: function(g) {
    g.find(".owl-item").eq(0).addClass("synced")
   }
  });

  function f(g) {
   var h = this.currentItem;
   e(".fullwidth-slideshow-pager").find(".owl-item").removeClass("synced").eq(h).addClass("synced");
   if (e(".fullwidth-slideshow-pager").data("owlCarousel") !== undefined) {
    a(h)
   }
  }
  e(".fullwidth-slideshow-pager").on("click", ".owl-item", function(h) {
   h.preventDefault();
   var g = e(this).data("owlItem");
   c.trigger("owl.goTo", g)
  });

  function a(j) {
   var l = b.data("owlCarousel").owl.visibleItems;
   var g = j;
   var k = false;
   for (var h in l) {
    if (g === l[h]) {
     var k = true
    }
   }
   if (k === false) {
    if (g > l[l.length - 1]) {
     b.trigger("owl.goTo", g - l.length + 2)
    } else {
     if (g - 1 === -1) {
      g = 0
     }
     b.trigger("owl.goTo", g)
    }
   } else {
    if (g === l[l.length - 1]) {
     b.trigger("owl.goTo", l[1])
    } else {
     if (g === l[0]) {
      b.trigger("owl.goTo", g - 1)
     }
    }
   }
  }
  var d = e(".fullwidth-slideshow").data("owlCarousel");
  if (d) {
   e(document.documentElement).keyup(function(g) {
    if (g.keyCode == 37) {
     d.prev()
    } else {
     if (g.keyCode == 39) {
      d.next()
     }
    }
   })
  }
  e(document.documentElement).keyup(function(g) {
   if (g.keyCode == 37) {
    d.prev()
   } else {
    if (g.keyCode == 39) {
     d.next()
    }
   }
  });
  if (e(".owl-carousel").length) {
   var d = e(".owl-carousel").data("owlCarousel");
   d.reinit()
  }
 })(jQuery)
}
var fm_menu_wrap = $("#fullscreen-menu");
var fm_menu_button = $(".fm-button");

function init_fullscreen_menu() {
 fm_menu_button.click(function() {
  if ($(this).hasClass("animation-process")) {
   return false
  } else {
   if ($(this).hasClass("active")) {
    $(this).removeClass("active").css("z-index", "2001").addClass("animation-process");
    fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function() {
     fm_menu_wrap.fadeOut(function() {
      fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
      fm_menu_button.css("z-index", "1030").removeClass("animation-process")
     })
    });
    if ($(".owl-carousel").lenth) {
     $(".owl-carousel").data("owlCarousel").play()
    }
   } else {
    if ($(".owl-carousel").lenth) {
     $(".owl-carousel").data("owlCarousel").stop()
    }
    $(this).addClass("active").css("z-index", "2001").addClass("animation-process");
    fm_menu_wrap.fadeIn(function() {
     fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
     fm_menu_button.removeClass("animation-process")
    })
   }
   return false
  }
 });
 $("#fullscreen-menu").find("a:not(.fm-has-sub)").click(function() {
  if (fm_menu_button.hasClass("animation-process")) {
   return false
  } else {
   fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");
   fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function() {
    fm_menu_wrap.fadeOut(function() {
     fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
     fm_menu_button.css("z-index", "1030").removeClass("animation-process")
    })
   });
   if ($(".owl-carousel").lenth) {
    $(".owl-carousel").data("owlCarousel").play()
   }
  }
 });
 var b = $(".fm-has-sub");
 var a;
 b.click(function() {
  a = $(this).parent("li:first");
  if (a.hasClass("js-opened")) {
   a.find(".fm-sub:first").slideUp(function() {
    a.removeClass("js-opened");
    a.find(".fm-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
   })
  } else {
   $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
   a.addClass("js-opened");
   a.find(".fm-sub:first").slideDown()
  }
  return false
 })
}
var side_panel = $(".side-panel");
var sp_button = $(".sp-button");
var sp_close_button = $(".sp-close-button");
var sp_overlay = $(".sp-overlay");

function sp_panel_close() {
 side_panel.animate({
  opacity: 0,
  left: -270
 }, 500, "easeOutExpo");
 sp_overlay.fadeOut();
 if ($(".owl-carousel").lenth) {
  $(".owl-carousel").data("owlCarousel").play()
 }
}

function init_side_panel() {
 (function(b) {
  sp_button.click(function() {
   side_panel.animate({
    opacity: 1,
    left: 0
   }, 500, "easeOutExpo");
   setTimeout(function() {
    sp_overlay.fadeIn()
   }, 100);
   if (b(".owl-carousel").lenth) {
    b(".owl-carousel").data("owlCarousel").stop()
   }
   return false
  });
  sp_close_button.click(function() {
   sp_panel_close();
   return false
  });
  sp_overlay.click(function() {
   sp_panel_close();
   return false
  });
  b("#side-panel-menu").find("a:not(.sp-has-sub)").click(function() {
   if (!(b(window).width() >= 1199)) {
    sp_panel_close()
   }
  });
  var a = b(".sp-has-sub");
  var c;
  a.click(function() {
   c = b(this).parent("li:first");
   if (c.hasClass("js-opened")) {
    c.find(".sp-sub:first").slideUp(function() {
     c.removeClass("js-opened");
     c.find(".sp-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
    })
   } else {
    b(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
    c.addClass("js-opened");
    c.find(".sp-sub:first").slideDown()
   }
   return false
  })
 })(jQuery)
}

function init_side_panel_resize() {
 (function(a) {
  if (a(window).width() >= 1199) {
   side_panel.css({
    opacity: 1,
    left: 0
   });
   a(".side-panel-is-left").css("margin-left", "270px");
   sp_button.css("display", "none");
   sp_close_button.css("display", "none")
  } else {
   side_panel.css({
    opacity: 0,
    left: -270
   });
   a(".side-panel-is-left").css("margin-left", "0");
   sp_button.css("display", "block");
   sp_close_button.css("display", "block")
  }
 })(jQuery)
}

/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */

// Projects filtering
var fselector = 0;
var work_grid = $("#work-grid, #isotope");

function initWorkFilter() {
 (function($) {
  "use strict";
  var isotope_mode;
  if (work_grid.hasClass("masonry")) {
   isotope_mode = "masonry";
  } else {
   isotope_mode = "fitRows"
  }

  $(".filter").click(function() {
   $(".filter").removeClass("active");
   $(this).addClass("active");
   fselector = $(this).attr('data-filter');

   work_grid.imagesLoaded(function() {
    work_grid.isotope({
     itemSelector: '.mix',
     layoutMode: isotope_mode,
     filter: fselector
    });
   });
   return false;
  });

  if (window.location.hash) {
   $(".filter").each(function() {
    if ($(this).attr("data-filter") == "." + window.location.hash.replace("#", "")) {
     $(this).trigger('click');

     $("html, body").animate({
      scrollTop: $("#portfolio").offset().top
     });

    }
   });
  }

  work_grid.imagesLoaded(function() {
   work_grid.isotope({
    itemSelector: '.mix',
    layoutMode: isotope_mode,
    filter: fselector
   });
  });


 })(jQuery);
}

function js_height_init() {
 (function(a) {
  a(".js-height-full").height(a(window).height());
  a(".js-height-parent").each(function() {
   a(this).height(a(this).parent().first().height())
  })
 })(jQuery)
}
var gmMapDiv = $("#map-canvas");

function init_map() {
 (function(c) {
  c(".map-section").click(function() {
   c(this).toggleClass("js-active");
   c(this).find(".mt-open").toggle();
   c(this).find(".mt-close").toggle()
  });
  if (gmMapDiv.length) {
   var a = gmMapDiv.attr("data-address");
   var b = gmMapDiv.attr("data-address");
   gmMapDiv.gmap3({
    action: "init",
    marker: {
     address: b,
     options: {
      icon: "images/map-marker.png"
     }
    },
    map: {
     options: {
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
       style: google.maps.ZoomControlStyle.SMALL
      },
      zoomControlOptions: {
       position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      draggable: true,
      styles: [{
       featureType: "water",
       elementType: "geometry.fill",
       stylers: [{
        color: "#d3d3d3"
       }]
      }, {
       featureType: "transit",
       stylers: [{
        color: "#808080"
       }, {
        visibility: "off"
       }]
      }, {
       featureType: "road.highway",
       elementType: "geometry.stroke",
       stylers: [{
        visibility: "on"
       }, {
        color: "#b3b3b3"
       }]
      }, {
       featureType: "road.highway",
       elementType: "geometry.fill",
       stylers: [{
        color: "#ffffff"
       }]
      }, {
       featureType: "road.local",
       elementType: "geometry.fill",
       stylers: [{
        visibility: "on"
       }, {
        color: "#ffffff"
       }, {
        weight: 1.8
       }]
      }, {
       featureType: "road.local",
       elementType: "geometry.stroke",
       stylers: [{
        color: "#d7d7d7"
       }]
      }, {
       featureType: "poi",
       elementType: "geometry.fill",
       stylers: [{
        visibility: "on"
       }, {
        color: "#ebebeb"
       }]
      }, {
       featureType: "administrative",
       elementType: "geometry",
       stylers: [{
        color: "#a7a7a7"
       }]
      }, {
       featureType: "road.arterial",
       elementType: "geometry.fill",
       stylers: [{
        color: "#ffffff"
       }]
      }, {
       featureType: "road.arterial",
       elementType: "geometry.fill",
       stylers: [{
        color: "#ffffff"
       }]
      }, {
       featureType: "landscape",
       elementType: "geometry.fill",
       stylers: [{
        visibility: "on"
       }, {
        color: "#efefef"
       }]
      }, {
       featureType: "road",
       elementType: "labels.text.fill",
       stylers: [{
        color: "#696969"
       }]
      }, {
       featureType: "administrative",
       elementType: "labels.text.fill",
       stylers: [{
        visibility: "on"
       }, {
        color: "#737373"
       }]
      }, {
       featureType: "poi",
       elementType: "labels.icon",
       stylers: [{
        visibility: "off"
       }]
      }, {
       featureType: "poi",
       elementType: "labels",
       stylers: [{
        visibility: "off"
       }]
      }, {
       featureType: "road.arterial",
       elementType: "geometry.stroke",
       stylers: [{
        color: "#d6d6d6"
       }]
      }, {
       featureType: "road",
       elementType: "labels.icon",
       stylers: [{
        visibility: "off"
       }]
      }, {}, {
       featureType: "poi",
       elementType: "geometry.fill",
       stylers: [{
        color: "#dadada"
       }]
      }]
     }
    }
   })
  }
 })(jQuery)
}

function init_wow() {
 (function(b) {
  var a = new WOW({
   boxClass: "wow",
   animateClass: "animated",
   offset: 90,
   mobile: false,
   live: true
  });
  if (b("body").hasClass("appear-animate")) {
   a.init()
  }
 })(jQuery)
}

function split_height_init() {
 (function(a) {
  a(".ssh-table, .split-section-content").css("height", "auto");
  if (a(window).width() > 992) {
   a(".split-section").each(function() {
    var b = a(this).find(".split-section-content").innerHeight();
    a(this).find(".ssh-table").height(b)
   })
  }
 })(jQuery)
}
$(".size-1").click(function() {
 $("#value").html("100.000 VND")
});
$(".size-2").click(function() {
 $("#value").html("200.000 VND")
});
$(".size-3").click(function() {
 $("#value").html("300.000 VND")
});
$("div.dropdown.mega-dropdown a").on("click", function(a) {
 $(this).parent().toggleClass("open")
});
$("body").on("click", function(a) {
 if (!$("div.dropdown.mega-dropdown").is(a.target) && $("div.dropdown.mega-dropdown").has(a.target).length === 0 && $(".open").has(a.target).length === 0) {
  $("div.dropdown.mega-dropdown").removeClass("open")
 }
});
$("[data-toggle='tooltip']").tooltip();
$(".show-sl-dl").on("click", function() {
 $("#block-sl-dl").addClass("show")
});
$(document).ready(function() {
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
   $(".toTopButton").addClass("toTopButton--active")
  } else {
   $(".toTopButton").removeClass("toTopButton--active")
  }
 });
 $(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
   $(".popup-buy-deal").addClass("popup-buy-deal--active")
  } else {
   $(".popup-buy-deal").removeClass("popup-buy-deal--active")
  }
 });
 $(".dimiss-pop").on("click", function() {
  $(".popup-buy-deal").addClass("popup-disable")
 });
 $(".custom-select").each(function() {
  var b = $(this).attr("class"),
   d = $(this).attr("id"),
   a = $(this).attr("name");
  var c = '<div class="' + b + '">';
  c += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + "</span>";
  c += '<div class="custom-options">';
  $(this).find("option").each(function() {
   c += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + "</span>"
  });
  c += "</div></div>";
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(c)
 });
 $(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover")
 }, function() {
  $(this).parents(".custom-options").removeClass("option-hover")
 });
 $(".custom-select-trigger").click(function(a) {
  $("html").one("click", function() {
   $(".custom-select").removeClass("opened")
  });
  $(this).parents(".custom-select").toggleClass("opened");
  a.stopPropagation()
 });
 $(".custom-option").click(function(a) {
  a.stopPropagation();
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text())
 })
});
var searchMapRendered = true;
$(".show-map").addClass("invisible");
$(".show-map").css("height", "0");
$(".section-title").on("click", ".view-type", function(b) {
 b.preventDefault();
 $(".view-type").removeClass("enable");
 $(this).addClass("enable");
 var a = $(this).attr("data-view-type");
 $(".show-grid").attr("data-view-type", a);
 switch (a) {
  case "grid":
   $(".show-grid").show();
   $(".show-map").css("height", "0");
   $(".show-map").removeClass("visible");
   $(".show-map").addClass("invisible");
   break;
  case "map":
   $(".show-grid").hide();
   $(".show-map").css("height", "600");
   $(".show-map").removeClass("invisible");
   $(".show-map").addClass("visible");
   break
 }
});

//Readmore Plugin
$('div[data-readmore]').each(function() {
  var open_text = $(this).data('open-text');
  open_text = typeof open_text !== 'undefined' ? open_text : 'Read More';
  $(this).after('<a data-readmore-toggle class="view-more-cmt red-1" href="#">' + open_text + '</a>');
});

$('[data-readmore-toggle]').click(function(e) {
  e.preventDefault();

  var open_text = $(this).siblings('div[data-readmore]').data('open-text');
  var close_text = $(this).siblings('div[data-readmore]').data('close-text');
  $(this).parent().find( "div.content-msg" ).toggleClass('show-all');

  if(typeof open_text == 'undefined') {open_text = "Read More"}
  if(typeof close_text == 'undefined') {close_text = "Read Less"}

  if($(this).text() == open_text) {
    // $(this).html(close_text).next('div[data-readmore]').show().after(this);
    $(this).html(close_text);
  } else {
    // $(this).html(open_text).prev('div[data-readmore]').hide().before(this);
    $(this).html(open_text);
  }
});
