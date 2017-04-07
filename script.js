






$("document").ready(function(){

	
	$loopCount = 256;
    buildBox($loopCount);
	hoverFunc();
    $(".box").height(60);
	$(".box").width(60);
	$boardSize = $(".board").height();
	

	

});

function hoverFunc() {

	$( ".box" ).hover(function() {
			$( this ).addClass( "hover" );
		});
  

};




function buildBox(count) {

    for(i = 0; i < count; i++){

		$(".board").append("<div class='box'></div>");

		

	}
};

function removeBox() {

	$(".box").remove();
}

function changeSize() {

	$size = prompt("Change the size!");
	$divSize = $boardSize / $size;

	

	$loopCount = $size * $size;
	removeBox();
	
	buildBox($loopCount);

	console.log("Hi console");
	hoverFunc();
	$(".box").height($divSize);
	$(".box").width($divSize);




};

