import { createStore, combineReducers } from 'redux';
import todo from './todo';

const reducers = combineReducers({
  todo: todo
});

const store = createStore(reducers);

export default store;