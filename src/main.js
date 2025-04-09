import HeaderComponent from './view/js/header-component.js';
import FormAddTaskComponent from './view/js/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import TasksModel from './model/task-model.js';

const headerContainer = document.querySelector('.container');
const formContainer = document.querySelector('.container');
const boardContainer = document.querySelector('.container');

const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: boardContainer,
  tasksModel,
});

render(new HeaderComponent(), headerContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);
tasksBoardPresenter.init();