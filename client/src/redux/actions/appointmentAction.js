import axios from "axios";
import {
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_FAIL,
  ADD_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
  GET_APPOINTMENT,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_SUCCESS,
} from "../actionType";

export const getAppointment = () => async (dispatch) => {
  dispatch({
    type: GET_APPOINTMENT,
  });
  try {
    const { data } = await axios.get("/rendezvous/get_appointment");
    console.log(data);
    dispatch({
      type: GET_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APPOINTMENT_FAIL,
      payload: error.response.data,
    });
  }
};

export const removeAppointment = (_id) => async (dispatch) => {
  try {
    await axios.delete(`/rendezvous/delete_appointment/${_id}`);
    dispatch({
      type: DELETE_APPOINTMENT,
      payload: _id,
    });
  } catch (error) {
    alert("rendezvous supprimé");
  }
};

export const updateAppointment = (editedappointment) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/rendezvous/edit_appointment/${editedappointment._id}`,
      editedappointment
    );
    dispatch({
      type: EDIT_APPOINTMENT,
      payload: data,
    });
  } catch (error) {
    alert("edit rendezvous error");
    console.log(error);
  }
};

export const registreappointment = (newrendezvous) => async (dispatch) => {
  dispatch({
    type: ADD_APPOINTMENT,
  });
  try {
    const { data } = await axios.post("/rendezvous/addRDV", newrendezvous);
    dispatch({
      type: ADD_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_APPOINTMENT_FAIL,
      payload: error.response.data,
    });
  }
};
