import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handlerClick = () => {
    //   document.querySelector("input").select();
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        placeholder="1 - Informe o seu nome!"
        className="form-control"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="2 - Informe o seu nome!"
        className="form-control mt-2"
      />
      <input
        type="text"
        placeholder="3 - Informe o seu nome!"
        className="form-control mt-2"
      />
      <input
        type="text"
        placeholder="4 - Informe o seu nome!"
        className="form-control mt-2"
      />

      <button className="btn btn-primary mt-2" onClick={handlerClick}>
        Set Focus
      </button>
    </>
  );
};
