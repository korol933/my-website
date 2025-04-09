import TaskListComponent from './view/tasklist-component.js';
import TaskComponent from './view/task-component.js';
import TaskBoardComponent from './view/taskboard-component.js';
import {render} from './framework/render.js';
import TasksModel from '../model/task-model.js';

export default class TasksBoardPresenter {
    #boardContainer = null;
    #tasksModel = null;
    #tasksBoardComponent = new TaskBoardComponent();
    #boardTasks = [];

    constructor([boardContainer, tasksModel]) {
        this.#boardContainer = boardContainer;
        this.#tasksModel = tasksModel;
    }

    init() {
      render(this.#tasksBoardComponent, this.#boardContainer);
  
      for (let i = 0; i < 4; i++) {
        const taskListComponent = new TaskListComponent();
        render(taskListComponent, this.#tasksBoardComponent.element);
  
        for (let j = 0; j < 4; j++) {
          const taskComponent = new TaskComponent();
          render(taskComponent, taskListComponent.element);
        }
      }
    }
  }