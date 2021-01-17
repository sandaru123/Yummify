var cardItemslist = [
  { itemName: 'Chorizo & Mozzarella', itemDetail: 'Butter chicken curry or murg makhani, butter and cream sauce.', price: '55$', imagesource: '../Images/burgers.jpg', rating: 4, favornot: 'fa fa-heart fa-lg', faviorite: 1 },
  { itemName: 'Italian panettone', itemDetail: 'Bake in the preheated oven for 15 minutes', price: '15$', imagesource: '../Images/desserts.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Mayo deviled eggs', itemDetail: 'stirring halfway through the baking.', price: '11$', imagesource: '../Images/drinks.jpg', rating: 3, favornot: 'fa fa-heart fa-lg', faviorite: 1 },
  { itemName: 'Rosemary Baked Olives', itemDetail: 'Butter chicken curry or murg makhani is a curry', price: '5$', imagesource: '../Images/indian.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'boeuf bourguignon', itemDetail: 'Beef brisket, red wine, small pearl onions, bacon, tomato paste', price: '150$', imagesource: '../Images/Boeuf-Bourguignon.jpg', rating: 5, favornot: 'fa fa-heart fa-lg', faviorite: 1 },
  { itemName: 'Sonic Cherry Limeade', itemDetail: 'Tangy and sweet limeade with your choice of some favorite', price: '20$', imagesource: '../Images/sonic-cherry-limeade-slush.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Arbys Roast Beef Sandwich', itemDetail: 'Two ingredients, roast beef and a sesame seed bun,', price: '50$', imagesource: '../Images/arbys-classic-roast-beef.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'KFC Original Recipe Chicken', itemDetail: 'Secret 11 herbs and spices and for launching ', price: '500$', imagesource: '../Images/kfc-original-bucket-fried-chicken.jpg', rating: 1, favornot: 'fa fa-heart fa-lg', faviorite: 1 },
  { itemName: 'Wendys Frosty', itemDetail: 'The Frosty is considered the signature dessert at Wendy,', price: '75$', imagesource: '../Images/wendys-frosty-1.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'MC Happy Meal', itemDetail: 'Small portions, packaging, collectible toys in One.', price: '90$', imagesource: '../Images/mcdonalds-happy-meal-toys.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Pumpkin Spice Latte', itemDetail: 'Starbucks Pumpkin Spice Latte. No other', price: '155$', imagesource: '../Images/Pumpkin-Spice-Latte.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Burrito Supreme', itemDetail: 'Taco Bell has crowned this burrito "The Supreme', price: '55$', imagesource: '../Images/taco-bell-burrito-supreme.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Dunkin Coffee', itemDetail: 'Forget the donuts! Rebranded as just Dunkin in 2018', price: '100$', imagesource: '../Images/dunkin-coffee-cup.jpg', rating: 3, favornot: 'fa fa-heart fa-lg', faviorite: 1 },
  { itemName: 'Culvers ButterBurger', itemDetail: 'The fast-food chain has nicknamed it "The Original,"', price: '180$', imagesource: '../Images/bruger-cheddar-bites-shake-culvers-wisconsin.jpg', rating: 2, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Pepperoni Pizza', itemDetail: 'pepperoni pizza is easily the most-delivered item on the menu', price: '250$', imagesource: '../Images/dominos-ultimate-pepperoni-pizza.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Tortellini Alfredo', itemDetail: 'tortellini Alfredo the most popular pasta offering', price: '300$', imagesource: '../Images/panera-tortellini-alfredo-pasta.jpg', rating: 3, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Kung Pao Chicken', itemDetail: 'This spicy stir-fry dish is a Panda Express classic', price: '100$', imagesource: '../Images/panda-express-kung-pao-chicken.jpg', rating: 2, favornot: 'fa fa-heart fa-lg', faviorite: 1 },
  { itemName: 'Egg McMuffin', itemDetail: ' bacon, egg, and cheese on an English muffin', price: '500$', imagesource: '../Images/mcdonalds-egg-mcmuffin-breakfast-burrito.jpg', rating: 4, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Macchiato', itemDetail: 'This foamy espresso concoction now icen coconut milk mocha', price: '235$', imagesource: '../Images/starbucks-iced-coconut-milk-mocha-macchiato.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 },
  { itemName: 'Munchkins', itemDetail: 'Who can resist Munchkins? Theyre tasty, cute, convenient', price: '450$', imagesource: '../Images/dunkin-donuts-munchkins.jpg', rating: 5, favornot: 'fa fa-heart-o fa-lg', faviorite: 0 }

];


// function to create the cards

var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));

console.log(cardItemslist);
function createCartCards(sortValue) {
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
		

	// emptying the current grid
	exampleBlockA.empty();
	exampleBlockB.empty();
	exampleBlockC.empty();

  var tag = '';
  var tot_price= 0;
  var pri__ = 0;

	for (i = 0; i < cardItemslist.length; i++) {
        if(cardItemslist[i].cart == 1){
          
          pri__= parseInt(cardItemslist[i].price,10);
          tot_price += pri__*1;
          tag = '';
          tag += '<div class=" card maincardwidth cart_CardsDiv" style="height: 220px;">';
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
          tag += '<div style="display:flex; position: absolute; margin-right: 20px; right: 0;"><a class="favioriteI" id=" ' + i + ' "><i style="color: red;"  class=" ' + cardItemslist[i].favornot + '" id="addRem_fav"></i> </a> &nbsp <a class="cartRem" id=" ' + i + ' "><i class="fa fa-shopping-cart fa-lg"></i></a>  </div>';
          tag += '</div>';
          tag += '</div>';
          tag += '</div>';


          tot_price = tot_price+ cardItemslist[i].price;
    
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
  
  localStorage.setItem("total_price_local", JSON.stringify(tot_price/2));
  var totalPrice_ = JSON.parse(localStorage.getItem("total_price_local"));
  
  var totPriceStr = '$'+totalPrice_;
  $("#total_price").html(totPriceStr);
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

//   $(document).on("click", ".favioriteI" , function() {
//     var id= $(this).attr('id');
//     var idInt = parseInt(id,10);
//     //Find index of specific object using findIndex method.    
//     objIndex = cardItemslist.findIndex((obj => obj.id == 0));

//     //Log object to Console.
//     console.log("Before update: ", cardItemslist[objIndex])

//     //Update object's name property.
//     cardItemslist[idInt].cart = 0;

//     localStorage.setItem("cardsDetails_Local", JSON.stringify(cardItemslist));
//     var cardItemslist121 = JSON.parse(localStorage.getItem("cardsDetails_Local"));

//     console.log(cardItemslist121)
//     var vv= $('#0').hasClass('fa-heart');
//     //var vv =  $(this).closest('.addRem_fav').hasClass('fa-heart');


//    var vstr = vv.toString();
//     alert(vstr);
// });

//rem cart

  $(document).on("click", ".cartRem" , function() {
    var id= $(this).attr('id');
    var idInt = parseInt(id,10);
    //Find index of specific object using findIndex method.    
    objIndex = cardItemslist.findIndex((obj => obj.id == 0));

    //Log object to Console.
    console.log("Before update: ", cardItemslist[objIndex])

    //Update object's name property.
    cardItemslist[idInt].cart = 0;

    localStorage.setItem("cardsDetails_Local", JSON.stringify(cardItemslist));
    var cardItemslist121 = JSON.parse(localStorage.getItem("cardsDetails_Local"));

    console.log(cardItemslist121)

    $("div .cart_CardsDiv").remove();
    createCartCards("Nme");
});