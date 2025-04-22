import { AbstractComponent } from '../framework/abstract-component.js';

export class TasklistComponent extends AbstractComponent {
  get template() {
    return '<div class="tasklist"></div>';
  }
}