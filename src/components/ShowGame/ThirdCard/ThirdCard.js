import styles from "./ThirdCard.module.css";
import AllCateIcons from "../../UI/CategiryIcon/AllCateIcons";
import RedButton from "../../UI/RedButton/RedButton";

const ThirdCard = (props) => {
  return (
    <div className={styles["last_container"]}>
      <img className={styles["gameImg"]} src={props.url} alt={props.title} />

      <div className={styles["text_container"]}>
        <h4>{props.title}</h4>

        <RedButton text="READ MORE" path={`/allg/${props.path}`} />
      </div>

      <div className={styles["icons_container"]}>
        <AllCateIcons platform={props.platform} genre={props.genre} />
      </div>
    </div>
  );
};

export default ThirdCard;
