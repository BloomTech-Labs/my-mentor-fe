import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [logger, thunk];

const store = createStore(applyMiddleware(...middlewares));

export default store;
