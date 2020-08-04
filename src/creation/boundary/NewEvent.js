class NewEvent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Simple string';
  }
}

customElements.define('a-newevent', NewEvent);