import { Fragment } from 'react';
import classes from './AboutUs.module.css';

const Times = () => {
  const openingTimes = [
    { day: 'Monday', hours: '8AM - 6PM' },
    { day: 'Tuesday', hours: '8AM - 6PM' },
    { day: 'Wednesday', hours: '8AM - 6PM' },
    { day: 'Thursday', hours: '8AM - 6PM' },
    { day: 'Friday', hours: '8AM - 6PM' },
    { day: 'Saturday', hours: '9AM - 5PM' },
    { day: 'Sunday', hours: '10AM - 5PM' },
  ];

  let times = [];

  openingTimes.forEach((day) => {
    times.push(
      <div className={classes.time}>
        <div className={classes.day}>{day.day}</div>
        <div className={classes.hours}>{day.hours}</div>
      </div>
    );
  });

  return (
    <Fragment>
      <h3>Opening Hours</h3>
      {times}
    </Fragment>
  );
};

export default Times;
