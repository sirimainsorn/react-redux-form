import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { GlobalReducer } from "./global/global.reducer";

export const reducers = combineReducers({
  form: formReducer,
  GlobalReducer: GlobalReducer,
});
