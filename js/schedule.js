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
	    height:200
    });

	$('#play-icon').draggable({containment: 'parent'});
});