/* Use WebComponents */

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="grid-element" class='header'>
    <a href="/index.html" id="title"><img class='brand' src="/assets/images/FKLogo.png"></a>
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
                            <li><a href='/pages/puzzles/kurdish.html'>Kurdish</a></li>
                            <li><a href='/pages/puzzles/nahuatl.html'>Nahuatl</a></li>
                            <li><a href='/pages/puzzles/tajik.html'>Tajik</a></li>
                            <li><a href='/pages/puzzles/swahili-1.html'>Swahili</a></li>                      
                            <li><a href='/pages/puzzles/turkish.html'>Turkish</a></li>
                            <li><a href='/pages/puzzles/yaqui.html'>Yaqui</a></li>
                        </ul>
                    </div>
                    <div class="megamenu-col">
                        <h3>Blue Square <span class='difficulty-symbol blue'>■</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/archi.html'>Archi</a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Czech <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Endo <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>French <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Hausa <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Hawaiian <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Indonesian <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Luvian <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Maasai <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Quechua <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Sanskrit <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Shugnan <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Swahili <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                        </ul>
                    </div>
                    <div class="megamenu-col">
                        <h3>Black Diamond <span class='difficulty-symbol black'>◆</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/under-construction.html'>Babylonian <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Georgian <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Orkhono-Yeniseyan <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/samoan.html'>Samoan</a></li>
                            <li class='megamenu-padding'> </li>
                        </ul>

                        <hr>

                        <h3>Double Black Diamond <span class='difficulty-symbol black'>◆◆</span></h3>
                        <ul>
                            <li><a href='/pages/puzzles/under-construction.html'>Amharic <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Ancient Inscriptions <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Thai <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                            <li><a href='/pages/puzzles/under-construction.html'>Tocharian <span class="badge" title="This puzzle is under construction."><i class="fa fa-exclamation-triangle badge-content" aria-hidden="true"></i>
                            </span></a></li>
                        </ul>
                    </div>
                </div>
            </li>
      <a href="/pages/about.html">About</a>
      <a href="/pages/bounties.html">Bounties</a>
      <a onclick='themeToggle()'>Settings</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
    `;
  }
}

customElements.define('header-component', Header);