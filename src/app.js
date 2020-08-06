import './creation/boundary/NewEvent.js';
import './overview/boundary/EventsOverview.js';
import { save } from './localstorage/StorageControl.js';
import store from './store.js';

store.subscribe(() => {
  const state = store.getState();
  save(state);
});