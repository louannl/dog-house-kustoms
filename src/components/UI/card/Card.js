import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div class={classes.photoCard}>
      <img src={props.image} alt={props.name} />
      <div className={classes.description}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
