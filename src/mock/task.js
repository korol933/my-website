export const tasks = [
  {
    id: "1",
    title: "Изучить новый фреймворк",
    status: "backlog",
    priority: "medium",
    description: "Необходимо разобраться с основами нового фреймворка"
  },
  {
    id: "2",
    title: "Добавить тесты для компонентов",
    status: "backlog",
    priority: "high",
    description: "Написать unit-тесты для всех UI компонентов"
  },
  {
    id: "3",
    title: "Рефакторинг API сервиса",
    status: "backlog",
    priority: "low",
    description: "Улучшить структуру API endpoints"
  },
  {
    id: "4",
    title: "Изучить TypeScript",
    status: "inProgress",
    priority: "high",
    description: "Пройти курс по TypeScript"
  },
  {
    id: "5",
    title: "Изучить React Hooks",
    status: "inProgress",
    priority: "medium",
    description: "Разобраться с useContext и useReducer"
  },
  {
    id: "6",
    title: "Оптимизировать сборку webpack",
    status: "done",
    priority: "medium",
    description: "Уменьшить время сборки проекта"
  },
  {
    id: "7",
    title: "Настроить CI/CD",
    status: "done",
    priority: "high",
    description: "Автоматизировать процесс деплоя"
  },
  {
    id: "8",
    title: "Устаревшая задача",
    status: "trash",
    priority: "low",
    description: "Эту задачу нужно удалить"
  },
  {
    id: "9",
    title: "Нереализованная фича",
    status: "trash",
    priority: "medium",
    description: "Отложено на следующий спринт"
  }
];

export const statuses = {
  backlog: "Бэклог",
  inProgress: "В процессе",
  done: "Готово",
  trash: "Корзина"
};

export const priorities = {
  low: "Низкий",
  medium: "Средний",
  high: "Высокий"
};