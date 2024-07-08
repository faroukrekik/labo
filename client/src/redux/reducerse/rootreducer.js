import { combineReducers } from "redux";
import reducer from "./UserREducer";
import appointmentReducer from "./appointmentReducer";

const rootreducer = combineReducers({ reducer, appointmentReducer });

export default rootreducer;
