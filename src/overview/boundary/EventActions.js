import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';

class EventActions extends AirElement {


  view() {
    return html `
      <button class="button" @click=${this.deleteSelected()}>Delete</button>
    `;
  }

  deleteSelected() {
    console.log('Delete')
  }
}

customElements.define('a-events-actions', EventActions);