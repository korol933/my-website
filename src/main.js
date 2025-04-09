import HeaderComponent from './view/header-component.js';
import TaskBoardPresenter from './presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import TaskModel from './model/task-model.js';

const headerContainer = document.querySelector('.container');
const boardContainer = document.querySelector('.container');

const taskModel = new TaskModel();
const taskBoardPresenter = new TaskBoardPresenter(boardContainer, taskModel);

render(new HeaderComponent(), headerContainer, RenderPosition.AFTERBEGIN);
taskBoardPresenter.init();