import { TasksBoardPresenter } from './presenter/tasks-board-presenter.js';

const boardContainer = document.querySelector('.app');
const boardPresenter = new TasksBoardPresenter({ container: boardContainer });

boardPresenter.init();

// Для тестирования можно добавить начальные задачи
boardPresenter.initWithMockData = function() {
  this.#taskModel.addTask({ title: 'Task 1', description: 'Description 1' });
  this.#taskModel.addTask({ title: 'Task 2', description: 'Description 2' });
  this.#renderTasks();
};

// Раскомментируйте для теста с данными
// boardPresenter.initWithMockData();