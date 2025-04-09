import TaskListComponent from '../view/js/tasklist-component.js';
import TaskComponent from '../view/js/task-component.js';
import TaskBoardComponent from '../view/js/taskboard-component.js';
import { render, RenderPosition } from '../framework/render.js';
import TasksModel from '../model/task-model.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #tasksBoardComponent = null;
  
  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#tasksBoardComponent = new TaskBoardComponent();
  }

  init() {
    render(this.#tasksBoardComponent, this.#boardContainer);
    
    const statuses = ['backlog', 'inProgress', 'done', 'trash'];
    
    statuses.forEach((status) => {
      const tasks = this.#tasksModel.getTasksByStatus(status);
      const taskListComponent = new TaskListComponent(status);
      
      render(taskListComponent, this.#tasksBoardComponent.getElement());
      
      tasks.forEach((task) => {
        const taskComponent = new TaskComponent(task.title); // Передаем title задачи
        render(taskComponent, taskListComponent.getElement().querySelector('.task-container'));
      });
    });
  }
}