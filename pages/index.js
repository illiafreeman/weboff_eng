//open-close burger menu
const introHeaderElement = document.querySelector('.intro__header');
const introSubHeaderElement = document.querySelector('.intro__subheader');
const introSubSubHeaderElement = document.querySelector('.intro__subsubheader');
const introBtn = document.querySelector('.intro__btn');
const introTextElement = document.querySelector('.intro__text');
const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__close-button');
const closeLink = document.querySelectorAll('.header__menu-list-link');
const menu = document.querySelector('.header__menu');

burgerButton.addEventListener('click', handleOpenMenu);
for (var i = 0; i < closeLink.length; i++) {
	closeLink[i].addEventListener("click", handleCloseMenu);
}
closeButton.addEventListener('click', handleCloseMenu);


function handleOpenMenu() {
	introHeaderElement.classList.add('intro__header_display-none');
	introSubHeaderElement.classList.add('intro__subheader_display-none');
	introSubSubHeaderElement.classList.add('intro__subsubheader_display-none');
	introBtn.classList.add('intro__btn_display-none');
	introTextElement.classList.add('intro__text_display-none');
	burgerButton.classList.add('header__burger_invisible');
	closeButton.classList.add('header__close-button_visible');
	menu.classList.add('header__menu_visible');
}

function handleCloseMenu() {
	introHeaderElement.classList.remove('intro__header_display-none');
	introSubHeaderElement.classList.remove('intro__subheader_display-none');
	introSubSubHeaderElement.classList.remove('intro__subsubheader_display-none');
	introBtn.classList.remove('intro__btn_display-none');
	introTextElement.classList.remove('intro__text_display-none');
	burgerButton.classList.remove('header__burger_invisible');
	closeButton.classList.remove('header__close-button_visible');
	menu.classList.remove('header__menu_visible');
}

/*scroll to top*/
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
	var topPos = $(this).scrollTop();
	if (topPos > 500) {
		$(scrollTop).addClass('vis');
	} else {
		$(scrollTop).removeClass('vis');
	}
});
$(scrollTop).click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});
/*end scroll to top*/


$(window).on("load", function () {
	$('.marquee').simplemarquee({
		speed: 100,
		cycles: 'Infinity',
		delayBetweenCycles: 0,
		handleHover: false
	});

	if ($(window).width() > 1023) {
		new WOW().init();
	}

	// $('.string').liMarquee({
	// 	hoverStop: false
	// });



	// $('.string').marquee({
	// 	duplicated: true
	// });



});
$('#pro').slick({
	slidesToShow: 3,
	dots: false,
	arrows: true,
	centerMode: false,
	variableWidth: false,
	infinite: true,
	focusOnSelect: false,
	prevArrow: `<button class="slick-prev" aria-label="Previous" type="button">
		<svg>
			<use xlink:href="./images/sprite.svg#icon-ar"></use>
		</svg>
			</button>`,
	nextArrow: `<button class="slick-next" aria-label="Next" type="button">
				<svg>
					<use xlink:href="./images/sprite.svg#icon-ar"></use>
				</svg>
			</button>`,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
				centerMode: true,
				infinite: true,
				//focusOnSelect: true,
				//adaptiveHeight: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				arrows: false,
			}
		},
	]
});
$('#slick').slick({
	slidesToShow: 2,
	dots: true,
	arrows: true,
	centerMode: false,
	variableWidth: false,
	infinite: true,
	focusOnSelect: false,
	prevArrow: `<button class="slick-prev" aria-label="Previous" type="button">
		<svg>
			<use xlink:href="./images/sprite.svg#icon-ar"></use>
		</svg>
			</button>`,
	nextArrow: `<button class="slick-next" aria-label="Next" type="button">
				<svg>
					<use xlink:href="./images/sprite.svg#icon-ar"></use>
				</svg>
			</button>`,
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
	prevArrow: `<button class="slick-prev" aria-label="Previous" type="button">
		<svg>
			<use xlink:href="./images/sprite.svg#icon-ar"></use>
		</svg>
			</button>`,
	nextArrow: `<button class="slick-next" aria-label="Next" type="button">
				<svg>
					<use xlink:href="./images/sprite.svg#icon-ar"></use>
				</svg>
			</button>`,
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
	$('.modal[data-attr="modal_form"]').addClass('vis');
}
$('.modal_btn').click(modal);

$('.modal').on('click', function (e) {
	e.stopPropagation();
});

$('.modal-wrap, .modal__close').on('click', function (e) {
	$('body').removeClass('oh');
	$('.modal-bg').removeClass('vis');
	$('.modal-wrap').removeClass('vis');
	$('.modal').removeClass('vis');
});
$('.cookie__close, .cookie__body .btn').on('click', function (e) {
	$('.cookie').addClass('unvis');
});
$('.send_btn').on('click', function (e) {
	//$('.modal[data-attr="modal_form"]').removeClass('vis');
	//$('.modal[data-attr="modal_confirm"]').addClass('vis');
});

$(document).click(function (event) {
	if (!$(event.target).closest(".modal").length) {
		//$("body").find(".modal-wrap").removeClass("vis");
	}
});

// $("#phone").mask("+7 (999) 999-99-99");

//form handle with ajax and php
let button = document.querySelector('.send_btn');
let formElement = document.querySelector('.modal__form_forlistener');
button.addEventListener('click', handleClick);
function handleClick() {
	let email = document.querySelector('#email').value;
	let phone = document.querySelector('#phone').value;
	let website = document.querySelector('#website').value;
	//let message = document.querySelector('#message').value;

	$.ajax({
		url: 'pages/sendmail.php',
		type: 'POST',
		cache: false,
		data: { 'website': website, 'email': email, 'phone': phone }, //'message': message},
		beforeSend: function () {
			button.setAttribute('disabled', true);
		},
		success: function () {
			button.removeAttribute('disabled');
			var isFormValid = true;
			$(".input_req").each(function () {
				if ($.trim($(this).val()).length == 0) {
					$(this).addClass("error");
					isFormValid = false;
					//alert('qwe');
				}
				else {
					$(this).removeClass("error");
				}
			});

			//if (!isFormValid) alert("Please fill in the fields");
			if (isFormValid) {
				$('.modal[data-attr="modal_confirm"]').addClass('vis');
				$('.modal[data-attr="modal_form"]').removeClass('vis');
				formElement.reset();
			}
			return isFormValid;
		},
		error: function () {
			button.removeAttribute('disabled');
			formElement.reset();
			alert('Sorry, something went wrong...');
		}
	});
}


// $(".send_btn").click(function(){
//     var isFormValid = true;
//     $(".input").each(function(){
//         if ($.trim($(this).val()).length == 0){
//             $(this).addClass("error");
//             isFormValid = false;
// 			//alert('qwe');
//         }
//         else{
//             $(this).removeClass("error");
//         }
//     });

//     //if (!isFormValid) alert("Please fill in the fields");
// 	if(isFormValid){
// 		$('.modal[data-attr="modal_confirm"]').addClass('vis');
// 		$('.modal[data-attr="modal_form"]').removeClass('vis');
// 	}
//     return isFormValid;
// });
