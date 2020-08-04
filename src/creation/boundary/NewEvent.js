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
      <input required name="eventname" @change=${e => this.onUserInput(e)} placeholder="name">
      <input required name="description" @change=${e => this.onUserInput(e)} placeholder="description">
      <button @click=${e => this.newEvent(e)}>Create</button>
    </form>
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