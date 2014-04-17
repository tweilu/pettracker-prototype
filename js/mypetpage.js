$(document).ready(function() {

	var eventdate = '';
	var eventtodelete = '';
	var event_id = 3;

	$('#calendar').fullCalendar({
        // put your options and callbacks here
        events: [
	        {
	            title  : 'Vet',
	            start  : '2014-04-25',
	            id     : 1
	        },
	        {
	            title  : 'Playdate',
	            start  : '2014-04-14',
	            id     : 2
	        }
	    ],
	    dayClick: function(date, allDay, jsEvent, view) {

	    	$('#add-event').css({'display':'inline', 'position':'absolute', 'left':jsEvent.pageX-140, 'top':jsEvent.pageY});
	    	eventdate = date;

	    },

	    eventClick: function(calEvent, jsEvent, view) {

	    	$('#event-info').css({'display':'inline', 'position':'absolute', 'left':jsEvent.pageX-90, 'top':jsEvent.pageY});
	    	$('#event-info-content').html('<p>'+calEvent.title+'</p>');
	    	eventtodelete = calEvent;

	    	console.log(eventtodelete);

	    }
    });

	$('#add-event-btn').click(function(e) {
		e.preventDefault();
		if ($('#add-event-field').val() != '') {
			$('#calendar').fullCalendar('renderEvent', {title:$('#add-event-field').val(), start:eventdate, id:event_id}, true);
			$('#add-event').css({'display':'none'});
			$('#add-event-field').val('');
			event_id += 1;
		}
	});

	$('#close-event-info').click(function(e) {
		e.preventDefault();
		$('#event-info').css({'display':'none'});
		$('#event-info-content').html('');
	});
	$('#delete-event-btn').click(function(e) {
		e.preventDefault();
		if(confirm('Delete event, '+eventtodelete.title+'?')) {
			$('#calendar').fullCalendar("removeEvents", eventtodelete.id);
			console.log(eventtodelete.id);
    		$('#calendar').fullCalendar("rerenderEvents");
    		$('#event-info').css({'display':'none'});
			$('#event-info-content').html('');
		}
	});
	$('#cancel-event-btn').click(function(e) {
		e.preventDefault();
		$('#add-event').css({'display':'none'});
		$('#add-event-field').val('');
	});

	$('#remove-sitter').click(function(e) {
		e.preventDefault();
		if(confirm('Remove sitter?')) {
			$('#petsitter-info').css({'display':'none'});
			$('#petsitter-form').css({'display':'inline'});
		}
	});
	$('#sitter-submit-btn').click(function(e) {
		e.preventDefault();
		$('#petsitter-info').css({'display':'inline'});
		$('#petsitter-form').css({'display':'none'});
		$('#sitter-email').val('');
	});

	$('#play-icon').draggable({containment: 'parent'});
});