import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  // export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => (
        /**TodoItem */
        <TodoItem
          todo={todo}
          key={todo.id}
          /**ATenção: o key tem de ficar junto com o map ??? */
          onDeleteTodo={(todo) => onDeleteTodo(todo)}
          onToggleTodo={onToggleTodo}
          /**Mesmo que  onDeleteTodo={onDeleteTodo}*/
        />
        /**Fim TodoItem */
      ))}
    </ul>
  );
};
