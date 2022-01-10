import styles from "./RowFlex.module.css";

const RowFlex = (props) => {
  return <div className={styles.rowFlex}>{props.children}</div>;
};

export default RowFlex;
