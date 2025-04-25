import { TasksBoardPresenter } from './presenter/tasks-board-presenter.js';
import { tasks } from './mock/task.js';

document.addEventListener('DOMContentLoaded', () => {
  const boardContainer = document.querySelector('.app');
  const boardPresenter = new TasksBoardPresenter({ 
    container: boardContainer,
    initialTasks: tasks
  });
  boardPresenter.init();
});