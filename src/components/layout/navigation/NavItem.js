import { Link } from 'react-scroll';
import classes from './NavBar.module.css';

const NavItem = (props) => {
  return (
    <Link
      className={classes.navItemsLink}
      activeClass={classes.navItemsLink}
      to={props.link}
      spy={true}
      smooth={true}
      offset={-100}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
