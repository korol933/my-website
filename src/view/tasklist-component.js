import {createElement} from '../framework/render.js';

export default class TaskListComponent {
  constructor(title, tasks) {
    this._title = title;
    this._tasks = tasks;
    this._element = null;
  }

  getTemplate() {
    return `
      <div class="tasklist-component">
        <div class="tasklist-component__tasks-container">
          ${this._tasks.map(() => `<div class="task-component"></div>`).join('')}
        </div>
        <button class="tasklist-component__clear-btn">✖️ Очистить</button>
      </div>
    `;
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