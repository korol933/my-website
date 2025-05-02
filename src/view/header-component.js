import {createElement} from '../framework/render.js';
import AbstractComponent from '../framework/abstract-component.js';

function createHeaderComponentTemplate() {
  return `<div class="header">Список задач</div>`;
}

export default class HeaderComponent extends AbstractComponent{
  getTemplate() {
    return createHeaderComponentTemplate();
  }
}
export class TaskModel {
  #boardtasks = tasks;

  get tasks() {
    return this.#boardtasks;  
  }
}