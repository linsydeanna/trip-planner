import { combineReducers, createStore, applyMiddleware } from 'redux';
import cards from "../reducers/cards";
import logger from "redux-logger";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  cards
});

const defaultState = {
  cards: []
};

const store = createStore(rootReducer, defaultState, applyMiddleware(logger));

export default store;
