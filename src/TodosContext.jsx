import { useEffect, useReducer, useContext, createContext } from "react";
import { ACTIONS } from "./Actions";
import { initialState, todosReducer } from "./todosReducer";

const TodosContext = createContext(initialState());

export const useTodos = () => useContext(TodosContext);

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialState());

  function addTodo(todo) {
    const type = ACTIONS.ADD_TODO;
    dispatch({ type, payload: todo });
  }

  function getTodos() {
    const type = ACTIONS.GET_TODOS;
    dispatch({ type });
  }

  function deleteTodo(id) {
    const type = ACTIONS.DELETE_TODO;
    dispatch({ type, payload: id });
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
