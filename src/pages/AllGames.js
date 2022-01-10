import { useContext, useState } from "react";
import FirstCard from "../components/ShowGame/FirstCard/FirstCard";
import ColumnFlex from "../components/UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import RowFlex from "../components/UI/LayOut/Flexes/RowFlex/RowFlex";
import FetchContext from "../data-provider/fetch-context";
import BgAll from "../components/UI/Background/BgAll";
import PCard from "../components/UI/PaddingCard/PCard";
import Filter from "../components/Filter/Filter";

const AllGames = () => {
  const [dataFilter, setDataFilter] = useState([]);
  const fetchCtx = useContext(FetchContext);

  let content;
  if (fetchCtx.isLoaded) {
    content = <p>Loading...</p>;
  }

  if (fetchCtx.error) {
    content = <p>{fetchCtx.error}</p>;
  }

  const dataFunction = (data) => {
    setDataFilter(() => data);
  };

  if (fetchCtx.fetchedData.length > 0) {
    content = (
      <>
        <Filter func={dataFunction} />
        <h3>All Games</h3>

        <RowFlex>
          {Object.keys(dataFilter)?.map((item) => {
            return (
              <FirstCard
                path={dataFilter[item].id}
                key={dataFilter[item].id}
                url={dataFilter[item].thumbnail}
                title={dataFilter[item].title}
                genre={dataFilter[item].genre}
                platform={dataFilter[item].platform}
                description={dataFilter[item].short_description}
              />
            );
          })}
        </RowFlex>
      </>
    );
  }

  return (
    <>
      <BgAll />
      <PCard>
        <ColumnFlex>{content}</ColumnFlex>
      </PCard>
    </>
  );
};

export default AllGames;
