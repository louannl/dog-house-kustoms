import { Element } from 'react-scroll';
import Content from '../components/UI/Content';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section>
      <Element name="home">
        <Content className={classes.content}>
          <h1>Dog House Kustoms</h1>
          <p>
            East-London motorbike mechanics who are more than just passionate
          </p>
          <button className={classes.heroLink} href="#">
            Contact Us
          </button>
        </Content>
      </Element>
    </section>
  );
};

export default Hero;
