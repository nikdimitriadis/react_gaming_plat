import allBg from "../../../icons/allg.png";
import styles from "./Bg.module.css";

//! TODO: DINAMIKO text k bg photo

const Bg = (props) => {
  return (
    <div className={styles["bg_container"]}>
      <img src={allBg} alt="gaming_bg" />
      <h1>ALL GAMES</h1>
    </div>
  );
};

export default Bg;
