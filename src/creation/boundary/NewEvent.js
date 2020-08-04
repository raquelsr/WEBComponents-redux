import { render, html } from '../../lib/lit-html.js';
import { createEvent } from '../control/EventsControl.js';
import AirElement from '../../AirElement.js';

class NewEvent extends AirElement {

  constructor() {
    super();
    this.event = {};
  }

  view() {
    return html `
      <input name="eventname" @change=${e => this.onUserInput(e)} placeholder="name">
      <input name="description" @change=${e => this.onUserInput(e)} placeholder="description">
      <button @click=${_ => this.newEvent()}>Create</button>
    `;
  }

  newEvent() {
    console.log('Saving..', this.event);
    createEvent(this.event);
  }

  onUserInput({target: {name, value}}) {
    console.log(name, value);
    this.event[name] = value;
  }
}

customElements.define('a-newevent', NewEvent);