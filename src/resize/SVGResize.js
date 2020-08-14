import AirElement from '../AirElement.js';
import { createPinkSquare, createCyanSquare, createBook } from './SVGShape.js'; 
import { addResizeControl, makeResizableDiv } from './ResizeControl.js';

// https://interactjs.io/
// https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d
// http://jsfiddle.net/3jMQD/
// https://codepen.io/akhlis/pen/RwwYzdN

class SVGResize extends AirElement {

    connectedCallback() {
        this.createExampleSVG();

        this.createImageResize();
        makeResizableDiv('.resizable');
    }

    createExampleSVG() {
        const svgZone = document.createElement('div');
        svgZone.classList.add('svg-zone');
        this.appendChild(svgZone);

        createPinkSquare('.svg-zone');
        createCyanSquare('.svg-zone');
        createBook('.svg-zone');
    }

    createImageResize() {
        const img = document.createElement('img');
        img.setAttribute('src', 'https://www.stoltzgroup.com/wp-content/uploads/2020/04/Stoltz_Zoom_Background_1.png');
        const div = addResizeControl(img);
        this.appendChild(div);
    }
}

customElements.define('svg-resize', SVGResize);