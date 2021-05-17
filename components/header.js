/* Use WebComponents */

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="grid-element" class='header'>
    <a href="/index.html" id="title"> FrostyKernel</a>
    <nav class="topnav" id="navbar">
      <a href="/index.html" class="active">Home</a>
      <li class='megamenu-btn'>
                <a href='/pages/puzzle-directory.html'>Puzzles</a>
                <div class="megamenu-content">
                    <a class='puzzle-directory-link' href="/pages/puzzle-directory.html">Puzzle Directory</a>
                    <div class="megamenu-col">
                        <h3>Green Circle <span class='difficulty-symbol green'>●</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/agta.html'>Agta</a></li>
                            <li><a>Chickasaw</a></li>
                            <li><a>Kurdish</a></li>
                            <li><a>Nahuatl</a></li>
                            <li><a>Swahili</a></li>
                            <li><a>Tajik</a></li>
                            <li><a>Turkish</a></li>
                            <li><a href='/pages/puzzles/yaqui.html'>Yaqui</a></li>
                        </ul>
                    </div>
                    <div class="megamenu-col">
                        <h3>Blue Square <span class='difficulty-symbol blue'>■</span></h3>
                        <ul>
                            <li><a>Archi</a></li>
                            <li><a>Czech</a></li>
                            <li><a>Endo</a></li>
                            <li><a>French</a></li>
                            <li><a>Hausa</a></li>
                            <li><a>Hawaiian</a></li>
                            <li><a>Indonesian</a></li>
                            <li><a>Luvian</a></li>
                            <li><a href=''>Maasai</a></li>
                            <li><a href=''>Quechua</a></li>
                            <li><a href=''>Sanskrit</a></li>
                            <li><a href=''>Shugnan</a></li>
                            <li><a href=''>Swahili</a></li>
                        </ul>
                    </div>
                    <div class="megamenu-col">
                        <h3>Black Diamond <span class='difficulty-symbol black'>◆</span></h3>
                        <ul>
                            <li><a>Babylonian</a></li>
                            <li><a>Georgian</a></li>
                            <li><a>Orkhono-Yeniseyan</a></li>
                            <li><a>Samoan</a></li>
                            <li class='megamenu-padding'> </li>
                        </ul>

                        <hr>

                        <h3>Double Black Diamond <span class='difficulty-symbol black'>◆◆</span></h3>
                        <ul>
                            <li><a>Amharic</a></li>
                            <li><a>Ancient Inscriptions</a></li>
                            <li><a>Thai</a></li>
                            <li><a>Tocharian</a></li>
                        </ul>
                    </div>
                </div>
            </li>
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