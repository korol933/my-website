import { AbstractComponent } from '../framework/abstract-component.js';

export class TaskComponent extends AbstractComponent {
  #task = null;

  constructor(task) {
    super();
    this.#task = task;
  }

  get template() {
    return `
      <div class="task">
        <h3>${this.#task.title}</h3>
        <p>${this.#task.description}</p>
      </div>
    `;
  }
  get template() {
    return `
      <div class="task" data-task-id="${this.#task.id}" data-status="${this.#task.status}">
        <span class="task__status">${this.#task.status}</span>
        <h3 class="task__title">${this.#task.title}</h3>
        <p class="task__description">${this.#task.description}</p>
      </div>
    `;
  }
}