import React, { useState, useContext } from "react";
import FetchContext from "../../data-provider/fetch-context";

import fakos from "../../fakos.svg";
import home from "../../icons/Home.png";
import game from "../../icons/Games.png";
import plus from "../../icons/Recently Added.png";
import styles from "./Navs.module.css";
import logo from "../../icons/Group 15.png";
import { Link } from "react-router-dom";

const Navs = () => {
  const [isX, setIsX] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchIn, setSearchIn] = useState("");

  const fetchCtx = useContext(FetchContext);

  const changeToXHandler = () => {
    setIsX(() => !isX);
  };

  let listOfTitles;
  const searchHandler = (e) => {
    setSearchVal(e.target.value);
    if (fetchCtx.fetchedData.length > 0) {
      if (e.target.value.length > 0) {
        listOfTitles = fetchCtx.fetchedData.filter((obj) => {
          if (obj.title.includes(e.target.value)) {
            return obj;
          }
        });
      }
    }
    setSearchIn(listOfTitles);
  };

  const deleteHandler = () => {
    setSearchVal("");
  };

  console.log("skata");

  return (
    <header>
      <div className={styles.searchDiv}>
        <input value={searchVal} onChange={searchHandler} type="text" />
        <img src={fakos} alt="search" />
        <div className={styles.searchIn}>
          {searchVal &&
            searchIn.map((item, index) => {
              return (
                <Link
                  onClick={deleteHandler}
                  key={index}
                  to={`/allg/${item.id}`}
                >
                  <div>{item.title}</div>
                </Link>
              );
            })}
        </div>
      </div>

      <aside className={styles.aside}>
        <div className={styles["left-bar"]}>
          <div
            className={`${styles["menu"]} ${isX && styles["menu2"]}`}
            onClick={changeToXHandler}
          >
            <div
              className={styles[`${!isX ? "burger1" : "peristrofi1"}`]}
            ></div>
            <div
              className={styles[`${!isX ? "burger2" : "peristrofi2"}`]}
            ></div>
            <div className={styles[`${!isX ? "burger3" : "diagrafi"}`]}></div>
          </div>

          <ul className={styles.asideUl}>
            <li>
              <Link to="/">
                <div className={styles.redLink}>
                  <img src={home} />
                  <p className={styles[`${isX ? "parag" : "unPlay"}`]}>Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/allg">
                <div className={styles.redLink}>
                  <img src={game} />
                  <p className={styles[`${isX ? "parag" : "unPlay"}`]}>
                    All Games
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/recenadd">
                <div className={styles.redLink}>
                  <img src={plus} />
                  <p className={styles[`${isX ? "parag" : "unPlay"}`]}>
                    Recently Added
                  </p>
                </div>
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
        <div className={styles.logo}>
          <div className={styles["logo_flex"]}>
            <div>
              <img src={logo} alt="sss" />
            </div>
            <h1>FREE2GAME</h1>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navs;
