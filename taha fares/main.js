function MakeFood(name) {
	var obj = {};
	obj.name = name;
	obj.ingredient = [];
	obj.steps="";
	obj.addIngredients = addIngredients;
	obj.feedMe=feedMe;
	return obj;
}
var addIngredients = function(str) {
	this.ingredient.push(str);
}
var feedMe = function(str){
	this.steps+= str +"<br>"
}
var pasta = MakeFood("Pasta with tomatos")
pasta.addIngredients("tomatos")
pasta.addIngredients("cheese")
pasta.addIngredients("basilic")
pasta.addIngredients("onion")
pasta.addIngredients("garlic")
pasta.feedMe("STEP 1.Heat the oil in a large frying pan over medium heat. Add the onion and cook, uncovered, stirring often, for 3 minutes or until it softens slightly. Add the garlic and cook, stirring, for 1 minute or until aromatic.")
pasta.feedMe("STEP 2.Stir in the tomatoes and tomato paste. Increase heat to high and bring to the boil. Reduce heat to medium and simmer, uncovered, stirring often, for 6-7 minutes or until the sauce reduces and thickens slightly")
pasta.feedMe("STEP 3.Stir in the parsley and sugar. Taste and season with salt and pepper.")
pasta.feedMe("STEP 4.Meanwhile, cook the pasta in a large saucepan of salted boiling water following packet directions or until al dente. Drain and return to the pan.")
pasta.feedMe("STEP 5.Add the sauce to the pasta and toss to combine. Serve immediately.")




$(function(){
	
	$("#b1").click(function(){
		$("#d1").show()
		$("#title").html(pasta.name)
		$("#ingredient").html("composition : " + pasta.ingredient)
		$("#step").html(pasta.steps)
	})
	

	$("#close").click(function(){
			$("#d1").css("display", "none")
		})






})