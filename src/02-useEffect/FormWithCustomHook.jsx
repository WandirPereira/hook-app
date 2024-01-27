import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../../src/hooks/useForm";

export const FormWithCustomHook = () => {
  /*A propriedade de nome name recebe o valor (value). Desta forma trata qualquer campo*/
  const { formState, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  console.log("formState: ", formState);
  // const { username, email, password } = formState;

  return (
    <>
      <hr />
      <hr />
      <h1>Formulário com Custom Hook Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Senha"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <hr />
    </>
  );
};
