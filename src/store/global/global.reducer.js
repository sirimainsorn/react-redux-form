import { GlobalConstant } from "./global.constant";

export const GlobalReducer = (
  state = {
    isLoading: false,
    formCodeData: {
      firstName: "",
      lastName: "",
      email: "",
    },
  },
  action
) => {
  switch (action.type) {
    case GlobalConstant.SPINNER_LOADING:
      return { ...state, isLoading: action.payload };

    case GlobalConstant.CHANGE_FORM_CODE_DATA:
      return {
        ...state,
        formCodeData: {
          ...state.formCodeData,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return state;
  }
};
