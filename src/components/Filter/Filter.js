import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";

const Filter = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isFiltering = queryParams.get("platform");
  const isFilteringSecond = queryParams.get("category");
  const isFilteringSort = queryParams.get("sort");

  // const [plat, setPlat] = useState("");
  // const [cat, setCat] = useState("");
  // const [sSort, setSsort] = useState("");

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const platflorHandler = (e) => {
    // setPlat(e);
    test(e, isFilteringSecond, isFilteringSort);
  };

  const catHandler = (e) => {
    // setCat(e);
    test(isFiltering, e, isFilteringSort);
  };

  const sortHandler = (e) => {
    // setSsort(e);
    test(isFiltering, isFilteringSecond, e);
  };

  //   !!!
  const test = useCallback((a, b, c) => {
    const params = {
      platform: "",
      category: "",
      sort: "",
    };
    if (a !== "") {
      params.platform = a;
    }
    if (a === "" || a === null) {
      delete params.platform;
    }
    if (b !== "") {
      params.category = b;
    }

    if (b === "" || b === null) {
      delete params.category;
    }
    if (c !== "") {
      params.sort = c;
    }
    if (c === "" || c === null) {
      delete params.sort;
    }

    navigate({
      pathname: "/allg",
      search: `?${createSearchParams(params)}`,
    });
  }, []);
  //   !!!!

  const importData = useCallback(async (a, b, c) => {
    let firstFiler = "";
    let secondFilterCat = "";
    let thirdSort = "";
    if (a) {
      firstFiler = a;
    }
    if (b) {
      secondFilterCat = "&" + b;
    }
    if (c) {
      thirdSort = "&" + c;
    }
    // setIsLoading(true);
    // setError(null);

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?${firstFiler}${secondFilterCat}${thirdSort}`,
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
      // setIsLoading(false);
      // setError(e.message);
      // console.error(e);
    }

    // setIsLoading(false);
  }, []);

  useEffect(() => {
    importData(isFiltering, isFilteringSecond, isFilteringSort);
  }, [importData, isFiltering, isFilteringSecond, isFilteringSort]);

  props.func(fetchedData);

  //   console.log(fetchedData);

  return (
    <>
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
              <option
                selected={isFiltering === "platform=browser"}
                value="platform=browser"
              >
                Web Broweser
              </option>
              <option
                selected={isFiltering === "platform=pc"}
                value="platform=pc"
              >
                PC (Windows)
              </option>
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
              <option
                selected={isFilteringSecond === "category=MMO"}
                value="category=MMO"
              >
                MMO
              </option>
              <option
                selected={isFilteringSecond === "category=MMORPG"}
                value="category=MMORPG"
              >
                MMORPG
              </option>
              <option
                selected={isFilteringSecond === "category=MOBA"}
                value="category=MOBA"
              >
                MOBA
              </option>
              <option
                selected={isFilteringSecond === "category=Shooter"}
                value="category=Shooter"
              >
                Shooter
              </option>
              <option
                selected={isFilteringSecond === "category=Strategy"}
                value="category=Strategy"
              >
                Strategy
              </option>
              <option
                selected={isFilteringSecond === "category=Racing"}
                value="category=Racing"
              >
                Racing
              </option>
              <option
                selected={isFilteringSecond === "category=Social"}
                value="category=Social"
              >
                Social
              </option>
              <option
                selected={isFilteringSecond === "category=Sports"}
                value="category=Sports"
              >
                Sports
              </option>
              <option
                selected={isFilteringSecond === "category=Fighting"}
                value="category=Fighting"
              >
                Fighting
              </option>
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
              <option
                selected={isFilteringSort === "sort-by=relevance"}
                value="sort-by=relevance"
              >
                Relevance
              </option>
              <option
                selected={isFilteringSort === "sort-by=popularity"}
                value="sort-by=popularity"
              >
                Popularity
              </option>
              <option
                selected={isFilteringSort === "sort-by=release-date"}
                value="sort-by=release-date"
              >
                Release Date
              </option>
              <option
                selected={isFilteringSort === "sort-by=alphabetical"}
                value="sort-by=alphabetical"
              >
                Alphabetical
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
