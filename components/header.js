/* Use WebComponents */

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="grid-element">
    <a href="/index.html" id="title"> FrostyKernel</a>
    <nav class="topnav" id="navbar">
      <a href="/index.html" class="active">Home</a>
      <!-- can use active to css as a reminder of which page visitor is on-->
      <!--<a href="pages/puzzle-directory.html" accesskey="p">Puzzles</a>
      <a href="pages/about.html">About</a>-->
      <a href="/pages/puzzle-directory.html" accesskey="p">Puzzles</a>
      <a href="/pages/about.html">About</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
    `;
  }
}

customElements.define('header-component', Header);