var modal = document.getElementById("RatingModalDetails");
var btn = document.getElementById("ratingPopupButton");
var span = document.getElementsByClassName("close")[0];

$(document).ready(function () {


     btn.onclick = function () {
          modal.style.display = "block";
        }
 
        span.onclick = function () {
          modal.style.display = "none";
        }
 
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
});


//binding array details to the details page
var index = $('.getDetailsIndex').attr('id');

indexInt = parseInt(index, 10);

var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));

$('.product_details_Img').attr('src', cardItemslist[indexInt].imagesource);
$('#product_title').html(cardItemslist[indexInt].itemName);
$('#price_details').html('$' + cardItemslist[indexInt].price);
$('#owner_detail').html(cardItemslist[indexInt].owner);
$('#description_details').html(cardItemslist[indexInt].description);