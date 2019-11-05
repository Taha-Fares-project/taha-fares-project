var array=[]
var result = 0;
$(function(){
	
	$("#btn").click(function(){
		$("section").slideToggle()
	})
//
	$(".butt").click(function(){
		$("section").append($(this).html())
		array.push($(this).attr("name"))
		result = 0+result + parseInt($(this).attr("name"));
		$("section h3").html("RESULT : "+result)
	})
	$("#deleteAll").click(function(){
		$("section h1:last-child").remove()
		$("section h3").html("RESULT : "+result)
	})


})
