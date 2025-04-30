import { createElement } from '../framework/render.js';

export default class TaskBoardComponent {
  getTemplate() {
    return `<div class="taskboard-component"></div>`;
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