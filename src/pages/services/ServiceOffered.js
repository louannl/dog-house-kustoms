import React from 'react';
import classes from './Services.module.css';

const ServiceOffered = (props) => {
  return (
    <div className={classes.serviceCard}>
      <img src={props.image} alt="workshop" />
      <div className={classes.service}>
        <div className={classes.title}>
          <span className={classes.Icon}>{props.icon}</span>
          <div>{props.name}</div>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceOffered;
