export class TaskModel {
  #boardTasks = [];

  constructor(initialTasks = []) {
    this.#boardTasks = initialTasks;
  }

  get tasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }

  addTask(task) {
    this.#boardTasks.push({
      ...task,
      status: task.status || 'backlog' // Статус по умолчанию
    });
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.#boardTasks.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
    }
  }

  deleteTask(taskId) {
    this.#boardTasks = this.#boardTasks.filter(task => task.id !== taskId);
  }

  clearTasks() {
    this.#boardTasks = [];
  }

  clearTasksByStatus(status) {
    this.#boardTasks = this.#boardTasks.filter(task => task.status !== status);
  }
}