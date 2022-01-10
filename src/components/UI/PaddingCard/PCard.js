import styles from "./PCard.module.css";

const PCard = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default PCard;
