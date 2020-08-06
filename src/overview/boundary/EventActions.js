import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';
import { deleteSelected } from '../control/EventsControl.js';

class EventActions extends AirElement {


  view() {
    return html `
      <button class="button" @click=${() => deleteSelected()}>Delete</button>
    `;
  }
}

customElements.define('a-events-actions', EventActions);