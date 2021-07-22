import { Element } from 'react-scroll';
import Content from '../components/UI/Content';
import classes from './MeetTheTeam.module.css';

const MeetTheTeam = () => {
  return (
    <section>
      <Element name="Meet-the-team">
        <Content className={classes.content}>
          <h2>Meet the team</h2>
          <div class="section-comments">
            <div class="photo-card">
              <img src="Resources/img/lewis.png" alt="lewis" />
              <h3>Lewis Loizou</h3>
              <p>Something something something darkside</p>
            </div>
            <div class="photo-card">
              <img src="Resources/img/linus2.png" alt="linus" />
              <h3>Linus Blazeys</h3>
              <p>Something something something something</p>
            </div>
          </div>
        </Content>
      </Element>
    </section>
  );
};

export default MeetTheTeam;
