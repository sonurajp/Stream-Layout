const INTIAL_STATE = {
  status: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, status: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, status: false, userId: null };
    default:
      return state;
  }
};
