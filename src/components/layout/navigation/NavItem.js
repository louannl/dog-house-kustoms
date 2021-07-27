import { Link } from 'react-scroll';
import classes from './NavBar.module.css';

const NavItem = (props) => {
  return (
    <Link
      className={classes.navItemsLink}
      activeClass={classes.active}
      to={props.link}
      spy={true}
      smooth={true}
      delay={300}
      offset={-64}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
