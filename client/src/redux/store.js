import { applyMiddleware, createStore } from "redux";
import rootreducer from "./reducerse/rootreducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootreducer, applyMiddleware(thunk, logger));

export default store;
