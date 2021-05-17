class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer id="footer" class="grid-element"> Created by <a href="https://www.tylerkerns.com" target="_blank"
      class="links">Tyler Kerns</a></footer>
    `;
  }
}

customElements.define('footer-component', Footer);