var rateModal = document.getElementById("RatingModalDetails");

// closeSpan.onclick = function () {
//   rateModal.style.display = "none";
// }
window.onclick = function (event) {
  if (event.target == rateModal) {
    rateModal.style.display = "none";
  }
}

var modal = document.getElementById("QRModal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function () {

        ratingPopupButton.onclick = function () {
           modal.style.display = "block";
        }
 
        closeBtn.onclick = function () {
          modal.style.display = "none";
        }
 
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
});


function mapDetailsPage() {
  var indexInt = JSON.parse(localStorage.getItem("map_local"));
  var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));
  console.log(indexInt)
  $('.product_details_Img').attr('src', cardItemslist[indexInt].imagesource);
  $('#product_title').html(cardItemslist[indexInt].itemName);
  $('#price_details').html('$' + cardItemslist[indexInt].price);
  $('#owner_detail').html(cardItemslist[indexInt].owner);
  $('#description_details').html(cardItemslist[indexInt].description);
}