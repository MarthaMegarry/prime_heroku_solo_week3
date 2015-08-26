$(document).ready(function() {
	$('.button').on('click', function() {
		$('.appear').slideDown();
		$(this).remove();
	} )

});