var modal2 = document.getElementById("RatingModalDetails");
var btn2 = document.getElementById("ratingPopupButton");
var span2 = document.getElementsByClassName("close")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
}

span2.onclick = function () {
  modal2.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal = document.getElementById("QRModal");
var btn = document.getElementById("qRpopupButton");
var span = document.getElementsByClassName("close2")[0];

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


$(document).ready(function () {

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