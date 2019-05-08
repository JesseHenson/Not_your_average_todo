import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers'
import thunk from "redux-thunk";
import todoReducer from './reducers'



const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(todoReducer, storeEnhancers(applyMiddleware(thunk)));