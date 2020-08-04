import store from '../../store.js';

export const NEW_EVENT_CREATED = 'NEW_EVENT_CREATED';

const createEvent = event => {
  const payload = Object.assign({}, event);
  store.dispatch({
    type: NEW_EVENT_CREATED,
    payload
  });
}

export { createEvent };
