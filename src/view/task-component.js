import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(task) {
  return `
    <div class="taskboard_item task task--${task.status}">
      <div class="task_body">
        <p class="task--view">${task.title}</p>
        <input type="text" class="task--input" value="${task.title}" />
      </div>
      <button aria-label="Изменить" class="task__edit" type="button"></button>
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