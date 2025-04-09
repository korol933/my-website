import { createElement } from '../framework/render.js';

function createTaskListComponentTemplate(status) {
  const titles = {
    'backlog': 'Бэклог',
    'inProgress': 'В процессе',
    'done': 'Готово',
    'trash': 'Корзина'
  };

  return `
    <div class="column ${status}">
      <div class="column-title">${titles[status]}</div>
      <div class="task-container"></div>
      ${status === 'trash' ? '<button class="clear-btn">Очистить корзину</button>' : ''}
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