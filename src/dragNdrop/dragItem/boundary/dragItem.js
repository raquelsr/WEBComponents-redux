import AirElement from '../../../AirElement.js';
import { html } from '../../../lib/lit-html.js';

class DragItem extends AirElement {

    constructor() {
        super();
        this.setupDnd();
    }

    view() {
        return html `
            <div draggable="true">Drag item</div>
        `;
    }

    setupDnd() {
    let dragged;
      window.addEventListener("drag", function( event ) {
        console.log('%c drag', 'color: white; background: blue' );
      }, { passive: false });

      window.addEventListener("dragstart", function( event ) {
        //DragStart : when start the processing of drag.
        console.log('%c dragstart', 'color: white; background: green' );
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
      }, { passive: false });

      window.addEventListener("dragend", function( event ) {
        // Dragend: when drag and drop is finished, with success or not.
        console.log('%c dragend', 'color: white; background: red' );
        // reset the transparency
        event.target.style.opacity = "";
      }, { passive: false });

      window.addEventListener("dragover", function( event ) {
         // DragOver: Every time that move drag item over an element
        console.log('%c dragover', 'color: black; background: yellow' );
        // prevent default to allow drop
        event.preventDefault();
      }, { passive: false });

      window.addEventListener("dragenter", function( event ) {
        //DragEnter: Compute if the zone is valid to drop the item. Ex: Change the color of the zone.
        console.error('dragenter');
       // 
        if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
        }

      }, { passive: false });

      window.addEventListener("dragleave", function( event ) {
        // DragLeave : When the dragitem leaves dropzone, reset the styles
        console.error('dragleave');
        // reset background of potential drop target when the draggable element leaves it
        if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
        }

      }, { passive: false });

      window.addEventListener("drop", function( event ) {
        // Drop: Elem when the dragitem is dropped.
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
        }

      }, { passive: false });
    }
}

customElements.define('drag-item', DragItem);