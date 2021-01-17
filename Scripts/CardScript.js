// function to create the cards

var cardItemslist = [
	{ cardid: '0', itemName: 'Chorizo & Mozzarella', itemDetail: 'Butter chicken curry or murg makhani, butter and cream sauce.', price: '55$', imagesource: '../Images/burgers.jpg', rating: 4, favornot: 'fa fa-heart fa-lg', faviorite: 1, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '1', itemName: 'Italian panettone', itemDetail: 'Bake in the preheated oven for 15 minutes', price: '15$', imagesource: '../Images/desserts.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '2', itemName: 'Mayo deviled eggs', itemDetail: 'stirring halfway through the baking.', price: '11$', imagesource: '../Images/drinks.jpg', rating: 3, favornot: 'fa fa-heart fa-lg', faviorite: 1, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '3', itemName: 'Rosemary Baked Olives', itemDetail: 'Butter chicken curry or murg makhani is a curry', price: '5$', imagesource: '../Images/indian.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '4', itemName: 'boeuf bourguignon', itemDetail: 'Beef brisket, red wine, small pearl onions, bacon, tomato paste', price: '150$', imagesource: '../Images/Boeuf-Bourguignon.jpg', rating: 5, favornot: 'fa fa-heart fa-lg', faviorite: 1, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '5', itemName: 'Sonic Cherry Limeade', itemDetail: 'Tangy and sweet limeade with your choice of some favorite', price: '20$', imagesource: '../Images/sonic-cherry-limeade-slush.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '6', itemName: 'Arbys Roast Beef Sandwich', itemDetail: 'Two ingredients, roast beef and a sesame seed bun,', price: '50$', imagesource: '../Images/arbys-classic-roast-beef.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '7', itemName: 'KFC Original Recipe Chicken', itemDetail: 'Secret 11 herbs and spices and for launching ', price: '500$', imagesource: '../Images/kfc-original-bucket-fried-chicken.jpg', rating: 1, favornot: 'fa fa-heart fa-lg', faviorite: 1, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '8', itemName: 'Wendys Frosty', itemDetail: 'The Frosty is considered the signature dessert at Wendy,', price: '75$', imagesource: '../Images/wendys-frosty-1.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '9', itemName: 'MC Happy Meal', itemDetail: 'Small portions, packaging, collectible toys in One.', price: '90$', imagesource: '../Images/mcdonalds-happy-meal-toys.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '10', itemName: 'Pumpkin Spice Latte', itemDetail: 'Starbucks Pumpkin Spice Latte. No other', price: '155$', imagesource: '../Images/Pumpkin-Spice-Latte.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '11', itemName: 'Burrito Supreme', itemDetail: 'Taco Bell has crowned this burrito "The Supreme', price: '55$', imagesource: '../Images/taco-bell-burrito-supreme.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '12', itemName: 'Dunkin Coffee', itemDetail: 'Forget the donuts! Rebranded as just Dunkin in 2018', price: '100$', imagesource: '../Images/dunkin-coffee-cup.jpg', rating: 3, favornot: 'fa fa-heart fa-lg', faviorite: 1, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '13', itemName: 'Culvers ButterBurger', itemDetail: 'The fast-food chain has nicknamed it "The Original,"', price: '180$', imagesource: '../Images/bruger-cheddar-bites-shake-culvers-wisconsin.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '14', itemName: 'Pepperoni Pizza', itemDetail: 'pepperoni pizza is easily the most-delivered item on the menu', price: '250$', imagesource: '../Images/dominos-ultimate-pepperoni-pizza.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '15', itemName: 'Tortellini Alfredo', itemDetail: 'tortellini Alfredo the most popular pasta offering', price: '300$', imagesource: '../Images/panera-tortellini-alfredo-pasta.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '16', itemName: 'Kung Pao Chicken', itemDetail: 'This spicy stir-fry dish is a Panda Express classic', price: '100$', imagesource: '../Images/panda-express-kung-pao-chicken.jpg', rating: 2, favornot: 'fa fa-heart fa-lg', faviorite: 1, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '17', itemName: 'Egg McMuffin', itemDetail: ' bacon, egg, and cheese on an English muffin', price: '500$', imagesource: '../Images/mcdonalds-egg-mcmuffin-breakfast-burrito.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '18', itemName: 'Macchiato', itemDetail: 'This foamy espresso concoction now icen coconut milk mocha', price: '235$', imagesource: '../Images/starbucks-iced-coconut-milk-mocha-macchiato.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' },
	{ cardid: '19', itemName: 'Munchkins', itemDetail: 'Who can resist Munchkins? Theyre tasty, cute, convenient', price: '450$', imagesource: '../Images/dunkin-donuts-munchkins.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0, editmyitems: 'fa fa-pencil-square-o fa-lg', deleteitem: 'fa fa-trash fa-lg' }
];

var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));


function createCards(sortValue) {
	// declaring some variables
	var exampleBlockA = $('#exampleBlockA'), // cache the selector of the element, increases performance
		exampleBlockB = $('#exampleBlockB'), // cache the selector of the element, increases performance
		exampleBlockC = $('#exampleBlockC'), // cache the selector of the element, increases performance
		i,
		j = 1,

		// the cards, in this example in an array
		imagename = ["Image1", "Image2", "Image3", "Image4"],
		imagesource = ["Images/burgers.jpg", "./images/image2.jpg", "./images/image3.jpg", ".Images/promo\ 1.jpg"],
		itemName = ["Chorizo & Mozzarella", "Italian panettone", "Mayo deviled eggs", "Rosemary Baked Olives"],
		itemDetail = ["Butter chicken curry or murg makhani, butter and cream sauce.", "Butter chicken curry or murg makhani is a curry, butter.", "Bake in the preheated oven for 15 minutes", "stirring halfway through the baking."],
		titlecard = ["Image!", "Image!", "Image!", "Image!"],
		titleimage = ["Title", "Title", "Title", "Title"],
		text = ["Lorem ipsum part 1...", "Lorem ipsum part 2...", "Lorem ipsum part 3...", "Lorem ipsum part 3..."];




	if (sortValue == "Name") {
		cardItemslist.sort(function (a, b) {
			var a1 = a.itemName.toString(), b1 = b.itemName.toString();
			if (a1 == b1) return 0;
			return a1 > b1 ? 1 : -1;
		});
	} else if (sortValue == "Price") {
		cardItemslist.sort(function (a, b) {
			var a1 = a.price, b1 = b.price;
			if (a1 == b1) return 0;
			return a1 > b1 ? 1 : -1;
		});
	}



	// emptying the current grid
	exampleBlockA.empty();
	exampleBlockB.empty();
	exampleBlockC.empty();

	var tag = '';

	for (i = 0; i < cardItemslist.length; i++) {

		var icon1;
		var icon2;
		var pagename = document.location.href.match(/[^\/]+$/)[0]

		if (pagename == 'Products.html' || pagename == 'searchpage.html') {
			icon1 = cardItemslist[i].favornot;
		} else if (pagename == 'myproducts.html') {
			icon1 = cardItemslist[i].deleteitem;
		}

		if (pagename == 'Products.html' || pagename == 'searchpage.html') {
			icon2 = 'fa fa-shopping-cart fa-lg';
		} else if (pagename == 'myproducts.html') {
			icon2 = cardItemslist[i].editmyitems;
		}

		tag = '';
		tag += '<div class=" card maincardwidth" style="height: 200px;">';
		tag += '<div class="flexcolumn">';
		tag += '<div id="card' + (i + 1) + '" class="flexrow" style="height: 160px;">';
		tag += '<div style="width: 180px; height:160px;">';
		tag += '<img class="card-image cardimageedit" style="height: 140px;" alt="image" src="' + cardItemslist[i].imagesource + '" />';
		tag += '</div>';
		tag += '<div class=" flexcolumn" style="width: 200px;">';
		tag += '<div class="flexrow" style="height: auto;">';
		tag += '<div>';
		tag += '<p style="font-size: 15px; font-weight: bold;">' + cardItemslist[i].itemName + '</p>';
		tag += '</div>';
		tag += '<div>';
		tag += '<p style="font-size: 15px; font-weight: bold; color: #33D9B2;">' + cardItemslist[i].price + '</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div style="height: auto;" class="justify-content-end">';
		tag += '<p style="font-size: 13px; margin-top: -10px; color:black;">by Janice Cheddar</p>';
		tag += '<p style="font-size: 12px; margin-top: -18px; color:#6c6f71">' + cardItemslist[i].itemDetail + '</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div class="flexcolumn" style="height: 20px;">';
		tag += '<div>';
		tag += '<span class="fa fa-star starcoluryello"></span>';
		tag += '<span class="">' + cardItemslist[i].rating + '</span>';
		tag += '</div>';

		if (!pagename == 'myproducts.html') {

			tag += '<div style="position: absolute; margin-right: 10px; right: 0px; top: 160px;"> <i style="color: red;" onclick="inifavlocalhost(' + i + ')" class=" ' + icon1 + ' mr-1 p-1"></i> &nbsp <i class=" ' + icon2 + ' mr-1 p-1"></i> </div>';

		} else {
			tag += '<div style="position: absolute; margin-right: 10px; right: 0px; top: 160px;"> <i style="color: red;" onclick="inifavlocalhost(' + i + ')" class=" ' + icon1 + ' mr-1 p-1"></i> &nbsp <i class=" ' + icon2 + ' mr-1 p-1"></i> </div>';
		}

		tag += '</div>';
		tag += '</div>';
		tag += '</div>';

		//heart icon black border = fa fa-heart-o fa-lg
		//heart icon no border = fa fa-heart fa-lg

		/*	You will need to create cards in a special order.
			The first 1/3 of the cards are placed in block A.
			The second 1/3 of the cards are placed in block B.
			The last 1/3 of the cards are placed in block C.
			
			This will make sure that the cards will fill white spots
			when the screen is changing orientation and/or size.
			
			When you create new block for every card you would get
			an interface that is lined like a table.
		*/

		if (i < (cardItemslist.length / 3)) {
			exampleBlockA.append(tag);
		} else if (i < ((cardItemslist.length / 3) * 2)) {
			exampleBlockB.append(tag);
		} else if (i <= ((cardItemslist.length / 3) * 3)) {
			exampleBlockC.append(tag);
		}

		// add a press effect to the card
		pressEffectCard('card' + i);
	}
}

// press effect card ui
function pressEffectCard(x) {
	var id = $("#" + x); // cache the selector of the element, increases performance
	id.off('touchstart').on('touchstart', function () {
		id.addClass("holoPressEffectDiv");
	});
	id.off('touchend').on('touchend', function () {
		id.removeClass("holoPressEffectDiv");
	});
	id.off('touchmove').on('touchmove', function () {
		id.removeClass("holoPressEffectDiv"); // to remove the press effect when there is a scroll detected in stead of a tap
	});
}


$(".cash_payment").click(function () {
	$(".paymentDetails").hide();
	$(".paymentDetailsH").hide();
});

$(".debitCredit_payment").click(function () {
	$(".paymentDetails").show();
	$(".paymentDetailsH").show();
});

$("#placeOrder").click(function () {
	var points = $("#use_points").html();
	var payment_total = $("#payment_total").html();

	var reduced_total = parseInt(payment_total, 10) - parseInt(points, 10);
	$('#subtotal_payment_summary').html(reduced_total.toString());
	$("#summaryLink").click();
});

$(document).ready(function () {
	$("#selectDropdown").change(function () {
		//selection changedvar 
		selText = $("#selectDropdown option:selected").text();

		if (selText == "Sort By Name") {
			$("div .maincardwidth").remove();
			createCards("Name");

		} else if (selText == "Sort By Price") {
			$("div .maincardwidth").remove();
			createCards("Price");
		}
	});
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	var modal = document.getElementById("myModal");
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

$(".closebutton").on('click', function () {
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
})

$("#opendropwown").on('click', function () {
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
})