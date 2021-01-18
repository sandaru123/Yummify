

$(document).ready(function () {

    // Attach Button click event listener 
   $("#ratingPopupButton").click(function(){

        // show Modal
        $('#RatingModalDetails').modal('show');
   });
});


function mapDetailsPage() {
     var indexInt = JSON.parse(localStorage.getItem("map_local"));
     var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));
     console.log(indexInt)
	$('.product_details_Img').attr('src',cardItemslist[indexInt].imagesource);
	$('#product_title').html(cardItemslist[indexInt].itemName);
	$('#price_details').html('$'+cardItemslist[indexInt].price);
	$('#owner_detail').html(cardItemslist[indexInt].owner);
	$('#description_details').html(cardItemslist[indexInt].description);

	
}



