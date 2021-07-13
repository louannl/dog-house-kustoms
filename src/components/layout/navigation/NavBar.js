import classes from './NavBar.module.css';
import pawWhite from '../../../assets/images/vendor/Dog-Paw-Print-white.png';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img
            src={pawWhite}
            alt="pawprint"
            className={classes.navigationLogo}
          />
        </div>
        <div className={classes.navRibbon}>
          <ul className={classes.mainNav}>
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
          <a class={classes.mobileNavIcon}>
            <p>icon</p>
            {/* <ion-icon name="grid-outline"></ion-icon> */}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
