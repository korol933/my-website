import { Status, StatusLabel } from '../const.js';
import TaskBoardComponent from '../view/taskboard-component.js';
import TaskListComponent from '../view/tasklist-component.js';
import { render } from '../framework/render.js';

export default class TasksBoardPresenter {
  constructor(taskModel, container) {
    this._taskModel = taskModel;
    this._container = container;
    this._taskBoardComponent = new TaskBoardComponent();
  }

  init() {
    const tasks = this._taskModel.getTasks();
    render(this._taskBoardComponent, this._container);

    const statusGroups = {
      [Status.BACKLOG]: this._taskModel.getTasksByStatus(Status.BACKLOG),
      [Status.PROCESSING]: this._taskModel.getTasksByStatus(Status.PROCESSING),
      [Status.DONE]: this._taskModel.getTasksByStatus(Status.DONE),
      [Status.TRASH]: this._taskModel.getTasksByStatus(Status.TRASH)
    };

    Object.entries(statusGroups).forEach(([status, tasks]) => {
      render(
        new TaskListComponent(StatusLabel[status], tasks),
        this._taskBoardComponent.getElement()
      );
    });
  }
}