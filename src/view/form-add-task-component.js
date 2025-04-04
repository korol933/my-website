import {createElement} from '../framework/render.js';

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

export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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