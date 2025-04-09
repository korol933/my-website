import TaskListComponent from '../view/tasklist-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/taskboard-component.js';
import { render } from '../framework/render.js';
import { Status } from '../const.js';

export default class TaskBoardPresenter {
  constructor(boardContainer, taskModel) {
    this.boardContainer = boardContainer;
    this.taskModel = taskModel;
    this.taskBoardComponent = new TaskBoardComponent();
  }

  init() {
    render(this.taskBoardComponent, this.boardContainer);
    
    Object.values(Status).forEach((status) => {
      const tasks = this.taskModel.getTasksByStatus(status);
      const taskListComponent = new TaskListComponent(status);
      render(taskListComponent, this.taskBoardComponent.getElement());
      
      tasks.forEach((task) => {
        const taskComponent = new TaskComponent(task);
        render(taskComponent, taskListComponent.getElement().querySelector('.task-container'));
      });
    });
  }
}