import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import { render, RenderPosition } from './framework/render.js';
import TaskModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import { tasks } from './mock/task.js';

const bodyContainer = document.querySelector('main .container');
const taskModel = new TaskModel(tasks);

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), bodyContainer);

const tasksBoardPresenter = new TasksBoardPresenter(taskModel, bodyContainer);
tasksBoardPresenter.init();