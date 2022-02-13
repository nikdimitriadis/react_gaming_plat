import { useContext } from "react";
import FetchContext from "../../data-provider/fetch-context";

import RedButton from "../UI/RedButton/RedButton";
import ColumnFlex from "../UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import RowFlex from "../UI/LayOut/Flexes/RowFlex/RowFlex";
import ThirdCard from "../ShowGame/ThirdCard/ThirdCard";
import styles from "../HomeFirstDiv/HomeFirst.module.css";

const HomeThird = () => {
  const fetchCtx = useContext(FetchContext);

  let content;

  if (fetchCtx.isLoaded) {
    content = <p>Loading...</p>;
  }

  if (fetchCtx.error) {
    content = <p>{fetchCtx.error}</p>;
  }
  const dataFromApi = fetchCtx.fetchedData;

  content = dataFromApi
    .filter((item) => {
      return (
        item.platform.startsWith("Web") && item.release_date.startsWith("201")
      );
    })
    .reverse()
    .slice(0, 4)
    .map((item) => {
      return (
        <ThirdCard
          path={item.id}
          key={item.id}
          url={item.thumbnail}
          title={item.title}
          genre={item.genre}
          platform={item.platform}
        />
      );
    });

  return (
    <>
      <ColumnFlex>
        <h3>Top 4 Games for Browser</h3>
        <RowFlex>{content}</RowFlex>
        <div className={styles["div_button"]}>
          <RedButton path={`/showmore/web`} text="SHOW MORE" />
        </div>
      </ColumnFlex>
    </>
  );
};

export default HomeThird;
