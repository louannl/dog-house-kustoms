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

  let width = window.innerWidth;

  let navBar = (
    <div className={classes.navItems}>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About us</a>
      <a href="#team">Meet the team</a>
      <a href="#contact">Contact us</a>
    </div>
  );

  return (
    <nav>
      <div className={classes.navRibbon}>
        <img src={pawWhite} alt="pawprint" className={classes.navigationLogo} />
        <button className={classes.mobileNavIcon} onClick={toggleMenu}>
          {isOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
        </button>
      </div>
      {width > 767 ? (
        navBar
      ) : (
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
          {navBar}
        </CSSTransition>
      )}
    </nav>
  );
};

export default NavBar;
