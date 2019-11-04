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

//pasta object
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


//cheeseburger

var cheeseburger = MakeFood("CHEESE BURGER");
cheeseburger.addIngredients("cheese")
cheeseburger.addIngredients("basilic")
cheeseburger.addIngredients("onion")
cheeseburger.addIngredients("garlic")
cheeseburger.addIngredients("Bread")

cheeseburger.feedMe("STEP 1 .Place the ground beef in a bowl.")
cheeseburger.feedMe("STEP 2 .Roughly chop the onion and garlic. Put them in a bowl and mix them together until combined.Add any of the ingredients you're wanting to be a part of the burger – the Worcestershire sauce, ketchup, mustard, and the chopped herbs.")
cheeseburger.feedMe("STEP 3 .Add the egg yolk. Season with salt and pepper and mix everything together.")
cheeseburger.feedMe("STEP 4 .Mix it all together. It is easier to start mixing with a spoon; then use your clean hands to thoroughly combine the ingredients.")
cheeseburger.feedMe("STEP 5 .Create the burgers. Handle the meat as little as possible, so you don’t squeeze out the juices.")
cheeseburger.feedMe("STEP 6 .Arrange the burgers on a plate. Cover them with plastic wrap or wax paper. Chill for 30 minutes to a few hours to make the burgers firmer and easier to cook. Burger meat is best cooked cold..")
cheeseburger.feedMe("STEP 7 .Choose your cooking method. The homemade burgers can be cooked with a broiler or grill, fried in the skillet or frying pan, or barbecued. They can also be baked. The method used depends on what you have available and what you prefer by way of taste and texture. Whichever method you choose, after taking the patties out of the fridge, spritz them with a little cooking oil or brush them with some melted butter before cooking..")
cheeseburger.feedMe("STEP 8 .Place the ketchup and mayonnaise on the table for diners to make their own choice.")
cheeseburger.feedMe("STEP 9 .Cover each with the top half of its bun, and enjoy.")


//BROWNIE CAKE 

var browniecake = MakeFood("BROWNIE CAKE");
browniecake.addIngredients("chocolate")
browniecake.addIngredients("4 eggs")
browniecake.addIngredients("11/4 cup of water")
browniecake.addIngredients("1 cup vegetable oil")
browniecake.addIngredients("1 box fudge brownie mix")
browniecake.addIngredients("200gr flower")

browniecake.feedMe("STEP 1 .Heat oven to 350°F. Prepare a bundt pan with bakers spray or use the butter/flour method.")
browniecake.feedMe("STEP 2 .Combine first five ingredients in a large bowl and whisk for 2 minutes or until lumps are mostly gone.")
browniecake.feedMe("STEP 3 .Pour batter into prepared bundt pan and bake for 50-55 minutes.")
browniecake.feedMe("STEP 4 .When done baking, remove cake and allow to cool in pan for up to five minutes. Carefully turn cake out onto a cooling rack and cool for 30 minutes more.")

//PIZZA

var pizza = MakeFood("PIZZA");
pizza.addIngredients("1, 1/2 cups (355 ml) warm water (105°F-115°F)")
pizza.addIngredients("1, package (2 1/4 teaspoons) of active dry yeast")
pizza.addIngredients("2 tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven)")
pizza.addIngredients("2 teaspoons salt")
pizza.addIngredients("1 teaspoon sugar")

pizza.feedMe("STEP 1 .Preheat pizza stone (or pizza pan or baking sheet): Place a pizza stone on a rack in the lower third of your oven. Preheat the oven to 475°F for at least 30 minutes, preferably an hour.")
pizza.feedMe("STEP 2 .Divide the dough into two balls: Remove the plastic cover from the dough. Dust your hands with flour and push the dough down so it deflates a bit. Divide the dough in half.")
pizza.feedMe("STEP 3 .Prepare your desired toppings. Note that you are not going to want to load up each pizza with a lot of toppings as the crust will end up not crisp that way.")
pizza.feedMe("STEP 4 .Bake pizza one at a time until the crust is browned and the cheese is golden, about 10-15 minutes. If you want, toward the end of the cooking time you can sprinkle on a little more cheese.")

//BEEF STEAK
var beefsteak = MakeFood("BEEF STEAK")
beefsteak.addIngredients("2 pounds beef sirloin, cut into 2 inch strips")
beefsteak.addIngredients("garlic powder to taste")
beefsteak.addIngredients("2 large green bell peppers, roughly chopped")
beefsteak.addIngredients("1 (14.5 ounce) can stewed tomatoes, with liquid")
beefsteak.addIngredients("1 cube beef bouillon")
beefsteak.addIngredients("1 tablespoon cornstarch")

beefsteak.feedMe("STEP 1 .Sprinkle strips of sirloin with garlic powder to taste. In a large skillet over medium heat, heat the vegetable oil and brown the seasoned beef strips. Transfer to a slow cooker.")
beefsteak.feedMe("STEP 2 .Mix bouillon cube with hot water until dissolved, then mix in cornstarch until dissolved. Pour into the slow cooker with meat. Stir in onion, green peppers, stewed tomatoes, soy sauce, sugar, and salt.")
beefsteak.feedMe("STEP 3 .Cover, and cook on High for 3 to 4 hours, or on Low for 6 to 8 hours.")

//OJJA WITH EGGS
var ojjawitheggs = MakeFood("OJJA WITH EGGS")
ojjawitheggs.addIngredients("2 Green peppers cut to medium rectangles or circles")
ojjawitheggs.addIngredients("4 Eggs")
ojjawitheggs.addIngredients("4 Big fresh tomatoes")
ojjawitheggs.addIngredients("Half a cup or a full cup of chosen meat (or none)")
ojjawitheggs.addIngredients("Salt (by the end, as preferred)")
ojjawitheggs.addIngredients("1 cube of chicken broth powder (equals one cup of liquid broth)")

ojjawitheggs.feedMe("STEP 1 .Heat your oil well")
ojjawitheggs.feedMe("STEP 2 .Mix until you get a nice smell of the homogeneous sauce.")
ojjawitheggs.feedMe("STEP 3 .Now add the eggs and just cover them")
ojjawitheggs.feedMe("STEP 4 .Top with finely shopped onion and parsley and serve!")

// white pasta whith cheese
	var whitePasta = MakeFood("WHITE PASTA")
whitePasta.addIngredients("water")
whitePasta.addIngredients("large pot")
whitePasta.addIngredients("pasta")
whitePasta.addIngredients("salt")
whitePasta.addIngredients("tongs")
whitePasta.addIngredients("colander")

whitePasta.feedMe("STEP 1 .Boil water in a large pot")
whitePasta.feedMe("STEP 2 .Salt the water with at least a tablespoon—more is fine.")
whitePasta.feedMe("STEP 3 .Add pasta")
whitePasta.feedMe("STEP 4 .Stir the pasta")
whitePasta.feedMe("STEP 5 .Test the pasta by tasting it")
whitePasta.feedMe("STEP 6 .Drain the pasta")

//chicken

	var chicken = MakeFood("FRIED CHICKEN")
chicken.addIngredients("4 cups all-purpose flour, divided")
chicken.addIngredients("2 tablespoons garlic salt")
chicken.addIngredients("1 tablespoon paprika")
chicken.addIngredients("3 teaspoons pepper, divided")
chicken.addIngredients("2-1/2 teaspoons poultry seasoning")
chicken.addIngredients("2 large eggs")
chicken.addIngredients("1-1/2 cups water")
chicken.addIngredients("1 teaspoon salt")
chicken.addIngredients("2 broiler/fryer chickens (3-1/2 to 4 pounds each), cut up")
chicken.addIngredients("Oil for deep-fat frying")


chicken.feedMe("STEP 1 .In a large shallow dish, combine 2-2/3 cups flour, 2 tablespoons garlic salt, 1 tablespoon paprika, 2-1/2 teaspoons pepper and 2-1/2 teaspoons poultry seasoning. In another shallow dish, beat eggs and 1-1/2 cups water; add 1 teaspoon salt and the remaining 1-1/3 cup flour and 1/2 teaspoon pepper. Dip chicken in egg mixture, then place in the flour mixture, a few pieces at a time. Turn to coat.")
chicken.feedMe("STEP 2 .In a deep-fat fryer, heat oil to 375°. Working in batches, fry chicken, several pieces at a time, until golden brown and a thermometer inserted into chicken reads 165°, about 7-8 minutes on each side. Drain on paper towels.")

//white rice
	var whiteRice = MakeFood("WHITE RICE")
whiteRice.addIngredients("1 cup long-grain white rice")
whiteRice.addIngredients("1/2 teaspoon salt")


whiteRice.feedMe("STEP 1 .Bring 1 1/2 cups water to a boil in a medium saucepan. Stir in rice and salt and return to a boil over medium-high heat.")
whiteRice.feedMe("STEP 2 .Reduce heat to a simmer, cover, and cook until rice is tender and has absorbed all the liquid, 16 to 18 minutes (check only toward the end of cooking time). The rice should be studded with craters, or steam holes, when it is ready.")
whiteRice.feedMe("STEP 3 .Remove from heat and let steam, covered, for 10 minutes. Then fluff with a fork and serve.")






$(function(){
	
	$("#b1").click(function(){
		$("#d1").show()
		$("#title").html(pasta.name)
		$("#ingredient").html(pasta.ingredient.join("<br>"))
		$("#step").html(pasta.steps)
	})
	

	$("#close").click(function(){
			$("#d1").css("display", "none")
		})
	$("#b2").click(function(){
		$("#d1").show()
		$("#title").html(cheeseburger.name)
		$("#ingredient").html(cheeseburger.ingredient.join("<br>"))
		$("#step").html(cheeseburger.steps)
	})
	$("#b3").click(function(){
		$("#d1").show()
		$("#title").html(browniecake.name)
		$("#ingredient").html(browniecake.ingredient.join("<br>"))
		$("#step").html(browniecake.steps)
	})
	$("#b4").click(function(){
		$("#d1").show()
		$("#title").html(pizza.name)
		$("#ingredient").html(pizza.ingredient.join("<br>"))
		$("#step").html(pizza.steps)
	})

	$("#b5").click(function(){
		$("#d1").show()
		$("#title").html(beefsteak.name)
		$("#ingredient").html(beefsteak.ingredient.join("<br>"))
		$("#step").html(beefsteak.steps)
	})

	$("#b6").click(function(){
		$("#d1").show()
		$("#title").html(ojjawitheggs.name)
		$("#ingredient").html(ojjawitheggs.ingredient.join("<br>"))
		$("#step").html(ojjawitheggs.steps)
	})
	$("#b7").click(function(){
		$("#d1").show()
		$("#title").html(whitePasta.name)
		$("#ingredient").html(whitePasta.ingredient.join("<br>"))
		$("#step").html(whitePasta.steps)
	})
	$("#b8").click(function(){
		$("#d1").show()
		$("#title").html(chicken.name)
		$("#ingredient").html(chicken.ingredient.join("<br>"))
		$("#step").html(chicken.steps)
	})
	$("#b9").click(function(){
		$("#d1").show()
		$("#title").html(whiteRice.name)
		$("#ingredient").html(whiteRice.ingredient.join("<br>"))
		$("#step").html(whiteRice.steps)
	})

	$("#close").click(function(){
			$("#d1").css("display", "none")
		})





})