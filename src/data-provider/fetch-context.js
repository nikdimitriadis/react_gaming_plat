import React, { useState, useCallback, useEffect } from "react";

const FetchContext = React.createContext({
  data: [],
  error: true,
  isLoading: true,
});

export const FetchContextProvider = (props) => {
  // fetching
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  //   fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date", {
  // 	"method": "GET",
  // 	"headers": {
  // 		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  // 		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
  // 	}
  // })

  const importData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
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
      setFetchedData(data);
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
      console.error(e);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    importData();
  }, [importData]);

  const fetchValue = {
    fetchedData,
    isLoaded,
    error,
  };

  return (
    <FetchContext.Provider value={fetchValue}>
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchContext;
