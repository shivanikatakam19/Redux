import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { thunk } from 'redux-thunk';
import { rootReducer } from "./RootReducer";
import logger from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))