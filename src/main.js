import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import TasksModel from './model/task-model.js';

const headerContainer = document.querySelector('.header-container');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.taskboard');

const tasksModel = new tasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksBoardContainer,
  tasksModel,
  });


render(new HeaderComponent(), headerContainer,RenderPosition.AFTERBEGIN);

render(new FormAddTaskComponent(),formContainer);

  tasksBoardPresenter.init();