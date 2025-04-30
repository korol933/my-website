import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(text) {
  return `<div class="task">${text}</div>`;
}

export default class TaskComponent {
  constructor(text) {
    this.text = text;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.text);
  }
  
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}