import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "Recoletar la piedra del alma",
//     done: false,
//   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodos = () => {
  // const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);
  // const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  /**Após a execução o estado atualizado é armazenado na variável --todos-- */
  /**Neste caso, a funçaõ todoReducer irá adicionar o valor de action.payload ao initialState */
  /**useReducer é uma alternativa ao useState para estados mais complexos. */

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
    // console.log(todos);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  useEffect(() => {
    // console.log(" Teste useEffect:", todos);
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  // const todosCount = () => {
  //   return todos.length;
  // };

  // const pendingTodosCount = () => {
  //   return todos.filter((todo) => !todo.done).length;
  // };

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
