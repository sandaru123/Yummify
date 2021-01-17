function inifavlocalhost(addfavitemid) {

    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('favitems'));

    if (!retrievedObject.includes(addfavitemid)) {
        retrievedObject.push(addfavitemid);
        localStorage.setItem('favitems', JSON.stringify(retrievedObject));
        console.log(JSON.parse(localStorage.getItem('favitems')));
        alert("Added to Fav List!!");
    } else {
        alert("Already in Fav List!!");
    }

}