import { createElement } from '../framework/render.js';
import { Status, StatusLabel } from '../const.js';
import TaskComponent from './task-component.js';
import AbstractComponent from '../framework/abstract-component.js';

function createTaskListComponentTemplate(title, tasks = []) {
  const isTRASHColumn = title === StatusLabel[Status.TRASH];
  return `
    <div class="column ${title.toLowerCase().replace(' ', '-')}">
      <div class="column-title">${title}</div>
      <div id="${title.toLowerCase().replace(' ', '-')}-tasks">
        ${tasks.map(task => new TaskComponent(task).getTemplate()).join('')}
      </div>
      ${isTRASHColumn ? '<button class="clear-btn">✖️ Очистить</button>' : ''}
    </div>
  `;
}

export default class TaskListComponent extends AbstractComponent{
  getTemplate() {
    return createTaskListComponentTemplate(this._title, this._tasks);
  }
}
export class TaskModel {
  #boardtasks = tasks;

  get tasks() {
    return this.#boardtasks;  
  }
}