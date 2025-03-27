import { createElement } from '../utils/render.js';

function createTaskComponentTemplate(taskText) {
    return `<li class="task" style="display: flex; align-items: center; padding: 10px; border-radius: 5px; background: white; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); margin-bottom: 10px;">${taskText}</li>`;
}

export default class TaskComponent {
    constructor(taskText) {
        this.taskText = taskText;
    }

    getTemplate() {
        return createTaskComponentTemplate(this.taskText);
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