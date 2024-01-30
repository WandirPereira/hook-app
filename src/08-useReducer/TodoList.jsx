import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  return (
    <>
      <ul className="list-group mb-4">
        {todos.map((todo) => (
          /**TodoItem */
          <TodoItem todo={todo} key={todo.id} />
          /**Fim TodoItem */
        ))}
      </ul>
    </>
  );
};
