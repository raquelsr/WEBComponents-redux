import AirElement from "../../AirElement.js";
import { html } from '../../lib/lit-html.js';
import { onFilterChange } from '../control/FilterControl.js';

export default class EventsFilter extends AirElement {

  view() {
    return html `
      <input class="input" placeholder="keyword" @keyup=${e => this.onFilter(e)}>
    `;
  }

  onFilter({ target: {value}}) {
    onFilterChange(value);
  }
}

customElements.define('a-events-filter', EventsFilter);