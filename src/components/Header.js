import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { connect, useDispatch } from "react-redux";
import {
  currentWeather,
  temperatureType,
  generateIcon,
} from "../redux/actions";

const Header = ({ tempType, weathers }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentWeather());
  }, [tempType]);

  const changeTempType = (event) => {
    dispatch(temperatureType(event.target.value));
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <input className={styles.searchInput} type="text" />
          <button>Search City</button>
        </div>
        <div className={styles.celsiusContainer}>
          <div className={styles.checkboxWrapper}>
            <div>
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="metric"
                className={styles.checkBox}
                checked={tempType === "metric"}
                onChange={changeTempType}
              />
              <label for="html">°C</label>
            </div>
            <div>
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="imperial"
                checked={tempType === "imperial"}
                className={styles.checkBox}
                onChange={changeTempType}
              />
              <label for="html">°F</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default connect((state) => {
  return {
    tempType: state.weathers.type,
    weathers: state.weathers,
  };
})(Header);
