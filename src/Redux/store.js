import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combinedReducer from "./reducers";



const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combinedReducer, storeEnhancers(applyMiddleware(thunk)));