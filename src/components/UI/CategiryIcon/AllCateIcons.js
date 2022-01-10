import CateIcon from "./CateIcon";
import CateText from "./CateText";
import styles from "./AllCateIcons.module.css";

const AllCateIcons = (props) => {
  return (
    <div className={styles["icon_container"]}>
      <CateIcon platform={props.platform} />
      <CateText genre={props.genre} />
    </div>
  );
};

export default AllCateIcons;
