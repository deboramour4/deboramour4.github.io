$(document).ready(function(){
	var html = $("html")
	var body = $("body")
	var header = $("header")
	var main = $("main")
	var footer = $("footer")

	//Adjusting main height
	main.height(html.height()-(header.height()+footer.height()+40))

	//Slider
	var slider = $("#slider")
	slider.slider({
		animate: "fast",
	});

	slider.on( "slidechange", function( event, ui ) {
		if (slider.slider( "option", "value" ) <= 32) {
			var val = slider.slider("option", "value")
			//Hide
			$('#book1').css("opacity", 1.0-(val/33)) 
			$('#p1b1').css("opacity", 1.0-(val/33))
			$('#p1b2').css("opacity", 1.0-(val/33))
			$('#p1b3').css("opacity", 1.0-(val/33))

			//Show
			$('#book2').css("opacity", (val/33))
			$('#p2b1').css("opacity", (val/33))
			$('#p2b2').css("opacity", (val/33))
			$('#p2b3').css("opacity", (val/33))
		} 
		else if (slider.slider( "option", "value" ) <= 65) {
			var val = slider.slider("option", "value")
			$('#book2').css("opacity", 1.0-((val-33)/33))
			$('#p2b1').css("opacity", 1.0-((val-33)/33))
			$('#p2b2').css("opacity", 1.0-((val-33)/33))
			$('#p2b3').css("opacity", 1.0-((val-33)/33))

			$('#book3').css("opacity", ((val-33)/33))
			$('#p3b1').css("opacity", ((val-33)/33))
			$('#p3b2').css("opacity", ((val-33)/33))
			$('#p3b3').css("opacity", ((val-33)/33))
		}
		 else if (slider.slider( "option", "value" ) <= 100) {
			var val = slider.slider("option", "value")
			$('#book3').css("opacity", 1.0-((val-66)/33))
			$('#p3b1').css("opacity", 1.0-((val-66)/33))
			$('#p3b2').css("opacity", 1.0-((val-66)/33))
			$('#p3b3').css("opacity", 1.0-((val-66)/33))

			$('#book4').css("opacity", ((val-66)/33))
			$('#p4b1').css("opacity", ((val-66)/33))
			$('#p4b2').css("opacity", ((val-66)/33))
			$('#p4b3').css("opacity", ((val-66)/33))
		}
	} );

	slider.on( "slide", function( event, ui ) {
		if (slider.slider( "option", "value" ) <= 32) {
			var val = slider.slider("option", "value")
			//Hide
			$('#book1').css("opacity", 1.0-(val/33)) 
			$('#p1b1').css("opacity", 1.0-(val/33))
			$('#p1b2').css("opacity", 1.0-(val/33))
			$('#p1b3').css("opacity", 1.0-(val/33))

			//Show
			$('#book2').css("opacity", (val/33))
			$('#p2b1').css("opacity", (val/33))
			$('#p2b2').css("opacity", (val/33))
			$('#p2b3').css("opacity", (val/33))
		} 
		else if (slider.slider( "option", "value" ) <= 65) {
			var val = slider.slider("option", "value")
			$('#book2').css("opacity", 1.0-((val-33)/33))
			$('#p2b1').css("opacity", 1.0-((val-33)/33))
			$('#p2b2').css("opacity", 1.0-((val-33)/33))
			$('#p2b3').css("opacity", 1.0-((val-33)/33))

			$('#book3').css("opacity", ((val-33)/33))
			$('#p3b1').css("opacity", ((val-33)/33))
			$('#p3b2').css("opacity", ((val-33)/33))
			$('#p3b3').css("opacity", ((val-33)/33))
		}
		 else if (slider.slider( "option", "value" ) <= 100) {
			var val = slider.slider("option", "value")
			$('#book3').css("opacity", 1.0-((val-66)/33))
			$('#p3b1').css("opacity", 1.0-((val-66)/33))
			$('#p3b2').css("opacity", 1.0-((val-66)/33))
			$('#p3b3').css("opacity", 1.0-((val-66)/33))

			$('#book4').css("opacity", ((val-66)/33))
			$('#p4b1').css("opacity", ((val-66)/33))
			$('#p4b2').css("opacity", ((val-66)/33))
			$('#p4b3').css("opacity", ((val-66)/33))
		}
	} );		
})
