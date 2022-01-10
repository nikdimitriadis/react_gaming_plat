import { useState, useEffect, useCallback } from "react";

import styles from "./Filter.module.css";

const Filter = (props) => {
  const [plat, setPlat] = useState("");
  const [cat, setCat] = useState("");
  const [sSort, setSsort] = useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const platflorHandler = (e) => {
    setPlat(e);
  };

  const catHandler = (e) => {
    setCat(e);
  };

  const sortHandler = (e) => {
    setSsort(e);
  };

  const importData = useCallback(async (fiF, secF, sosort) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?${fiF}${secF}${sosort}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key":
              "6e7d1b8ff5msheecdf788c2872c4p141777jsnbf255a2be091",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Fail to fetch data");
      }

      const data = await response.json();

      setFetchedData(() => data);
    } catch (e) {
      //   setIsLoading(false);
      //   setError(e.message);
      //   console.error(e);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    importData(plat, cat, sSort);
  }, [importData, plat, cat, sSort]);

  props.func(fetchedData);

  //   console.log(fetchedData);

  return (
    <div className={styles.bigDiv}>
      <div className={styles.rel}>
        <div>
          <label htmlFor="platform">Choose Platform:</label>
          <select
            onChange={(e) => platflorHandler(e.target.value)}
            name="platform"
            id="platform"
          >
            <option value="">Choose Platform</option>
            <option value="platform=browser">Web Broweser</option>
            <option value="platform=pc">PC (Windows)</option>
          </select>
        </div>
      </div>
      <div className={styles.rel}>
        <div>
          <label htmlFor="category">Choose Category:</label>
          <select
            onChange={(e) => catHandler(e.target.value)}
            name="category"
            id="category"
          >
            <option value="">Choose Category</option>
            <option value="&category=MMO">MMO</option>
            <option value="&category=MMORPG">MMORPG</option>
            <option value="&category=MOBA">MOBA</option>
            <option value="&category=Shooter">Shooter</option>
            <option value="&category=Strategy">Strategy</option>
            <option value="&category=Racing">Racing</option>
            <option value="&category=Social">Social</option>
            <option value="&category=Sports">Sports</option>
            <option value="&category=Fighting">Fighting</option>
          </select>
        </div>
      </div>
      <div className={styles.rel}>
        <div>
          <label htmlFor="category">Sorted By:</label>
          <select
            onChange={(e) => sortHandler(e.target.value)}
            name="category"
            id="category"
          >
            <option value="">Sort By</option>
            <option value="&sort-by=relevance">Relevance</option>
            <option value="&sort-by=popularity">Popularity</option>
            <option value="&sort-by=release-date">Release Date</option>
            <option value="&sort-by=alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
