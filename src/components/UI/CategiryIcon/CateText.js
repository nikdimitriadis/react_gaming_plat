import styles from "./CateText.module.css";

const CateText = (props) => {
  return (
    <>
      <p className={styles["cate_text_cont"]}>{props.genre}</p>
    </>
  );
};

export default CateText;
