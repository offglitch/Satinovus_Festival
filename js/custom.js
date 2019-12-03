// Tickets Slider
 $(document).ready(function() {
	var slider = $("#nmEventsTicket").lightSlider({
		auto:true,
		loop:true,
		controls:true,
		addClass:'nm-slider-class',
		item:4,
		slideMove:1,
		speed: 2000,
		slideMargin:0,
		adaptiveHeight:true,
		pager:false,
		mode:"slide",
		rtl:false,
		keyPress:true,
		enableTouch:true,
		enableDrag:true,
		easing:'linear',
		slideEndAnimation: true,
		responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
	});  

});

// Events
 $(document).ready(function() {
	var slider = $("#postMidfeat").lightSlider({
		auto:false,
		loop:true,
		controls:false,
		addClass:'nm-light-slider',
		item:1,
		slideMove:1,
		speed: 1000,
		slideMargin:0,
		adaptiveHeight:true,
		pager:false,
		mode:"slide",
		rtl:false,
		keyPress:true,
		enableTouch:true,
		enableDrag:true,
		easing:'linear',
		slideEndAnimation: true
	});  
	
	$('#nxtMidPost').click(function(){
		slider.goToPrevSlide(); 
	});
	
	$('#prvMidPost').click(function(){
		slider.goToNextSlide(); 
	});

});

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Back to top
mybutton = document.getElementById("NmBak2Top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//Wow Js
new WOW().init();

// Parallax
jQuery(window).on('scroll', function () {

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var paralasicValue = $('.paralasic').attr('data-paralasic');
    $('.paralasic').css('background-position', 'center top -' + scrollTop * paralasicValue + 'px'); /* 1.8 - default value. Increase less to go stopping the effect */
  });

});
