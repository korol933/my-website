import {createElement} from '../framework/render.js';
import { tasks } from '../mock/task.js';
import AbstractComponent from '../framework/abstract-component.js';

function createFormAddTaskComponentTemplate() {
  return `
    <div class="task-input">
      <div class="title">Новая задача</div>
      <div class="input-container">
        <input type="text" id="taskInput" placeholder="Название задачи...">
        <button>+ Добавить</button>
      </div>
    </div>
  `;
}

export default class FormAddTaskComponent extends AbstractComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }
}

export class TaskModel {
  #boardtasks = tasks;

  get tasks() {
    return this.#boardtasks;  
  }
}