export class TasksBoardPresenter {
  constructor({ container, initialTasks }) {
    this.container = container;
    this.taskModel = new TaskModel(initialTasks);
    this.taskboardComponent = new TaskboardComponent();
    this.tasklistComponent = new TasklistComponent();
  }

  init() {
    this.render();
  }

  render() {
    // Очищаем контейнер перед рендерингом
    this.container.innerHTML = '';
    
    // Рендерим основные компоненты
    this.container.append(this.taskboardComponent.element);
    this.taskboardComponent.element.append(this.tasklistComponent.element);

    // Рендерим задачи
    this.taskModel.tasks.forEach(task => {
      const taskComponent = new TaskComponent(task);
      this.tasklistComponent.element.append(taskComponent.element);
    });
  }
}