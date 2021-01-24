var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));

function createSearchCards(searchValue) {
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


        var val = $.trim(searchValue);
        console.log(val); 
        function isCherries(fruit) { 
            return fruit.itemName === val;
          }
          
          console.log(cardItemslist.find(isCherries)); 


    if(searchValue != "default"){

        cardItemslist.sort(function (a, b) {
			var a1 = a.itemName.toString(), b1 = b.itemName.toString();
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
			
			if(cardItemslist[i].faviorite == 1){
				icon1 = 'fa fa-heart fa-lg';
			}else{
				icon1 = 'fa fa-heart-o fa-lg';
			}
			
		} else if (pagename == 'myproducts.html') {
			icon1 = cardItemslist[i].deleteitem;
		}

		if (pagename == 'Products.html' || pagename == 'searchpage.html') {
			icon2 = 'fa fa-cart-plus fa-lg';
		} else if (pagename == 'myproducts.html') {
			icon2 = cardItemslist[i].editmyitems;
		}

		tag = '';
		tag += '<div class=" card maincardwidth" id="'+i+'" style="height: 210px; >';
		tag += '<div class="flexcolumn" onclick="gotoDetailsPage('+i+')">';
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
		tag += '<p style="font-size: 15px; font-weight: bold; color: #33D9B2;">$' + cardItemslist[i].price + '</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div style="height: auto;" class="justify-content-end">';
		tag += '<p style="font-size: 13px; margin-top: -10px; color:black;">by Janice Cheddar</p>';
		tag += '<p style="font-size: 12px; margin-top: -18px; color:#6c6f71">' + cardItemslist[i].itemDetail + '</p>';
		tag += '</div>';
		tag += '</div>';
		tag += '</div>';
		tag += '<div class="flexcolumn" style="height: 20px;">';
		tag += '<div class="flex items-center justify-between mb-2">';
		tag += '<div>';
		tag += '<span class="fa fa-star fa-lg starcoluryello"></span>&nbsp';
		tag += '<span class="">' + cardItemslist[i].rating + '</span>';
		tag += '</div>';
		tag += '<div>';

		if (!pagename == 'myproducts.html') {

			tag += '<div style="margin-right: 10px; right: 0px; top: 160px;"> <i style="color: black;" class=" ' + icon1 + ' mr-1 p-1"></i> &nbsp <i class=" ' + icon2 + ' "></i> </div>';

		} else {
			tag += '<div style="margin-right: 10px; right: 0px; top: 160px;"> <i style="color: red;" id="changebtncolor'+i+'" onclick="inifavlocalhost(' + i + ')" class=" ' + icon1 + ' mr-1 p-1"></i> &nbsp <i onclick="addtocart(' + i + ')" class=" ' + icon2 + ' "></i> </div>';
		}

		tag += '</div>';
		tag += '</div>';

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

		// if (i < (cardItemslist.length / 3)) {
		// 	exampleBlockA.append(tag);
		// } else if (i < ((cardItemslist.length / 3) * 2)) {
		// 	exampleBlockB.append(tag);
		// } else if (i <= ((cardItemslist.length / 3) * 3)) {
		// 	exampleBlockC.append(tag);
		// }

		var col_number = j/3;

		//find decimal
		var decimal = col_number - Math.floor(col_number);

   	    var fixed_colNumber = decimal.toFixed(2);
		//append
		if(fixed_colNumber == 0.33){
			exampleBlockA.append(tag);
		}else if(fixed_colNumber < 0.7 && fixed_colNumber >0.6){
			exampleBlockB.append(tag);
		}else if(fixed_colNumber == 0.00){
			exampleBlockC.append(tag);
		}
    j++;

		// add a press effect to the card
		//pressEffectCard('card' + i);
	}
}