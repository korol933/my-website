import { createElement } from '../framework/render.js';
import { StatusLabel } from '../const.js';

function createTaskListComponentTemplate(status) {
  return `
    <div class="column ${status}">
      <div class="column-title">${StatusLabel[status]}</div>
      <div class="task-container"></div>
      ${status === 'basket' ? '<button class="clear-btn">✖️ Очистить корзину</button>' : ''}
    </div>
  `;
}

export default class TaskListComponent {
  constructor(status) {
    this.status = status;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.status);
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