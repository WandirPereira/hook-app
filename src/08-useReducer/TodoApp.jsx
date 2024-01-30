import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recoletar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: "Recoletar la piedra del vida",
    done: false,
  },
  {
    id: new Date().getTime() + 200,
    description: "Recoletar la piedra del tempo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  // console.log(todos);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatchTodo(action);
    console.log(todos);
  };

  return (
    <>
      <h1>
        TodoAppn (10), <small>Pendentes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/**TodoAdd onNewTodo(todo) */}
          {/**{id: new Date()..., description:'', done:false} */}
          <TodoAdd handleNewTodo={(todo) => handleNewTodo(todo)} />
          {/**Mesmo que handleNewTodo={handleNewTodo} */}
          {/**Fim TodoAdd */}
        </div>
      </div>
    </>
  );
};
