import { tasks } from '../mock/task.js';

export default class TasksModel {
  #tasks = [...tasks]; 

  get tasks() {
    return this.#tasks;
  }

  getTasksByStatus(status) {
    return this.#tasks.filter(task => task.status === status);
  }

  addTask(newTask) {
    this.#tasks = [...this.#tasks, newTask];
    return this.#tasks;
  }

  updateTask(updatedTask) {
    this.#tasks = this.#tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    return this.#tasks;
  }

  deleteTask(taskId) {
    this.#tasks = this.#tasks.filter(task => task.id !== taskId);
    return this.#tasks;
  }
}