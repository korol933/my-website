import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/tasklist-component.js';
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('main .container');

// Рендер компонентов
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), bodyContainer);

const taskBoard = new TaskBoardComponent();
render(taskBoard, bodyContainer);

const columns = [
  { title: 'Бэклог', tasks: Array(4).fill('') },
  { title: 'В процессе', tasks: Array(4).fill('') },
  { title: 'Готово', tasks: Array(4).fill('') },
  { title: 'Корзина', tasks: Array(4).fill('') }
];

const taskBoardElement = document.querySelector('.task-board');
columns.forEach(column => {
  render(new TaskListComponent(column.title, column.tasks), taskBoardElement);
});