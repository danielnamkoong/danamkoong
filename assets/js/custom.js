// Sticky Menu JS
$( document ).ready(function() {
	var win = $(window),
	    fixedElement = $('.navigation_Container'),
	    elementOffSet = fixedElement.offset().top;

	win.scroll(function() {
	    if (elementOffSet < win.scrollTop()) {
	        fixedElement.addClass("fixed");
	        $('body').css('padding-top', fixedElement.outerHeight()); 

	    } else {
	        fixedElement.removeClass("fixed");
	        document.body.style.paddingTop = 0;
	    }
	    if( win.width() < 768) {
	        fixedElement.removeClass("fixed");
	        document.body.style.paddingTop = 0;
	    }
	});
});

// STICKY HAM NAV 
$( document ).ready(function() {
	var ham = $('.hamburger_Wrapper');
	const distance = $('.hamburger_Wrapper').offset().top,
	$window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= distance ) {
	    	$('.hamburger_Wrapper').addClass('fixed');
	    	$('body').css('padding-top', ham.outerHeight());
	    } else {
	    	$('.hamburger_Wrapper').removeClass('fixed');
	    }
	    if ($window.width() > 768) {
	    	$('body').css('padding-top', 0);
	    	console.log('')
	    }
	});
});

// SMOOTH SCROLL
$( document ).ready(function() {
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	      scrollTop: ($($.attr(this, 'href')).offset().top-$(".navigation_Container").height())
	     }, 500);
	});
});	  

// HAMBURGER 
$( document ).ready(function() {
	const button = $('.button');
	const menu = $('.list_Container ');
	$(button).click(function(){
    	$(menu).toggleClass('expand');
	});
});


  // HOME SLIDER 
$( document ).ready(function() {
  $('.slider_Container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  	fade: true,
  	cssEase: 'linear',    
    arrows: false,
    autoplay: false,
    speed: 500 
  });
});
	
// COUNTER
$( document ).ready(function() {	 
	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 3000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
});

// NEWS
$( document ).ready(function() {
	$('.news_Box').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
  	  autoplay: false,
  	  speed: 300,
  	  dots: true
	});
});