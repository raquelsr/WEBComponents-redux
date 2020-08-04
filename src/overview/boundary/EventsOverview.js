import { html, render } from '../../lib/lit-html.js';
import AirElement from '../../AirElement.js';

class EventsOverview extends AirElement {

  view() {
     return html `
      <h2>Hello overview </h2>
    `;
  }
}

customElements.define('a-events-overview', EventsOverview);