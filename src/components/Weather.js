import React from "react";
import { connect } from "react-redux";
import styles from "./Weather.module.css";

const Weather = ({ weathers, tempType, icon }) => {
  const tempViewer = () => {
    console.log(icon, "icon");
    return `${Math.floor(weathers?.main?.temp)} ${
      tempType === "metric" ? "°C" : "°F"
    }`;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.weathersCard}>
        <div>{weathers?.name}</div>
        <div>{tempViewer()}</div>
      </div>
    </div>
  );
};

export default connect((state) => {
  console.log(state);
  return {
    weathers: state.weathers.data,
    tempType: state.weathers.type,
    icon: state.icon,
  };
})(Weather);
