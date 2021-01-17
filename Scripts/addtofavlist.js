function inifavlocalhost(addfavitemid) {

    var id= addfavitemid;
    var idInt = parseInt(id,10);
    //Find index of specific object using findIndex method.    
    objIndex = cardItemslist.findIndex((obj => obj.id == 0));

    //Log object to Console.
    console.log("Before update: ", cardItemslist[objIndex])

    //Update object's name property.
    cardItemslist[idInt].faviorite = 1;

    localStorage.setItem("cardsDetails_Local", JSON.stringify(cardItemslist));
    var cardItemslist121 = JSON.parse(localStorage.getItem("cardsDetails_Local"));

    console.log(cardItemslist121)

    var newid = 'changebtncolor'+addfavitemid; 

    //$(newid.toString()).removeClass("fa fa-heart-o fa-lg");
    //$(newid.toString()).addClass("fa fa-heart fa-lg");

    alert("Added to Faviorites List!!");

}

function addtocart(addcartitemid) {

    var id = addcartitemid;
    var idInt = parseInt(id,10);
    //Find index of specific object using findIndex method.    
    objIndex = cardItemslist.findIndex((obj => obj.id == 2));

    //Log object to Console.
    console.log("Before update: ", cardItemslist[objIndex])

    //Update object's name property.
    cardItemslist[idInt].cart = 3;

    localStorage.setItem("cardsDetails_Local", JSON.stringify(cardItemslist));
    var cardItemslist121 = JSON.parse(localStorage.getItem("cardsDetails_Local"));

    console.log(cardItemslist121)

    alert("Added to Cart!!");

}