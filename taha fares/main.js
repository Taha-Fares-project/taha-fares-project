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
pasta.feedMe("<span>STEP 1</span>.Heat the oil in a large frying pan over medium heat. Add the onion and cook, uncovered, stirring often, for 3 minutes or until it softens slightly. Add the garlic and cook, stirring, for 1 minute or until aromatic.")
pasta.feedMe("<span>STEP 2</span>.Stir in the tomatoes and tomato paste. Increase heat to high and bring to the boil. Reduce heat to medium and simmer, uncovered, stirring often, for 6-7 minutes or until the sauce reduces and thickens slightly")
pasta.feedMe("<span>STEP 3</span>.Stir in the parsley and sugar. Taste and season with salt and pepper.")
pasta.feedMe("<span>STEP 4</span>.Meanwhile, cook the pasta in a large saucepan of salted boiling water following packet directions or until al dente. Drain and return to the pan.")
pasta.feedMe("STEP 5.Add the sauce to the pasta and toss to combine. Serve immediately.")


//cheeseburger

var cheeseburger = MakeFood("CHEESE BURGER");
cheeseburger.addIngredients("cheese")
cheeseburger.addIngredients("basilic")
cheeseburger.addIngredients("onion")
cheeseburger.addIngredients("garlic")
cheeseburger.addIngredients("Bread")

cheeseburger.feedMe("<span>STEP 1</span> .Place the ground beef in a bowl.")
cheeseburger.feedMe("<span>STEP 2</span> .Roughly chop the onion and garlic. Put them in a bowl and mix them together until combined.Add any of the ingredients you're wanting to be a part of the burger – the Worcestershire sauce, ketchup, mustard, and the chopped herbs.")
cheeseburger.feedMe("<span>STEP 3</span> .Add the egg yolk. Season with salt and pepper and mix everything together.")
cheeseburger.feedMe("<span>STEP 4</span> .Mix it all together. It is easier to start mixing with a spoon; then use your clean hands to thoroughly combine the ingredients.")
cheeseburger.feedMe("<span>STEP 5</span> .Create the burgers. Handle the meat as little as possible, so you don’t squeeze out the juices.")
cheeseburger.feedMe("<span>STEP 6</span> .Arrange the burgers on a plate. Cover them with plastic wrap or wax paper. Chill for 30 minutes to a few hours to make the burgers firmer and easier to cook. Burger meat is best cooked cold..")
cheeseburger.feedMe("<span>STEP 7</span> .Choose your cooking method. The homemade burgers can be cooked with a broiler or grill, fried in the skillet or frying pan, or barbecued. They can also be baked. The method used depends on what you have available and what you prefer by way of taste and texture. Whichever method you choose, after taking the patties out of the fridge, spritz them with a little cooking oil or brush them with some melted butter before cooking..")
cheeseburger.feedMe("<span>STEP 8</span> .Place the ketchup and mayonnaise on the table for diners to make their own choice.")
cheeseburger.feedMe("<span>STEP 9</span> .Cover each with the top half of its bun, and enjoy.")


//BROWNIE CAKE 

var browniecake = MakeFood("BROWNIE CAKE");
browniecake.addIngredients("chocolate")
browniecake.addIngredients("4 eggs")
browniecake.addIngredients("11/4 cup of water")
browniecake.addIngredients("1 cup vegetable oil")
browniecake.addIngredients("1 box fudge brownie mix")
browniecake.addIngredients("200gr flower")

browniecake.feedMe("<span>STEP 1</span> .Heat oven to 350°F. Prepare a bundt pan with bakers spray or use the butter/flour method.")
browniecake.feedMe("<span>STEP 2</span> .Combine first five ingredients in a large bowl and whisk for 2 minutes or until lumps are mostly gone.")
browniecake.feedMe("<span>STEP 3</span> .Pour batter into prepared bundt pan and bake for 50-55 minutes.")
browniecake.feedMe("<span>STEP 4</span> .When done baking, remove cake and allow to cool in pan for up to five minutes. Carefully turn cake out onto a cooling rack and cool for 30 minutes more.")

//PIZZA

var pizza = MakeFood("PIZZA");
pizza.addIngredients("1, 1/2 cups (355 ml) warm water (105°F-115°F)")
pizza.addIngredients("1, package (2 1/4 teaspoons) of active dry yeast")
pizza.addIngredients("2 tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven)")
pizza.addIngredients("2 teaspoons salt")
pizza.addIngredients("1 teaspoon sugar")

pizza.feedMe("<span>STEP 1</span> .Preheat pizza stone (or pizza pan or baking sheet): Place a pizza stone on a rack in the lower third of your oven. Preheat the oven to 475°F for at least 30 minutes, preferably an hour.")
pizza.feedMe("<span>STEP 2</span> .Divide the dough into two balls: Remove the plastic cover from the dough. Dust your hands with flour and push the dough down so it deflates a bit. Divide the dough in half.")
pizza.feedMe("<span>STEP 3</span> .Prepare your desired toppings. Note that you are not going to want to load up each pizza with a lot of toppings as the crust will end up not crisp that way.")
pizza.feedMe("<span>STEP 4</span> .Bake pizza one at a time until the crust is browned and the cheese is golden, about 10-15 minutes. If you want, toward the end of the cooking time you can sprinkle on a little more cheese.")

//BEEF STEAK
var beefsteak = MakeFood("BEEF STEAK")
beefsteak.addIngredients("2 pounds beef sirloin, cut into 2 inch strips")
beefsteak.addIngredients("garlic powder to taste")
beefsteak.addIngredients("2 large green bell peppers, roughly chopped")
beefsteak.addIngredients("1 (14.5 ounce) can stewed tomatoes, with liquid")
beefsteak.addIngredients("1 cube beef bouillon")
beefsteak.addIngredients("1 tablespoon cornstarch")

beefsteak.feedMe("<span>STEP 1</span> .Sprinkle strips of sirloin with garlic powder to taste. In a large skillet over medium heat, heat the vegetable oil and brown the seasoned beef strips. Transfer to a slow cooker.")
beefsteak.feedMe("<span>STEP 2</span> .Mix bouillon cube with hot water until dissolved, then mix in cornstarch until dissolved. Pour into the slow cooker with meat. Stir in onion, green peppers, stewed tomatoes, soy sauce, sugar, and salt.")
beefsteak.feedMe("<span>STEP 3</span> .Cover, and cook on High for 3 to 4 hours, or on Low for 6 to 8 hours.")

//OJJA WITH EGGS
var ojjawitheggs = MakeFood("OJJA WITH EGGS")
ojjawitheggs.addIngredients("2 Green peppers cut to medium rectangles or circles")
ojjawitheggs.addIngredients("4 Eggs")
ojjawitheggs.addIngredients("4 Big fresh tomatoes")
ojjawitheggs.addIngredients("Half a cup or a full cup of chosen meat (or none)")
ojjawitheggs.addIngredients("Salt (by the end, as preferred)")
ojjawitheggs.addIngredients("1 cube of chicken broth powder (equals one cup of liquid broth)")

ojjawitheggs.feedMe("<span>STEP 1</span> .Heat your oil well")
ojjawitheggs.feedMe("<span>STEP 2</span> .Mix until you get a nice smell of the homogeneous sauce.")
ojjawitheggs.feedMe("<span>STEP 3</span> .Now add the eggs and just cover them")
ojjawitheggs.feedMe("<span>STEP 4</span> .Top with finely shopped onion and parsley and serve!")

// white pasta whith cheese
	var whitePasta = MakeFood("WHITE PASTA")
whitePasta.addIngredients("water")
whitePasta.addIngredients("large pot")
whitePasta.addIngredients("pasta")
whitePasta.addIngredients("salt")
whitePasta.addIngredients("tongs")
whitePasta.addIngredients("colander")

whitePasta.feedMe("<span>STEP 1</span> .Boil water in a large pot")
whitePasta.feedMe("<span>STEP 2</span> .Salt the water with at least a tablespoon—more is fine.")
whitePasta.feedMe("<span>STEP 3</span> .Add pasta")
whitePasta.feedMe("<span>STEP 4</span> .Stir the pasta")
whitePasta.feedMe("<span>STEP 5</span> .Test the pasta by tasting it")
whitePasta.feedMe("<span>STEP 6</span> .Drain the pasta")

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


chicken.feedMe("<span>STEP 1</span> .In a large shallow dish, combine 2-2/3 cups flour, 2 tablespoons garlic salt, 1 tablespoon paprika, 2-1/2 teaspoons pepper and 2-1/2 teaspoons poultry seasoning. In another shallow dish, beat eggs and 1-1/2 cups water; add 1 teaspoon salt and the remaining 1-1/3 cup flour and 1/2 teaspoon pepper. Dip chicken in egg mixture, then place in the flour mixture, a few pieces at a time. Turn to coat.")
chicken.feedMe("<span>STEP 2</span> .In a deep-fat fryer, heat oil to 375°. Working in batches, fry chicken, several pieces at a time, until golden brown and a thermometer inserted into chicken reads 165°, about 7-8 minutes on each side. Drain on paper towels.")

//white rice
	var whiteRice = MakeFood("WHITE RICE")
whiteRice.addIngredients("1 cup long-grain white rice")
whiteRice.addIngredients("1/2 teaspoon salt")


whiteRice.feedMe("<span>STEP 1</span> .Bring 1 1/2 cups water to a boil in a medium saucepan. Stir in rice and salt and return to a boil over medium-high heat.")
whiteRice.feedMe("<span>STEP 2</span> .Reduce heat to a simmer, cover, and cook until rice is tender and has absorbed all the liquid, 16 to 18 minutes (check only toward the end of cooking time). The rice should be studded with craters, or steam holes, when it is ready.")
whiteRice.feedMe("<span>STEP 3</span> .Remove from heat and let steam, covered, for 10 minutes. Then fluff with a fork and serve.")

//mehshe
	var mehshe = MakeFood("MEHSHE")
mehshe.addIngredients("8 small lamb chops or shoulder chops or lamb bones (less is fine)")
mehshe.addIngredients("2 lbs zucchinis `if giant, cut in half, just don’t core all the way, leave room for the rice to expand")
mehshe.addIngredients("1/4lb ground beef (or lamb or a combo or beef and lamb)")
mehshe.addIngredients("1 cup medium-grain rice (such as sushi, caltrose, Egyptian, Italian, Turkish)")
mehshe.addIngredients("1/2 tsp black pepper or white pepper or paprika")
mehshe.addIngredients("1 Tbsp. tomato paste or pomegranate molasses + a dash of sugar")


mehshe.feedMe("<span>STEP 1</span> .Season and fry the lamb chops or bones in the pot itself, about 3 minutes on each side. Set the pot aside and focus on the stuffing for the zucchinis and grape leaves. Place all the stuffing ingredients in a bowl, adding tomato paste, spices, a dash of sugar, if desired and mixing the stuffing briefly. Now, focus your attention on assembling the dish, starting with the zucchinis or grape leaves. When stuffing the zucchinis, if they are extra long, cut in half and leave 1/2 ” in order to allow for the rice to expand..")
mehshe.feedMe("<span>STEP 2</span> .Core the zucchini (there are special extra-long corers available at all `Middle-Eastern stores), fill them with one or two tablespoon of stuffing; place the stuffed zucchinis at the bottom of the pot over the chops or lamb bones; this is done in order to protect them from bruising while cooking . When the zucchinis have been used us, start stuffing the grape leaves, placing one tablespoon in the middle of each leaf (see pic) and folding each leaf gently. Place each stuffed leaf on top of a stuffed zucchini going around the pot until all has been filled. .")
mehshe.feedMe("<span>STEP 3</span> .Place a small dessert plate on the pot to hold the stuffed veggies in place; mix the olive oil, lemon juice and water and pour over the pot and bring to a gentle simmer. Cover the pot and let it simmer for 45 minutes or so. Uncover and check to make sure the stuffing is fully cooked. Cool and serve warm or lukewarm with a bowl of yogurt on the side..")

//mansaf
var mansaf = MakeFood("MANSAF")

mansaf.addIngredients("Four pieces of lean lamb, 200 grams each")
mansaf.addIngredients("One medium sized roughly chopped onion")
mansaf.addIngredients("350 grams of jameed (dry yoghurt). 500 grams of labaneh or plain Greek style yoghurt can be used instead. If you are using the jameed then soak it in warm water the day before. This will soften it and make it easier to blend")
mansaf.addIngredients("400 grams of small grain rice")
mansaf.addIngredients("Clarified butter")
mansaf.addIngredients("3 bay leaves, 5 full cardamoms, ½ tea spoon of cumin powder, and a small pinch of saffron – too much saffron will give a strong flavour to the dish, but a very small pinch will give the rice a beautiful yellow colour!")
mansaf.addIngredients("½ cup of whole blanched almonds")
mansaf.addIngredients("½ cup of pine nuts")
mansaf.addIngredients("4 loaves of Jordanian style pitta bread (khubz)")
mansaf.addIngredients("Salt and paper")


mansaf.feedMe("<span>STEP 1</span>.Heat 2 tablespoons of clarified butter in a heavy skillet over medium-high heat.")
mansaf.feedMe("<span>STEP 2</span>.Place the lamb into the skillet, add the chopped onion and cook for about 5-10 minutes until brown.")
mansaf.feedMe("<span>STEP 3</span>.Add the bay leaves, cardamom, cumin, 1 tablespoon of salt and 1 ½ teaspoons of black grounded paper. Cover it with boiling water and let it simmer for 1 ½ hours.")
mansaf.feedMe("<span>STEP 4</span>.While the lamb is cooking, place the jameed and half the water that it has been soaked in (or the yoghurt substitute) into a food blender.Add ¼ of cup of cold water and blend until it’s smooth, then slowly add it to the lamb while it’s cooking and keep stirring. This is very important to keep the consistency of the sauce thick and smooth.")
mansaf.feedMe("<span>STEP 5</span>.You can stop stirring when the whole mix starts bubbling. Cover it and let it simmer for another 10 minutes.Next, wash the rice and soak it for 10 minutes in warm water. Soak the saffron in a little bit of water for as long as possible until the water turns a yellow-orange colour.Place the rice into a pot and cook for the time suggested on the packet.Remove the saffron and add the water that it has been soaked in, along with 2 tablespoons of clarified butter, salt and paper.In a small skillet, melt 2 tablespoons of clarified butter. Add almonds and cook for 5 minutes. Stir in pine nuts and cook for a further 3 minutes. Remove from the heat and set aside.Split the khubz loaves open and arrange, overlapping on a large serving tray. Add ½ cup of the yoghurt sauce to the khubz to soften.Arrange the rice over the khubz leaving a hole in the centre of the rice. Spoon the meat into the rice and then spoon the butter and nuts over the meat.Sprinkle with fresh parsley. Pour the sauce into a big serving bowl. Add sauce onto the rice and the meat then enjoy with your friends or family.")

//kunafa 
var kunafa = MakeFood("KUNAFA")

kunafa.addIngredients("1 lb konafa pastry dough (can be found in most middle eastern, arab or greek grocery stores or markets)")
kunafa.addIngredients("1⁄2 lb butter, melted")
kunafa.addIngredients("1 1⁄2cups granulated sugar")
kunafa.addIngredients("1 cup water")
kunafa.addIngredients("1⁄2 lemon, juice of")
kunafa.addIngredients("1⁄2 teaspoon rose water or 1/2 teaspoon vanilla extract")
kunafa.addIngredients("1⁄4 cup blanched whole almond")
kunafa.addIngredients("1⁄2 cup golden raisin")
kunafa.addIngredients("2 cups walnuts, coarsely chopped (or 2 1/2 cups pistachios and omit raisins)")
kunafa.addIngredients("1⁄2 tablespoons granulated sugar")
kunafa.addIngredients("2 teaspoons ground cinnamon")
kunafa.addIngredients("1 lb soft ricotta cheese (this is an alternative filling, if using ricotta omit the nuts, raisins, cinnamon and the 2 1/2 tbsp)")


kunafa.feedMe("<span>STEP 1</span>. In a heavy bottomed saucepan over medium-high heat, add water, the 1 1/2 cups sugar and lemon juice. Stir to combine. Bring to a boil. Let simmer to a syrupy consistency. Remove from heat, let cool and add rosewater or vanilla.")
kunafa.feedMe("<span>STEP 2</span>.Preheat oven to 350 degrees F/180 degrees Celsius Butter a 12-inch round, 2-inch high cake pan..")
kunafa.feedMe("<span>STEP 3</span>.In a large bowl gently loosen kataifi. Mix very well with the 1/2 pound of melted butter. Place blanched almonds in a decorative pattern in the cake pan. Cover with half of the kataifi. Press down lightly..")
kunafa.feedMe("<span>STEP 4</span>. If using the ricotta cheese, spread in an even layer over kataifi, then cover with the remaining half of the kataifi. Press down gently.")
kunafa.feedMe("<span>STEP 5</span>.If using the raisins and walnuts sprinkle an even layer over kataifi. Sprinkle with cinnamon and sugar. Cover with the remainig half of the kataifi. Press down gently.")
kunafa.feedMe("<span>STEP 6</span>.Bake until lightly golden, about 30 to 45 minutes. (Note: the reverse side will be more golden when you turn it out.).")
kunafa.feedMe("<span>STEP 7</span>.Immediately pour cold sugar syrup evenly over the hot kunafa. Let cool completely to room temperature. Invert onto serving plate.")
kunafa.feedMe("<span>STEP 8</span>.If using the ricotta cheese, kunafa should be served warm or hot. It may be difficult to invert with the ricotta filling so cut and serve from pan")

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
	$("#b10").click(function(){
		$("#d1").show()
		$("#title").html(mehshe.name)
		$("#ingredient").html(mehshe.ingredient.join("<br>"))
		$("#step").html(mehshe.steps)
	})
	$("#b11").click(function(){
		$("#d1").show()
		$("#title").html(mansaf.name)
		$("#ingredient").html(mansaf.ingredient.join("<br>"))
		$("#step").html(mansaf.steps)
	})
	$("#b12").click(function(){
		$("#d1").show()
		$("#title").html(kunafa.name)
		$("#ingredient").html(kunafa.ingredient.join("<br>"))
		$("#step").html(kunafa.steps)
	})

	$("#close").click(function(){
			$("#d1").css("display", "none")
		})





})