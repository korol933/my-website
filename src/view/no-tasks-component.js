import { AbstractComponent } from '../framework/abstract-component.js';

export class NoTasksComponent extends AbstractComponent {
  get template() {
    return '<div class="no-tasks">No tasks found. Add a new task!</div>';
  }
}