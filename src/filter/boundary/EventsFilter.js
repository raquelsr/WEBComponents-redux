import AirElement from "../../AirElement.js";
import { html } from '../../lib/lit-html.js';
import { onFilterChange } from '../control/FilterControl.js';

export default class EventsFilter extends AirElement {

  view() {
    const { filter } = this.state;
    return html `
      <input class="input" placeholder="keyword" .value="${filter}" @keyup=${e => this.onFilter(e)}>
    `;
  }

  onFilter({ target: {value}}) {
    onFilterChange(value);
  }
  
  extractState(redux) {
    return redux.filter;
  }
}

customElements.define('a-events-filter', EventsFilter);