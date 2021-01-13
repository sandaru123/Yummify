class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <style>
    .footerStyles {
       background-color: #33D9B2;
       height: 60px;
    }

    .footer {
      position:absolute;
      bottom:0;
      width:100%;
    }

    .fluidContainer {
       margin-right: auto;
       margin-left: auto;
       width: 100%;
       padding-right: .75rem;
       padding-left: .75rem;
    }

    *,
    ::after,
    ::before {
       box-sizing: border-box;
    }

    .displayFlex {
      display: flex !important;
      justify-content: center!important;
   }
    
 </style>

 <div class="fluidContainer footerStyles footer">
    <div class="displayFlex">
       <img src="../Images/YUMIFY.png" height="20px" width="100px" style="margin-top: 10px; ">
    </div>
    <div class="displayFlex" style="">
       <p style="justify-content: center; margin-top:2px;">© 2020 Yumify Cooperation private (LTD)</p>
    </div>
 </div>
      `;
  }
}

customElements.define("footer-component", Footer);
