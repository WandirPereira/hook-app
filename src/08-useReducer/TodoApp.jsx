import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        {/* TodoApp {todosCount()}, <small>Pendentes: {pendingTodosCount()}</small> */}
        TodoApp {todosCount}, <small>Pendentes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={handleToggleTodo}
          />
          {/* onDeleteTodo={(id) => handleDeleteTodo(id)} */}
          {/**Mesmo que onDeleteTodo={handleDeleteTodo} */}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={(todo) => handleNewTodo(todo)} />
          {/**Mesmo que handleNewTodo={handleNewTodo} */}
        </div>
      </div>
    </>
  );
};
