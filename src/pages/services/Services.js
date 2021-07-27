import { Element } from 'react-scroll';
import {
  BsFillAlarmFill,
  BsBrush,
  BsLayersFill,
  BsTools,
} from 'react-icons/bs';

import workshop from '../../assets/images/vendor/motorbike-workshop.jpg';
import fixing from '../../assets/images/vendor/aaron-huber-KxeFuXta4SE-unsplash.jpg';
import Content from '../../components/UI/Content';
import classes from './Services.module.css';
import ServiceOffered from './ServiceOffered';

const Services = () => {
  return (
    <section>
      <Element name="services">
        <Content>
          <h2>Our services</h2>
          <h3>Customise your dream!</h3>
          <div className={classes.servicesOffered}>
            <ServiceOffered
              icon={<BsFillAlarmFill />}
              image={fixing}
              name="Restoration"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
          dolorem?"
            />
            <ServiceOffered
              icon={<BsBrush />}
              image={workshop}
              name="Custom Paint Work"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
          dolorem?"
            />
            <ServiceOffered
              icon={<BsLayersFill />}
              image={workshop}
              name="Custom Parts"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
          dolorem?"
            />
            <ServiceOffered
              icon={<BsTools />}
              image={fixing}
              name="Fabrication"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          nam quisquam. Voluptatibus, ipsa corporis vero aperiam dolor
          dolorem?"
            />
          </div>
        </Content>
      </Element>
    </section>
  );
};

export default Services;
