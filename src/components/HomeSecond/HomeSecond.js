import { useContext } from "react";
import FetchContext from "../../data-provider/fetch-context";

import styles from "./HomeSecond.module.css";
import ColumnFlex from "../UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import RedButton from "../UI/RedButton/RedButton";
import SecondCardBig from "../ShowGame/SecondCard/SecondCardBig";
import SecondCard from "../ShowGame/SecondCard/SecondCard";

const HomeSecond = () => {
  const fetchCtx = useContext(FetchContext);

  let content;
  let bigContent;
  let contentSmall;
  if (fetchCtx.isLoaded) {
    content = <p>Loading...</p>;
  }

  if (fetchCtx.error) {
    content = <p>{fetchCtx.error}</p>;
  }
  const dataFromApi = fetchCtx?.fetchedData;

  if (dataFromApi.length > 0) {
    content = dataFromApi.filter((item) => {
      return (
        item.platform.startsWith("PC") && item.release_date.startsWith("2021")
      );
    });

    bigContent = content.slice(0, 1).map((item, index) => {
      return (
        <SecondCardBig
          key={item.id}
          title={item.title}
          genre={item.genre}
          platform={item.platform}
          url={item.thumbnail}
          number={`${index + 1}`}
          path={item.id}
        />
      );
    });

    contentSmall = content.slice(1, 4).map((item, index) => {
      return (
        <SecondCard
          number={`${index + 2} `}
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
  }

  console.log();
  return (
    <ColumnFlex>
      <h3>Top 4 Games for PC in 2021</h3>
      <div className={styles["first_split_cont"]}>
        <div className={styles["big_solo_cont"]}>{bigContent}</div>
        <div className={styles["three_cont"]}>{contentSmall}</div>
      </div>
      <div className={styles["div_button"]}>
        <RedButton path={`/showmore/pc`} text="SHOW MORE" />
      </div>
    </ColumnFlex>
  );
};

export default HomeSecond;
