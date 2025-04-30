import { createElement } from '../framework/render.js';

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
    return `
      <div class="form-add-task-component">
        <div class="form-add-task-component__input-container">
          <input type="text" class="form-add-task-component__input" placeholder="Название задачи...">
          <button class="form-add-task-component__button">+ Добавить</button>
        </div>
      </div>
    `;
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