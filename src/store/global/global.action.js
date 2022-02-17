export const GlobalAction = {
  setLoading(payload) {
    return {
      type: "SPINNER_LOADING",
      payload: payload,
    };
  },
};
