function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}

function render(component, container) {
  if (!container) return; // Единственная необходимая проверка
  container.append(component.element);
}

export { createElement, render };