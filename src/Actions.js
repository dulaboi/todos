import { nanoid } from "nanoid";
import { storeTodos, retrieveTodos } from "./localStorage";

export const ACTIONS = {
  GET_TODOS: "GET_TODOS",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};

export function getTodos() {
  return retrieveTodos();
}

export function addTodo(todos, newTodo) {
  const newTodos = [...todos, { title: newTodo, id: nanoid() }];
  storeTodos(newTodos);
  return newTodos;
}

export function deleteTodo(todos, id) {
  const newTodos = todos.filter((t) => t.id !== id);
  console.log("todos", todos);
  console.log("newTodos", newTodos);
  storeTodos(newTodos);
  return newTodos;
}
