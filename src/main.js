import { TasksBoardPresenter } from './presenter/tasks-board-presenter.js';
import { tasks } from './mock/task.js';

const boardContainer = document.querySelector('.app');
const boardPresenter = new TasksBoardPresenter({ 
  container: boardContainer,
  initialTasks: tasks
});

// Инициализация презентера
boardPresenter.init();

// Пример использования геттера model:
const currentTasks = boardPresenter.model.tasks; // Получаем задачи через геттер
console.log('Текущие задачи:', currentTasks);

// Добавление новой задачи через презентер
boardPresenter.model.addTask({
  id: Date.now().toString(),
  title: "Новая задача через геттер",
  status: "backlog",
  description: "Добавлено из main.js"
});

// Для тестирования можно добавить метод-обертку в презентер:
boardPresenter.addTestTask = function(taskData) {
  this.model.addTask(taskData);
  // Здесь должен быть вызов метода рендеринга, если нужно
  // this.#renderTasks(); // Раскомментировать, если нужен immediate re-render
};

boardPresenter.addTestTask({
  id: "test-1",
  title: "Тестовая задача",
  status: "inProgress"
});