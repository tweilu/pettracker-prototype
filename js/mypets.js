$(document).ready(function() {

	$("#addpet-btn").click(function(e) {
		e.preventDefault();
		var theform = '<div id="addpet-form"><div class="pet-pic-upload"><img class="img-circle" src="" /><form id="form1" runat="server"><img id="addpet-img" class="img-circle" src="http://placehold.it/100&text=upload+image" alt="your image" /><input type="file" id="addpet-img-input" /></form></div><form class="form-inline" role="form"><div class="form-group"><input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name"></div><div class="form-group"><select class="form-control input-sm"><option disabled selected>Pet Type</option><option>Dog</option><option>Cat</option><option>Bird</option><option>Rodent</option><option>Reptile</option><option>Other</option></select></div><br /><textarea class="form-control pet-description" rows="3" placeholder="General Description"></textarea><br /><br /><button type="submit" class="btn btn-default" id="savepet-btn">Save</button></form></div>'
		$("#addpet-btn").css({'display':'none'});
		$("#mypets-container").append(theform);
		$("#addpet-img-input").change(function(){
		    readURL(this);
		});
		$("#savepet-btn").click(function(e) {
			e.preventDefault();
			var petinfo = '<a href="maximus.html"><div class="my-pet-entry"><div class="checkbox pull-left"><label><input type="checkbox"></label></div><img class="pull-left my-pet-pic img-circle" src="img/chloe.jpg" /><h2>Chloe<br /><small>Dog - No Sitter</small></h2></div></a>';
			$("#mypets-container").append(petinfo);
			$("#addpet-btn").css({'display':'inline'});
			$("#addpet-form").remove();
		});
	});

	

	/*
			<div id="addpet-form">
                <div class="pet-pic-upload">
                    <img class="img-circle" src="" />
                    <form id="form1" runat="server">
                      <img id="addpet-img" class="img-circle" src="http://placehold.it/100&text=upload+image" alt="your image" />
                      <input type="file" id="addpet-img-input" />
                    </form>
                  </div>
                <form class="form-inline" role="form" action="maximus.html">
                  <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name">
                  </div>
                  <div class="form-group">
                    <select class="form-control input-sm">
                      <option disabled selected>Pet Type</option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Rodent</option>
                      <option>Reptile</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <br />
                  <textarea class="form-control pet-description" rows="3" placeholder="General Description"></textarea>
                  <br /><br />
                  
                  <button type="submit" class="btn btn-default" id="savepet-btn">Save</button>
                </form>
              </div>
	*/


	var readURL = function(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#addpet-img').attr('src', e.target.result);
	        }

	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$("#addpet-img-input").change(function(){
	    readURL(this);
	});

});