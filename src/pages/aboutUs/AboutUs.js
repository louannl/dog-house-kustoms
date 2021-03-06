import { Element } from 'react-scroll';
import Content from '../../components/UI/Content';
import classes from './AboutUs.module.css';
import Times from './Times';

const AboutUs = () => {
  return (
    <section>
      <Element name="about-us">
        <Content className={classes.content}>
          <h2>About us</h2>
          <div className={classes.mediaAboutus}>
            <div className={classes.location}>
              <h3>Our location</h3>
              <p>
                Located in the heart of east London, our team has over 10 years
                of combined experience so you are guaranteed to get the service
                you deserve.
              </p>
              <div className={classes.map}>
                <iframe
                  title="google map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.1331997114785!2d-0.03747263749881061!3d51.56579163778935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761dafba177e47%3A0xb029dab93c6c0032!2sThe%20Greyhound%2C%2091%20Lea%20Bridge%20Rd%2C%20Leyton%2C%20London%20E10%207QL!5e0!3m2!1sen!2suk!4v1601468974221!5m2!1sen!2suk"
                  frameborder="0"
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
            <div className={classes.openingTimes}>
              <Times />
            </div>
          </div>
        </Content>
      </Element>
    </section>
  );
};

export default AboutUs;
