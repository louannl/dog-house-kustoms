import { Element } from 'react-scroll';
import Content from '../components/UI/Content';
import classes from './Services.module.css';

const Services = () => {
  return (
    <section>
      <Element name="services">
        <Content className={classes.content}>
          <h2>Our services</h2>
          <div class="section-comments">
            <h3>Customise your dream!</h3>
            <ul>
              <li>
                <ion-icon
                  name="refresh-circle"
                  class="services-icon"
                ></ion-icon>
                Restoration
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
              <li>
                <ion-icon name="brush" class="services-icon"></ion-icon>Custom
                Paint Work
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
              <li>
                <ion-icon name="hammer" class="services-icon"></ion-icon>Custom
                parts
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
              <li>
                <ion-icon name="cut" class="services-icon"></ion-icon>
                Fabrication and modding
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
            </ul>
          </div>
        </Content>
      </Element>
    </section>
  );
};

export default Services;
