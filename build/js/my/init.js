$(document).ready(function() {
	$("body").scrollspy({target: "#menu", offset:130});
	var owlMain = $('[data-item="slider-main"]');
	
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		dots:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
	});
	
	$('a.smooth').click(function(e){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 38
		}, 1000);
		console.log(e.offsetX +'x'+ e.offsetY);
		return false;
	});
	
	
	$('#call2').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget); // Button that triggered the modal
		var recipient = button.data('product'); // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		modal.find('.product-name').text(recipient);
	});
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call2').modal('hide');
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
	
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
	var scroll_r = $(this).scrollTop();
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
	
	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [51.685317, 39.1942046],
			zoom: 12,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([51.655317, 39.1942046], {
				hintContent: [
				'ул. Станкевича, 36, Воронеж'
			].join(''),
				balloonContentBody: [
				''
			].join('')
			}, {
				// iconLayout: 'default#image',
				// iconImageHref: 'assets/img/pick-map.png',
				// iconImageSize: [59, 87],
				// iconImageOffset: [-32, -87]
			});
		myMap.geoObjects.add(myPlacemark);
	}
});


function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call2').modal('hide');
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
