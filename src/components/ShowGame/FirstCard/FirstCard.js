import styles from "./FirstCard.module.css";
import RedButton from "../../UI/RedButton/RedButton";
import AllCateIcons from "../../UI/CategiryIcon/AllCateIcons";

const FirstCard = (props) => {
  return (
    <div className={styles["first_container"]}>
      <img className={styles["gameImg"]} src={props.url} alt={props.title} />

      <div className={styles["text_container"]}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>

        <RedButton text="READ MORE" path={`/allg/${props.path}`} />
      </div>

      <div className={styles["icons_container"]}>
        <AllCateIcons platform={props.platform} genre={props.genre} />
      </div>
    </div>
  );
};
export default FirstCard;
