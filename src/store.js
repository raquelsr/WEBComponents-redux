import { createStore } from './lib/redux.js';

const deepCopy = input => JSON.parse(JSON.stringify(input));

const events = (state = {events: []}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'NEW_EVENT_CREATED': 
      return deepCopy({
        events: state.events.concat(payload)
      });
  }
  console.log(state, action);
  return state;
}

const GOOGLE_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(events, GOOGLE_DEVTOOL);

export default store;