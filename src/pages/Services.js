import { Element } from 'react-scroll';
import {
  BsFillAlarmFill,
  BsBrush,
  BsLayersFill,
  BsTools,
} from 'react-icons/bs';

import Content from '../components/UI/Content';
import classes from './Services.module.css';

const Services = () => {
  return (
    <section className={classes.service}>
      <Element name="services">
        <Content className={classes.content}>
          <h2 className={classes.service}>Our services</h2>
          <div class="section-comments">
            <h3>Customise your dream!</h3>
            <ul className={classes.servicesOffered}>
              <li>
                <BsFillAlarmFill className={classes.Icon} />
                Restoration
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
              <li>
                <BsBrush className={classes.Icon} />
                Custom Paint Work
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
              <li>
                <BsLayersFill className={classes.Icon} />
                Custom parts
              </li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
                dolorem?
              </p>
              <li>
                <BsTools className={classes.Icon} />
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
