import store from '../../store.js';
import { NEW_EVENT_CREATED } from '../entity/EventsReducer.js';

const createEvent = event => {
  const payload = Object.assign({}, event);
  store.dispatch({
    type: NEW_EVENT_CREATED,
    payload
  });
}

export { createEvent };
