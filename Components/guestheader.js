class GuestHeader extends HTMLElement {
   constructor() {
     super();
   }
 
   connectedCallback() {
     this.innerHTML = `
     <style>
     .nav {
       background-color: #33D9B2;
     }
   </style>

   <header>

     <!-- ipad nav strat -->
     <nav class="navbar navbar-expand-lg navbar-light nav d-none d-lg-block d-xl-none">
     <div class="container flex">
       <div class="container" style="padding-right: 0px !important; padding-left: 0px !important;">
         <div class="row items-center" >
           <div class="col-3" style="padding-top:8px; display: flex; height:40px; width:140px;">
             <a class="navbarBrand" href="HomePage.html">
               <img src="../Images/YUMIFY.png" >
             </a>
           </div>
 
           <div class="col-2" style="padding:0;">
             <a href="searchpage.html">
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
                 <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="HomePage.html">Home</a>
               </li>
             </a>
 
             <li class="nav-item container-fluid">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="contact.html">Contact</a>
             </li>
 
             <li class="nav-item container-fluid">
               <a style="font-family: 'Fira Sans' !important;" class="nav-link active" aria-current="page" href="Aboutus.html">AboutUs</a>
             </li>
  
             <li class="nav-item container-fluid" style="padding-top:10px">
               
                   <div class="col-3 w-5">
                      <a href="RegisterPage.html">
                       <img src="../Images/icons/signup.svg" height="20px" width="20px">
                      </a>
                   </div>
                   
             </li><br>
 
             <li class="nav-item container-fluid" style="padding-top:10px">
               
                   <div class="col-3 w-5 ">
                     <a href="LoginPage.html">
                       <img src="../Images/icons/login.svg" height="20px" width="20px">
                     </a>
                   </div>
                   
             </li>
 
         </div>
       </div>
     </div>
   </nav>
     <!-- ipad landscape nav end -->

     <!-- ipad portrait nav start -->
     <nav class="navbar navbar-expand-lg navbar-light nav d-none d-sm-none d-md-block d-lg-none">
      <div class="container-fluid">

        <div class="container-fluid">
          <div class="row">

            <div class="col">
              <a class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <img src="../Images/icons/list.svg" height="20px" width="20px">
              </a>
            </div>

            <div class="col d-flex justify-content-center" style="padding-top:5px;">
            <a class="navbar-brand" href="HomePage.html">
            <img src="../Images/YUMIFY.png" height="20px" width="100px">
              </a>
            </div>

            <div class="col d-flex justify-content-end">
              <a class="btn" type="submit" style="padding-top: 5px;" href="#">
                <img src="../Images/icons/search.svg" height="20px" width="20px">
              </a>
            </div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item container-fluid listMDStyles" style="padding-top:20px">
              <div class="row ">
                <div class="col-2 imageProperties" style="margin-top:5px">
                  <img src="../Images/icons/house.svg" height="20px" width="20px">
                </div>
                <div class="col-10" >
                  <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="HomePage.html">Home</a>
                </div>
              </div>
            </li>


            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 imageProperties" style="margin-top:5px">
                  <img src="../Images/icons/contact.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="#">Contact</a>
                </div>
              </div>
            </li>

            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 " style="margin-top:5px">
                  <img src="../Images/icons/info-circle.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="Aboutus.html">About Us</a>
                </div>
              </div>
            </li><br><br>
 
            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 " style="margin-top:5px">
                  <img src="../Images/icons/signup.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="RegisterPage.html">Signup</a>
                </div>
              </div>
            </li>

            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 " style="margin-top:5px; ">
                  <img src="../Images/icons/login.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="LoginPage.html">Login</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- ipad portrait nav end -->

     <!-- iphone nav start -->
     <nav class="navbar navbar-expand-lg navbar-light nav d-block d-sm-block d-md-none">
       <div class="container-fluid">

         <div class="container-fluid">
           <div class="row">

             <div class="col">
               <a class="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                 aria-label="Toggle navigation">
                 <img src="../Images/icons/list.svg" height="20px" width="20px">
               </a>
             </div>

             <div class="col d-flex justify-content-center" style="padding-top:5px;">
               <a class="navbar-brand" href="HomePage.html">
                 <img src="../Images/YUMIFY.png" height="20px" width="100px">
               </a>
             </div>

             <div class="col d-flex justify-content-end">
               <a class="btn" type="submit" style="padding-top: 5px;" href="#">
                 <img src="../Images/icons/search.svg" height="20px" width="20px">
               </a>
             </div>
           </div>
         </div>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">

             <li class="nav-item container-fluid listMDStyles" style="padding-top:20px">
               <div class="row ">
                 <div class="col-2 imageProperties" style="margin-top:5px">
                   <img src="../Images/icons/house.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="../index.html">Home</a>
                 </div>
               </div>
             </li>


             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 imageProperties" style="margin-top:5px">
                   <img src="../Images/icons/contact.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="#">Contact</a>
                 </div>
               </div>
             </li>

             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 " style="margin-top:5px">
                   <img src="../Images/icons/info-circle.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="Aboutus.html">About Us</a>
                 </div>
               </div>
             </li><br><br>

             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 " style="margin-top:5px">
                   <img src="../Images/icons/signup.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="RegisterPage.html">Signup</a>
                 </div>
               </div>
             </li>

             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 " style="margin-top:5px; ">
                   <img src="../Images/icons/login.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a style="font-family: 'Fira Sans';" class="nav-link active" aria-current="page" href="LoginPage.html">Login</a>
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
 
 customElements.define("guestheader-component", GuestHeader);
 