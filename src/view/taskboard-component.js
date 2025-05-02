import { createElement } from '../framework/render.js';
import AbstractComponent from '../framework/abstract-component.js';

export default class TaskBoardComponent extends AbstractComponent {
  getTemplate() {
    return '<div class="task-board"></div>';
  }
}
export class TaskModel {
  #boardtasks = tasks;

  get tasks() {
    return this.#boardtasks;  
  }
}