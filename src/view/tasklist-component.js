import {createElement} from '../framework/render.js';

function createTaskListComponentTemplate(title, tasks = []) {
  return `
    <div class="column ${title.toLowerCase().replace(' ', '-')}">
      <div class="tasks-container">
        ${tasks.map(() => `<div class="task"></div>`).join('')}
      </div>
    </div>
  `;
}

export default class TaskListComponent {
  constructor(title, tasks) {
    this._title = title;
    this._tasks = tasks;
    this._element = null;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this._title, this._tasks);
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