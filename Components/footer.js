class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

      <style>
      .footerStyles {
        background-color: #33D9B2;
        height: 55px;
        padding-top: 10px;
      }
    </style>

    <div class="container-fluid footerStyles">
      <div class="d-flex justify-content-center">
        <img src="/Images/YUMIFY.png" height="20px" width="100px" style="justify-self: center;">
      </div>
      <div class="d-flex justify-content-center">
       <p class="normal" style="justify-content: center;">© 2020 Yumify Cooperation private (LTD)</p>
      </div>
    </div>
      `;
  }
}

customElements.define("footer-component", Footer);
