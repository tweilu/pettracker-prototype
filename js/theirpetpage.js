$(document).ready(function() {

	var eventdate = '';

	$('#calendar').fullCalendar({
        // put your options and callbacks here
        events: [
	        {
	            title  : 'Vet',
	            start  : '2014-04-25'
	        },
	        {
	            title  : 'Playdate',
	            start  : '2014-04-14'
	        }
	    ],

	    eventClick: function(calEvent, jsEvent, view) {

	    	$('#event-info').css({'display':'inline', 'position':'absolute', 'left':jsEvent.pageX-90, 'top':jsEvent.pageY});
	    	$('#event-info-content').html('<p>'+calEvent.title+'</p>');

	    }
    });

	$('#close-event-info').click(function(e) {
		e.preventDefault();
		$('#event-info').css({'display':'none'});
		$('#event-info-content').html('');
	});

	$('#play-icon').draggable({containment: 'parent'});
});