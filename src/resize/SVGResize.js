import AirElement from '../AirElement.js';
import { createPinkSquare, createCyanSquare, createBook } from './SVGShape.js'; 


// https://interactjs.io/
class SVGResize extends AirElement {

    connectedCallback() {
        const div = document.createElement('div');
        div.classList.add('svg-zone');
        this.appendChild(div);
        
        const p = document.createElement('h1');
        p.innerHTML = 'Resize square';
        this.appendChild(p);

        const divResizer = document.createElement('div');
        divResizer.classList.add('resize');
        div.appendChild(divResizer);

        createPinkSquare('.svg-zone');
        createCyanSquare('.resize');
        createBook('.svg-zone');

        const img = document.createElement('img');
        img.setAttribute('src', 'https://images-na.ssl-images-amazon.com/images/I/41yrqfpKM4L._AC_.jpg')
        this.appendChild(img);


        this.setupInteraction();
    }

    setupInteraction() {
        // http://jsfiddle.net/3jMQD/
        var p = document.querySelector('h1');

        p.addEventListener('click', function init() {
            p.removeEventListener('click', init, false);
            p.className = p.className + ' resizable';
            var resizer = document.createElement('div');
            resizer.className = 'resizer';
            p.appendChild(resizer);
            resizer.addEventListener('mousedown', initDrag, false);
        }, false);

        var startX, startY, startWidth, startHeight;

        function initDrag(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDrag(e) {
            p.style.width = (startWidth + e.clientX - startX) + 'px';
            p.style.height = (startHeight + e.clientY - startY) + 'px';
        }

        function stopDrag(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);   
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }

    }

}

customElements.define('svg-resize', SVGResize);