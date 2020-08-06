import { render, html } from '../../lib/lit-html.js';
import { createEvent } from '../control/EventsControl.js';
import AirElement from '../../AirElement.js';

class NewEvent extends AirElement {

  constructor() {
    super();
    this.event = {};
  }

  view() {
    console.log('UPDATED');
    return html `
    <form>
      ${this.input({name: 'link'})}
      ${this.input({name: 'eventname'})}
      ${this.input({name: 'description'})}
      <button class="button is-primary" @click=${e => this.newEvent(e)}>Create</button>
    </form>
    `;
  }

  input({name, placeholder=name}) {
    return html `
      <label>${placeholder}
      <input class="input is-primary" required name=${name} @change=${e => this.onUserInput(e)} placeholder=${placeholder}>
      </label>
    `;
  }

  newEvent(e) {
    const { target: { form }} = e;
    e.preventDefault();
    form.reportValidity();
    if (form.checkValidity()) {
      createEvent(this.event);
    }
  }

  onUserInput({target: {name, value}}) {
    console.log(name, value);
    this.event[name] = value;
  }
}

customElements.define('a-newevent', NewEvent);