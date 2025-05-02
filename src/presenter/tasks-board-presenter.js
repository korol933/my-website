import { Status, StatusLabel } from '../const.js';
import TaskBoardComponent from '../view/taskboard-component.js';
import TaskComponent from '../view/task-component.js';
import { render } from '../framework/render.js';
import TaskListComponent from '../view/tasklist-component.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #tasksBoardComponent = null;
  #boardTasks = [];

  constructor([boardContainer, tasksModel]) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#tasksBoardComponent = new TaskBoardComponent();
  }

  init() {
    this.#boardTasks = [...this.#tasksModel.tasks];
    render(this.#tasksBoardComponent, this.#boardContainer);

    this.#renderTaskLists();
  }

  #renderTaskLists() {
    Object.values(Status).forEach((status) => {
      const tasksListComponent = new TaskListComponent({
        status: status,
        label: StatusLabel[status]
      });
      
      render(tasksListComponent, this.#tasksBoardComponent.element);
      
      const tasksForStatus = getTasksByStatus(this.#boardTasks, status);
      this.#renderTasks(tasksForStatus, tasksListComponent.element);
    });
  }

  #renderTasks(tasks, container) {
    tasks.forEach((task) => {
      render(new TaskComponent({ task }), container);
    });
  }

}