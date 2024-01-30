import React, { memo } from "react";

export const Hijo = memo(({ numero, incrementar }) => {
  console.log(" Renderizou o filho!!");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
