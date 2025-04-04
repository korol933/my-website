import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import {render, RenderPosition} from './framework/render.js';

const container = document.querySelector('.container');

render(new HeaderComponent(), container, RenderPosition.AFTERBEGIN);

render(new FormAddTaskComponent(), container);

const form = document.querySelector('.task-input');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const input = document.getElementById('taskInput');
  if (input.value.trim()) {
    console.log('Добавлена новая задача:', input.value);
    input.value = '';
  }
});