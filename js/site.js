$(document).ready(function(){
	$('.section').waypoint({
		handler: function(t) {
			var id = ((t === "up") ? this.element.previousElementSibling.id : this.element.id).split('-')[1];
			
			$('#nav a').removeClass("active");
			$('#nav-' + id).addClass("active");
		},
		offset: "50%"
	});
	
	function goToSection(id){
		var offset = $('#section-' + id).offset().top - ($('#header').outerHeight(true));
		
		$('body,html').stop().animate({ 
			scrollTop: offset
		}, 1500, "easeInOutExpo", function(){
			$('#nav a').removeClass("active");
			$('#nav-' + id).addClass("active");
		});
	}
		
  $('#nav a').on("click", function(e){
		var id = $(this).attr("id").split('-');
		goToSection(id[1]);		
		e.preventDefault();
	});
	
	$('#header .logo').on("click", function(e){
		goToSection('home');
		e.preventDefault();
	});
	
	$("#countdown").countdown("2017/10/20", function(event) {
		var $this = $(this).html(event.strftime('' +
			'<span class="countdown-time"> %-D DAYS</span>'));
	});
});