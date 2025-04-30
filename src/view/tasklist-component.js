import { createElement } from '../framework/render.js';

function createTaskListComponentTemplate(title, tasks = []) {
  return `
    <div class="column ${title.toLowerCase().replace(' ', '-')}">
      <div class="column-title">${title}</div>
      <div id="${title.toLowerCase().replace(' ', '-')}-tasks">
        ${tasks.map(task => `<div class="task">${task}</div>`).join('')}
      </div>
    </div>
  `;
}

export default class TaskListComponent {
  constructor(title, tasks) {
    this.title = title;
    this.tasks = tasks;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.title, this.tasks);
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