import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") }; // Q10
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload }; //explanation on this es syntax video 245,246,247
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAMS":
      return { ...state, [action.payload.id]: action.payload }; //Q14
    case "DELETE_STREAM":
      return _.omit(state, action.payload); //Y used action.payload and omit explanation Q9
    default:
      return state;
  }
};
