import { render } from './lib/lit-html.js';

class AirElement extends HTMLElement {

  connectedCallback() {
    const template = this.view();
    render(template, this);
  }

  view() { }
}

export default AirElement;