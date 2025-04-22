import { AbstractComponent } from '../framework/abstract-component.js';

export class FormAddTaskComponent extends AbstractComponent {
  #submitHandler = null;

  get template() {
    return `
      <form class="add-task-form">
        <input type="text" name="title" placeholder="Task title" required>
        <textarea name="description" placeholder="Description"></textarea>
        <button type="submit">Add Task</button>
      </form>
    `;
  }

  setSubmitHandler(handler) {
    this.#submitHandler = handler;
    this.element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.target);
      const task = {
        title: formData.get('title'),
        description: formData.get('description')
      };
      handler(task);
      evt.target.reset();
    });
  }
}