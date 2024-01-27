import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "wpfx@gmail.com",
  });

  const { username, email } = formState;

  //   const onInputChange = (event) => {
  //     console.log(event.target.name);
  //     console.log(event.target.value);
  //   };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
    setFormState({ ...formState, [name]: value });
  };
  /*A propriedade de nome name recebe o valor (value). Desta forma trata qualquer campo*/

  useEffect(() => {
    console.log("useEffect called!!");
  }, []);
  /*se colocamos o segundo argumento [] vazio, só dispara ao carregar a função.*/

  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);
  /**Criar um useEffect por cada objeto que será monitorado! */

  useEffect(() => {
    console.log("email changed!");
  }, [email]);

  return (
    <>
      <hr />
      <hr />
      <h1>Simple Form</h1>
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
        placeholder="wpf@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <hr />
      {username === "strider2" && <Message />}
    </>
  );
};
