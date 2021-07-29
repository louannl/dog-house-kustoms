import { BsX, BsList } from 'react-icons/bs';
import classes from './NavBar.module.css';
import pawWhite from '../../../assets/images/vendor/Dog-Paw-Print-white.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import slide from '../../transitions/slide.module.css';
import shift from '../../transitions/shift.module.css';
import NavItem from './NavItem';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  let width = window.innerWidth;

  let navBar = (
    <div className={classes.navItems}>
      <NavItem link="home" onClick={toggleMenu}>
        Home
      </NavItem>
      <NavItem link="services" onClick={toggleMenu}>
        Services
      </NavItem>
      <NavItem link="about-us" onClick={toggleMenu}>
        About us
      </NavItem>
      <NavItem link="meet-the-team" onClick={toggleMenu}>
        Meet the team
      </NavItem>
      <NavItem link="contact-us" onClick={toggleMenu}>
        Contact us
      </NavItem>
    </div>
  );

  return (
    <nav>
      <div className={classes.content}>
        <div className={classes.navRibbon}>
          <img
            src={pawWhite}
            alt="pawprint"
            className={classes.navigationLogo}
          />
          <button className={classes.mobileNavIcon} onClick={toggleMenu}>
            <CSSTransition
              in={isOpen}
              classNames={{
                enter: shift.enter,
                enterActive: shift.enterActive,
                exit: shift.exit,
                exitActive: shift.exitActive,
              }}
              timeout={300}
            >
              {isOpen ? <BsX /> : <BsList />}
            </CSSTransition>
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
      </div>
    </nav>
  );
};

export default NavBar;
