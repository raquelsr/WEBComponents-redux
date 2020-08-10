import store from '../../store.js';
import { EVENT_SELECTED, DELETE_SELECTED_EVENTS, EDIT_SELECTED } from '../entity/OverviewReducer.js';

export const eventSelected = (name, checked) => {
  store.dispatch({
    type: EVENT_SELECTED,
    payload: {
      name,
      checked
    }
  });
}

export const deleteSelected = () => {
  store.dispatch({
    type: DELETE_SELECTED_EVENTS
  })
}

export const editSelected = () => {
  store.dispatch({
    type: EDIT_SELECTED
  })
}
