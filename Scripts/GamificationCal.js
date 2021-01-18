 //yummy points calculation

    var yummyPoints = JSON.parse(localStorage.getItem("total_points_local"));
    var cardItemslist = JSON.parse(localStorage.getItem("cardsDetails_Local"));


          //from favorites
          for(i = 0; i < cardItemslist.length; i++){
            if(cardItemslist[i].faviorite == 1){
                yummyPoints = yummyPoints + 50;
                console.log('from fav :'+yummyPoints)
            } 
          }

          //from cart
          for(i = 0; i < cardItemslist.length; i++){
            if(cardItemslist[i].cart == 3){
                yummyPoints = yummyPoints + 50;
                console.log('from cart :'+yummyPoints)
            } 
          }

          //from rating
          for(i = 0; i < cardItemslist.length; i++){
            if(cardItemslist[i].personalrating >0 ){
                yummyPoints = yummyPoints + 10*cardItemslist[i].personalrating;
                console.log('from pr :'+yummyPoints)
            } 
          }
          var yummyStr = yummyPoints.toString();
          $('.yummyPoints').html(yummyStr);
          $('.Yummy_Dash').html(yummyStr);