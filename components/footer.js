const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
  /* Start of footer styling */
  #footer {
      grid-area: footer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--main-bg-color);
      width: 100vw;
      max-width: 1000px;
      color: white;
  }
  
  footer a {
      box-shadow: 0 2px 0 var(--accent-color-2);
      border-radius: 0;
  }
  footer a:hover {
      background-color: var(--accent-color-1);
  }
  
  /* End of footer style */
  
  </style>
  <footer id="footer" class="grid-element"> Created by <a href="https://www.tylerkerns.com" target="_blank"
      class="links">Tyler Kerns</a></footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);