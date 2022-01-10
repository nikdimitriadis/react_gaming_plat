import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={styles.radius}>{props.children}</div>;
};

export default Card;
