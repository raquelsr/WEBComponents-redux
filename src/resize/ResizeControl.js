// https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d

export const addResizeControl = (img) => {

    const div = document.createElement('div');
    div.classList.add('resizable');

    const divResizers = document.createElement('div');
    divResizers.classList.add('resizers');

    divResizers.appendChild(img);
    addResizablePoints(divResizers);
   
    div.appendChild(divResizers);
    return div;
}

const addResizablePoints = (div) => {
    const tl = createDivPoint('top-left');
    const tr = createDivPoint('top-right');
    const bl = createDivPoint('bottom-left');
    const br = createDivPoint('bottom-right');
    
    div.appendChild(tl);
    div.appendChild(tr);
    div.appendChild(bl);
    div.appendChild(br);
}

const createDivPoint = (classPoint) => {
    const point = document.createElement('div');
    point.classList.add('resizer');
    point.classList.add(classPoint);
    return point;
}


const minimum_size = 20;
let original_width = 0;
let original_height = 0;
let original_x = 0;
let original_y = 0;
let original_mouse_x = 0;
let original_mouse_y = 0;

export const makeResizableDiv = (selector) => {
  debugger
    const elementResizable = document.querySelector(selector);
    const resizers = document.querySelectorAll(selector + ' .resizer')

    for (let i = 0;i < resizers.length; i++) {
      addMovement(resizers[i], elementResizable);
    }
}

const addMovement = (resizerPoint, elementResizable) => {
  resizerPoint.addEventListener('mousedown', function(e) {
    e.preventDefault()
    original_width = parseFloat(getComputedStyle(elementResizable, null).getPropertyValue('width').replace('px', ''));
    original_height = parseFloat(getComputedStyle(elementResizable, null).getPropertyValue('height').replace('px', ''));
    original_x = elementResizable.getBoundingClientRect().left;
    original_y = elementResizable.getBoundingClientRect().top;
    original_mouse_x = e.pageX;
    original_mouse_y = e.pageY;
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResize)
  })
  
  function resize(e) {
    if (resizerPoint.classList.contains('bottom-right')) {
      const width = original_width + (e.pageX - original_mouse_x);
      const height = original_height + (e.pageY - original_mouse_y)
      if (width > minimum_size) {
        elementResizable.style.width = width + 'px'
      }
      if (height > minimum_size) {
        elementResizable.style.height = height + 'px'
      }
    }
    else if (resizerPoint.classList.contains('bottom-left')) {
      const height = original_height + (e.pageY - original_mouse_y)
      const width = original_width - (e.pageX - original_mouse_x)
      if (height > minimum_size) {
        elementResizable.style.height = height + 'px'
      }
      if (width > minimum_size) {
        elementResizable.style.width = width + 'px'
        elementResizable.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
    }
    else if (resizerPoint.classList.contains('top-right')) {
      const width = original_width + (e.pageX - original_mouse_x)
      const height = original_height - (e.pageY - original_mouse_y)
      if (width > minimum_size) {
        elementResizable.style.width = width + 'px'
      }
      if (height > minimum_size) {
        elementResizable.style.height = height + 'px'
        elementResizable.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
      }
    }
    else {
      const width = original_width - (e.pageX - original_mouse_x)
      const height = original_height - (e.pageY - original_mouse_y)
      if (width > minimum_size) {
        elementResizable.style.width = width + 'px'
        elementResizable.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
      }
      if (height > minimum_size) {
        elementResizable.style.height = height + 'px'
        elementResizable.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
      }
    }
  }
  function stopResize() {
    window.removeEventListener('mousemove', resize)
  }
}
