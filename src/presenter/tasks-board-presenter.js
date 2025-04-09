import TaskListComponent from '../view/js/tasklist-component.js';
import TaskComponent from '../view/js/task-component.js';
import TaskBoardComponent from '../view/js/taskboard-component.js';
import { render } from '../framework/render.js';

export default class TaskBoardPresenter {
  #boardContainer = null;
  #taskModel = null;
  #taskBoardComponent = new TaskBoardComponent();

  constructor(boardContainer, taskModel) {
    this.#boardContainer = boardContainer;
    this.#taskModel = taskModel;
  }

  init() {
    render(this.#taskBoardComponent, this.#boardContainer);
    
    const statuses = ['backlog', 'inProgress', 'done', 'trash'];
    
    statuses.forEach((status) => {
      const tasks = this.#taskModel.getTasksByStatus(status);
      const taskListComponent = new TaskListComponent(status);
      render(taskListComponent, this.#taskBoardComponent.getElement());
      
      tasks.forEach((task) => {
        const taskComponent = new TaskComponent(task);
        render(taskComponent, taskListComponent.getElement().querySelector('.task-container'));
      });
    });
  }
}