import { ACTIONS, addTodo, deleteTodo, getTodos } from "./Actions";

export function initialState() {
  const todos = getTodos();
  console.log("Initilizing State", todos);
  return todos ? todos : [];
}

export function todosReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.GET_TODOS:
      return getTodos();
    case ACTIONS.ADD_TODO:
      return addTodo(state, payload);
    case ACTIONS.DELETE_TODO:
      return deleteTodo(state, payload);
    default:
      throw new Error(`Type ${type} does not exist`);
  }
}
