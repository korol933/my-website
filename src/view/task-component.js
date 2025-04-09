import {createElement} from '../framework/render.js';

function createTaskComponentTemplate(task) {
  return `
    <div class="task" data-id="${task.id}" data-priority="${task.priority}">
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div class="task-priority">Приоритет: ${task.priority}</div>
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