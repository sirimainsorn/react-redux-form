import { GlobalConstant } from "./global.constant";

export const GlobalReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case GlobalConstant.SPINNER_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
