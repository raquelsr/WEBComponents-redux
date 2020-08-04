import { createStore } from './lib/redux.js';
import events from './creation/entity/EventsReducer.js';

const GOOGLE_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(events, GOOGLE_DEVTOOL);

export default store;