import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/tasklist-component.js';
import {render, RenderPosition} from './framework/render.js';

const container = document.querySelector('.container');

render(new HeaderComponent(), container, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), container);
render(new TaskBoardComponent(), container);

const statuses = ['backlog', 'inProgress', 'done', 'trash'];
const taskBoard = document.querySelector('.task-board');

statuses.forEach(status => {
  render(new TaskListComponent(status), taskBoard);
});