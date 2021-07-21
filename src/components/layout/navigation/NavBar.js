import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs';
import classes from './NavBar.module.css';
import pawWhite from '../../../assets/images/vendor/Dog-Paw-Print-white.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import slide from '../../transitions/slide.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <div className={classes.navRibbon}>
          <img
            src={pawWhite}
            alt="pawprint"
            className={classes.navigationLogo}
          />
          <button className={classes.mobileNavIcon} onClick={toggleMenu}>
            {isOpen ? <BsChevronDoubleDown /> : <BsChevronDoubleUp />}
          </button>
        </div>
        <CSSTransition
          in={isOpen}
          classNames={{
            enter: slide.enter,
            enterActive: slide.enterActive,
            exit: slide.exit,
            exitActive: slide.exitActive,
          }}
          timeout={300}
          unmountOnExit
        >
          <div className={classes.navItems}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About us</a>
            <a href="#team">Meet the team</a>
            <a href="#contact">Contact us</a>
          </div>
        </CSSTransition>
      </nav>
    </header>
  );
};

export default NavBar;
