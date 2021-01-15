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
       <div class="container-fluid">

         <div class="container ">
           <div class="row">
             <div class="col-3 d-flex justify-content-end">
               <a class="navbar-brand" href="/Pages/HomePage.html">
                 <img src="/Images/YUMIFY.png" height="20px" width="100px">
               </a>
             </div>

             <div class="col-1">
               <a class="btn" type="submit" style="padding-bottom: 5px;">
                 <img src="/Images/icons/search.svg" height="20px" width="20px">
               </a>
             </div>

             <div class="col-8">
               <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                 aria-label="Toggle navigation">
                 <img src="/Images/icons/list.svg" height="20px" width="20px">
               </button>
             </div>


           </div>
         </div>

         <div>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">

               <a>
                 <li class="nav-item container-fluid">
                   <a class="nav-link active" aria-current="page" href="/Pages/HomePage.html">Home</a>
                 </li>
               </a>

               <li class="nav-item container-fluid">
                 <a class="nav-link active" aria-current="page" href="#">Contact</a>
               </li>

               <li class="nav-item container-fluid">
                 <a class="nav-link active" aria-current="page" href="/Pages/Aboutus.html">AboutUs</a>
               </li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

               <li class="nav-item container-fluid" style="padding-top:5px">
                 <a>
                   <div class="row ">
                     <div class="col-2 ">
                       <img src="/Images/icons/signup.svg" height="20px" width="20px">
                     </div>
                     <div class="col-10 d-block d-sm-none">
                       <a class="nav-link active" aria-current="page" href="/Pages/RegisterPage.html">Signup</a>
                     </div>
                   </div>
                 </a>
               </li>

               <li class="nav-item container-fluid" style="padding-top:5px">
                 <a>
                   <div class="row ">
                     <div class="col-2 ">
                       <img src="/Images/icons/login.svg" height="20px" width="20px">
                     </div>
                     <div class="col-10 d-block d-sm-none">
                       <a class="nav-link active" aria-current="page" href="/Pages/LoginPage.html">Login</a>
                     </div>
                   </div>
                 </a>
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
                <img src="/Images/icons/list.svg" height="20px" width="20px">
              </a>
            </div>

            <div class="col d-flex justify-content-center" style="padding-top:5px;">
            <a class="navbar-brand" href="/Pages/HomePage.html">
            <img src="/Images/YUMIFY.png" height="20px" width="100px">
              </a>
            </div>

            <div class="col d-flex justify-content-end">
              <a class="btn" type="submit" style="padding-top: 5px;" href="#">
                <img src="/Images/icons/search.svg" height="20px" width="20px">
              </a>
            </div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item container-fluid listMDStyles" style="padding-top:20px">
              <div class="row ">
                <div class="col-2 imageProperties" style="margin-top:5px">
                  <img src="/Images/icons/house.svg" height="20px" width="20px">
                </div>
                <div class="col-10" >
                  <a class="nav-link active" aria-current="page" href="/Pages/HomePage.html">Home</a>
                </div>
              </div>
            </li>


            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 imageProperties" style="margin-top:5px">
                  <img src="/Images/icons/contact.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a class="nav-link active" aria-current="page" href="#">Contact</a>
                </div>
              </div>
            </li>

            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 " style="margin-top:5px">
                  <img src="/Images/icons/info-circle.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a class="nav-link active" aria-current="page" href="/Pages/Aboutus.html">About Us</a>
                </div>
              </div>
            </li><br><br>
 
            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 " style="margin-top:5px">
                  <img src="/Images/icons/signup.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a class="nav-link active" aria-current="page" href="/Pages/RegisterPage.html">Signup</a>
                </div>
              </div>
            </li>

            <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
              <div class="row ">
                <div class="col-2 " style="margin-top:5px; ">
                  <img src="/Images/icons/login.svg" height="20px" width="20px">
                </div>
                <div class="col-10">
                  <a class="nav-link active" aria-current="page" href="/Pages/LoginPage.html">Login</a>
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
                 <img src="/Images/icons/list.svg" height="20px" width="20px">
               </a>
             </div>

             <div class="col d-flex justify-content-center" style="padding-top:5px;">
               <a class="navbar-brand" href="/Pages/HomePage.html">
                 <img src="/Images/YUMIFY.png" height="20px" width="100px">
               </a>
             </div>

             <div class="col d-flex justify-content-end">
               <a class="btn" type="submit" style="padding-top: 5px;" href="#">
                 <img src="/Images/icons/search.svg" height="20px" width="20px">
               </a>
             </div>
           </div>
         </div>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">

             <li class="nav-item container-fluid listMDStyles" style="padding-top:20px">
               <div class="row ">
                 <div class="col-2 imageProperties" style="margin-top:5px">
                   <img src="/Images/icons/house.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                 </div>
               </div>
             </li>


             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 imageProperties" style="margin-top:5px">
                   <img src="/Images/icons/contact.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a class="nav-link active" aria-current="page" href="#">Contact</a>
                 </div>
               </div>
             </li>

             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 " style="margin-top:5px">
                   <img src="/Images/icons/info-circle.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a class="nav-link active" aria-current="page" href="/Pages/Aboutus.html">About Us</a>
                 </div>
               </div>
             </li><br><br>

             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 " style="margin-top:5px">
                   <img src="/Images/icons/signup.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a class="nav-link active" aria-current="page" href="/Pages/RegisterPage.html">Signup</a>
                 </div>
               </div>
             </li>

             <li class="nav-item container-fluid listMDStyles" style="padding-top:5px">
               <div class="row ">
                 <div class="col-2 " style="margin-top:5px; ">
                   <img src="/Images/icons/login.svg" height="20px" width="20px">
                 </div>
                 <div class="col-10">
                   <a class="nav-link active" aria-current="page" href="/Pages/LoginPage.html">Login</a>
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
 