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
                            <li><a href='/pages/puzzles/chickasaw.html'>Chickasaw</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Kurdish</a></li>
                            <li><a href='/pages/puzzles/nahuatl.html'>Nahuatl</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Swahili</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Tajik</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Turkish</a></li>
                            <li><a href='/pages/puzzles/yaqui.html'>Yaqui</a></li>
                        </ul>
                    </div>
                    <div class="megamenu-col">
                        <h3>Blue Square <span class='difficulty-symbol blue'>■</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/under-construction.html'>Archi</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Czech</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Endo</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>French</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Hausa</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Hawaiian</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Indonesian</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Luvian</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Maasai</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Quechua</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Sanskrit</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Shugnan</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Swahili</a></li>
                        </ul>
                    </div>
                    <div class="megamenu-col">
                        <h3>Black Diamond <span class='difficulty-symbol black'>◆</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/under-construction.html'>Babylonian</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Georgian</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Orkhono-Yeniseyan</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Samoan</a></li>
                            <li class='megamenu-padding'> </li>
                        </ul>

                        <hr>

                        <h3>Double Black Diamond <span class='difficulty-symbol black'>◆◆</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/under-construction.html'>Amharic</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Ancient Inscriptions</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Thai</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Tocharian</a></li>
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