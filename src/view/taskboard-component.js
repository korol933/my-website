import { AbstractComponent } from '../framework/abstract-component.js';

export class TaskboardComponent extends AbstractComponent {
  get template() {
    return '<section class="taskboard"></section>';
  }
}