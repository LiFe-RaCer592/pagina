$(function () {
	$('.section-5 .slide').hover(
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
	$('.section-5 .slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.sec5prev'),
		nextArrow: $('.sec5next'),
		arrows: true,
	});
	$('.cards').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.sec7prev'),
		nextArrow: $('.sec7next'),
	});
	$('.section-11 .slider1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		accessibility: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
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