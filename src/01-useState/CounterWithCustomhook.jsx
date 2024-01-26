import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomhook = () => {
  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>Counter with Hook: {counter} </h1>
      <hr />
      {/* <button className="btn btn-primary" onClick={increment}> */}
      {/* <button className="btn btn-primary" onClick={(event) => increment(event)}> */}
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};