import { combineReducers } from "redux";
import { GlobalReducer } from "./global/global.reducer";

export const reducers = combineReducers({
  GlobalReducer: GlobalReducer,
});
