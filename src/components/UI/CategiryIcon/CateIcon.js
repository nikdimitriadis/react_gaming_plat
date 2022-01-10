import iconPc from "../../../icons/iconPc.png";
import browserIcon from "../../../icons/browser.png";
import styles from "./CateIcon.module.css";

const CateIcon = (props) => {
  if (props.platform.startsWith("Web")) {
    // console.log(props.platform);
    return (
      <div className={styles["cate_icon_cont"]}>
        <img src={browserIcon} alt="web" />
      </div>
    );
  }
  if (props.platform.startsWith("PC")) {
    return (
      <div className={styles["cate_icon_cont"]}>
        <img src={iconPc} alt="pc" />
      </div>
    );
  }
};

export default CateIcon;
