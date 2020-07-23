import axios from "axios";
import { FETCH_USER } from "./types";

//action creator
export const fetchUser = () => async (dispatch) => {
  //dispatch an action when this api request is completed
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
  //I know apps called actions
  // but where is authreducer called?
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
  //dispatch an action with type FETCH_USER with user model
  //res.data is user model
  //reducer is called
};
