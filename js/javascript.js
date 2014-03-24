

$(document).ready(function() {		
		$(".menu1, .menu2, .menu3, .menu4, .menu5, .menu6").click(function(e) {

			if($(e.target).closest('span').length){
				var paikka = $(this);
			paikka.find("ol").slideToggle("slow", function() {
				
			});
			paikka.find(".miinus2").toggleClass("rotatemiinus");
			}else{};
	});
	
});

$(document).ready(function() {
	$(".menu1, .menu2, .menu3, .menu4, .menu5, .menu6").mouseenter(function() {
		$(this).find("span").addClass("a-color-white");
	});
	$(".menu1, .menu2, .menu3, .menu4, .menu5, .menu6").mouseleave(function() {
		$(this).find("span").removeClass("a-color-white");
	});

});
