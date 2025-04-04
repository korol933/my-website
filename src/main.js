import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import {render, RenderPosition} from './framework/render.js';

const container = document.querySelector('.container');

render(new HeaderComponent(), container, RenderPosition.AFTERBEGIN);

render(new FormAddTaskComponent(), container);