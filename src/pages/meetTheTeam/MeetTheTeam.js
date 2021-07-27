import { Element } from 'react-scroll';
import Content from '../../components/UI/Content';
import classes from './MeetTheTeam.module.css';
import lewis from '../../assets/images/lewis.png';
import linus from '../../assets/images/linus.png';
import Card from '../../components/UI/card/Card';

const description = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

const MeetTheTeam = () => {
  return (
    <section>
      <Element name="meet-the-team">
        <Content className={classes.content}>
          <h2>Meet the team</h2>
          <div className={classes.teamCards}>
            <Card image={lewis} name="Lewis Loizou" description={description} />
            <Card
              image={linus}
              name="Linus Blazeys"
              description={description}
            />
          </div>
        </Content>
      </Element>
    </section>
  );
};

export default MeetTheTeam;
