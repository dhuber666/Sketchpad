

$("document").ready(function(){

	

    buildBox();
	
    

	$( ".box" ).hover(function() {
    	$( this ).addClass( "hover" );
  	});
  

	

});






function buildBox() {

    for(i = 0; i < 256; i++){

		$(".board").append("<div class='box'></div>");

		

	}
};

