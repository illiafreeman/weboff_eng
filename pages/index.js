//form handle with ajax and php
let button = document.querySelector('.form__send-button');
let formElement = document.querySelector('.form__container-inputs');
button.addEventListener('click', handleClick);
function handleClick() {
	let name = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let phone = document.querySelector('#phone').value;
	let message = document.querySelector('#message').value;

	$.ajax({
		url: 'pages/sendmail.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
		beforeSend: function () {
			button.setAttribute('disabled', true);
		},
		success: function () {
			button.removeAttribute('disabled');
			formElement.reset()
			openSubmitPopup(true);
		},
		error: function () {
			button.removeAttribute('disabled');
			formElement.reset()
			openSubmitPopup(false);
		}
	});
}

//open-close burger menu
const introHeaderElement = document.querySelector('.intro__header');
const introTextElement = document.querySelector('.intro__text');
const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__close-button');
const menu = document.querySelector('.header__menu');

burgerButton.addEventListener('click', handleOpenMenu);
closeButton.addEventListener('click', handleCloseMenu);

function handleOpenMenu() {
	introHeaderElement.classList.add('intro__header_display-none');
	introTextElement.classList.add('intro__text_display-none');
	burgerButton.classList.add('header__burger_invisible');
	closeButton.classList.add('header__close-button_visible');
	menu.classList.add('header__menu_visible');
}

function handleCloseMenu() {
	introHeaderElement.classList.remove('intro__header_display-none');
	introTextElement.classList.remove('intro__text_display-none');
	burgerButton.classList.remove('header__burger_invisible');
	closeButton.classList.remove('header__close-button_visible');
	menu.classList.remove('header__menu_visible');
}

// functions for open and close any popup
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
}

//open-close popup - special offer
const runningLineElement = document.querySelector('.running-line');
const specialOfferElement = document.querySelector('.special-offer');

const popupElementOffer = document.querySelector('.popup_type_offer');
const closeButtonPopupOffer = popupElementOffer.querySelector('.popup__close-icon');
const getButtonPopupOffer = popupElementOffer.querySelector('.popup__get-button');

//runningLineElement.addEventListener('click', () => openPopup(popupElementOffer));
closeButtonPopupOffer.addEventListener('click', () => closePopup(popupElementOffer));
//specialOfferElement.addEventListener('click', () => openPopup(popupElementOffer));
getButtonPopupOffer.addEventListener('click', () => closePopup(popupElementOffer));

//const myTimeout = setTimeout(() => openPopup(popupElementOffer), 30000);




//close popup - form submit
function openSubmitPopup(bool) {
	const popupElementFormSubmit = document.querySelector('.popup_type_form-submit');
	const popupElementTitleSubmit = popupElementFormSubmit.querySelector('.popup__title_type_submit');
	const popupElementTextSubmit = popupElementFormSubmit.querySelector('.popup__text_type_submit');
	if (bool) {
		popupElementTitleSubmit.textContent = "Заявка отправлена!";
	} else {
		popupElementTitleSubmit.textContent = "Что-то пошло не так!";
		popupElementTextSubmit.textContent = "Пожалуйста свяжитесь с нами по адресу info@web-off.ru";
	}
	openPopup(popupElementFormSubmit);
	const closeButtonPopupFormSubmit = popupElementFormSubmit.querySelector('.popup__close-icon');
	closeButtonPopupFormSubmit.addEventListener('click', () => closePopup(popupElementFormSubmit));
}

//button.addEventListener('mouseup', openSubmitPopup);


	
	
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