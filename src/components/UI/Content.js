import classes from './Content.module.css';

export const Content = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};

export default Content;
