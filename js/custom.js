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



// First, we need to get reference to canvas element
var fullScreenCanvas = document.getElementById('canvas');

// Take a look at all possible options. You can change what you want right here, but we will skip it for now.
var DEFAULTS = {

	// dom canvas
	canvas: null,

	// settings
	particleCount: 100,
	flareCount: 100,
	motion: 0.05,
	particleColor: '#FDE8E1',
	flareColor: '#757575',
	linkColor: 'white',
	particleSizeBase: 1,
	particleSizeMultiplier: 0.5,
	flareSizeBase: 100,
	flareSizeMultiplier: 100,
	lineWidth: 2,
	linkChance: 100,         // chance per frame of link, higher: smaller chance
	linkLengthMin: 3,        // min linked vertices
	linkLengthMax: 5,        // max linked vertices
	linkOpacity: 0.3,        // number between 0 & 1
	linkFade: 28,            // link fade-out frames
	linkSpeed: 4,            // distance a link travels in 1 frame
	renderParticles: true,
	renderFlares: true,
	renderLinks: false,
	flicker: true,
	flickerSmoothing: 12,    // higher: smoother flicker
	randomMotion: true,
	noiseLength: 1000,
	noiseStrength: 4,
	pointsMultiplier: 1000   // multiplier for delaunay points, since floats too small can mess up the algorithm
};

// These MUST BE configured
DEFAULTS.canvas = fullScreenCanvas;

// This is optional, in case we want to see links in between
DEFAULTS.renderLinks = true;

// And to change big particles color
DEFAULTS.flareColor = 'white';

// We can pack our custom config into separate object. This is minimal implementation.
var config = {
	canvas: canvas
};

// And it will overwrite defaults. Note, DrifterStars2.init(DEFAULTS); will work as well
DrifterStars2.init(config);

// And there is special endpoint for two particular mutations
DrifterStars2.setEnableLinks(false);
DrifterStars2.setFlareColor('#ffffff26');

var offset = 80;

    $('.navbar li a').click(function(event) {
        event.preventDefault();
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    });
