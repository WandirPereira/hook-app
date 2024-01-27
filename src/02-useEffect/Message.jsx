import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted!!");

    return () => {
      console.log("Menssage unmounted!!");
    };
  }, []);

  //   useEffect(() => {
  //     window.addEventListener("mousemove", (event) => {
  //       console.log(event.x, event.y);
  //     });
  //     // return () => {
  //     //   console.log("Message mounted!!");
  //     // };
  //   }, []);
  /**Quando a função é carregada, o evento window é criado.
   * Porém quando a função é encerrada, o evento continua.
   * É necessario terminar o evento */
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  /**Usando a constant onMouseMove porque temos que
   * ter a mesma referência de memória no add e no removeEventListerner */

  return (
    <>
      <h3>Usuário já existe!!</h3>
    </>
  );
};
