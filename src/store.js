import { createStore, combineReducers } from './lib/redux.js';
import events from './creation/entity/EventsReducer.js';
import filter from './filter/entity/FilterReducer.js';

const deepCopy = input => JSON.parse(JSON.stringify(input));

const combinedReducer = combineReducers({events, filter});

const copyingEvent = (state, action) => {
  return deepCopy(combinedReducer(state, action));
}

const GOOGLE_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(copyingEvent, GOOGLE_DEVTOOL);

export default store;