import lolBg from "../../../icons/LOL.png";
import styles from "./Bg.module.css";

//! TODO: DINAMIKO text k bg photo

const Bg = (props) => {
  return (
    <div className={styles["bg_container"]}>
      <img src={lolBg} alt="gaming_bg" />
      <h1>Find & track the best free-to-play games!</h1>
    </div>
  );
};

export default Bg;
