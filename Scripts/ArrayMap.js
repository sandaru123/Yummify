var cardItemslist1 = [
	{ owner: 'Shinen Bagayaro',Description:'Other than adding Chicken to this recipe I followed it as it was and omg !! what an amazing recipe. I served it for 4 people although it says serves 6. To be honest we would have found the portions too small had we had less',itemName: 'Chorizo & Mozzarella', itemDetail: 'Butter chicken curry or murg makhani, butter and cream sauce.', price: 55, imagesource: '../Images/burgers.jpg', rating: 4, favornot: 'fa fa-heart fa-lg',faviorite : 1 , cart:0},
	{ itemName: 'Italian panettone', itemDetail: 'Bake in the preheated oven for 15 minutes', price: '15$', imagesource: '../Images/desserts.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg',faviorite : 0 },
	{ itemName: 'Mayo deviled eggs', itemDetail: 'stirring halfway through the baking.', price: '11$', imagesource: '../Images/drinks.jpg', rating: 3, favornot: 'fa fa-heart fa-lg',faviorite : 1 },
	{ itemName: 'Rosemary Baked Olives', itemDetail: 'Butter chicken curry or murg makhani is a curry', price: '5$', imagesource: '../Images/indian.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	{ itemName: 'boeuf bourguignon', itemDetail: 'Beef brisket, red wine, small pearl onions, bacon, tomato paste', price: '150$', imagesource: '../Images/Boeuf-Bourguignon.jpg', rating: 5, favornot: 'fa fa-heart fa-lg',faviorite :1 },
	{ itemName: 'Sonic Cherry Limeade', itemDetail: 'Tangy and sweet limeade with your choice of some favorite', price: '20$', imagesource: '../Images/sonic-cherry-limeade-slush.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	{ itemName: 'Arbys Roast Beef Sandwich', itemDetail: 'Two ingredients, roast beef and a sesame seed bun,', price: '50$', imagesource: '../Images/arbys-classic-roast-beef.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	{ itemName: 'KFC Original Recipe Chicken', itemDetail: 'Secret 11 herbs and spices and for launching ', price: '500$', imagesource: '../Images/kfc-original-bucket-fried-chicken.jpg', rating: 1, favornot: 'fa fa-heart fa-lg',faviorite :1 },
//	{ itemName: 'Wendys Frosty', itemDetail: 'The Frosty is considered the signature dessert at Wendy,', price: '75$', imagesource: '../Images/wendys-frosty-1.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
//	{ itemName: 'MC Happy Meal', itemDetail: 'Small portions, packaging, collectible toys in One.', price: '90$', imagesource: '../Images/mcdonalds-happy-meal-toys.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	//{ itemName: 'Pumpkin Spice Latte', itemDetail: 'Starbucks Pumpkin Spice Latte. No other', price: '155$', imagesource: '../Images/Pumpkin-Spice-Latte.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	//{ itemName: 'Burrito Supreme', itemDetail: 'Taco Bell has crowned this burrito "The Supreme', price: '55$', imagesource: '../Images/taco-bell-burrito-supreme.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	//{ itemName: 'Dunkin Coffee', itemDetail: 'Forget the donuts! Rebranded as just Dunkin in 2018', price: '100$', imagesource: '../Images/dunkin-coffee-cup.jpg', rating: 3, favornot: 'fa fa-heart fa-lg',faviorite :1 },
	//{ itemName: 'Culvers ButterBurger', itemDetail: 'The fast-food chain has nicknamed it "The Original,"', price: '180$', imagesource: '../Images/bruger-cheddar-bites-shake-culvers-wisconsin.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	// { itemName: 'Pepperoni Pizza', itemDetail: 'pepperoni pizza is easily the most-delivered item on the menu', price: '250$', imagesource: '../Images/dominos-ultimate-pepperoni-pizza.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	// { itemName: 'Tortellini Alfredo', itemDetail: 'tortellini Alfredo the most popular pasta offering', price: '300$', imagesource: '../Images/panera-tortellini-alfredo-pasta.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	// { itemName: 'Kung Pao Chicken', itemDetail: 'This spicy stir-fry dish is a Panda Express classic', price: '100$', imagesource: '../Images/panda-express-kung-pao-chicken.jpg', rating: 2, favornot: 'fa fa-heart fa-lg',faviorite :1 },
	// { itemName: 'Egg McMuffin', itemDetail: ' bacon, egg, and cheese on an English muffin', price: '500$', imagesource: '../Images/mcdonalds-egg-mcmuffin-breakfast-burrito.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	// { itemName: 'Macchiato', itemDetail: 'This foamy espresso concoction now icen coconut milk mocha', price: '235$', imagesource: '../Images/starbucks-iced-coconut-milk-mocha-macchiato.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg',faviorite :0 },
	// { itemName: 'Munchkins', itemDetail: 'Who can resist Munchkins? Theyre tasty, cute, convenient', price: '450$', imagesource: '../Images/dunkin-donuts-munchkins.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg',faviorite :0 }
];

localStorage.setItem("cardsDetails_Local", JSON.stringify(cardItemslist1));

var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));



var total_price = 100;

localStorage.setItem("total_price_local", JSON.stringify(total_price));