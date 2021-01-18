var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));
console.log(cardItemslist);

// function to create the cards
function createFaviriteCards(sortValue) {
  // declaring some variables
  var exampleBlockA = $('#exampleBlockA'), // cache the selector of the element, increases performance
    exampleBlockB = $('#exampleBlockB'), // cache the selector of the element, increases performance
    exampleBlockC = $('#exampleBlockC'), // cache the selector of the element, increases performance
    i,
    j = 1,

    // the cards, in this example in an array
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

  for (i = 0; i < cardItemslist.length; i++) {

    if (cardItemslist[i].faviorite == 1) {
      
      tag = '';
      tag += '<div class=" card maincardwidth favoriteCardsDiv" style="height: 200px;">';
      tag += '<div class="flexcolumn">';
      tag += '<div onclick="gotoDetailsPage('+i+')" id="card' + (i + 1) + '" class="flexrow" style="height: 160px;">';
      tag += '<div style="width: 180px; height:160px;">';
      tag += '<img class="card-image cardimageedit" style="height: 140px;" alt="image" src="' + cardItemslist[i].imagesource + '" />';
      tag += '</div>';
      tag += '<div class="flexcolumn" style="width: 200px;">';
      tag += '<div class="flexrow" style="height: auto;">';
      tag += '<div>';
      tag += '<p style="font-size: 15px; font-weight: bold;">' + cardItemslist[i].itemName + '</p>';
      tag += '</div>';
      tag += '<div>';
      tag += '<p style="font-size: 15px; font-weight: bold; color: #33D9B2;"> $' + cardItemslist[i].price + '</p>';
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
      tag += '<div style="display:flex; position: absolute; margin-right: 10px; right: 0; top: 160px;"><a class="favioriteI" id=" ' + i + ' "><i style="color: red;"  class="fa fa-heart fa-lg mr-1 p-1"></i> </a> &nbsp <a onclick="addtocart(' + i + ')" class="cartFavorite"><i class="fa fa-shopping-cart fa-lg mr-1 p-1"></i></a>  </div>';
      tag += '</div>';
      tag += '</div>';
      tag += '</div>';

      /*	You will need to create cards in a special order.
          The first 1/3 of the cards are placed in block A.
          The second 1/3 of the cards are placed in block B.
          The last 1/3 of the cards are placed in block C.
          
          This will make sure that the cards will fill white spots
          when the screen is changing orientation and/or size.
          
          When you create new block for every card you would get
          an interface that is lined like a table.
      */

      // if (i < (imagename.length / 3)) {
      //   exampleBlockA.append(tag);
      // } else if (i < ((imagename.length / 3) * 2)) {
      //   exampleBlockB.append(tag);
      // } else if (i <= ((imagename.length / 3) * 3)) {
      //   exampleBlockC.append(tag);
      // }

      
		var col_number = j/3;

		//find decimal
		var decimal = col_number - Math.floor(col_number);

    var fixed_colNumber = decimal.toFixed(2);
    console.log('decimal fix: '+fixed_colNumber);
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
      pressEffectCard('card' + i);
    }

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

$(document).on("click", ".favioriteI", function () {
  var id = $(this).attr('id');
  var idInt = parseInt(id, 10);
  //Find index of specific object using findIndex method.    
  objIndex = cardItemslist.findIndex((obj => obj.id == 0));

  //Log object to Console.
  console.log("Before update: ", cardItemslist[objIndex])

  //Update object's name property.
  cardItemslist[idInt].faviorite = 0;

  localStorage.setItem("cardsDetails_Local", JSON.stringify(cardItemslist));
  var cardItemslist121 = JSON.parse(localStorage.getItem("cardsDetails_Local"));

  //console.log(cardItemslist121)

  $("div .favoriteCardsDiv").remove();
  createFaviriteCards("Nme");
});

// $(".favioriteI").on('click', function () {
//   var id= this.attr('id');
//     var idInt = parseInt(id,10);
//     //Find index of specific object using findIndex method.    
//     objIndex = cardItemslist.findIndex((obj => obj.id == idInt));

//     //Log object to Console.
//     console.log("Before update: ", cardItemslist[objIndex])

//     //Update object's name property.
//     cardItemslist[objIndex].faviorite = 0;

//     $("div .favoriteCardsDiv").remove();
// 		createFaviriteCards("Nme");
// })



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