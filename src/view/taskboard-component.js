import { createElement } from '../framework/render.js';

export default class TaskBoardComponent {
  getTemplate() {
    return '<div class="task-board"></div>';
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