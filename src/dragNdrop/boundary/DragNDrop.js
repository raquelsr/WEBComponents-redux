import AirElement from '../../AirElement.js';
import { html } from '../../lib/lit-html.js';
import '../dragItem/boundary/dragItem.js';

class DragNDrop extends AirElement {

    constructor() {
        super();
    }

    view() {
        return html `
            <drag-item></drag-item>
            <drag-item></drag-item>
            <drag-item></drag-item>
            <div class="dropzone">
                Dropzone
            </div>

        `;
    }

}

customElements.define('drag-n-drop', DragNDrop);