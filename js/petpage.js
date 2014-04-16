$(document).ready(function() {

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

	        if (allDay) {
	            alert('Clicked on the entire day: ' + date);
	        }else{
	            alert('Clicked on the slot: ' + date);
	        }

	        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

	        alert('Current view: ' + view.name);

	    },

	    eventClick: function(calEvent, jsEvent, view) {

	        alert('Event: ' + calEvent.title);
	        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
	        alert('View: ' + view.name);

	        // change the border color just for fun
	        $(this).css('border-color', 'red');

	    }
    });

	$('#play-icon').draggable({containment: 'parent'});
});