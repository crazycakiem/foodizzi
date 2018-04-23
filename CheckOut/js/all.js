(function(d) {
 // d(window).load(function() {
 //  initWorkFilter();
 //  q();
 //  d(window).trigger("scroll");
 //  d(window).trigger("resize");
 //  if ((window.location.hash) && (d(window.location.hash).length)) {
 //   var u = d(window.location.hash).offset().top;
 //   d("html, body").animate({
 //    scrollTop: u
 //   })
 //  }
 // });
 // d(document).ready(function() {
 //  d(window).trigger("resize");
 //  e();
 //  init_fullscreen_menu();
 //  init_side_panel();
 //  o();
 //  h();
 //  g();
 //  r();
 //  initPageSliders();
 //  init_map();
 //  init_wow()
 // });
 // d(window).resize(function() {
 //  f();
 //  init_side_panel_resize();
 //  js_height_init();
 //  split_height_init()
 // });
 var c;
 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  c = true;
  d("html").addClass("mobile");
 } else {
  c = false;
  d("html").addClass("no-mobile");
 }
 var n;
 if (/mozilla/.test(navigator.userAgent)) {
  n = true;
 } else {
  n = false;
 }
 var b;
 if (/safari/.test(navigator.userAgent)) {
  b = true;
 } else {
  b = false;
 }
 if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch";
 }
 var j = d(".home-section, .page-section, .small-section, .split-section");
 j.each(function(u) {
  if (d(this).attr("data-background")) {
   d(this).css("background-image", "url(" + d(this).data("background") + ")");
  }
 });

 function g() {
  d(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
   placement: "bottom"
  });
  d(".tooltip-top, .tooltip-top a").tooltip({
   placement: "top"
  });
 }
})(jQuery);

// function js_height_init() {
//  (function(a) {
//   a(".js-height-full").height(a(window).height());
//   a(".js-height-parent").each(function() {
//    a(this).height(a(this).parent().first().height());
//   });
//  })(jQuery);
// }

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
   a.init();
  }
 })(jQuery);
}

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
