import { TaskboardComponent } from '../view/taskboard-component.js';
import { TasklistComponent } from '../view/tasklist-component.js';
import { TaskComponent } from '../view/task-component.js';
import { NoTasksComponent } from '../view/no-tasks-component.js';
import { TaskModel } from '../model/task-model.js';
import { render } from '../framework/render.js';
import { tasks } from '../mock/task.js';

export class TasksBoardPresenter {
  #taskModel = null;
  #taskboardComponent = null;
  #tasklistComponent = null;
  #noTasksComponent = new NoTasksComponent();

  constructor({ container }) {
    this.#taskModel = new TaskModel(tasks);
    this.#taskboardComponent = new TaskboardComponent();
    this.container = container;
  }

  init() {
    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#taskboardComponent, this.container);
    this.#renderTasklist();
  }

  #renderTasklist() {
    this.#tasklistComponent = new TasklistComponent();
    render(this.#tasklistComponent, this.#taskboardComponent.element);
    this.#renderTasks();
  }

  #renderTasks() {
    const tasks = this.#taskModel.tasks;
    
    if (tasks.length === 0) {
      this.#renderNoTasks();
      return;
    }

    tasks.forEach((task) => {
      const taskComponent = new TaskComponent(task);
      render(taskComponent, this.#tasklistComponent.element);
    });
  }

  #renderNoTasks() {
    render(this.#noTasksComponent, this.#tasklistComponent.element);
  }
}