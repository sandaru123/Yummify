class HeaderWithoutNav extends HTMLElement {
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

     <!-- ipad nav start -->

     <nav class="navbar navbar-expand-lg navbar-light nav d-none d-lg-block d-xl-none">
       <div class="container-fluid">

         <div class="container ">
           <div class="row">
             <div class="col-2 d-flex justify-content-end">
               <a class="navbar-brand" href="#">
                 <img src="/Images/YUMIFY.png" height="20px" width="100px">
               </a>
             </div>
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

            <div class="col d-flex justify-content-center" style="padding-top:5px;">
            <a class="navbar-brand" href="#">
            <img src="/Images/YUMIFY.png" height="20px" width="100px">
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- ipad portrait nav end -->

     <!-- iphone nav start -->
     
     <nav class="navbar navbar-expand-lg navbar-light nav d-block d-sm-block d-md-none">
       <div class="container-fluid">
         <div class="container-fluid">
           <div class="row">

             <div class="col d-flex justify-content-center">
               <a class="navbar-brand" href="#">
                 <img src="/Images/YUMIFY.png" height="20px" width="100px">
               </a>
             </div>

         </div>   
       </div>
     </nav>
   </header>
      `;
   }
 }
 
 customElements.define("headerwithoutnav-component", HeaderWithoutNav);
 