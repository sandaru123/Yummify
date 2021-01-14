// function to create the cards

var cardItemslist = [
	{ itemName: 'Chorizo & Mozzarella', itemDetail: 'Butter chicken curry or murg makhani, butter and cream sauce.', price: 55, imagesource:'Images/burgers.jpg',rating: 4, faviorite:1, cart:1 },
	{ itemName: 'Italian panettone', itemDetail: 'Bake in the preheated oven for 15 minutes', price: 15, imagesource:'Images/burgers.jpg',rating: 2 , faviorite:1, cart:0},
	{ itemName: 'Mayo deviled eggs', itemDetail: 'stirring halfway through the baking.', price: 11, imagesource:'Images/burgers.jpg',rating: 3, faviorite:1, cart:1 },
	{ itemName: 'Rosemary Baked Olives', itemDetail: 'Butter chicken curry or murg makhani is a curry', price: 5, imagesource:'Images/burgers.jpg',rating: 4 , faviorite:0, cart:1}
];


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


	var cardItemslist = [
		{ itemName: 'Chorizo & Mozzarella', itemDetail: 'Butter chicken curry or murg makhani, butter and cream sauce.', price: '55$', imagesource: '../Images/burgers.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg' },
		{ itemName: 'Italian panettone', itemDetail: 'Bake in the preheated oven for 15 minutes', price: '15$', imagesource: '../Images/desserts.jpg', rating: 2, favornot: 'fa fa-heart fa-lg' },
		{ itemName: 'Mayo deviled eggs', itemDetail: 'stirring halfway through the baking.', price: '11$', imagesource: '../Images/drinks.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg' },
		{ itemName: 'Rosemary Baked Olives', itemDetail: 'Butter chicken curry or murg makhani is a curry', price: '5$', imagesource: '../Images/indian.jpg', rating: 4, favornot: 'fa fa-heart fa-lg' }
	];

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
		tag = '';
		tag += '<div class=" card maincardwidth" style="height: 220px;">';
		tag += '<div class="flexcolumn">';
		tag += '<div id="card' + (i + 1) + '" class="flexrow" style="height: 180px;">';
		tag += '<div style="width: 180px;">';
		tag += '<img class="card-image cardimageedit" style="height: 150px;" alt="image" src="' + cardItemslist[i].imagesource + '" />';
		tag += '</div>';
		tag += '<div class="flexcolumn" style="width: 220px;">';
		tag += '<div class="flexrow" style="height: auto;">';
		tag += '<div>';
		tag += '<p style="font-size: 18px;">' + cardItemslist[i].itemName + '</p>';
		tag += '</div>';
		tag += '<div>';
		tag += '<p>' + cardItemslist[i].price + '</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div style="height: auto;">';
		tag += '<p style="font-size: 15px; margin-top: -10px;">by Janice Cheddar</p>';
		tag += '<p style="font-size: 15px; margin-top: -18px; color:#6c6f71">' + cardItemslist[i].itemDetail + '</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div class="flexcolumn" style="height: 50px;">';
		tag += '<div>';
		tag += '<span class="fa fa-star starcoluryello"></span>';
		tag += '<span class="">' + cardItemslist[i].rating + '</span>';
		tag += '</div>';
		tag += '<div style="position: absolute; margin-right: 20px; right: 0;"> <i style="color: red;" class=" ' + cardItemslist[i].favornot + ' "></i> &nbsp <i class="fa fa-shopping-cart fa-lg"></i> </div>';
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