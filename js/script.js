$(document).ready(function() {
	// petal hover functions
	$('.petal .a-1').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-1').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-2').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-2').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-3').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-3').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-4').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-4').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-5').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-5').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-6').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-6').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-7').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-7').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	$('.petal .a-8').hover(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('down');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('up');
	});
	$('.petal .a-8').mouseleave(function () {
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').removeClass('up');
		$(this).children('.button-blue, .button-yellow, .button-red, .button-green').addClass('down');
	});
	
	// key press functions
	//$(document).keypress("c",function(e) {
	  //if(e.ctrlKey)
	    //alert("Ctrl+C was pressed!!");
	//});
	$(document.documentElement).keyup(function (event) {
	  // handle cursor keys
	  if (event.keyCode == 37) {
	    // go left
	    alert('Left.');
	  } else if (event.keyCode == 39) {
	    // go right
	    alert('Right.');
	  } else if (event.keyCode == 40) {
	    // go right
	    alert('Down.');
	  } else if (event.keyCode == 38) {
	    // go right
	    alert('Up.');
	  }
	});
	
});