import React from "react";

import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    handleNewTodo(newTodo);
    onResetForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Digite o novo TODO!"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};
