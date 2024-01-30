import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Dentro de iteration number ...");
  }
  return `${iterationNumber} iterações concluídas!!!`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(50000);
  const [show, setShow] = useState(true);
  console.log("Componente MemoHook redesenhado!!!");

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  // console.log(memorizedValue);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      {/* <h4>{heavyStuff(counter)}</h4> */}
      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
