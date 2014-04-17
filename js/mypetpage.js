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
	    dayClick: function(date, allDay, jsEvent, view) {

	    	$('#add-event').css({'display':'inline', 'position':'absolute', 'left':jsEvent.pageX-140, 'top':jsEvent.pageY});
	    	eventdate = date;

	    },

	    eventClick: function(calEvent, jsEvent, view) {

	    	$('#event-info').css({'display':'inline', 'position':'absolute', 'left':jsEvent.pageX-40, 'top':jsEvent.pageY});
	    	$('#event-info-content').html('<p>'+calEvent.title+'</p>');

	    }
    });

	$('#add-event-btn').click(function(e) {
		e.preventDefault();
		if ($('#add-event-field').val() != '') {
			$('#calendar').fullCalendar('renderEvent', {title:$('#add-event-field').val(), start:eventdate});
			$('#add-event').css({'display':'none'});
			$('#add-event-field').val('');
		}
	});

	$('#close-event-info').click(function(e) {
		e.preventDefault();
		$('#event-info').css({'display':'none'});
		$('#event-info-content').html('');
	});
	$('#cancel-event-btn').click(function(e) {
		e.preventDefault();
		$('#add-event').css({'display':'none'});
		$('#add-event-field').val('');
	});

	$('#play-icon').draggable({containment: 'parent'});
});