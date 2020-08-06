import store from '../../store.js';
import { NEW_EVENT_CREATED } from '../entity/EventsReducer.js';
import { save } from '../../localstorage/StorageControl.js';

const createEvent = event => {
  const payload = Object.assign({}, event);
  store.dispatch({
    type: NEW_EVENT_CREATED,
    payload
  });
  const state = store.getState();
  save(state);
}

export { createEvent };
