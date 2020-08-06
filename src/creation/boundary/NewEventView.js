import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';
import '../boundary/NewEvent.js';
import '../../overview/boundary/EventActions.js';
import '../../overview/boundary/EventsOverview.js';



class NewEventView extends AirElement {

  view() {
    return html `
      <h2> New Event </h2>
      <a-newevent></a-newevent>
      <a-events-overview></a-events-overview>
    `;
  }
}

customElements.define('a-neweventview', NewEventView);