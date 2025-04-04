import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/tasklist-component.js';
import TaskComponent from './view/task-component.js';
import {render, RenderPosition} from './framework/render.js';

const container = document.querySelector('.container');

render(new HeaderComponent(), container, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), container);
render(new TaskBoardComponent(), container);

const tasksData = {
  backlog: ['Выучить JS', 'Выучить React', 'Сделать домашку'],
  inProgress: ['Выпить сок', 'Попить воды'],
  done: ['Позвонить маме', 'Погладить кота'],
  trash: ['Сходить погулять', 'Прочитать Войну и Мир']
};

const statuses = ['backlog', 'inProgress', 'done', 'trash'];
statuses.forEach(status => {
  const taskList = new TaskListComponent(status);
  const taskBoard = document.querySelector('.task-board');
  render(taskList, taskBoard);

  const tasksContainer = document.querySelector(`.${status} .task-container`);
  tasksData[status].forEach(taskText => {
    render(new TaskComponent(taskText), tasksContainer);
  });
});