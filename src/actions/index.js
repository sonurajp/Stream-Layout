import streams from "../apis/streams";
import history from "../history";
export const SignInAction = (userId) /*video 225*/ => {
  return { type: "SIGN_IN", payload: userId };
};
export const SignOutAction = () => {
  return { type: "SIGN_OUT" };
};
export const createStream = (formvalues) /*why use formVlues Q8 */ => async (
  dispatch,
  getState
) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formvalues, userId }); //  small explanation on post video 253 4:10
  dispatch({ type: "CREATE_STREAM", payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

export const editStreams = (id, formvalues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formvalues); //why use patch intead of put 273
  dispatch({ type: "EDIT_STREAMS", payload: response.data });
  history.push("/");
};

export const deleteStreams = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
  history.push("/");
};

// explanation on how these actionCreators generaly work in video 246
