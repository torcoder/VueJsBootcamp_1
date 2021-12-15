const todoText = document.querySelector('#todoText');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

addBtn.addEventListener('click', () => {
  const listEl = document.createElement('li');
  listEl.textContent = todoText.value;
  todoList.append(listEl);
  todoText.value = '';
});
