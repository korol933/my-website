import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(task) {
  return `
    <div class="task" data-id="${task.id}">
      <h3>${task.title}</h3>
      <p>Status: ${task.status}</p>
    </div>
  `;
}

export default class TaskComponent {
  constructor(task) {
    this.task = task;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.task);
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