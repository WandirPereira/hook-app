import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  // export const TodoItem = ({ todo }) => {
  //console.log(() => onDeleteTodo(todo.id));
  // console.log(onDeleteTodo(todo.id));
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      onClick={() => onToggleTodo(todo.id)}
    >
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
        ---{todo.id}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
      {/**Atençaõ para a função onDeleteTodo. Não recebe parâmetro, mas devolve
      parâmetro!! */}
    </li>
  );
};
