$(function () {

	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
		effect: 'slide',
		speed: 2200,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	swiper.on('slideChangeTransitionStart', function () {

		anime({
			targets: '.banner-part img',
			scale: [1.2, 1],
			opacity: [0, 1],
			easing: 'easeInOutQuart'
		});
		anime({
			targets: '.banner-text .Text',
			translateY: [10, 30],
			opacity: [0, 1],
			delay: anime.stagger(100, {
				start: 500
			}),
			easing: 'easeInOutQuart'
		});

	});
	//
	//    anime({
	//        targets: '.nav-item',
	//        translateY: [50, 0],
	//        opacity: [0, 1],
	//        delay: anime.stagger(250, {
	//            start: 700
	//        }),
	//        easing: 'easeInOutQuart'
	//    });

	anime({
		targets: '.banner-text .Text',
		translateY: [10, 30],
		opacity: [0, 1],
		delay: anime.stagger(250, {
			start: 1500
		}),
		easing: 'easeInOutQuart'
	});

	anime({
		targets: '.banner-part img',
		scale: [1.2, 1],
		opacity: [0, 1],
		delay: anime.stagger(250, {
			start: 800,
			from: 'last'
		}),
		easing: 'easeInOutQuart'
	});

	anime({
		targets: '.swiper-button-prev , .swiper-button-next',
		translateY: [10, 30],
		opacity: [0, 1],
		delay: anime.stagger(350, {
			start: 3500,
			from: 'last'
		}),
		easing: 'easeInOutQuart'
	});
	//slide part
	$('.slide_img').slick({
		slidesToShow: 5,
		slidesToScroll: 2,
		nextArrow: '.left-arrow',
		prevArrow: '.right-arrow',
	});

	  $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

	
	//==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


});
