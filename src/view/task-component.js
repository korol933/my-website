import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(task) {
  return `<div class="task">${task.title}</div>`;
}

export default class TaskComponent {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createTaskComponentTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}