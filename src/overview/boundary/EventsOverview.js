import { html, render } from '../../lib/lit-html.js';
import AirElement from '../../AirElement.js';

class EventsOverview extends AirElement {

  view() {
    console.log('UPDATED2');

     return html `
      <h2>Hello overview </h2>
    `;
  }
}

customElements.define('a-events-overview', EventsOverview);