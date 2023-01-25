const todosKey = "todos-84927";

export function retrieveTodos() {
  const todos = localStorage.getItem(todosKey);
  return JSON.parse(todos);
}

export function storeTodos(todos) {
  localStorage.setItem(todosKey, JSON.stringify(todos));
}
