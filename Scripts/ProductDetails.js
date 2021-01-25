var rateModal = document.getElementById("RatingModalDetails");

var divcount = 0;
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
          rateModal.style.display = "block";
        }
 
        // closeBtn.onclick = function () {
        //   modal.style.display = "none";
        // }
      
        // closeBtnRate.onclick = function () {
        //   rateModal.style.display = "none";
        // }
 
        // window.onclick = function (event) {
        //   if (event.target == modal) {
        //     modal.style.display = "none";
        //   }
        // }

        $('.addReply').on('click',function(){
           $(this).parents('.userRatingRecordDiv').find('.addRplyCmnt').show();  
        })

        $('.commentButtonInReply').on('click',function(){
          var commrntFormBox = $(this).parents('.userRatingRecordDiv').find('.commentinReply').val();
          console.log(commrntFormBox);
          var div = '<div class="replyDivMain"><div class="mr-3 p-2 replyDiv"><div class="flex items-center fontSize12_14 replyDiv3"><span class="iconSpan"><i class="fa fa-user-circle-o fa-fw iconI"></i>User</span><span class="dateSpan">now</span></div> <span class="commentSpan"> '+commrntFormBox+'</span></div></div>';
          $(this).parents('.userRatingRecordDiv').find('.addRplyCmnt').hide();  
          $(this).parents('.userRatingRecordDiv').find('.appendReplyDiv').append(div);
        })

        $('.comment_User').on('click', function(){

         var com = $('#get_comment').val();
        
            var cmnt = '<div class="items-center userRatingRecordDiv mb-2" style="border-width: thin;border-color: #B1B1AA;border-radius: 5px;"><div class="block items-center fontSize12_14"style="background-color:#FAFAFA; width: 100%; padding: 1% 1% 1% 2%"> <div class="flex items-center fontSize12_14" style="background-color:#FAFAFA; width: 100%; padding: 1% 1% 1% 2%"><span style="font-weight:bold; font-size: 15px;"><i class="fa fa-user-circle-o fa-fw" style="font-weight:bold; filter: invert(46%) sepia(8%) saturate(10%) hue-rotate(338deg) brightness(94%) contrast(84%);"></i>Username</span><span style="font-size: 13px;"> <i class="fa fa-star fa-fw" style="filter: invert(82%) sepia(73%) saturate(408%) hue-rotate(352deg) brightness(91%) contrast(85%);"></i><span class="userRate">4</span></span><span style="position: absolute;right: 10%; font-size: 13px;">now</span></div><span style="text-align: center; margin:2% auto 2% 10%; font-size: 13px;" class="userComment">'+com+'</span>';
             cmnt += '<a class="addReply"><h4 style="text-decoration: underline; color: #33D9B2; margin:2% auto 2% 10%;">Reply</h4></a>';
            cmnt +='<div class="flex justify-between items-center mt-3 addRplyCmnt" style="display: none;">';
            cmnt+='<input type="text" class="commentinReply" data-role="none" placeholder="Add a Comment" style="padding-right: 10px; padding-left: 10px; height: 45px; border-width: thin;border-color: #B1B1AA;border-radius: 5px;width: 100%; font-size:15px; font-family: "Fira Sans";">';
           cmnt += '<a><span><i class="fa fa-paper-plane-o fa-lg pl-2 pr-2 commentButtonInReply" style="filter: invert(88%) sepia(10%) saturate(2409%) hue-rotate(99deg) brightness(91%) contrast(85%);" aria-hidden="true"></i></span>';
           cmnt +='</a></div><div class="appendReplyDiv"></div> </div></div>';
            $('.addCommentDivfromComnt').append(cmnt);   
          })

});




//commentButtonInReply


function mapDetailsPage() {
  var indexInt = JSON.parse(localStorage.getItem("map_local"));
  var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));
  console.log('map local'+indexInt)
  $('.product_details_Img').attr('src', cardItemslist[indexInt].imagesource);
  $('#product_title').html(cardItemslist[indexInt].itemName);
  $('#price_details').html('$' + cardItemslist[indexInt].price);
  $('#owner_detail').html(cardItemslist[indexInt].owner);
  $('#description_details').html(cardItemslist[indexInt].description);
}