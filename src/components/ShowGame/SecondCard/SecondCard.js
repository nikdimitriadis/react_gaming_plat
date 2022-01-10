import styles from "./SecondCard.module.css";
import AllCateIcons from "../../UI/CategiryIcon/AllCateIcons";
import RedButton from "../../UI/RedButton/RedButton";

const SecondCard = (props) => {
  return (
    <div className={styles["ssCard_small"]}>
      <div className={styles.image}>
        <img src={props.url} alt={props.title} />
        <div className={styles.number}>{props.number}</div>
      </div>

      <div className={styles["text_container"]}>
        <h4>{props.title}</h4>
        <RedButton text="READ MORE" path={`/allg/${props.path}`} />
        <div className={styles["icons_container"]}>
          <AllCateIcons platform={props.platform} genre={props.genre} />
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
