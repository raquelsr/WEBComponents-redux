import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';
import { deleteSelected, editSelected } from '../control/EventsControl.js';
import { areSomeSelected, isOneRowSelected } from '../entity/EventOperations.js';

class EventActions extends AirElement {

  extractState(redux) {
    return redux.events;
  }

  view() {
    return html `
      <button class="button is-primary is-small" @click=${() => editSelected()} ?disabled=${!isOneRowSelected(this.state.events)}>Edit</button>
      <button class="button is-danger is-small" @click=${() => deleteSelected()} ?disabled=${!areSomeSelected(this.state.events)}>Delete</button>
    `;
  }
}

customElements.define('a-events-actions', EventActions);