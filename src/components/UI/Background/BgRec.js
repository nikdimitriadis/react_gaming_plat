import bgRec from "../../../icons/recAd.png";
import styles from "./Bg.module.css";

//! TODO: DINAMIKO text k bg photo

const BgRec = (props) => {
  return (
    <div className={styles["bg_container"]}>
      <img src={bgRec} alt="gaming_bg" />
      <h1>Recently Added</h1>
    </div>
  );
};

export default BgRec;
