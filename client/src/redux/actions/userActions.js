import {
  GETPROF,
  GETPROF_FAIL,
  GETPROF_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTRE,
  REGISTRE_FAIL,
  REGISTRE_SUCCESS,
} from "../actionType";
import axios from "axios";

export const registerUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTRE,
  });
  try {
    const { data } = await axios.post("/user/register", newUser);
    dispatch({
      type: REGISTRE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRE_FAIL,
      payload: error.response.data,
    });
  }
};

export const loginUser = (loggedUser) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const { data } = await axios.post("/user/login", loggedUser);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GETPROF,
  });
  try {
    const { data } = await axios.get("/user/auth", config);
    dispatch({
      type: GETPROF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GETPROF_FAIL,
      payload: error.response.data,
    });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {}
};
