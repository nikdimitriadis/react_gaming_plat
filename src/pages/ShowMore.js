import { useParams } from "react-router-dom";
import { useContext } from "react";
import FirstCard from "../components/ShowGame/FirstCard/FirstCard";
import ColumnFlex from "../components/UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import RowFlex from "../components/UI/LayOut/Flexes/RowFlex/RowFlex";
import FetchContext from "../data-provider/fetch-context";
import BgAll from "../components/UI/Background/BgAll";
import PCard from "../components/UI/PaddingCard/PCard";

const ShowMore = () => {
  const params = useParams();
  let plat = "PC";

  if (params.cat === "web") {
    plat = "Web Browser";
  }

  const fetchCtx = useContext(FetchContext);

  let content;
  if (fetchCtx.isLoaded) {
    content = <p>Loading...</p>;
  }

  if (fetchCtx.error) {
    content = <p>{fetchCtx.error}</p>;
  }

  const dataFromApi = fetchCtx?.fetchedData ?? {};

  content = Object.keys(dataFromApi)
    ?.filter((item) => {
      // if
      return dataFromApi[item].platform
        .toLowerCase()
        .startsWith(`${params.cat}`);
      // {
      //   return item;
      // }
    })
    .map((item) => {
      return (
        <FirstCard
          path={dataFromApi[item].id}
          key={dataFromApi[item].id}
          url={dataFromApi[item].thumbnail}
          title={dataFromApi[item].title}
          genre={dataFromApi[item].genre}
          platform={dataFromApi[item].platform}
          description={dataFromApi[item].short_description}
        />
      );
    });

  return (
    <>
      <BgAll />
      <PCard>
        <ColumnFlex>
          <h3>All {plat} games</h3>
          <RowFlex>{content}</RowFlex>
        </ColumnFlex>
      </PCard>
    </>
  );
};

export default ShowMore;
