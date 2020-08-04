import { store } from '../../AirElement.js';

export const NEW_EVENT_CREATED = 'NEW_EVENT_CREATED';

const createEvent = payload => {
  store.dispatch({
    type: NEW_EVENT_CREATED,
    payload
  });
}

export { createEvent };
