import iconPc from "../../../icons/iconPc.png";
import browserIcon from "../../../icons/browser.png";
import styles from "./CateIcon.module.css";

const CateIcon = (props) => {
  let imge = iconPc;
  if (props.platform.startsWith("Web")) {
    imge = browserIcon;
  }

  return (
    <div className={styles["cate_icon_cont"]}>
      <img src={imge} alt="web" />
    </div>
  );
};

export default CateIcon;
