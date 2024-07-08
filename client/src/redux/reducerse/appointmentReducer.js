import {
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_FAIL,
  ADD_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
  GET_APPOINTMENT,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_SUCCESS,
  GET_APPUSER,
  GET_APPUSER_FAIL,
  GET_APPUSER_SUCCESS,
} from "../actionType";

const appState = {
  appointment: null,
  loading: false,
  errors: null,
};

const appointmentReducer = (state = appState, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENT:
      return { ...state, loading: true };
    case GET_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, appointment: payload };
    case GET_APPOINTMENT_FAIL:
      return { ...state, loading: false, errors: payload };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointment: state.appointment.filter((el) => el._id !== payload),
      };
    case EDIT_APPOINTMENT:
      return {
        ...state,
        appointment: state.appointment.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };

    case ADD_APPOINTMENT:
      return { ...state, loading: true };
    case ADD_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, appointment: payload };
    case ADD_APPOINTMENT_FAIL:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

export default appointmentReducer;
