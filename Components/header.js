class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>

    // *{
    //   font-family: 'Fira Sans' !important;
    // }

    .nav {
      background-color: #33D9B2;
    }

    .imageproperties {
       width: 20px;
       height: 20px;
    }

    .navbarBrand {
      padding-top: $navbar-brand-padding-y;
      padding-bottom: $navbar-brand-padding-y;
      @include font-size($navbar-brand-font-size);
      text-decoration: if($link-decoration == none, null, none);
      white-space: nowrap;
    }    

  </style>

  <header>

  <!-- ipad nav start -->
  <nav class="navbar navbar-expand-lg navbar-light nav d-none d-lg-block d-xl-none">
    <div class="container flex">
      <div class="container" style="padding-right: 0px !important; padding-left: 0px !important;">
        <div class="row items-center" >
          <div  onclick=" gotoHomeonclick()" class="col-3" style="padding-top:8px; display: flex; height:40px; width:140px;">
            <a class="navbarBrand" href="">
              <img src="../Images/YUMIFY.png" >
            </a>
          </div>

          <div onclick="gotoSearchonclick()" class="col-2" style="padding:0;">
            <a href="">
              <img src="../Images/icons/search.svg" height="20px" width="20px">
            </a>
          </div>
        </div>
      </div>

      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <a>
              <li class="nav-item container-fluid">
                <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page"  onclick=" gotoHomeonclick()">Home</a>
              </li>
            </a>

            <li class="nav-item container-fluid">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="contact.html">Contact</a>
            </li>

            <li class="nav-item container-fluid">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="Aboutus.html">AboutUs</a>
            </li>

            <li class="nav-item container-fluid">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="ProfilePage.html">Account</a>
            </li>

            <li class="nav-item container-fluid" style="padding-top:10px">
              
                  <div class="col-3 w-5">
                     <a href="Cart.html">
                      <img src="../Images/icons/cart.svg" height="20px" width="20px">
                     </a>
                  </div>
                 
            </li>

            <li class="nav-item container-fluid" style="padding-top:10px">
              
                  <div class="col-3 w-5">
                     <a href="myproducts.html">
                      <img src="../Images/icons/bag-plus.svg" height="20px" width="20px">
                     </a>
                  </div>
                  
            </li><br>

            <li class="nav-item container-fluid" style="padding-top:10px">
              
                  <div class="col-3 w-5 ">
                    <a href="LandingPage.html">
                      <img src="../Images/icons/logout.svg" height="20px" width="20px">
                    </a>
                  </div>
                  
            </li>

        </div>
      </div>
    </div>
  </nav>
  <!-- ipad nav end -->

  <!-- ipad portrait and iphone landscape nav start -->

  <nav class="navbar navbar-expand-lg navbar-light nav d-none d-sm-none d-md-block d-lg-none">
  <div class="container-fluid">

    <div class="container-fluid">
      <div class="row">

        <div class="col" style="padding:0;">
          <a class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <img src="../Images/icons/list.svg" height="20px" width="20px">
          </a>
        </div>

        <div class="col d-flex justify-content-center items-center" ">
          <a class="navbarBrand" style="margin-right:0px !important"  onclick=" gotoHomeonclick()">
            <img src="../Images/YUMIFY.png" height="20px" width="100px">
          </a>
        </div>

        <div onclick="gotoSearchonclick()" class="col d-flex justify-content-end" style="padding:0;">
          <a style="padding-top: 5px;" href="">
            <img src="../Images/icons/search.svg" height="20px" width="20px">
          </a>
        </div>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item container-fluid listMDStyles" style="padding-top:20px">
          <div class="row items-center">
            <div class="col-2 imageProperties">
              <img src="../Images/icons/house.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page"  onclick=" gotoHomeonclick()" >Home</a>
            </div>
          </div>
        </li>


        <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
          <div class="row items-center">
            <div class="col-2 imageProperties">
              <img src="../Images/icons/contact.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="contact.html">Contact</a>
            </div>
          </div>
        </li>

        <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
          <div class="row items-center">
            <div class="col-2 imageProperties">
              <img src="../Images/icons/info-circle.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="Aboutus.html">About Us</a>
            </div>
          </div>
        </li>

        <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
          <div class="row items-center">
            <div class="col-2 imageProperties">
              <img src="../Images/icons/person.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="ProfilePage.html">Account</a>
            </div>
          </div>
        </li>

        <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
          <div class="row items-center">
            <div class="col-2 imageProperties">
              <img src="../Images/icons/cart.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" onclick="gotoCartonclick()">Cart</a>
            </div>
          </div>
        </li>

        <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
          <div class="row items-center">
            <div class="col-2 imageProperties ">
              <img src="../Images/icons/bag-plus.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="myproducts.html">My Products</a>
            </div>
          </div>
        </li><br>

        <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
          <div class="row items-center">
            <div class="col-2 imageProperties ">
              <img src="../Images/icons/logout.svg" height="20px" width="20px">
            </div>
            <div class="col-10">
              <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="LandingPage.html">Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <!-- ipad portrait and iphone landscape nav end -->

 <!-- iphone nav start -->
<nav class="navbar navbar-expand-lg navbar-light nav d-block d-sm-none">
  <div class="container-fluid">

    <div class="container-fluid">
      <div class="row">

        <div class="col" style="padding:0;">
          <a class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <img src="../Images/icons/list.svg" height="20px" width="20px">
          </a>
        </div>
        <div onclick=" gotoHomeonclick()" class="col d-flex justify-content-center " style="padding-right: 0px !important; margin-top:10px;">
           <a class="navbarBrand" style="margin-right:0px !important; " href="">
             <img src="../Images/YUMIFY.png" height="30px" width="100px">
           </a>
         </div>
         <div onclick=" gotoSearchonclick()" class="col d-flex justify-content-end" style="padding:0;">
           <a style="padding-top: 5px;" href="">
             <img src="../Images/icons/search.svg" height="20px" width="20px">
           </a>
        </div>
     </div>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="padding-top:20px">

         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties" style="vertical-align: baseline;">
               <img src="../Images/icons/house.svg" height="20px" width="20px">
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" onclick=" gotoHomeonclick()">Home</a>
             </div>
           </div>
         </li>


         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties">
               <img src="../Images/icons/contact.svg" height="20px" width="20px">
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="contact.html">Contact</a>
             </div>
           </div>
         </li>

         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties">
               <img src="../Images/icons/info-circle.svg" height="20px" width="20px">
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="Aboutus.html">About Us</a>
             </div>
           </div>
         </li>

         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties">
               <img src="../Images/icons/person.svg" height="20px" width="20px">
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="ProfilePage.html">Account</a>
             </div>
           </div>
         </li>

         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties">
               <img src="../Images/icons/cart.svg" height="20px" width="20px">
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" onclick="gotoCartonclick()">Cart</a>
             </div>
           </div>
         </li>

         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties ">
               <img src="../Images/icons/bag-plus.svg" height="20px" width="20px">
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="myproducts.html">My Products</a>
             </div>
           </div>
         </li><br>
         <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
           <div class="row items-center">
             <div class="col-2 imageProperties " style=" vertical-align: text-bottom;">
               <img src="../Images/icons/logout.svg" height="20px" width="20px"  >
             </div>
             <div class="col-10">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="LandingPage.html">Logout</a>
             </div>
           </div>
         </li>
       </ul>
     </div>
   </div>
 </nav>
</header>

     `;
  }
}

customElements.define("header-component", Header);

function gotoCartonclick() {
  window.location.href = "Cart.html";
}

function gotoSearchonclick() {
  window.location.href = "searchpage.html";
}

function gotoHomeonclick() {
  window.location.href = "HomePage.html";
}