import { FILTER_CHANGED } from '../entity/FilterReducer.js';
import store from '../../store.js';

const onFilterChange = payload => {
    store.dispatch({
        type: FILTER_CHANGED, 
        payload
    });
}

export { onFilterChange };