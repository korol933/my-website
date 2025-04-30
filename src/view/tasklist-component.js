import { createElement } from '../framework/render.js';

function createTaskListComponentTemplate(title, tasks = []) {
  const isTrashColumn = title === 'Корзина'; 
  
  return `
    <div class="column ${title.toLowerCase().replace(' ', '-')}">
      <div class="column-title">${title}</div>
      <div id="${title.toLowerCase().replace(' ', '-')}-tasks">
        ${tasks.map(task => `<div class="task">${task}</div>`).join('')}
      </div>
      ${isTrashColumn ? `
        <button class="clear-btn">
          ✖️ Очистить
        </button>
      ` : ''}
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