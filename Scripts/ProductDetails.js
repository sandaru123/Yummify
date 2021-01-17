

$(document).ready(function () {

    // Attach Button click event listener 
   $("#ratingPopupButton").click(function(){

        // show Modal
        $('#RatingModalDetails').modal('show');
   });
});


//binding array details to the details page
var index = $('.getDetailsIndex').attr('id');

indexInt= parseInt(index,10);

var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));

$('.product_details_Img').attr('src',cardItemslist[indexInt].imagesource);
$('#product_title').html(cardItemslist[indexInt].itemName);
$('#price_details').html('$'+cardItemslist[indexInt].price);
$('#owner_detail').html(cardItemslist[indexInt].owner);
$('#description_details').html(cardItemslist[indexInt].description);

