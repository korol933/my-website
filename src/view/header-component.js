import { AbstractComponent } from '../framework/abstract-component.js';

export class HeaderComponent extends AbstractComponent {
  get template() {
    return '<header class="header"><h1>Task Board</h1></header>';
  }
}