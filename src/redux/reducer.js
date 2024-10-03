import { combineReducers } from "redux";
import weathers from "./weatherReducer";

export const rootReducer = combineReducers({ weathers });
