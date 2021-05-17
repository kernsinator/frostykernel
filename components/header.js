const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
  /* All header styling */
  #header {
      grid-area: header;
      display: flex;
      align-items: center;
      background-color: inherit;
      justify-content: space-between;
      width: 100vw;
      max-width: 1000px;
  }
  
  #title {
      color: inherit;
      font-size: calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)));
      padding: 1em;
      font-weight: 700;
      text-decoration: none;
  }
  
  
  nav {
      display: flex;
      background-color: transparent;
      align-items: center;
      overflow: hidden;
  }
  
    
    /* Style the links inside the navigation bar */
    .topnav a {
      float: left;
      display: block;
      text-align: center;
      text-decoration: none;
      font-size: calc(18px + (22 - 18) * ((100vw - 300px) / (1600 - 300)));
      margin-right: 1em;
      color: inherit;
    }
    
    /* Hide the link that should open and close the topnav on small screens */
    .topnav .icon {
      display: none;
    }
    
    i {
      padding: 0 0;
      margin: auto 1em;
  }
  
    .topnav a:hover {
      background-color: var(--accent-color-1);
  }
  
  /* End of header styling */
  </style>
  <header id="header">
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

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);