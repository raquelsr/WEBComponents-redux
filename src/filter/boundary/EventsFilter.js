import AirElement from "../../AirElement.js";
import { html } from '../../lib/lit-html.js';

export default class EventsFilter extends AirElement {

  view() {
    return html `
      <input placeholder="keyword">
    `;
  }
}

customElements.define('a-events-filter', EventsFilter);