import styles from "./Bg.module.css";

//! TODO: DINAMIKO text k bg photo

const DetailBg = (props) => {
  return (
    <div className={styles["bg_container"]}>
      <img src={props.sreenOne} alt="gaming_bg" />
    </div>
  );
};

export default DetailBg;
