import { actionsType } from "./constant";

export const currentWeather = () => async (dispatch, getState) => {
  const { weathers } = getState();
  try {
    dispatch({ type: actionsType.CURRENT_WEATHER_START });

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=967dd0b59c648291b706d8f98adfbf89&units=${weathers.type}`
    );
    const data = await response.json();
    dispatch({ type: actionsType.CURRENT_WEATHER, payload: data });
  } catch (error) {
    dispatch({ type: actionsType.CURRENT_WEATHER_START, payload: error });
  }
};

export const temperatureType = (type) => async (dispatch) => {
  dispatch({ type: actionsType.TEMP_TYPE, payload: type });
};
export const generateIcon = (id) => async (dispatch) => {
  const response = await fetch(`http://openweathermap.org/img/w/${id}.png`);
  const data = response.url;

  dispatch({ type: actionsType.TEMP_ICON, payload: data });
};
