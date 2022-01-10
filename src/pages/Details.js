import PCard from "../components/UI/PaddingCard/PCard";
import DetailBg from "../components/UI/Background/DetailBg";
import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import ColumnFlex from "../components/UI/LayOut/Flexes/ColumnFlex/ColumnFlex";
import styles from "./Details.module.css";
// import Layout from "../components/UI/LayOut/Layout";

const Details = () => {
  const params = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const importData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`,
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
  }, [params.id]);

  let content;

  if (isLoaded) {
    content = <p>Loading...</p>;
    console.log("1");
  }

  if (error) {
    content = <p>{error.message}</p>;
  }

  const dataFromApi = fetchedData ?? {};

  let platInf = true;

  if (dataFromApi.id) {
    if (dataFromApi.platform.startsWith("Web")) {
      platInf = false;
    }
    content = (
      <article className={styles.detailArt}>
        <DetailBg sreenOne={dataFromApi.screenshots[0].image} />
        <PCard>
          <ColumnFlex>
            <h1>{dataFromApi.title}</h1>
            <div className={styles.doubleFlex}>
              <div className={styles.firstInFlex}>
                <img src={dataFromApi.thumbnail} alt={dataFromApi.title} />
                <h3>Platform {dataFromApi.platform}</h3>
                <div className={styles["genre_details"]}>
                  {dataFromApi.genre}
                </div>
                <div>
                  <a href={dataFromApi.freetogame_profile_url} target="_blank">
                    PLAY NOW
                  </a>
                </div>
              </div>
              <div className={styles.aboutContent}>
                <h3>About</h3>
                <p>{dataFromApi.description}</p>
              </div>
            </div>

            <div className={styles.dbleImg}>
              <img src={dataFromApi.screenshots[1].image} alt="action1" />
              <img src={dataFromApi.screenshots[2].image} alt="action2" />
            </div>

            <footer className={styles.footer}>
              <div className={styles.footerFirstDiv}>
                <h3>Additional Information</h3>
                <p>{dataFromApi.short_description}</p>
                <h4>
                  Developer <span>{dataFromApi.developer}</span>
                </h4>
                <h4>
                  Publisher <span>{dataFromApi.publisher}</span>
                </h4>
                <h4>
                  Release Date <span>{dataFromApi.release_date}</span>
                </h4>
              </div>
              {platInf && (
                <div className={styles.footerSecDiv}>
                  <h3>
                    Minimum System Requirements <br /> {dataFromApi.platform}
                  </h3>
                  <div className={styles.dbleImg}>
                    <div className={styles.firstList}>
                      <div className={styles.minDiv}>
                        <h4>OS</h4>
                        <p> {dataFromApi.minimum_system_requirements.os}</p>
                      </div>
                      <div className={styles.minDiv}>
                        <h4>memory</h4>
                        <p> {dataFromApi.minimum_system_requirements.memory}</p>
                      </div>
                      <div className={styles.minDiv}>
                        <h4>Storage</h4>
                        <p>
                          {" "}
                          {dataFromApi.minimum_system_requirements.storage}
                        </p>
                      </div>
                    </div>
                    <div className={styles.secondList}>
                      <div className={styles.minDiv}>
                        <h4>Processor</h4>
                        <p>
                          {dataFromApi.minimum_system_requirements.processor}
                        </p>
                      </div>
                      <div className={styles.minDiv}>
                        <h4>Graphics</h4>
                        <p>
                          {" "}
                          {dataFromApi.minimum_system_requirements.graphics}
                        </p>
                      </div>
                      <div className={styles.minDiv}>
                        <h4>Additional Notes</h4>
                        <p> Specifications may change during development</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </footer>
          </ColumnFlex>
        </PCard>
      </article>
    );

    console.log(dataFromApi);
  }

  useEffect(() => {
    importData();
  }, [importData]);

  return <>{content}</>;
};

export default Details;
