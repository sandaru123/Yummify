// function to create the cards
function createCartCards(sortValue) {
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
        if(cardItemslist[i].cart == 1){
            tag = '';
            tag += '<div class=" card maincardwidth" style="height: 270.66px;">';
            tag += '<div class="flexcolumn">';
            tag += '<div id="card'+(i+1)+'" class="flexrow" style="height: 220px;">';
            tag += '<div style="width: 180px;">';
            tag += '<img class="card-image cardimageedit" alt="image" src="' + cardItemslist[i].imagesource + '" />';
            tag += '</div>';
            tag += '<div class="flexcolumn" style="width: 220px;margin-top: 32px;">';
            tag += '<p style="  margin-top: -19%;padding: 0px;  text-align: end;">'+cardItemslist[i].price+'</p>';
            tag += '<div style="height: auto;">';
            tag += '<p style="font-size: 20px;">'+cardItemslist[i].itemName+'</p>';
            tag += '</div>';
            tag += '<div style="height: auto;">';
            tag += '<p style="font-size: 15px; margin-top: -10px;">by Janice Cheddar</p>';
            tag += '<p style="font-size: 15px; margin-top: -15px;">'+cardItemslist[i].itemDetail+'</p>';
            tag += '</div>';
            tag += '</div>';
            tag += '</div>';
            tag += '<div class="flexcolumn" style="height: 50px;">';
            tag += '<div>';
            
            // for(s=1; s< cardItemslist[i].rating; s++){
    
            // }
    
            tag += '<span class="fa fa-star starcoluryello"></span>';
            tag += '<span class="">'+cardItemslist[i].rating+'</span>';
            // tag += '<span class="fa fa-star starcoluryello"></span>';
            // tag += '<span class="fa fa-star starcoluryello"></span>';
            // tag += '<span class="fa fa-star" style="color: #de7575;"></span>';
            tag += '</div>';
            tag += '<div></div>';
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


$(".cash_payment").click(function(){
    $(".paymentDetails").hide();
    $(".paymentDetailsH").hide();
  });
  
  $(".debitCredit_payment").click(function(){
    $(".paymentDetails").show();
    $(".paymentDetailsH").show();
  });

  $("#placeOrder").click(function(){
    var points = $("#use_points").html();
    var payment_total = $("#payment_total").html();

    var reduced_total = parseInt(payment_total,10) - parseInt(points,10);
    $('#subtotal_payment_summary').html(reduced_total.toString());
	$("#summaryLink").click();
  });

  $(document).ready(function(){
	$("#selectDropdown").change(function(){
	  //selection changedvar 
	  selText =  $( "#selectDropdown option:selected" ).text();
	  
	  if(selText == "Sort By Name"){
		$("div .maincardwidth").remove();
		createCards("Name");

	  }else if(selText == "Sort By Price"){
		$("div .maincardwidth").remove();
		createCards("Price");
	  }  
  });
  });