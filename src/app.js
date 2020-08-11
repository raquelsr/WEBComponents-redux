import { save } from './localstorage/StorageControl.js';
import store from './store.js';
import { Router } from './lib/@vaadin/router.js';
import './creation/boundary/NewEventView.js';
import './preview/boundary/Preview.js';
import './dragNdrop/boundary/DragNDrop.js';

store.subscribe(() => {
  const state = store.getState();
  save(state);
});


const outlet = document.querySelector('.view');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'a-neweventview'},
  {path: '/preview',  component: 'a-preview'},
  {path: '/dragndrop', component: 'drag-n-drop'},
  {path: '(.*)', component: 'a-neweventview' }
]);