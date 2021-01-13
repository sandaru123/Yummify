// function to create the cards
function createCards() {
	// declaring some variables
	var exampleBlockA = $('#exampleBlockA'), // cache the selector of the element, increases performance
		exampleBlockB = $('#exampleBlockB'), // cache the selector of the element, increases performance
		exampleBlockC = $('#exampleBlockC'), // cache the selector of the element, increases performance
		i,
		j = 1,

		// the cards, in this example in an array
		imagename = ["Image1", "Image2", "Image3", "Image3"],
		imagesource = ["Images/burgers.jpg", "./images/image2.jpg", "./images/image3.jpg", "./images/image3.jpg"],
		titlecard = ["Image!", "Image!", "Image!", "Image!"],
		titleimage = ["Title", "Title", "Title", "Title"],
		text = ["Lorem ipsum part 1...", "Lorem ipsum part 2...", "Lorem ipsum part 3...", "Lorem ipsum part 3..."];

	// emptying the current grid
	exampleBlockA.empty();
	exampleBlockB.empty();
	exampleBlockC.empty();

	var tag = '';

	for (i = 0; i < 3; i++) {

		tag += '<div class="ui-block-a card maincardwidth">';
		tag += '<div class="flexcolumn">';
		tag += '<div id="card'+(i+1)+'" class="flexrow">';
		tag += '<div style="width: 180px;">';
		tag += '<img class="card-image cardimageedit" src="../Images/drinks.jpg" />';
		tag += '</div>';
		tag += '<div class="flexcolumn" style="width: 220px;">';
		tag += '<div style="height: auto;">';
		tag += '<p style="font-size: 20px;">Chorizo & Mozzarella</p>';
		tag += '<p style="float: right; margin-top: -80px;">$25</p>';
		tag += '</div>';
		tag += '<div style="height: auto;">';
		tag += '<p style="font-size: 15px; margin-top: -10px;">by Janice Cheddar</p>';
		tag += '<p style="font-size: 15px; margin-top: -15px;">Butter chicken curry or murg makhani is a curry of chicken in a spiced tomato, butter and cream sauce.</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div class="flexcolumn" style="height: 50px;">';
		tag += '<div>';
		tag += '<span class="fa fa-star starcoluryello"></span>';
		tag += '<span class="fa fa-star starcoluryello"></span>';
		tag += '<span class="fa fa-star starcoluryello"></span>';
		tag += '<span class="fa fa-star starcoluryello"></span>';
		tag += '<span class="fa fa-star" style="color: #de7575;"></span>';
		tag += '</div>';
		tag += '<div></div>';
		tag += '</div>';
		tag += '</div>';
		tag += '</div>';

		pressEffectCard('card' + i);

	}
	$("#appentcard").html("");
	$("#appentcard").html(tag);

	return;
	// the loop to get the values from the arrays
	for (i = 0; i < imagename.length; i = i + 1) {
		tag = '<div class="card" id="card' + i + '">'; // start building the tag for the card
		if (imagename[i] !== null && imagesource[i] !== null) {
			tag = tag + '<div class="card-image"><img alt="' + imagename[i] + '" src="' + imagesource[i] + '" />'; // insert imagesource and imagename if they exists
			if (titleimage[i] !== null) {
				tag = tag + '<h2>' + titleimage[i] + '</h2>'; // insert titleimage if it exists
			}
			tag = tag + '</div>'; // close the image part of the card
		}
		if (titlecard[i] !== null) {
			tag = tag + '<h1>' + titlecard[i] + '</h1>'; // insert titlecard if it exists
		}
		if (text[i] !== null) {
			tag = tag + '<p>' + text[i] + '</p>'; // insert text in the card if it exists
		}
		tag = tag + '</div>'; // end the card building

		/*	You will need to create cards in a special order.
			The first 1/3 of the cards are placed in block A.
			The second 1/3 of the cards are placed in block B.
			The last 1/3 of the cards are placed in block C.
			
			This will make sure that the cards will fill white spots
			when the screen is changing orientation and/or size.
			
			When you create new block for every card you would get
			an interface that is lined like a table.
		*/

		if (i < (imagename.length / 3)) {
			exampleBlockA.append(tag);
		} else if (i < ((imagename.length / 3) * 2)) {
			exampleBlockB.append(tag);
		} else if (i <= ((imagename.length / 3) * 3)) {
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