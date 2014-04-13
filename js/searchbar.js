$(document).ready(function() {

	var sittersearchbarshow = true;

	$('#sitter-searchbar').css({'display':'none'});

	$("#show-sitter-search").click(function(e) {
		e.preventDefault();
		if (sittersearchbarshow) {
			$('#sitter-searchbar').css({'display':'inline'});
			$('.sidebar').css({'top':'261px'});
		} else {
			$('#sitter-searchbar').css({'display':'none'});
			$('.sidebar').css({'top':'191px'});
		}

		sittersearchbarshow = !sittersearchbarshow;
	});

});