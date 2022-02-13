import { useContext } from "react";

import RedButton from "../UI/RedButton/RedButton";
import ColumnFlex from "../UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import RowFlex from "../UI/LayOut/Flexes/RowFlex/RowFlex";
import FirstCard from "../ShowGame/FirstCard/FirstCard";
import styles from "./HomeFirst.module.css";
import FetchContext from "../../data-provider/fetch-context";

const HomeFirst = () => {
  const fetchCtx = useContext(FetchContext);
  // console.log(fetchCtx.fetchedData);

  let content;
  if (fetchCtx.isLoaded) {
    content = <p>Loading...</p>;
  }

  if (fetchCtx.error) {
    content = <p>{fetchCtx.error}</p>;
  }

  const dataFromApi = fetchCtx.fetchedData;

  content = dataFromApi
    .sort((a, b) => {
      if (a.release_date < b.release_date) {
        return -1;
      }
      if (a.release_date > b.release_date) {
        return 1;
      }

      return 0;
    })
    .reverse()
    .slice(0, 4)
    .map((item) => {
      return (
        <FirstCard
          path={item.id}
          key={item.id}
          url={item.thumbnail}
          title={item.title}
          genre={item.genre}
          platform={item.platform}
          description={item.short_description}
        />
      );
    });

  return (
    <>
      <ColumnFlex>
        <h3>Recently Added</h3>
        <RowFlex>{content}</RowFlex>
        <div className={styles["div_button"]}>
          <RedButton path={`/recenadd`} text="SHOW MORE" />
        </div>
      </ColumnFlex>
    </>
  );
};

export default HomeFirst;
