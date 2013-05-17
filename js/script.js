$(document).ready(function() {
	
	$('.petal').mouseenter(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
		});
	});
	
});