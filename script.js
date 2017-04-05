


$("document").ready(function(){

	


	for(i = 0; i < 16; i++){

		$(".board").append("<div class='box'> </div>");

		for(j = 0; j < 15; j++) {

			$(".board").append("<div class='box'> </div>");
		}

	}
	

	

});


$(".box").hover(function() {


		$(this).fadeIn(500);
	});