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

// Пример данных для колонок
const columns = [
  { title: 'Бэклог', tasks: ['Выучить JS', 'Выучить React', 'Сделать домашку'] },
  { title: 'В процессе', tasks: ['Выпить сок', 'Попить воды'] },
  { title: 'Готово', tasks: ['Позвонить маме', 'Погладить кота'] },
  { title: 'Корзина', tasks: ['Сходить погулять', 'Прочитать Войну и Мир'] },
];

const taskBoardElement = document.querySelector('.task-board');
columns.forEach(column => {
  render(new TaskListComponent(column.title, column.tasks), taskBoardElement);
});