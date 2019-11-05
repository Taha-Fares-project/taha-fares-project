$(function(){
	
	$("#btn").click(function(){
		$("section").slideToggle()
	})
//
	$(".butt").click(function(){
		$("section").append($(this).html())
		
	})
})