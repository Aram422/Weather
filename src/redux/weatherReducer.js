import { actionsType } from "./constant";

const initialState = {
  type: "metric",
  icon: "",
  data: {},
  isFetching: false,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsType.CURRENT_WEATHER_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionsType.CURRENT_WEATHER:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case actionsType.CURRENT_WEATHER_START:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      };
    case actionsType.TEMP_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case actionsType.TEMP_ICON:
      console.log(action.payload, 7777474);
      return {
        ...state,
        icon: action.payload,
      };
    default:
      return state;
  }
};
