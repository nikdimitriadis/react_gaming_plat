import { Link } from "react-router-dom";
import styles from "./RedButton.module.css";

const RedButton = (props) => {
  return (
    <Link className={styles.redButton} to={`${props.path}`}>
      {props.text}
    </Link>
  );
};

export default RedButton;
