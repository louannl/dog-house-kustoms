import { Element } from 'react-scroll';
import Content from '../components/UI/Content';
import classes from './MeetTheTeam.module.css';
import lewis from '../assets/images/lewis.png';
import linus from '../assets/images/linus.png';

const MeetTheTeam = () => {
  return (
    <section>
      <Element name="meet-the-team">
        <Content className={classes.content}>
          <h2>Meet the team</h2>
          <div>
            <div class={classes.photoCard}>
              <img src={lewis} alt="lewis" />
              <h3>Lewis Loizou</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class={classes.photoCard}>
              <img src={linus} alt="linus" />
              <h3>Linus Blazeys</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Content>
      </Element>
    </section>
  );
};

export default MeetTheTeam;
