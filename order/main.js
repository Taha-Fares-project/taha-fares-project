var array=[]
var result = 0;
var i=0;
$(function(){
	
	$("#btn").click(function(){
		$("section").slideToggle()
	})
//
	$(".butt").click(function(){

		array.push($(this).attr("name"))
		result = 0+result + parseInt($(this).attr("name"));
		$("section h3").html("RESULT : "+result+" $")
		i+=1

		var deleted = "deleted"
		$("section").append($(this).html())
		$("section").append("<button id="+deleted+i+" style='background-color:#93291e; box-shadow:none;width:50px;height:20px;' class='deleted'>X</button>")
		$(".deleted").click(function(){
		$(this).prev().remove()
		$(this).remove()
	
		
	})

	})
	$("#deleteAll").click(function(){
		$("section h1").remove()
		$(".deleted").remove()
		result = 0;
		$("section h3").html("RESULT : "+result +" $")
	})
	
	
})

