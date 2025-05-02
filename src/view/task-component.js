import { createElement } from '../framework/render.js';
import AbstractComponent from '../framework/abstract-component.js';

function createTaskComponentTemplate(task) {
  return `<div class="task">${task.title}</div>`;
}

export default class TaskComponent extends AbstractComponent{
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createTaskComponentTemplate(this._task);
  }
}