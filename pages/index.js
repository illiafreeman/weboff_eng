
	
	/*scroll to top*/
	var scrollTop = $(".scrollTop");
	$(window).scroll(function() {
		var topPos = $(this).scrollTop();
		if (topPos > 500) {
			$(scrollTop).addClass('vis');
		} else {
			$(scrollTop).removeClass('vis');
		}
	});
	$(scrollTop).click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	/*end scroll to top*/

	
	$( window ).on( "load", function() {
		$('.marquee').simplemarquee({
			speed: 100,
			cycles: 'Infinity', 
			delayBetweenCycles: 0, 
			handleHover: false
		});

		if($(window).width() > 1023){
			new WOW().init();
		}

		// $('.string').liMarquee({
		// 	hoverStop: false
		// });

		
	
		// $('.string').marquee({
		// 	duplicated: true
		// });

		
		
	});
	$('#slick').slick({     
        slidesToShow: 2,
        dots: true,
        arrows: true,
        centerMode: false,
        variableWidth: false,
        infinite: true,
        focusOnSelect: false,

        responsive: [
            {
            breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    infinite: true,
                    //focusOnSelect: true,
					//adaptiveHeight: true,
				}
            }                  
        ]
    });
	$('#slick2').slick({     
        slidesToShow: 3,
        dots: false,
        arrows: true,
        centerMode: false,
        variableWidth: false,
        infinite: true,
        focusOnSelect: false,
        adaptiveHeight: true,
		slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
					slidesToScroll: 1
					//centerMode: true,
                }
            },
			{
			breakpoint: 488,
                settings: {
                    slidesToShow: 1,
					slidesToScroll: 1
					//centerMode: true,
                }
            },
        ]
    });
function modal() {
	$('body').addClass('oh');
	$('.modal-bg').addClass('vis');
	$('.modal-wrap').addClass('vis');
}
$('h1').click(modal);

$('.modal-wrap').on('click', function (e) {
	$('body').removeClass('oh');
	$('.modal-bg').removeClass('vis');
	$('.modal').removeClass('vis');

});
$("#phone").mask("+7 (999) 999-99-99");
