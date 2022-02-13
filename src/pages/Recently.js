import { useContext } from "react";
import FirstCard from "../components/ShowGame/FirstCard/FirstCard";
import ColumnFlex from "../components/UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import RowFlex from "../components/UI/LayOut/Flexes/RowFlex/RowFlex";
import PCard from "../components/UI/PaddingCard/PCard";
import FetchContext from "../data-provider/fetch-context";
import BgRec from "../components/UI/Background/BgRec";

const Recently = () => {
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
    .slice(0, 30)
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
      <BgRec />
      <PCard>
        <ColumnFlex>
          <h3>Recently Added</h3>
          <RowFlex>{content}</RowFlex>
        </ColumnFlex>
      </PCard>
    </>
  );
};

export default Recently;
