import styles from "./ColumnFlex.module.css";

const ColumnFlex = (props) => {
  return <div className={styles["col_cont"]}>{props.children}</div>;
};

export default ColumnFlex;
