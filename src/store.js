import { createStore, combineReducers } from './lib/redux.js';
import events from './creation/entity/EventsReducer.js';
import filter from './filter/entity/FilterReducer.js';
import {} from './overview/entity/OverviewReducer.js';
import { load } from './localstorage/StorageControl.js';

const deepCopy = input => JSON.parse(JSON.stringify(input));

const chainedEventsReducer = (state, action) => {
  const eventsResult = events(state, action);
  return overview(eventsResult, action);
}
const combinedReducer = combineReducers({
  events: chainedEventsReducer, 
  filter,
});

const copyingEvent = (state, action) => {
  return deepCopy(combinedReducer(state, action));
}

let initialState = load();
if (!initialState) {
  initialState = {
    events: {
      events:[]
    },
    filter: {
      filter:""}
    }
}

const GOOGLE_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(copyingEvent, initialState, GOOGLE_DEVTOOL);

export default store;