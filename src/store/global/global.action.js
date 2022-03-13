export const GlobalAction = {
  setLoading(payload) {
    return {
      type: "SPINNER_LOADING",
      payload: payload,
    };
  },
  changeFormCodeData(payload) {
    return {
      type: "CHANGE_FORM_CODE_DATA",
      payload: payload,
    };
  },
};
