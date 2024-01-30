import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  console.log("Component CallbackHook redesenhado!!!");

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  console.log(incrementFather);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
