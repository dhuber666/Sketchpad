$("document").ready(function(){

	

    buildBox();
	
    $("div > .box").hover(function() {


		$(this).fadeIn(500);
	});
	

});




function buildBox() {

    for(i = 0; i < 256; i++){

		$(".board").append("<div class='box'></div>");

		

	}
};

