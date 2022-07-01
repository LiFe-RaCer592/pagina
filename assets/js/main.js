$(function () {
	$('.section-1').find('.relative').animate({ left: '250px' });
	$('.arrow').click(function (e) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
	$('.slide').hover(
		function () {
			// over
			$(this).addClass('scale');
			$(this).find('.text').removeClass('d-none');
			$(this).find('h5').removeClass('d-none');
		},
		function () {
			// out
			$(this).removeClass('scale');
			$(this).find('.text').addClass('d-none');
			$(this).find('h5').addClass('d-none');
		}
	);
	$('.slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.sec5prev'),
		nextArrow: $('.sec5next'),
		arrows: true,
		responsive: [
			{
				breakpoint: 780,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					autoplay: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				},
			},
		],
	});
	$('.cards').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.sec7prev'),
		nextArrow: $('.sec7next'),
		responsive: [
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				},
			},
		],
	});
	$('.section-11 .slider1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		accessibility: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				},
			},
		],
	});
	$('.section-11 .slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,

		// prevArrow: $('.prev'),
		// nextArrow: $('.next'),
	});
});
