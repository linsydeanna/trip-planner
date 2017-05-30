import { combineReducers, createStore, applyMiddleware } from 'redux';
import cards from "../reducers/cards";
import user from "../reducers/user";
import logger from "redux-logger";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  cards,
  user
});

const defaultState = {
  cards: [],
  user: {}
};

const store = createStore(rootReducer, defaultState, applyMiddleware(logger));

export default store;
