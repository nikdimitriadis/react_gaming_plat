import styles from "./SecondCardBig.module.css";
import RedButton from "../../UI/RedButton/RedButton";
import AllCateIcons from "../../UI/CategiryIcon/AllCateIcons";

const SecondCardBig = (props) => {
  return (
    <div className={styles.bigF}>
      <img className={styles["big_img"]} src={props.url} alt="bigone" />
      <div></div>
      <div className={styles["text_container"]}>
        <h4>{props.title}</h4>

        <RedButton text="READ MORE" path={`/allg/${props.path}`} />

        <div className={styles["icons_container"]}>
          <AllCateIcons platform={props.platform} genre={props.genre} />
        </div>
      </div>

      <div className={styles.number}>{props.number}</div>
    </div>
  );
};

export default SecondCardBig;
