import React, { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  //   const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log({ name, value });
    setFormState({ ...formState, [name]: value });
    //name é o nome do campo
    //e [name] permite atribuir um valor ao campo
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
