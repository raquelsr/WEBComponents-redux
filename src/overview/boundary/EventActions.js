import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';
import { deleteSelected, editSelected } from '../control/EventsControl.js';

class EventActions extends AirElement {


  view() {
    return html `
      <button class="button is-danger" @click=${() => deleteSelected()}>Delete</button>
      <button class="button is-primary" @click=${() => editSelected()}>Edit</button>
    `;
  }
}

customElements.define('a-events-actions', EventActions);