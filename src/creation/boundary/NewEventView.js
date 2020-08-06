import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';

class NewEventView extends AirElement {

  view() {
    return html `
      <h2> New Event </h2>
    `;
  }
}

customElements.define('a-neweventview', NewEventView);