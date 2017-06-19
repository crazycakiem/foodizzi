/*
Author       : Syed Ekram.
Template Name: Titanic - App Landing Page
Version      : 1.0
*/

(function($) {
	'use strict';
	
	$(document).ready(function(){
	
		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a[href*=#]').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 		

		/* START SCREENSHOTS SLIDER JS*/
		$('.s-slider').owlCarousel({ 
			autoPlay: 4000, //Set AutoPlay to 4 seconds	 
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [979,3],
			itemsTablet : [768,2],
			itemsMobile	: [479,1],
			pagination	: true,
		});
		/* END START SCREENSHOTS SLIDER JS*/
		
		/*START TESTIMONIAL JS*/
		$('.carousel').carousel({
			interval:20000,
			pause:'false'
		});
		/*END TESTIMONIAL JS*/   
		
	}); 	

	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */		

})($);


  

