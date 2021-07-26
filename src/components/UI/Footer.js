import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from 'react-icons/ai';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes}>
      <div>
        <AiFillFacebook className={classes.footerLinks} />
        <AiFillTwitterCircle className={classes.footerLinks} />
        <AiFillGoogleCircle className={classes.footerLinks} />
        <AiFillInstagram className={classes.footerLinks} />
      </div>
      <div>
        <p>Copyright &copy; 2020 by DogHouseKustoms. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
