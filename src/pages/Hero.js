import { Element, Link } from 'react-scroll';
import Content from '../components/UI/Content';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section>
      <Element name="home">
        <Content className={classes.content}>
          <h1>Dog House Kustoms</h1>
          <p>
            East London motorbike mechanics who are more than just passionate...
          </p>
          <Link
            className={classes.heroLink}
            to="contact-us"
            smooth={true}
            offset={-100}
          >
            Contact Us
          </Link>
        </Content>
      </Element>
    </section>
  );
};

export default Hero;
