import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';

class Preview extends AirElement {
  view() {
    return html `
      <h1> Preview </h1>
    `;
  }
}

customElements.define('a-preview', Preview);
