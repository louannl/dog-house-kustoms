const NavBar = () => {
  return (
    <header>
      <nav>
        <div class="navigation-logo-box">
          <img
            src="vendors/img/Dog-Paw-Print-white.png"
            alt="pawprint"
            class="navigation-logo"
          />
        </div>
        <div class="nav-ribbon">
          <ul class="main-nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#team">Meet the team</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <a class="mobile-nav-icon">
            <ion-icon name="grid-outline"></ion-icon>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
